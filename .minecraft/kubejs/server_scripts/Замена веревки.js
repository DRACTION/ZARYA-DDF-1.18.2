onEvent('recipes', e => {

	e.replaceInput({}, 'farmersdelight:rope', 'supplementaries:rope')
	e.replaceInput({}, '#supplementaries:ropes', 'supplementaries:rope')

})

onEvent("lootjs", (event) => {
	event
		.addLootTypeModifier([LootType.CHEST,LootType.GIFT])
		.replaceLoot("farmersdelight:rope", "supplementaries:rope");
});