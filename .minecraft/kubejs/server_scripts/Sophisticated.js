onEvent('recipes', e => {
	e.remove({ output:'sophisticatedbackpacks:battery_upgrade' })
	e.shaped('sophisticatedbackpacks:battery_upgrade', [
		'GAG',
		'AXA',
		'GAG'], {
		G: '#forge:ingots/gold',
		A: 'createaddition:modular_accumulator',
		X: 'sophisticatedbackpacks:upgrade_base'
	})
})