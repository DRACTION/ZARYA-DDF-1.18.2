onEvent('recipes', event => {
	var wool = '#minecraft:wool'

	event.shaped('minecraft:saddle', ["XXX", "O O", "I I"],
		{
			X: 'minecraft:leather',
			I: '#forge:ingots/iron',
			O: 'minecraft:string'
		}
	)
	event.shaped('minecraft:iron_horse_armor', ["  M", "XWX", "I I"],
		{
			W: wool,
			M: 'minecraft:iron_helmet',
			X: '#forge:ingots/iron',
			I: 'minecraft:iron_leggings'
		}
	)
	event.shaped('minecraft:golden_horse_armor', ["  M", "XWX", "I I"],
		{
			W: wool,
			M: 'minecraft:golden_helmet',
			X: '#forge:ingots/gold',
			I: 'minecraft:golden_leggings'
		}
	)
	event.shaped('minecraft:diamond_horse_armor', ["  M", "XWX", "I I"],
		{
			W: wool,
			M: 'minecraft:diamond_helmet',
			X: '#forge:gems/diamond',
			I: 'minecraft:diamond_leggings'
		}
	)
})