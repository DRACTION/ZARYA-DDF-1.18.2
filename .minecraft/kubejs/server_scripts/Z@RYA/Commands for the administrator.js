
onEvent('command.registry', event => {
	const { commands: Commands, arguments: Arguments} = event;
	event.register(Commands.literal("za_timestop")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {

			ctx.source.entity.asKJS().runCommandSilent('gamerule doDaylightCycle false')
			ctx.source.entity.asKJS().runCommandSilent('gamerule doMobSpawning false')
			ctx.source.entity.asKJS().runCommandSilent('gamerule doFireTick false')
			ctx.source.entity.asKJS().runCommandSilent('gamerule doWeatherCycle false')
			event.server.tell('§l§c■■■ ВРЕМЯ МИРА ОСТАНОВЛЕНО ■■■')

			return 1
		})
	)
	event.register(Commands.literal("za_timeplay")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {

			ctx.source.entity.asKJS().runCommandSilent('gamerule doDaylightCycle true')
			ctx.source.entity.asKJS().runCommandSilent('gamerule doMobSpawning true')
			ctx.source.entity.asKJS().runCommandSilent('gamerule doFireTick true')
			ctx.source.entity.asKJS().runCommandSilent('gamerule doWeatherCycle true')
			event.server.tell('§l§6□□□ ВРЕМЯ МИРА ВОЗОБНОВЛЕНО □□□')

			return 1
		})
	)
})