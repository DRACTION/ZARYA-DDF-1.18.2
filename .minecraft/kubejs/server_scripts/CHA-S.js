onEvent('recipes', event => {
	/////////// Седло ///////////
	event.shaped('minecraft:saddle',
		[
			"XXX",
			"O O",
			"I I"
		],
		{
			X: 'minecraft:leather',
			I: 'minecraft:tripwire_hook',
			O: '#forge:rope'
		}
	)
	event.shaped('minecraft:iron_horse_armor',
		[
			"  M",
			"XWX",
			"I I"
		],
		{
			W: '#minecraft:wool',
			M: 'minecraft:iron_helmet',
			X: '#forge:ingots/iron',
			I: 'minecraft:iron_leggings'
		}
	)
	event.shaped('minecraft:golden_horse_armor',
		[
			"  M",
			"XWX",
			"I I"
		],
		{
			W: '#minecraft:wool',
			M: 'minecraft:golden_helmet',
			X: '#forge:ingots/gold',
			I: 'minecraft:golden_leggings'
		}
	)
	event.shaped('minecraft:diamond_horse_armor',
		[
			"  M",
			"XWX",
			"I I"
		],
		{
			W: '#minecraft:wool',
			M: 'minecraft:diamond_helmet',
			X: '#forge:gems/diamond',
			I: 'minecraft:diamond_leggings'
		}
	)
})
