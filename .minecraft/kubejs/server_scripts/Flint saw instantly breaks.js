onEvent('block.break', event => {
	if (event.player.isPlayer()
		&& !event.player.isCreativeMode()
		&& event.player.getMainHandItem().getId() == 'kubejs:flint_saw') {

		var targetBlock = event.getBlock()

		if (targetBlock.material.minecraftMaterial.solid) {
			// event.player.tell(targetBlock.getBlockState())
			event.player.setMainHandItem('minecraft:air')
			if (event.canCancel()) {
				event.cancel()
			}
		}
	}	
})
