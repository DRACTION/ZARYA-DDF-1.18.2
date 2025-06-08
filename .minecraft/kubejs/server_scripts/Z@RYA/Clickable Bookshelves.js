/////////////////////////////////////////////////////////
// Реализация мода Storage Bookshelves в виде скрипта. //
// https://modrinth.com/mod/storage-bookshelves        //
/////////////////////////////////////////////////////////
onEvent('block.right_click', e => {

	if (e.player.isFake() || e.player.minecraftEntity.shiftKeyDown
		|| e.hand != MAIN_HAND || !e.block.hasTag('chipped:bookshelf')) {return}

	let blockPos = e.getBlock().getPos()
	let posiblePositions = [
		blockPos.offset( 1, 0, 0),
		blockPos.offset(-1, 0, 0),
		blockPos.offset( 0, 1, 0),
		blockPos.offset( 0,-1, 0),
		blockPos.offset( 0, 0, 1),
		blockPos.offset( 0, 0,-1)
	];
	// console.log(e.block.getItem().getName().getString())

	let getCustomName = (blockEntity) => {
		return (blockEntity.getCustomName() == null) ? "" : blockEntity.getCustomName().getString()
	}

	posiblePositions.forEach(pos => {
		let nearbyBlock = e.getLevel().getBlock(pos)
		if ((nearbyBlock.hasTag('chipped:barrel') || nearbyBlock.id == 'framedblocks:framed_secret_storage')
			&& getCustomName(nearbyBlock.getEntity()) == e.block.getItem().getName().getString()) { // "Книжная полка"

			let BlockHitResult = java("net.minecraft.world.phys.BlockHitResult");

			///////// Если вдруг нужно будет использовать предмет на блоке /////////
			// const UseOnContext = java("net.minecraft.world.item.context.UseOnContext");
			// let intResult = e.getItem().getItem().useOn(
			// 	new UseOnContext(e.getMinecraftPlayer(), e.hand,
			// 		new BlockHitResult(e.player.minecraftEntity.getViewVector(1), 'up', pos, false)
			// 	)
			// );
			////////////////////////////////////////////////////////////////////////

			let blockState = nearbyBlock.getBlockState()
			let literallyBlock = blockState.getBlock()
			// console.log(nearbyBlock.getEntity().getCustomName().getString())

			// https://nekoyue.github.io/ForgeJavaDocs-NG/javadoc/1.18.2/net/minecraft/world/level/block/BarrelBlock.html
			literallyBlock.use(blockState, e.getLevel().minecraftLevel, pos, e.getMinecraftPlayer(), e.hand,
				new BlockHitResult(e.player.minecraftEntity.getViewVector(1), 'up', pos, false)
			)

			e.player.swingArm(e.hand);
			e.cancel();
			return
		}
	})

})