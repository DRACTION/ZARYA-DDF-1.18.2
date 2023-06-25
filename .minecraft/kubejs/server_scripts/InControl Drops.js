// onEvent("lootjs", (event) => {
	
// 	event.enableLogging();

// 	event
// 		.addEntityLootModifier("minecraft:creeper")
// 		.killedByPlayer()
//   		.entityPredicate((entity) => {
//   			const nbt = entity.asKJS().fullNBT;
//   			if ("CustomName" in nbt) {
//   				return nbt.CustomName == '{"color":"red","text":"Берсерк"}';
//   			} else {
//   				return false;
//   			}
//   		})
//         .addLoot("minecraft:diamond");

// 	// var Incontrol = {CustomName:'{"text":"Powered Creeper"}'}

// 	// event.enableLogging();

// 	// event
// 	// 	.addEntityLootModifier("minecraft:creeper")
// 	// 	.killedByPlayer()
// 	// 	.matchEntity((entity) => {
// 	// 		entity.nbt(Incontrol);
//  //        }) 
//  //        .addLoot("minecraft:diamond");

// })
