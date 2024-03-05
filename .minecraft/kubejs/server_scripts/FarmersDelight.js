onEvent('recipes', e => {

	let knives = [ // [результат, материал_навершие]
		['farmersdelight:flint_knife',		'minecraft:flint'],
		['farmersdelight:iron_knife',		'minecraft:iron_ingot'],
		['farmersdelight:diamond_knife',	'minecraft:diamond'],
		['farmersdelight:golden_knife',		'minecraft:gold_ingot']
	]

	let modifyTool = (e, result, pattern, materials) => {
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
	
    e.remove({id:'farmersdelight:cutting/quartz_block'})
	e.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"tag": "zarya:blocks_of_quartz"
			}
		],
		"tool": {
			"type": "farmersdelight:tool_action",
			"action": "pickaxe_dig"
		},
		"result": [
			{
				"item": "minecraft:quartz",
				"count": 4
			}
		]
	}).id('zarya:cutting/quartz_block')

})

onEvent('item.tags', e => {
	e.add('zarya:blocks_of_quartz', [
		'#chipped:quartz_block',
		'minecraft:quartz_pillar',
		'minecraft:quartz_bricks',
		'minecraft:smooth_quartz'
	])
})