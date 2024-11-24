onEvent('recipes', e => {
	e.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:melon"
			}
		],
		"tool": {
			"type": "farmersdelight:tool_action",
			"action": "axe_dig"
		},
		"result": [
			{
				"item": "minecraft:melon_slice",
				"count": 5
			}
		],
		"sound": "minecraft:item.axe.strip"
	}).id('zarya:cutting/crush_melon')
})

onEvent("lootjs", (event) => {
	
	event
		.addBlockLootModifier("minecraft:melon")
		.not((n) => {
			n.matchMainHand("#forge:axes")
		})
		.replaceLoot("minecraft:melon_slice", "9x minecraft:melon_slice")
		.not((n) => {
			n.matchMainHand('#forge:tools/knives');
		})
		.replaceLoot("minecraft:melon_slice", "minecraft:melon")

})
