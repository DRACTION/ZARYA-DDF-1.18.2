onEvent('item.tags', e => {
	e.add('supplementaries:shulker_blacklist', 'sophisticatedbackpacks:backpack')
})

onEvent('recipes', e => {
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