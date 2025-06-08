onEvent('recipes', event => {
	event.remove({id:'apotheosis:torch'})
	event.campfireCooking('minecraft:torch', 'minecraft:stick').cookingTime(600)  // 30 сек (20 тиков = 1 сек)
	event.campfireCooking('minecraft:torch', 'valhelsia_structures:doused_torch').cookingTime(160)


	removeRecipeByID(event, [
		'minecraft:torch', 'minecraft:soul_torch',
		'bambooeverything:bamboo_torch', 'bambooeverything:dry_bamboo_torch',
		'framedblocks:framed_torch', 'framedblocks:framed_soul_torch',
		'minecraft:campfire', 'minecraft:soul_campfire'])

	let firestarters = [
		'kubejs:firestarter',
		'minecraft:flint_and_steel']
	firestarters.forEach(firestarter => {
		event.shapeless('minecraft:torch', [
			Item.of(firestarter).ignoreNBT(),
			'minecraft:stick']).damageIngredient(firestarter)
		event.shapeless('4x minecraft:torch', [
			Item.of(firestarter).ignoreNBT(),
			'4x minecraft:stick', '#minecraft:coals']).damageIngredient(firestarter)
		event.shapeless('4x minecraft:soul_torch', [
			Item.of(firestarter).ignoreNBT(), '#minecraft:soul_fire_base_blocks',
			'4x minecraft:stick', '#minecraft:coals']).damageIngredient(firestarter)

		event.shapeless('bambooeverything:bamboo_torch', [
			Item.of(firestarter).ignoreNBT(),
			'minecraft:bamboo']).damageIngredient(firestarter)
		event.shapeless('bambooeverything:dry_bamboo_torch', [
			Item.of(firestarter).ignoreNBT(),
			'bambooeverything:dry_bamboo']).damageIngredient(firestarter)
		
		event.shapeless('4x framedblocks:framed_torch', [
			Item.of(firestarter).ignoreNBT(),
			'framedblocks:framed_cube', '#minecraft:coals']).damageIngredient(firestarter)
		event.shapeless('4x framedblocks:framed_soul_torch', [
			Item.of(firestarter).ignoreNBT(), '#minecraft:soul_fire_base_blocks',
			'framedblocks:framed_cube', '#minecraft:coals']).damageIngredient(firestarter)

		event.shaped('minecraft:campfire', [
			' X ',
			'SCS',
			'LLL'], {
			X: Item.of(firestarter).ignoreNBT(),
			S: 'minecraft:stick',
			C: '#minecraft:coals',
			L: '#minecraft:logs'
		}).damageIngredient(firestarter)
		event.shaped('minecraft:soul_campfire', [
			' X ',
			'SCS',
			'LLL'], {
			X: Item.of(firestarter).ignoreNBT(),
			S: 'minecraft:stick',
			C: '#minecraft:soul_fire_base_blocks',
			L: '#minecraft:logs'
		}).damageIngredient(firestarter)
	})
})