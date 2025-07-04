onEvent('recipes', e => {
  ///////////////// Золотой кастет /////////////////
  e.remove({id:'ef_weapon_extended:goldknucklesrecipe'})
  e.smithing('ef_weapon_extended:gold_knuckles', Item.of('epicfight:glove').ignoreNBT(), '#forge:plates/gold')
  ///////////////// Железный кастет /////////////////
  e.remove({id:'ef_weapon_extended:ironknucklesrecipe'})
  e.smithing('ef_weapon_extended:iron_knuckles', Item.of('ef_weapon_extended:gold_knuckles').ignoreNBT(), '#forge:plates/iron')
  ///////////////// Алмазный кастет /////////////////
  e.remove({id:'ef_weapon_extended:diamondknucklesrecipe'})
  e.smithing('ef_weapon_extended:diamond_knuckles', Item.of('ef_weapon_extended:iron_knuckles').ignoreNBT(), '#forge:plates/diamond')
  ///////////////// Незеритовый кастет /////////////////
  e.replaceInput({id: 'ef_weapon_extended:netheriteknucklesrecipe'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
})
