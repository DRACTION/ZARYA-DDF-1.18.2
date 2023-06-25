// https://trello.com/c/YgYMljXW

let catchItemId = "minecraft:glass_bottle"
let entityType = "minecraft:ghast"
let resultItemId = "minecraft:ghast_tear"

onEvent("item.entity_interact", event => {

	var itemInHand = event.getItem()

	if (itemInHand.getId() == catchItemId && event.getTarget().getType() == entityType) {
		itemInHand.setCount(itemInHand.getCount() - 1)
		event.player.giveInHand(resultItemId)
	}
})

onEvent("lootjs", (event) => {
	event
		.addEntityLootModifier(entityType)
		.removeLoot(resultItemId);
});
