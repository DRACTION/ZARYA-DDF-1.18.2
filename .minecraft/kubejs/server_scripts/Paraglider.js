onEvent("lootjs", (event) => {
  event
    .addLootTypeModifier([LootType.CHEST])
    .randomChance(0.001)
    .addWeightedLoot(1, [
        'paraglider:stamina_vessel'
    ]);
})

onEvent('recipes', event => {
  modifyShapedID(event,
    'paraglider:paraglider',
    'paraglider:paraglider',
    1,
    [
      'LCL',
      'CSC',
      'S S'
    ],
    {
      L:'#forge:leather',
      S:'#forge:rods/wooden',
      C:'farmersdelight:canvas'
    }
  )
})