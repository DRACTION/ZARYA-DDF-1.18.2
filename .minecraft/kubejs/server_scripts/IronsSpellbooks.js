onEvent('recipes', e => {
	///////////// Пустая сфера улучшения /////////////
	e.replaceInput({id:'irons_spellbooks:upgrade_orb'}, 'minecraft:netherite_scrap', 'irons_spellbooks:arcane_salvage');
	///////////// Руны и сферы улучшения /////////////
	[
		///////////// Руна огня ///////////// Огненная сфера улучшения /////////////
		['fire', 'fire', 'minecraft:blaze_rod'],
		///////////// Руна льда ///////////// Ледяная сфера улучшения /////////////
		['ice', 'ice', 'irons_spellbooks:frozen_bone'],
		///////////// Руна молний ///////////// Электрическая сфера улучшения /////////////
		['lightning', 'lightning', 'irons_spellbooks:lightning_bottle'],
		///////////// Руна Эндера ///////////// Святая сфера улучшения /////////////
		['ender', 'ender', 'minecraft:ender_pearl'],
		///////////// Руна святости ///////////// Эндер-сфера улучшения /////////////
		['holy', 'holy', 'irons_spellbooks:divine_pearl'],
		///////////// Руна крови ///////////// Кровавая сфера улучшения /////////////
		['blood', 'blood', 'irons_spellbooks:blood_vial'],
		///////////// Руна призыва ///////////// Сфера улучшения призыва /////////////
		['evocation', 'evocation', '#forge:gems/emerald'],
		///////////// Руна волшебства ///////////// Сфера улучшения маны /////////////
		['arcane', 'mana', 'irons_spellbooks:arcane_essence'],
		///////////// Руна восстановление ///////////// Сфера улучшения перезарядки /////////////
		['cooldown', 'cooldown', 'minecraft:phantom_membrane'],
		///////////// Руна защиты ///////////// Сфера улучшения защиты /////////////
		['protection', 'protection', 'minecraft:pufferfish']
	].forEach(el => {
		
		let trans = 'irons_spellbooks:blank_rune'
		e.remove({id:`irons_spellbooks:${el[0]}_rune`})
		e.recipes.create.sequenced_assembly(`irons_spellbooks:${el[0]}_rune`,
			trans,
		[
			e.recipes.createDeploying(trans, [trans, el[2]]),
			e.recipes.createDeploying(trans, [trans, el[2]]),
			e.recipes.createDeploying(trans, [trans, el[2]]),
			e.recipes.createDeploying(trans, [trans, el[2]]),
			e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:experience', 250)])
		]).transitionalItem(trans).loops(2)
		
		trans = 'irons_spellbooks:upgrade_orb'
		e.remove({id:`irons_spellbooks:${el[1]}_upgrade_orb`})
		e.recipes.create.sequenced_assembly(`irons_spellbooks:${el[1]}_upgrade_orb`,
			trans,
		[
			e.recipes.createDeploying(trans, [trans, `irons_spellbooks:${el[0]}_rune`]),
			e.recipes.createDeploying(trans, [trans, `irons_spellbooks:${el[0]}_rune`]),
			e.recipes.createDeploying(trans, [trans, `irons_spellbooks:${el[0]}_rune`]),
			e.recipes.createDeploying(trans, [trans, `irons_spellbooks:${el[0]}_rune`]),
			e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:hyper_experience', 125)])
		]).transitionalItem(trans).loops(2)
	})
	///////////// Обычные чернила /////////////
	let trans = 'minecraft:glass_bottle'
	e.recipes.create.sequenced_assembly('irons_spellbooks:common_ink',
		trans,
	[
		e.recipes.createDeploying(trans, [trans, 'minecraft:feather']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:arcane_essence']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:arcane_essence']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:arcane_essence']),
		e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:ink', 250)])
	]).transitionalItem(trans).loops(1)
	///////////// Необычные чернила /////////////
	trans = 'irons_spellbooks:common_ink'
	e.recipes.create.sequenced_assembly('irons_spellbooks:uncommon_ink',
		trans,
	[
		e.recipes.createDeploying(trans, [trans, 'apotheosis:gem_dust']),
		e.recipes.createDeploying(trans, [trans, 'minecraft:glow_ink_sac']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:arcane_essence']),
		e.recipes.createDeploying(trans, [trans, 'minecraft:glow_ink_sac']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:arcane_essence']),
		e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:experience', 250)])
	]).transitionalItem(trans).loops(1)
	///////////// Редкие чернила /////////////
	trans = 'irons_spellbooks:uncommon_ink'
	e.recipes.create.sequenced_assembly('irons_spellbooks:rare_ink',
		trans,
	[
		e.recipes.createDeploying(trans, [trans, 'warden_and_sculk:echo_shard']),
		e.recipes.createDeploying(trans, [trans, 'minecraft:glowstone_dust']),
		e.recipes.createDeploying(trans, [trans, 'apotheosis:rare_material']),
		e.recipes.createDeploying(trans, [trans, 'apotheosis:gem_dust']),
		e.recipes.createDeploying(trans, [trans, 'apotheosis:lucky_foot']),
		e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:experience', 250)])
	]).transitionalItem(trans).loops(2)
	///////////// Эпичные чернила /////////////
	trans = 'irons_spellbooks:rare_ink'
	e.recipes.create.sequenced_assembly('irons_spellbooks:epic_ink',
		trans,
	[
		e.recipes.createDeploying(trans, [trans, 'apotheosis:epic_material']),
		e.recipes.createDeploying(trans, [trans, 'apotheosis:vial_of_expulsion']),
		e.recipes.createDeploying(trans, [trans, 'nethersdelight:propelpearl']),
		e.recipes.createDeploying(trans, [trans, 'apotheosis:epic_material']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:hogskin']),
		e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:hyper_experience', 50)])
	]).transitionalItem(trans).loops(2)
	///////////// Легендарные чернила /////////////
	trans = 'irons_spellbooks:epic_ink'
	e.recipes.create.sequenced_assembly('irons_spellbooks:legendary_ink',
		trans,
	[
		e.recipes.createDeploying(trans, [trans, '#zarya:only_finding_eyes']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:dragonskin']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:fire_upgrade_orb']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:lightning_upgrade_orb']),
		e.recipes.createDeploying(trans, [trans, 'irons_spellbooks:cooldown_upgrade_orb']),
		e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:hyper_experience', 125)])
	]).transitionalItem(trans).loops(2)
	///////////// Волшебный лом /////////////
	e.remove({id:'irons_spellbooks:arcane_salvage'})
	e.recipes.createCompacting('irons_spellbooks:arcane_salvage', 'irons_spellbooks:arcane_debris').superheated()
	///////////// Волшебный слиток /////////////
	e.remove({id:'irons_spellbooks:arcane_ingot'})
	e.recipes.createMixing('irons_spellbooks:arcane_ingot', ['#irons_spellbooks:arcane_ingot_base', '8x irons_spellbooks:arcane_essence']).heated()
	///////////// Божественная жемчужина /////////////
	e.remove({id:'irons_spellbooks:divine_pearl'})
	e.recipes.createMixing('irons_spellbooks:divine_pearl', ['#forge:ingots/gold', '#forge:gems/amethyst']).lowheated()
	e.recipes.createMixing('irons_spellbooks:divine_pearl', ['9x #forge:nuggets/gold', '#forge:gems/amethyst']).lowheated()
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

onEvent('block.tags', e => {
	///////////// Волшебные обломки /////////////
	e.add('minecraft:needs_diamond_tool', 'irons_spellbooks:arcane_debris')
})