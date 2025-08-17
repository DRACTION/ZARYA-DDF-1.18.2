onEvent("morejs.villager.trades", (event) => {
	event.removeModdedTrades(['advancedperipherals:computer_scientist'],1);
	event.removeModdedTrades(['advancedperipherals:computer_scientist'],2);
	event.removeModdedTrades(['advancedperipherals:computer_scientist'],3);
	event.removeModdedTrades(['advancedperipherals:computer_scientist'],4);
	event.removeModdedTrades(['advancedperipherals:computer_scientist'],5);
	
	event.addTrade('advancedperipherals:computer_scientist', 1,
		['16x minecraft:emerald', '6x minecraft:iron_ingot'], 'advancedperipherals:peripheral_casing')
		.maxUses(4)
		.villagerExperience(4)
	event.addTrade('advancedperipherals:computer_scientist', 1,
		['8x minecraft:emerald'], 'computercraft:speaker')
		.maxUses(2)
		.villagerExperience(4)
	event.addTrade('advancedperipherals:computer_scientist', 1,
		['8x minecraft:emerald'], 'computercraft:disk_drive')
		.maxUses(2)
		.villagerExperience(4)
	event.addTrade('advancedperipherals:computer_scientist', 1,
		['8x minecraft:emerald'], 'computercraft:printer')
		.maxUses(2)
		.villagerExperience(4)
	event.addTrade('advancedperipherals:computer_scientist', 1,
		['8x minecraft:emerald'], 'computercraft:wired_modem_full')
		.maxUses(2)
		.villagerExperience(4)
	event.addTrade('advancedperipherals:computer_scientist', 1,
		['8x minecraft:amethyst_shard'], 'minecraft:emerald')
		.maxUses(7)
		.villagerExperience(2)

	event.addTrade('advancedperipherals:computer_scientist', 2,
		['16x minecraft:emerald'], 'computercraft:monitor_normal')
		.maxUses(4)
		.villagerExperience(8)
	event.addTrade('advancedperipherals:computer_scientist', 2,
		['32x minecraft:emerald'], 'computercraft:monitor_advanced')
		.maxUses(4)
		.villagerExperience(8)
	event.addTrade('advancedperipherals:computer_scientist', 2,
		['32x minecraft:emerald', '6x minecraft:iron_ingot'], 'advancedperipherals:block_reader')
		.maxUses(2)
		.villagerExperience(8)
	event.addTrade('advancedperipherals:computer_scientist', 2,
		['32x minecraft:emerald', '6x minecraft:iron_ingot'], 'advancedperipherals:inventory_manager')
		.maxUses(2)
		.villagerExperience(8)
	event.addTrade('advancedperipherals:computer_scientist', 2,
		['32x minecraft:emerald', '6x minecraft:iron_ingot'], 'advancedperipherals:chat_box')
		.maxUses(2)
		.villagerExperience(8)
	event.addTrade('advancedperipherals:computer_scientist', 2,
		['advancedperipherals:peripheral_casing'], '12x minecraft:emerald')
		.maxUses(8)
		.villagerExperience(4)

	event.addTrade('advancedperipherals:computer_scientist', 3,
		['64x minecraft:emerald'], 'advancedperipherals:redstone_integrator')
		.maxUses(2)
		.villagerExperience(12)
	event.addTrade('advancedperipherals:computer_scientist', 3,
		['64x minecraft:emerald', 'create:precision_mechanism'], 'advancedperipherals:ar_controller')
		.maxUses(2)
		.villagerExperience(12)
	event.addTrade('advancedperipherals:computer_scientist', 3,
		['64x minecraft:emerald', 'create:precision_mechanism'], 'advancedperipherals:ar_controller')
		.maxUses(2)
		.villagerExperience(12)
	event.addTrade('advancedperipherals:computer_scientist', 3,
		['32x minecraft:emerald', '6x minecraft:iron_ingot'], 'advancedperipherals:energy_detector')
		.maxUses(2)
		.villagerExperience(10)
	event.addTrade('advancedperipherals:computer_scientist', 3,
		['32x minecraft:emerald', 'computercraft:wired_modem_full'], 'computercraft:wireless_modem_normal')
		.maxUses(2)
		.villagerExperience(12)
	event.addTrade('advancedperipherals:computer_scientist', 3,
		['16x minecraft:emerald_block', 'naturescompass:naturescompass'], 'advancedperipherals:environment_detector')
		.maxUses(1)
		.villagerExperience(18)

	event.addTrade('advancedperipherals:computer_scientist', 4,
		['32x minecraft:emerald_block', 'create:precision_mechanism'], 'computercraft:computer_normal')
		.maxUses(2)
		.villagerExperience(20)
	event.addTrade('advancedperipherals:computer_scientist', 4,
		['40x minecraft:emerald_block', 'create:precision_mechanism'], 'computercraft:computer_advanced')
		.maxUses(2)
		.villagerExperience(20)
	event.addTrade('advancedperipherals:computer_scientist', 4,
		['32x minecraft:emerald', 'warden_and_sculk:echo_shard'], 'computercraft:wireless_modem_advanced')
		.maxUses(2)
		.villagerExperience(20)
	event.addTrade('advancedperipherals:computer_scientist', 4,
		['16x minecraft:emerald_block', '3x create:precision_mechanism'], 'advancedperipherals:geo_scanner')
		.maxUses(1)
		.villagerExperience(20)
	event.addTrade('advancedperipherals:computer_scientist', 4,
		['64x minecraft:emerald', 'apotheosis:vial_of_expulsion'], 'advancedperipherals:weak_automata_core')
		.maxUses(1)
		.villagerExperience(20)

	event.addTrade('advancedperipherals:computer_scientist', 5,
		['64x minecraft:emerald_block', 'irons_spellbooks:ender_upgrade_orb'], 'advancedperipherals:chunk_controller')
		.maxUses(1)
		.villagerExperience(30)
	event.addTrade('advancedperipherals:computer_scientist', 5,
		['46x minecraft:emerald_block', 'create:precision_mechanism'], 'computercraft:turtle_normal')
		.maxUses(1)
		.villagerExperience(30)
	event.addTrade('advancedperipherals:computer_scientist', 5,
		['64x minecraft:emerald_block', 'create:precision_mechanism'], 'computercraft:turtle_advanced')
		.maxUses(1)
		.villagerExperience(30)
})

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