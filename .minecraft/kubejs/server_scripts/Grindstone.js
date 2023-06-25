// https://gist.github.com/DRACTION/aa961bc0877afc5d18e0ab5bca2a1f9b

let za_grindstone = {
  // Прибавка к прочности
  durability: {
    div: 7, // ПрибавкаКПрочности = (МаксПрочность - ТекПрочность) / div
    min: 5  // Если (ПрибавкаКПрочности < min) Тогда {ПрибавкаКПрочности = min}
  },
  // Шансы успешно починить предмет (если не успешно, то предмет "ломается")
  repair: {
    min: 30.00,  // Минимальный (стартовый) шанс
    max: 94.00, // Максимальный шанс
    step: 0.16  // Шаг, с которым шанс растёт до максимума
  },
  // Шансы идеальной починки (полностью восстанавливается прочность), расчитывается при успехе, в %
  critRepair: {
    min: 0.10, // Минимальный (стартовый) шанс
    max: 5.00, // Максимальный шанс
    step: 0.01 // Шаг, с которым шанс растёт до максимума
  },
  // Шансы сломать ещё и точило (расчитывается при провале), в %
  critFail: {
    max: 50.00, // Максимальный (стартовый) шанс
    min: 5.00,  // Минимальный шанс
    step: 0.20  // Шаг, с которым шанс уменьшается до минимума
  }
}

onEvent('item.tags', e => {
  e.add('zarya:grindstone', [
    '#forge:tools',
    'minecolonies:chiefsword',
    'minecraft:wooden_sword',
    'minecraft:stone_sword',
    'minecraft:golden_sword',
    'minecraft:iron_sword',
    'minecraft:diamond_sword',
    'minecraft:netherite_sword'
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
    
    let oldChance = rFloat2(persistentData.getFloat(`za_grindstone_${nameChance}`))
    if (persistentData[`za_grindstone_${nameChance}`] === undefined) {
      newChance = za_grindstone[nameChance][isGoodChance ? 'min' : 'max']
    }
    else if (oldChance < za_grindstone[nameChance].min) {
      newChance = za_grindstone[nameChance].min
    }
    else if (oldChance > za_grindstone[nameChance].max) {
      newChance = za_grindstone[nameChance].max
    }
    else {
      newChance = oldChance
    }

    return newChance
  }

  let setNewChance = (oldChance, abuse, nameChance, persistentData) => {

    if (abuse) {return}
    
    let newChance = false
    let isGoodChance = nameChance !== 'critFail'

    if (isGoodChance) {
      newChance = rFloat2(oldChance + za_grindstone[nameChance].step)
    }
    else {
      newChance = rFloat2(oldChance - za_grindstone[nameChance].step)
    }

    if (newChance >= za_grindstone[nameChance].max) { // Перебор
      newChance = za_grindstone[nameChance].max
    }
    else if (newChance <= za_grindstone[nameChance].min) { // Перебор
      newChance = za_grindstone[nameChance].min
    }
    
    persistentData.putFloat(`za_grindstone_${nameChance}`, newChance)

  }

  if (e.player.minecraftEntity.shiftKeyDown
    && e.block.id == 'minecraft:grindstone'
    && e.item.hasTag('zarya:grindstone')
    && e.hand == MAIN_HAND)
  {

    let abuse = e.player.isCreativeMode() // Всегда хороший исход
    let copyItemNBT = e.item.getNbt()

    if (copyItemNBT.Damage !== undefined && copyItemNBT.Damage != 0) {

      let maxDur = e.item.itemStack.maxDamage
      let curDur = maxDur - copyItemNBT.Damage

      if (curDur != 0) {

        e.player.addItemCooldown(e.item, 60)


        let randChance1 = (Math.floor(Math.random()*10000) + 1) / 100 // значения от 0,01 до 100
        let randChance2 = (Math.floor(Math.random()*10000) + 1) / 100 // значения от 0,01 до 100

        let curRepairChance = za_grindstone_getChance(e.player.persistentData, abuse, 'repair')

        if (randChance1 > curRepairChance) { // Если заточка не удалась
          
          let curCritFailChance = za_grindstone_getChance(e.player.persistentData, abuse, 'critFail')

          if (randChance2 <= curCritFailChance) { // Если ПРОВАЛЬНЫЙ ПРОВАЛ

            e.player.tell(`[${e.player}]: Упс! Кажется я сломал всё, что только мог... Молодец!`)
            e.block.set('minecraft:air')

            setNewChance(curCritFailChance, abuse, 'critFail', e.player.persistentData)

          }
          else { // Если повезло чуть лучше
            e.player.tell(`[${e.player}]: Упс! Кажется что-то отвалилось... Теперь придётся чинить предмет другим способом...`)
          }

          copyItemNBT.Damage = maxDur
          e.server.runCommandSilent(`playsound minecraft:entity.item.break ambient @a ${e.block.x} ${e.block.y} ${e.block.z}`)
        
        }
        else { // Если заточка успешна

          let curCritRepairChance = za_grindstone_getChance(e.player.persistentData, abuse, 'critRepair')

          if (randChance2 <= curCritRepairChance) { // Идеальная заточка, полное восстановление прочности
    
            copyItemNBT.Damage = 0
            e.player.tell(`[${e.player}]: Идеальная заточка, чаще бы так!`)
            // https://www.gamergeeks.net/apps/minecraft/give-command-generator/fireworks
            e.server.runCommandSilent(`summon firework_rocket ${e.block.x} ${e.block.y + 2} ${e.block.z} {LifeTime:20,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:2,Explosions:[{Type:4,Flicker:1b,Trail:1b,Colors:[I;4312372],FadeColors:[I;6719955]}]}}}}`)
            
            setNewChance(curCritRepairChance, abuse, 'critRepair', e.player.persistentData)

          }
          else {

            let incDur = Math.ceil((maxDur - curDur) / za_grindstone.durability.div)

            if (curDur + za_grindstone.durability.min >= maxDur) {
              curDur = maxDur
            }
            else if (incDur < za_grindstone.durability.min) {
              curDur = curDur + za_grindstone.durability.min
            }
            else {
              curDur = curDur + incDur
            }

            copyItemNBT.Damage = maxDur - curDur

          }

          e.server.runCommandSilent(`playsound minecraft:block.grindstone.use ambient @a ${e.block.x} ${e.block.y} ${e.block.z}`)
        
        }

        e.server.runCommandSilent(`particle minecraft:electric_spark ${e.block.x} ${e.block.y + 0.5} ${e.block.z} 0.5 0.5 0.5 0.1 10 normal`)
        e.item.setNbt(copyItemNBT)

        setNewChance(curRepairChance, abuse, 'repair', e.player.persistentData)

      }
      else {

        e.player.tell(`[${e.player}]: Предмет не может быть починен с помощью заточки!`)

      }

    }

  }

})

onEvent('command.registry', event => {

  let getChance = (curPlayer, target, nameChance) => {
  
    let chance = za_grindstone_getChance(target.persistentData, false, nameChance)
    let isGoodChance = nameChance !== 'critFail'

    if (nameChance == 'repair') {
      curPlayer.tell(`[${target}]: Шанс успешной заточки = ${chance}%`)
    }
    else if (nameChance == 'critRepair') {
      curPlayer.tell(`[${target}]: Шанс идеальной заточки = ${chance}%`)
    }
    else if (nameChance == 'critFail') {
      curPlayer.tell(`[${target}]: Шанс сломать точило = ${chance}%`)
    }

    if (!isGoodChance && chance == za_grindstone[nameChance].min
      || isGoodChance && chance == za_grindstone[nameChance].max) {
      curPlayer.tell(`- Это наилучший результат, которого можно достигнуть!!!`)
    }
    else {

      let remain = 0
      if (isGoodChance) {
        remain = Math.ceil((za_grindstone[nameChance].max - chance) / za_grindstone[nameChance].step)
      }
      else {
        remain = Math.ceil((chance - za_grindstone[nameChance].min) / za_grindstone[nameChance].step)
      }

      if (nameChance == 'repair') {
        curPlayer.tell(`- До полного освоения осталось попытаться сделать ${remain} заточек`)
      }
      else if (nameChance == 'critRepair') {
        curPlayer.tell(`- До полного освоения осталось сделать ещё ${remain} идеальных заточек`)
      }
      else if (nameChance == 'critFail') {
        curPlayer.tell(`- До полного освоения осталось сломать ещё ${remain} точил`)
      }
      
    }

  }

  let setChance = (needChance, curPlayer, target, nameChance) => {

    // Только креативным челам
    if (!curPlayer.isCreativeMode()) {
      curPlayer.tell(`!!!Изменять показатели можно только в креатив-режиме!!!`)
      return
    }

    let chance = rFloat2(needChance)
    let name = ''
    let suffix = ''

    if (nameChance == 'repair') {
      name = 'успешной заточки'
    }
    else if (nameChance == 'critRepair') {
      name = 'идеальной заточки'
    }
    else if (nameChance == 'critFail') {
      name = 'сломать точило'
    }

    if (chance > za_grindstone[nameChance].max) {
      chance = za_grindstone[nameChance].max
      suffix = ' Это макcимально возможный шанс'
    }
    else if (chance < za_grindstone[nameChance].min) {
      chance = za_grindstone[nameChance].min
      suffix = ' Это минимально возможный шанс'
    }

    target.persistentData.putFloat(`za_grindstone_${nameChance}`, chance)
    curPlayer.tell(`Для игрока ${target} шанс ${name} установлен. Теперь он составляет ${chance}%.${suffix}`)

  }

  let resetChances = (curPlayer, target) => {
    if (target.persistentData.za_grindstone_repair !== undefined) {
      target.persistentData.za_grindstone_repair = undefined
    }
    if (target.persistentData.za_grindstone_critRepair !== undefined) {
      target.persistentData.za_grindstone_critRepair = undefined
    }
    if (target.persistentData.za_grindstone_critFail !== undefined) {
      target.persistentData.za_grindstone_critFail = undefined
    }
    curPlayer.tell(`Для игрока ${target} сброшены шансы до исходных значений.`)
  }

  const { commands: Commands, arguments: Arguments} = event;

  // Узнать текущий шанс
  event.register(Commands.literal("za_grindstone")
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
        .executes(ctx => {

          let player = ctx.source.entity.asKJS()
          let target = Arguments.PLAYER.getResult(ctx, "nickname").asKJS()

          if (player.isCreativeMode()) {
            resetChances(player, target)
          }
          else {
            player.tell(`!!!Изменять показатели можно только в креатив-режиме!!!`)
          }

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

let za_grindstone_getChance = (persistentData, abuse, nameChance) => {

  let newChance = 0.00
  let isGoodChance = nameChance !== 'critFail'
  
  if (abuse) {
    newChance = (isGoodChance ? 100.00 : 0.00)
    return newChance
  }
  
  let oldChance = rFloat2(persistentData.getFloat(`za_grindstone_${nameChance}`))
  if (persistentData[`za_grindstone_${nameChance}`] === undefined) {
    newChance = za_grindstone[nameChance][isGoodChance ? 'min' : 'max']
  }
  else if (oldChance < za_grindstone[nameChance].min) {
    newChance = za_grindstone[nameChance].min
  }
  else if (oldChance > za_grindstone[nameChance].max) {
    newChance = za_grindstone[nameChance].max
  }
  else {
    newChance = oldChance
  }

  return newChance
}
