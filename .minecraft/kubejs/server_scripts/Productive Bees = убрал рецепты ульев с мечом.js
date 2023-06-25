onEvent('recipes', e => {
	removeRecipeByID(e, [
		'productivebees:hives/bumble_bee_nest',
		'productivebees:hives/soul_sand_nest',
		'productivebees:hives/acacia_wood_nest',
		'productivebees:hives/snow_nest',
		'productivebees:hives/coarse_dirt_nest',
		'productivebees:hives/birch_wood_nest',
		'productivebees:hives/gravel_nest',
		'productivebees:hives/sugar_cane_nest',
		'productivebees:hives/jungle_wood_nest',
		'productivebees:hives/dark_oak_wood_nest',
		'productivebees:hives/oak_wood_nest',
		'productivebees:hives/sand_nest',
		'productivebees:hives/spruce_wood_nest',
		'productivebees:hives/glowstone_nest'
	])
	//Книжки пока бесполезны, отключил крафт
	removeRecipeByID(e, [
		'productivebees:guide_book',
		'productivebees:guide_book_sturdy'
	])
})
