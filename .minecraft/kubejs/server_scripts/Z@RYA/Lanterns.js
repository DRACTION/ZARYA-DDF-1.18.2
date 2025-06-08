onEvent('recipes', event => {
	////////////////// Фонарь //////////////////
	event.remove({ id:"minecraft:lantern" })
	event.shaped('minecraft:lantern', [
		' O ',
		'RCR'
	], {
		O: '#forge:nuggets/iron',
		R: '#forge:rods/iron',
		C: '#supplementaries:candle_holders'
	})
	event.shaped('minecraft:lantern', [
		' O ',
		'RCR',
		' P '
	], {
		O: '#forge:nuggets/iron',
		R: '#forge:rods/iron',
		C: '#minecraft:candles',
		P: '#forge:plates/iron'
	})
	event.shaped('minecraft:lantern', [
		' O ',
		'RCR',
		' P '
	], {
		O: '#forge:nuggets/iron',
		R: '#forge:rods/iron',
		C: 'minecraft:blaze_powder',
		P: '#forge:plates/iron'
	})
	////////////////// Медный фонарь //////////////////
	event.remove({ id:"supplementaries:copper_lantern" })
	event.shaped('supplementaries:copper_lantern', [
		' O ',
		'RCR',
		' P '
	], {
		O: '#forge:nuggets/copper',
		R: '#forge:rods/copper',
		C: '#minecraft:candles',
		P: '#forge:plates/copper'
	})
	event.shaped('supplementaries:copper_lantern', [
		' O ',
		'RCR',
		' P '
	], {
		O: '#forge:nuggets/copper',
		R: '#forge:rods/copper',
		C: 'minecraft:blaze_powder',
		P: '#forge:plates/copper'
	})
	////////////////// Латунный фонарь //////////////////
	event.remove({ id:"supplementaries:brass_lantern" })
	event.shaped('supplementaries:brass_lantern', [
		' O ',
		'RCR',
		' P '
	], {
		O: '#forge:nuggets/brass',
		R: '#forge:rods/brass',
		C: '#minecraft:candles',
		P: '#forge:plates/brass'
	})
	event.shaped('supplementaries:brass_lantern', [
		' O ',
		'RCR',
		' P '
	], {
		O: '#forge:nuggets/brass',
		R: '#forge:rods/brass',
		C: 'minecraft:blaze_powder',
		P: '#forge:plates/brass'
	})
	////////////////// Фонарь душ //////////////////
	event.remove({ id:"minecraft:soul_lantern" })
})