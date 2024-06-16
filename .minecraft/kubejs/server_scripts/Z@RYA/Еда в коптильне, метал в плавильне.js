onEvent('recipes', e => {

	e.remove({ id: 'minecraft:cooked_mutton', type: 'minecraft:smelting' })
	e.remove({ id: 'minecraft:cooked_porkchop', type: 'minecraft:smelting' })
	e.remove({ id: 'minecraft:cooked_salmon', type: 'minecraft:smelting' })
	e.remove({ id: 'minecraft:cooked_cod', type: 'minecraft:smelting' })
	e.remove({ id: 'minecraft:cooked_beef', type: 'minecraft:smelting' })
	e.remove({ id: 'minecraft:cooked_chicken', type: 'minecraft:smelting' })
	e.remove({ id: 'minecraft:baked_potato', type: 'minecraft:smelting' })
	e.remove({ id: 'minecraft:cooked_rabbit', type: 'minecraft:smelting' })
	e.remove({ id: 'minecraft:dried_kelp_from_smelting', type: 'minecraft:smelting' })

	e.remove({ id: 'farmersdelight:fried_egg', type: 'minecraft:smelting' })
	e.remove({ id: 'farmersdelight:beef_patty', type: 'minecraft:smelting' })
	e.remove({ id: 'farmersdelight:bread_from_smelting', type: 'minecraft:smelting' })
	e.remove({ id: 'farmersdelight:cooked_chicken_cuts', type: 'minecraft:smelting' })
	e.remove({ id: 'farmersdelight:cooked_bacon', type: 'minecraft:smelting' })
	e.remove({ id: 'farmersdelight:cooked_cod_slice', type: 'minecraft:smelting' })
	e.remove({ id: 'farmersdelight:cooked_salmon_slice', type: 'minecraft:smelting' })
	e.remove({ id: 'farmersdelight:cooked_mutton_chops', type: 'minecraft:smelting' })

	e.remove({ id: 'corn_delight:grilled_corn', type: 'minecraft:smelting' })
	e.remove({ id: 'corn_delight:popcorn', type: 'minecraft:smelting' })
	e.remove({ id: 'corn_delight:cornbread', type: 'minecraft:smelting' })
	e.remove({ id: 'corn_delight:tortilla', type: 'minecraft:smelting' })

	e.remove({ id: 'nethersdelight:hoglin_sirloin', type: 'minecraft:smelting' })

	e.remove({ id: 'create:smelting/bread', type: 'minecraft:smelting' })


	e.remove({ output: 'minecraft:iron_ingot', type: 'minecraft:smelting' })
	e.remove({ output: 'minecraft:iron_ingot', type: 'minecraft:blasting' })
	e.blasting('minecraft:iron_ingot', '#forge:ores/iron').xp(1.0)
	e.blasting('minecraft:iron_ingot', 'minecraft:raw_iron_block').xp(1.0)
	e.blasting('minecraft:iron_nugget', 'minecraft:raw_iron').xp(0.1)
	e.blasting('2x minecraft:iron_nugget', 'create:crushed_raw_iron').xp(0.2)

	e.remove({ output: 'minecraft:gold_ingot', type: 'minecraft:smelting' })
	e.remove({ output: 'minecraft:gold_ingot', type: 'minecraft:blasting' })
	e.blasting('minecraft:gold_ingot', '#forge:ores/gold').xp(1.0)
	e.blasting('minecraft:gold_ingot', 'minecraft:raw_gold_block').xp(1.0)
	e.blasting('minecraft:gold_nugget', 'minecraft:raw_gold').xp(0.1)
	e.blasting('2x minecraft:gold_nugget', 'create:crushed_raw_gold').xp(0.2)

	e.remove({ output: 'minecraft:copper_ingot', type: 'minecraft:smelting' })
	e.remove({ output: 'minecraft:copper_ingot', type: 'minecraft:blasting' })
	e.blasting('minecraft:copper_ingot', '#forge:ores/copper').xp(1.0)
	e.blasting('minecraft:copper_ingot', 'minecraft:raw_copper_block').xp(1.0)
	e.blasting('create:copper_nugget', 'minecraft:raw_copper').xp(0.1)
	e.blasting('2x create:copper_nugget', 'create:crushed_raw_copper').xp(0.2)

	e.remove({ output: 'create:zinc_ingot', type: 'minecraft:smelting' })
	e.remove({ output: 'create:zinc_ingot', type: 'minecraft:blasting' })
	e.blasting('create:zinc_ingot', '#forge:ores/zinc').xp(1.0)
	e.blasting('create:zinc_ingot', 'create:raw_zinc_block').xp(1.0)
	e.blasting('create:zinc_nugget', 'create:raw_zinc').xp(0.1)
	e.blasting('2x create:zinc_nugget', 'create:crushed_raw_zinc').xp(0.2)

	e.remove({ output: 'minecraft:diamond', type: 'minecraft:smelting' })
	e.remove({ output: 'minecraft:diamond', type: 'minecraft:blasting' })
	e.blasting('minecraft:diamond', '#forge:ores/diamond').xp(1.0)

	e.remove({ output: 'minecraft:emerald', type: 'minecraft:smelting' })
	e.remove({ output: 'minecraft:emerald', type: 'minecraft:blasting' })
	e.blasting('minecraft:emerald', '#forge:ores/emerald').xp(1.0)

	e.remove({ output: 'minecraft:redstone', type: 'minecraft:smelting' })
	e.smelting('minecraft:redstone', '#forge:ores/redstone').xp(1.0)
	e.remove({ output: 'minecraft:redstone', type: 'minecraft:blasting' })
	e.blasting('3x minecraft:redstone', '#forge:ores/redstone').xp(1.0)

	e.remove({ output: 'minecraft:lapis_lazuli', type: 'minecraft:smelting' })
	e.smelting('minecraft:lapis_lazuli', '#forge:ores/lapis').xp(1.0)
	e.remove({ output: 'minecraft:lapis_lazuli', type: 'minecraft:blasting' })
	e.blasting('5x minecraft:lapis_lazuli', '#forge:ores/lapis').xp(1.0)

	e.remove({ output: 'minecraft:coal', type: 'minecraft:smelting' })
	e.remove({ output: 'minecraft:coal', type: 'minecraft:blasting' })

	e.remove({ output: 'minecraft:quartz', type: 'minecraft:smelting' })

	//////////////// Переплавка инструментов и брони в слитки /////
	e.remove({ id: 'minecraft:iron_nugget_from_smelting' })
	e.remove({ id: 'farmersdelight:iron_nugget_from_smelting_knife' })
	e.remove({ id: 'minecraft:iron_nugget_from_blasting' })
	e.remove({ id: 'farmersdelight:iron_nugget_from_blasting_knife' })
	e.remove({ id: 'minecraft:gold_nugget_from_smelting' })
	e.remove({ id: 'farmersdelight:gold_nugget_from_smelting_knife' })
	e.remove({ id: 'minecraft:gold_nugget_from_blasting' })
	e.remove({ id: 'farmersdelight:gold_nugget_from_blasting_knife' })

	e.blasting('minecraft:copper_ingot', '#zarya:blasting_to_copper_ingot').xp(0.2)
	e.blasting('minecraft:iron_ingot', '#zarya:blasting_to_iron_ingot').xp(0.2)
	e.blasting('minecraft:gold_ingot', '#zarya:blasting_to_golden_ingot').xp(0.2)
	
	e.blasting('minecraft:copper_ingot', '#forge:plates/copper')
	e.blasting('minecraft:iron_ingot', '#forge:plates/iron')
	e.blasting('minecraft:gold_ingot', '#forge:plates/gold')
	e.blasting('create:brass_ingot', '#forge:plates/brass')
	e.blasting('create:zinc_ingot', '#forge:plates/zinc')

})

onEvent('item.tags', e => {
	let arr = [
		['copper', 'stone', false],
		['iron', 'iron', true],
		['golden', 'golden', true]
	]
	arr.forEach( inArr => {
		e.add(`zarya:blasting_to_${inArr[0]}_ingot`, [
			`minecraft:${inArr[1]}_sword`,
			`minecraft:${inArr[1]}_shovel`,
			`minecraft:${inArr[1]}_pickaxe`,
			`minecraft:${inArr[1]}_axe`,
			`minecraft:${inArr[1]}_hoe`
		])
		if (inArr[2]) {
			e.add(`zarya:blasting_to_${inArr[0]}_ingot`, [
				`minecraft:${inArr[1]}_helmet`,
				`minecraft:${inArr[1]}_chestplate`,
				`minecraft:${inArr[1]}_leggings`,
				`minecraft:${inArr[1]}_boots`,
				`minecraft:${inArr[1]}_horse_armor`,
				`farmersdelight:${inArr[1]}_knife`,
				`epicfight:${inArr[1]}_greatsword`,
				`epicfight:${inArr[1]}_spear`,
				`epicfight:${inArr[1]}_tachi`,
				`epicfight:${inArr[1]}_longsword`,
				`epicfight:${inArr[1]}_dagger`,
				`wom:${inArr[1]}_greataxe`,
				`wom:${inArr[1]}_staff`
			])
		}
	})
	e.add(`zarya:blasting_to_iron_ingot`, `ef_weapon_extended:iron_knuckles`)
	e.add(`zarya:blasting_to_golden_ingot`, [
		`wom:golden_monocle`,
		`wom:golden_kit`,
		`wom:golden_chrono`,
		`wom:golden_mokassin`,
		`ef_weapon_extended:gold_knuckles`
	])
})
