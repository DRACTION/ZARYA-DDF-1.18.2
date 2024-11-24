onEvent('recipes', e => {
	e.remove({ id:"minecraft:pumpkin_seeds" })
	e.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:pumpkin"
			}
		],
		"tool": {
			"type": "farmersdelight:tool_action",
			"action": "axe_dig"
		},
		"result": [
			{
				"item": "farmersdelight:pumpkin_slice",
				"count": 4
			}
		],
		"sound": "minecraft:item.axe.strip"
	}).id('zarya:cutting/crush_pumpkin')
})

onEvent("lootjs", (event) => {
	
	event
		.addBlockLootModifier("minecraft:pumpkin")
		.or((or) => {
			or.matchMainHand("#forge:axes").matchMainHand('#forge:tools/knives');
		})
		.replaceLoot("minecraft:pumpkin", "4x farmersdelight:pumpkin_slice")

})
