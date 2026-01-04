onEvent('block.break', event => {
	////////////////// Портал в Ад //////////////////
	if (event.getBlock().getId() == 'warden_and_sculk:reinforced_deepslate'
		&& event.getLevel().getGameRules().getBoolean('disablePortalNether')) {

		event.server.runCommandSilent('effect give @a minecraft:nausea 10');
		event.server.tell('Мир дрогнул, кажется произошло неизбежное...');

		event.getLevel().getGameRules().set('disablePortalNether', false)
		event.getLevel().getPlayers().forEach( player => {
			player.stages.add('unlock_portal_nether')
		})
	}
})

onEvent('entity.death', event => {
	////////////////// Портал в Край //////////////////
	if (event.getEntity().getType() == 'bosses_of_mass_destruction:gauntlet' && event.getLevel().getGameRules().getBoolean('disablePortalEnd')) {
		event.server.runCommandSilent('effect give @a minecraft:nausea 10');
		event.server.tell('Мир дрогнул, кажется произошло неизбежное...');

		event.getLevel().getGameRules().set('disablePortalEnd', false)
		event.getLevel().getPlayers().forEach( player => {
			player.stages.add('unlock_portal_end')
		})
	}
})
