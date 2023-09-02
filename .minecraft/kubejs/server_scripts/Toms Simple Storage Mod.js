onEvent('recipes', event => {
  let toRemove = [
    'toms_storage:ts.inventory_cable',
    'toms_storage:ts.crafting_terminal',
    'toms_storage:ts.level_emitter',
    'toms_storage:ts.open_crate',
    'toms_storage:ts.inventory_hopper_basic',
    'toms_storage:ts.inventory_proxy',
    'toms_storage:ts.level_emitter',
    'toms_storage:ts.inventory_cable_connector',
    'toms_storage:ts.inventory_cable_framed',
    'toms_storage:ts.inventory_cable_connector_framed',
    'toms_storage:ts.inventory_cable_connector_filtered',
    'toms_storage:ts.wireless_terminal',
    'toms_storage:ts.adv_wireless_terminal'
  ]
  removeRecipeByOutput(event, toRemove)

  modifyShapedID(event,
    'toms_storage:ts.trim',
    'toms_storage:trim',
    1,
    [
      'WPW',
      'PCP',
      'WPW'
    ],
    {
      W:'#minecraft:planks',
      P:'create:portable_storage_interface',
      C:'#forge:chests/wooden'
    }
  )
  modifyShapedID(event,
    'toms_storage:ts.inventory_connector',
    'toms_storage:inventory_connector',
    1,
    [
      'CTC',
      'MPM',
      'CCC'
    ],
    {
      T: 'toms_storage:ts.trim',
      P: 'create:precision_mechanism',
      C: 'create:copper_casing',
      M: 'create:mechanical_arm'
    }
  )
  removeRecipeByID(event, ['toms_storage:storage_terminal'])
  event.recipes.create.mechanical_crafting('3x toms_storage:ts.storage_terminal', [
    'AAAAA',
    'ADIDA',
    'AONOA',
    'ADLDA',
    'AAAAA'
  ], {
    A: 'create:andesite_casing',
    D: 'create:display_board',
    I: 'toms_storage:ts.inventory_connector',
    O: 'create:content_observer',
    N: 'create:nixie_tube',
    L: 'create:display_link'
  }).id('zarya:ts.storage_terminal')
})