onEvent('recipes', e => {
  e.remove({id: 'epicfight:sanji'})
})

onEvent("lootjs", (event) => {

  event
    .addLootTableModifier("minecraft:chests/shipwreck_supply")
    .randomChance(0.1)
    .addLoot('epicfight:sanji');
})
