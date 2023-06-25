onEvent('command.registry', event => {

  const { commands: Commands, arguments: Arguments} = event;

  event.register(Commands.literal("setskin")
    .then(Commands.literal("classic")
      .then(Commands.argument("URL", Arguments.GREEDY_STRING.create(event))
        .executes(ctx => {
          const url = Arguments.STRING.getResult(ctx, "URL")
          // event.server.runCommand(`say ${url}`)
          // event.server.runCommand(`say ${ctx.source}`)
          // event.server.runCommand(`say ${ctx.source.position}`)
          // event.server.runCommand(`say ${ctx.source.player}`)
          // event.server.runCommand(`say ${ctx.source.entity}`)
          // event.server.runCommand(`say ${ctx.source.entity.asKJS()}`)
          // ctx.source.entity.asKJS().tell(`say ${url}`)

          ctx.source.entity.asKJS().runCommand(`skin set web classic "${url}"`)

          return 1
        })
      )
    )
    .then(Commands.literal("slim")
      .then(Commands.argument("URL", Arguments.GREEDY_STRING.create(event))
        .executes(ctx => {
          const url = Arguments.STRING.getResult(ctx, "URL")

          ctx.source.entity.asKJS().runCommand(`skin set web slim "${url}"`)

          return 1
        })
      )
    )
  )
})