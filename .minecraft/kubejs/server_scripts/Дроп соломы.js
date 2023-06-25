// https://gist.github.com/DRACTION/3cd7dd238f860e41eb90856b0e03ed7a

onEvent("lootjs", (event) => {
	var chanceOfDropInPercent = 10 // вероятность выпадения соломы от 1 до 100
	var grassBlocks = [ // перечень блоков, из которых выпадает солома
		"minecraft:grass",
		"minecraft:tall_grass",
		'minecraft:large_fern',
		"#forge:grass",
		'projectvibrantjourneys:short_grass'
	]
	var strawItem = 'farmersdelight:straw' // id соломы

	event
		.addBlockLootModifier(grassBlocks)
		.matchPlayer((player) => {})
		.randomChance(chanceOfDropInPercent/100)
		.addLoot(strawItem)

})

// Удаляю рецепт, где из двух трав получается одна длинная трава
onEvent('recipes', (event) => {event.remove({id:"minecolonies:doublegrass"})})
