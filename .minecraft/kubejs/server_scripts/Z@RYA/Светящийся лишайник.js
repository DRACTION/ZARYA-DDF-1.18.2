onEvent('recipes', e => {
	e.recipes.createMilling(
		['minecraft:glow_lichen', Item.of('2x minecraft:glow_lichen').withChance(0.5)],
		'minecraft:shroomlight')
})
