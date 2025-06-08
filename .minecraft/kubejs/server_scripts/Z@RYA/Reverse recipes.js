onEvent('recipes', e => {

	allWoods.forEach(thing => {
		//9 деревянных кнопок вместо одной
		modifyShapelessID(
			e, //Event
			`minecraft:${thing}_button`, //Result
			`minecraft:${thing}_button`, //Craft ID
			9, //Count
			`minecraft:${thing}_planks` //Ingredients
		)
		//из 9 деревянных кнопок = 1 доска
		e.shaped(`minecraft:${thing}_planks`, [ 'XXX', 'XXX', 'XXX' ], { X: `minecraft:${thing}_button` })

		//6 люков вместо 2
		modifyShapedID(
			e, //Event
			`minecraft:${thing}_trapdoor`, //Result
			`minecraft:${thing}_trapdoor`, //Craft ID
			6, //Count
			['XXX','XXX'], //pattern
			{ X: `minecraft:${thing}_planks` } //Ingredients
		)
		//из 6 люков = 6 досок
		e.shaped(`6x minecraft:${thing}_planks`, [ 'XXX', 'XXX' ], { X: `minecraft:${thing}_trapdoor` })

		//6 степенек вместо 4
		modifyShapedID(
			e, //Event
			`minecraft:${thing}_stairs`, //Result
			`minecraft:${thing}_stairs`, //Craft ID
			6, //Count
			['X  ','XX ','XXX'], //pattern
			{ X: `minecraft:${thing}_planks` } //Ingredients
		)
		//из 6 степенек = 6 досок
		e.shaped(`6x minecraft:${thing}_planks`, ['X  ','XX ','XXX'], { X: `minecraft:${thing}_stairs` })
	})

	colors.forEach(color => {
		e.shapeless(`3x minecraft:${color}_wool`, `minecraft:${color}_bed`)
	})

	//Аметистовый блок = 4 аметистовых осколка
	e.shapeless('4x minecraft:amethyst_shard', 'minecraft:amethyst_block')

	//1 палет костей = 1 кость
	e.shapeless('minecraft:bone', 'valhelsia_structures:bone_pile')

	//1 железные прутья = 1 панель из железных прутьев
	e.shapeless('minecraft:iron_bars', 'decorative_blocks:bar_panel')

})