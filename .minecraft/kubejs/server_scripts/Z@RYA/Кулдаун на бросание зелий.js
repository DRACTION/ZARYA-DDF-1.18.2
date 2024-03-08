onEvent('item.right_click', e => {
	if (e.item.id == 'minecraft:splash_potion'
		|| e.item.id == 'minecraft:lingering_potion') {
		e.player.addItemCooldown(e.item, 60)
	}
})
