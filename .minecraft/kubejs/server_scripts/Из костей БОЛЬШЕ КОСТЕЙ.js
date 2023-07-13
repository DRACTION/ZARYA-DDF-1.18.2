onEvent("lootjs", (event) => {

	let minBones = 2
	let maxBones = 5
	let fortuneAmount = 3

	let diffMinMax = maxBones - minBones
	
	event
		.addBlockLootModifier('projectvibrantjourneys:bones')
		.modifyLoot('minecraft:bone', (itemStack) => {
			return Item.of('minecraft:bone').withCount(minBones + Math.floor(Math.random() * diffMinMax))
		})
		.randomChanceWithEnchantment('minecraft:fortune', [0, 0.2, 0.5, 1]) 
		.addLoot(`${fortuneAmount}x minecraft:bone`)
})
