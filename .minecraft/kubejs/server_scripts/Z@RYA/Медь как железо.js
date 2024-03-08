onEvent('recipes', e => {
	
	e.replaceInput({id: 'minecraft:shears'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'minecraft:bucket'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'minecraft:blast_furnace'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'minecraft:piston'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'minecraft:compass'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'minecraft:cauldron'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'minecraft:hopper'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'doggytalents:food_bowl'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'supplementaries:bomb'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'supplementaries:wind_vane'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'farmersdelight:cooking_pot'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'toolbelt:belt'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'jecalculation:item_calculator_craft'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'jecalculation:item_calculator_math'}, 'minecraft:iron_ingot', '#zarya:copper_iron')
	e.replaceInput({id: 'storagedrawers:compacting_drawers_3'}, 'minecraft:iron_ingot', '#zarya:copper_iron')

})

onEvent('item.tags', e => {
	e.add('zarya:copper_iron', ['minecraft:iron_ingot', 'minecraft:copper_ingot'])
})