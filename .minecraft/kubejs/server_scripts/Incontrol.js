onEvent('command.registry', event => {

	const { commands: Commands, arguments: Arguments} = event;

	event.register(Commands.literal("days")
		.executes(ctx => {
			ctx.source.entity.asKJS().runCommand("incontrol days")
			return 1
		})
	)
})