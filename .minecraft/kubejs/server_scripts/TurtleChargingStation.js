onEvent('recipes', event => {
	event.remove({id: 'turtlechargingstation:turtle_charging_station'})
	event.shaped('turtlechargingstation:turtle_charging_station', [
		'BEB',
		'LXL',
		'BCB'
	], {
		B: 'minecraft:black_concrete',
		L: 'create:redstone_link',
		C: 'createaddition:capacitor',
		E: 'create:electron_tube',
		X: 'create:brass_casing'
	})
})
