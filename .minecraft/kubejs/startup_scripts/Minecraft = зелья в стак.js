onEvent('item.modification', event => {
  event.modify('minecraft:potion', item => {
    item.maxStackSize = 16
  })
  event.modify('minecraft:splash_potion', item => {
    item.maxStackSize = 16
  })
  event.modify('minecraft:lungering_potion', item => {
    item.maxStackSize = 16
  })
})