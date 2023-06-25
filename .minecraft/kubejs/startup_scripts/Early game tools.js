onEvent('item.registry', event => {
	event
		.create('flint_saw', 'axe')
		.tier('wood')
		.attackDamageBaseline(1.0)
		.unstackable()
		.displayName('Flint Saw')
		.texture('zarya:item/flint_saw')
		.parentModel('minecraft:item/generated')
		.modifyTier(tier => {
			tier.attackDamageBonus = 0.0
			tier.level = 0.1
			tier.repairIngredient = 'minecraft:flint'
		})

	// Flint tools parts
	event
		.create('flint_tool_blank')
		.displayName('Flint Tool Blank')
		.texture('zarya:item/flint_tool_blank')
		.parentModel('minecraft:item/generated')

	event
		.create('flint_axe_head')
		.displayName('Flint Axe Head')
		.texture('zarya:item/flint_axe_head')
		.parentModel('minecraft:item/generated')

	event
		.create('flint_pickaxe_head')
		.displayName('Flint Pickaxe Head')
		.texture('zarya:item/flint_pickaxe_head')
		.parentModel('minecraft:item/generated')

	event
		.create('flint_shovel_head')
		.displayName('Flint Shovel Head')
		.texture('zarya:item/flint_shovel_head')
		.parentModel('minecraft:item/generated')

	// Bone tools parts
	event
		.create('bone_tool_blank')
		.displayName('Bone Tool Blank')
		.texture('zarya:item/bone_tool_blank')
		.parentModel('minecraft:item/generated')

	event
		.create('bone_axe_head')
		.displayName('Bone Axe Head')
		.texture('zarya:item/bone_axe_head')
		.parentModel('minecraft:item/generated')

	event
		.create('bone_pickaxe_head')
		.displayName('Bone Pickaxe Head')
		.texture('zarya:item/bone_pickaxe_head')
		.parentModel('minecraft:item/generated')

	event
		.create('bone_shovel_head')
		.displayName('Bone Shovel Head')
		.texture('zarya:item/bone_shovel_head')
		.parentModel('minecraft:item/generated')

})

onEvent('item.modification', event => {

	// Кремневые
	event.modify('minecraft:stone_sword', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
	event.modify('minecraft:stone_pickaxe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
	event.modify('minecraft:stone_axe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
	event.modify('minecraft:stone_shovel', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})
	event.modify('minecraft:stone_hoe', item => {
		item.setTier(tier => {tier.repairIngredient = 'minecraft:flint'})
	})

	// Костяные
	event.modify('minecraft:wooden_sword', item => {
		item.setTier(tier => {tier.repairIngredient = '#forge:bones'})
	})
	event.modify('minecraft:wooden_pickaxe', item => {
		item.setTier(tier => {tier.repairIngredient = '#forge:bones'})
	})
	event.modify('minecraft:wooden_axe', item => {
		item.setTier(tier => {tier.repairIngredient = '#forge:bones'})
	})
	event.modify('minecraft:wooden_shovel', item => {
		item.setTier(tier => {tier.repairIngredient = '#forge:bones'})
	})
	event.modify('minecraft:wooden_hoe', item => {
		item.setTier(tier => {tier.repairIngredient = '#forge:bones'})
	})
})