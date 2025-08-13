onEvent('recipes', e => {
	//////////// Нагнетатель чар ////////////
	e.remove({ id: "enchantinginfuser:enchanting_infuser" })
	e.recipes.create.mechanical_crafting('enchantinginfuser:enchanting_infuser', [
		' OGO ',
		'OAFAO',
		'CMLMC',
		'OASAO',
		' ORO '], {
		A: 'irons_spellbooks:arcane_rune',
		O: 'minecraft:crying_obsidian',
		R: 'apotheosis:rare_material',
		C: 'minecraft:amethyst_cluster',
		M: 'create:precision_mechanism',
		F: 'apotheosis:lucky_foot',
		L: 'apotheosis:library',
		S: 'apotheosis:sightshelf',
		G: 'irons_spellbooks:magic_cloth'
	})
	//////////// Улучшенный нагнетатель чар ////////////
	e.remove({ id: "enchantinginfuser:advanced_enchanting_infuser" })
	e.recipes.create.mechanical_crafting('enchantinginfuser:advanced_enchanting_infuser', [
		' EGE ',
		'ONLNO',
		'ORHRO',
		'OMDMO',
		' AIA '], {
		A: 'irons_spellbooks:arcane_salvage',
		O: 'minecraft:crying_obsidian',
		I: 'enchantinginfuser:enchanting_infuser',
		N: 'minecraft:netherite_ingot',
		M: 'create:precision_mechanism',
		H: 'irons_spellbooks:cooldown_upgrade_orb',
		D: 'create_enchantment_industry:disenchanter',
		R: 'create_enchantment_industry:experience_rotor',
		E: 'apotheosis:epic_material',
		L: 'apotheosis:ender_library',
		G: Item.of('create_enchantment_industry:enchanting_guide').ignoreNBT()
	})
})
