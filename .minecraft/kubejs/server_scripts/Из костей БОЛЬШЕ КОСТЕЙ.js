
onEvent("lootjs", (event) => {

	var minBones = 2
	var maxBones = 5
	var fortuneAmount = 3


	var diffMinMax = maxBones - minBones
	
	event
		.addBlockLootModifier('projectvibrantjourneys:bones')
		.modifyLoot('minecraft:bone', (itemStack) => {
			return Item.of('minecraft:bone').withCount(minBones + Math.floor(Math.random() * diffMinMax))
		})
		.randomChanceWithEnchantment('minecraft:fortune', [0, 0.2, 0.5, 1]) 
		.addLoot(fortuneAmount+'x minecraft:bone')
})

