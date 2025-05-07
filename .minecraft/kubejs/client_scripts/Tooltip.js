// https://mods.latvian.dev/books/kubejs/page/itemtooltipeventjs

onEvent('item.tooltip', e => {

  e.add([
    'kubejs:flint_tool_blank',
    'kubejs:flint_axe_head',
    'kubejs:flint_pickaxe_head',
    'kubejs:flint_shovel_head',
    'kubejs:bone_tool_blank',
    'kubejs:bone_axe_head',
    'kubejs:bone_pickaxe_head',
    'kubejs:bone_shovel_head'
  ], Text.of('Используется на ранних этапах игры').darkGray())

  e.add(['kubejs:firestarter'], Text.of('Используется для розжига').darkGray())

  e.add(['kubejs:trained_doggy_revive_stone'], Text.of('Воскрешает тренированную собаку').darkGray())
  e.add(['kubejs:trained_doggy_revive_stone'], Text.of('ПКМ на собачьей лежанке').darkAqua().italic())

  e.add(['pettracker:tracker'], Text.of('ПКМ на мобе, чтобы добавить в книгу').darkGray())

  e.add(['waystones:return_scroll'], Text.of('Телепортирует к ближайшему обелиску').green())
  e.add(['waystones:bound_scroll'], Text.of('Телепортирует к ранее привязанному обелиску (ПКМ по обелиску)').green())
  e.add(['waystones:warp_scroll'], Text.of('Телепортирует к любому обелиску на выбор').green())

  e.add(['railways:remote_lens'], Text.of('Позволяет управлять помощником дистанционно').green())
  e.add(['railways:conductor_whistle'], Text.of('Даёт команду помощнику в поезде приехать на указанные пути').green())
  
})
