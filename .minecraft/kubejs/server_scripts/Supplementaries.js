onEvent('item.tags', e => {
	e.add('supplementaries:shulker_blacklist', 'sophisticatedbackpacks:backpack')
})

onEvent('recipes', e => {
	e.replaceInput({id: 'supplementaries:spiky_bomb_2'}, 'chemlib:lead_ingot', '#forge:ingots/brass')
})