onEvent('recipes', e => {
  // Усложнение крафта
  modifyShapedID(
    e, //Event
    'waystones:warp_stone', //Result
    'waystones:warp_stone', //Craft ID
    1, //Count
    [
      'EFE',
      'PMP',
      'PDP'
    ], //Pattern
    {
      M:'create:precision_mechanism',
      F:'minecraft:purple_dye',
      P:'minecraft:ender_pearl',
      D:'minecraft:diamond',
      E:'minecraft:emerald'
    } //Ingredients
  )
})
