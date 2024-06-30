onEvent('recipes', e => {
	e.remove({ output: Item.of('grapplemod:grapplinghook').ignoreNBT() })
	e.shaped('grapplemod:grapplinghook', [
		'SPX',
		'RLP',
		'RRS'], {
		S: 'minecraft:slime_ball',
		R: 'supplementaries:rope',
		L: 'minecraft:lead',
		P: '#forge:plates/iron',
		X: Item.of('minecraft:iron_pickaxe').ignoreNBT()
	})
})