// Пустая петиция не открывает редактор планшета и не ставится блоком.
// Заполненную открывает сам планшет Create, только для чтения.

function petitionOf(item) {
	return item && item.id == 'create:clipboard' && item.nbt && item.nbt.zarya_petition
}

onEvent('item.entity_interact', event => {
	if (String(event.target.type) != 'minecraft:villager') return
	if (!petitionOf(event.player.mainHandItem) && !petitionOf(event.player.offHandItem)) return
	// После отмены игра повторяет клик второй рукой, и без этого открылась бы торговля
	event.cancel()
	if (!petitionOf(event.item)) return
	let player = event.player.minecraftEntity
	// Без задержки следом сработает ПКМ предметом и откроет окно планшета
	player.getCooldowns().addCooldown(player.getItemInHand(event.hand).getItem(), 10)
})

onEvent('item.right_click', event => {
	if (!petitionOf(event.item)) return
	if (!event.item.nbt.Pages) event.cancel()
})

onEvent('block.right_click', event => {
	if (!petitionOf(event.item)) return
	if (!event.item.nbt.Pages || event.player.minecraftEntity.isShiftKeyDown()) event.cancel()
})
