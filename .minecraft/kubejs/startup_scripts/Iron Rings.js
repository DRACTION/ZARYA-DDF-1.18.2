onEvent('item.registry', event => {
	//////////////// Железное кольцо ////////////////
	event
		.create('iron_ring')
		.texture('zarya:item/iron_ring')

	//////////////// Кольчужное полотно ////////////////
	event
		.create('chainmail_fabric')
		.texture('zarya:item/chainmail_fabric')
})
