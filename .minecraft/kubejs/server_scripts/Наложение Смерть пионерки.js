onEvent('item.food_eaten', e => {
	// KubeJS\common\src\main\java\dev\latvian\mods\kubejs\item\ItemFoodEatenEventJS.java

	if (e.player.isPlayer()
		&& !e.player.isCreativeMode()
		&& e.item.getId() == 'minecraft:suspicious_stew'
		&& Math.random() < 0.1) {

		let randomLength = Math.random();

		e.server.tell(`${e.player.toString()} cловил Смерть Пионерки!!!`);
		e.getEntity().setOnFire(3);

		e.server.runCommandSilent(`effect give @p minecraft:nausea 720 9`);

		if (!e.player.potionEffects.isActive('minecraft:resistance')) {
			e.server.runCommandSilent(`effect give @p minecraft:resistance ${Math.floor(randomLength*7+1)*60}`);
		}

		e.server.runCommandSilent(`effect give @p minecraft:speed ${Math.floor(randomLength*5+1)*60} 5`);
		
		if (!e.player.potionEffects.isActive('minecraft:strength')) {
			e.server.runCommandSilent(`effect give @p minecraft:strength ${Math.floor(randomLength*5+1)*60} 1`);
		}

	}

})
