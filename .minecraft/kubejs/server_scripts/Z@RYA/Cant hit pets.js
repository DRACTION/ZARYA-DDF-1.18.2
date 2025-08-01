onEvent('entity.hurt', e => {

    if (e.entity == null || e.source.getActual() == null) return
    if (e.source.getActual().isPlayer() && e.entity.isPlayer()) return

    //e.server.tell(`e.entity.fullNBT.contains('Summoner') = ${e.entity.fullNBT.contains('Summoner')}`)
    //e.server.tell(`e.entity.fullNBT.getUUID('Summoner') = ${e.entity.fullNBT.getUUID('Summoner')}`)
    //e.server.tell(`e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('Summoner')) = ${e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('Summoner'))}`)
    //e.server.tell(`e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('Summoner')) != null = ${e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('Summoner')) != null}`)
    //e.server.tell(`e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('Summoner')).isPlayer() = ${e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('Summoner')).isPlayer()}`)
    //e.server.tell(`Utils.server.playerList.getPlayer(e.entity.fullNBT.getUUID('Summoner')) = ${Utils.server.playerList.getPlayer(e.entity.fullNBT.getUUID('Summoner'))}`)

    let targetHasOwner   = e.entity.getType() == 'tombstone:spectral_wolf'
                        || (e.entity.fullNBT.contains('Owner')     && e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('Owner')) != null)
                        || (e.entity.fullNBT.contains('OwnerUUID') && e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('OwnerUUID')) != null)
                        || (e.entity.fullNBT.contains('Summoner')  && e.getLevel().minecraftLevel.getPlayerByUUID(e.entity.fullNBT.getUUID('Summoner')) != null)

    let attackerHasOwner = e.source.getActual().getType() == 'tombstone:spectral_wolf'
                        || (e.source.getActual().fullNBT.contains('Owner')     && e.getLevel().minecraftLevel.getPlayerByUUID(e.source.getActual().fullNBT.getUUID('Owner')) != null)
                        || (e.source.getActual().fullNBT.contains('OwnerUUID') && e.getLevel().minecraftLevel.getPlayerByUUID(e.source.getActual().fullNBT.getUUID('OwnerUUID')) != null)
                        || (e.source.getActual().fullNBT.contains('Summoner')  && e.getLevel().minecraftLevel.getPlayerByUUID(e.source.getActual().fullNBT.getUUID('Summoner')) != null)

    // e.source.getActual().fullNBT.contains('Summoner') && Utils.server.playerList.getPlayer(e.entity.fullNBT.Summoner)

    // e.server.tell(`e.entity.fullNBT.contains('Owner') = ${e.entity.fullNBT.contains('Owner')}`)
    // e.server.tell(`e.source.getActual().isPlayer() = ${e.source.getActual().isPlayer()}`)
    // Если игрок пытается бить питомца
    if (targetHasOwner && e.source.getActual().isPlayer()) {
        // e.server.tell(`игрок пытается бить питомца`)
        e.cancel()
        return
    }
    // e.server.tell(`e.source.getActual().fullNBT.contains('Owner') = ${e.source.getActual().fullNBT.contains('Owner')}`)
    // e.server.tell(`e.entity.isPlayer() = ${e.entity.isPlayer()}`)
    // Если питомец пытается бить игрока
    if (attackerHasOwner && e.entity.isPlayer()) {
        // e.server.tell(`питомец пытается бить игрока`)
        // e.server.tell(`e.source.getActual().getAttackingEntity() = ${e.source.getActual()}`)
        e.source.getActual().setRevengeTarget(null)
        // e.server.tell(`e.source.getActual().getAttackingEntity() = ${e.source.getActual().id}`)
        e.cancel()
        return
    }
    // e.server.tell(`targetHasOwner = ${targetHasOwner}`)
    // e.server.tell(`attackerHasOwner = ${attackerHasOwner}`)
    // Если питомец пытается бить питомца
    if (attackerHasOwner && targetHasOwner) {
        // e.server.tell(`питомец пытается бить питомца`)
        e.cancel()
        return
    }
})
