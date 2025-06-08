onEvent("item.entity_interact", event => {

	var itemInHand = event.getItem()

	if (itemInHand.getId() == "minecraft:glass_bottle" && event.getTarget().getType() == "minecraft:ghast") {
		itemInHand.setCount(itemInHand.getCount() - 1)
		event.player.giveInHand("minecraft:ghast_tear")
	}
})

onEvent("lootjs", (event) => {
	event
		.addEntityLootModifier("minecraft:ghast")
		.removeLoot("minecraft:ghast_tear");
});
