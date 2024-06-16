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
  materials.X = Item.of('farmersdelight:flint_knife').ignoreNBT()
  modifyShapedID(e, 'epicfight:stone_spear', 'epicfight:stone_spear', 1, template, materials)
  materials.X = Item.of('epicfight:iron_dagger').ignoreNBT()
  modifyShapedID(e, 'epicfight:iron_spear', 'epicfight:iron_spear', 1, template, materials)
  materials.X = Item.of('epicfight:golden_dagger').ignoreNBT()
  modifyShapedID(e, 'epicfight:golden_spear', 'epicfight:golden_spear', 1, template, materials)
  materials.X = Item.of('epicfight:diamond_dagger').ignoreNBT()
  modifyShapedID(e, 'epicfight:diamond_spear', 'epicfight:diamond_spear', 1, template, materials)
  materials.X = Item.of('epicfight:netherite_dagger').ignoreNBT()
  e.replaceInput({id: 'epicfight:netherite_spear'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
  e.shaped('epicfight:netherite_spear', template, materials)

  // Перчатки
  modifyShaped(e, 'epicfight:glove', 1, ['NNN', 'L L', ' L '], {
    N: '#forge:nuggets/iron',
    L: '#forge:leather'
  })

  // Кинжалы
  e.remove({id:'epicfight:iron_dagger'})
  e.smithing('epicfight:iron_dagger', Item.of('farmersdelight:iron_knife').ignoreNBT(), '#forge:plates/iron')
  e.remove({id:'epicfight:golden_dagger'})
  e.smithing('epicfight:golden_dagger', Item.of('farmersdelight:golden_knife').ignoreNBT(), '#forge:plates/gold')
  e.remove({id:'epicfight:diamond_dagger'})
  e.smithing('epicfight:diamond_dagger', Item.of('farmersdelight:diamond_knife').ignoreNBT(),
    Item.of('createaddition:diamond_grit_sandpaper').ignoreNBT()
  )
  e.replaceInput({id: 'epicfight:netherite_dagger'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
  e.smithing('epicfight:netherite_dagger', Item.of('farmersdelight:netherite_knife').ignoreNBT(), '#forge:plates/netherite')

  // Длинный меч
  e.remove({id:'epicfight:iron_longsword'})
  e.smithing('epicfight:iron_longsword', Item.of('minecraft:iron_sword').ignoreNBT(), '#forge:plates/iron')
  e.remove({id:'epicfight:golden_longsword'})
  e.smithing('epicfight:golden_longsword', Item.of('minecraft:golden_sword').ignoreNBT(), '#forge:plates/gold')
  e.remove({id:'epicfight:diamond_longsword'})
  e.smithing('epicfight:diamond_longsword', Item.of('minecraft:diamond_sword').ignoreNBT(), '#forge:plates/diamond')
  e.replaceInput({id: 'epicfight:netherite_longsword'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
  e.smithing('epicfight:netherite_longsword', Item.of('minecraft:netherite_sword').ignoreNBT(), '#forge:plates/netherite')

  // Большой меч
  e.remove({id:'epicfight:iron_greatsword'})
  e.smithing('epicfight:iron_greatsword', Item.of('epicfight:iron_longsword').ignoreNBT(), '#forge:plates/iron')
  e.remove({id:'epicfight:golden_greatsword'})
  e.smithing('epicfight:golden_greatsword', Item.of('epicfight:golden_longsword').ignoreNBT(), '#forge:plates/gold')
  e.remove({id:'epicfight:diamond_greatsword'})
  e.smithing('epicfight:diamond_greatsword', Item.of('epicfight:diamond_longsword').ignoreNBT(), '#forge:plates/diamond')
  e.replaceInput({id: 'epicfight:netherite_greatsword'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
  e.smithing('epicfight:netherite_greatsword', Item.of('epicfight:netherite_longsword').ignoreNBT(), '#forge:plates/netherite')

  // Тати
  materials = {}
  template = [
    '  P',
    ' P ',
    'S  '
  ]
  materials.S = Item.of('minecraft:iron_sword').ignoreNBT()
  materials.P = '#forge:plates/iron'
  modifyShapedID(e, 'epicfight:iron_tachi', 'epicfight:iron_tachi', 1, template, materials)
  materials.S = Item.of('minecraft:golden_sword').ignoreNBT()
  materials.P = '#forge:plates/gold'
  modifyShapedID(e, 'epicfight:golden_tachi', 'epicfight:golden_tachi', 1, template, materials)
  materials.S = Item.of('minecraft:netherite_sword').ignoreNBT()
  materials.P = '#forge:plates/netherite'
  modifyShapedID(e, 'epicfight:netherite_tachi', 'epicfight:netherite_tachi', 1, template, materials)
  materials.S = Item.of('minecraft:diamond_sword').ignoreNBT()
  materials.P = '#forge:plates/diamond'
  modifyShapedID(e, 'epicfight:diamond_tachi', 'epicfight:diamond_tachi', 1, template, materials)
  e.replaceInput({id: 'epicfight:netherite_tachi'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')

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
      n.anyStructure(villageStructures, false)
    })
    .randomChance(0.04)
    .addWeightedLoot([
      //guard
      Item.of('epicfight:skillbook', '{skill:"epicfight:guard"}'), //Блок
      Item.of('epicfight:skillbook', '{skill:"epicfight:parrying"}'), //Парирование
      Item.of('epicfight:skillbook', '{skill:"epicfight:impact_guard"}'), //Усиленная защита
      Item.of('epicfight:skillbook', '{skill:"wom:perfect_bulwark"}'), //Идеальный оплот
      Item.of('epicfight:skillbook', '{skill:"wom:vengeful_parry"}'), //Мстительное парирование
      Item.of('epicfight:skillbook', '{skill:"wom:counter_attack"}'), //Контр-атака
      Item.of('epicfight:skillbook', '{skill:"epicfight:royal_guard"}'), //Королевская защита
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
