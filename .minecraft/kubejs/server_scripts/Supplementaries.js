onEvent('item.tags', e => {
	e.add('supplementaries:shulker_blacklist', 'sophisticatedbackpacks:backpack')
})

onEvent('recipes', e => {
	///////////// Половик /////////////
	e.replaceInput({id: 'supplementaries:doormat'}, 'supplementaries:flax', 'farmersdelight:canvas')
	///////////// Большой мешок /////////////
	e.replaceInput({id: 'supplementaries:sack'}, 'supplementaries:flax', 'farmersdelight:canvas')
	e.replaceInput({id: 'supplementaries:sack'}, 'minecraft:string', '#forge:rope')
	///////////// Бомба-лимонка /////////////
	e.shaped('4x supplementaries:bomb_spiky',
		[
			"ZIS",
			"ITI",
			"ZIZ"
		],
		{
			S: '#forge:string',
			T: 'minecraft:tnt',
			Z: '#forge:nuggets/zinc',
			I: '#zarya:copper_iron'
		}
	)
})