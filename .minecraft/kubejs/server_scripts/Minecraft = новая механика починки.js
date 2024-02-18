// https://gist.github.com/DRACTION/aa961bc0877afc5d18e0ab5bca2a1f9b

let za_newRepair = {
  // Прибавка к прочности
  durability: {
    div: 5,  // ПрибавкаКПрочности = (МаксПрочность - ТекПрочность) / div
    min: 10  // Если (ПрибавкаКПрочности < min) Тогда {ПрибавкаКПрочности = min}
  },
  // Шансы успешно починить предмет (если не успешно, то предмет "ломается")
  repair: {
    min: 60.00, // Минимальный (стартовый) шанс
    max: 96.00, // Максимальный шанс
    step: 0.16  // Шаг, с которым шанс растёт до максимума
  },
  // Шансы идеальной починки (полностью восстанавливается прочность, расчитывается при успехе), в %
  critRepair: {
    min: 0.50,  // Минимальный (стартовый) шанс
    max: 10.00, // Максимальный шанс
    step: 0.05  // Шаг, с которым шанс растёт до максимума
  },
  // Шансы сломать ещё и рабочее место (расчитывается при провале), в %
  critFail: {
    max: 30.00, // Максимальный (стартовый) шанс
    min: 5.00,  // Минимальный шанс
    step: 0.20  // Шаг, с которым шанс уменьшается до минимума
  },
  // Best-practics геймдизайна = "Честная" теория вероятности
  // В общем, если тебя постигла неудача, то накину проценты на следующую попытку
  unfairIncreaseChance: 10.00
}

onEvent('item.tags', e => {
  e.add('zarya:repair/grindstone', [
    '#forge:tools',
    'minecraft:trident',
    'minecraft:wooden_sword',
    'minecraft:stone_sword',
    'minecraft:golden_sword',
    'minecraft:iron_sword',
    'minecraft:diamond_sword',
    'minecraft:netherite_sword',
    'minecraft:wooden_hoe',
    'minecraft:stone_hoe',
    'minecraft:golden_hoe',
    'minecraft:iron_hoe',
    'minecraft:diamond_hoe',
    'minecraft:netherite_hoe',
    '#forge:shears',
    'epicfight:uchigatana',
    'epicfight:iron_greatsword',
    'epicfight:golden_greatsword',
    'epicfight:diamond_greatsword',
    'epicfight:netherite_greatsword',
    'epicfight:stone_spear',
    'epicfight:iron_spear',
    'epicfight:golden_spear',
    'epicfight:diamond_spear',
    'epicfight:netherite_spear',
    'epicfight:iron_tachi',
    'epicfight:golden_tachi',
    'epicfight:diamond_tachi',
    'epicfight:netherite_tachi',
    'epicfight:iron_longsword',
    'epicfight:golden_longsword',
    'epicfight:diamond_longsword',
    'epicfight:netherite_longsword'
  ])
  e.add('zarya:repair/smithing_table', [
    '#ctov:iron_armour',
    'minecraft:chainmail_helmet',
    'minecraft:chainmail_chestplate',
    'minecraft:chainmail_leggings',
    'minecraft:chainmail_boots',
    'minecraft:diamond_helmet',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_leggings',
    'minecraft:diamond_boots',
    'minecraft:golden_helmet',
    'minecraft:golden_chestplate',
    'minecraft:golden_leggings',
    'minecraft:golden_boots',
    'minecraft:netherite_helmet',
    'minecraft:netherite_chestplate',
    'minecraft:netherite_leggings',
    'minecraft:netherite_boots',
    'minecraft:shield',
    'minecraft:turtle_helmet',
    'create:copper_diving_helmet',
    'create:copper_backtank',
    'create:copper_diving_boots',
    'create:netherite_diving_helmet',
    'create:netherite_backtank',
    'create:netherite_diving_boots',
    'productivebees:bee_nest_diamond_helmet'
  ])
  e.add('zarya:repair/fletching_table', [
    'minecraft:bow',
    'minecraft:crossbow'
  ])
  e.add('zarya:repair/loom', [
    '#ctov:leather_armour',
    'epicfight:stray_hat',
    'epicfight:stray_robe',
    'epicfight:stray_pants'
  ])
})

onEvent('block.right_click', e => {

  let getChance = (persistentData, abuse, nameChance) => {

    let newChance = 0.00
    let isGoodChance = nameChance !== 'critFail'
    
    if (abuse) {
      newChance = (isGoodChance ? 100.00 : 0.00)
      return newChance
    }
    
    let oldChance = rFloat2(persistentData.getFloat(`za_newRepair_${nameChance}`))
    if (persistentData[`za_newRepair_${nameChance}`] === undefined) {
      newChance = za_newRepair[nameChance][isGoodChance ? 'min' : 'max']
    }
    else if (oldChance < za_newRepair[nameChance].min) {
      newChance = za_newRepair[nameChance].min
    }
    else if (oldChance > za_newRepair[nameChance].max) {
      newChance = za_newRepair[nameChance].max
    }
    else {
      newChance = oldChance
    }

    return newChance
  }

  let getUnfairChance = (persistentData, abuse) => {

    if (abuse) {return 0.0}

    return rFloat2(persistentData.getFloat(`za_newRepair_unfairChance`))

  }

  let setNewChance = (oldChance, abuse, nameChance, player) => {

    if (abuse) {return}
    
    let newChance = false
    let isGoodChance = nameChance !== 'critFail'

    if (isGoodChance) {
      newChance = rFloat2(oldChance + za_newRepair[nameChance].step)
    }
    else {
      newChance = rFloat2(oldChance - za_newRepair[nameChance].step)
    }

    if (newChance >= za_newRepair[nameChance].max) { // Перебор
      newChance = za_newRepair[nameChance].max
    }
    else if (newChance <= za_newRepair[nameChance].min) { // Перебор
      newChance = za_newRepair[nameChance].min
    }
    
    player.persistentData.putFloat(`za_newRepair_${nameChance}`, newChance)

    // Уведомить, что достиг лучшего результата
    let tellPlayerBestResult =
      (isGoodChance && oldChance != za_newRepair[nameChance].max && newChance == za_newRepair[nameChance].max)
      || (!isGoodChance && oldChance != za_newRepair[nameChance].min && newChance == za_newRepair[nameChance].min)

    if (tellPlayerBestResult) {
      if (nameChance == 'repair') {
        player.tell(`[${player}]: НАКОНЕЦ-ТО!!! Я достиг наилучшего результата в шансе успешной починки!`)
      } else if (nameChance == 'critRepair') {
        player.tell(`[${player}]: НАКОНЕЦ-ТО!!! Я достиг наилучшего результата в шансе ИДЕАЛЬНОЙ починки!`)
      } else if (nameChance == 'critFail') {
        player.tell(`[${player}]: НАКОНЕЦ-ТО!!! Я достиг наилучшего результата в шансе НЕ СЛОМАТЬ ЭТО ЧЁРТОВО РАБОЧЕЕ МЕСТО!`)
      }

      // https://www.gamergeeks.net/apps/minecraft/give-command-generator/fireworks
      e.server.runCommandSilent(`summon firework_rocket ${player.getBlock().x} ${player.getBlock().y + 2} ${player.getBlock().z} {LifeTime:20,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:2,Explosions:[{Type:3,Flicker:1b,Trail:1b,Colors:[I;16725770],FadeColors:[I;14584874]}]}}}}`)
    }

  }

  let setUnfairChance = (oldChance, abuse, isSuccess, multiplier, persistentData) => {

    if (abuse) {return}

    let newChance = false

    if (isSuccess) {
      newChance = rFloat2(oldChance - (za_newRepair.unfairIncreaseChance * multiplier))
    } else {
      newChance = rFloat2(oldChance + (za_newRepair.unfairIncreaseChance * multiplier))
    }

    if (newChance < 0.0) {
      newChance = 0.0
    }

    persistentData.putFloat(`za_newRepair_unfairChance`, newChance)

  }


  if (!e.player.minecraftEntity.shiftKeyDown || e.hand != MAIN_HAND) {return}

  let typeRepair = false
  if (e.block.id == 'minecraft:grindstone'           && e.item.hasTag('zarya:repair/grindstone'))      {typeRepair = 'grindstone'}
  else if (e.block.id == 'minecraft:smithing_table'  && e.item.hasTag('zarya:repair/smithing_table'))  {typeRepair = 'smithing_table'}
  else if (e.block.id == 'minecraft:fletching_table' && e.item.hasTag('zarya:repair/fletching_table')) {typeRepair = 'fletching_table'}
  else if (e.block.id == 'minecraft:loom'            && e.item.hasTag('zarya:repair/loom'))            {typeRepair = 'loom'}

  if (typeRepair === false)  {return}

  let copyItemNBT = e.item.getNbt()
  if (copyItemNBT.Damage === undefined || copyItemNBT.Damage == 0) {return}


  let abuse = e.player.isCreativeMode() // Всегда хороший исход

  let maxDur = e.item.itemStack.maxDamage
  let curDur = maxDur - copyItemNBT.Damage

  if (curDur != 0) {

    e.player.addItemCooldown(e.item, 60)


    let randChance1 = (Math.floor(Math.random()*10000) + 1) / 100 // значения от 0,01 до 100
    let randChance2 = (Math.floor(Math.random()*10000) + 1) / 100 // значения от 0,01 до 100

    let curRepairChance = za_repair_getChance(e.player.persistentData, abuse, 'repair')
    let curUnfairChance = getUnfairChance(e.player.persistentData, abuse)
    // e.player.tell(`[${e.player}]: curRepairChance = ${curRepairChance}`)
    // e.player.tell(`[${e.player}]: curUnfairChance = ${curUnfairChance}`)
    // e.player.tell(`[${e.player}]: randChance1 = ${randChance1}`)
    // e.player.tell(`[${e.player}]: randChance2 = ${randChance2}`)
    // e.player.tell(`[${e.player}]: randChance1 > curRepairChance + curUnfairChance = ${randChance1 > curRepairChance + curUnfairChance}`)

    if (randChance1 > curRepairChance + curUnfairChance) { // Если починка не удалась
      
      let curCritFailChance = za_repair_getChance(e.player.persistentData, abuse, 'critFail')

      if (randChance2 <= curCritFailChance) { // Если ПРОВАЛЬНЫЙ ПРОВАЛ

        e.player.tell(`[${e.player}]: Упс! Кажется я сломал всё, что только мог... Молодец!`)
        e.block.set('minecraft:air')
        setUnfairChance(curUnfairChance, abuse, false, 2, e.player.persistentData)

      }
      else { // Если повезло чуть лучше

        e.player.tell(`[${e.player}]: Упс! Кажется что-то отвалилось... Теперь придётся чинить предмет другим способом...`)
        setUnfairChance(curUnfairChance, abuse, false, 1, e.player.persistentData)

      }

      setNewChance(curCritFailChance, abuse, 'critFail', e.player)

      copyItemNBT.Damage = maxDur
      e.server.runCommandSilent(`playsound minecraft:entity.item.break ambient @a ${e.block.x} ${e.block.y} ${e.block.z}`)
    
    }
    else { // Если починка успешна

      let curCritRepairChance = za_repair_getChance(e.player.persistentData, abuse, 'critRepair')

      if (randChance2 <= curCritRepairChance) { // Идеальная починка, полное восстановление прочности

        copyItemNBT.Damage = 0
        e.player.tell(`[${e.player}]: Идеальная починка, чаще бы так!`)
        // https://www.gamergeeks.net/apps/minecraft/give-command-generator/fireworks
        e.server.runCommandSilent(`summon firework_rocket ${e.block.x} ${e.block.y + 2} ${e.block.z} {LifeTime:20,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:2,Explosions:[{Type:4,Flicker:1b,Trail:1b,Colors:[I;4312372],FadeColors:[I;6719955]}]}}}}`)
        setUnfairChance(curUnfairChance, abuse, true, 3, e.player.persistentData)

      }
      else {

        let incDur = Math.ceil((maxDur - curDur) / za_newRepair.durability.div)

        if (curDur + za_newRepair.durability.min >= maxDur) {
          curDur = maxDur
        }
        else if (incDur < za_newRepair.durability.min) {
          curDur = curDur + za_newRepair.durability.min
        }
        else {
          curDur = curDur + incDur
        }

        copyItemNBT.Damage = maxDur - curDur

        setUnfairChance(curUnfairChance, abuse, true, 0.5, e.player.persistentData)

      }

      setNewChance(curCritRepairChance, abuse, 'critRepair', e.player)

      let sound = 'minecraft:block.grindstone.use' // Звук по умолчанию
      if (typeRepair == 'grindstone')           {sound = 'minecraft:block.grindstone.use'}
      else if (typeRepair == 'smithing_table')  {sound = 'minecraft:block.smithing_table.use'}
      else if (typeRepair == 'fletching_table') {sound = 'minecraft:item.crossbow.loading_middle'}
      else if (typeRepair == 'loom')            {sound = 'minecraft:ui.loom.take_result'}

      e.server.runCommandSilent(`playsound ${sound} ambient @a ${e.block.x} ${e.block.y} ${e.block.z}`)
    
    }

    e.server.runCommandSilent(`particle minecraft:electric_spark ${e.block.x} ${e.block.y + 0.5} ${e.block.z} 0.5 0.5 0.5 0.1 10 normal`)
    e.item.setNbt(copyItemNBT)

    setNewChance(curRepairChance, abuse, 'repair', e.player)

  }
  else {

    e.player.tell(`[${e.player}]: Предмет не может быть починен таким образом!`)

  }

})

onEvent('command.registry', event => {

  let getChance = (curPlayer, target, nameChance) => {
  
    let chance = za_repair_getChance(target.persistentData, false, nameChance)
    let isGoodChance = nameChance !== 'critFail'

    if (nameChance == 'repair') {
      curPlayer.tell(`[${target}]: Шанс успешной починки = ${chance}%`)
    }
    else if (nameChance == 'critRepair') {
      curPlayer.tell(`[${target}]: Шанс идеальной починки = ${chance}%`)
    }
    else if (nameChance == 'critFail') {
      curPlayer.tell(`[${target}]: Шанс сломать рабочее место = ${chance}%`)
    }

    if (!isGoodChance && chance == za_newRepair[nameChance].min
      || isGoodChance && chance == za_newRepair[nameChance].max) {
      curPlayer.tell(`- Это наилучший результат, которого можно достигнуть!!!`)
    }
    else {

      let remain = 0
      if (isGoodChance) {
        remain = Math.ceil((za_newRepair[nameChance].max - chance) / za_newRepair[nameChance].step)
      }
      else {
        remain = Math.ceil((chance - za_newRepair[nameChance].min) / za_newRepair[nameChance].step)
      }

      if (nameChance == 'repair') {
        curPlayer.tell(`- До полного освоения осталось попытаться сделать ${remain} починок`)
      }
      else if (nameChance == 'critRepair') {
        curPlayer.tell(`- До полного освоения осталось сделать ещё ${remain} успешных починок`)
      }
      else if (nameChance == 'critFail') {
        curPlayer.tell(`- До полного освоения осталось сделать ещё ${remain} провальных починок`)
      }
      
    }

  }

  let setChance = (needChance, curPlayer, target, nameChance) => {

    let chance = rFloat2(needChance)
    let name = ''
    let suffix = ''

    if (nameChance == 'repair') {
      name = 'успешной починки'
    }
    else if (nameChance == 'critRepair') {
      name = 'идеальной починки'
    }
    else if (nameChance == 'critFail') {
      name = 'сломать рабочее место'
    }

    if (chance > za_newRepair[nameChance].max) {
      chance = za_newRepair[nameChance].max
      suffix = ' Это макcимально возможный шанс'
    }
    else if (chance < za_newRepair[nameChance].min) {
      chance = za_newRepair[nameChance].min
      suffix = ' Это минимально возможный шанс'
    }

    target.persistentData.putFloat(`za_newRepair_${nameChance}`, chance)
    curPlayer.tell(`Для игрока ${target} шанс ${name} установлен. Теперь он составляет ${chance}%.${suffix}`)

  }

  let resetChances = (curPlayer, target) => {
    if (target.persistentData.za_newRepair_repair !== undefined) {
      target.persistentData.za_newRepair_repair = undefined
    }
    if (target.persistentData.za_newRepair_critRepair !== undefined) {
      target.persistentData.za_newRepair_critRepair = undefined
    }
    if (target.persistentData.za_newRepair_critFail !== undefined) {
      target.persistentData.za_newRepair_critFail = undefined
    }
    curPlayer.tell(`Для игрока ${target} сброшены шансы до исходных значений.`)
  }

  const { commands: Commands, arguments: Arguments} = event;

  // Узнать текущий шанс
  event.register(Commands.literal("za_repair")
    .executes(ctx => {

      let player = ctx.source.entity.asKJS()

      player.tell(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
      getChance(player, player, 'repair')
      getChance(player, player, 'critRepair')
      getChance(player, player, 'critFail')
      player.tell(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

      return 1
    })
    .then(Commands.argument("nickname", Arguments.PLAYER.create(event))
      .executes(ctx => {

        let user = Arguments.PLAYER.getResult(ctx, "nickname").asKJS()
        let player = ctx.source.entity.asKJS()
        
        player.tell(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
        getChance(player, user, 'repair')
        getChance(player, user, 'critRepair')
        getChance(player, user, 'critFail')
        player.tell(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

        return 1
      })
    )
    // Установить шанс
    .then(Commands.literal("setRepair")
      .requires(src => src.hasPermission(2))
      .then(Commands.argument("chance", Arguments.FLOAT.create(event))
        .executes(ctx => {

          let chance = Arguments.FLOAT.getResult(ctx, "chance")
          let player = ctx.source.entity.asKJS()

          setChance(chance, player, player, 'repair')

          return 1
        })
        .then(Commands.argument("nickname", Arguments.PLAYER.create(event))
          .executes(ctx => {

            let chance = Arguments.FLOAT.getResult(ctx, "chance")
            let player = ctx.source.entity.asKJS()
            let target = Arguments.PLAYER.getResult(ctx, "nickname").asKJS()

            setChance(chance, player, target, 'repair')

            return 1
          })
        )
      )
    )
    .then(Commands.literal("setCritRepair")
      .requires(src => src.hasPermission(2))
      .then(Commands.argument("chance", Arguments.FLOAT.create(event))
        .executes(ctx => {

          let chance = Arguments.FLOAT.getResult(ctx, "chance")
          let player = ctx.source.entity.asKJS()

          setChance(chance, player, player, 'critRepair')

          return 1
        })
        .then(Commands.argument("nickname", Arguments.PLAYER.create(event))
          .executes(ctx => {

            let chance = Arguments.FLOAT.getResult(ctx, "chance")
            let player = ctx.source.entity.asKJS()
            let target = Arguments.PLAYER.getResult(ctx, "nickname").asKJS()

            setChance(chance, player, target, 'critRepair')

            return 1
          })
        )
      )
    )
    .then(Commands.literal("setCritFail")
      .requires(src => src.hasPermission(2))
      .then(Commands.argument("chance", Arguments.FLOAT.create(event))
        .executes(ctx => {

          let chance = Arguments.FLOAT.getResult(ctx, "chance")
          let player = ctx.source.entity.asKJS()

          setChance(chance, player, player, 'critFail')

          return 1
        })
        .then(Commands.argument("nickname", Arguments.PLAYER.create(event))
          .executes(ctx => {

            let chance = Arguments.FLOAT.getResult(ctx, "chance")
            let player = ctx.source.entity.asKJS()
            let target = Arguments.PLAYER.getResult(ctx, "nickname").asKJS()

            setChance(chance, player, target, 'critFail')

            return 1
          })
        )
      )
    )
    .then(Commands.literal("resetStats")
      .executes(ctx => {

        let player = ctx.source.entity.asKJS()

        resetChances(player, player)

        return 1
      })
      .then(Commands.argument("nickname", Arguments.PLAYER.create(event))
        .requires(src => src.hasPermission(2))
        .executes(ctx => {

          let player = ctx.source.entity.asKJS()
          let target = Arguments.PLAYER.getResult(ctx, "nickname").asKJS()

          resetChances(player, target)

          return 1
        })
      )
    )
  )

})



let rFloat = (input, dot) => {
  return Math.round(input * Math.pow(10, dot)) / Math.pow(10, dot)
}

let rFloat2 = (input) => {
  return rFloat(input, 2)
}

let za_repair_getChance = (persistentData, abuse, nameChance) => {

  let newChance = 0.00
  let isGoodChance = nameChance !== 'critFail'
  
  if (abuse) {
    newChance = (isGoodChance ? 100.00 : 0.00)
    return newChance
  }
  
  let oldChance = rFloat2(persistentData.getFloat(`za_newRepair_${nameChance}`))
  if (persistentData[`za_newRepair_${nameChance}`] === undefined) {
    newChance = za_newRepair[nameChance][isGoodChance ? 'min' : 'max']
  }
  else if (oldChance < za_newRepair[nameChance].min) {
    newChance = za_newRepair[nameChance].min
  }
  else if (oldChance > za_newRepair[nameChance].max) {
    newChance = za_newRepair[nameChance].max
  }
  else {
    newChance = oldChance
  }

  return newChance
}
