onEvent("item.entity_interact", event => {

	if (passengers.includes(event.getTarget().getType()) || ownerIsPlayer(event, event.getTarget())) {

		if (event.getPlayer().getRidingEntity() != null
			&& event.getPlayer().getRidingEntity().getType() == 'minecraft:boat') {

			event.getTarget().startRiding(event.getPlayer().getRidingEntity(), false)
			event.cancel()

		} else if (event.getTarget().getRidingEntity() != null
			&& event.getTarget().getRidingEntity().getType() == 'minecraft:boat') {

			event.getTarget().dismountRidingEntity()
			event.cancel()
		}
	}
})
