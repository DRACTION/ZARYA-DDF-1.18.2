onEvent('recipes', e => {

	e.replaceInput({id: 'minecraft:iron_helmet'}, 'minecraft:iron_ingot', '#forge:plates/iron')
	e.replaceInput({id: 'minecraft:iron_chestplate'}, 'minecraft:iron_ingot', '#forge:plates/iron')
	e.replaceInput({id: 'minecraft:iron_leggings'}, 'minecraft:iron_ingot', '#forge:plates/iron')
	e.replaceInput({id: 'minecraft:iron_boots'}, 'minecraft:iron_ingot', '#forge:plates/iron')
	e.replaceInput({id: 'minecraft:golden_helmet'}, 'minecraft:gold_ingot', '#forge:plates/gold')
	e.replaceInput({id: 'minecraft:golden_chestplate'}, 'minecraft:gold_ingot', '#forge:plates/gold')
	e.replaceInput({id: 'minecraft:golden_leggings'}, 'minecraft:gold_ingot', '#forge:plates/gold')
	e.replaceInput({id: 'minecraft:golden_boots'}, 'minecraft:gold_ingot', '#forge:plates/gold')
	e.replaceInput({id: 'minecraft:diamond_helmet'}, 'minecraft:diamond', 'kubejs:sturdy_diamond_sheet')
	e.replaceInput({id: 'minecraft:diamond_chestplate'}, 'minecraft:diamond', 'kubejs:sturdy_diamond_sheet')
	e.replaceInput({id: 'minecraft:diamond_leggings'}, 'minecraft:diamond', 'kubejs:sturdy_diamond_sheet')
	e.replaceInput({id: 'minecraft:diamond_boots'}, 'minecraft:diamond', 'kubejs:sturdy_diamond_sheet')

	let materials = {
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
