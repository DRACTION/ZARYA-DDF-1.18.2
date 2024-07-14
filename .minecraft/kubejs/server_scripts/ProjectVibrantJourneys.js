onEvent('recipes', e => {
  e.recipes.create.milling('minecraft:blaze_powder', 'projectvibrantjourneys:cindercane')
  e.recipes.create.milling('minecraft:green_dye', 'projectvibrantjourneys:small_cactus')

	e.remove({ id:'projectvibrantjourneys:glowcap_to_shroomlight' })
	e.recipes.createCompacting('minecraft:shroomlight', ['8x projectvibrantjourneys:glowcap']).lowheated()
})

onEvent("lootjs", (event) => {

	let minBones = 2
	let maxBones = 5

	let diffMinMax = maxBones - minBones
	
	event
		.addBlockLootModifier('projectvibrantjourneys:bones')
		.modifyLoot('minecraft:bone', (itemStack) => {
			return Item.of('minecraft:bone').withCount(minBones + Math.floor(Math.random() * diffMinMax))
		})
		.randomChanceWithEnchantment('minecraft:fortune', [0, 0.2, 0.5, 1]) 
		.addLoot(`3x minecraft:bone`)
})
