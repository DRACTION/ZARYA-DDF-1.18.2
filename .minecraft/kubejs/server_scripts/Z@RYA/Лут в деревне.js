onEvent("lootjs", (event) => {

	event
		.addLootTypeModifier(LootType.CHEST)
		.anyStructure([
			"minecraft:village_desert",
			"minecraft:village_plains",
			"minecraft:village_savanna",
			"minecraft:village_snowy",
			"minecraft:village_taiga",
			"repurposed_structures:village_mushroom",
			"repurposed_structures:village_badlands",
			"repurposed_structures:village_birch",
			"repurposed_structures:village_dark_forest",
			"repurposed_structures:village_giant_taiga",
			"repurposed_structures:village_jungle",
			"repurposed_structures:village_mountains",
			"repurposed_structures:village_oak",
			"repurposed_structures:village_swamp",
			"ctov:large/village_beach",
			"ctov:large/village_dark_forest",
			"ctov:large/village_jungle",
			"ctov:large/village_mesa",
			"ctov:large/village_mountain",
			"ctov:large/village_mushroom",
			"ctov:large/village_swamp",
			"ctov:large/village_desert",
			"ctov:large/village_plains",
			"ctov:large/village_savanna",
			"ctov:large/village_snowy",
			"ctov:large/village_taiga",
			"ctov:medium/village_beach",
			"ctov:medium/village_dark_forest",
			"ctov:medium/village_jungle",
			"ctov:medium/village_mesa",
			"ctov:medium/village_mountain",
			"ctov:medium/village_mushroom",
			"ctov:medium/village_swamp",
			"ctov:medium/village_desert",
			"ctov:medium/village_plains",
			"ctov:medium/village_savanna",
			"ctov:medium/village_snowy",
			"ctov:medium/village_taiga",
			"ctov:small/village_beach",
			"ctov:small/village_dark_forest",
			"ctov:small/village_jungle",
			"ctov:small/village_mesa",
			"ctov:small/village_mountain",
			"ctov:small/village_mushroom",
			"ctov:small/village_swamp",
			"ctov:small/village_desert",
			"ctov:small/village_plains",
			"ctov:small/village_savanna",
			"ctov:small/village_snowy",
			"ctov:small/village_taiga"
			], false)
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
