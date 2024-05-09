onEvent('recipes', event => {
	event.remove({id:'apotheosis:torch'})
	event.campfireCooking('minecraft:torch', 'minecraft:stick').cookingTime(160)  // 8 сек (20 тиков = 1 сек)
	event.campfireCooking('minecraft:torch', 'valhelsia_structures:doused_torch').cookingTime(160)
})