onEvent('recipes', event => {
	//////////////// Примитивное огниво ////////////////
	event.shaped('kubejs:firestarter', [
		'SP',
		'P '], {
		S: 'farmersdelight:straw',
		P: 'minecraft:stick'})
	//////////////// Кремниевая пила ////////////////
	event.shapeless('kubejs:flint_saw', ['2x minecraft:flint'])
		.id('kubejs:shapeless/kubejs/flint_saw')
	//////////////// Медная пила ////////////////
	event.shaped('kubejs:copper_saw', [
		' YX',
		'RX ',
		'SS '],
		{
			X: '#forge:plates/copper',
			Y: '#forge:rods/copper',
			R: 'supplementaries:rope',
			S: '#forge:rods/wooden'
		}
	).id('kubejs:shaped/kubejs/copper_saw')
	//////////////// Железная пила ////////////////
	event.shaped('kubejs:iron_saw', [
		' YX',
		'RX ',
		'SS '],
		{
			X: '#forge:plates/iron',
			Y: '#forge:rods/iron',
			R: 'supplementaries:rope',
			S: '#forge:rods/wooden'
		}
	).id('kubejs:shaped/kubejs/iron_saw')

	// Cut wood with handsaw
		woods.forEach(name => {
			modifyShapelessID(
				event,
				`minecraft:${name}_planks`, //result
				`minecraft:${name}_planks`, //ID
				2, //count
				[Ingredient.of('#zarya:saws'), `#minecraft:${name}_logs`]// ingredients
			).damageIngredient('#zarya:saws')

			event.remove({ id: `projectvibrantjourneys:${name}_planks`, type: 'minecraft:crafting_shapeless' })
		})

		endWoodNames.forEach(name => {
			modifyShapelessID(
				event,
				`minecraft:${name}_planks`, //result
				`minecraft:${name}_planks`, //ID
				2, //count
				[Ingredient.of('#zarya:saws'), `#${name}_stems`]// ingredients
			).damageIngredient('#zarya:saws')
		})

		event.remove({ id: 'minecraft:stick', type: 'minecraft:crafting_shaped' })
		event.shapeless('2x minecraft:stick', [Ingredient.of('#zarya:saws'), '#minecraft:planks'])
			.id(`zarya:shapeless/minecraft/stick`)
			.damageIngredient('#zarya:saws')

		event.shapeless('2x minecraft:stick', ['#zarya:hollow_logs', Ingredient.of('#zarya:saws')])
			.id('zarya:hollow_log_2_sticks')
			.damageIngredient('#zarya:saws')

	// Blanks, Heads and Tools
		let materialNames = [
			{curr: 'flint', old: 'wooden'}
		]

		let toolNames = [
			{tool: 'axe',		  template:['BX']},
			{tool: 'pickaxe',	template:['XB',' X']},
			{tool: 'shovel',	template:['X','B']}
		]

		materialNames.forEach(material => {
			event.shapeless(
				`kubejs:${material.curr}_tool_blank`,
				[`2x minecraft:${material.curr}`, 'farmersdelight:straw']
			).id(`kubejs:shapeless/kubejs/${material.curr}_tool_blank`)

			toolNames.forEach(sootv => {
				event.shaped(
					`kubejs:${material.curr}_${sootv.tool}_head`,
					sootv.template,
					{B: `kubejs:${material.curr}_tool_blank`, X: `minecraft:${material.curr}`}
				).id(`kubejs:shaped/kubejs/${material.curr}_${sootv.tool}_head`)

				event.shaped(
					`minecraft:${material.old}_${sootv.tool}`,
					['HS','SR'],
					{
						H: `kubejs:${material.curr}_${sootv.tool}_head`,
						S: '#forge:rods/wooden',
						R: 'supplementaries:rope'
						// R: 'minecraft:string'
					}
				).id(`kubejs:shaped/minecraft/${material.curr}_${sootv.tool}`)
			})
		})
})

onEvent('item.tags', e => {

	e.add('zarya:saws', [
		'kubejs:copper_saw',
		'kubejs:iron_saw',
		'kubejs:flint_saw'
	])

	e.add('valhelsia_structures:axe_crafting_blacklisted', 'kubejs:flint_saw')
	
	woods.forEach(name =>{
		e.removeAllTagsFrom(`projectvibrantjourneys:${name}_hollow_log`)
		e.add('minecraft:logs_that_burn', `projectvibrantjourneys:${name}_hollow_log`)
		e.add('minecraft:logs', `projectvibrantjourneys:${name}_hollow_log`)
		e.add('zarya:hollow_logs', `projectvibrantjourneys:${name}_hollow_log`)
	})

	e.add('supplementaries:fire_sources', 'kubejs:firestarter')
})

onEvent('block.break', event => {
	if (event.player.isPlayer()
		&& !event.player.isCreativeMode()
		&& event.player.getMainHandItem().getId() == 'kubejs:flint_saw') {

		var targetBlock = event.getBlock()

		if (targetBlock.material.minecraftMaterial.solid) {
			// event.player.tell(targetBlock.getBlockState())
			event.player.setMainHandItem('minecraft:air')
			if (event.canCancel()) {
				event.cancel()
			}
		}
	}	
})
