onEvent("morejs.wanderer.trades", (event) => {
	/*
	 * Will remove all vanilla trades.
	 */
	// event.removeVanillaTrades(1)
	// event.removeVanillaTrades(2)

	/*
	 * Will remove all mod trades.
	 */
	// event.removeModdedTrades(1)
	// event.removeModdedTrades(2)

	// Удаляем лёгкую покупку черепов
	event.removeTrades({
		firstItem: 'minecraft:emerald',
		secondItem: '',
		outputItem: 'minecraft:wither_skeleton_skull'
	})

	// Торговец приобретает товар (как в 1.20.2 после ребаланса)
	event.addTrade(1, Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), '1x minecraft:emerald').maxUses(1)
	event.addTrade(1, 'minecraft:water_bucket', '2x minecraft:emerald').maxUses(1)
	event.addTrade(1, 'minecraft:milk_bucket', '3x minecraft:emerald').maxUses(1)
	event.addTrade(1, 'minecraft:fermented_spider_eye', '4x minecraft:emerald').maxUses(1)
	event.addTrade(1, '4x minecraft:baked_potato', '1x minecraft:emerald').maxUses(1)
	event.addTrade(1, 'minecraft:hay_block', '1x minecraft:emerald').maxUses(1)
	
	// Предложения взяты с мода, но так как исходники не доступны, то переписал их в скрипт с учётом комментариев
	// https://www.curseforge.com/minecraft/mc-mods/more-wandering-trades
	event.addTrade(1, '20x minecraft:emerald', 'minecraft:skeleton_skull').maxUses(5)
	event.addTrade(1, '20x minecraft:emerald', 'minecraft:zombie_head').maxUses(5)
	event.addTrade(1, '20x minecraft:emerald', 'minecraft:creeper_head').maxUses(5)
	event.addTrade(1, '5x minecraft:emerald', 'minecraft:turtle_egg').maxUses(4)
	event.addTrade(1, '2x minecraft:emerald', 'minecraft:honey_bottle').maxUses(10)
	event.addTrade(1, '10x minecraft:emerald', 'minecraft:experience_bottle').maxUses(5)
	event.addTrade(1, '1x minecraft:emerald', 'minecraft:honeycomb').maxUses(12)
	event.addTrade(1, '8x minecraft:emerald', 'minecraft:golden_apple').maxUses(12)
	event.addTrade(1, '1x minecraft:emerald', 'minecraft:feather').maxUses(32)

	event.addTrade(2, '64x minecraft:emerald', 'minecraft:totem_of_undying').maxUses(1)
	event.addTrade(2, '32x minecraft:emerald', 'minecraft:wither_skeleton_skull').maxUses(3)

	///////// Обшивка для периферийного устройства /////////
	event.removeTrades({
		firstItem: 'minecraft:emerald',
		secondItem: '',
		outputItem: 'advancedperipherals:peripheral_casing'
	})
	event.addTrade(1, '25x minecraft:emerald', 'advancedperipherals:peripheral_casing').maxUses(2)

});