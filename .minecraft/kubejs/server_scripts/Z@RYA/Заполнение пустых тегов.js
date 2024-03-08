onEvent('item.tags', e => {

	colors.forEach( color => {
		e.add('comforts:sleeping_bags', 'comforts:sleeping_bag_' + color)
		e.add('comforts:hammocks', 'comforts:hammock_' + color)
	})
	e.add('minecraft:wool_carpets', '#minecraft:carpets')
})
