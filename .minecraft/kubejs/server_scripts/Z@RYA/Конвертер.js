onEvent('recipes', e => {
	e.recipes.create.mechanical_crafting('kubejs:empty_material_upgrade', [
			' SDSDS ',
			'SVABAVS',
			'DAEMEAD',
			'SBMHMBS',
			'DAEMEAD',
			'SVABAVS',
			' SDSDS '
		], {
			S: '#forge:plates/obsidian',
			D: 'apotheosis:gem_dust',
			V: 'apotheosis:vial_of_expulsion',
			A: 'irons_spellbooks:arcane_essence',
			B: 'create_enchantment_industry:hyper_experience_bottle',
			E: 'apotheosis:epic_material',
			M: 'create:precision_mechanism',
			H: 'minecraft:heart_of_the_sea'
	}).id('zarya:empty_material_upgrade')

	let trans = 'kubejs:unfinished_material_upgrade'
	let arr = [
		['kubejs:leather_material_upgrade', '#forge:leather', 10, 5],
		['kubejs:flint_material_upgrade', 'minecraft:flint', 10, 5],
		['kubejs:copper_material_upgrade', '#forge:ingots/copper', 20, 5],
		['kubejs:chainmail_material_upgrade', '#supplementaries:chains', 20, 5],
		['kubejs:iron_material_upgrade', '#forge:ingots/iron', 30, 5],
		['kubejs:golden_material_upgrade', '#forge:ingots/gold', 30, 5],
		['kubejs:diamond_material_upgrade', '#forge:gems/diamond', 50, 5],
		['kubejs:netherite_material_upgrade', '#forge:ingots/netherite', 100, 1]
	]
	arr.forEach(inarr => {
		e.recipes.create.sequenced_assembly(inarr[0],
		'kubejs:empty_material_upgrade',
		[
			e.recipes.createDeploying(trans, [trans, inarr[1]]),
			e.recipes.createFilling(trans, [trans, Fluid.of('create_enchantment_industry:experience', inarr[2])]),
			e.recipes.createPressing(trans, trans)
		]).transitionalItem(trans).loops(inarr[3])
	})

	e.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "kubejs:unfinished_material_upgrade"
			}
		],
		"tool": {
			"type": "farmersdelight:tool_action",
			"action": "pickaxe_dig"
		},
		"result": [
			{
				"item": "kubejs:empty_material_upgrade"
			}
		]
	}).id('zarya:clean_unfinished_material_upgrade')

	arr = [
		'iron',
		'golden',
		'diamond',
		'netherite'
	]
	arr.forEach(str => {
		e.smithing(`minecraft:${str}_sword`, `#forge:swords`, `kubejs:${str}_material_upgrade`)
		e.smithing(`minecraft:${str}_shovel`, `#forge:shovels`, `kubejs:${str}_material_upgrade`)
		e.smithing(`minecraft:${str}_pickaxe`, `#forge:pickaxes`, `kubejs:${str}_material_upgrade`)
		e.smithing(`minecraft:${str}_axe`, `#forge:axes`, `kubejs:${str}_material_upgrade`)
		e.smithing(`minecraft:${str}_hoe`, `#forge:hoes`, `kubejs:${str}_material_upgrade`)
		e.smithing(`minecraft:${str}_helmet`, `#forge:helmets`, `kubejs:${str}_material_upgrade`)
		e.smithing(`minecraft:${str}_chestplate`, `#forge:chestplates`, `kubejs:${str}_material_upgrade`)
		e.smithing(`minecraft:${str}_leggings`, `#forge:leggings`, `kubejs:${str}_material_upgrade`)
		e.smithing(`minecraft:${str}_boots`, `#forge:boots`, `kubejs:${str}_material_upgrade`)
		e.smithing(`farmersdelight:${str}_knife`, `#zarya:knives`, `kubejs:${str}_material_upgrade`)
		e.smithing(`epicfight:${str}_dagger`, `#zarya:daggers`, `kubejs:${str}_material_upgrade`)
		e.smithing(`epicfight:${str}_greatsword`, `#zarya:greatswords`, `kubejs:${str}_material_upgrade`)
		e.smithing(`epicfight:${str}_spear`, `#zarya:spears`, `kubejs:${str}_material_upgrade`)
		e.smithing(`epicfight:${str}_tachi`, `#zarya:tachis`, `kubejs:${str}_material_upgrade`)
		e.smithing(`epicfight:${str}_longsword`, `#zarya:longswords`, `kubejs:${str}_material_upgrade`)
		e.smithing(`wom:${str}_greataxe`, `#zarya:greataxes`, `kubejs:${str}_material_upgrade`)
		e.smithing(`wom:${str}_staff`, `#zarya:staffs`, `kubejs:${str}_material_upgrade`)
	})
	e.smithing(`minecraft:wooden_sword`, `#forge:swords`, `kubejs:flint_material_upgrade`)
	e.smithing(`minecraft:stone_sword`, `#forge:swords`, `kubejs:copper_material_upgrade`)
	e.smithing(`minecraft:wooden_shovel`, `#forge:shovels`, `kubejs:flint_material_upgrade`)
	e.smithing(`minecraft:stone_shovel`, `#forge:shovels`, `kubejs:copper_material_upgrade`)
	e.smithing(`minecraft:wooden_pickaxe`, `#forge:pickaxes`, `kubejs:flint_material_upgrade`)
	e.smithing(`minecraft:stone_pickaxe`, `#forge:pickaxes`, `kubejs:copper_material_upgrade`)
	e.smithing(`minecraft:wooden_axe`, `#forge:axes`, `kubejs:flint_material_upgrade`)
	e.smithing(`minecraft:stone_axe`, `#forge:axes`, `kubejs:copper_material_upgrade`)
	e.smithing(`minecraft:wooden_hoe`, `#forge:hoes`, `kubejs:flint_material_upgrade`)
	e.smithing(`minecraft:stone_hoe`, `#forge:hoes`, `kubejs:copper_material_upgrade`)
	e.smithing(`minecraft:leather_helmet`, `#forge:helmets`, `kubejs:leather_material_upgrade`)
	e.smithing(`minecraft:chainmail_helmet`, `#forge:helmets`, `kubejs:chainmail_material_upgrade`)
	e.smithing(`minecraft:leather_chestplate`, `#forge:chestplates`, `kubejs:leather_material_upgrade`)
	e.smithing(`minecraft:chainmail_chestplate`, `#forge:chestplates`, `kubejs:chainmail_material_upgrade`)
	e.smithing(`minecraft:leather_leggings`, `#forge:leggings`, `kubejs:leather_material_upgrade`)
	e.smithing(`minecraft:chainmail_leggings`, `#forge:leggings`, `kubejs:chainmail_material_upgrade`)
	e.smithing(`minecraft:leather_boots`, `#forge:boots`, `kubejs:leather_material_upgrade`)
	e.smithing(`minecraft:chainmail_boots`, `#forge:boots`, `kubejs:chainmail_material_upgrade`)
	e.smithing(`farmersdelight:flint_knife`, `#zarya:knives`, `kubejs:flint_material_upgrade`)
	e.smithing(`epicfight:stone_spear`, `#zarya:spears`, `kubejs:flint_material_upgrade`)
	e.smithing(`wom:stone_staff`, `#zarya:spears`, `kubejs:copper_material_upgrade`)

	e.smithing('minecraft:leather_horse_armor', '#zarya:horse_armors', 'kubejs:leather_material_upgrade')
	e.smithing('minecraft:iron_horse_armor', '#zarya:horse_armors', 'kubejs:iron_material_upgrade')
	e.smithing('minecraft:golden_horse_armor', '#zarya:horse_armors', 'kubejs:golden_material_upgrade')
	e.smithing('minecraft:diamond_horse_armor', '#zarya:horse_armors', 'kubejs:diamond_material_upgrade')

	e.smithing('wom:netherite_mask', '#zarya:wom_helmets', 'kubejs:netherite_material_upgrade')
	e.smithing('wom:diamond_crown', '#zarya:wom_helmets', 'kubejs:diamond_material_upgrade')
	e.smithing('wom:golden_monocle', '#zarya:wom_helmets', 'kubejs:golden_material_upgrade')
	
	e.smithing('wom:netherite_manicle', '#zarya:wom_chestplates', 'kubejs:netherite_material_upgrade')
	e.smithing('wom:diamond_armbracelet', '#zarya:wom_chestplates', 'kubejs:diamond_material_upgrade')
	e.smithing('wom:golden_kit', '#zarya:wom_chestplates', 'kubejs:golden_material_upgrade')

	e.smithing('wom:netherite_belt', '#zarya:wom_leggings', 'kubejs:netherite_material_upgrade')
	e.smithing('wom:diamond_legtopseal', '#zarya:wom_leggings', 'kubejs:diamond_material_upgrade')
	e.smithing('wom:golden_chrono', '#zarya:wom_leggings', 'kubejs:golden_material_upgrade')

	e.smithing('wom:netherite_chains', '#zarya:wom_boots', 'kubejs:netherite_material_upgrade')
	e.smithing('wom:diamond_legbottomseal', '#zarya:wom_boots', 'kubejs:diamond_material_upgrade')
	e.smithing('wom:golden_mokassin', '#zarya:wom_boots', 'kubejs:golden_material_upgrade')

	e.smithing('epicfight:glove', '#zarya:knuckles', 'kubejs:leather_material_upgrade')
	e.smithing('ef_weapon_extended:iron_knuckles', '#zarya:knuckles', 'kubejs:iron_material_upgrade')
	e.smithing('ef_weapon_extended:gold_knuckles', '#zarya:knuckles', 'kubejs:golden_material_upgrade')
	e.smithing('ef_weapon_extended:diamond_knuckles', '#zarya:knuckles', 'kubejs:diamond_material_upgrade')
	e.smithing('ef_weapon_extended:netherite_knuckles', '#zarya:knuckles', 'kubejs:netherite_material_upgrade')

	e.smithing('sophisticatedbackpacks:backpack', '#zarya:backpacks', 'kubejs:leather_material_upgrade')
	e.smithing('sophisticatedbackpacks:copper_backpack', '#zarya:backpacks', 'kubejs:copper_material_upgrade')
	e.smithing('sophisticatedbackpacks:iron_backpack', '#zarya:backpacks', 'kubejs:iron_material_upgrade')
	e.smithing('sophisticatedbackpacks:gold_backpack', '#zarya:backpacks', 'kubejs:golden_material_upgrade')
	e.smithing('sophisticatedbackpacks:diamond_backpack', '#zarya:backpacks', 'kubejs:diamond_material_upgrade')
	e.smithing('sophisticatedbackpacks:netherite_backpack', '#zarya:backpacks', 'kubejs:netherite_material_upgrade')

	e.smithing('minecraft:copper_ingot', '#zarya:materials', 'kubejs:copper_material_upgrade')
	e.smithing('minecraft:iron_ingot', '#zarya:materials', 'kubejs:iron_material_upgrade')
	e.smithing('minecraft:gold_ingot', '#zarya:materials', 'kubejs:golden_material_upgrade')
	e.smithing('minecraft:diamond', '#zarya:materials', 'kubejs:diamond_material_upgrade')
	e.smithing('minecraft:netherite_ingot', '#zarya:materials', 'kubejs:netherite_material_upgrade')

})

onEvent('item.tags', e => {

	let arr = [
		'iron',
		'golden',
		'diamond',
		'netherite'
	]
	arr.forEach(str => {
		e.add('zarya:knives', `farmersdelight:${str}_knife`)
		e.add('zarya:daggers', `epicfight:${str}_dagger`)
		e.add('zarya:spears', `epicfight:${str}_spear`)
		e.add('zarya:greatswords', `epicfight:${str}_greatsword`)
		e.add('zarya:tachis', `epicfight:${str}_tachi`)
		e.add('zarya:longswords', `epicfight:${str}_longsword`)
		e.add('zarya:spears', `epicfight:${str}_spear`)
		e.add('zarya:greataxes', `wom:${str}_greataxe`)
		e.add('zarya:staffs', `wom:${str}_staff`)
	})
	e.add('zarya:knives', 'farmersdelight:flint_knife')
	e.add('zarya:spears', 'epicfight:stone_spear')
	e.add('zarya:staffs', 'wom:wooden_staff')
	e.add('zarya:staffs', 'wom:stone_staff')

	e.add('zarya:horse_armors', [
		'minecraft:leather_horse_armor',
		'minecraft:iron_horse_armor',
		'minecraft:golden_horse_armor',
		'minecraft:diamond_horse_armor'
	])

	e.add('zarya:wom_helmets', [
		'wom:netherite_mask',
		'wom:emerald_earrings',
		'wom:diamond_crown',
		'wom:golden_monocle'
	])
	e.add('zarya:wom_chestplates', [
		'wom:netherite_manicle',
		'wom:emerald_chakra',
		'wom:diamond_armbracelet',
		'wom:golden_kit'
	])
	e.add('zarya:wom_leggings', [
		'wom:netherite_belt',
		'wom:emerald_tasset',
		'wom:diamond_legtopseal',
		'wom:golden_chrono'
	])
	e.add('zarya:wom_boots', [
		'wom:netherite_chains',
		'wom:emerald_anklebracelet',
		'wom:diamond_legbottomseal',
		'wom:golden_mokassin'
	])

	e.add('zarya:knuckles', [
		'epicfight:glove',
		'ef_weapon_extended:iron_knuckles',
		'ef_weapon_extended:gold_knuckles',
		'ef_weapon_extended:diamond_knuckles',
		'ef_weapon_extended:netherite_knuckles'
	])

	e.add('zarya:backpacks', [
		'sophisticatedbackpacks:backpack',
		'sophisticatedbackpacks:copper_backpack',
		'sophisticatedbackpacks:iron_backpack',
		'sophisticatedbackpacks:gold_backpack',
		'sophisticatedbackpacks:diamond_backpack',
		'sophisticatedbackpacks:netherite_backpack'
	])

	e.add('zarya:materials', [
		'#forge:ingots',
		'#forge:gems'
	])

})

onEvent("lootjs", (event) => {
	event
		.addLootTypeModifier(LootType.CHEST)
		.not((n) => {
			n.anyStructure(villageStructures, false)
		})
		.randomChance(0.03)
		.addWeightedLoot([
			Item.of('kubejs:chainmail_material_upgrade').withChance(5),
			Item.of('kubejs:copper_material_upgrade').withChance(5),
			Item.of('kubejs:flint_material_upgrade').withChance(5),
			Item.of('kubejs:golden_material_upgrade').withChance(5),
			Item.of('kubejs:iron_material_upgrade').withChance(5),
			Item.of('kubejs:leather_material_upgrade').withChance(5),
			Item.of('kubejs:diamond_material_upgrade').withChance(3),
			Item.of('kubejs:netherite_material_upgrade').withChance(1)
		]);
	event
		.addLootTypeModifier(LootType.CHEST)
		.anyStructure(villageStructures, false)
		.randomChance(0.01)
		.addWeightedLoot([
			'kubejs:empty_material_upgrade'
		]);
})
