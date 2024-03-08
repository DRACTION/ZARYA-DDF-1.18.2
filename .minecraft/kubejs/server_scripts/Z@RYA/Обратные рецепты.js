onEvent('recipes', e => {

	var woods = [
		'oak',
		'dark_oak',
		'spruce',
		'birch',
		'acacia',
		'crimson',
		'warped'
	]
	var likeCopperBlocks = [
		'cut_copper',
		'exposed_cut_copper',
		'weathered_cut_copper',
		'oxidized_cut_copper',
		'waxed_cut_copper',
		'waxed_exposed_cut_copper',
		'waxed_weathered_cut_copper',
		'waxed_oxidized_cut_copper',
		'cobblestone',
		'mossy_cobblestone',
		'cut_red_sandstone',
		'smooth_red_sandstone',
		'prismarine',
		'smooth_sandstone',
		'smooth_quartz',
		'granite',
		'andesite',
		'polished_andesite',
		'diorite',
		'polished_diorite',
		'cobbled_deepslate',
		'polished_deepslate',
		'blackstone',
		'polished_blackstone',
		'smooth_stone'
	]

	woods.forEach(thing => {
		//9 деревянных кнопок вместо одной
		modifyShapelesID(
			e, //Event
			'minecraft:'+thing+'_button', //Result
			'minecraft:'+thing+'_button', //Craft ID
			9, //Count
			'minecraft:'+thing+'_planks' //Ingredients
		)
		//из 9 деревянных кнопок = 1 доска
		e.shaped('minecraft:'+thing+'_planks', [ 'XXX', 'XXX', 'XXX' ], { X: 'minecraft:'+thing+'_button' })
		//из 2 деревянных полублоков = 1 цельный блок
		// теперь есть мод Just vertical slabs
		// e.shaped('minecraft:'+thing+'_planks', [ 'X', 'X' ], { X: 'minecraft:'+thing+'_slab' })
	})

	// теперь есть мод Just vertical slabs
	// likeCopperBlocks.forEach(thing => {
	// 	e.shaped('minecraft:'+thing, [ 'X', 'X' ], { X: 'minecraft:'+thing+'_slab' })
	// })

	colors.forEach(color => {
		e.shapeless('3x minecraft:'+color+'_wool', 'minecraft:'+color+'_bed')
	})

	//Аметистовый блок = 4 аметистовых осколка
	e.shapeless('4x minecraft:amethyst_shard', 'minecraft:amethyst_block')

	//1 палет костей = 1 кость
	e.shapeless('minecraft:bone', 'valhelsia_structures:bone_pile')

	//1 железные прутья = 1 панель из железных прутьев
	e.shapeless('minecraft:iron_bars', 'decorative_blocks:bar_panel')

})