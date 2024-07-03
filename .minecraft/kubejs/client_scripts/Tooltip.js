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
  
})
