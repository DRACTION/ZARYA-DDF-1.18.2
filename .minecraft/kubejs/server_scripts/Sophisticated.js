onEvent('recipes', e => {
	/////////////// Улучшение "Аккумулятор" ///////////////
	e.remove({ output:'sophisticatedbackpacks:battery_upgrade' })
	e.shaped('sophisticatedbackpacks:battery_upgrade', [
		'GRG',
		'CXC',
		'GWG'], {
		G: '#forge:ingots/gold',
		C: 'createaddition:capacitor',
		R: '#forge:rods/copper',
		W: '#forge:wires/gold',
		X: 'sophisticatedbackpacks:upgrade_base'
	})
})