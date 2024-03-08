onEvent("lootjs", (event) => {
	
	event
		.addEntityLootModifier("minecraft:wither_skeleton")
		.removeLoot('minecraft:wither_skeleton_skull')
		.randomChance(0.1)
		.addLoot('minecraft:wither_skeleton_skull')

	event
		.addEntityLootModifier("minecraft:skeleton")
		.removeLoot('minecraft:skeleton_skull')
		.randomChance(0.1)
		.addLoot('minecraft:skeleton_skull')

	event
		.addEntityLootModifier("minecraft:creeper")
		.removeLoot('minecraft:creeper_head')
		.triggerExplosion(1, false, false)
		.matchMainHand(ItemFilter.SWORD)
		.randomChance(0.01)
		.addLoot('minecraft:creeper_head')

	event
		.addEntityLootModifier("minecraft:zombie")
		.removeLoot('minecraft:zombie_head')
		.matchMainHand(ItemFilter.SWORD)
		.randomChance(0.01)
		.addLoot('minecraft:zombie_head')

})
