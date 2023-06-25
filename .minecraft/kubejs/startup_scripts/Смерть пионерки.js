onEvent('potion.registry', event => {
	
	event
		.create('strong_death_pioneer')
		.effect('minecraft:nausea', 14400, 9) // 12 min, 10 lvl
		.effect('minecraft:wither', 200, 1) // 10 sec, 2 lvl
		.effect('minecraft:blindness', 600) // 30 sec, 1 lvl
		.effect('minecraft:resistance', 9600, 2) // 8 min, 2 lvl
		.effect('minecraft:speed', 6000, 5) // 5 min, 6 lvl
		.effect('minecraft:strength', 7200, 1) // 6 min, 2 lvl

	event
		.create('death_pioneer')
		.effect('minecraft:nausea', 9600, 9) // 8 min, 10 lvl
		.effect('minecraft:resistance', 4800) // 4 min, 1 lvl
		.effect('minecraft:speed', 3600, 1) // 3 min, 2 lvl
		.effect('minecraft:strength', 2400) // 2 min, 1 lvl
		
	event
		.create('first_unstable_death_pioneer')
		.effect('minecraft:nausea', 1200) // 1 min, 1 lvl
		.effect('minecraft:poison', 600, 1) // 30 sec, 2 lvl
		
	event
		.create('second_unstable_death_pioneer')
		.effect('minecraft:nausea', 6000, 2) // 5 min, 3 lvl
		.effect('minecraft:poison', 1200) // 1 min, 1 lvl
		
	event
		.create('third_unstable_death_pioneer')
		.effect('minecraft:nausea', 6000, 2) // 5 min, 3 lvl
		.effect('minecraft:poison', 1200) // 1 min, 1 lvl
		.effect('minecraft:mining_fatigue', 2400, 2) // 2 min, 3 lvl

})

onEvent('morejs.potion_brewing.register', (event) => {
	
	event.addPotionBrewing(
		'farmersdelight:organic_compost',
		'minecraft:strong_poison',
		'kubejs:first_unstable_death_pioneer'
	);

	event.addPotionBrewing(
		'minecraft:poisonous_potato',
		'kubejs:first_unstable_death_pioneer',
		'kubejs:second_unstable_death_pioneer'
	);

	event.addPotionBrewing(
		'farmersrespite:dandelion_tea',
		'kubejs:second_unstable_death_pioneer',
		'kubejs:third_unstable_death_pioneer'
	);

	event.addPotionBrewing(
		'farmersrespite:nether_wart_sourdough',
		'kubejs:third_unstable_death_pioneer',
		'kubejs:death_pioneer'
	);

	event.addPotionBrewing(
		'nethersdelight:warped_moldy_meat',
		'kubejs:death_pioneer',
		'kubejs:strong_death_pioneer'
	);

})