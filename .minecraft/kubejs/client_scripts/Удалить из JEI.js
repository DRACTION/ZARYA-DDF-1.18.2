let za_removedItems = [
	// Better Punching
	'betterpunching:flint_dagger',
	'betterpunching:flint_spade',
	'betterpunching:flint_pick',
	'betterpunching:flint_hatchet',
	// Relics
	'relics:arrow_quiver',
	// Create
	'create:dough',
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
	// Epic Fight
	'epicfight:stone_greatsword',
	// Tom's Simple Storage Mod
	'toms_storage:ts.inventory_cable',
	'toms_storage:ts.crafting_terminal',
	'toms_storage:ts.level_emitter',
	'toms_storage:ts.open_crate',
	'toms_storage:ts.inventory_hopper_basic',
	'toms_storage:ts.inventory_proxy',
	'toms_storage:ts.level_emitter',
	'toms_storage:ts.inventory_cable_connector',
	'toms_storage:ts.inventory_cable_framed',
	'toms_storage:ts.inventory_cable_connector_framed',
	'toms_storage:ts.inventory_cable_connector_filtered',
	'toms_storage:ts.wireless_terminal',
	'toms_storage:ts.adv_wireless_terminal',
	// Effortless Building
	'effortlessbuilding:randomizer_bag',
	'effortlessbuilding:golden_randomizer_bag',
	'effortlessbuilding:diamond_randomizer_bag'
]


onEvent('jei.hide.items', event => {
	event.hide(za_removedItems)
})