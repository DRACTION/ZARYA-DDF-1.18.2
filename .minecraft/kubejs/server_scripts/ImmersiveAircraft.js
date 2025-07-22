onEvent('recipes', event => {
	///////////// Бойлер /////////////
	event.shaped('immersive_aircraft:boiler', [
		'S',
		'F',
		'G'
	], {
		S: 'create:steam_engine',
		F: 'create:fluid_tank',
		G: 'createlowheated:basic_burner'
	})
	///////////// Квадрокоптер /////////////
	event.replaceInput({id: 'immersive_aircraft:quadrocopter'}, 'minecraft:string', 'farmersdelight:safety_net')
})
