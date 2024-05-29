onEvent('recipes', e => {

  e.remove({id:'ef_weapon_extended:ironknucklesrecipe'})
  e.smithing('ef_weapon_extended:iron_knuckles', Item.of('epicfight:glove').ignoreNBT(), '#forge:plates/iron')
  e.remove({id:'ef_weapon_extended:goldknucklesrecipe'})
  e.smithing('ef_weapon_extended:gold_knuckles', Item.of('ef_weapon_extended:iron_knuckles').ignoreNBT(), '#forge:plates/gold')
  modifyShaped(e, 'ef_weapon_extended:diamond_knuckles', 1, [' D ', 'DPD', 'PGP'], {
    D: '#forge:dusts/diamond',
    P: '#forge:plates/obsidian',
    G: Item.of('ef_weapon_extended:gold_knuckles').ignoreNBT()
  })
  e.replaceInput({id: 'ef_weapon_extended:netheriteknucklesrecipe'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')

})
