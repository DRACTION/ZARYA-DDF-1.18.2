let temp = [
	'nordic',
	'dunmer',
	'venthyr',
	'bone/skeleton',
	'bone/wither',
	'royal',
	'necrolord'
]
let chippedSmokers = []
let chippedChest = ['fantasyfurniture:decorations/cookie_jar']
let chippedDoubleChest = []
let chippedBedSingle = []
let chippedBedDouble = []
temp.forEach(x => {
	if (!x.includes('dunmer')) {chippedSmokers.push(`fantasyfurniture:${x}/oven`)}
	chippedChest.push(
		`fantasyfurniture:${x}/drawer`,
		`fantasyfurniture:${x}/counter`,
		`fantasyfurniture:${x}/dresser`,
		`fantasyfurniture:${x}/lockbox`,
		`fantasyfurniture:${x}/desk_left`,
		`fantasyfurniture:${x}/desk_right`)
	chippedDoubleChest.push(
		`fantasyfurniture:${x}/chest`,
		`fantasyfurniture:${x}/wardrobe_bottom`,
		`fantasyfurniture:${x}/bookshelf`)
	chippedBedSingle.push(`fantasyfurniture:${x}/bed_single`)
	chippedBedDouble.push(`fantasyfurniture:${x}/bed_double`)
})

temp = [
	[chippedSmokers, '#zarya:chipped/smoker', 'minecraft:smoker'],
	[chippedChest, '#zarya:chipped/chest', 'minecraft:chest'],
	[chippedDoubleChest, '#zarya:chipped/doublechest', '2x minecraft:chest'],
	[chippedBedSingle, '#zarya:chipped/bed', 'minecraft:white_bed'],
	[chippedBedDouble, '#zarya:chipped/doublebed', '2x minecraft:white_bed']
]

onEvent('recipes', e => {
	temp.forEach(x => {
		x[0].forEach(y => {
			e.shapeless(y, [
				x[2],
				'#forge:clay_ball',
				'#minecraft:planks',
				'#minecraft:stone_crafting_materials',
				'fantasyfurniture:furniture_station']
			).keepIngredient('fantasyfurniture:furniture_station')
		})
		e.shapeless(x[2], x[1])
		chipped(e, 'carpenters_table', x[1].substring(1))
	})
	chipped(e, 'carpenters_table', 'zarya:chipped/fantasyfurniture')

	let soapArr = [
		'fantasyfurniture:decorations/brewing_cauldron',
		'fantasyfurniture:decorations/floating_tomes',
		'fantasyfurniture:decorations/potion_bottles_dyeable',
		'fantasyfurniture:decorations/royal_crown',
		'fantasyfurniture:decorations/royal_chalices',
		'fantasyfurniture:decorations/royal_cushioned_crown',
		'fantasyfurniture:decorations/royal_floor_cushion',
		'fantasyfurniture:decorations/royal_wall_mirror_small',
		'fantasyfurniture:decorations/royal_wall_mirror_large',
		'fantasyfurniture:royal/wool',
		'fantasyfurniture:royal/carpet',
		'fantasyfurniture:royal/table_small',
		'fantasyfurniture:royal/table_wide',
		'fantasyfurniture:royal/table_large',
		'fantasyfurniture:royal/stool',
		'fantasyfurniture:royal/cushion',
		'fantasyfurniture:royal/drawer',
		'fantasyfurniture:royal/shelf',
		'fantasyfurniture:royal/sofa',
		'fantasyfurniture:royal/desk_left',
		'fantasyfurniture:royal/desk_right',
		'fantasyfurniture:royal/chair',
		'fantasyfurniture:royal/bench',
		'fantasyfurniture:royal/bookshelf',
		'fantasyfurniture:royal/chest',
		'fantasyfurniture:royal/dresser',
		'fantasyfurniture:royal/wardrobe_bottom',
		'fantasyfurniture:royal/wardrobe_top',
		'fantasyfurniture:royal/bed_single',
		'fantasyfurniture:royal/bed_double',
		'fantasyfurniture:royal/door_single',
		'fantasyfurniture:royal/door_double',
		'fantasyfurniture:royal/lockbox',
		'fantasyfurniture:royal/counter',
		'fantasyfurniture:royal/oven'
	]
	soapArr.forEach(x => {
		e.shapeless(x, [x, 'supplementaries:soap'])
	})
})

onEvent('item.tags', event => {
	temp.forEach(x => {
		event.add(x[1].substring(1), x[0])
		event.remove('fantasyfurniture:craftable', x[0])
	})
	event.remove('minecraft:carpets', /fantasyfurniture:.*/)
	event.remove('minecraft:wool', /fantasyfurniture:.*/)
	event.remove('minecraft:wooden_doors', /fantasyfurniture:.*/)
	event.remove('minecraft:beds', /fantasyfurniture:.*/)
	event.remove('minecraft:candles', /fantasyfurniture:.*/)
	event.add('zarya:chipped/fantasyfurniture', [
		/fantasyfurniture:.*\/wool/,
		/fantasyfurniture:.*\/carpet/,
		/fantasyfurniture:.*_light/,
		/fantasyfurniture:.*\/table.*/,
		/fantasyfurniture:.*\/stool/,
		/fantasyfurniture:.*\/cushion/,
		/fantasyfurniture:.*\/painting.*/,
		/fantasyfurniture:.*\/shelf/,
		/fantasyfurniture:.*\/sofa/,
		/fantasyfurniture:.*\/chair/,
		/fantasyfurniture:.*\/bench/,
		/fantasyfurniture:.*\/wardrobe_top/,
		/fantasyfurniture:.*\/chandelier/,
		/fantasyfurniture:.*\/door.*/,
		/fantasyfurniture:.*basket.*/,
		/fantasyfurniture:.*bolts.*/,
		/fantasyfurniture:.*bookstack.*/,
		/fantasyfurniture:.*bowl.*/,
		/fantasyfurniture:.*tankards.*/,
		/fantasyfurniture:.*mushrooms.*/,
		/fantasyfurniture:.*coin_.*/,
		/fantasyfurniture:.*muffins_.*/,
		/fantasyfurniture:.*paper_stack.*/,
		/fantasyfurniture:.*cauldron.*/,
		/fantasyfurniture:.*_tomes.*/,
		/fantasyfurniture:.*gravestone.*/,
		/fantasyfurniture:.*hanging.*/,
		/fantasyfurniture:.*spider.*/,
		/fantasyfurniture:.*pumpkin.*/,
		/fantasyfurniture:.*_chain.*/,
		/fantasyfurniture:.*potion.*/,
		/fantasyfurniture:.*fairy.*/,
		/fantasyfurniture:.*presents.*/,
		/fantasyfurniture:.*snowballs.*/,
		/fantasyfurniture:.*stocking.*/,
		/fantasyfurniture:.*ions\/nordic_.*/,
		/fantasyfurniture:.*ions\/venthyr_.*/,
		/fantasyfurniture:.*ions\/dunmer_.*/,
		/fantasyfurniture:.*ions\/bone_.*/,
		/fantasyfurniture:.*ions\/royal_.*/,
		/fantasyfurniture:.*ions\/necrolord_.*/
	])
})
