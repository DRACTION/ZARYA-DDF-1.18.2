onEvent('block.break', event => {
	if (event.getBlock().getId() == 'warden_and_sculk:reinforced_deepslate'
		&& event.getLevel().getGameRules().getBoolean('disablePortal')) {

		event.server.runCommandSilent('effect give @a minecraft:nausea 10');
		event.server.tell('Мир дрогнул, кажется произошло неизбежное...');

		event.getLevel().getGameRules().set('disablePortal', false)
		event.getLevel().getPlayers().forEach( player => {
			player.stages.add('unlock_portal')
		})
	}
})
