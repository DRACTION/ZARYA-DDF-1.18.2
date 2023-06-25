onEvent('recipes', e => {

	e.replaceOutput({}, 'create:dough', 'farmersdelight:wheat_dough')

	removeRecipeByID(e, [
		'create:crafting/appliances/dough',
		'farmersdelight:wheat_dough_from_water',
		'farmersdelight:wheat_dough_from_eggs'
	])
	e.shapeless('5x farmersdelight:wheat_dough', ['5x create:wheat_flour', 'minecraft:water_bucket', '#forge:eggs'])
		.replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	e.shapeless('5x farmersdelight:wheat_dough', ['5x create:wheat_flour', Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), '#forge:eggs'])
		.replaceIngredient(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), 'minecraft:glass_bottle')

	e.remove({ id: "create:crafting/appliances/slime_ball" })
	e.shapeless('minecraft:slime_ball', ['#forge:dough', 'minecraft:lime_dye'])

	e.replaceInput({id: 'createaddition:compacting/cake_base'}, 'create:dough', '#forge:dough')

	removeRecipeByID(e, [
		'create:campfire_cooking/bread',
		'create:smoking/bread'
	])


	// Переделка рецептов торта
	removeRecipeByID(e, [
		'minecraft:cake',
		'create:crafting/curiosities/cake',
		'farmersrespite:coffee_cake'
	])
	e.shaped('createaddition:cake_base', [' E ','SDS'], {E:'#forge:eggs', S:'minecraft:sugar', D:'#forge:dough'})
	e.shaped('farmersrespite:coffee_cake', ['BCB'], {B:'farmersrespite:coffee_beans', C:'minecraft:cake'})

	// Мука вместо пшеницы
	removeRecipeByID(e, [
		'farmersdelight:cake_from_milk_bottle',
		'minecraft:bread'
	])
	e.shapeless('create:wheat_flour', ['3x minecraft:wheat'])
	
	// Упростить рецепт пшеничного теста (вместо литра - 1/4)
	// e.replaceInput({id: 'create:mixing/dough_by_mixing'}, Fluid.of('minecraft:water', 1000), Fluid.of('minecraft:water', 250))
	e.remove({ id: "create:mixing/dough_by_mixing" })
	e.recipes.createMixing('farmersdelight:wheat_dough', [
		Fluid.of('minecraft:water', 250),
		'create:wheat_flour'])

	// Блины
	// e.replaceInput({id: 'supplementaries:pancake'}, 'minecraft:wheat', '#forge:flour')
	e.remove({ id: "supplementaries:pancake" })
	e.recipes.createMixing('3x supplementaries:pancake', [
		Fluid.of('minecraft:milk', 250),
		'minecraft:sugar',
		'#forge:flour',
		'#forge:eggs']).heated()

	// Заготовка для пирога
	e.remove({ id: "farmersdelight:pie_crust" })
	e.shaped('3x farmersdelight:pie_crust', ['D D', ' D '], {D:'#forge:dough'})

	// Тыквенный пирог
	e.remove({ id: "minecraft:pumpkin_pie" })
	e.recipes.createMixing('minecraft:pumpkin_pie', [
		'farmersdelight:pie_crust',
		'minecraft:pumpkin',
		'#forge:eggs']).heated()

	// Яблочный пирог
	e.remove({ id: "farmersdelight:apple_pie" })
	e.recipes.createMixing('farmersdelight:apple_pie', [
		'farmersdelight:pie_crust',
		'3x minecraft:apple',
		'2x minecraft:sugar']).heated()

	// Шоколадный пирог - оставляем только наполнение дозатором
	e.remove({ id: "farmersdelight:chocolate_pie" })

	// Пирог с шиповником
	e.remove({ id: "farmersrespite:rose_hip_pie" })
	e.recipes.createMixing('farmersrespite:rose_hip_pie', [
		'farmersdelight:pie_crust',
		Fluid.of('create:honey', 250),
		Fluid.of('minecraft:milk', 500),
		'3x farmersrespite:rose_hips',
		'2x minecraft:sugar']).heated()

	// Cookies
	e.remove({ id: "farmersdelight:honey_cookie" })
	e.shapeless('8x farmersdelight:honey_cookie', ['#forge:dough', 'minecraft:honey_bottle'])
		.replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
	
	e.remove({ id: "minecraft:cookie" })
	e.shapeless('8x minecraft:cookie', ['#forge:dough', 'minecraft:cocoa_beans'])
	
	e.remove({ id: "farmersdelight:sweet_berry_cookie" })
	e.shapeless('8x farmersdelight:sweet_berry_cookie', ['#forge:dough', 'minecraft:sweet_berries'])
	
	e.remove({ id: "farmersrespite:green_tea_cookie" })
	e.shapeless('8x farmersrespite:green_tea_cookie', ['#forge:dough', 'farmersrespite:green_tea_leaves'])

})

onEvent('item.tags', e => {
	e.remove('forge:dough/wheat', 'create:dough')
	e.remove('forge:dough', 'create:dough')
	e.add('forge:dough', 'corn_delight:cornbread_batter')
})