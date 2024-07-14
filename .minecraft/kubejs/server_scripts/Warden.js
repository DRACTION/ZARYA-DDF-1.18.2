onEvent('recipes', e => {
	e.shaped('minecraft:sculk_sensor', [
		'VWV',
		'OWO'], {
		W: 'minecraft:warped_wart_block',
		V: 'minecraft:twisting_vines',
		O: 'minecraft:crying_obsidian'
	})
	e.shapeless('warden_and_sculk:sculk_vines', ['warden_and_sculk:echo_shard', '3x minecraft:vine'])
})
