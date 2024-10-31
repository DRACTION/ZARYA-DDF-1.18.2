onEvent('recipes', e => {
	
	e.remove({id: 'minecraft:bucket'})
	e.shaped('minecraft:bucket',
		[
			" R ",
			"X X",
			" X "
		],
		{
			X: '#forge:plates/iron',
			R: '#forge:rods/iron'
		}
	)

})