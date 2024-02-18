onEvent('recipes', e => {
	// Посохи
	modifyShapedID(e, 'wom:wooden_staff', 'wom:wooden_staff', 1,
		[
			'L S',
			' R ',
			'S L'
		],
		{
			L: '#forge:leather',
			S: '#forge:rods/wooden',
			R: 'supplementaries:rope'
		}
	)


	modifyShapedID(e, 'wom:stone_staff', 'wom:stone_staff', 1,
		[
			'  X',
			' S ',
			'X  '
		],
		{
			X: 'minecraft:flint',
			S: Item.of('wom:wooden_staff').ignoreNBT()
		}
	)


	modifyShapedID(e, 'wom:iron_staff', 'wom:iron_staff', 1,
		[
			'  X',
			' S ',
			'X  '
		],
		{
			X: 'minecraft:iron_ingot',
			S: Item.of('wom:wooden_staff').ignoreNBT()
		}
	)


	modifyShapedID(e, 'wom:golden_staff', 'wom:golden_staff', 1,
		[
			'  X',
			' S ',
			'X  '
		],
		{
			X: 'minecraft:gold_ingot',
			S: Item.of('wom:wooden_staff').ignoreNBT()
		}
	)


	modifyShapedID(e, 'wom:diamond_staff', 'wom:diamond_staff', 1,
		[
			'  X',
			' S ',
			'X  '
		],
		{
			X: 'minecraft:diamond',
			S: Item.of('wom:wooden_staff').ignoreNBT()
		}
	)


})