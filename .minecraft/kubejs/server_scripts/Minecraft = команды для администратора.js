
onEvent('command.registry', event => {
	const { commands: Commands, arguments: Arguments} = event;
	event.register(Commands.literal("za_timestop")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {

			ctx.source.entity.asKJS().runCommand('gamerule doDaylightCycle false')
			ctx.source.entity.asKJS().runCommand('gamerule doMobSpawning false')
			ctx.source.entity.asKJS().runCommand('gamerule doFireTick false')
			ctx.source.entity.asKJS().runCommand('gamerule doWeatherCycle false')

			return 1
		})
	)
	event.register(Commands.literal("za_timeplay")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {

			ctx.source.entity.asKJS().runCommand('gamerule doDaylightCycle true')
			ctx.source.entity.asKJS().runCommand('gamerule doMobSpawning true')
			ctx.source.entity.asKJS().runCommand('gamerule doFireTick true')
			ctx.source.entity.asKJS().runCommand('gamerule doWeatherCycle true')

			return 1
		})
	)
})