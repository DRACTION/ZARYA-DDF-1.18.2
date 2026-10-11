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

	//////////////// Доски и палки пилой ////////////////
	// Доски из бревна в верстаке убраны: только распил обтёсанного бревна
	woods.forEach(name => {
		event.remove({ id: `minecraft:${name}_planks` })
		event.remove({ id: `projectvibrantjourneys:${name}_planks`, type: 'minecraft:crafting_shapeless' })
	})

	endWoodNames.forEach(name => {
		event.remove({ id: `minecraft:${name}_planks` })
	})

	// Палки из досок в верстаке убраны: только распил поставленной доски
	event.remove({ id: 'minecraft:stick', type: 'minecraft:crafting_shaped' })

	// 1 пустотелое бревно = 2 палки (пила в верстаке; блок редкий)
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

	e.add('valhelsia_structures:axe_crafting_blacklisted', '#zarya:saws')
	
	woods.forEach(name =>{
		e.removeAllTagsFrom(`projectvibrantjourneys:${name}_hollow_log`)
		e.add('minecraft:logs_that_burn', `projectvibrantjourneys:${name}_hollow_log`)
		e.add('minecraft:logs', `projectvibrantjourneys:${name}_hollow_log`)
		e.add('zarya:hollow_logs', `projectvibrantjourneys:${name}_hollow_log`)
	})

	e.add('supplementaries:fire_sources', 'kubejs:firestarter')
})

let za_Saw = {
	// Выход ручной пилы. Механическая пила Create: 6 досок из обтёсанного бревна, 4 палки из доски (+10% ещё 5)
	yield: {
		'kubejs:flint_saw':  { planks: 2, sticks: 2 },
		'kubejs:copper_saw': { planks: 3, sticks: 2 },
		'kubejs:iron_saw':   { planks: 4, sticks: 3 }
	},

	neighborOffsets: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],

	targets: null,
	targetIds: [],

	addTarget: ((id, result, kind, neighborTags) => {
		za_Saw.targets[id] = { result: result, kind: kind, neighborTags: neighborTags }
		za_Saw.targetIds.push(id)
	}),

	initTargets: (() => {
		if (za_Saw.targets != null) {return}
		za_Saw.targets = {}
		woods.forEach(name => {
			['log', 'wood'].forEach(kind => {
				za_Saw.addTarget(`minecraft:stripped_${name}_${kind}`, `minecraft:${name}_planks`, 'planks', ['minecraft:logs'])
			})
		})
		endWoodNames.forEach(name => {
			['stem', 'hyphae'].forEach(kind => {
				za_Saw.addTarget(`minecraft:stripped_${name}_${kind}`, `minecraft:${name}_planks`, 'planks', ['minecraft:logs'])
			})
		})
		allWoods.forEach(name => {
			za_Saw.addTarget(`minecraft:${name}_planks`, 'minecraft:stick', 'sticks', ['minecraft:logs', 'minecraft:planks'])
		})
	}),

	// null, если блок не пилится этой пилой или рядом есть бревно (у доски — ещё и доска)
	result: ((block, toolId) => {
		za_Saw.initTargets()
		let target = za_Saw.targets[block.getId()]
		if (!target) {return null}
		let amounts = za_Saw.yield[toolId]
		if (!amounts) {return null}
		for (let i = 0; i < za_Saw.neighborOffsets.length; i++) {
			let o = za_Saw.neighborOffsets[i]
			let neighbor = block.offset(o[0], o[1], o[2])
			for (let t = 0; t < target.neighborTags.length; t++) {
				if (neighbor.hasTag(target.neighborTags[t])) {return null}
			}
		}
		return { result: target.result, count: amounts[target.kind] }
	})
}

onEvent('lootjs', event => {
	//////////////// Распил пилой ////////////////
	// Обтёсанное бревно без соседних брёвен: кремниевая пила = 2 доски, медная = 3, железная = 4
	// Доска без соседних брёвен и досок: кремниевая = 2 палки, медная = 2, железная = 3
	za_Saw.initTargets()
	event
		.addBlockLootModifier(za_Saw.targetIds)
		.matchMainHand('#zarya:saws')
		.apply(ctx => {
			let tool = ctx.getTool()
			if (tool == null || tool.isEmpty()) return
			let block = ctx.getDestroyedBlock()
			if (block == null) return
			let saw = za_Saw.result(block, tool.getId())
			if (saw == null) return
			ctx.removeLoot(block.getId())
			ctx.addLoot(Item.of(saw.result, saw.count))
		})
})

onEvent('block.break', event => {
	if (event.player.isPlayer()
		&& !event.player.isCreativeMode()
		&& event.player.getMainHandItem().getId() == 'kubejs:flint_saw') {

		var targetBlock = event.getBlock()

		// Успешный распил не ломает кремниевую пилу и не отменяет разрушение
		if (za_Saw.result(targetBlock, 'kubejs:flint_saw') != null) {
			return
		}

		if (targetBlock.material.minecraftMaterial.solid) {
			event.player.tell('§cЭто так не работает...');
			event.player.setMainHandItem('minecraft:air')
			if (event.canCancel()) {
				event.cancel()
			}
		}
	}	
})
