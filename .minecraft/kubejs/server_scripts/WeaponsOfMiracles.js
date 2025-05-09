onEvent('recipes', e => {
	///////////////// Посохи /////////////////
	let modifyResult_Staff = (grid, result, idOldWeapon) => {
		let oldWeapon = grid.find(Item.of(idOldWeapon).ignoreNBT());
		let newNbt = oldWeapon.getNbt();
		newNbt.Damage = 0;
		return result.withNBT(newNbt)
	}
	modifyShapedID(e, 'wom:wooden_staff', 'wom:wooden_staff', 1,
		[
			'L S',
			' R ',
			'S L'
		],
		{
			L: '#forge:leather',
			S: '#forge:rods/wooden',
			R: 'supplementaries:rope'
		}
	)

	let template = [
		'  X',
		' S ',
		'X  '
	]
	let materials = {
		S: Item.of('wom:wooden_staff').ignoreNBT()
	}
	materials.X = '#forge:rods/copper'
	modifyShapedID(e, 'wom:stone_staff', 'wom:stone_staff', 1, template, materials)
		.modifyResult((grid, result) => {
			return modifyResult_Staff(grid, result, 'wom:wooden_staff')
		})
	materials.X = '#forge:rods/iron'
	modifyShapedID(e, 'wom:iron_staff', 'wom:iron_staff', 1, template, materials)
		.modifyResult((grid, result) => {
			return modifyResult_Staff(grid, result, 'wom:wooden_staff')
		})
	materials.X = '#forge:rods/gold'
	modifyShapedID(e, 'wom:golden_staff', 'wom:golden_staff', 1, template, materials)
		.modifyResult((grid, result) => {
			return modifyResult_Staff(grid, result, 'wom:wooden_staff')
		})
	materials.X = '#forge:plates/diamond'
	modifyShapedID(e, 'wom:diamond_staff', 'wom:diamond_staff', 1, template, materials)
		.modifyResult((grid, result) => {
			return modifyResult_Staff(grid, result, 'wom:wooden_staff')
		})
	e.replaceInput({id: 'wom:netherite_staff'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
	///////////////// Большой топор /////////////////
	e.remove({id:'wom:iron_greataxe'})
	e.smithing('wom:iron_greataxe', Item.of('minecraft:iron_axe').ignoreNBT(), '#forge:plates/iron')
	e.remove({id:'wom:golden_greataxe'})
	e.smithing('wom:golden_greataxe', Item.of('minecraft:golden_axe').ignoreNBT(), '#forge:plates/gold')
	e.remove({id:'wom:diamond_greataxe'})
	e.smithing('wom:diamond_greataxe', Item.of('minecraft:diamond_axe').ignoreNBT(), '#forge:plates/diamond')
	e.replaceInput({id: 'wom:netherite_greataxe'}, 'minecraft:netherite_ingot', '#forge:plates/netherite')
	e.smithing('wom:netherite_greataxe', Item.of('minecraft:netherite_axe').ignoreNBT(), '#forge:plates/netherite')
})
