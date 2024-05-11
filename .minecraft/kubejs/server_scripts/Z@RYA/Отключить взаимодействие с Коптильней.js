onEvent('block.right_click', e => {

	if ((e.block.id == 'minecraft:smoker' 
		|| e.block.id == 'fantasyfurniture:nordic/oven'
		|| e.block.id == 'fantasyfurniture:venthyr/oven'
		|| e.block.id == 'fantasyfurniture:bone/skeleton/oven'
		|| e.block.id == 'fantasyfurniture:necrolord/oven'
		|| e.block.id == 'fantasyfurniture:royal/oven'
		|| e.block.id == 'fantasyfurniture:bone/wither/oven')
		&& (!e.player.minecraftEntity.shiftKeyDown || e.getItem().isEmpty())) {

		e.cancel()
		e.player.tell(`§a[Farmer's Delight] Прямое взаимодействие с коптильней отключено, используйте костёр, сковороду и т.п.!`)
	}

})

onEvent('block.place', e => {

	let blockId = e.getBlock().id
	let blockPos = e.getBlock().getPos()

	// console.log(blockId);
	if (blockId == 'minecraft:smoker'
		|| blockId == 'fantasyfurniture:nordic/oven'
		|| blockId == 'fantasyfurniture:venthyr/oven'
		|| blockId == 'fantasyfurniture:bone/skeleton/oven'
		|| blockId == 'fantasyfurniture:necrolord/oven'
		|| blockId == 'fantasyfurniture:royal/oven'
		|| blockId == 'fantasyfurniture:bone/wither/oven'
		|| blockId == 'minecraft:hopper'
		|| blockId == 'create:chute'
		|| blockId == 'create:andesite_funnel'
		|| blockId == 'create:brass_funnel'
		|| blockId == 'create:andesite_belt_funnel'
		|| blockId == 'create:brass_belt_funnel') {

		let posiblePositions = [
			blockPos.offset( 1, 0, 0),
			blockPos.offset(-1, 0, 0),
			blockPos.offset( 0, 1, 0),
			blockPos.offset( 0,-1, 0),
			blockPos.offset( 0, 0, 1),
			blockPos.offset( 0, 0,-1)
		];

		if (blockId == 'minecraft:smoker'
			|| blockId == 'fantasyfurniture:nordic/oven'
			|| blockId == 'fantasyfurniture:venthyr/oven'
			|| blockId == 'fantasyfurniture:bone/skeleton/oven'
			|| blockId == 'fantasyfurniture:necrolord/oven'
			|| blockId == 'fantasyfurniture:royal/oven'
			|| blockId == 'fantasyfurniture:bone/wither/oven') {
			posiblePositions.forEach(pos => {
				let nearbyBlockId = e.getLevel().getBlock(pos).id;
				if (nearbyBlockId == 'minecraft:hopper'
					|| nearbyBlockId == 'create:chute'
					|| nearbyBlockId == 'create:andesite_funnel'
					|| nearbyBlockId == 'create:brass_funnel'
					|| nearbyBlockId == 'create:andesite_belt_funnel'
					|| nearbyBlockId == 'create:brass_belt_funnel') {
					e.cancel();
					return;
				}
			})
		} else if (blockId == 'minecraft:hopper'
			|| blockId == 'create:chute'
			|| blockId == 'create:andesite_funnel'
			|| blockId == 'create:brass_funnel'
			|| blockId == 'create:andesite_belt_funnel'
			|| blockId == 'create:brass_belt_funnel') {

			posiblePositions.forEach(pos => {
				let nearbyBlockId = e.getLevel().getBlock(pos).id;
				if (nearbyBlockId == 'minecraft:smoker'
					|| nearbyBlockId == 'fantasyfurniture:nordic/oven'
					|| nearbyBlockId == 'fantasyfurniture:venthyr/oven'
					|| nearbyBlockId == 'fantasyfurniture:bone/skeleton/oven'
					|| nearbyBlockId == 'fantasyfurniture:necrolord/oven'
					|| nearbyBlockId == 'fantasyfurniture:royal/oven'
					|| nearbyBlockId == 'fantasyfurniture:bone/wither/oven') {
					e.cancel();
					return;
				}
			})
		}
	}
})