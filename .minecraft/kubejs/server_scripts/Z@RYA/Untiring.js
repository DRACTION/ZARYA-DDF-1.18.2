onEvent('recipes', e => {
	farmersdelight.brewing(e, 'kubejs:untiring_brew',
		['farmersrespite:coffee', 'minecraft:honey_bottle'],
		'minecraft:glass_bottle', 0.35, 40, false)
	farmersdelight.brewing(e, 'kubejs:strong_untiring_brew',
		['kubejs:untiring_brew', 'minecraft:ghast_tear'],
		'minecraft:glass_bottle', 0.45, 80, false)
	farmersdelight.brewing(e, 'kubejs:long_untiring_brew',
		['kubejs:strong_untiring_brew', 'paraglider:stamina_vessel'],
		'minecraft:glass_bottle', 0.7, 120, false)

	e.recipes.createMixing('kubejs:untiring_brew', [
		'farmersrespite:coffee',
		Fluid.of('create:honey', 250)
	]).lowheated()
	e.recipes.createMixing('kubejs:strong_untiring_brew', [
		'kubejs:untiring_brew',
		'minecraft:ghast_tear'
	]).lowheated()
	e.recipes.createMixing('kubejs:long_untiring_brew', [
		'kubejs:strong_untiring_brew',
		'paraglider:stamina_vessel'
	]).lowheated()
})

onEvent('lootjs', event => {
	event
		.addLootTypeModifier(LootType.CHEST)
		.anyDimension('minecraft:overworld')
		.not((n) => {
			n.anyStructure(villageStructures, false)
		})
		.randomChance(0.003)
		.addWeightedLoot(['kubejs:untiring_root'])
})
