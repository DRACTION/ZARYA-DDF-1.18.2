onEvent('player.logged_in', e => {
    if (e.player.stages.getAll().isEmpty()) {
        e.player.stages.add('nerf_enemies')
        e.getServer().runCommandSilent(`heal ${e.getPlayer().toString()}`)
    }
    if (!e.getLevel().getGameRules().getBoolean('disablePortal') && !e.player.stages.has('unlock_portal')) {
        e.player.stages.add('unlock_portal')
    }
})

onEvent('player.advancement', e => {
    // e.server.tell(`e.getAdvancement().getId() = ${e.getAdvancement().getId()}`)
    // e.server.tell(`e.player.stages.has('enter_the_nether') = ${e.player.stages.has('enter_the_nether')}`)
    // e.server.tell(`e.player.stages.has('enter_the_end') = ${e.player.stages.has('enter_the_end')}`)

    if (e.getAdvancement().getId() == 'minecraft:story/enter_the_nether' && !e.player.stages.has('enter_the_nether')) {

        e.player.stages.add('enter_the_nether')
        if (e.player.stages.has('nerf_enemies')) {
            e.player.stages.remove('nerf_enemies')
        }

    } else if (e.getAdvancement().getId() == 'minecraft:story/enter_the_end' && !e.player.stages.has('enter_the_end')) {

        e.player.stages.add('enter_the_end')
        if (e.player.stages.has('nerf_enemies')) {
            e.player.stages.remove('nerf_enemies')
        }
        if (!e.player.stages.has('enter_the_nether')) {
            e.player.stages.add('enter_the_nether')
        }

    }

    // e.server.tell(`------------------------`)
    // e.server.tell(`e.player.stages.has('enter_the_nether') = ${e.player.stages.has('enter_the_nether')}`)
    // e.server.tell(`e.player.stages.has('enter_the_end') = ${e.player.stages.has('enter_the_end')}`)
})
