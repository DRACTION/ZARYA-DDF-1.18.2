onEvent('recipes', e => {

  e.remove({id:'create_jetpack:jetpack'})
  e.recipes.create.mechanical_crafting('create_jetpack:jetpack', [
    '   PSP   ',
    '  PESEP  ',
    ' PMESEMP ',
    'PCMEBEMCP',
    'PLPGIGPLP',
    'PCTP PTCP'
  ], {
    P: '#forge:plates/brass',
    S: 'create:shaft',
    M: 'create:precision_mechanism',
    E: 'createaddition:electrum_spool',
    C: 'create:smart_chute',
    B: '#create:pressurized_air_sources',
    L: 'create:propeller',
    G: 'create:sequenced_gearshift',
    I: 'create:linked_controller',
    T: 'create:electron_tube'
  }).id('zarya:create_jetpack')

})