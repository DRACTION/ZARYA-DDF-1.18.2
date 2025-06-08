onEvent("lootjs", (event) => {

	event
		.addLootTypeModifier(LootType.CHEST)
		.anyStructure(villageStructures, false)
		.modifyLoot("minecraft:bread", (itemStack) => {
			itemStack.setCount(Math.random() < 0.3 ? 1 : 0);
			return itemStack;
		})
		.modifyLoot("minecraft:potato", (itemStack) => {
			itemStack.setCount(Math.random() < 0.3 ? 1 : 0);
			return itemStack;
		})
		.modifyLoot("minecraft:apple", (itemStack) => {
			itemStack.setCount(Math.random() < 0.3 ? 1 : 0);
			return itemStack;
		})
})
