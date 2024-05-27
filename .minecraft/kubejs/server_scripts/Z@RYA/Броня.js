onEvent('recipes', e => {

	e.replaceInput({id: 'minecraft:iron_helmet'}, 'minecraft:iron_ingot', '#forge:plates/iron')
	e.replaceInput({id: 'minecraft:iron_chestplate'}, 'minecraft:iron_ingot', '#forge:plates/iron')
	e.replaceInput({id: 'minecraft:iron_leggings'}, 'minecraft:iron_ingot', '#forge:plates/iron')
	e.replaceInput({id: 'minecraft:iron_boots'}, 'minecraft:iron_ingot', '#forge:plates/gold')
	e.replaceInput({id: 'minecraft:golden_helmet'}, 'minecraft:gold_ingot', '#forge:plates/gold')
	e.replaceInput({id: 'minecraft:golden_chestplate'}, 'minecraft:gold_ingot', '#forge:plates/gold')
	e.replaceInput({id: 'minecraft:golden_leggings'}, 'minecraft:gold_ingot', '#forge:plates/gold')
	e.replaceInput({id: 'minecraft:golden_boots'}, 'minecraft:gold_ingot', '#forge:plates/gold')
	let materials = {
		P: '#forge:plates/obsidian',
		D: '#forge:dusts/diamond',
		X: Item.of('minecraft:iron_helmet').ignoreNBT()
	}
	modifyShapedID(e, 'minecraft:diamond_helmet', 'minecraft:diamond_helmet', 1,
		[
			' D ',
			'DPD',
			'PXP'
		], materials
	)
	materials.X = Item.of('minecraft:iron_chestplate').ignoreNBT()
	modifyShapedID(e, 'minecraft:diamond_chestplate', 'minecraft:diamond_chestplate', 1,
		[
			'PDP',
			'DXD',
			'DPD'
		], materials
	)
	materials.X = Item.of('minecraft:iron_leggings').ignoreNBT()
	modifyShapedID(e, 'minecraft:diamond_leggings', 'minecraft:diamond_leggings', 1,
		[
			'DXD',
			'PXP',
			'PDP'
		], materials
	)
	materials.X = Item.of('minecraft:iron_boots').ignoreNBT()
	modifyShapedID(e, 'minecraft:diamond_boots', 'minecraft:diamond_boots', 1,
		[
			'D D',
			'PXP'
		], materials
	)

	materials = {
		L: '#forge:leather',
		C: '#supplementaries:chains'
	}
	e.shaped('minecraft:chainmail_helmet',
		[
			'LCL',
			'C C'
		], materials
	)
	e.shaped('minecraft:chainmail_chestplate',
		[
			'L L',
			'CCC',
			'LCL'
		], materials
	)
	e.shaped('minecraft:chainmail_leggings',
		[
			'LCL',
			'C C',
			'C C'
		], materials
	)
	e.shaped('minecraft:chainmail_boots',
		[
			'L L',
			'C C'
		], materials
	)

	e.replaceInput({id: 'minecraft:netherite_helmet_smithing'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
	e.replaceInput({id: 'minecraft:netherite_chestplate_smithing'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
	e.replaceInput({id: 'minecraft:netherite_leggings_smithing'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
	e.replaceInput({id: 'minecraft:netherite_boots_smithing'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
})
