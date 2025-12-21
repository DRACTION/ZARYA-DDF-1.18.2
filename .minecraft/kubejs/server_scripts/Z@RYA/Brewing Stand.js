onEvent('recipes', event => {
	////////////////// Зельеварка //////////////////
	event.remove({ id:"minecraft:brewing_stand" })
	modifyShapedID(
		event, //Event
		"minecraft:brewing_stand", //Result
		"minecraft:brewing_stand", //Craft ID
		1, //Count
		[
		'T T', ' R ','CCC'], //pattern
		{
			T: 'minecraft:tripwire_hook',
			R: '#forge:rods/blaze',
			C: '#minecraft:stone_crafting_materials'
		} //Ingredients
	)
})