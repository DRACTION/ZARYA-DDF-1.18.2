onEvent('recipes', e => {

  e.remove({id:'create:splashing/crushed_iron_ore'})
  e.recipes.createSplashing(
    [
      '9x minecraft:iron_nugget',
      Item.of('minecraft:iron_nugget', 5).withChance(0.80),
      Item.of('minecraft:iron_nugget', 5).withChance(0.25),
      Item.of('minecraft:redstone').withChance(0.75)
    ],
    'create:crushed_iron_ore'
  ).id('zarya:splashing/crushed_iron_ore')

  e.remove({id:'create:splashing/crushed_gold_ore'})
  e.recipes.createSplashing(
    [
      '9x minecraft:gold_nugget',
      Item.of('minecraft:gold_nugget', 5).withChance(0.80),
      Item.of('minecraft:gold_nugget', 5).withChance(0.25),
      Item.of('minecraft:quartz').withChance(0.50)
    ],
    'create:crushed_gold_ore'
  ).id('zarya:splashing/crushed_gold_ore')

  e.remove({id:'create:splashing/crushed_copper_ore'})
  e.recipes.createSplashing(
    [
      '9x create:copper_nugget',
      Item.of('create:copper_nugget', 5).withChance(0.80),
      Item.of('create:copper_nugget', 5).withChance(0.25),
      Item.of('minecraft:clay_ball').withChance(0.50)
    ],
    'create:crushed_copper_ore'
  ).id('zarya:splashing/crushed_copper_ore')

  e.remove({id:'create:splashing/crushed_zinc_ore'})
  e.recipes.createSplashing(
    [
      '9x create:zinc_nugget',
      Item.of('create:zinc_nugget', 5).withChance(0.80),
      Item.of('create:zinc_nugget', 5).withChance(0.25),
      Item.of('minecraft:gunpowder').withChance(0.25)
    ],
    'create:crushed_zinc_ore'
  ).id('zarya:splashing/crushed_zinc_ore')

})