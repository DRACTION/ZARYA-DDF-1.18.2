onEvent('recipes', event => {
	////////////// Дисковод //////////////
	////////////// Монитор //////////////
	////////////// Продвинутый монитор //////////////
	////////////// Колонка //////////////
	event.remove({ id:"computercraft:speaker" })
	event.shaped('computercraft:speaker', [
		'N',
		'A'
	], {
		N: 'minecraft:note_block',
		A: 'create:andesite_casing'
	})
	////////////// Колонка //////////////
	event.remove({ id:"computercraft:printer" })
	event.shaped('computercraft:printer', [
		'I',
		'B',
		'A'
	], {
		I: '#forge:plates/iron',
		B: 'minecraft:writable_book',
		A: 'create:andesite_casing'
	})
	////////////// Компьютер //////////////
	event.remove({ id:"computercraft:computer_normal" })
	event.recipes.create.mechanical_crafting('computercraft:computer_normal', [
		"  I  ",
		" VEL ",
		"IPMBG",
		" TRC ",
		"  I  "
	], {
		I: "#forge:plates/iron",
		V: "create:item_vault",
		E: "create:electron_tube",
		L: "create:display_link",
		P: "create:propeller",
		M: "create:precision_mechanism",
		B: "create:display_board",
		G: "connectedglass:clear_glass_pane",
		R: "createaddition:redstone_relay",
		T: "#forge:storage_blocks/redstone",
		C: "createaddition:capacitor"
	})
	////////////// Продвинутый компьютер //////////////
	event.remove({ id:"computercraft:computer_advanced" })
	event.remove({ id:"computercraft:computer_advanced_upgrade" })
	event.custom({
		"type": "computercraft:computer_upgrade",
		"key": {
			"G": {"item": "createaddition:gold_spool"},
			"P": {"item": "createaddition:large_connector"},
			"A": {"tag": "forge:gems/amethyst"},
			"R": {"tag": "forge:storage_blocks/redstone"},
			"C": {"item": "computercraft:computer_normal"}},
		"pattern": [
			" G ",
			"PCA",
			" R "],
		"result": {"item": "computercraft:computer_advanced"},
		"family": "ADVANCED"
	}).id('zarya:computer_upgrade/computer_advanced')
	////////////// Карманный компьютер //////////////
	event.remove({ id:"computercraft:pocket_computer_normal" })
	event.recipes.createPressing('computercraft:pocket_computer_normal', 'computercraft:computer_normal')
	////////////// Продвинутый карманный компьютер //////////////
	event.remove({ id:"computercraft:pocket_computer_advanced" })
	event.remove({ id:"computercraft:pocket_computer_advanced_upgrade" })
	event.recipes.createPressing('computercraft:pocket_computer_advanced', 'computercraft:computer_advanced')
	event.custom({
		"type": "computercraft:computer_upgrade",
		"key": {
			"G": {"item": "createaddition:gold_spool"},
			"P": {"item": "createaddition:large_connector"},
			"A": {"tag": "forge:gems/amethyst"},
			"R": {"tag": "forge:storage_blocks/redstone"},
			"C": {"item": "computercraft:pocket_computer_normal"}},
		"pattern": [
			" G ",
			"PCA",
			" R "],
		"result": {"item": "computercraft:pocket_computer_advanced"},
		"family": "ADVANCED"
	}).id('zarya:computer_upgrade/pocket_computer_advanced')
	////////////// Черепашка //////////////
	event.remove({ id:"computercraft:turtle_normal" })
	event.recipes.create.mechanical_crafting('computercraft:turtle_normal', [
		" H ",
		"BOB",
		"ACM",
		" F "
	], {
		A: "createaddition:modular_accumulator",
		M: "createaddition:electric_motor",
		H: "minecraft:turtle_helmet",
		B: "create:brass_hand",
		O: "create:content_observer",
		C: "computercraft:computer_normal",
		F: "create:encased_fan"
	})
	////////////// Продвинутая черепашка //////////////
	event.remove({ id:"computercraft:turtle_advanced" })
	event.remove({ id:"computercraft:turtle_advanced_upgrade" })
	event.recipes.create.mechanical_crafting('computercraft:turtle_advanced', [
		" H ",
		"BOB",
		"ACM",
		"AF "
	], {
		A: "createaddition:modular_accumulator",
		M: "createaddition:electric_motor",
		H: "minecraft:turtle_helmet",
		B: "create:brass_hand",
		O: "create:content_observer",
		C: "computercraft:computer_advanced",
		F: "create:encased_fan"
	})
	event.custom({
		"type": "computercraft:computer_upgrade",
		"key": {
			"G": {"item": "createaddition:gold_spool"},
			"P": {"item": "createaddition:large_connector"},
			"A": {"tag": "forge:gems/amethyst"},
			"M": {"item": "createaddition:modular_accumulator"},
			"R": {"tag": "forge:storage_blocks/redstone"},
			"C": {"item": "computercraft:turtle_normal"}},
		"pattern": [
			"PG ",
			"MCA",
			" R "],
		"result": {"item": "computercraft:turtle_advanced"},
		"family": "ADVANCED"
	}).id('zarya:computer_upgrade/turtle_advanced')
})