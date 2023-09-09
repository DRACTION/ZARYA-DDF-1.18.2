// https://gist.github.com/DRACTION/6a4f041d5550bf868b5d0c9f2b007186


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
			'RXX',
			' SX',
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
		{material: 'minecraft:diamond', ID: 'minecraft:diamond_'},
		{material: 'minecraft:iron_ingot', ID: 'minecraft:iron_'},
		{material: 'minecraft:gold_ingot', ID: 'minecraft:golden_'},
		{material: 'minecraft:bone', ID: 'minecraft:wooden_'},
		{material: 'minecraft:flint', ID: 'minecraft:stone_'}
	]

	let toolsNames = Object.keys(standartTemplates)
	
	standardInToOut.forEach((inOut) => {

		materials.X = inOut.material

		toolsNames.forEach((toolName) => {
			modifyShapedID(e, inOut.ID + toolName, inOut.ID + toolName, 1, standartTemplates[toolName], materials)
		})
	})

})