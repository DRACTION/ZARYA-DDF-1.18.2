onEvent('recipes', e => {
	///////////// Вода /////////////
	let waterIngredients = [
		['minecraft:water_bucket', Item.of('minecraft:potion', '{Potion:"minecraft:water"}')],
		Ingredient.customNBT(Item.of('ceramicbucket:ceramic_bucket').ignoreNBT(), nbt => { return nbt.Fluid?.FluidName == 'minecraft:water' }),
		Ingredient.customNBT(Item.of('woodenbucket:wooden_bucket').ignoreNBT(), nbt => { return nbt.Fluid?.FluidName == 'minecraft:water' })
	]
	///////////// Молоко /////////////
	let milkIngredients = [
		'#forge:milk',
		Ingredient.customNBT(Item.of('ceramicbucket:ceramic_bucket').ignoreNBT(), nbt => { return nbt.Fluid?.FluidName == 'minecraft:milk' }),
		Ingredient.customNBT(Item.of('woodenbucket:wooden_bucket').ignoreNBT(), nbt => { return nbt.Fluid?.FluidName == 'minecraft:milk' })
	]
	///////////// Ведро мёда /////////////
	let honeyBucketIngredients = [
		'#forge:buckets/honey',
		Ingredient.customNBT(Item.of('ceramicbucket:ceramic_bucket').ignoreNBT(), nbt => { return (nbt.Fluid?.FluidName == 'create:honey' || nbt.Fluid?.FluidName == 'productivebees:honey') && nbt.Fluid?.Amount >= 1000 }),
		Ingredient.customNBT(Item.of('woodenbucket:wooden_bucket').ignoreNBT(), nbt => { return (nbt.Fluid?.FluidName == 'create:honey' || nbt.Fluid?.FluidName == 'productivebees:honey') && nbt.Fluid?.Amount >= 1000 })
	]
	e.replaceOutput({}, 'productivebees:honey_bucket', 'create:honey_bucket')
	e.replaceInput({}, 'productivebees:honey_bucket', 'create:honey_bucket')
	e.remove({ id: "productivebees:honey_bucket_from_block" })
	///////////// Бутылочка молока /////////////
	e.shapeless('4x farmersdelight:milk_bottle', [
		Ingredient.customNBT(Item.of('ceramicbucket:ceramic_bucket').ignoreNBT(), nbt => { return nbt.Fluid?.FluidName == 'minecraft:milk' }),
		'4x minecraft:glass_bottle'])
	e.shapeless('4x farmersdelight:milk_bottle', [
		Ingredient.customNBT(Item.of('woodenbucket:wooden_bucket').ignoreNBT(), nbt => { return nbt.Fluid?.FluidName == 'minecraft:milk' }),
		'4x minecraft:glass_bottle'])
	/////////// Бутылочка мёда ///////////
	e.remove({ id: 'minecraft:honey_bottle' })
	e.remove({ id: 'productivebees:honey_bucket_to_honey_bottles' })
	honeyBucketIngredients.forEach( honey => {
		e.shapeless('4x minecraft:honey_bottle', [honey, '4x minecraft:glass_bottle'])
	})
	/////////// Блок мёда ///////////
	/////// Тесто Create заменяем на пшеничное farmersdelight
	e.replaceOutput({}, 'create:dough', 'farmersdelight:wheat_dough')
	e.replaceInput({}, 'create:dough', 'farmersdelight:wheat_dough')
	/////// Убираем из коптильни (духовки) рецепты, не относящиеся к копчению (например жарка и прочее)
	removeRecipeByID(e, [
		'nethersdelight:hoglin_sirloin_from_smoking',
		'minecraft:cooked_beef_from_smoking',
		'farmersdelight:fried_egg_from_smoking',
		'minecraft:cooked_chicken_from_smoking',
		'corn_delight:grilled_corn_from_smoking',
		'farmersdelight:cooked_cod_slice_from_smoking',
		'projectvibrantjourneys:green_dye_from_small_cactus',
		'farmersdelight:cooked_chicken_cuts_from_smoking',
		'projectvibrantjourneys:cindercane_to_blaze_powder',
		'farmersdelight:cooked_bacon_from_smoking',
		'farmersdelight:cooked_salmon_slice_from_smoking',
		'farmersdelight:beef_patty_from_smoking',
		'minecraft:cooked_cod_from_smoking',
		'minecraft:cooked_mutton_from_smoking',
		'minecraft:cooked_salmon_from_smoking',
		'farmersdelight:cooked_mutton_chops_from_smoking',
		'minecraft:cooked_rabbit_from_smoking',
		'minecraft:cooked_porkchop_from_smoking',
		'corn_delight:popcorn_from_smoking'])
	/////// Убираем из костра рецепты, не относящиеся к жарке (например копчение и прочее)
	removeRecipeByID(e, [
		'corn_delight:cornbread_from_campfire_cooking',
		'minecraft:dried_kelp_from_campfire_cooking',
		'minecraft:baked_potato_from_campfire_cooking',
		'corn_delight:tortilla_from_campfire_cooking'])
	//////////// Тушенные грибы ////////////
	removeRecipeByID(e, [
		'farmersdelight:cooking/mushroom_stew',
		'minecraft:mushroom_stew'])
	farmersdelight.cooking(e, 'minecraft:mushroom_stew', [
		'#forge:mushrooms',
		'#forge:mushrooms'], 'minecraft:bowl')
	//////////// Печенье ////////////
	e.remove({ id: 'minecraft:cookie' })
	e.recipes.createMixing('8x minecraft:cookie', [
		'#forge:dough',
		'minecraft:cocoa_beans']).lowheated()
	////////////// Тыквенный пирог //////////////
	e.remove({ id: 'minecraft:pumpkin_pie' })
	e.recipes.createMixing('minecraft:pumpkin_pie', [
		'farmersdelight:pie_crust',
		'2x farmersdelight:pumpkin_slice',
		'minecraft:sugar',
		'#forge:eggs']).lowheated()
	////////////// Тушённый кролик //////////////
	removeRecipeByID(e, [
		'minecraft:rabbit_stew_from_brown_mushroom',
		'minecraft:rabbit_stew_from_red_mushroom',
		'createlowheated:mixing/minecraft/rabbit_stew'])
	e.recipes.createMixing('minecraft:rabbit_stew', [
		'minecraft:bowl',
		'minecraft:baked_potato',
		'minecraft:rabbit',
		'minecraft:carrot',
		'#forge:mushrooms',
		Fluid.of('minecraft:water', 250)]).lowheated()
	////////////// Свекольный суп //////////////
	e.remove({ id: 'minecraft:beetroot_soup' })
	////////////// Томатный соус //////////////
	e.remove({id:'farmersdelight:integration/create/mixing/tomato_sauce_from_mixing'})
	////////////// Лист капусты //////////////
	e.remove({id:'farmersdelight:integration/create/mixing/cabage_slice_from_mixing'})
	////////////// Торт //////////////
	e.remove({ output: "minecraft:cake" })
	e.recipes.create.sequenced_assembly('minecraft:cake',
		'createaddition:cake_base_baked', [
			e.recipes.createFilling('createaddition:cake_base_baked',
				['createaddition:cake_base_baked', Fluid.of('minecraft:milk', 500)]),
			e.recipes.createDeploying('createaddition:cake_base_baked',
				['createaddition:cake_base_baked', 'minecraft:sweet_berries']),
			e.recipes.createDeploying('createaddition:cake_base_baked',
				['createaddition:cake_base_baked', 'minecraft:sweet_berries'])
	]).transitionalItem('createaddition:cake_base_baked').loops(1)
	////////////// Шоколадный торт //////////////
	e.remove({ output: "createaddition:chocolate_cake" })
	e.recipes.create.sequenced_assembly('createaddition:chocolate_cake',
		'createaddition:cake_base_baked', [
			e.recipes.createFilling('createaddition:cake_base_baked',
				['createaddition:cake_base_baked', Fluid.of('create:chocolate', 500)]),
			e.recipes.createDeploying('createaddition:cake_base_baked',
				['createaddition:cake_base_baked', 'minecraft:sweet_berries'])
	]).transitionalItem('createaddition:cake_base_baked').loops(1)
	////////////// Яблочный пирог //////////////
	e.remove({ id: "farmersdelight:apple_pie" })
	////////////// Чизкейк со сладкими ягодами //////////////
	e.remove({ id: "farmersdelight:sweet_berry_cheesecake" })
	////////////// Шоколадный пирог //////////////
	removeRecipeByID(e, [
		'farmersdelight:chocolate_pie',
		'createlowheated:mixing/farmersdelight/chocolate_pie'])
	////////////// Шоколад - жидкость //////////////
	removeRecipeByID(e, [
		'create:mixing/chocolate',
		'create:mixing/chocolate_melting'])
	////////////// Печенье из сладких ягод //////////////
	e.remove({ output: "farmersdelight:sweet_berry_cookie" })
	e.recipes.createMixing('8x farmersdelight:sweet_berry_cookie', [
		'#forge:dough',
		'minecraft:sweet_berries']).lowheated()
	////////////// Медовое печенье //////////////
	e.remove({ output: "farmersdelight:honey_cookie" })
	e.recipes.createMixing('8x farmersdelight:honey_cookie', [
		'#forge:dough',
		Fluid.of('create:honey', 250)]).lowheated()
	////////////// Арбузное мороженое //////////////
	e.remove({ id: "farmersdelight:melon_popsicle" })
	e.recipes.createMixing('farmersdelight:melon_popsicle', [
		'minecraft:stick',
		'minecraft:ice',
		'minecraft:melon_slice'])
	////////////// Арбузный сок //////////////
	e.remove({ output: "farmersdelight:melon_juice" })
	e.recipes.createMixing('farmersdelight:melon_juice', [
		'4x minecraft:melon_slice',
		'minecraft:sugar',
		'minecraft:glass_bottle'])
	////////////// Крем из светящихся ягод //////////////
	e.remove({ id: "farmersdelight:cooking/glow_berry_custard" })
	milkIngredients.forEach( milk => {
		farmersdelight.cooking(e, 'farmersdelight:glow_berry_custard',
			['minecraft:glow_berries', milk, '#forge:eggs', 'minecraft:sugar'],
			'minecraft:glass_bottle')
	})
	////////////// Фруктовый салат //////////////
	modifyShapelessID(e, 'farmersdelight:fruit_salad', 'farmersdelight:fruit_salad', 1,
		['minecraft:apple', 'minecraft:melon_slice', '#forge:berries', 'minecraft:bowl'])
	////////////// Хинкали //////////////
	e.replaceInput({ output: "farmersdelight:dumplings" }, '#forge:crops/cabbage', '#forge:salad_ingredients/cabbage')
	e.replaceInput({ output: "farmersdelight:dumplings" }, '#forge:raw_pork',
		['minecraft:porkchop', 'farmersdelight:minced_beef', 'farmersdelight:mutton_chops', 'farmersdelight:chicken_cuts',
		'farmersdelight:salmon_slice', 'farmersdelight:cod_slice', 'minecraft:brown_mushroom'])
	////////////// Фаршированный картофель //////////////
	e.remove({ output: "farmersdelight:stuffed_potato" })
	e.recipes.createMixing('farmersdelight:stuffed_potato', [
		'minecraft:baked_potato',
		'#forge:cooked_beef',
		Fluid.of('minecraft:milk', 250)]).lowheated()
	////////////// Голубцы //////////////
	e.replaceInput({ id: "farmersdelight:cooking/cabbage_rolls" }, '#forge:crops/cabbage', '#forge:salad_ingredients/cabbage')
	e.remove({ id: "createlowheated:mixing/farmersdelight/cabbage_rolls" })
	e.recipes.createMixing('farmersdelight:cabbage_rolls', [
		'#forge:salad_ingredients/cabbage',
		'#farmersdelight:cabbage_roll_ingredients']).lowheated()
	////////////// Костяной бульон //////////////
	e.remove({ output: "farmersdelight:bone_broth" })
	e.recipes.createMixing('farmersdelight:bone_broth', [
		'minecraft:bowl',
		'2x minecraft:bone',
		['#forge:mushrooms', 'minecraft:glow_berries', 'minecraft:hanging_roots', 'minecraft:glow_lichen'],
		['#forge:mushrooms', 'minecraft:glow_berries', 'minecraft:hanging_roots', 'minecraft:glow_lichen'],
		Fluid.of('minecraft:water', 250)]).lowheated()
	farmersdelight.cooking(e, 'farmersdelight:bone_broth', [
		['#forge:mushrooms', 'minecraft:glow_berries', 'minecraft:hanging_roots', 'minecraft:glow_lichen'],
		['#forge:mushrooms', 'minecraft:glow_berries', 'minecraft:hanging_roots', 'minecraft:glow_lichen'],
		'minecraft:bone',
		'minecraft:bone'], 'minecraft:bowl')
	////////////// Тушёная говядина //////////////
	e.replaceInput({ output: "farmersdelight:beef_stew" }, 'farmersdelight:minced_beef', '#forge:raw_beef')
	////////////// Куриный суп //////////////
	e.replaceInput({ output: "farmersdelight:chicken_soup" }, '#forge:raw_chicken', 'farmersdelight:chicken_cuts')
	////////////// Овощной суп //////////////
	e.remove({ output: "farmersdelight:vegetable_soup" })
	e.recipes.createMixing('farmersdelight:vegetable_soup', [
		'minecraft:bowl',
		'minecraft:carrot',
		'minecraft:potato',
		'minecraft:beetroot',
		'farmersdelight:cabbage_leaf',
		'#forge:vegetables',
		Fluid.of('minecraft:water', 250)]).lowheated()
	farmersdelight.cooking(e, 'farmersdelight:vegetable_soup',
		['minecraft:carrot', 'minecraft:potato', 'minecraft:beetroot',
		'farmersdelight:cabbage_leaf', '#forge:vegetables'],
		'minecraft:bowl')
	////////////// Жареный рис //////////////
	e.replaceInput({ id: "createlowheated:mixing/farmersdelight/fried_rice" }, 'minecraft:egg', '#forge:eggs')
	////////////// Тыквенный суп //////////////
	e.remove({ output: "farmersdelight:pumpkin_soup" })
	e.recipes.createMixing('farmersdelight:pumpkin_soup', [
		'minecraft:bowl',
		'2x farmersdelight:pumpkin_slice',
		'farmersdelight:cabbage_leaf',
		'farmersdelight:bacon',
		Fluid.of('minecraft:milk', 250)]).lowheated()
	milkIngredients.forEach( milk => {
		farmersdelight.cooking(e, 'farmersdelight:pumpkin_soup',
			['farmersdelight:pumpkin_slice', 'farmersdelight:pumpkin_slice', 'farmersdelight:cabbage_leaf',
			'farmersdelight:bacon', milk],
			'minecraft:bowl')
	})
	////////////// Запечённая тушеная треска //////////////
	e.replaceInput({ output: "farmersdelight:baked_cod_stew" }, '#forge:raw_fishes/cod', 'farmersdelight:cod_slice')
	e.replaceInput({ output: "farmersdelight:baked_cod_stew" }, 'minecraft:egg', '#forge:eggs')
	////////////// Тушёная рыба //////////////
	e.remove({ id: "createlowheated:mixing/farmersdelight/fish_stew" })
	e.recipes.createMixing('farmersdelight:fish_stew', [
		'minecraft:bowl',
		'farmersdelight:tomato_sauce',
		'farmersdelight:onion',
		'#forge:raw_fishes',
		Fluid.of('minecraft:water', 250)]).lowheated()
	////////////// Лапшичный суп (Рамэн) //////////////
	e.replaceInput({ output: "farmersdelight:noodle_soup" },
		'#forge:raw_pork', ['farmersdelight:bacon', 'farmersdelight:cooked_bacon'])
	////////////// Паста с фрикадельками //////////////
	e.remove({ id: "createlowheated:mixing/farmersdelight/pasta_with_meatballs" })
	e.recipes.createMixing('farmersdelight:pasta_with_meatballs', [
		'minecraft:bowl',
		'farmersdelight:raw_pasta',
		'farmersdelight:minced_beef',
		'farmersdelight:tomato_sauce']).lowheated()
	////////////// Паста с рубленой бараниной //////////////
	e.replaceInput({ id: "farmersdelight:cooking/pasta_with_mutton_chop" }, '#forge:raw_mutton', 'farmersdelight:mutton_chops')
	e.remove({ id: "createlowheated:mixing/farmersdelight/pasta_with_mutton_chop" })
	e.recipes.createMixing('farmersdelight:pasta_with_mutton_chop', [
		'minecraft:bowl',
		'farmersdelight:tomato_sauce',
		'farmersdelight:raw_pasta',
		'farmersdelight:mutton_chops']).lowheated()
	////////////// Рис с грибами //////////////
	e.remove({ id: "farmersdelight:cooking/mushroom_rice" })
	farmersdelight.cooking(e, 'farmersdelight:mushroom_rice',
		['#forge:mushrooms', '#forge:mushrooms', 'farmersdelight:rice', 'minecraft:potato', 'minecraft:carrot'],
		'minecraft:bowl')
	////////////// Овощная лапша //////////////
	e.replaceInput({ output: "farmersdelight:vegetable_noodles" }, '#forge:mushrooms', '#forge:mushrooms')
	////////////// Паста с чернилами спрута //////////////
	e.remove({ output: "farmersdelight:squid_ink_pasta" })
	farmersdelight.cooking(e, 'farmersdelight:squid_ink_pasta',
		['#forge:raw_fishes', '#forge:raw_fishes', 'farmersdelight:raw_pasta', 'farmersdelight:tomato', 'minecraft:ink_sac'],
		'minecraft:bowl')
	e.recipes.createMixing('farmersdelight:squid_ink_pasta', [
		'minecraft:bowl',
		'2x #forge:raw_fishes',
		'farmersdelight:raw_pasta',
		'farmersdelight:tomato',
		'minecraft:ink_sac']).lowheated()
	////////////// Жареный лосось //////////////
	e.replaceInput({ output: "farmersdelight:grilled_salmon" }, '#forge:crops/cabbage', 'farmersdelight:cabbage_leaf')
	////////////// Варёная кукуруза //////////////
	e.recipes.createMixing('corn_delight:boiled_corn', [
		'corn_delight:corn',
		Fluid.of('minecraft:water', 250)]).lowheated()
	////////////// Попкорн (кокпорн) //////////////
	e.recipes.createMixing('corn_delight:popcorn', ['corn_delight:corn_seeds']).lowheated()
	////////////// Кукуруруза со сливками //////////////
	e.remove({ output: "corn_delight:creamed_corn" })
	milkIngredients.forEach( milk => {
		farmersdelight.cooking(e, 'corn_delight:creamed_corn',
			['corn_delight:corn_seeds', 'corn_delight:corn_seeds', milk],
			'minecraft:bowl', 0.35)
	})
	e.recipes.createMixing('corn_delight:creamed_corn',
		['2x corn_delight:corn_seeds', 'minecraft:bowl', Fluid.of('minecraft:milk', 250)]).lowheated()
	////////////// Кукурузное тесто //////////////
	e.remove({ id: "corn_delight:cornbread_batter" })
	milkIngredients.forEach( milk => {
		e.shapeless('3x corn_delight:cornbread_batter', ['2x corn_delight:corn', milk, '#forge:eggs'])
	})
	////////////// Кукурузный суп //////////////
	e.remove({ output: "corn_delight:corn_soup" })
	milkIngredients.forEach( milk => {
		farmersdelight.cooking(e, 'corn_delight:corn_soup',
			['corn_delight:corn', 'farmersdelight:cabbage_leaf', '#farmersdelight:cabbage_roll_ingredients', milk],
			'minecraft:bowl', 0.35)
	})
	e.recipes.createMixing('corn_delight:corn_soup',
		['corn_delight:corn', 'farmersdelight:cabbage_leaf', '#farmersdelight:cabbage_roll_ingredients',
		'minecraft:bowl', Fluid.of('minecraft:milk', 250)]).lowheated()
	////////////// Напиток из кукурузы со сливками //////////////
	e.remove({ output: "corn_delight:creamy_corn_drink" })
	milkIngredients.forEach( milk => {
		farmersdelight.cooking(e, 'corn_delight:creamy_corn_drink',
			['corn_delight:corn', milk, 'minecraft:sugar'],
			'minecraft:glass_bottle', 0.35)
	})
	e.recipes.createMixing('corn_delight:creamy_corn_drink',
		['corn_delight:corn', 'minecraft:glass_bottle', 'minecraft:sugar', Fluid.of('minecraft:milk', 250)]).lowheated()
	////////////// Суп из кукурузного хлеба //////////////
	e.replaceInput({ id: "corn_delight:cooking/cornbread_stuffing" }, 'minecraft:baked_potato', 'minecraft:potato')
	e.replaceInput({ id: "corn_delight:cooking/cornbread_stuffing" }, 'minecraft:sweet_berries', '#forge:berries')
	e.recipes.createMixing('corn_delight:cornbread_stuffing',
		['corn_delight:cornbread', '#forge:vegetables', 'minecraft:potato',
		'#forge:berries', 'minecraft:bowl', Fluid.of('minecraft:water', 250)]).lowheated()
	////////////// Чаи, кофе, сидр //////////////
	removeRecipeByID(e, [
		'createlowheated:mixing/farmersdelight/apple_cider',
		'farmersdelight:cooking/apple_cider',
		'farmersdelight:cooking/hot_cocoa',
		'createlowheated:mixing/farmersdelight/hot_cocoa'])
	e.recipes.createEmptying([Fluid.of('create:chocolate', 250), 'minecraft:glass_bottle'], 'farmersdelight:hot_cocoa')
	let arr = [
		['farmersdelight', 'apple_cider', ['minecraft:sugar', 'minecraft:apple'], true, true],
		['farmersrespite', 'green_tea', ['2x farmersrespite:green_tea_leaves'], true, true],
		['farmersrespite', 'yellow_tea', ['2x farmersrespite:yellow_tea_leaves'], true, true],
		['farmersrespite', 'black_tea', ['2x farmersrespite:black_tea_leaves'], true, true],
		['farmersrespite', 'rose_hip_tea', ['2x farmersrespite:rose_hips'], true, false],
		['farmersrespite', 'purulent_tea', ['minecraft:nether_wart', 'minecraft:fermented_spider_eye'], true, false],
		['farmersrespite', 'dandelion_tea', ['minecraft:dandelion', '#farmersrespite:tea_leaves'], false, true],
		['farmersrespite', 'coffee', ['2x farmersrespite:coffee_beans'], true, true]
	]
	arr.forEach(inArr => {
		e.recipes.createMixing(`${inArr[0]}:${inArr[1]}`, [
			'minecraft:glass_bottle',
			Fluid.of('minecraft:water', 250)].concat(inArr[2])).lowheated()
		e.recipes.createMixing(`${inArr[0]}:${inArr[1]}`, [
			Item.of('minecraft:potion', '{Potion:"minecraft:water"}')].concat(inArr[2])).lowheated()

		if (inArr[3]) {
			e.recipes.createMixing(`farmersrespite:strong_${inArr[1]}`, [
				'minecraft:glass_bottle',
				`${inArr[0]}:${inArr[1]}`,
				Fluid.of('create:honey', 250)]).lowheated()
			honeyBucketIngredients.forEach( honey => {
				farmersdelight.brewing(e, `farmersrespite:strong_${inArr[1]}`,
					[`${inArr[0]}:${inArr[1]}`, honey],
					'minecraft:glass_bottle')
			})
		}
		if (inArr[4]) {
			e.recipes.createMixing(`farmersrespite:long_${inArr[1]}`, [
				'minecraft:glass_bottle',
				`${inArr[0]}:${inArr[1]}`,
				Fluid.of('minecraft:milk', 250)]).lowheated()
			e.remove({ id: `farmersrespite:brewing/long_${inArr[1]}` })
			milkIngredients.forEach( milk => {
				farmersdelight.brewing(e, `farmersrespite:long_${inArr[1]}`,
					[`${inArr[0]}:${inArr[1]}`, milk],
					'minecraft:glass_bottle')
			})
		}
	})
	////////////// Печенье с зеленым чаем //////////////
	e.remove({ output: "farmersrespite:green_tea_cookie" })
	e.recipes.createMixing('8x farmersrespite:green_tea_cookie',
		['#forge:dough', 'farmersrespite:green_tea_leaves']).lowheated()
	////////////// Закваска из адского нароста //////////////
	e.remove({ output: "farmersrespite:nether_wart_sourdough" })
	e.recipes.createMixing('farmersrespite:nether_wart_sourdough',
		['2x minecraft:nether_wart', 'minecraft:red_mushroom', 'minecraft:brown_mushroom']).lowheated()
	////////////// Чай Карри //////////////
	e.replaceInput({ output: "farmersrespite:tea_curry" }, '#forge:crops/cabbage', 'farmersdelight:cabbage_leaf')
	e.replaceInput({ output: "farmersrespite:tea_curry" }, '#forge:raw_chicken', 'farmersdelight:chicken_cuts')
	e.recipes.createMixing('farmersrespite:tea_curry', [
		'minecraft:bowl',
		'2x farmersrespite:yellow_tea_leaves',
		'farmersdelight:chicken_cuts', 'farmersdelight:cabbage_leaf',
		'farmersdelight:onion', 'farmersdelight:rice',
		Fluid.of('minecraft:water', 100)]).lowheated()
	////////////// Пылающий перец чили //////////////
	e.replaceInput({ output: "farmersrespite:blazing_chili" }, '#forge:raw_beef', 'farmersdelight:minced_beef')
	e.recipes.createMixing('farmersrespite:blazing_chili', [
		'minecraft:bowl',
		'2x minecraft:blaze_powder', '2x minecraft:nether_wart',
		'farmersrespite:coffee_beans',
		'farmersdelight:minced_beef']).lowheated()
	////////////// Жаренный страйдер //////////////
	e.replaceInput({ output: "nethersdelight:grilled_strider" }, '#nethersdelight:raw_strider', 'nethersdelight:strider_slice')
	e.recipes.createMixing('nethersdelight:grilled_strider', [
		'minecraft:bowl',
		'nethersdelight:strider_slice',
		'minecraft:warped_fungus',
		'minecraft:crimson_fungus',
		'minecraft:warped_roots',
		'minecraft:crimson_roots',
		Fluid.of('minecraft:water', 100)]).lowheated()
	////////////// Похлёбка из мха страйдера //////////////
	e.remove({ output: "nethersdelight:strider_moss_stew" })
	farmersdelight.cooking(e, 'nethersdelight:strider_moss_stew',
		['nethersdelight:ground_strider', 'minecraft:warped_fungus',
		'minecraft:crimson_fungus', 'minecraft:crimson_roots'],
		'minecraft:bowl', 0.35)
	e.recipes.createMixing('nethersdelight:strider_moss_stew', [
		'minecraft:bowl',
		'nethersdelight:ground_strider',
		'minecraft:warped_fungus',
		'minecraft:crimson_fungus',
		'minecraft:crimson_roots',
		Fluid.of('minecraft:water', 100)]).lowheated()
	////////////// Жареная курица //////////////
	e.replaceInput({ output: "farmersdelight:roast_chicken_block" }, 'minecraft:baked_potato', 'farmersdelight:stuffed_potato')
	e.replaceInput({ output: "farmersdelight:roast_chicken_block" }, 'minecraft:bread', '#forge:bread')
	e.replaceInput({ output: "farmersdelight:roast_chicken_block" }, 'minecraft:carrot', 'farmersdelight:cabbage_rolls')
	////////////// Фаршированная тыква //////////////
	e.remove({ output: "farmersdelight:stuffed_pumpkin_block" })
	farmersdelight.cooking(e, 'farmersdelight:stuffed_pumpkin_block',
		['corn_delight:cornbread', '#forge:vegetables',
		'#forge:berries', 'farmersdelight:tomato_sauce',
		'farmersdelight:brown_mushroom_colony', 'farmersdelight:rice'],
		'minecraft:pumpkin', 2.0, 20)
	e.recipes.createMixing('farmersdelight:stuffed_pumpkin_block', [
		'corn_delight:cornbread', '#forge:vegetables',
		'#forge:berries', 'farmersdelight:tomato_sauce',
		'farmersdelight:brown_mushroom_colony', 'farmersdelight:rice',
		'minecraft:pumpkin', Fluid.of('minecraft:water', 100)]).lowheated()
	////////////// Ветчина в медовой глазури //////////////
	e.replaceInput({ output: "farmersdelight:honey_glazed_ham_block" }, 'farmersdelight:cooked_rice', 'farmersdelight:fried_rice')
	////////////// Пастуший пирог //////////////
	e.remove({ output: "farmersdelight:shepherds_pie_block" })
	e.recipes.createMixing('farmersdelight:shepherds_pie_block', [
		'2x farmersdelight:stuffed_potato', '3x minecraft:cooked_mutton',
		'farmersdelight:onion', 'farmersdelight:pie_crust',
		'minecraft:bowl', Fluid.of('minecraft:milk', 1000)]).lowheated()
	////////////// Кофейный торт //////////////
	e.remove({ output: "farmersrespite:coffee_cake" })
	e.recipes.create.sequenced_assembly('farmersrespite:coffee_cake',
		'createaddition:cake_base_baked', [
			e.recipes.createDeploying('createaddition:cake_base_baked',
				['createaddition:cake_base_baked', 'farmersrespite:coffee_beans']),
			e.recipes.createFilling('createaddition:cake_base_baked',
				['createaddition:cake_base_baked', Fluid.of('create:chocolate', 500)]),
			e.recipes.createDeploying('createaddition:cake_base_baked',
				['createaddition:cake_base_baked', 'farmersrespite:coffee_beans'])
	]).transitionalItem('createaddition:cake_base_baked').loops(1)
	////////////// Начос //////////////
	e.remove({ output: "corn_delight:nachos_block" })
	milkIngredients.forEach( milk => {
		farmersdelight.cooking(e, 'corn_delight:nachos_block' ,[
			'corn_delight:tortilla_chip', 'corn_delight:tortilla_chip', 'farmersdelight:tomato_sauce',
			['#forge:cooked_beef', '#forge:cooked_mutton', '#forge:cooked_chicken', '#forge:cooked_pork'],
			milk],
			'minecraft:bowl', 0.35, 10)
	})
	e.recipes.createMixing('corn_delight:nachos_block', [
		'2x corn_delight:tortilla_chip', 'farmersdelight:tomato_sauce',
		['#forge:cooked_beef', '#forge:cooked_mutton', '#forge:cooked_chicken', '#forge:cooked_pork'],
		'minecraft:bowl', Fluid.of('minecraft:milk', 250)]).lowheated()
	////////////// Фаршированный хоглин //////////////
	e.remove({ output: "nethersdelight:stuffed_hoglin" })
	farmersdelight.cooking(e, 'nethersdelight:stuffed_hoglin',
		['nethersdelight:crimson_fungus_colony', 'nethersdelight:raw_stuffed_hoglin',
		'nethersdelight:warped_fungus_colony', 'nethersdelight:magma_gelatin'])
	e.recipes.createMixing('nethersdelight:stuffed_hoglin',
		['nethersdelight:crimson_fungus_colony', 'nethersdelight:raw_stuffed_hoglin',
		'nethersdelight:warped_fungus_colony', 'nethersdelight:magma_gelatin']).lowheated()
	////////////// Магмовый желатин //////////////
	e.recipes.createMixing('nethersdelight:magma_gelatin', [
		'3x minecraft:magma_cream', 'nethersdelight:propelpearl', 'minecraft:bucket',
		Fluid.of('minecraft:lava', 1000)]).lowheated()
	////////////// Тарелка жареной курицы //////////////
	e.shapeless('4x farmersdelight:roast_chicken', ['3x minecraft:bowl', 'farmersdelight:roast_chicken_block'])
		.replaceIngredient('farmersdelight:roast_chicken_block', 'minecraft:bone_meal')
	////////////// Тарелка фаршированной тыквы //////////////
	e.shapeless('4x farmersdelight:stuffed_pumpkin', ['4x minecraft:bowl', 'farmersdelight:stuffed_pumpkin_block'])
	////////////// Тарелка ветчины в медовой глазури //////////////
	e.shapeless('4x farmersdelight:honey_glazed_ham', ['3x minecraft:bowl', 'farmersdelight:honey_glazed_ham_block'])
		.replaceIngredient('farmersdelight:honey_glazed_ham_block', 'minecraft:bone')
	////////////// Тарелка пастушьего пирога //////////////
	e.shapeless('4x farmersdelight:shepherds_pie', ['3x minecraft:bowl', 'farmersdelight:shepherds_pie_block'])
	////////////// Пирог с шиповником //////////////
	e.remove({ id: "farmersrespite:rose_hip_pie" })
	e.recipes.createMixing('farmersrespite:rose_hip_pie', [
		'farmersdelight:pie_crust',
		Fluid.of('create:honey', 250),
		Fluid.of('minecraft:milk', 500),
		'3x farmersrespite:rose_hips',
		'2x minecraft:sugar']).lowheated()
	////////////// Блины //////////////
	e.remove({ id: "supplementaries:pancake" })
	e.recipes.createMixing('8x supplementaries:pancake', [
		Fluid.of('minecraft:milk', 250),
		'minecraft:sugar',
		'2x #forge:flour',
		'#forge:eggs']).lowheated()
	////////////// Пшеничное тесто //////////////
	e.remove({ output: "farmersdelight:wheat_dough" })
	waterIngredients.forEach( water => {
		e.shapeless('farmersdelight:wheat_dough', ['2x create:wheat_flour', water])
			.replaceIngredient(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), 'minecraft:glass_bottle')
	})
	e.recipes.createMixing('farmersdelight:wheat_dough', [
		Fluid.of('minecraft:water', 250),
		'2x create:wheat_flour'])
	////////////// Пшеничная мука //////////////
	e.shapeless('create:wheat_flour', ['3x minecraft:wheat'])
	////////////// Хлеб //////////////
	removeRecipeByID(e, [
		'minecraft:bread',
		'create:smoking/bread',
		'create:campfire_cooking/bread'])
	////////////// Заготовка для пирога //////////////
	e.remove({ output: "farmersdelight:pie_crust" })
	milkIngredients.forEach( milk => {
		e.shapeless('farmersdelight:pie_crust', ['#forge:dough', milk])
	})
	e.recipes.createMixing('farmersdelight:pie_crust', [
		Fluid.of('minecraft:milk', 250),
		'#forge:dough'])
	////////////// Основа торта //////////////
	e.replaceInput({id: 'createaddition:compacting/cake_base'}, 'create:dough', '#forge:dough')
})

onEvent('item.tags', e => {
	e.remove('forge:dough/wheat', 'create:dough')
	e.remove('forge:dough', 'create:dough')
	e.add('forge:dough', 'corn_delight:cornbread_batter')
	e.remove('forge:salad_ingredients/cabbage', 'farmersdelight:cabbage')
	e.remove('farmersdelight:cabbage_roll_ingredients', [
		'#forge:raw_pork',
		'#forge:raw_fishes',
		'#forge:raw_beef',
		'#forge:raw_chicken',
		'#forge:raw_mutton',
		'nethersdelight:hoglin_loin'])
	e.add('farmersdelight:cabbage_roll_ingredients', [
		'farmersdelight:salmon_slice',
		'farmersdelight:cod_slice',
		'#forge:raw_bacon',
		'farmersdelight:minced_beef',
		'farmersdelight:mutton_chops',
		'farmersdelight:chicken_cuts'])
})
