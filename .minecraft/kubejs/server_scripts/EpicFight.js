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

  // Большой меч
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

  // Длинный меч
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

  // Тати
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
    .addLootTypeModifier([LootType.CHEST, LootType.ENTITY])
    .removeLoot(Item.of('epicfight:skillbook').ignoreNBT())
  event
    .addLootTypeModifier(LootType.CHEST)
    .not((n) => {
      n.anyStructure([
        "minecraft:village_desert",
        "minecraft:village_plains",
        "minecraft:village_savanna",
        "minecraft:village_snowy",
        "minecraft:village_taiga",
        "repurposed_structures:village_mushroom",
        "repurposed_structures:village_badlands",
        "repurposed_structures:village_birch",
        "repurposed_structures:village_dark_forest",
        "repurposed_structures:village_giant_taiga",
        "repurposed_structures:village_jungle",
        "repurposed_structures:village_mountains",
        "repurposed_structures:village_oak",
        "repurposed_structures:village_swamp",
        "ctov:large/village_beach",
        "ctov:large/village_dark_forest",
        "ctov:large/village_jungle",
        "ctov:large/village_mesa",
        "ctov:large/village_mountain",
        "ctov:large/village_mushroom",
        "ctov:large/village_swamp",
        "ctov:large/village_desert",
        "ctov:large/village_plains",
        "ctov:large/village_savanna",
        "ctov:large/village_snowy",
        "ctov:large/village_taiga",
        "ctov:medium/village_beach",
        "ctov:medium/village_dark_forest",
        "ctov:medium/village_jungle",
        "ctov:medium/village_mesa",
        "ctov:medium/village_mountain",
        "ctov:medium/village_mushroom",
        "ctov:medium/village_swamp",
        "ctov:medium/village_desert",
        "ctov:medium/village_plains",
        "ctov:medium/village_savanna",
        "ctov:medium/village_snowy",
        "ctov:medium/village_taiga",
        "ctov:small/village_beach",
        "ctov:small/village_dark_forest",
        "ctov:small/village_jungle",
        "ctov:small/village_mesa",
        "ctov:small/village_mountain",
        "ctov:small/village_mushroom",
        "ctov:small/village_swamp",
        "ctov:small/village_desert",
        "ctov:small/village_plains",
        "ctov:small/village_savanna",
        "ctov:small/village_snowy",
        "ctov:small/village_taiga"
      ], false)
    })
    .randomChance(0.02)
    .addWeightedLoot([
      //guard
      Item.of('epicfight:skillbook', '{skill:"epicfight:guard"}'), //Блок
      Item.of('epicfight:skillbook', '{skill:"epicfight:parrying"}'), //Парирование
      Item.of('epicfight:skillbook', '{skill:"epicfight:impact_guard"}'), //Усиленная защита
      Item.of('epicfight:skillbook', '{skill:"wom:perfect_bulwark"}'), //Идеальный оплот
      Item.of('epicfight:skillbook', '{skill:"wom:vengeful_parry"}'), //Мстительное парирование
      Item.of('epicfight:skillbook', '{skill:"wom:counter_attack"}') //Контр-атака
      //dodge
      Item.of('epicfight:skillbook', '{skill:"epicfight:roll"}'), //Перекат
      Item.of('epicfight:skillbook', '{skill:"epicfight:step"}'), //Отскок
      Item.of('epicfight:skillbook', '{skill:"wom:ender_obscuris"}'), //Эндер Обскурис
      Item.of('epicfight:skillbook', '{skill:"wom:dodge_master"}'), //Мастер уклона
      Item.of('epicfight:skillbook', '{skill:"wom:bull_charge"}'), //Бычий заряд
      Item.of('epicfight:skillbook', '{skill:"wom:ender_step"}'), //Эндер Шаг
      Item.of('epicfight:skillbook', '{skill:"wom:shadow_step"}'), //Теневой шаг
      //mover
      Item.of('epicfight:skillbook', '{skill:"epicfight:demolition_leap"}'), //Импульсный прыжок
      Item.of('epicfight:skillbook', '{skill:"epicfight:phantom_ascent"}'), //Призрачный прыжок
      //passive
      Item.of('epicfight:skillbook', '{skill:"epicfight:technician"}'), //Техничный
      Item.of('epicfight:skillbook', '{skill:"epicfight:stamina_pillager"}'), //Похищение выносливости
      Item.of('epicfight:skillbook', '{skill:"epicfight:berserker"}'), //Берсерк
      Item.of('epicfight:skillbook', '{skill:"epicfight:swordmaster"}'), //Мастер меча
      Item.of('epicfight:skillbook', '{skill:"epicfight:forbidden_strength"}'), //Запретная мощь
      Item.of('epicfight:skillbook', '{skill:"epicfight:endurance"}'), //Выносливость
      Item.of('epicfight:skillbook', '{skill:"epicfight:hypervitality"}'), //Второе дыхание
      Item.of('epicfight:skillbook', '{skill:"epicfight:emergency_escape"}'), //Выброс адреналина
      Item.of('epicfight:skillbook', '{skill:"epicfight:death_harvest"}'), //Урожай смерти
      Item.of('epicfight:skillbook', '{skill:"wom:arrow_tenacity"}'), //Упорство стрелы
      Item.of('epicfight:skillbook', '{skill:"wom:dancing_blade"}'), //Танцующий клинок
      Item.of('epicfight:skillbook', '{skill:"wom:meditation"}'), //Медитация
      Item.of('epicfight:skillbook', '{skill:"wom:critical_knowledge"}'), //Критические знания
      Item.of('epicfight:skillbook', '{skill:"wom:latent_retribution"}'), //Скрытое возмездие
      Item.of('epicfight:skillbook', '{skill:"wom:pain_anticipation"}'), //Ожидание боли
      Item.of('epicfight:skillbook', '{skill:"wom:mindset"}'), //Менталитет
      Item.of('epicfight:skillbook', '{skill:"wom:vampirize"}'), //Вампиризм
      Item.of('epicfight:skillbook', '{skill:"wom:adrenaline"}'), //Адреналин
      Item.of('epicfight:skillbook', '{skill:"wom:heart_shield"}'), //Сердечный щит
      //identity
      Item.of('epicfight:skillbook', '{skill:"epicfight:meteor_slam"}'), //Метеоритный удар
      Item.of('epicfight:skillbook', '{skill:"epicfight:revelation"}') //Откровение
    ]);
})
