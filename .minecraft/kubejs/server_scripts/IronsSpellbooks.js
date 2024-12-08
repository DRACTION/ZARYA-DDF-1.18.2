onEvent('recipes', e => {
	///////////// Получение кожи хоглина /////////////
	e.remove({ id:"nethersdelight:cutting/hoglin_hide" })
	e.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "nethersdelight:hoglin_hide"
			}
		],
		"tool": {
			"tag": "forge:tools/knives"
		},
		"result": [
			{
				"item": "minecraft:leather",
				"count": 3
			},
			{
				"item": "irons_spellbooks:hogskin",
				"count": 1
			}
		]
	}).id('zarya:cutting/hoglin_hide')
})

onEvent("lootjs", (event) => {
	///////////// Нёрф дропа замороженных костей /////////////
	event
		.addEntityLootModifier('minecraft:stray')
		.matchLoot("irons_spellbooks:frozen_bone")
		.randomChanceWithEnchantment("minecraft:looting", [0.8, 0.7, 0.6, 0.5, 0.3, 0.2, 0.1, 0.0])
		.removeLoot("irons_spellbooks:frozen_bone")
	///////////// Отключение дропа "кожи свиньи" /////////////
	event
		.addEntityLootModifier('minecraft:hoglin')
		.removeLoot("irons_spellbooks:hogskin")
})
