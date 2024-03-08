onEvent('recipes', e => {
  // Увеличение выхода с 4 до 20
  modifyShapedID(
    e, //Event
    'framedblocks:framed_cube', //Result
    'framedblocks:framed_cube', //Craft ID
    20, //Count
    [
      'PSP',
      'S S',
      'PSP'
    ], //Pattern
    {
      P:'#minecraft:planks',
      S:'minecraft:stick'
    } //Ingredients
  )
})
