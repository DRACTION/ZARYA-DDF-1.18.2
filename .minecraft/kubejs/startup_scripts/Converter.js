onEvent('item.registry', event => {
	event
		.create('empty_material_upgrade')
		.texture('zarya:item/empty_material_upgrade')
		.rarity(Rarity.EPIC)
		.unstackable()
		.glow(true)
	event
		.create('unfinished_material_upgrade')
		.texture('zarya:item/unfinished_material_upgrade')
		.unstackable()
		.glow(true)

	let arr = [
		['leather', Rarity.COMMON],
		['flint', Rarity.COMMON],
		['copper', Rarity.COMMON],
		['chainmail', Rarity.UNCOMMON],
		['golden', Rarity.UNCOMMON],
		['iron', Rarity.UNCOMMON],
		['diamond', Rarity.RARE],
		['netherite', Rarity.EPIC]
	]
	arr.forEach( inArr => {
		event
			.create(`${inArr[0]}_material_upgrade`)
			.texture(`zarya:item/${inArr[0]}_material_upgrade`)
			.rarity(inArr[1])
			.unstackable()
			.glow(true)
	})
})
