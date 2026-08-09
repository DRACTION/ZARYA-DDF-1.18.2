// todo = эффект chemical сделать как продолжение смерти пионерки.
onEvent('recipes', e => {
	
})

onEvent('entity.spawned', event => {
	////////// Отключить спавн яйца //////////
	if (event.getEntity().getType() == 'mutantmonsters:creeper_minion_egg') {
		event.cancel()
	}
})

onEvent('lootjs', event => {
	event
		.addLootTypeModifier([LootType.UNKNOWN,
			LootType.BLOCK,
			LootType.ENTITY,
			LootType.CHEST,
			LootType.FISHING,
			LootType.GIFT])
		.removeLoot(Item.of('mutantmonsters:mutant_skeleton_skull').ignoreNBT())
		.removeLoot(Item.of('mutantmonsters:mutant_skeleton_boots').ignoreNBT())
		.removeLoot(Item.of('mutantmonsters:mutant_skeleton_leggings').ignoreNBT())
		.removeLoot(Item.of('mutantmonsters:mutant_skeleton_chestplate').ignoreNBT())
		.removeLoot(Item.of('mutantmonsters:hulk_hammer').ignoreNBT())
		.removeLoot(Item.of('mutantmonsters:endersoul_hand').ignoreNBT())
		.removeLoot('mutantmonsters:mutant_skeleton_shoulder_pad')
		.removeLoot('mutantmonsters:mutant_skeleton_rib_cage')
		.removeLoot('mutantmonsters:mutant_skeleton_rib')
		.removeLoot('mutantmonsters:mutant_skeleton_limb')
		.removeLoot('mutantmonsters:mutant_skeleton_pelvis')
		.removeLoot('mutantmonsters:mutant_skeleton_arms')
		.removeLoot(Item.of('mutantmonsters:creeper_shard').ignoreNBT())
		.removeLoot(Item.of('mutantmonsters:creeper_minion_tracker').ignoreNBT())
})