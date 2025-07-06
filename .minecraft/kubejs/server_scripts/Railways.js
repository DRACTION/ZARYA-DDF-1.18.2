onEvent('recipes', e => {
	///////// Железнодорожные пути /////////
	[
		['acacia', '#forge:rods/iron'], ///////// Железнодорожный путь на акациевых шпалах /////////
		['birch', '#forge:rods/iron'], ///////// Железнодорожный путь на берёзовых шпалах /////////
		['crimson', '#forge:rods/gold'], ///////// Железнодорожный путь на шпалах из багровых досок /////////
		['dark_oak', '#forge:rods/iron'], ///////// Железнодорожный путь из тёмного дуба /////////
		['jungle', '#forge:rods/iron'], ///////// Железнодорожный путь на шпалах из тропического дерева /////////
		['oak', '#forge:rods/iron'], ///////// Железнодорожный путь на дубовых шпалах /////////
		['spruce', '#forge:rods/iron'], ///////// Железнодорожный путь на еловых шпалах /////////
		['warped', '#forge:rods/gold'], ///////// Железнодорожный путь на шпалах из искажённого дерева /////////
		['blackstone', '#forge:rods/gold'] ///////// Железнодорожный путь на чернитных шпалах /////////
	].forEach(material => {
		e.remove({id: `railways:sequenced_assembly/track_${material[0]}`})
		let trans = `railways:track_incomplete_${material[0]}`
		e.recipes.create.sequenced_assembly(`railways:track_${material[0]}`,
			`minecraft:${material[0]}_slab`,
		[
			e.recipes.createDeploying(trans, [trans, material[1]]),
			e.recipes.createDeploying(trans, [trans, material[1]]),
			e.recipes.createPressing(trans, trans)
		]).transitionalItem(trans).loops(1)
	})
})
