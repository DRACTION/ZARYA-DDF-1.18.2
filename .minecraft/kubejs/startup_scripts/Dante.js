onEvent('block.registry', event => {
	for (var i = 1; i <= 9; i++) {
		event
			.create(`dante_stage_${i}`)
			.material('stone')
			.unbreakable()
			.lightLevel(0.6)
			.noDrops()
			.texture('down', 'zarya:block/dante_stage_top')
			.texture('up', 'zarya:block/dante_stage_top')
			.texture('north', `zarya:block/dante_stage_${i}`)
			.texture('south', `zarya:block/dante_stage_${i}`)
			.texture('east', `zarya:block/dante_stage_${i}`)
			.texture('west', `zarya:block/dante_stage_${i}`)
			.texture('particle', `zarya:block/dante_stage_${i}`)
	}
})
