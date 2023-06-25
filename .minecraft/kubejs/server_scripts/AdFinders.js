onEvent('recipes', e => {
  // Усложнение крафта
  modifyShapedID(
    e, //Event
    'adfinders:gem_finder', //Result
    'adfinders:gem_finder', //Craft ID
    1, //Count
    [
      'LPQ',
      'DCD',
      'EDE'
    ], //Pattern
    {
      P:'create:precision_mechanism',
      L:'minecraft:lapis_lazuli',
      Q:'minecraft:quartz',
      D:'minecraft:diamond',
      C:'explorerscompass:explorerscompass',
      E:'minecraft:emerald'
    } //Ingredients
  )
  modifyShapedID(
    e, //Event
    'adfinders:mineral_finder', //Result
    'adfinders:mineral_finder', //Craft ID
    1, //Count
    [
      'RPR',
      'ICI',
      'OIO'
    ], //Pattern
    {
      P:'create:precision_mechanism',
      R:'minecraft:redstone',
      I:'create:iron_sheet',
      O:'minecraft:coal',
      C:'explorerscompass:explorerscompass'
    } //Ingredients
  )
  modifyShapedID(
    e, //Event
    'adfinders:metal_finder', //Result
    'adfinders:metal_finder', //Craft ID
    1, //Count
    [
      'GPZ',
      'SCS',
      'ISO'
    ], //Pattern
    {
      P:'create:precision_mechanism',
      C:'explorerscompass:explorerscompass',
      G:'minecraft:gold_ingot',
      S:'create:golden_sheet',
      Z:'create:zinc_ingot',
      I:'minecraft:iron_ingot',
      O:'minecraft:copper_ingot'
    } //Ingredients
  )
})