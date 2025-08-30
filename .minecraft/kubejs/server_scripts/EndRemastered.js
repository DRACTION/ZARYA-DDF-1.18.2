onEvent('recipes', event => {
	event.replaceInput({id: 'endrem:undead_eye'}, 'endrem:undead_soul', 'tombstone:essence_of_undeath')
})

onEvent('item.tags', e => {
	e.add('zarya:only_finding_eyes', [
		'endrem:old_eye',
		'endrem:black_eye',
		'endrem:cold_eye',
		'endrem:corrupted_eye',
		'endrem:lost_eye',
		'endrem:nether_eye',
		'endrem:rogue_eye',
		'endrem:cursed_eye',
		'endrem:evil_eye',
		'endrem:guardian_eye',
		'endrem:magical_eye',
		'endrem:wither_eye',
	])
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