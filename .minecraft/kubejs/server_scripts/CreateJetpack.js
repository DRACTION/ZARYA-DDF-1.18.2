onEvent('recipes', e => {

	let mat = [
		'   PSP   ',
		'  PESEP  ',
		' PMESEMP ',
		'PCMEBEMCP',
		'PLPGIGPLP',
		'PCTP PTCP'
	]
	let ingr = {
		P: '#forge:plates/brass',
		S: 'create:shaft',
		M: 'create:precision_mechanism',
		E: 'createaddition:gold_spool',
		C: 'create:smart_chute',
		B: 'create:copper_backtank',
		L: 'create:propeller',
		G: 'create:sequenced_gearshift',
		I: 'create:linked_controller',
		T: 'create:electron_tube'
	}
	e.remove({id:'create_jetpack:jetpack'})
	e.recipes.create.mechanical_crafting('create_jetpack:jetpack', mat, ingr).id('zarya:create_jetpack')

	ingr.B = 'create:netherite_backtank'
	e.remove({id:'create_jetpack:netherite_jetpack'})
	e.recipes.create.mechanical_crafting('create_jetpack:netherite_jetpack', mat, ingr).id('zarya:create_netherite_jetpack')

})