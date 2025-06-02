onEvent('recipes', event => {
	////////////// Обшивка для Периферийного устройства //////////////
	event.remove({ id:"advancedperipherals:peripheral_casing" })
	event.shaped('advancedperipherals:peripheral_casing', [
		'PRP',
		'RXR',
		'PRP'
	], {
		P: '#forge:plates/iron',
		R: '#forge:rods/iron',
		X: 'create:copper_casing'
	})
	////////////// Детектор окружения //////////////
	event.remove({ id:"advancedperipherals:environment_detector" })
	event.shaped('advancedperipherals:environment_detector', [
		'C',
		'X'
	], {
		C: 'naturescompass:naturescompass',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Чат-коробка //////////////
	event.remove({ id:"advancedperipherals:chat_box" })
	event.shaped('advancedperipherals:chat_box', [
		'S',
		'X'
	], {
		S: 'supplementaries:speaker_block',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Детектор игрока //////////////
	event.remove({ id:"advancedperipherals:player_detector" })
	event.shaped('advancedperipherals:player_detector', [
		'S',
		'X'
	], {
		S: '#forge:heads',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Детектор энергии //////////////
	event.remove({ id:"advancedperipherals:energy_detector" })
	event.shaped('advancedperipherals:energy_detector', [
		'R',
		'X'
	], {
		R: 'createaddition:redstone_relay',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Контроллер доп. реальности //////////////
	event.remove({ id:"advancedperipherals:ar_controller" })
	event.shaped('advancedperipherals:ar_controller', [
		'R',
		'X'
	], {
		R: 'railways:remote_lens',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Интегратор красного камня //////////////
	event.remove({ id:"advancedperipherals:redstone_integrator" })
	event.shaped('advancedperipherals:redstone_integrator', [
		'N',
		'X'
	], {
		N: 'create:nixie_tube',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Чтец блока //////////////
	event.remove({ id:"advancedperipherals:block_reader" })
	event.shaped('advancedperipherals:block_reader', [
		'O',
		'X'
	], {
		O: 'minecraft:observer',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Хранилище NBT //////////////
	event.remove({ id:"advancedperipherals:nbt_storage" })
	event.shaped('advancedperipherals:nbt_storage', [
		'O',
		'X'
	], {
		O: 'create:content_observer',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Гео-сканер //////////////
	event.remove({ id:"advancedperipherals:geo_scanner" })
	event.recipes.create.mechanical_crafting('advancedperipherals:geo_scanner', [
		' O ',
		'IXG',
		' M '
	], {
		O: 'create:content_observer',
		G: 'adfinders:gem_finder',
		I: 'adfinders:mineral_finder',
		M: 'adfinders:metal_finder',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Контроллер чанков //////////////
	event.remove({ id:"advancedperipherals:chunk_controller" })
	event.recipes.createPressing('advancedperipherals:chunk_controller', 'createendertransmission:chunk_loader')
	////////////// Очки Доп. реальности //////////////
	event.remove({ id:"advancedperipherals:ar_goggles" })
	event.shaped('advancedperipherals:ar_goggles', [
		'GLG'
	], {
		L: 'railways:remote_lens',
		G: 'minecraft:tinted_glass'
	})
	////////////// Карта памяти //////////////
	event.remove({ id:"advancedperipherals:memory_card" })
	event.shaped('advancedperipherals:memory_card', [
		' W ',
		'IOI',
		' G '
	], {
		W: '#forge:glass/white',
		O: 'minecraft:observer',
		I: '#forge:plates/iron',
		G: '#forge:wires/gold'
	})
	////////////// Диспетчер инвентаря //////////////
	event.remove({ id:"advancedperipherals:inventory_manager" })
	event.shaped('advancedperipherals:inventory_manager', [
		'C',
		'X'
	], {
		C: '#forge:chests',
		X: 'advancedperipherals:peripheral_casing'
	})
	////////////// Ядро автомата: Слабое //////////////
	event.remove({ id:"advancedperipherals:weak_automata_core" })
	let trans = 'create:cogwheel'
	event.recipes.create.sequenced_assembly('advancedperipherals:weak_automata_core',
		trans,
	[
		event.recipes.createDeploying(trans, [trans, 'kubejs:sturdy_diamond_sheet']),
		event.recipes.createDeploying(trans, [trans, 'tombstone:essence_of_undeath']),
		event.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:hyper_experience', 10)]),
		event.recipes.createDeploying(trans, [trans, 'apotheosis:vial_of_expulsion']),
		event.recipes.createDeploying(trans, [trans, 'create:mechanical_arm']),
		event.recipes.createPressing(trans, trans)
	]).transitionalItem(trans).loops(1)
})