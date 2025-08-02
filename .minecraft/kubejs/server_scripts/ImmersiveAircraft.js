onEvent('recipes', event => {
	///////////// Бойлер /////////////
	event.shaped('immersive_aircraft:boiler', [
		'S',
		'F',
		'G'
	], {
		S: 'create:steam_engine',
		F: 'create:fluid_tank',
		G: 'createlowheated:basic_burner'
	})
	///////////// Квадрокоптер /////////////
	event.replaceInput({id: 'immersive_aircraft:quadrocopter'}, 'minecraft:string', 'farmersdelight:safety_net')
})

onEvent("item.entity_interact", event => {

	if (passengers.includes(event.getTarget().getType()) || ownerIsPlayer(event, event.getTarget())) {

		if (event.getPlayer().getRidingEntity() != null
			&& (event.getPlayer().getRidingEntity().getType() == 'immersive_aircraft:gyrodyne'
			|| event.getPlayer().getRidingEntity().getType() == 'immersive_aircraft:airship'
			|| event.getPlayer().getRidingEntity().getType() == 'immersive_aircraft:cargo_airship')) {

			event.getTarget().startRiding(event.getPlayer().getRidingEntity(), false)
			event.cancel()

		} else if (event.getTarget().getRidingEntity() != null
			&& (event.getTarget().getRidingEntity().getType() == 'immersive_aircraft:gyrodyne'
			|| event.getTarget().getRidingEntity().getType() == 'immersive_aircraft:airship'
			|| event.getTarget().getRidingEntity().getType() == 'immersive_aircraft:cargo_airship')) {

			event.getTarget().dismountRidingEntity()
			event.cancel()
		}
	}
})