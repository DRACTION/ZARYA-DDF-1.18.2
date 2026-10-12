let untiringMovementOf = null

global.zaryaRefillUntiringStamina = (entity) => {
	if (!entity || !entity.isPlayer()) {
		return
	}
	try {
		let player = entity.minecraftEntity
		if (untiringMovementOf == null) {
			// Класс-фильтр KubeJS запрещает java('tictim.paraglider...'), поэтому класс берётся через загрузчик классов игры
			let methods = player.getClass().getClassLoader()
				.loadClass('tictim.paraglider.capabilities.PlayerMovement').getMethods()
			for (let i = 0; i < methods.length; i++) {
				if (methods[i].getName() == 'of') {
					untiringMovementOf = methods[i]
					break
				}
			}
		}
		let m = untiringMovementOf.invoke(null, [player])
		if (m == null) {
			return
		}
		m.setDepleted(false)
		m.setStamina(m.getDoubleMaxStamina())
		m.setRecoveryDelay(0)
		if (!player.level.isClientSide) {
			m.movementNeedsSync = true
		}
	} catch (err) {
		if (!global.zaryaUntiringErrorLogged) {
			global.zaryaUntiringErrorLogged = true
			console.error(`[Z@RYA] Неутомимость: не удалось заполнить выносливость Paraglider: ${err}`)
		}
	}
}

onEvent('mob_effect.registry', event => {
	event
		.create('untiring')
		.beneficial()
		.color('#48C5C5')
		.effectTick((entity, lvl) => {
			global.zaryaRefillUntiringStamina(entity)
		})
})

let registerUntiringDrink = (event, id, duration) => {
	event
		.create(id)
		.texture(`zarya:item/${id}`)
		.maxStackSize(16)
		.useAnimation('drink')
		.useDuration(itemstack => 32)
		.food(food => {
			food.hunger(0)
			food.saturation(0)
			food.alwaysEdible()
			food.effect('kubejs:untiring', duration, 0, 1.0)
		})
		.finishUsing((itemstack, level, entity) => {
			// finishUsing заменяет обычное поедание целиком, поэтому eat() нужен для эффекта из food.effect и траты предмета
			let stack = itemstack.getItemStack()
			entity.minecraftLivingEntity.eat(level.minecraftLevel, stack)
			if (stack.isEmpty()) {
				return Item.of('minecraft:glass_bottle')
			}
			if (entity.isPlayer() && !entity.isCreativeMode()) {
				entity.give('minecraft:glass_bottle')
			}
			return itemstack
		})
}

onEvent('item.registry', event => {
	event
		.create('untiring_root')
		.texture('zarya:item/untiring_root')
		.unstackable()
		.food(food => {
			food.hunger(1)
			food.saturation(0.1)
			food.alwaysEdible()
			food.fastToEat()
			food.effect('kubejs:untiring', 40, 0, 1.0)
		})

	registerUntiringDrink(event, 'untiring_brew', 160)
	registerUntiringDrink(event, 'strong_untiring_brew', 400)
	registerUntiringDrink(event, 'long_untiring_brew', 2400)
})
