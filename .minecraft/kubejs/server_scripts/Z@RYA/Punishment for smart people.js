// Пока в Крае жив дракон (первый или повторно призванный),
// выход за радиус главного острова наказывается бессмертными вексами,
// а через timeoutSeconds — взрывом и смертью.

let za_EndPunishment = {
	radius: 300,           // горизонтальный радиус от (0,0) Края
	timeoutSeconds: 60,    // время на возврат, по умолчанию 1 минута
	maxRadius: 1000,       // за этим радиусом времени на возврат остаётся не больше maxRadiusSeconds
	maxRadiusSeconds: 5,
	punisherCount: 7,      // сколько вредин на игрока
	punisherId: 'minecraft:vex',
	punisherDamage: 12,    // урон вредин (у ванильного векса 4)
	teleportDistance: 20,  // если вексы отстали дальше — телепорт к игроку
	// снимаются за радиусом: с ними игрок переживёт взрыв или вексы его не тронут
	protectiveEffects: ['tombstone:ghostly_shape', 'tombstone:unstable_intangibility', 'tombstone:diversion'],
	tag: 'za_EndPunisher',
	timerKey: 'za_EndPunTime',

	isEnd: ((level) => {
		return level != null && level.getDimension().toString() == 'minecraft:the_end';
	}),

	// getDragons() не подходит: вдали от острова арена выгружается вместе с драконом,
	// поэтому смотрим состояние боя, которое хранится в данных мира
	isDragonAlive: ((level) => {
		if (level == null) {return false};
		let fight = level.dragonFight();
		if (fight == null) {return false};
		return !fight.saveData().getBoolean('DragonKilled');
	}),

	playerUuid: ((player) => {
		return player.getId().toString();
	}),

	resetTimer: ((player) => {
		if (player == null) {return};
		player.getPersistentData().putInt(za_EndPunishment.timerKey, 0);
	}),

	getPunishers: ((level, playerUuid) => {
		if (level == null) {return []};
		return level.getEntities().filter(entity => {
			if (!entity.getPersistentData().contains(za_EndPunishment.tag)) {return false};
			if (playerUuid == null) {return true};
			return entity.getPersistentData().getString(za_EndPunishment.tag) == playerUuid;
		});
	}),

	discardPunishers: ((level, playerUuid) => {
		za_EndPunishment.getPunishers(level, playerUuid).forEach(entity => {
			entity.remove();
		});
	}),

	stopPunishing: ((player, level) => {
		za_EndPunishment.resetTimer(player);
		za_EndPunishment.discardPunishers(level, za_EndPunishment.playerUuid(player));
	}),

	spawnOffset: (() => {
		return {
			x: Math.floor(Math.random() * 7) - 3,
			y: Math.floor(Math.random() * 3) + 1,
			z: Math.floor(Math.random() * 7) - 3
		};
	}),

	setDamage: ((nbt) => {
		let attr = {Base: za_EndPunishment.punisherDamage, Name: 'minecraft:generic.attack_damage'};
		if (nbt.contains('Attributes')) {
			nbt.Attributes.add(nbt.Attributes.size(), attr);
		} else {
			nbt.Attributes = [attr];
		}
	}),

	spawnPunishers: ((level, player, count) => {
		let uuid = za_EndPunishment.playerUuid(player);
		for (let i = 0; i < count; i++) {
			let vex = level.createEntity(za_EndPunishment.punisherId);
			if (vex == null) {continue};
			let offset = za_EndPunishment.spawnOffset();
			vex.setPosition(player.getX() + offset.x, player.getY() + offset.y, player.getZ() + offset.z);
			let nbt = vex.getFullNBT();
			nbt.Invulnerable = true;
			nbt.PersistenceRequired = true;
			nbt.LifeTicks = 72000;
			za_EndPunishment.setDamage(nbt);
			vex.setFullNBT(nbt);
			vex.getPersistentData().putString(za_EndPunishment.tag, uuid);
			vex.spawn();
			vex.setRevengeTarget(player);
		}
	}),

	keepPunishersOnPlayer: ((level, player) => {
		let uuid = za_EndPunishment.playerUuid(player);
		let alive = 0;
		za_EndPunishment.getPunishers(level, uuid).forEach(entity => {
			alive++;
			if (entity.getDistance(player.getX(), player.getY(), player.getZ()) > za_EndPunishment.teleportDistance) {
				let offset = za_EndPunishment.spawnOffset();
				entity.setPosition(player.getX() + offset.x, player.getY() + offset.y, player.getZ() + offset.z);
			}
			entity.setRevengeTarget(player);
		});
		if (alive < za_EndPunishment.punisherCount) {
			za_EndPunishment.spawnPunishers(level, player, za_EndPunishment.punisherCount - alive);
		}
	}),

	showWarning: ((server, player, time) => {
		let playerName = player.toString();
		if (time <= 4) {
			let subtitle = '{"text":"Вернись на остров...","color":"red"}';
			let title = '{"text":""}';
			server.runCommandSilent(`title "${playerName}" times 5 20 15`);
			server.runCommandSilent(`title "${playerName}" subtitle ${subtitle}`);
			server.runCommandSilent(`title "${playerName}" title ${title}`);
		} else {
			let remaining = za_EndPunishment.timeoutSeconds - time;
			let subtitle = `{"text":"Станет плохо через ${remaining}","color":"blue"}`;
			let title = '{"text":"Вернись на остров...","color":"red"}';
			server.runCommandSilent(`title "${playerName}" times 5 35 5`);
			server.runCommandSilent(`title "${playerName}" subtitle ${subtitle}`);
			server.runCommandSilent(`title "${playerName}" title ${title}`);
		}
	}),

	removeProtectiveEffects: ((server, player) => {
		za_EndPunishment.protectiveEffects.forEach(effect => {
			server.runCommandSilent(`effect clear "${player.toString()}" ${effect}`);
		});
	}),

	explodePlayer: ((level, player) => {
		level.createExplosion(player.getX(), player.getY(), player.getZ())
			.strength(2)
			.damagesTerrain(false)
			.explode();
		if (player.isAlive()) {
			player.kill();
		}
		level.getServer().tell(`§4Смерд §6${player.toString()} §4был наказан за свою трусость`);
		za_EndPunishment.stopPunishing(player, level);
	})
}

onEvent('player.tick', event => {
	if (event.getPlayer().getTicksExisted() % 20 != 0) {return};

	let player = event.getPlayer();
	if (player.isFake()
		|| player.isCreativeMode()
		|| player.isSpectator()
		|| !player.isAlive()) {
		if (player.getPersistentData().getInt(za_EndPunishment.timerKey) > 0) {
			za_EndPunishment.stopPunishing(player, event.server.getLevel('minecraft:the_end'));
		}
		return;
	}

	let level = event.getLevel();
	if (!za_EndPunishment.isEnd(level) || !za_EndPunishment.isDragonAlive(level)) {
		if (player.getPersistentData().getInt(za_EndPunishment.timerKey) > 0) {
			za_EndPunishment.stopPunishing(player, event.server.getLevel('minecraft:the_end'));
		}
		return;
	}

	let dist = Math.sqrt(player.getX() * player.getX() + player.getZ() * player.getZ());
	if (dist <= za_EndPunishment.radius) {
		if (player.getPersistentData().getInt(za_EndPunishment.timerKey) > 0) {
			za_EndPunishment.stopPunishing(player, level);
		}
		return;
	}

	let time = player.getPersistentData().getInt(za_EndPunishment.timerKey) + 1;
	if (dist > za_EndPunishment.maxRadius) {
		time = Math.max(time, za_EndPunishment.timeoutSeconds - za_EndPunishment.maxRadiusSeconds);
	}
	player.getPersistentData().putInt(za_EndPunishment.timerKey, time);
	za_EndPunishment.removeProtectiveEffects(event.server, player);

	if (time >= za_EndPunishment.timeoutSeconds) {
		za_EndPunishment.explodePlayer(level, player);
		return;
	}

	za_EndPunishment.keepPunishersOnPlayer(level, player);
	za_EndPunishment.showWarning(event.server, player, time);
})

onEvent('player.respawn', event => {
	za_EndPunishment.stopPunishing(event.getPlayer(), event.server.getLevel('minecraft:the_end'));
})

onEvent('player.logged_out', event => {
	let player = event.getPlayer();
	if (player == null) {return};
	za_EndPunishment.stopPunishing(player, event.server.getLevel('minecraft:the_end'));
})
