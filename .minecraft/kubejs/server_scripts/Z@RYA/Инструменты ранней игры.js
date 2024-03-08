onEvent('recipes', event => {

	event.shapeless('kubejs:flint_saw', ['2x minecraft:flint'])
		.id('kubejs:shapeless/kubejs/flint_saw')

	// Cut wood with handsaw
		woods.forEach(name => {
			modifyShapelesID(
				event,
				`minecraft:${name}_planks`, //result
				`minecraft:${name}_planks`, //ID
				2, //count
				[Item.of('kubejs:flint_saw').ignoreNBT(), `#minecraft:${name}_logs`]// ingredients
			).damageIngredient('kubejs:flint_saw')

			event.remove({ id: `projectvibrantjourneys:${name}_planks`, type: 'minecraft:crafting_shapeless' })
		})

		endWoodNames.forEach(name => {
			modifyShapelesID(
				event,
				`minecraft:${name}_planks`, //result
				`minecraft:${name}_planks`, //ID
				2, //count
				[Item.of('kubejs:flint_saw').ignoreNBT(), `#${name}_stems`]// ingredients
			).damageIngredient('kubejs:flint_saw')
		})

		event.remove({ id: 'minecraft:stick', type: 'minecraft:crafting_shaped' })
		event.shapeless('2x minecraft:stick', [Item.of('kubejs:flint_saw').ignoreNBT(),'#minecraft:planks'])
			.id(`zarya:shapeless/minecraft/stick`)
			.damageIngredient('kubejs:flint_saw')

		event.shapeless('2x minecraft:stick', ['#zarya:hollow_logs', Item.of('kubejs:flint_saw').ignoreNBT()])
			.id('zarya:hollow_log_2_sticks')
			.damageIngredient('kubejs:flint_saw')

	// Blanks, Heads and Tools
		let materialNames = [
			{curr: 'flint', old: 'stone'},
			{curr: 'bone',  old: 'wooden'}
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
				).id(`kubejs:shapeless/kubejs/${material.curr}_${sootv.tool}_head`)

				event.shaped(
					`minecraft:${material.old}_${sootv.tool}`,
					['HS','SR'],
					{
						H: `kubejs:${material.curr}_${sootv.tool}_head`,
						S: '#forge:rods/wooden',
						R: 'supplementaries:rope'
						// R: 'minecraft:string'
					}
				).id(`kubejs:shapeless/minecraft/${material.curr}_${sootv.tool}`)
			})
		})
})

onEvent('item.tags', e => {
	e.add('valhelsia_structures:axe_crafting_blacklisted', 'kubejs:flint_saw')
  	
  	woods.forEach(name =>{
  		e.removeAllTagsFrom(`projectvibrantjourneys:${name}_hollow_log`)
  		e.add('minecraft:logs_that_burn', `projectvibrantjourneys:${name}_hollow_log`)
  		e.add('minecraft:logs', `projectvibrantjourneys:${name}_hollow_log`)
  		e.add('zarya:hollow_logs', `projectvibrantjourneys:${name}_hollow_log`)
  	})
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
