onEvent('item.registry', event => {
	//////////////// Примитивное огниво ////////////////
	event
		.create('firestarter')
		.useAnimation('bow')
		.maxDamage(4)
		.unstackable()
		.texture('zarya:item/firestarter')
		.use((level, player, hand) => { return true })
		.useDuration(itemstack => { return 20 })
		.finishUsing((itemstack, level, entity) => {
			let hit = entity.rayTrace(3)
			let block = hit.block
			if (block !== null && block.properties !== undefined && block.properties.lit === false) {

				entity.addItemCooldown('kubejs:firestarter', 20)

				let entityData = block.getEntityData()
				block.set(block.id, Object.assign({}, block.properties, { lit: true }))
				block.setEntityData(entityData)

				entity.runCommandSilent(
					`playsound minecraft:item.flintandsteel.use master @a ${block.x} ${block.y} ${block.z} 1`)

				itemstack.getItemStack().setDamageValue(itemstack.getItemStack().getDamageValue() + 1)
				return itemstack.getItemStack().getDamageValue() >= itemstack.getItemStack().getMaxDamage() ? 'minecraft:air' : itemstack
			}
			return itemstack
		})
	//////////////// Кремниевая пила ////////////////
	event
		.create('flint_saw', 'axe')
		.tier('wood')
		.attackDamageBaseline(1.0)
		.unstackable()
		.texture('zarya:item/flint_saw')
		.modifyTier(tier => {
			tier.attackDamageBonus = 0.0
			tier.level = 0.1
			tier.repairIngredient = 'minecraft:flint'
		})
	//////////////// Медная пила ////////////////
	event
		.create('copper_saw', 'axe')
		.tier('stone')
		.attackDamageBaseline(1.0)
		.unstackable()
		.texture('zarya:item/copper_saw')
		.modifyTier(tier => {
			tier.attackDamageBonus = 0.0
			tier.level = 0.1
			tier.repairIngredient = '#forge:plates/copper'
		})
	//////////////// Железная пила ////////////////
	event
		.create('iron_saw', 'axe')
		.tier('iron')
		.attackDamageBaseline(1.0)
		.unstackable()
		.texture('zarya:item/iron_saw')
		.modifyTier(tier => {
			tier.attackDamageBonus = 0.0
			tier.level = 0.1
			tier.repairIngredient = '#forge:plates/iron'
		})
	//////////////// Кремниевые запчасти ////////////////
	event
		.create('flint_tool_blank')
		.texture('zarya:item/flint_tool_blank')

	event
		.create('flint_axe_head')
		.texture('zarya:item/flint_axe_head')

	event
		.create('flint_pickaxe_head')
		.texture('zarya:item/flint_pickaxe_head')

	event
		.create('flint_shovel_head')
		.texture('zarya:item/flint_shovel_head')
})

onEvent('item.modification', event => {

	//////////////// Медные ////////////////
	event.modify('minecraft:stone_sword', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:copper_ingot'})
	})
	event.modify('minecraft:stone_pickaxe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:copper_ingot'})
	})
	event.modify('minecraft:stone_axe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:copper_ingot'})
	})
	event.modify('minecraft:stone_shovel', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:copper_ingot'})
	})
	event.modify('minecraft:stone_hoe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:copper_ingot'})
	})
	//////////////// Кремневые ////////////////
	event.modify('minecraft:wooden_sword', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
	event.modify('minecraft:wooden_pickaxe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
	event.modify('minecraft:wooden_axe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
	event.modify('minecraft:wooden_shovel', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
	event.modify('minecraft:wooden_hoe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
})
