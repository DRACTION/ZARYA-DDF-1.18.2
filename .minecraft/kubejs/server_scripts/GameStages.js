onEvent('player.advancement', e => {
    // e.server.tell(`e.getAdvancement().getId() = ${e.getAdvancement().getId()}`)
    // e.server.tell(`e.player.stages.has('enter_the_nether') = ${e.player.stages.has('enter_the_nether')}`)
    // e.server.tell(`e.player.stages.has('enter_the_end') = ${e.player.stages.has('enter_the_end')}`)

    if (e.getAdvancement().getId() == 'create:root' && !e.player.stages.has('nerf_enemies')) {

        e.player.stages.add('nerf_enemies')

    } else if (e.getAdvancement().getId() == 'minecraft:story/enter_the_nether' && !e.player.stages.has('enter_the_nether')) {

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
