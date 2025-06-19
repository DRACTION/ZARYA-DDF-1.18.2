onEvent('server.load', event => {
	if (event.server.persistentData.contains('za_firstload')) { return }

	event.server.persistentData.putBoolean('za_firstload', true)

	event.server.runCommandSilent('gamerule companion:alwaysTeleportHorses false')
	event.server.runCommandSilent('gamerule disableElytraMovementCheck true')
	event.server.runCommandSilent('gamerule petFriendlyFire false')
	event.server.runCommandSilent('gamerule strongerMobsMoreEXP true')

	event.server.runCommandSilent('difficulty hard')
	// console.warn('Были изменены игровые правила, рекомендуется перезапустить мир.')
})