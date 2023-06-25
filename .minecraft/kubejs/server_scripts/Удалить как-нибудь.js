let ZA_removedItems = [
	// Better Punching
	'betterpunching:flint_dagger',
	'betterpunching:flint_spade',
	'betterpunching:flint_pick',
	'betterpunching:flint_hatchet',
	// Farmers Delight
	'farmersdelight:rope',
	// Little Logistics
	'littlelogistics:locomotive_dock_rail',
	'littlelogistics:chest_car',
	'littlelogistics:fluid_car',
	'littlelogistics:chunk_loader_car',
	'littlelogistics:seater_car',
	'littlelogistics:steam_locomotive',
	'littlelogistics:energy_locomotive',
	'littlelogistics:receiver_component',
	'littlelogistics:locomotive_route',
	'littlelogistics:automatic_switch_rail',
	'littlelogistics:automatic_tee_junction_rail',
	'littlelogistics:car_dock_rail',
	// Effortless Building
	'effortlessbuilding:randomizer_bag',
	'effortlessbuilding:golden_randomizer_bag',
	'effortlessbuilding:diamond_randomizer_bag'
]


onEvent('recipes', event => {
	removeRecipeByOutput(event, ZA_removedItems)
})
