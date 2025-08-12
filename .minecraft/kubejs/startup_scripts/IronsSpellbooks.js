onEvent('worldgen.add', event => {
	const { anchors } = event

	event.addOre(ore => {
		ore.id = 'zarya:add_arcane_debris'
		ore.biomes = {
			not: [
				'^nether',
				'^the_end'
			]
		}
		ore.addTarget(['#minecraft:stone_ore_replaceables', '#minecraft:deepslate_ore_replaceables'],
			'irons_spellbooks:arcane_debris')
		ore.count(0)
			.squared()
			.triangleHeight(			// generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
				anchors.aboveBottom(4),	// minY = -64 + 4 = -60
				anchors.absolute(-32) 	// the upper bound, meanwhile is set to be just exactly at Y = -32
			)
		ore.size = 3
		ore.noSurface = 1
		ore.chance = 6
	})
})