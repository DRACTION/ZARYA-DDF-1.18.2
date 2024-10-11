onEvent('item.modification', event => {
  event.modify('pettracker:tracker', item => {
    item.rarity = Rarity.UNCOMMON
  })
})
