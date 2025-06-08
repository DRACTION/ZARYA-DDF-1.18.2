onEvent('block.registry', event => {
	event
		.create('sugar_cane_block')
		.material('plant')
		.hardness(0.5)
		.texture('down', 'zarya:block/sugar_cane_block_top')
		.texture('up', 'zarya:block/sugar_cane_block_top')
		.texture('north', 'zarya:block/sugar_cane_block_side')
		.texture('south', 'zarya:block/sugar_cane_block_side')
		.texture('east', 'zarya:block/sugar_cane_block_side')
		.texture('west', 'zarya:block/sugar_cane_block_side')
		.texture('particle', 'zarya:block/sugar_cane_block_side')
})
