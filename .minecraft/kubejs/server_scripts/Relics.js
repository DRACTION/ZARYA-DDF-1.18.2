onEvent('lootjs', event => {
  event
    .addLootTypeModifier(LootType.CHEST)
    .not((n) => {
      n.anyStructure(villageStructures, false)
    })
    .randomChance(0.08)
    .addLoot('relics:relic_experience_bottle')
})

onEvent('block.tags', e => {
  e.add('minecraft:mineable/axe', 'relics:researching_table')
})