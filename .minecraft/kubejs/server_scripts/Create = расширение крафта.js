onEvent('recipes', e => {

  e.remove({id:'create:splashing/crushed_raw_iron'})
  e.recipes.createSplashing(
    [
      '9x minecraft:iron_nugget',
      Item.of('minecraft:iron_nugget', 5).withChance(0.80),
      Item.of('minecraft:iron_nugget', 5).withChance(0.25),
      Item.of('minecraft:redstone').withChance(0.75)
    ],
    'create:crushed_raw_iron'
  ).id('zarya:splashing/crushed_raw_iron')

  e.remove({id:'create:splashing/crushed_raw_gold'})
  e.recipes.createSplashing(
    [
      '9x minecraft:gold_nugget',
      Item.of('minecraft:gold_nugget', 5).withChance(0.80),
      Item.of('minecraft:gold_nugget', 5).withChance(0.25),
      Item.of('minecraft:quartz').withChance(0.50)
    ],
    'create:crushed_raw_gold'
  ).id('zarya:splashing/crushed_raw_gold')

  e.remove({id:'create:splashing/crushed_raw_copper'})
  e.recipes.createSplashing(
    [
      '9x create:copper_nugget',
      Item.of('create:copper_nugget', 5).withChance(0.80),
      Item.of('create:copper_nugget', 5).withChance(0.25),
      Item.of('minecraft:clay_ball').withChance(0.50)
    ],
    'create:crushed_raw_copper'
  ).id('zarya:splashing/crushed_raw_copper')

  e.remove({id:'create:splashing/crushed_raw_zinc'})
  e.recipes.createSplashing(
    [
      '9x create:zinc_nugget',
      Item.of('create:zinc_nugget', 5).withChance(0.80),
      Item.of('create:zinc_nugget', 5).withChance(0.25),
      Item.of('minecraft:gunpowder').withChance(0.25)
    ],
    'create:crushed_raw_zinc'
  ).id('zarya:splashing/crushed_raw_zinc')

})