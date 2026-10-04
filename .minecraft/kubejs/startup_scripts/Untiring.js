global.zaryaRefillUntiringStamina = (entity) => {
	if (!entity || !entity.isPlayer()) {
		return
	}
	let PlayerMovement = java('tictim.paraglider.capabilities.PlayerMovement')
	let m = PlayerMovement.of(entity.minecraftEntity)
	if (m == null) {
		return
	}
	m.setDepleted(false)
	m.setStamina(m.getDoubleMaxStamina())
	m.setRecoveryDelay(0)
	try {
		m.movementNeedsSync = true
	} catch (ignored) { }
}

onEvent('mob_effect.registry', event => {
	event
		.create('untiring')
		.beneficial()
		.color('#48C5C5')
		.effectTick((entity, lvl) => {
			global.zaryaRefillUntiringStamina(entity)
		})
})

let registerUntiringDrink = (event, id, duration) => {
	event
		.create(id)
		.texture(`zarya:item/${id}`)
		.maxStackSize(16)
		.useAnimation('drink')
		.useDuration(itemstack => 32)
		.food(food => {
			food.hunger(0)
			food.saturation(0)
			food.alwaysEdible()
			food.effect('kubejs:untiring', duration, 0, 1.0)
		})
		.finishUsing((itemstack, level, entity) => {
			if (!entity.minecraftEntity.level.isClientSide) {
				entity.potionEffects.add('kubejs:untiring', duration, 0, false, true)
			}
			if (entity.isPlayer() && entity.isCreativeMode()) {
				return itemstack
			}
			itemstack.count = itemstack.count - 1
			if (itemstack.count <= 0) {
				return Item.of('minecraft:glass_bottle')
			}
			if (entity.isPlayer()) {
				entity.give('minecraft:glass_bottle')
			}
			return itemstack
		})
}

onEvent('item.registry', event => {
	event
		.create('untiring_root')
		.texture('zarya:item/untiring_root')
		.unstackable()
		.food(food => {
			food.hunger(1)
			food.saturation(0.1)
			food.alwaysEdible()
			food.fastToEat()
			food.effect('kubejs:untiring', 40, 0, 1.0)
		})

	registerUntiringDrink(event, 'untiring_brew', 160)
	registerUntiringDrink(event, 'strong_untiring_brew', 400)
	registerUntiringDrink(event, 'long_untiring_brew', 800)
})
