// onEvent('block.tags', e => {
	
// })

onEvent('item.tags', e => {

	colors.forEach( color => {
		e.add('comforts:sleeping_bags', 'comforts:sleeping_bag_' + color)
		e.add('comforts:hammocks', 'comforts:hammock_' + color)
	})
	e.add('minecraft:wool_carpets', '#minecraft:carpets')

	// woods.forEach( wood => {
	// 	// не даёт ничего добавить в minecraft:boats
	// 	// e.add('zarya:boats', 'minecraft:' + wood + '_boat')
	// 	// e.add('zarya:boats', 'boatload:' + wood + '_chest_boat')
	// 	// e.add('zarya:boats', 'boatload:' + wood + '_furnace_boat')
	// 	// e.add('zarya:boats', 'boatload:large_' + wood + '_boat')
	// 	e.add('minecraft:boats', 'boatload:' + wood + '_chest_boat')
	// 	e.add('minecraft:boats', 'boatload:' + wood + '_furnace_boat')
	// 	e.add('minecraft:boats', 'boatload:large_' + wood + '_boat')
	// })
})

// onEvent('recipes', e => {
// 	e.replaceInput('#minecraft:boats', '#zarya:boats')
// })