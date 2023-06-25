// https://trello.com/c/7f18yi6f

let za_rocksToBlocks = [ //[камень, блок_из_этого_камня]
	['projectvibrantjourneys:rocks',				'minecraft:cobblestone'],
	['projectvibrantjourneys:mossy_rocks',			'minecraft:mossy_cobblestone'],
	['projectvibrantjourneys:sandstone_rocks',		'minecraft:sandstone'],
	['projectvibrantjourneys:red_sandstone_rocks',	'minecraft:red_sandstone']
]


onEvent("lootjs", (event) => {

	var amountRocks = [2, 5] // от скольки до скольки камней выпадает при разрушении камня
	var additionalFixDropThings = ['projectvibrantjourneys:seashells', 'projectvibrantjourneys:ice_chunks']

	var diffMinMax = amountRocks[1] - amountRocks[0]

	event
		.addBlockLootModifier("minecraft:stone")
		.modifyLoot("minecraft:cobblestone", (itemStack) => {
			return Item.of('projectvibrantjourneys:rocks').withCount(amountRocks[0] + Math.floor(Math.random() * diffMinMax))
		})
		.randomChanceWithEnchantment("minecraft:fortune", [0, 0.2, 0.5, 1]) 
		.addLoot('3x projectvibrantjourneys:rocks')

	// Фикс https://trello.com/c/5WXSjYj4
	za_rocksToBlocks.forEach(thing => {
		event
		.addBlockLootModifier(thing[0])
		.addLoot(thing[0])
	})

	additionalFixDropThings.forEach(thing => {
		event
		.addBlockLootModifier(thing)
		.addLoot(thing)
	})
	
})

onEvent('recipes', event => {

	var amountRocksForBlock = 3 // количество камней для крафта одного блока

	za_rocksToBlocks.forEach(thing => {

		var inputRock = Item.of(thing[0]).ignoreNBT()
		event.remove({mod: 'projectvibrantjourneys', input: inputRock})

		if (thing[0].search(/.*sandstone.*/) != -1) {  event.remove({id: thing[1]})  }

		event.shapeless(thing[1], [inputRock.withCount(amountRocksForBlock), 'minecraft:clay_ball'])
		
	})

	//Альтернатива для песчаника
	event.shapeless('minecraft:sandstone', ['2x projectvibrantjourneys:rocks', '2x minecraft:sand', 'minecraft:clay_ball'])
	event.shapeless('minecraft:red_sandstone', ['2x projectvibrantjourneys:rocks', '2x minecraft:red_sand', 'minecraft:clay_ball'])

	//Разделывание на доске киркой камня на былужник
	event.remove({id: 'farmersdelight:cutting/stone'})

})