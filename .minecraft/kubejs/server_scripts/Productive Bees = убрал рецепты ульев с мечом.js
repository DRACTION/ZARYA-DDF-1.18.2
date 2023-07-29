onEvent('recipes', e => {
	e.remove({
		mod: 'productivebees',
		input: Item.of('minecraft:iron_sword').ignoreNBT(),
		type: 'minecraft:crafting_shapeless'
	})
	//Книжки пока бесполезны, отключил крафт
	removeRecipeByID(e, [
		'productivebees:guide_book',
		'productivebees:guide_book_sturdy'
	])
})
