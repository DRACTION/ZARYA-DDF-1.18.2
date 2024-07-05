onEvent("item.entity_interact", event => {

	let targetId = event.getTarget().getType()

	if (targetId == 'minecraft:horse'
		|| targetId == 'minecraft:mule'
		|| targetId == 'minecraft:donkey'
		|| targetId == 'minecraft:parrot'
		|| targetId == 'minecraft:wolf'
		|| targetId == 'doggytalents:dog') {

		if (event.getPlayer().getRidingEntity() != null
			&& event.getPlayer().getRidingEntity().getType() == 'astikorcarts:animal_cart') {

			let transport = event.getPlayer().getRidingEntity()

			if (transport.getPassengers().size() >= 2) {
				event.getPlayer().dismountRidingEntity()
			}

			event.getTarget().startRiding(transport, false)
			event.cancel()

		} else if (event.getTarget().getRidingEntity() != null
			&& event.getTarget().getRidingEntity().getType() == 'astikorcarts:animal_cart') {

			event.getTarget().dismountRidingEntity()
			event.cancel()
		}
	}
})
