onEvent('recipes', e => {
	//////////// Свиток возврата ////////////
	modifyShapedID(e, 'waystones:return_scroll', 'waystones:return_scroll', 3, [
		'WIW',
		'PPP',
		'WGW'], {
		W:'waystones:warp_dust',
		P:'minecraft:paper',
		I:'minecraft:ink_sac',
		G:'minecraft:gold_nugget'
	})
	//////////// Свиток привязки ////////////
	modifyShapedID(e, 'waystones:bound_scroll', 'waystones:bound_scroll', 1, [
		' E ',
		'DSD'], {
		S:Item.of('waystones:return_scroll').ignoreNBT(),
		D:'apotheosis:gem_dust',
		E:'minecraft:ender_pearl'
	})
	//////////// Свиток перемещения ////////////
	modifyShapedID(e, 'waystones:warp_scroll', 'waystones:warp_scroll', 1, [
		' I ',
		'MSM'], {
		S:Item.of('waystones:bound_scroll').ignoreNBT(),
		M:'apotheosis:rare_material',
		I:'minecraft:glow_ink_sac'
	})
	//////////// Камень перемещения ////////////
	modifyShapedID(
		e, //Event
		'waystones:warp_stone', //Result
		'waystones:warp_stone', //Craft ID
		1, //Count
		[
			'EFE',
			'PMP',
			'PDP'
		], //Pattern
		{
			M:'create:precision_mechanism',
			F:'minecraft:purple_dye',
			P:'minecraft:ender_pearl',
			D:'minecraft:diamond',
			E:'minecraft:emerald'
		} //Ingredients
	)
})

onEvent("lootjs", (event) => {
	event
		.addLootTypeModifier(LootType.CHEST)
		.randomChance(0.02)
		.addLoot('waystones:return_scroll')
		.randomChance(0.5)
		.addLoot('waystones:return_scroll')
		.randomChance(0.5)
		.addLoot('waystones:return_scroll')
	event
		.addLootTypeModifier(LootType.CHEST)
		.not((n) => {
			n.anyStructure(villageStructures, false)
		})
		.randomChance(0.005)
		.addWeightedLoot([
			Item.of('waystones:bound_scroll').withChance(20),
			Item.of('waystones:warp_scroll').withChance(10),
			Item.of('waystones:warp_stone').withChance(1)
		])
})