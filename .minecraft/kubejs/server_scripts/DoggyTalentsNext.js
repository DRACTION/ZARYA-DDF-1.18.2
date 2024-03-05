onEvent('recipes', e => {

  e.replaceInput(
    {id: 'doggytalents:doggy_contacts'},
    'doggytalents:sake',
    Item.of('minecraft:potion', '{Potion:"minecraft:water"}')
  )

  e.replaceInput(
    {id: 'doggytalents:training_treat'},
    'doggytalents:rice_bowl',
    '#doggytalents:whitelist_food'
  )

})

onEvent("lootjs", (event) => {
  event.removeGlobalModifier(["doggytalents:rice_from_grass_modifier", "doggytalents:soy_from_zombie_modifier"]);
})

onEvent('item.tags', e => {
  e.add('doggytalents:whitelist_food', [
    '#betterleveling:meat/cooked',
    'corn_delight:corn_dog',
    'corn_delight:classic_corn_dog',
    'corn_delight:taco',
    'create:honeyed_apple',
    'farmersdelight:cooked_cod_slice',
    'farmersdelight:cooked_chicken_cuts',
    'farmersdelight:cooked_bacon',
    'farmersdelight:beef_patty',
    'farmersdelight:cooked_salmon_slice',
    'farmersdelight:cooked_mutton_chops',
    'farmersdelight:ham',
    'farmersdelight:barbecue_stick',
    'farmersdelight:chicken_sandwich',
    'farmersdelight:hamburger',
    'farmersdelight:bacon_sandwich',
    'farmersdelight:mutton_wrap',
    'farmersdelight:dumplings',
    'farmersdelight:stuffed_potato',
    'farmersdelight:cabbage_rolls',
    'farmersdelight:bone_broth',
    'farmersdelight:beef_stew',
    'farmersdelight:chicken_soup',
    'farmersdelight:fish_stew',
    'farmersdelight:pumpkin_soup',
    'farmersdelight:noodle_soup',
    'farmersdelight:bacon_and_eggs',
    'farmersdelight:pasta_with_meatballs',
    'farmersdelight:pasta_with_mutton_chop',
    'farmersdelight:roasted_mutton_chops',
    'farmersdelight:steak_and_potatoes',
    'farmersdelight:grilled_salmon',
    'farmersdelight:roast_chicken',
    'farmersdelight:dog_food',
    'nethersdelight:hoglin_sirloin',
    'nethersdelight:strider_slice',
    'nethersdelight:ground_strider',
    'nethersdelight:grilled_strider',
    'nethersdelight:strider_moss_stew',
    'nethersdelight:nether_skewer'
  ])
})