onEvent('item.tags', e => {
  e.add('vs_eureka:balloons', [
    "vs_eureka:balloon",
    "vs_eureka:white_balloon",
    "vs_eureka:light_gray_balloon",
    "vs_eureka:gray_balloon",
    "vs_eureka:black_balloon",
    "vs_eureka:red_balloon",
    "vs_eureka:orange_balloon",
    "vs_eureka:yellow_balloon",
    "vs_eureka:lime_balloon",
    "vs_eureka:green_balloon",
    "vs_eureka:light_blue_balloon",
    "vs_eureka:cyan_balloon",
    "vs_eureka:blue_balloon",
    "vs_eureka:purple_balloon",
    "vs_eureka:magenta_balloon",
    "vs_eureka:pink_balloon",
    "vs_eureka:brown_balloon"
  ])
})

onEvent('recipes', e => {

  modifyShapedID(
    e, //Event
    'vs_eureka:engine', //Result
    'vs_eureka:engine', //Craft ID
    1, //Count
    [
      'SBS',
      'AMA',
      'BRB'
    ], //Pattern
    {
      S:'create:steam_engine',
      B:'minecraft:blast_furnace',
      A:'create:adjustable_chain_gearshift',
      M:'create:precision_mechanism',
      R:'create:railway_casing'
    } //Ingredients
  )

  modifyShapedID(
    e, //Event
    'vs_eureka:floater', //Result
    'vs_eureka:floater', //Craft ID
    1, //Count
    [
      'LB'
    ], //Pattern
    {
      L:'create:linear_chassis',
      B:'#vs_eureka:balloons'
    } //Ingredients
  )

  modifyShapedID(
    e, //Event
    'vs_eureka:ballast', //Result
    'vs_eureka:ballast', //Craft ID
    1, //Count
    [
      'GSG',
      'SVS',
      'GSG'
    ], //Pattern
    {
      V:'create:item_vault',
      S:'#forge:sand',
      G:'#forge:ingots/gold'
    } //Ingredients
  )

  e.remove({id: 'vs_eureka:balloon_leather'})
  e.remove({id: 'vs_eureka:balloon_paper'})
  e.remove({id: 'vs_eureka:balloon_wool'})
  modifyShapedID(
    e, //Event
    'vs_eureka:balloon', //Result
    'vs_eureka:balloon_membrane', //Craft ID
    1, //Count
    [
      ' S ',
      'SPS',
      ' S '
    ], //Pattern
    {
      S:'create:white_sail',
      P:'minecraft:phantom_membrane'
    } //Ingredients
  )

  modifyShapedID(
    e, //Event
    'vs_eureka:anchor', //Result
    'vs_eureka:anchor', //Craft ID
    1, //Count
    [
      'NIN',
      ' I ',
      'SSS'
    ], //Pattern
    {
      N:'#forge:nuggets/iron',
      I:'#forge:ingots/iron',
      S:'#forge:plates/iron'
    } //Ingredients
  )

  allWoods.forEach(name => {
    modifyShapedID(
      e, //Event
      `vs_eureka:${name}_ship_helm`, //Result
      `vs_eureka:${name}_ship_helm`, //Craft ID
      1, //Count
      [
        ' C ',
        'BRB',
        'WPW'
      ], //Pattern
      {
        C:'create:large_cogwheel',
        B:'create:wooden_bracket',
        R:'create:rotation_speed_controller',
        P:'create:rope_pulley',
        W:`minecraft:${name}_planks`
      } //Ingredients
    )
  })

})