onEvent("lootjs", (event) => {
	
	event
		.addEntityLootModifier("minecraft:skeleton")
		.removeLoot('minecraft:skeleton_skull')
		.matchMainHand(ItemFilter.SWORD)
		.randomChance(0.01)
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
