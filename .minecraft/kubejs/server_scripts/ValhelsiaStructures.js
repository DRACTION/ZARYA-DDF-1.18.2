onEvent('block.tags', e => {
	e.add('minecraft:mineable/pickaxe', [
		'valhelsia_structures:stone',
		'valhelsia_structures:andesite'
	])
	e.add('minecraft:mineable/shovel', [
		'valhelsia_structures:grass_block',
		'valhelsia_structures:dirt',
		'valhelsia_structures:coarse_dirt'
	])
})
