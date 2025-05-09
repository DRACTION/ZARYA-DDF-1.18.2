onEvent('recipes', event => {
	event.remove({id: 'woodenbucket:wooden_bucket'})
	event.shaped('woodenbucket:wooden_bucket',
		[
			" R ",
			"X X",
			" X "
		],
		{
			X: '#minecraft:logs',
			R: 'supplementaries:rope'
		}
	)
	///////////// Деревянное ведро Мёд /////////////
	event.shapeless(
		Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"create:honey"}}'),
		[
			Ingredient.customNBT(Item.of('woodenbucket:wooden_bucket').ignoreNBT(), nbt => { return !nbt.contains("Fluid") }),
			'4x minecraft:honey_bottle'
		]
	).modifyResult((grid, result) => {
		let oldBucket = grid.find(Item.of('woodenbucket:wooden_bucket').ignoreNBT());
		result.nbt.Damage = oldBucket.nbt.Damage;
		return result
	})
	///////////// Керамическое ведро Мёд /////////////
	event.shapeless(
		Item.of('ceramicbucket:ceramic_bucket', '{BucketContent:"create:honey",Fluid:{Amount:1000,FluidName:"create:honey"}}'),
		[
			Ingredient.customNBT(Item.of('ceramicbucket:ceramic_bucket').ignoreNBT(), nbt => { return !nbt.contains("Fluid") }),
			'4x minecraft:honey_bottle'
		]
	).modifyResult((grid, result) => {
		let oldBucket = grid.find(Item.of('ceramicbucket:ceramic_bucket').ignoreNBT());
		result.nbt.Damage = oldBucket.nbt.Damage;
		return result
	})
	///////////// Деревянное ведро Молоко /////////////
	event.shapeless(
		Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:milk"}}'),
		[
			Ingredient.customNBT(Item.of('woodenbucket:wooden_bucket').ignoreNBT(), nbt => { return !nbt.contains("Fluid") }),
			'4x farmersdelight:milk_bottle'
		]
	).modifyResult((grid, result) => {
		let oldBucket = grid.find(Item.of('woodenbucket:wooden_bucket').ignoreNBT());
		result.nbt.Damage = oldBucket.nbt.Damage;
		return result
	})
	///////////// Керамическое ведро Молоко /////////////
	event.shapeless(
		Item.of('ceramicbucket:ceramic_bucket', '{BucketContent:"minecraft:milk",Fluid:{Amount:1000,FluidName:"minecraft:milk"}}'),
		[
			Ingredient.customNBT(Item.of('ceramicbucket:ceramic_bucket').ignoreNBT(), nbt => { return !nbt.contains("Fluid") }),
			'4x farmersdelight:milk_bottle'
		]
	).modifyResult((grid, result) => {
		let oldBucket = grid.find(Item.of('ceramicbucket:ceramic_bucket').ignoreNBT());
		result.nbt.Damage = oldBucket.nbt.Damage;
		return result
	})
})
