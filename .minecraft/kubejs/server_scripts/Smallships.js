onEvent('recipes', e => {

	// Пушечное ядро
	e.remove({id: 'smallships:cannon_ball'})
	e.recipes.createMixing('2x smallships:cannon_ball', [
		'4x #forge:nuggets/brass',
		'4x #forge:nuggets/iron',
		'minecraft:gunpowder'
	]).heated()

	// Пушка
	e.remove({id: 'smallships:cannon'})
	e.shaped(
		'smallships:cannon',
		[
			'  R',
			'IBI',
			' SP'
		],
		{
			R: 'supplementaries:rope',
			B: 'create:brass_block',
			I: 'minecraft:iron_block',
			P: '#minecraft:planks',
			S: '#minecraft:wooden_slabs'
		}
	)
	
})