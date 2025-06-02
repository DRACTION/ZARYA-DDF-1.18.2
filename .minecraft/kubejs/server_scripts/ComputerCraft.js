onEvent('recipes', event => {
	////////////// Дискета //////////////
	[
		['1', 'minecraft:black_dye', '1118481'],
		['2', 'minecraft:red_dye', '13388876'],
		['3', 'minecraft:green_dye', '5744206'],
		['4', 'minecraft:brown_dye', '8349260'],
		['5', 'minecraft:blue_dye', '3368652'],
		['6', 'minecraft:purple_dye', '11691749'],
		['7', 'minecraft:cyan_dye', '5020082'],
		['8', 'minecraft:light_gray_dye', '10066329'],
		['9', 'minecraft:gray_dye', '5000268'],
		['10', 'minecraft:pink_dye', '15905484'],
		['11', 'minecraft:lime_dye', '8375321'],
		['12', 'minecraft:yellow_dye', '14605932'],
		['13', 'minecraft:light_blue_dye', '10072818'],
		['14', 'minecraft:magenta_dye', '15040472'],
		['15', 'minecraft:orange_dye', '15905331'],
		['16', 'minecraft:white_dye', '15790320']
	].forEach(parameters => {
		event.remove({ id:`computercraft:disk_${parameters[0]}` })
		event.custom({
			"type": "computercraft:impostor_shapeless",
			"ingredients": [
				{"item": "create:polished_rose_quartz"},
				{"item": "minecraft:paper"},
				{"item": parameters[1]}
			],
			"result": {"item": "computercraft:disk", "nbt": `{Color:${parameters[2]}}`}
		}).id(`zarya:impostor_shapeless/disk_${parameters[0]}`)
	})
	////////////// Беспроводной модем //////////////
	event.remove({ id:"computercraft:wireless_modem_normal" })
	event.shapeless('computercraft:wireless_modem_normal', [
		'create:redstone_link',
		'computercraft:wired_modem'
	])
	////////////// Эндер модем //////////////
	event.remove({ id:"computercraft:wireless_modem_advanced" })
	event.shapeless('computercraft:wireless_modem_advanced', [
		'computercraft:wireless_modem_normal',
		'minecraft:ender_eye',
		'warden_and_sculk:echo_shard'
	])
	////////////// Сетевой кабель //////////////
	event.remove({ id:"computercraft:cable" })
	event.shapeless('4x computercraft:cable', ['#forge:dusts/redstone', 'minecraft:dried_kelp'])
	////////////// Проводной модем (full) //////////////
	event.remove({ id:"computercraft:wired_modem_full_from" })
	event.shaped('computercraft:wired_modem_full', [
		'R',
		'A'
	], {
		R: '#forge:dusts/redstone',
		A: 'create:andesite_casing'
	})
	event.shapeless('computercraft:wired_modem_full', ['computercraft:wired_modem'])
	////////////// Проводной модем //////////////
	event.remove({ id:"computercraft:wired_modem_full_to" })
	event.remove({ id:"computercraft:wired_modem" })
	event.recipes.createPressing('computercraft:wired_modem', 'computercraft:wired_modem_full')
	////////////// Дисковод //////////////
	event.remove({ id:"computercraft:disk_drive" })
	event.shaped('computercraft:disk_drive', [
		'I',
		'L',
		'A'
	], {
		I: '#forge:plates/iron',
		L: 'minecraft:lectern',
		A: 'create:andesite_casing'
	})
	////////////// Монитор //////////////
	event.remove({ id:"computercraft:monitor_normal" })
	event.shaped('computercraft:monitor_normal', [
		' I ',
		'IDG',
		' I '
	], {
		I: '#forge:plates/iron',
		D: 'create:display_board',
		G: 'connectedglass:clear_glass_pane'
	})
	////////////// Продвинутый монитор //////////////
	event.remove({ id:"computercraft:monitor_advanced" })
	event.shaped('computercraft:monitor_advanced', [
		'MA'
	], {
		M: 'computercraft:monitor_normal',
		A: '#forge:gems/amethyst'
	})
	////////////// Колонка //////////////
	event.remove({ id:"computercraft:speaker" })
	event.shaped('computercraft:speaker', [
		'N',
		'A'
	], {
		N: 'minecraft:note_block',
		A: 'create:andesite_casing'
	})
	////////////// Принтер //////////////
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