onEvent('recipes', e => {
	e.recipes.createCompacting('kubejs:sturdy_diamond_sheet', ['#forge:plates/obsidian', '#forge:dusts/diamond']).heated()
})

onEvent('item.tags', e => {
	e.add('forge:plates/diamond', 'kubejs:sturdy_diamond_sheet')
})