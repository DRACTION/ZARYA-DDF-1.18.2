// let smokers = [
//   'minecraft:smoker',
//   'fantasyfurniture:nordic/oven',
//   'fantasyfurniture:venthyr/oven',
//   'fantasyfurniture:bone/skeleton/oven',
//   'fantasyfurniture:necrolord/oven',
//   'fantasyfurniture:royal/oven',
//   'fantasyfurniture:bone/wither/oven',
//   'fantasyfurniture:dunmer/oven'
// ]
// let inputers = [
//   'minecraft:hopper',
//   'create:chute',
//   'create:andesite_funnel',
//   'create:brass_funnel',
//   'create:andesite_belt_funnel',
//   'create:brass_belt_funnel'
// ]

// onEvent('block.right_click', e => {

// 	if (smokers.includes(e.block.id) && (!e.player.minecraftEntity.shiftKeyDown || e.getItem().isEmpty())) {
// 		e.cancel()
// 		e.player.tell(`§a[Farmer's Delight] Прямое взаимодействие с коптильней отключено, используйте костёр, сковороду и т.п.!`)
// 	}

// })

// onEvent('block.place', e => {

// 	let blockId = e.getBlock().id

// 	// console.log(blockId);
// 	let itsSmoker
// 	if (smokers.includes(blockId)) {
// 		itsSmoker = true
// 	} else if (inputers.includes(blockId)) {
// 		itsSmoker = false
// 	} else {
// 		return
// 	}

// 	let blockPos = e.getBlock().getPos()
// 	let posiblePositions = [
// 		blockPos.offset( 1, 0, 0),
// 		blockPos.offset(-1, 0, 0),
// 		blockPos.offset( 0, 1, 0),
// 		blockPos.offset( 0,-1, 0),
// 		blockPos.offset( 0, 0, 1),
// 		blockPos.offset( 0, 0,-1)
// 	];

// 	posiblePositions.forEach(pos => {
// 		let nearbyBlockId = e.getLevel().getBlock(pos).id
// 		if((itsSmoker && inputers.includes(nearbyBlockId))
// 			|| (!itsSmoker && smokers.includes(nearbyBlockId))) {
// 			e.cancel()
// 			return
// 		}
// 	})
// })
