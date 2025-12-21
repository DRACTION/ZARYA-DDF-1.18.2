onEvent("item.entity_interact", event => {

	let itemInHand = event.getItem()

	if (itemInHand.getId() == 'minecraft:glass_bottle'
		&& (event.getTarget().getType() == 'minecraft:cow' || event.getTarget().getType() == 'minecraft:mooshroom')) {
		
		itemInHand.setCount(itemInHand.getCount() - 1)
		event.player.giveInHand('farmersdelight:milk_bottle')
		event.server.runCommandSilent(`playsound minecraft:entity.cow.milk ambient @a ${event.getTarget().getX()} ${event.getTarget().getY()} ${event.getTarget().getZ()}`)
		// Чтобы избежать бага, когда полученную бутылку молока тут же выпиваешь без анимации
		event.player.addItemCooldown('farmersdelight:milk_bottle', 5)
	}
})