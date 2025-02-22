onEvent('recipes', e => {
	//////////// Чайник ////////////
	modifyShapedID(e, 'farmersrespite:kettle', 'farmersrespite:kettle', 1, [
		'SLS',
		'CBC',
		'CCC'], {
		B: ['minecraft:bucket', 'ceramicbucket:ceramic_bucket'],
		L: 'minecraft:leather',
		S: 'minecraft:bricks',
		C: 'minecraft:copper_ingot'
	})
})