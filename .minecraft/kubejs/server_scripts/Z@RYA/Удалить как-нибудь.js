//priority: 99

let za_removedItems = [
	// Better Punching
	'betterpunching:flint_dagger',
	'betterpunching:flint_spade',
	'betterpunching:flint_pick',
	'betterpunching:flint_hatchet',
	// Create Deco
	'createdeco:zinc_sheet',
	// Create Additions
	/createaddition:electrum*/,
	// Fantasy Furniture
	'fantasyfurniture:dunmer/oven',
	// Farmers Delight
	'farmersdelight:rope',
	// Grapple Mod
	'grapplemod:launcheritem',
	'grapplemod:longfallboots',
	'grapplemod:repeller',
	'grapplemod:baseupgradeitem',
	'grapplemod:doubleupgradeitem',
	'grapplemod:forcefieldupgradeitem',
	'grapplemod:magnetupgradeitem',
	'grapplemod:motorupgradeitem',
	'grapplemod:ropeupgradeitem',
	'grapplemod:staffupgradeitem',
	'grapplemod:swingupgradeitem',
	'grapplemod:throwupgradeitem',
	'grapplemod:limitsupgradeitem',
	'grapplemod:rocketupgradeitem',
	'grapplemod:block_grapple_modifier',
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
	// Doggy Talents Next
	'doggytalents:egg_sandwich',
	'doggytalents:rice_bowl',
	'doggytalents:uncooked_rice_bowl',
	'doggytalents:salmon_sushi',
	'doggytalents:onigiri',
	'doggytalents:sausage',
	'doggytalents:bandaid',
	'doggytalents:hot_dog',
	'doggytalents:giant_stick',
	'doggytalents:rice_grains',
	'doggytalents:rice_wheat',
	'doggytalents:koji',
	'doggytalents:soy_beans',
	'doggytalents:soy_pods',
	'doggytalents:uncooked_rice',
	'doggytalents:soy_pods_dried',
	'doggytalents:soy_beans_dried',
	'doggytalents:edamame',
	'doggytalents:edamame_unpodded',
	'doggytalents:miso_paste',
	'doggytalents:miso_soup',
	'doggytalents:soy_milk',
	'doggytalents:tofu',
	'doggytalents:aburaage',
	'doggytalents:natto',
	'doggytalents:natto_rice',
	'doggytalents:onsen_tamago',
	'doggytalents:gyudon',
	'doggytalents:oyakodon',
	'doggytalents:sake',
	'doggytalents:rice_mill',
	'doggytalents:sussy_sickle',
	'doggytalents:golden_a_five_wagyu',
	'doggytalents:starter_bundle',
	'doggytalents:grand_piano_black_item',
	'doggytalents:grand_piano_white_item',
	'doggytalents:upright_piano_black_item',
	'doggytalents:upright_piano_brown_item',
	// Productive Bees
	'productivebees:centrifuge',
	'productivebees:powered_centrifuge',
	'productivebees:bottler',
	'productivebees:milk_bottle',
	// Effortless Building
	'effortlessbuilding:randomizer_bag',
	'effortlessbuilding:golden_randomizer_bag',
	'effortlessbuilding:diamond_randomizer_bag'
]

onEvent('recipes', event => {
	removeRecipeByOutput(event, za_removedItems)
	removeRecipeByID(event, [
		'createaddition:crafting/modular_accumulator_electrum',
		'createaddition:crafting/large_connector_electrum',
		'createaddition:crafting/accumulator_conversion'])
})

onEvent('item.tags', event => {
	za_removedItems.forEach( item => {
		event.removeAllTagsFrom(item)
	})
})

onEvent('block.tags', event => {
	za_removedItems.forEach( block => {
		event.removeAllTagsFrom(block)
	})
})
