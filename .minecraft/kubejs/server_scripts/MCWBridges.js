onEvent('recipes', e => {
	[
		['iron',              'iron',              '',         ''       ],
		['oak_log',           'oak_log',           'oak',      '_middle'],
		['birch_log',         'birch_log',         'birch',    '_middle'],
		['acacia_log',        'acacia_log',        'acacia',   '_middle'],
		['spruce_log',        'spruce_log',        'spruce',   '_middle'],
		['jungle_log',        'jungle_log',        'jungle',   '_middle'],
		['dark_oak_log',      'dark_oak_log',      'dark_oak', '_middle'],
		['crimson_log',       'crimson_log',       'crimson',  '_middle'],
		['warped_log',        'warped_log',        'warped',   '_middle'],
		['brick',             'brick',             '',         ''       ],
		['sandstone',         'sandstone',         '',         ''       ],
		['stone_brick',       'stone_brick',       '',         ''       ],
		['orange_sandstone',  'red_sandstone',     '',         ''       ],
		['blackstone',        'blackstone',        '',         ''       ],
		['mossy_stone_brick', 'mossy_stone',       '',         ''       ],
		['deepslate_brick',   'deepslate_brick',   '',         ''       ],
		['deepslate_tile',    'deepslate_tile',    '',         ''       ],
		['glass',             'glass',             '',         ''       ],
		['asian_red',         'asian_red',         '',         ''       ],
		['bamboo',            'bamboo',            '',         ''       ],
		['dry_bamboo',        'dry_bamboo',        '',         ''       ],
		['cobblestone',       'cobblestone',       '',         ''       ],
		['mossy_cobblestone', 'mossy_cobblestone', '',         ''       ],
		['andesite',          'andesite',          '',         ''       ],
		['granite',           'granite',           '',         ''       ],
		['diorite',           'diorite',           '',         ''       ],
		['prismarine_bricks', 'prismarine_bricks', '',         ''       ],
		['nether_bricks',     'nether_bricks',     '',         ''       ],
		['end_stone_bricks',  'end_stone_bricks',  '',         ''       ]
	].forEach(material => {
		///////// Лестницы моста /////////
		e.remove({id: `mcwbridges:${material[1]}_bridge_stair`})
		e.shapeless(`mcwbridges:${material[1]}_bridge_stair`, [`mcwbridges:${material[0]}_bridge${material[3]}`])
		///////// Лестницы верёвочного моста /////////
		if (material[2]) {
			e.remove({id: `mcwbridges:${material[2]}_rope_bridge_stair`})
			e.shapeless(`mcwbridges:${material[2]}_rope_bridge_stair`, [`mcwbridges:rope_${material[2]}_bridge`])
		}
	})
	///////// Плоскогубцы /////////
	e.remove({id: 'mcwbridges:pliers'})
	e.shaped('mcwbridges:pliers', [
		' P ',
		'RNP',
		' R '
	], {
		R: '#forge:rods/iron',
		P: '#forge:plates/iron',
		N: '#forge:nuggets/iron'
	})
	///////// Железный мост /////////
	e.remove({id: 'mcwbridges:iron_bridge_middle'})
	e.shaped('mcwbridges:iron_bridge', [
		'R R',
		'R R',
		'PPP'
	], {
		R: '#forge:rods/iron',
		P: '#forge:plates/iron'
	})
	///////// Замена нитки на верёвки /////////
	e.replaceInput({ mod: 'mcwbridges'}, 'minecraft:string', '#forge:rope')
	///////// Мост из сухого бамбука /////////
	e.replaceInput({ id: 'mcwbridges:dry_bamboo_bridge'}, 'minecraft:bamboo', 'bambooeverything:dry_bamboo')
	///////// Опора из сухого бамбука /////////
	e.replaceInput({ id: 'mcwbridges:dry_bamboo_bridge_pier'}, 'minecraft:bamboo', 'bambooeverything:dry_bamboo')
	///////// Опора для железного моста /////////
	e.remove({id: 'mcwbridges:iron_bridge_pier'})
	e.shaped('mcwbridges:iron_bridge_pier', [
		'BRB'
	], {
		R: '#forge:rods/iron',
		B: 'minecraft:iron_bars'
	})
})
