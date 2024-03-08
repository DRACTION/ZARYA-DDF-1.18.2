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
