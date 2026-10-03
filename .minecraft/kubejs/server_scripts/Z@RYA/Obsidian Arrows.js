onEvent('item.tags', e => {
	e.add('zarya:obsidian_hammerstones', 'projectvibrantjourneys:rocks')
	e.add('zarya:pressure_flakers', 'minecraft:bone')
	e.add('zarya:pressure_flakers', '#forge:nuggets/iron')
	e.add('zarya:pressure_flakers', '#forge:nuggets/zinc')
})

onEvent('block.tags', e => {
	e.add('zarya:obsidian_flaking_anvils', '#minecraft:base_stone_overworld')
	e.add('zarya:obsidian_flaking_anvils', '#minecraft:base_stone_nether')
	e.add('zarya:obsidian_flaking_anvils', '#forge:cobblestone')
	e.add('zarya:obsidian_flaking_anvils', '#forge:sandstone')
	e.add('zarya:obsidian_flaking_anvils', '#minecraft:anvils')
	e.add('zarya:obsidian_flaking_anvils', [
		'minecraft:obsidian',
		'minecraft:crying_obsidian',
		'minecraft:calcite',
		'minecraft:smooth_stone',
		'minecraft:grindstone'
	])
})

onEvent('recipes', e => {
	e.remove({ id: 'apotheosis:fletching/obsidian_arrow' })

	//////////////// Отщеп ////////////////
	e.recipes.createCompacting('4x kubejs:obsidian_flake', ['minecraft:obsidian', '#zarya:obsidian_hammerstones'])
		.id('zarya:compacting/obsidian_flake')

	e.custom({
		type: 'farmersdelight:cutting',
		ingredients: [{ item: 'minecraft:obsidian' }],
		tool: {
			type: 'farmersdelight:tool_action',
			action: 'pickaxe_dig'
		},
		result: [{ item: 'kubejs:obsidian_flake', count: 4 }]
	}).id('zarya:cutting/obsidian_flake')

	//////////////// Обсидиановый наконечник (автоматизация) ////////////////
	e.recipes.create.mechanical_crafting('kubejs:obsidian_arrowhead', [
		'F',
		'P'
	], {
		F: 'kubejs:obsidian_flake',
		P: '#zarya:pressure_flakers'
	}).id('zarya:mechanical_crafting/obsidian_arrowhead')

	//////////////// Обсидиановая стрела ////////////////
	e.custom({
		type: 'apotheosis:fletching',
		conditions: [{
			type: 'apotheosis:module',
			module: 'village'
		}],
		ingredients: [
			{ item: 'kubejs:obsidian_arrowhead' },
			{ item: 'minecraft:stick' },
			{ item: 'minecraft:feather' }
		],
		result: {
			item: 'apotheosis:obsidian_arrow',
			count: 1
		}
	}).id('zarya:fletching/obsidian_arrow')
})

onEvent('block.right_click', e => {
	//////////////// Обсидиановый наконечник (ручной) ////////////////
	if (e.player.isFake() || e.hand != MAIN_HAND) {return}
	if (!e.block.hasTag('zarya:obsidian_flaking_anvils')) {return}

	let main = e.player.getMainHandItem()
	let off = e.player.getOffHandItem()
	let flake
	let flaker
	if (main.getId() == 'kubejs:obsidian_flake' && off.hasTag('zarya:pressure_flakers')) {
		flake = main
		flaker = off
	} else if (off.getId() == 'kubejs:obsidian_flake' && main.hasTag('zarya:pressure_flakers')) {
		flake = off
		flaker = main
	} else {
		return
	}

	e.player.swingArm(e.hand)
	e.player.addItemCooldown('kubejs:obsidian_flake', 10)
	if (e.canCancel()) {e.cancel()}

	let x = e.block.x + 0.5
	let y = e.block.y + 1
	let z = e.block.z + 0.5

	if (Math.random() < 0.8) {
		e.server.runCommandSilent(`playsound minecraft:block.stone.hit player @a ${x} ${y} ${z} 0.7 0.8`)
		return
	}

	let success = Math.random() < 0.75

	if (!e.player.isCreativeMode()) {
		flake.setCount(flake.getCount() - 1)
		if (success) {
			flaker.setCount(flaker.getCount() - 1)
		}
	}

	if (success) {
		e.player.give('kubejs:obsidian_arrowhead')
		e.server.runCommandSilent(`playsound minecraft:block.amethyst_block.hit player @a ${x} ${y} ${z} 0.8 1.4`)
		e.server.runCommandSilent(`particle minecraft:crit ${x} ${y} ${z} 0.15 0.15 0.15 0.05 8 normal`)
	} else {
		e.server.runCommandSilent(`playsound minecraft:block.glass.break player @a ${x} ${y} ${z} 0.55 1.7`)
		e.server.runCommandSilent(`particle minecraft:poof ${x} ${y} ${z} 0.12 0.12 0.12 0.02 6 normal`)
	}
})
