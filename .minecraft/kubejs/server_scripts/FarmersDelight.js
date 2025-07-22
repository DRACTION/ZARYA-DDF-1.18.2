onEvent('recipes', e => {
	////////////// Холст //////////////
	e.shapeless('2x farmersdelight:canvas', ['2x supplementaries:flax'])

	let knives = [ // [результат, материал_навершие]
		['farmersdelight:flint_knife',		'minecraft:flint'],
		['farmersdelight:iron_knife',		'#forge:plates/iron'],
		['farmersdelight:golden_knife',		'#forge:plates/gold'],
		['farmersdelight:diamond_knife',	'#forge:plates/diamond']
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
	e.shaped('farmersdelight:netherite_knife', ['RX', 'S '], 
		{
			R: 'supplementaries:rope',
			S: '#forge:rods/wooden',
			X: '#forge:plates/netherite'
		}
	)
	e.replaceInput({id: 'farmersdelight:netherite_knife_smithing'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
	
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
	
	e.remove({id:'farmersdelight:lead_from_straw'})
	e.remove({id:'minecraft:lead'})
	e.shaped('minecraft:lead', ['R','R'], {R: 'supplementaries:rope'}).id('zarya:lead_from_rope')

	modifyShapedID(e, 'farmersdelight:stove', 'farmersdelight:stove', 1, [
		'XXX',
		'BCB',
		'BBB'], {
		X: ['minecraft:iron_bars', 'createdeco:copper_bars'],
		B: 'minecraft:bricks',
		C: 'minecraft:campfire'
	})

})

onEvent('item.tags', e => {
	e.add('zarya:blocks_of_quartz', [
		'#chipped:quartz_block',
		'minecraft:quartz_pillar',
		'minecraft:quartz_bricks',
		'minecraft:smooth_quartz'
	])
})

onEvent("lootjs", (event) => {
	/////////// Должна выпадать солома ///////////
	event
		.addBlockLootModifier([ // перечень блоков, из которых выпадает солома
			"minecraft:grass",
			"minecraft:tall_grass",
			'minecraft:large_fern',
			'projectvibrantjourneys:short_grass'
		])
		.randomChance(0.1)
		.addLoot('farmersdelight:straw')
	/////////// Должно выпадать больше соломы при использовании ножа ///////////
	event
		.addBlockLootModifier([
			'minecraft:large_fern',
			'projectvibrantjourneys:short_grass'
		])
		.matchMainHand('#farmersdelight:straw_harvesters')
		.randomChance(0.2)
		.addLoot('farmersdelight:straw')
})
