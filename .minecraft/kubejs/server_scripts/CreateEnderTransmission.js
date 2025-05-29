onEvent('recipes', e => {
	let mat = [
		'OOXOO',
		'OMWMO',
		'OEPEO',
		'OMWMO',
		'OOXOO'
	]
	let ingr = {
		O: 'minecraft:obsidian',
		E: 'minecraft:ender_eye',
		P: 'bosses_of_mass_destruction:void_thorn',
		M: 'apotheosis:epic_material',
		W: Item.of('waystones:warp_stone').ignoreNBT(),
		X: 'create:shaft'
	}
	//////////////// Передатчик энергии ////////////////
	e.remove({id:'createendertransmission:energy_transmitter'})
	e.recipes.create.mechanical_crafting('2x createendertransmission:energy_transmitter', mat, ingr)
	//////////////// Передатчик предметов ////////////////
	ingr.X = 'create:chute'
	e.remove({id:'createendertransmission:item_transmitter'})
	e.recipes.create.mechanical_crafting('2x createendertransmission:item_transmitter', mat, ingr)
	//////////////// Передатчик жидкости ////////////////
	ingr.X = 'create:mechanical_pump'
	e.remove({id:'createendertransmission:fluid_transmitter'})
	e.recipes.create.mechanical_crafting('2x createendertransmission:fluid_transmitter', mat, ingr)
})