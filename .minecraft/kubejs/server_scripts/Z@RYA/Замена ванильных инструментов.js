onEvent('recipes', e => {

	let materials = {
		R: 'supplementaries:rope',
		S: '#forge:rods/wooden'	
	}
	removeRecipeByOutput(e, [materials.R])
	e.shapeless(materials.R, ['3x farmersdelight:straw']).id(`zarya:shapeless/${materials.R.replace(':', '/')}_from_straw`)
	e.shapeless(materials.R, ['3x minecraft:string']).id(`zarya:shapeless/${materials.R.replace(':', '/')}_from_string`)


	let standartTemplates = {
		shovel: [
			' XX',
			'RSX',
			'S  '
		],
		sword: [
			'  X',
			'RX ',
			'S  '
		],
		hoe: [
			'XXR',
			' S ',
			'S  '
		],
		pickaxe: [
			'XXR',
			' SX',
			'S X'
		],
		axe: [
			'XXR',
			'XS ',
			'S  '
		]
	}

	let standardInToOut = [
		{material: '#forge:plates/iron', ID: 'minecraft:iron_'},
		{material: '#forge:plates/gold', ID: 'minecraft:golden_'},
		{material: 'minecraft:flint', ID: 'minecraft:wooden_'},
		{material: '#forge:plates/copper', ID: 'minecraft:stone_'},
		{material: 'kubejs:sturdy_diamond_sheet', ID: 'minecraft:diamond_'}
	]

	let toolsNames = Object.keys(standartTemplates)
	
	standardInToOut.forEach((inOut) => {

		materials.X = inOut.material

		toolsNames.forEach((toolName) => {
			modifyShapedID(e, inOut.ID + toolName, inOut.ID + toolName, 1, standartTemplates[toolName], materials)
		})
	})

	// Незеритовые
	toolsNames.forEach((toolName) => {
		e.replaceInput({id: `minecraft:netherite_${toolName}_smithing`}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
	})

	// Ножницы
	modifyShapedID(e, 'minecraft:shears', 'minecraft:shears', 1,
		[
			'S ',
			'NS'
		],
		{
			N: '#forge:nuggets/iron',
			S: '#forge:plates/iron'
		}
	)
})
