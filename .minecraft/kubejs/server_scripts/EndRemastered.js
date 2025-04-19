onEvent('recipes', event => {
	event.replaceInput({id: 'endrem:undead_eye'}, 'endrem:undead_soul', 'tombstone:essence_of_undeath')
})

onEvent('lootjs', event => {
  event
    .addLootTypeModifier([LootType.UNKNOWN,
		LootType.BLOCK,
		LootType.ENTITY,
		LootType.CHEST,
		LootType.FISHING,
		LootType.GIFT])
    .removeLoot('endrem:undead_soul')
})