onEvent('recipes', event => {
	var timeInSec = 12
	event.campfireCooking('minecraft:torch', 'minecraft:stick').cookingTime(timeInSec*20) // 12 сек (20 = 1 сек)
})