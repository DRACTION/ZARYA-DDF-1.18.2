onEvent('recipes', event => {
	event.campfireCooking('minecraft:torch', 'minecraft:stick').cookingTime(8*20) // 8 сек (20 тиков = 1 сек)
	event.campfireCooking('minecraft:torch', 'valhelsia_structures:doused_torch').cookingTime(2*20)
})