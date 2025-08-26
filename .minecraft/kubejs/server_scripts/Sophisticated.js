onEvent('recipes', e => {
	/////////////// Улучшение "Бак" ///////////////
	e.remove({ output:'sophisticatedbackpacks:tank_upgrade' })
	e.shaped('sophisticatedbackpacks:tank_upgrade', [
		'TTT',
		'TXT',
		'TTT'], {
		T: 'create:fluid_tank',
		X: 'sophisticatedbackpacks:upgrade_base'
	})
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