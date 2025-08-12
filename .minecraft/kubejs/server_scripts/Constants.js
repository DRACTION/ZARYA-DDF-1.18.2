//priority: 0

let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
let woods = ['oak', 'birch', 'spruce', 'jungle', 'acacia', 'dark_oak']
let endWoodNames = ['crimson', 'warped']
let allWoods = ['oak', 'birch', 'spruce', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
let passengers = [
  'minecraft:horse',
  'minecraft:mule',
  'minecraft:donkey',
  'minecraft:parrot',
  'minecraft:wolf',
  'doggytalents:dog'
]
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
  },
  brewing: (e, result, ingredients, container, exp, time, needwater) => {
    return e.custom({
      type: "farmersrespite:brewing",
      ingredients: tagOrItemForJson(ingredients),
      container: tagOrItemForJson((container === undefined) ? 'minecraft:air' : container),
      result: tagOrItemForJson(result),
      experience: (exp === undefined) ? 0.35 : exp,
      brewingtime: (time === undefined) ? 2400 : time*20,
      needwater: (needwater === undefined) ? false : needwater
    })
  }
}
let chipped = (e, type, tags) => {
  return e.custom({
    type: `chipped:${type}`,
    tags: (Array.isArray(tags)) ? tags : [tags]
  })
}
let ownerIsPlayer = (e, entity) => {
  let bool = false;
  [
    'Owner',
    'OwnerUUID',
    'Summoner'
  ].forEach(UUID => {
    if (entity.fullNBT.contains(UUID) && e.getLevel().minecraftLevel.getPlayerByUUID(entity.fullNBT.getUUID(UUID)) != null) {
      bool = true;
      return;
    }
  });
  return bool;
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