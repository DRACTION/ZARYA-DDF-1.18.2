onEvent('recipes', e => {
	let mat = [
		'OOXOO',
		'OPWPO',
		'OPEPO',
		'OPWPO',
		'OOXOO'
	]
	let ingr = {
		O: 'minecraft:obsidian',
		E: 'minecraft:ender_eye',
		P: 'minecraft:ender_pearl',
		W: Item.of('waystones:warp_stone').ignoreNBT(),
		X: 'create:shaft'
	}

	e.remove({id:'createendertransmission:energy_transmitter'})
	e.recipes.create.mechanical_crafting('2x createendertransmission:energy_transmitter', mat, ingr)

	ingr.X = 'create:chute'
	e.remove({id:'createendertransmission:item_transmitter'})
	e.recipes.create.mechanical_crafting('2x createendertransmission:item_transmitter', mat, ingr)

	ingr.X = 'create:mechanical_pump'
	e.remove({id:'createendertransmission:fluid_transmitter'})
	e.recipes.create.mechanical_crafting('2x createendertransmission:fluid_transmitter', mat, ingr)
})