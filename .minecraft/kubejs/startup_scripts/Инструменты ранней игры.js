onEvent('item.registry', event => {
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

	// Flint tools parts
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

	// Медные
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

	// Кремневые
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
