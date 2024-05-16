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

	let targetId = event.getTarget().getType()

	if (event.getPlayer().getRidingEntity() == null
		&& targetId.split(':')[0] == 'smallships'
		&& !event.getPlayer().minecraftEntity.shiftKeyDown) {
		
		let amountPassengers = event.getTarget().getPassengers().size()

		if (amountPassengers > 1.0
			&& (targetId == 'smallships:cog' && amountPassengers < 5.0
			|| targetId == 'smallships:brigg' && amountPassengers < 11.0
			|| targetId == 'smallships:galley' && amountPassengers < 9.0
			|| targetId == 'smallships:drakker' && amountPassengers < 11.0)) {

			event.getPlayer().startRiding(event.getTarget(), true)
			event.cancel()
			return
		}
	}

	if ((targetId == 'minecraft:horse'
		|| targetId == 'minecraft:mule'
		|| targetId == 'minecraft:donkey'
		|| targetId == 'minecraft:parrot'
		|| targetId == 'minecraft:wolf'
		|| targetId == 'doggytalents:dog')
		&& event.getPlayer().getRidingEntity() != null
		&& event.getPlayer().getRidingEntity().getType().split(':')[0] == 'smallships') {

		let boat = event.getPlayer().getRidingEntity()
		let amountPassengers = boat.getPassengers().size()
		// console.log(boat.getType())
		// console.log(amountPassengers)

		if (boat.getType() == 'smallships:cog' && amountPassengers < 5.0
			|| boat.getType() == 'smallships:brigg' && amountPassengers < 11.0
			|| boat.getType() == 'smallships:galley' && amountPassengers < 9.0
			|| boat.getType() == 'smallships:drakker' && amountPassengers < 11.0) {
			event.getTarget().startRiding(boat, true)
			event.cancel()
		}
	}
})
