onEvent('recipes', event => {
	//////////////////// Замена Пылающее око на Проклятое око ////////////////////
	event.replaceInput({ input: "bosses_of_mass_destruction:blazing_eye" }, 'bosses_of_mass_destruction:blazing_eye', 'endrem:cursed_eye')
})

onEvent('lootjs', event => {
	event
		.addLootTypeModifier([LootType.CHEST])
		.removeLoot("endrem:cursed_eye")
		.replaceLoot("bosses_of_mass_destruction:blazing_eye", "endrem:cursed_eye")
})