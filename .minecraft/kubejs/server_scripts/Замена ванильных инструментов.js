// https://gist.github.com/DRACTION/6a4f041d5550bf868b5d0c9f2b007186


onEvent('recipes', e => {

	var modifyTool = (e, result, pattern, materials) => {
		modifyShapedID(e, result, result, 1, pattern, materials)
	}

	var modifyAllTools = (e, inMaterialOutIDArr, materialsArr, templatesObj) => {

		var toolsNames = Object.keys(templatesObj)
		
		inMaterialOutIDArr.forEach((inOut) => {

			materialsArr.X = inOut.material

			toolsNames.forEach((toolName) => {
				modifyShapedID(e, inOut.ID + toolName, inOut.ID + toolName, 1, templatesObj[toolName], materialsArr)
			})
		})
	}


	var materials = {
		R: 'supplementaries:rope',
		S: '#forge:rods/wooden'	
	}
	removeRecipeByOutput(e, [materials.R])
	e.shapeless(materials.R, ['3x farmersdelight:straw']).id(`zarya:shapeless/${materials.R.replace(':', '/')}`)


	var standartTemplates = {
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

	var standardInToOut = [
		{material: 'minecraft:diamond', ID: 'minecraft:diamond_'},
		{material: 'minecraft:iron_ingot', ID: 'minecraft:iron_'},
		{material: 'minecraft:gold_ingot', ID: 'minecraft:golden_'},
		{material: 'minecraft:bone', ID: 'minecraft:wooden_'},
		{material: 'minecraft:flint', ID: 'minecraft:stone_'}
	]


	modifyAllTools(e, standardInToOut, materials, standartTemplates)

})