onEvent('recipes', e => {
	///////////// Блок мёда /////////////
	e.remove({ id: "productivebees:honey_bucket_to_honey_block" })
	e.remove({ id: "minecraft:honey_block" })
	/////////////////////////////
	e.remove({
		mod: 'productivebees',
		input: Item.of('minecraft:iron_sword').ignoreNBT(),
		type: 'minecraft:crafting_shapeless'
	})
	e.remove({
		mod: 'productivebees',
		input: Item.of('minecraft:wooden_sword').ignoreNBT(),
		type: 'minecraft:crafting_shapeless'
	})
	e.remove({
		mod: 'productivebees',
		input: Item.of('minecraft:diamond_sword').ignoreNBT(),
		type: 'minecraft:crafting_shapeless'
	})
	e.shaped('productivebees:glowstone_nest',
		[
			"XXX",
			"XIF",
			"XXX"
		],
		{
			X: 'minecraft:glowstone',
			F: 'tombstone:gemstone_of_familiar',
			I: 'productivebees:incubator'
		}
	)
	e.shaped('productivebees:soul_sand_nest',
		[
			"XXX",
			"XIF",
			"XXX"
		],
		{
			X: 'minecraft:soul_sand',
			F: 'tombstone:gemstone_of_familiar',
			I: 'productivebees:incubator'
		}
	)
	e.shaped('productivebees:nether_gold_nest',
		[
			"XXX",
			"XIF",
			"XXX"
		],
		{
			X: 'minecraft:nether_gold_ore',
			F: 'tombstone:gemstone_of_familiar',
			I: 'productivebees:incubator'
		}
	)
	e.shaped('productivebees:obsidian_nest',
		[
			"XXX",
			"XEF",
			"XXX"
		],
		{
			X: 'minecraft:crying_obsidian',
			F: 'tombstone:gemstone_of_familiar',
			E: 'minecraft:dragon_egg'
		}
	).keepIngredient('minecraft:dragon_egg')

	removeRecipeByID(e, [
		'productivebees:guide_book',
		'productivebees:guide_book_sturdy',
		'productivebees:heated_centrifuge'
	])

	e.recipes.create.mechanical_crafting('productivebees:heated_centrifuge',
		[
			'III',
			'UEU',
			'CBC'
		],
		{
			I: '#forge:plates/cast_iron',
			U: 'productivebees:upgrade_comb_block',
			E: 'productivebees:dragon_egg_hive',
			C: '#forge:storage_blocks/copper',
			B: 'create:basin'
		}
	).id('zarya:heated_centrifuge')

	e.remove({ output: 'productivebees:bottler'})

	///////////// Мёд /////////////
	e.forEachRecipe({type: "productivebees:centrifuge"}, recipe => {
		recipe.json.get('outputs').forEach( output => {
			if (output.get("fluid") != null
				&& output.get('fluid').get('fluid') == "\"productivebees:honey\"") {
				output.get('fluid').add('fluid', "create:honey");
			}
		})
	})
	///////////// Сломанный рецепт "productivebees:rotten" /////////////
	// Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:rotten"}}')
	e.remove({ id:"productivebees:create/mixing/honeycomb_rotten" })
	//////////// Пчелиные соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb" })
	e.recipes.createMixing([
		'productivebees:wax',
		Fluid.of('create:honey', 100)
	], 'minecraft:honeycomb').lowheated()
	//////////// Пчела-скелет медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_bone" })
	e.recipes.createMixing([
		Item.of('minecraft:bone_meal').withChance(0.7),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:skeletal"}}')).lowheated()
	//////////// Шёлковая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_silky" })
	e.recipes.createMixing([
		Item.of('minecraft:string').withChance(0.5),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:silky"}}')).lowheated()
	//////////// Медная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/ingots/honeycomb_copper" })
	e.recipes.createMixing([
		Item.of('9x create:copper_nugget').withChance(0.4),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:copper"}}')).lowheated()
	//////////// Алмазная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/gems/honeycomb_diamond" })
	e.recipes.createMixing([
		Item.of('minecraft:diamond').withChance(0.2),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:diamond"}}')).lowheated()
	//////////// Железная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/ingots/honeycomb_iron" })
	e.recipes.createMixing([
		Item.of('9x minecraft:iron_nugget').withChance(0.4),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:iron"}}')).lowheated()
	//////////// Светящаяся пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/dusts/honeycomb_glowing" })
	e.recipes.createMixing([
		'minecraft:glowstone_dust',
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:glowing"}}')).lowheated()
	//////////// Древняя пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/ingots/honeycomb_netherite" })
	e.recipes.createMixing([
		Item.of('minecraft:netherite_scrap').withChance(0.1),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:netherite"}}')).lowheated()
	//////////// Эндер пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_ender" })
	e.recipes.createMixing([
		Item.of('minecraft:ender_pearl').withChance(0.2),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:ender"}}')).lowheated()
	//////////// Драконовая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_draconic" })
	e.recipes.createMixing([
		Item.of('productivebees:draconic_dust').withChance(0.3),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:draconic"}}')).lowheated()
	//////////// Опытная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_experience" })
	e.recipes.createMixing([
		'productivebees:wax',
		Fluid.of('create_enchantment_industry:experience', 5)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:experience"}}')).lowheated()
	//////////// Магмовая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_magmatic" })
	e.recipes.createMixing([
		Item.of('minecraft:magma_cream').withChance(0.3),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:magmatic"}}')).lowheated()
	//////////// Аметистовая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/gems/honeycomb_amethyst" })
	e.recipes.createMixing([
		Item.of('minecraft:amethyst_shard').withChance(0.3),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:amethyst"}}')).lowheated()
	//////////// Пылающая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/dusts/honeycomb_blazing" })
	e.recipes.createMixing([
		Item.of('minecraft:blaze_powder').withChance(0.3),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:blazing"}}')).lowheated()
	//////////// Warped Shroombee медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/shroom/honeycomb_warped" })
	e.recipes.createMixing([
		Item.of('minecraft:warped_fungus').withChance(0.7),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:warped"}}')).lowheated()
	//////////// Brown Shroombee медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/shroom/honeycomb_brown_shroom" })
	e.recipes.createMixing([
		Item.of('minecraft:brown_mushroom').withChance(0.7),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:brown_shroom"}}')).lowheated()
	//////////// Слизневая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_slimy" })
	e.recipes.createMixing([
		Item.of('minecraft:slime_ball').withChance(0.2),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:slimy"}}')).lowheated()
	//////////// Морозная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_frosty" })
	e.recipes.createMixing([
		Item.of('minecraft:ice').withChance(0.4),
		'2x minecraft:snowball',
		Item.of('minecraft:snowball').withChance(0.5),
		Item.of('minecraft:snowball').withChance(0.5),
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:frosty"}}'))
	//////////// Red Shroombee медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/shroom/honeycomb_red_shroom" })
	e.recipes.createMixing([
		Item.of('minecraft:red_mushroom').withChance(0.7),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:red_shroom"}}')).lowheated()
	//////////// Угольная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_fossilised" })
	e.recipes.createMixing([
		Item.of('minecraft:coal').withChance(0.6),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:coal"}}')).lowheated()
	//////////// Призмариновая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_prismarine" })
	e.recipes.createMixing([
		Item.of('minecraft:prismarine_shard').withChance(0.2),
		Item.of('minecraft:prismarine_crystals').withChance(0.05),
		'productivebees:wax'
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:prismarine"}}')).lowheated()
	//////////// Crimsom Shroombee медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/shroom/honeycomb_crimson" })
	e.recipes.createMixing([
		Item.of('minecraft:crimson_fungus').withChance(0.7),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:crimson"}}')).lowheated()
	//////////// Кристаллическая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/gems/honeycomb_quartz" })
	e.recipes.createMixing([
		Item.of('minecraft:quartz').withChance(0.5),
		Item.of('minecraft:quartz').withChance(0.5),
		Item.of('minecraft:quartz').withChance(0.5),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:crystalline"}}')).lowheated()
	//////////// Пчела-визер медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_withered" })
	e.recipes.createMixing([
		Item.of('productivebees:wither_skull_chip').withChance(0.3),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:withered"}}')).lowheated()
	//////////// Пчела-могила медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/tombstone/honeycomb_grave" })
	e.recipes.createMixing([
		Item.of('tombstone:grave_dust').withChance(0.2),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:grave"}}')).lowheated()
	//////////// Лазуритовая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/gems/honeycomb_lapis" })
	e.recipes.createMixing([
		Item.of('minecraft:lapis_lazuli').withChance(0.5),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:lapis"}}')).lowheated()
	//////////// Латунная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/ingots/honeycomb_brazen" })
	e.recipes.createMixing([
		Item.of('9x create:brass_nugget').withChance(0.4),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:brass"}}')).lowheated()
	//////////// Золотая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/ingots/honeycomb_gold" })
	e.recipes.createMixing([
		Item.of('9x minecraft:gold_nugget').withChance(0.4),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:gold"}}')).lowheated()
	//////////// Обсидиановая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_obsidian" })
	e.recipes.createMixing([
		Item.of('2x create:powdered_obsidian').withChance(0.5),
		Item.of('create:powdered_obsidian').withChance(0.5),
		Item.of('create:powdered_obsidian').withChance(0.5),
		Item.of('create:powdered_obsidian').withChance(0.5),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:obsidian"}}')).lowheated()
	//////////// Изумрудная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/gems/honeycomb_emerald" })
	e.recipes.createMixing([
		Item.of('minecraft:emerald').withChance(0.2),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:emerald"}}')).lowheated()
	//////////// Цинковая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/ingots/honeycomb_zinc" })
	e.recipes.createMixing([
		Item.of('9x create:zinc_nugget').withChance(0.4),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:zinc"}}')).lowheated()
	//////////// Редстоуновая пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/dusts/honeycomb_redstone" })
	e.recipes.createMixing([
		Item.of('minecraft:redstone').withChance(0.5),
		Item.of('minecraft:redstone').withChance(0.5),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:redstone"}}')).lowheated()
	//////////// Шоколадная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/fluids/honeycomb_chocolate" })
	e.recipes.createMixing([
		'productivebees:wax',
		Fluid.of('create:chocolate', 100)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:chocolate"}}')).lowheated()
	//////////// Пчела-зомби медовые соты ////////////
	e.recipes.createMixing([
		Item.of('minecraft:rotten_flesh').withChance(0.6),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:zombie"}}')).lowheated()
	//////////// Чайная пчела медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/fluids/honeycomb_tea" })
	e.recipes.createMixing([
		Item.of('farmersrespite:green_tea_leaves').withChance(0.1),
		Item.of('farmersrespite:yellow_tea_leaves').withChance(0.1),
		Item.of('farmersrespite:black_tea_leaves').withChance(0.1),
		'productivebees:wax',
		Fluid.of('create:tea', 100)
	], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:tea"}}')).lowheated()
	//////////// Призрачные медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_ghostly" })
	e.recipes.createMixing([
		Item.of('minecraft:ghast_tear').withChance(0.05),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], 'productivebees:honeycomb_ghostly').lowheated()
	//////////// Молочные медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/fluids/honeycomb_milky_fluid" })
	e.recipes.createMixing([
		'productivebees:wax',
		Fluid.of('minecraft:milk', 100)
	], 'productivebees:honeycomb_milky').lowheated()
	//////////// Рыхлые медовые соты ////////////
	e.remove({ id:"productivebees:create/mixing/honeycomb_powdery" })
	e.recipes.createMixing([
		Item.of('minecraft:gunpowder').withChance(0.5),
		'productivebees:wax',
		Fluid.of('create:honey', 50)
	], 'productivebees:honeycomb_powdery').lowheated()
})

onEvent('item.tags', e => {
	e.remove('forge:buckets/honey', 'productivebees:honey_bucket')
})
