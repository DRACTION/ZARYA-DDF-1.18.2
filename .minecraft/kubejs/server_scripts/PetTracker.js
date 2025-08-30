onEvent('recipes', e => {
	e.remove({id: 'pettracker:tracker'})

	let trans = 'minecraft:writable_book'
	e.recipes.create.sequenced_assembly('pettracker:tracker',
		trans,
		[
			e.recipes.createDeploying(trans, [trans, 'minecraft:ender_pearl']),
			e.recipes.createDeploying(trans, [trans, 'apotheosis:uncommon_material']),
			e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:uncommon_ink']),
			e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:experience', 50)])
		]).transitionalItem(trans).loops(1)
})

onEvent("lootjs", (event) => {
	event
		.addLootTypeModifier(LootType.CHEST)
		.anyStructure(villageStructures, false)
		.randomChance(0.005)
		.addLoot('pettracker:tracker')
})
