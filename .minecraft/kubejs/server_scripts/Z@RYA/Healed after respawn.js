onEvent('player.respawn', e => {
	if(e.causedByDeath()) {
		e.getServer().runCommandSilent(`heal ${e.getPlayer().toString()}`)
	}
})
