onEvent('recipes', event => {
	//////////////////// Апгрейд материалов ////////////////////
	let mat = [
		"XXX",
		"XOX",
		"XXX"
	]
	event.shaped('2x apotheosis:uncommon_material', mat, { X: 'apotheosis:common_material', O: 'apotheosis:uncommon_material' })
	event.shaped('2x apotheosis:rare_material', mat, { X: 'apotheosis:uncommon_material', O: 'apotheosis:rare_material' })
	event.shaped('2x apotheosis:epic_material', mat, { X: 'apotheosis:rare_material', O: 'apotheosis:epic_material' })
	event.shaped('2x apotheosis:mythic_material', mat, { X: 'apotheosis:epic_material', O: 'apotheosis:mythic_material' })
	//////////////////// Стол перековки ////////////////////
	event.remove({id:'apotheosis:reforging_table'})
	event.shaped('apotheosis:reforging_table', [
		'SIS',
		'DED',
		'SNS'
	], {
		S: 'minecraft:netherite_scrap',
		I: 'irons_spellbooks:arcane_ingot',
		D: 'apotheosis:gem_dust',
		E: 'minecraft:enchanting_table',
		N: 'minecraft:nether_bricks'
	})
})
