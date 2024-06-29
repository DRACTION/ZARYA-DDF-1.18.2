//priority: 0

let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
let woods = ['oak', 'birch', 'spruce', 'jungle', 'acacia', 'dark_oak']
let endWoodNames = ['crimson', 'warped']
let allWoods = ['oak', 'birch', 'spruce', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
let villageStructures = [
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
]
// let vanillaMetals = ['iron', 'gold']
// let atoMetals = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel', 'zinc', 'copper']
// let atmMetals = ['allthemodium', 'vibranium', 'unobtainium']
// let immersiveMetals = ['aluminum', 'lead', 'nickel', 'silver', 'uranium', 'copper']
// let immersiveAlloys = ['steel', 'electrum', 'constantan']
// let mekanismMetals = ['osmium', 'lead', 'tin', 'uranium', 'copper']
// let mekanismAlloys = ['steel', 'refined_obsidian', 'refined_glowstone', 'bronze']
// let thermalMetals = ['copper', 'tin', 'lead', 'silver', 'nickel']
// let thermalAlloys = ['bronze', 'electrum', 'invar', 'constantan', 'signalum', 'enderium', 'lumium']

// let draconicFusion = (e, output, craftingTier, energy, middleItem, ingredientList) => {
//   //crafting tier: 1.draconium, 2.wyvern, 3.draconic, 4.chaotic
//   let tiers = ['WYVERN', 'DRACONIC', 'CHAOTIC']
//   e.custom({
//     type: 'draconicevolution:fusion_crafting',
//     result: { item: output },
//     catalyst: { item: middleItem },
//     total_energy: energy,
//     tier: (craftingTier > 4 && craftingTier <= 1) ? 'DRACONIUM' : tiers[craftingTier - 2],
//     ingredients: ingredientList.map(item => (item.charAt(0) === '#') ? { tag: item.substring(1) } : { item: item })
//   }).id(`kubejs:fusion_crafting/${output.replace(':', '/')}`)
// }
// let energize = (e, ingredient, result, power, count) => {
//   e.recipes.powah.energizing({
//     ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
//     energy: power,
//     result: Item.of(result, count ? count : 1).toResultJson()
//   }).id(`kubejs:energizing/${result.replace(':', '/')}`)
// }
let modifyShaped = (e, result, count, pattern, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shaped' })
  e.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapeless = (e, result, count, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  e.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}
let modifySmelt = (e, result, ingredients) => {
  e.remove({ output: result, type: 'minecraft:smelting' })
  e.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}
let removeRecipeByID = (e, recipes) => {
  recipes.forEach(recipe => {
    e.remove({ id: recipe })
  })
}
let removeRecipeByOutput = (e, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      e.remove({ type: recipe[1], output: recipe[0] })
    } else {
      e.remove({ output: recipe })
    }
  })
}
// let woodcutting = (e, entries) => {
//   entries.forEach(([input, output, count]) => {
//     e.custom({
//       type: "corail_woodcutter:woodcutting",
//       ingredient: { item: input },
//       result: output,
//       count: count
//     }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
//   })
// }
let modifyShapedID = (e, result, ID, count, pattern, ingredients) => {
  e.remove({ id: ID, type: 'minecraft:crafting_shaped' })
  return e.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapelessID = (e, result, ID, count, ingredients) => {
  e.remove({ id: ID, type: 'minecraft:crafting_shapeless' })
  return e.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}
let farmersdelight = {
  cooking: (e, result, ingredients, container, exp, time) => {
    // console.log(typeof ingredients[0])
    return e.custom({
      type: "farmersdelight:cooking",
      // recipe_book_tab: "meals",
      ingredients: tagOrItemForJson(ingredients),
      container: tagOrItemForJson((container === undefined) ? 'minecraft:air' : container),
      result: tagOrItemForJson(result),
      experience: (exp === undefined) ? 1.0 : exp,
      cookingtime: (time === undefined) ? 200 : time*20
    })
  }
}
let chipped = (e, type, tags) => {
  return e.custom({
    type: `chipped:${type}`,
    tags: (Array.isArray(tags)) ? tags : [tags]
  })
}


let tagOrItemForJson = (v) => {
  if (typeof v === 'string') {
    if (v.includes('#')) {
      return Ingredient.of(v).toJson()
    } else {
      return Item.of(v).toResultJson()
    }
  } else if (Array.isArray(v)) {
    return v.map(inArr => tagOrItemForJson(inArr))
  } else {
    return v
  }
}