onEvent('recipes', e => {
	//////////////// Камень фамильяра (для воскрешения собаки) ////////////////
	e.shapeless('kubejs:trained_doggy_revive_stone', ['tombstone:gemstone_of_familiar', '#doggytalents:treats'])
	//////////////// Обратное преобразование ////////////////
	e.shapeless('tombstone:gemstone_of_familiar', ['kubejs:trained_doggy_revive_stone'])
})
