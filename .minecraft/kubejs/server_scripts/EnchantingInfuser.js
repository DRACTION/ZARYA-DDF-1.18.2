onEvent('recipes', e => {
	//////////// Нагнетатель чар ////////////
	modifyShapedID(e, 'enchantinginfuser:enchanting_infuser', 'enchantinginfuser:enchanting_infuser', 1, [
		'CPC',
		'AMA',
		'CTC'], {
		C: 'minecraft:crying_obsidian',
		P: 'create_enchantment_industry:printer',
		A: 'minecraft:amethyst_shard',
		M: 'create:precision_mechanism',
		T: 'minecraft:enchanting_table'
	})
	//////////// Улучшенный нагнетатель чар ////////////
	e.remove({ id: "enchantinginfuser:advanced_enchanting_infuser" })
	e.recipes.create.mechanical_crafting('enchantinginfuser:advanced_enchanting_infuser', [
		' OGO ',
		'ONHNO',
		'ORHRO',
		'OMDMO',
		' OIO '], {
		O: 'minecraft:crying_obsidian',
		I: 'enchantinginfuser:enchanting_infuser',
		N: 'minecraft:netherite_ingot',
		M: 'create:precision_mechanism',
		H: 'create_enchantment_industry:hyper_experience_bottle',
		D: 'create_enchantment_industry:disenchanter',
		R: 'create_enchantment_industry:experience_rotor',
		G: Item.of('create_enchantment_industry:enchanting_guide').ignoreNBT()
	})
	
})
