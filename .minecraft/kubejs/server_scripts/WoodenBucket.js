onEvent('recipes', event => {
	event.remove({id: 'woodenbucket:wooden_bucket'})
	event.shaped('woodenbucket:wooden_bucket',
		[
			" R ",
			"X X",
			" X "
		],
		{
			X: '#minecraft:logs',
			R: 'supplementaries:rope'
		}
	)
})
