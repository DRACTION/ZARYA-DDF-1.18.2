onEvent('recipes', event => {
	
	let mat = [
		"XXX",
		"XOX",
		"XXX"
	]
	event.shaped('2x apotheosis:uncommon_material', mat, { X: 'apotheosis:common_material', O: 'apotheosis:uncommon_material' })
	event.shaped('2x apotheosis:rare_material', mat, { X: 'apotheosis:uncommon_material', O: 'apotheosis:rare_material' })
	event.shaped('2x apotheosis:epic_material', mat, { X: 'apotheosis:rare_material', O: 'apotheosis:epic_material' })
	event.shaped('2x apotheosis:mythic_material', mat, { X: 'apotheosis:epic_material', O: 'apotheosis:mythic_material' })
	
})
