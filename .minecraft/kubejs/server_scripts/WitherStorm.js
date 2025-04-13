onEvent('entity.hurt', e => {

	//////////////// Кратное увеличение урона ////////////////
	if (e.source.getActual() != null && e.source.getActual().getType().contains("witherstormmod")) {
		let source = e.source.getActual()

		if (source.persistentData.za_StopRecursionDamage) {
			source.persistentData.remove("za_StopRecursionDamage")
			// e.server.tell("amount - "+ e.getDamage())
			// e.server.tell("za_StopRecursionDamage")
		} else {
			// e.server.tell(".getType() - "+ e.source.getActual().getType())
			// e.server.tell("amount - "+ e.getDamage())
			source.persistentData.za_StopRecursionDamage = true
			e.entity.minecraftEntity.hurt(e.source, (e.getDamage() * 6))
			e.cancel()
		}
	//////// Фикс бага, что можно наносить урон визер шторму вне боевого режима оружием ближнего боя ////////
	} else if (e.source.getActual() != null && e.source.getActual().isPlayer()
		&& e.entity.getType() == "witherstormmod:wither_storm"
		&& e.source.getActual().fullNBT.ForgeCaps["epicfight:skill_cap"].playerMode == "MINING"
		&& e.source.getType() == "player") {

		// e.server.tell("MINING - "+ e.source.getActual().fullNBT.ForgeCaps["epicfight:skill_cap"].playerMode == "MINING")
		// e.server.tell("isProjectile() - "+ e.source.isProjectile())
		// e.server.tell("isMagic() - "+ e.source.isMagic())
		// e.server.tell("isExplosion() - "+ e.source.isExplosion())
		// e.server.tell("toString() - "+ e.source.toString())
		// e.server.tell("getType() == player - "+ (e.source.getType() == "player"))

		e.cancel()
	}
})
