onEvent('recipes', e => {

	var knives = [ // [результат, материал_навершие]
		['farmersdelight:flint_knife',		'minecraft:flint'],
		['farmersdelight:iron_knife',		'minecraft:iron_ingot'],
		['farmersdelight:diamond_knife',	'minecraft:diamond'],
		['farmersdelight:golden_knife',		'minecraft:gold_ingot']
	]

	var modifyTool = (e, result, pattern, materials) => {
		modifyShapedID(e, result, result, 1, pattern, materials)
	}

	knives.forEach(thing => {
		modifyTool(e, thing[0], ['RX', 'S '],
			{
				R: 'supplementaries:rope',
				S: '#forge:rods/wooden',
				X: thing[1]
			}
		)
	})
	

})