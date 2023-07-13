// https://trello.com/c/7f18yi6f

let za_rocksToBlocks = [ //[камень, блок_из_этого_камня]
	['projectvibrantjourneys:rocks',				'minecraft:cobblestone'],
	['projectvibrantjourneys:mossy_rocks',			'minecraft:mossy_cobblestone'],
	['projectvibrantjourneys:sandstone_rocks',		'minecraft:sandstone'],
	['projectvibrantjourneys:red_sandstone_rocks',	'minecraft:red_sandstone']
]


onEvent("lootjs", (event) => {

	let amountRocks = [1, 3] // от скольки до скольки камней выпадает при разрушении камня
	let additionalFixDropThings = ['projectvibrantjourneys:seashells', 'projectvibrantjourneys:ice_chunks']

	let diffMinMax = amountRocks[1] - amountRocks[0]

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

	let amountRocksForBlock = 3 // количество камней для крафта
	let amountResBlocks = 2 // количество блоков на выходе

	za_rocksToBlocks.forEach(thing => {

		let inputRock = Item.of(thing[0]).ignoreNBT()
		event.remove({mod: 'projectvibrantjourneys', input: inputRock})

		if (thing[0].search(/.*sandstone.*/) != -1) {  event.remove({id: thing[1]})  }

		event.shapeless(
			Item.of(thing[1]).withCount(amountResBlocks),
			[inputRock.withCount(amountRocksForBlock), 'minecraft:clay_ball']
		)
		// Для большего результата с тем же кол-вом глины
		event.shapeless(
			Item.of(thing[1]).withCount(amountResBlocks*2),
			[inputRock.withCount(amountRocksForBlock*2), 'minecraft:clay_ball']
		)
		
	})

	// Альтернатива для песчаника
	event.shapeless('minecraft:sandstone', ['projectvibrantjourneys:rocks', 'minecraft:sand', 'minecraft:clay_ball'])
	event.shapeless('2x minecraft:sandstone', ['2x projectvibrantjourneys:rocks', '2x minecraft:sand', 'minecraft:clay_ball'])
	event.shapeless('3x minecraft:sandstone', ['3x projectvibrantjourneys:rocks', '3x minecraft:sand', 'minecraft:clay_ball'])
	event.shapeless('4x minecraft:sandstone', ['4x projectvibrantjourneys:rocks', '4x minecraft:sand', 'minecraft:clay_ball'])
	// С камнем песчаника
	event.shapeless('minecraft:sandstone', ['projectvibrantjourneys:sandstone_rocks', 'minecraft:sand', 'minecraft:clay_ball'])
	event.shapeless('2x minecraft:sandstone', ['2x projectvibrantjourneys:sandstone_rocks', '2x minecraft:sand', 'minecraft:clay_ball'])
	event.shapeless('3x minecraft:sandstone', ['3x projectvibrantjourneys:sandstone_rocks', '3x minecraft:sand', 'minecraft:clay_ball'])
	event.shapeless('4x minecraft:sandstone', ['4x projectvibrantjourneys:sandstone_rocks', '4x minecraft:sand', 'minecraft:clay_ball'])
	// Красный песчаник
	event.shapeless('minecraft:red_sandstone', ['projectvibrantjourneys:rocks', 'minecraft:red_sand', 'minecraft:clay_ball'])
	event.shapeless('2x minecraft:red_sandstone', ['2x projectvibrantjourneys:rocks', '2x minecraft:red_sand', 'minecraft:clay_ball'])
	event.shapeless('3x minecraft:red_sandstone', ['3x projectvibrantjourneys:rocks', '3x minecraft:red_sand', 'minecraft:clay_ball'])
	event.shapeless('4x minecraft:red_sandstone', ['4x projectvibrantjourneys:rocks', '4x minecraft:red_sand', 'minecraft:clay_ball'])
	// red_sandstone_rocks
	event.shapeless('minecraft:red_sandstone', ['projectvibrantjourneys:red_sandstone_rocks', 'minecraft:red_sand', 'minecraft:clay_ball'])
	event.shapeless('2x minecraft:red_sandstone', ['2x projectvibrantjourneys:red_sandstone_rocks', '2x minecraft:red_sand', 'minecraft:clay_ball'])
	event.shapeless('3x minecraft:red_sandstone', ['3x projectvibrantjourneys:red_sandstone_rocks', '3x minecraft:red_sand', 'minecraft:clay_ball'])
	event.shapeless('4x minecraft:red_sandstone', ['4x projectvibrantjourneys:red_sandstone_rocks', '4x minecraft:red_sand', 'minecraft:clay_ball'])

	//Разделывание на доске киркой камня на былужник
	event.remove({id: 'farmersdelight:cutting/stone'})

})