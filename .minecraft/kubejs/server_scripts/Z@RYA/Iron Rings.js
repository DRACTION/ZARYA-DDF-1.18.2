onEvent('recipes', e => {
	//////////////// Железные кольца ////////////////
	//1 железный стержень = 4 кольца (стержень = полслитка, поэтому больше 4 колец будет дюпом)
	e.shapeless('4x kubejs:iron_ring', '#forge:rods/iron')
		.id('zarya:shapeless/iron_ring')

	//1 железный стержень = 4 кольца (механическая пила)
	e.recipes.createCutting('4x kubejs:iron_ring', '#forge:rods/iron')
		.id('zarya:cutting/iron_ring')

	//////////////// Кольчужное полотно ////////////////
	//4 кольца = 1 кольчужное полотно
	e.shaped('kubejs:chainmail_fabric', [
		'RR',
		'RR'
	], {
		R: 'kubejs:iron_ring'
	}).id('zarya:shaped/chainmail_fabric')

	//4 кольца = 1 кольчужное полотно (механический пресс)
	e.recipes.createCompacting('kubejs:chainmail_fabric', ['4x kubejs:iron_ring'])
		.id('zarya:compacting/chainmail_fabric')

	//////////////// Цепь ////////////////
	//3 кольца = 1 цепь (вместо ванильного рецепта из кусочков и слитка)
	e.remove({ id: 'minecraft:chain' })
	e.shaped('minecraft:chain', [
		'R',
		'R',
		'R'
	], {
		R: 'kubejs:iron_ring'
	}).id('zarya:shaped/chain')

	//////////////// Декоративная цепь ////////////////
	//6 колец = 2 декоративные цепи (по 3 кольца, как у обычной цепи; было 2 слитка и 4 кусочка за 4 цепи)
	e.remove({ id: 'decorative_blocks:chain' })
	e.shaped('2x decorative_blocks:chain', [
		'RR',
		'RR',
		'RR'
	], {
		R: 'kubejs:iron_ring'
	}).id('zarya:shaped/decorative_chain')

	//////////////// Цепь для транспорта ////////////////
	//3 нитки + 3 кольца = 6 цепей для транспорта (кольца вместо кусочков, количество как в оригинале)
	e.remove({ id: 'littlelogistics:spring' })
	e.shaped('6x littlelogistics:spring', [
		'SRS',
		'RSR'
	], {
		S: '#forge:string',
		R: 'kubejs:iron_ring'
	}).id('zarya:shaped/spring')

	//////////////// Переплавка в кусочки ////////////////
	//1 кольцо = 1 железный кусочек
	e.blasting('minecraft:iron_nugget', 'kubejs:iron_ring').xp(0.1)
		.id('zarya:blasting/iron_ring')
	e.recipes.createMixing('minecraft:iron_nugget', 'kubejs:iron_ring').heated()
		.id('zarya:mixing/iron_ring')

	//1 цепь = 3 железных кусочка (по числу колец)
	e.blasting('3x minecraft:iron_nugget', 'minecraft:chain').xp(0.1)
		.id('zarya:blasting/chain')
	e.recipes.createMixing('3x minecraft:iron_nugget', 'minecraft:chain').heated()
		.id('zarya:mixing/chain')

	//1 декоративная цепь = 3 железных кусочка (по числу колец)
	e.blasting('3x minecraft:iron_nugget', 'decorative_blocks:chain').xp(0.1)
		.id('zarya:blasting/decorative_chain')
	e.recipes.createMixing('3x minecraft:iron_nugget', 'decorative_blocks:chain').heated()
		.id('zarya:mixing/decorative_chain')

	//1 кольчужное полотно = 4 железных кусочка (по числу колец)
	e.blasting('4x minecraft:iron_nugget', 'kubejs:chainmail_fabric').xp(0.1)
		.id('zarya:blasting/chainmail_fabric')
	e.recipes.createMixing('4x minecraft:iron_nugget', 'kubejs:chainmail_fabric').heated()
		.id('zarya:mixing/chainmail_fabric')

	//Кольчужные ботинки = 6 железных кусочков (стоят 8, слиток был бы дюпом; остальная кольчуга плавится в слиток через тег в Create.js)
	e.blasting('6x minecraft:iron_nugget', 'minecraft:chainmail_boots').xp(0.2)
		.id('zarya:blasting/chainmail_boots')
	e.recipes.createMixing('6x minecraft:iron_nugget', 'minecraft:chainmail_boots').heated()
		.id('zarya:mixing/chainmail_boots')
})
