onEvent("item.entity_interact", event => {

	let targetId = event.getTarget().getType()

	if (targetId == 'minecraft:horse'
		|| targetId == 'minecraft:mule'
		|| targetId == 'minecraft:donkey'
		|| targetId == 'minecraft:parrot'
		|| targetId == 'minecraft:wolf'
		|| targetId == 'doggytalents:dog') {

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
