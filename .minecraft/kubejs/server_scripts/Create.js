
onEvent('recipes', e => {
  //////////// Переплавка инструментов и брони в слитки ////////////
  e.recipes.createMixing('minecraft:copper_ingot', '#zarya:blasting_to_copper_ingot').lowheated()
  e.recipes.createMixing('minecraft:iron_ingot', '#zarya:blasting_to_iron_ingot').heated()
  e.recipes.createMixing('minecraft:gold_ingot', '#zarya:blasting_to_golden_ingot').heated()
  e.recipes.createMixing('minecraft:netherite_ingot', '#zarya:blasting_to_netherite_ingot').superheated()
  ///////////////// Пластины в слитки /////////////////
  e.recipes.createMixing('minecraft:copper_ingot', '#forge:plates/copper').lowheated()
  e.recipes.createMixing('minecraft:iron_ingot', '#forge:plates/iron').heated()
  e.recipes.createMixing('minecraft:gold_ingot', '#forge:plates/gold').heated()
  e.recipes.createMixing('minecraft:netherite_ingot', '#forge:plates/netherite').superheated()
  e.recipes.createMixing('create:brass_ingot', '#forge:plates/brass').heated()
  e.recipes.createMixing('create:zinc_ingot', '#forge:plates/zinc').lowheated()
  ///////////////// Пластины в блоки /////////////////
  e.recipes.createCompacting('minecraft:copper_block', '9x #forge:plates/copper').lowheated()
  e.recipes.createCompacting('minecraft:iron_block', '9x #forge:plates/iron').heated()
  e.recipes.createCompacting('minecraft:gold_block', '9x #forge:plates/gold').heated()
  e.recipes.createCompacting('minecraft:netherite_block', '9x #forge:plates/netherite').superheated()
  e.recipes.createCompacting('create:brass_block', '9x #forge:plates/brass').heated()
  e.recipes.createCompacting('create:zinc_block', '9x #forge:plates/zinc').lowheated()
  //////////// Механический пресс ////////////
  modifyShaped(e, 'create:mechanical_press', 1,
    [
      'S',
      'C',
      'A'
    ],
    {
      S: 'create:shaft',
      C: 'create:andesite_casing',
      A: 'minecraft:polished_andesite_slab'
    })
  //////////// Андезитовый сплав в печи из цинка ////////////
  e.smelting('create:andesite_alloy', '#forge:raw_materials/zinc')
  //////////// Андезитовый сплав только при нагреве и смешивании ////////////
  e.remove({id:'create:crafting/materials/andesite_alloy'})
  e.remove({id:'create:crafting/materials/andesite_alloy_from_zinc'})
  e.remove({id:'create:mixing/andesite_alloy'})
  e.remove({id:'create:mixing/andesite_alloy_from_zinc'})
  e.recipes.createMixing('create:andesite_alloy', ['#forge:nuggets/zinc', '#chipped:andesite']).lowheated()
  ///////////////// Кусочки металла в слитки /////////////////
  e.remove({id: 'create:crafting/materials/zinc_ingot_from_compacting'})
  e.remove({id: 'create:crafting/materials/brass_ingot_from_compacting'})
  e.remove({id: 'create:crafting/materials/copper_ingot'})
  e.remove({id: 'createdeco:netherite_ingot'})
  e.remove({id: 'minecraft:iron_ingot_from_nuggets'})
  e.remove({id: 'minecraft:gold_ingot_from_nuggets'})
  e.recipes.createCompacting('create:zinc_ingot', ['9x #forge:nuggets/zinc']).lowheated()
  e.recipes.createCompacting('minecraft:copper_ingot', ['9x #forge:nuggets/copper']).lowheated()
  e.recipes.createCompacting('minecraft:iron_ingot', ['9x #forge:nuggets/iron']).heated()
  e.recipes.createCompacting('minecraft:gold_ingot', ['9x #forge:nuggets/gold']).heated()
  e.recipes.createCompacting('create:brass_ingot', ['9x #forge:nuggets/brass']).heated()
  e.recipes.createCompacting('minecraft:netherite_ingot', ['9x #forge:nuggets/netherite']).superheated()
  ///////////////// Руда в слитки /////////////////
  e.recipes.createCompacting('create:zinc_ingot', ['#forge:raw_materials/zinc']).lowheated()
  e.recipes.createCompacting('create:zinc_ingot', ['create:crushed_raw_zinc']).lowheated()
  e.recipes.createCompacting('minecraft:copper_ingot', ['#forge:raw_materials/copper']).lowheated()
  e.recipes.createCompacting('minecraft:copper_ingot', ['create:crushed_raw_copper']).lowheated()
  e.recipes.createCompacting('minecraft:iron_ingot', ['#forge:raw_materials/iron']).heated()
  e.recipes.createCompacting('minecraft:iron_ingot', ['create:crushed_raw_iron']).heated()
  e.recipes.createCompacting('minecraft:gold_ingot', ['#forge:raw_materials/gold']).heated()
  e.recipes.createCompacting('minecraft:gold_ingot', ['create:crushed_raw_gold']).heated()
  ///////////////// Слитки металла в блоки /////////////////
  e.remove({id: 'create:crafting/materials/zinc_block_from_compacting'})
  e.remove({id: 'create:crafting/materials/brass_block_from_compacting'})
  e.remove({id: 'minecraft:iron_block'})
  e.remove({id: 'minecraft:copper_block'})
  e.remove({id: 'minecraft:gold_block'})
  e.remove({id: 'minecraft:netherite_block'})
  e.recipes.createCompacting('create:zinc_block', ['9x #forge:ingots/zinc']).lowheated()
  e.recipes.createCompacting('minecraft:copper_block', ['9x #forge:ingots/copper']).lowheated()
  e.recipes.createCompacting('minecraft:iron_block', ['9x #forge:ingots/iron']).heated()
  e.recipes.createCompacting('minecraft:gold_block', ['9x #forge:ingots/gold']).heated()
  e.recipes.createCompacting('create:brass_block', ['9x #forge:ingots/brass']).heated()
  e.recipes.createCompacting('minecraft:netherite_block', ['9x #forge:ingots/netherite']).superheated()
  ///////////////// Руда в блоки /////////////////
  e.recipes.createCompacting('create:zinc_block', ['#forge:storage_blocks/raw_zinc']).lowheated()
  e.recipes.createCompacting('create:zinc_block', ['9x #forge:raw_materials/zinc']).lowheated()
  e.recipes.createCompacting('create:zinc_block', ['9x create:crushed_raw_zinc']).lowheated()
  e.recipes.createCompacting('minecraft:copper_block', ['#forge:storage_blocks/raw_copper']).lowheated()
  e.recipes.createCompacting('minecraft:copper_block', ['9x #forge:raw_materials/copper']).lowheated()
  e.recipes.createCompacting('minecraft:copper_block', ['9x create:crushed_raw_copper']).lowheated()
  e.recipes.createCompacting('minecraft:iron_block', ['#forge:storage_blocks/raw_iron']).heated()
  e.recipes.createCompacting('minecraft:iron_block', ['9x #forge:raw_materials/iron']).heated()
  e.recipes.createCompacting('minecraft:iron_block', ['9x create:crushed_raw_iron']).heated()
  e.recipes.createCompacting('minecraft:gold_block', ['#forge:storage_blocks/raw_gold']).heated()
  e.recipes.createCompacting('minecraft:gold_block', ['9x #forge:raw_materials/gold']).heated()
  e.recipes.createCompacting('minecraft:gold_block', ['9x create:crushed_raw_gold']).heated()
  ///////////////// Блоки металла в слитки /////////////////
  e.remove({id: 'create:crafting/materials/zinc_ingot_from_decompacting'})
  e.remove({id: 'create:crafting/materials/brass_ingot_from_decompacting'})
  e.remove({id: 'minecraft:copper_ingot_from_waxed_copper_block'})
  e.remove({id: 'minecraft:copper_ingot'})
  e.remove({id: 'minecraft:iron_ingot_from_iron_block'})
  e.remove({id: 'minecraft:gold_ingot_from_gold_block'})
  e.remove({id: 'minecraft:netherite_ingot_from_netherite_block'})
  e.recipes.createMixing('9x create:zinc_ingot', ['#forge:storage_blocks/zinc']).lowheated()
  e.recipes.createMixing('9x create:zinc_ingot', ['#forge:storage_blocks/raw_zinc']).lowheated()
  e.recipes.createMixing('9x minecraft:copper_ingot', ['#forge:storage_blocks/copper']).lowheated()
  e.recipes.createMixing('9x minecraft:copper_ingot', ['#forge:storage_blocks/raw_copper']).lowheated()
  e.recipes.createMixing('9x minecraft:iron_ingot', ['#forge:storage_blocks/iron']).heated()
  e.recipes.createMixing('9x minecraft:iron_ingot', ['#forge:storage_blocks/raw_iron']).heated()
  e.recipes.createMixing('9x minecraft:gold_ingot', ['#forge:storage_blocks/gold']).heated()
  e.recipes.createMixing('9x minecraft:gold_ingot', ['#forge:storage_blocks/raw_gold']).heated()
  e.recipes.createMixing('9x create:brass_ingot', ['#forge:storage_blocks/brass']).heated()
  e.recipes.createMixing('9x minecraft:netherite_ingot', ['#forge:storage_blocks/netherite']).superheated()
  ///////////////// Слитки металла и руда в кусочки /////////////////
  e.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting'})
  e.remove({id: 'create:crafting/materials/brass_nugget_from_decompacting'})
  e.remove({id: 'create:crafting/materials/copper_nugget'})
  e.remove({id: 'createdeco:netherite_nugget_from_netherite_ingot'})
  e.remove({id: 'minecraft:gold_nugget'})
  e.remove({id: 'minecraft:iron_nugget'})
  e.recipes.createMixing('9x create:zinc_nugget', ['#forge:ingots/zinc']).lowheated()
  e.recipes.createMixing('9x create:zinc_nugget', ['#forge:ores/zinc']).lowheated()
  e.recipes.createMixing('9x create:zinc_nugget', ['#forge:raw_materials/zinc']).lowheated()
  e.recipes.createMixing('9x create:zinc_nugget', ['create:crushed_raw_zinc']).lowheated()
  e.recipes.createMixing('9x create:copper_nugget', ['#forge:ingots/copper']).lowheated()
  e.recipes.createMixing('9x create:copper_nugget', ['#forge:ores/copper']).lowheated()
  e.recipes.createMixing('9x create:copper_nugget', ['#forge:raw_materials/copper']).lowheated()
  e.recipes.createMixing('9x create:copper_nugget', ['create:crushed_raw_copper']).lowheated()
  e.recipes.createMixing('9x minecraft:iron_nugget', ['#forge:ingots/iron']).heated()
  e.recipes.createMixing('9x minecraft:iron_nugget', ['#forge:ores/iron']).heated()
  e.recipes.createMixing('9x minecraft:iron_nugget', ['#forge:raw_materials/iron']).heated()
  e.recipes.createMixing('9x minecraft:iron_nugget', ['create:crushed_raw_iron']).heated()
  e.recipes.createMixing('9x minecraft:gold_nugget', ['#forge:ingots/gold']).heated()
  e.recipes.createMixing('9x minecraft:gold_nugget', ['#forge:ores/gold']).heated()
  e.recipes.createMixing('9x minecraft:gold_nugget', ['#forge:raw_materials/gold']).heated()
  e.recipes.createMixing('9x minecraft:gold_nugget', ['create:crushed_raw_gold']).heated()
  e.recipes.createMixing('9x create:brass_nugget', ['#forge:ingots/brass']).heated()
  e.recipes.createMixing('9x createdeco:netherite_nugget', ['#forge:ingots/netherite']).superheated()
  //////////////////////// Сплав незерита ////////////////////////
  e.remove({id: 'minecraft:netherite_ingot'})
  e.recipes.createMixing('9x createdeco:netherite_nugget', ['4x #forge:ingots/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createMixing('9x createdeco:netherite_nugget', ['3x #forge:ingots/gold', '9x #forge:nuggets/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createMixing('9x createdeco:netherite_nugget', ['2x #forge:ingots/gold', '18x #forge:nuggets/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createMixing('9x createdeco:netherite_nugget', ['#forge:ingots/gold', '27x #forge:nuggets/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createMixing('9x createdeco:netherite_nugget', ['36x #forge:nuggets/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createCompacting('minecraft:netherite_ingot', ['4x #forge:ingots/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createCompacting('minecraft:netherite_ingot', ['3x #forge:ingots/gold', '9x #forge:nuggets/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createCompacting('minecraft:netherite_ingot', ['2x #forge:ingots/gold', '18x #forge:nuggets/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createCompacting('minecraft:netherite_ingot', ['#forge:ingots/gold', '27x #forge:nuggets/gold', '4x minecraft:netherite_scrap']).superheated()
  e.recipes.createCompacting('minecraft:netherite_ingot', ['36x #forge:nuggets/gold', '4x minecraft:netherite_scrap']).superheated()
  //////////////////////// Сплав Латуни ////////////////////////
  e.remove({id: 'create:mixing/brass_ingot'})
  e.recipes.createMixing('18x create:brass_nugget', ['#forge:ingots/copper', '#forge:ingots/zinc']).heated()
  e.recipes.createMixing('18x create:brass_nugget', ['#forge:ingots/copper', '9x #forge:nuggets/zinc']).heated()
  e.recipes.createMixing('18x create:brass_nugget', ['9x #forge:nuggets/copper', '#forge:ingots/zinc']).heated()
  e.recipes.createMixing('18x create:brass_nugget', ['9x #forge:nuggets/copper', '9x #forge:nuggets/zinc']).heated()
  //////////////////////// Промывка дробленной руды ////////////////////////
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
  ////////// Незеритовая дайвинговая броня из пластин ///////////
  e.replaceInput({id: 'create:crafting/appliances/netherite_diving_helmet'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
  e.replaceInput({id: 'create:crafting/appliances/netherite_diving_boots'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')

})

onEvent('item.tags', e => {
  //////////// Тэги для переплавки ////////////
  let arr = [
    ['copper',    'stone',     false, false],
    ['iron',      'iron',      true,  true],
    ['golden',    'golden',    true,  true],
    ['netherite', 'netherite', true,  false]
  ]
  arr.forEach( inArr => {
    e.add(`zarya:blasting_to_${inArr[0]}_ingot`, [
      `minecraft:${inArr[1]}_sword`,
      `minecraft:${inArr[1]}_shovel`,
      `minecraft:${inArr[1]}_pickaxe`,
      `minecraft:${inArr[1]}_axe`,
      `minecraft:${inArr[1]}_hoe`
    ])
    if (inArr[2]) {
      e.add(`zarya:blasting_to_${inArr[0]}_ingot`, [
        `minecraft:${inArr[1]}_helmet`,
        `minecraft:${inArr[1]}_chestplate`,
        `minecraft:${inArr[1]}_leggings`,
        `minecraft:${inArr[1]}_boots`,
        `farmersdelight:${inArr[1]}_knife`,
        `epicfight:${inArr[1]}_greatsword`,
        `epicfight:${inArr[1]}_spear`,
        `epicfight:${inArr[1]}_tachi`,
        `epicfight:${inArr[1]}_longsword`,
        `epicfight:${inArr[1]}_dagger`,
        `wom:${inArr[1]}_greataxe`,
        `wom:${inArr[1]}_staff`
      ])
    }
    if (inArr[3]) {
      e.add(`zarya:blasting_to_${inArr[0]}_ingot`, `minecraft:${inArr[1]}_horse_armor`)
    }
  })
  e.add(`zarya:blasting_to_iron_ingot`, `ef_weapon_extended:iron_knuckles`)
  e.add(`zarya:blasting_to_golden_ingot`, [
    `wom:golden_monocle`,
    `wom:golden_kit`,
    `wom:golden_chrono`,
    `wom:golden_mokassin`,
    `ef_weapon_extended:gold_knuckles`
  ])
  e.add(`zarya:blasting_to_netherite_ingot`, [
    `wom:netherite_mask`,
    `wom:netherite_manicle`,
    `wom:netherite_belt`,
    `wom:netherite_chains`,
    `ef_weapon_extended:netherite_knuckles`
  ])
})

onEvent('block.tags', e => {
  ////////// Цинковые блоки можно ломать любой киркой ///////////
  e.remove('minecraft:needs_iron_tool', [
    'create:zinc_ore',
    'create:deepslate_zinc_ore',
    'create:raw_zinc_block',
    'create:zinc_block'])
  ////////// Медные блоки можно ломать любой киркой ///////////
  let copperPrefix = [
    '',
    'exposed_',
    'weathered_',
    'oxidized_'
  ]
  let copper = [
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:raw_copper_block',
    'minecraft:copper_block',
    'minecraft:exposed_copper',
    'minecraft:weathered_copper',
    'minecraft:oxidized_copper',
    'minecraft:waxed_copper_block',
    'minecraft:waxed_exposed_copper',
    'minecraft:waxed_weathered_copper',
    'minecraft:waxed_oxidized_copper'
  ]
  copperPrefix.forEach(prefix => {
    copper.push(
      `minecraft:${prefix}cut_copper`,
      `minecraft:${prefix}cut_copper_stairs`,
      `minecraft:${prefix}cut_copper_slab`,
      `minecraft:waxed_${prefix}cut_copper`,
      `minecraft:waxed_${prefix}cut_copper_stairs`,
      `minecraft:waxed_${prefix}cut_copper_slab`,
      `create:${prefix}copper_shingles`,
      `create:${prefix}copper_shingle_slab`,
      `create:${prefix}copper_shingle_stairs`,
      `create:waxed_${prefix}copper_shingles`,
      `create:waxed_${prefix}copper_shingle_slab`,
      `create:waxed_${prefix}copper_shingle_stairs`,
      `create:${prefix}copper_tiles`,
      `create:${prefix}copper_tile_slab`,
      `create:${prefix}copper_tile_stairs`,
      `create:waxed_${prefix}copper_tiles`,
      `create:waxed_${prefix}copper_tile_slab`,
      `create:waxed_${prefix}copper_tile_stairs`
    )
  })
  e.remove('minecraft:needs_stone_tool', copper)
})