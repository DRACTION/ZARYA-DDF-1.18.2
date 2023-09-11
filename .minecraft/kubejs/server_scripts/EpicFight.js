onEvent('recipes', e => {

  // Копья
  let materials = {
    R: 'supplementaries:rope',
    S: '#forge:rods/wooden'
  }
  let template = [
    ' RX',
    ' S ',
    'S  '
  ]
  materials.X = `minecraft:stone_sword`
  modifyShapedID(e, `epicfight:stone_spear`, `epicfight:stone_spear`, 1, template, materials)
  materials.X = `minecraft:iron_sword`
  modifyShapedID(e, `epicfight:iron_spear`, `epicfight:iron_spear`, 1, template, materials)
  materials.X = `minecraft:golden_sword`
  modifyShapedID(e, `epicfight:golden_spear`, `epicfight:golden_spear`, 1, template, materials)
  materials.X = `minecraft:diamond_sword`
  modifyShapedID(e, `epicfight:diamond_spear`, `epicfight:diamond_spear`, 1, template, materials)

  // Кинжалы
  template = [
    'RX',
    'S '
  ]
  materials.X = `#forge:plates/iron`
  modifyShapedID(e, `epicfight:iron_dagger`, `epicfight:iron_dagger`, 1, template, materials)
  materials.X = `#forge:plates/gold`
  modifyShapedID(e, `epicfight:golden_dagger`, `epicfight:golden_dagger`, 1, template, materials)
  modifyShapedID(e, `epicfight:diamond_dagger`, `epicfight:diamond_dagger`, 1, [' P', 'K '], {
    P: 'createaddition:diamond_grit_sandpaper', K: 'farmersdelight:diamond_knife'
  })

  // Greatsword
  template = [
    'RPX',
    'PXP',
    'SP '
  ]
  materials.X = `#forge:ingots/iron`
  materials.P = `#forge:plates/iron`
  modifyShapedID(e, `epicfight:iron_greatsword`, `epicfight:iron_greatsword`, 1, template, materials)
  materials.X = `#forge:ingots/gold`
  materials.P = `#forge:plates/gold`
  modifyShapedID(e, `epicfight:golden_greatsword`, `epicfight:golden_greatsword`, 1, template, materials)
  materials.X = `#forge:gems/diamond`
  materials.P = `#forge:gems/diamond`
  modifyShapedID(e, `epicfight:diamond_greatsword`, `epicfight:diamond_greatsword`, 1, template, materials)

  // Longsword
  materials = {}
  template = [
    '  P',
    ' P ',
    'S  '
  ]
  materials.S = `minecraft:iron_sword`
  materials.P = `#forge:plates/iron`
  modifyShapedID(e, `epicfight:iron_longsword`, `epicfight:iron_longsword`, 1, template, materials)
  materials.S = `minecraft:golden_sword`
  materials.P = `#forge:plates/gold`
  modifyShapedID(e, `epicfight:golden_longsword`, `epicfight:golden_longsword`, 1, template, materials)

  // Tachi
  template = [
    ' P',
    ' P',
    'S '
  ]
  materials.S = `minecraft:iron_sword`
  materials.P = `#forge:plates/iron`
  modifyShapedID(e, `epicfight:iron_tachi`, `epicfight:iron_tachi`, 1, template, materials)
  materials.S = `minecraft:golden_sword`
  materials.P = `#forge:plates/gold`
  modifyShapedID(e, `epicfight:golden_tachi`, `epicfight:golden_tachi`, 1, template, materials)

  // Книги навыков в обычные книги
  e.shapeless('minecraft:book', ['epicfight:skillbook'])

})

onEvent('item.tags', e => {

  e.add('forge:tools/knives', 'epicfight:iron_dagger')
  e.add('farmersdelight:tools/knives', 'epicfight:iron_dagger')
  e.add('farmersdelight:straw_harvesters', 'epicfight:iron_dagger')

  e.add('forge:tools/knives', 'epicfight:golden_dagger')
  e.add('farmersdelight:tools/knives', 'epicfight:golden_dagger')
  e.add('farmersdelight:straw_harvesters', 'epicfight:golden_dagger')

  e.add('forge:tools/knives', 'epicfight:diamond_dagger')
  e.add('farmersdelight:tools/knives', 'epicfight:diamond_dagger')
  e.add('farmersdelight:straw_harvesters', 'epicfight:diamond_dagger')

  e.add('forge:tools/knives', 'epicfight:netherite_dagger')
  e.add('farmersdelight:tools/knives', 'epicfight:netherite_dagger')
  e.add('farmersdelight:straw_harvesters', 'epicfight:netherite_dagger')

})

onEvent("lootjs", (event) => {
  event
    .addLootTypeModifier([LootType.CHEST])
    .randomChance(0.02)
    .addWeightedLoot(1, [
        Item.of('epicfight:skillbook', '{skill:"epicfight:stamina_pillager"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:energizing_guard"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:swordmaster"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:roll"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:berserker"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:technician"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:step"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:guard"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:active_guard"}'),
        Item.of('epicfight:skillbook', '{skill:"epicfight:dualgreatsword"}')
    ]);
})