onEvent('recipes', e => {

	// Пушечное ядро
	e.remove({id: 'smallships:cannon_ball'})
	e.shaped('smallships:cannon_ball',
		[
			'NNN',
			'NPN',
			'NNN'
		],
		{
			N: '#forge:nuggets/iron',
			P: 'minecraft:gunpowder'
		}
	)
	e.recipes.createMixing('2x smallships:cannon_ball', [
		'8x #forge:nuggets/iron',
		'minecraft:gunpowder'
	]).heated()
	e.recipes.createMixing('2x smallships:cannon_ball', [
		'#forge:ingots/iron',
		'minecraft:gunpowder'
	]).heated()

	// Пушка
	e.remove({id: 'smallships:cannon'})
	e.shaped(
		'smallships:cannon',
		[
			'  R',
			'III',
			' SP'
		],
		{
			R: 'supplementaries:rope',
			I: 'minecraft:iron_block',
			P: '#minecraft:planks',
			S: '#minecraft:wooden_slabs'
		}
	)

	// Парус и прочее, использующее поводок
	e.replaceInput({mod: 'smallships'}, 'minecraft:lead', 'supplementaries:rope')
	
})

onEvent("item.entity_interact", event => {
	if (event.getPlayer().getRidingEntity() != null
		&& event.getPlayer().getRidingEntity().getType().split(':')[0] == 'smallships'
		&& (event.getTarget().getType() == 'minecraft:horse' || event.getTarget().getType() == 'minecraft:mule')) {
		event.getTarget().startRiding(event.getPlayer().getRidingEntity(), true)
		event.cancel()
	}
})
