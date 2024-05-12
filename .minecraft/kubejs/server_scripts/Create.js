onEvent('recipes', e => {

  //////////// Андезитовый сплав только из цинка ////////////
  e.remove({id:'create:crafting/materials/andesite_alloy'})
  e.remove({id:'create:mixing/andesite_alloy'})

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

  ///////////////// Палки из досок /////////////////
  e.recipes.createCutting(
    [
      '4x minecraft:stick',
      Item.of('minecraft:stick', 5).withChance(0.10)
    ],
    '#minecraft:planks'
  ).id('zarya:cutting/planks_to_sticks')

  e.recipes.createCutting(
    [
      '6x minecraft:stick',
      Item.of('minecraft:stick', 5).withChance(0.10)
    ],
    '#zarya:hollow_logs'
  ).id('zarya:cutting/hollow_logs_to_sticks')

  ///////////////// Кора дерева из бревен /////////////////
  woods.forEach(name => {
    e.remove({id:`create:cutting/${name}_log`})
    e.recipes.createCutting(
      [
        `minecraft:stripped_${name}_log`,
        'farmersdelight:tree_bark',
        Item.of('farmersdelight:tree_bark', 1).withChance(0.50)
      ],
      `minecraft:${name}_log`
    ).id(`zarya:cutting/${name}_log`)

    e.remove({id:`create:cutting/${name}_wood`})
    e.recipes.createCutting(
      [
        `minecraft:stripped_${name}_wood`,
        'farmersdelight:tree_bark',
        Item.of('farmersdelight:tree_bark', 1).withChance(0.50)
      ],
      `minecraft:${name}_wood`
    ).id(`zarya:cutting/${name}_wood`)
  })

  endWoodNames.forEach(name => {
    e.remove({id:`create:cutting/${name}_stem`})
    e.recipes.createCutting(
      [
        `minecraft:stripped_${name}_stem`,
        'farmersdelight:tree_bark',
        Item.of('farmersdelight:tree_bark', 1).withChance(0.50)
      ],
      `minecraft:${name}_stem`
    ).id(`zarya:cutting/${name}_stem`)

    e.remove({id:`create:cutting/${name}_hyphae`})
    e.recipes.createCutting(
      [
        `minecraft:stripped_${name}_hyphae`,
        'farmersdelight:tree_bark',
        Item.of('farmersdelight:tree_bark', 1).withChance(0.50)
      ],
      `minecraft:${name}_hyphae`
    ).id(`zarya:cutting/${name}_hyphae`)
  })

})