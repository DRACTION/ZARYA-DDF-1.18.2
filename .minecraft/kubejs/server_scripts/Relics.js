onEvent('lootjs', event => {
  event
    .addLootTableModifier("minecraft:chests/village/village_fletcher")
    .removeLoot("relics:arrow_quiver");
})