onEvent('block.tags', e => {
	e.add('betterpunching:ignore_hurts_debuff', '#storagedrawers:drawers')
	e.add('betterpunching:ignore_all', [
		'#valhelsia_structures:big_jars',
		'#valhelsia_structures:jars',
		'valhelsia_structures:bone_pile',
		'valhelsia_structures:bone_pile_block',
		'supplementaries:stick',
		'#create:toolboxes',
		'create:clipboard',
		'#chipped:lantern',
		'#chipped:special_lantern',
		'#chipped:soul_lantern',
		'#chipped:special_soul_lantern',
		'doggytalents:dog_bed',
		'minecraft:redstone_lamp',
		'#minecraft:banners'
	])
	colors.forEach(color => {
		e.add('betterpunching:ignore_all', `supplementaries:flag_${color}`)
	})
	e.add('betterpunching:ignore_speed_debuff', '#domum_ornamentum:bricks')
})
