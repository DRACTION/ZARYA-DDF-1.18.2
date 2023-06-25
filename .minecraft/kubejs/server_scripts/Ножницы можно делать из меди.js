onEvent('recipes', e => {

	var modifyTool = (e, result, pattern, materials) => {
		modifyShapedID(e, result, result, 1, pattern, materials)
	}

	modifyTool(e, 'minecraft:shears', [' X', 'X '],
		{
			X: '#zarya:shears_material'
		}
	)
	

})

onEvent('item.tags', e => {
	e.add('zarya:shears_material', ['minecraft:iron_ingot', 'minecraft:copper_ingot'])
})