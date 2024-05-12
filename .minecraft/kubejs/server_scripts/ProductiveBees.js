onEvent('recipes', e => {
	e.remove({
		mod: 'productivebees',
		input: Item.of('minecraft:iron_sword').ignoreNBT(),
		type: 'minecraft:crafting_shapeless'
	})
	e.remove({
		mod: 'productivebees',
		input: Item.of('minecraft:wooden_sword').ignoreNBT(),
		type: 'minecraft:crafting_shapeless'
	})
	e.remove({
		mod: 'productivebees',
		input: Item.of('minecraft:diamond_sword').ignoreNBT(),
		type: 'minecraft:crafting_shapeless'
	})
	e.shaped('productivebees:glowstone_nest',
		[
			"XXX",
			"XIF",
			"XXX"
		],
		{
			X: 'minecraft:glowstone',
			F: 'tombstone:familiar_stone',
			I: 'productivebees:incubator'
		}
	)
	e.shaped('productivebees:soul_sand_nest',
		[
			"XXX",
			"XIF",
			"XXX"
		],
		{
			X: 'minecraft:soul_sand',
			F: 'tombstone:familiar_stone',
			I: 'productivebees:incubator'
		}
	)
	e.shaped('productivebees:nether_gold_nest',
		[
			"XXX",
			"XIF",
			"XXX"
		],
		{
			X: 'minecraft:nether_gold_ore',
			F: 'tombstone:familiar_stone',
			I: 'productivebees:incubator'
		}
	)
	e.shaped('productivebees:obsidian_nest',
		[
			"XXX",
			"XEF",
			"XXX"
		],
		{
			X: 'minecraft:crying_obsidian',
			F: 'tombstone:familiar_stone',
			E: 'minecraft:dragon_egg'
		}
	).keepIngredient('minecraft:dragon_egg')

	removeRecipeByID(e, [
		'productivebees:guide_book',
		'productivebees:guide_book_sturdy',
		'productivebees:heated_centrifuge'
	])

	e.recipes.create.mechanical_crafting('productivebees:heated_centrifuge',
		[
			'III',
			'UEU',
			'CBC'
		],
		{
			I: '#forge:plates/cast_iron',
			U: 'productivebees:upgrade_comb_block',
			E: 'productivebees:dragon_egg_hive',
			C: '#forge:storage_blocks/copper',
			B: 'create:basin'
		}
	).id('zarya:heated_centrifuge')
})
