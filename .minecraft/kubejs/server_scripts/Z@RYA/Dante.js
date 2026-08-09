// todo = особенности у монстров

let za_ArenaDante = {
	dimension: 'minecraft:overworld', //todo 'minecraft:the_nether'
	wrongDimensionMsg: '§7Ритуал можно начать только в §6Аду...',
	prefix: '§4§l[Круги Ада]§r',
	layers: [
		[
			'      B      BBBBBBBBB       B      ',
			'      BB  BBBBBNNNNNNBBBBB  BB      ',
			'      BBBQQNNNNQQQQQQNNNNQQBBB      ',
			'       BBBQQQQQQQQQQQQQQQQBBB       ',
			'      QBBBBBQQQQQGQQQQQQBBBBBQ      ',
			'     BQQBNNBBQQQQQQQQQBBBNNBQQB     ',
			'    BBNQBNQNBBQQQQQQQBBNNQNBQNBB    ',
			'   BBNQQBNQQNBBBQQQBBBNQQQNBQQNBB   ',
			'   BBNQQBBNQQNNBBQBBNNQQQQNBQQQNBB  ',
			'  BBNQQQQBNQQQQNQBBNQQQQQNBBQQQNBB  ',
			' BBNQQQQQBNQQQQQBBNQBQQQQNBQQQQQNB  ',
			' BBNQQQQQQBNQQQBBNQNBBQQQNBQQQQQNBB ',
			' BNQQQGQQQBNQQBBNQQQNBBQQNBQQGQQNBB ',
			'BBNQQQQQQQBNQBBNQQQQQNBBQQBQQQQQQNB ',
			'BBNQQQQQQQBNQQNQQQQQQQNBBBQQQQQQQNBB',
			'BBNQQQQQBQBBNQQQQQQQQQQNNBBBQQQQQNBB',
			'BBNQQQQBBQQBNQQQQQQQQQQQQNNBBQQQQNBB',
			'BBNQQQBBNQQBBNQQQQQQQQQNQQQNBBQQQNBB',
			'BBNQQBBNQQQBBNQQQQQQQQQNBQQQNBBQQQBB',
			'BBQQBBNQQQQQBBNQQQQQQQNBBQQQQNBBQQQB',
			'BQQBBNQQQQQQBBNQQQQQQQNBQQQQQQNBBQQQ',
			'QQBBNQQQQQQQQQQQQQQQQNBBQQQQQQQNBBQQ',
			'QBBNNNNNNNNNNNNNNNNNQNBQNNNNNNNNNBBQ',
			'BBBBBBBBBBBBBBBBBBBBQNBQBBBBBBBBBBBB',
			' QQQQQQQQQQQQQQQQQQQQNBQQQQQQQQQQQQ ',
			' QBNQQQQQQQQQBBQQQQQNBBQQQQQQQQQNBQ ',
			'  BBNQQQQQQQQQBBNQQQNBQQQQQQQQQNBB  ',
			'   BBNQQQQGQQQBBNQQNBBQQQQGQQQNBB   ',
			'    BBNQQQQQQQBBNQQNBBQQQQQQQNBB    ',
			'     BBNQQQQQQQBBNQNBQQQQQQQNBB     ',
			'      BBNQQQQQQBBNNBBQQQQQQNBB      ',
			'       BBNNQQQQBBBNBQQQQQNNBB       ',
			'        BBBNNQQQBBBBQQQNNBBB        ',
			'          BBBNNQBBBBQNNBBB          ',
			'            BBBBQBBQBBBB            ',
			'              QQQBBQQQ              ',
			'                 BB                 '
		],
		[
			'      A      AAAAAAAAA       A      ',
			'      AA  AAAAAAAAAAAAAAAA  AA      ',
			'      AAAAAAAAAAAAAAAAAAAAAAAA      ',
			'       AAAAAAAAAAAAAAAAAAAAAA       ',
			'      AAAAAAAAAAAPAAAAAAAAAAAA      ',
			'     AAAAAAAAAAAAAAAAAAAAAAAAAA     ',
			'    AAAAAAAAAAAAAAAAAAAAAAAAAAAA    ',
			'   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   ',
			'   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
			'  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			' AAAAAPAAAAAAAAAAAAAAAAAAAAAAPAAAAA ',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAASSSSSAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAASQQQSAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAASQGQSAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAASQQQSAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAASSSSSAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			'  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
			'   AAAAAAAPAAAAAAAAAAAAAAAPAAAAAA   ',
			'    AAAAAAAAAAAAAAAAAAAAAAAAAAAA    ',
			'     AAAAAAAAAAAAAAAAAAAAAAAAAA     ',
			'      AAAAAAAAAAAAAAAAAAAAAAAA      ',
			'       AAAAAAAAAAAAAAAAAAAAAA       ',
			'        AAAAAAAAAAAAAAAAAAAA        ',
			'          AAAAAAAAAAAAAAAA          ',
			'            AAAAAAAAAAAA            ',
			'              AAAAAAAA              ',
			'                 AA                 '
		],
		[
			'      A      AAAAAAAAA       A      ',
			'      AA  AAAAAAAAAAAAAAAA  AA      ',
			'      AAAAAAAAAAAAAAAAAAAAAAAA      ',
			'       AAAAAAAAAAAAAAAAAAAAAA       ',
			'      AAAAAAAAAAAAAAAAAAAAAAAA      ',
			'     AAAAAAAAAAAAAAAAAAAAAAAAAA     ',
			'    AAAAAAAAAAAAAAAAAAAAAAAAAAAA    ',
			'   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   ',
			'   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
			'  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
			'  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
			'   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   ',
			'    AAAAAAAAAAAAAAAAAAAAAAAAAAAA    ',
			'     AAAAAAAAAAAAAAAAAAAAAAAAAA     ',
			'      AAAAAAAAAAAAAAAAAAAAAAAA      ',
			'       AAAAAAAAAAAAAAAAAAAAAA       ',
			'        AAAAAAAAAAAAAAAAAAAA        ',
			'          AAAAAAAAAAAAAAAA          ',
			'            AAAAAAAAAAAA            ',
			'              AAAAAAAA              ',
			'                 AA                 '
		]
	],
	layerEmpty: [
		'      A      AAAAAAAAA       A      ',
		'      AA  AAAAAAAAAAAAAAAA  AA      ',
		'      AAAAAAAAAAAAAAAAAAAAAAAA      ',
		'       AAAAAAAAAAAAAAAAAAAAAA       ',
		'      AAAAAAAAAAAAAAAAAAAAAAAA      ',
		'     AAAAAAAAAAAAAAAAAAAAAAAAAA     ',
		'    AAAAAAAAAAAAAAAAAAAAAAAAAAAA    ',
		'   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   ',
		'   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
		'  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
		' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
		' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
		' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
		' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ',
		'  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ',
		'   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   ',
		'    AAAAAAAAAAAAAAAAAAAAAAAAAAAA    ',
		'     AAAAAAAAAAAAAAAAAAAAAAAAAA     ',
		'      AAAAAAAAAAAAAAAAAAAAAAAA      ',
		'       AAAAAAAAAAAAAAAAAAAAAA       ',
		'        AAAAAAAAAAAAAAAAAAAA        ',
		'          AAAAAAAAAAAAAAAA          ',
		'            AAAAAAAAAAAA            ',
		'              AAAAAAAA              ',
		'                 AA                 '
	],
	emptyHeight: 10,
	blocks: {
		A: 'minecraft:air',
		Q: 'minecraft:quartz_bricks',
		S: 'minecraft:quartz_slab',
		N: 'minecraft:nether_bricks',
		B: 'minecraft:polished_blackstone_bricks',
		P: 'irons_spellbooks:pedestal',
		E: 'minecraft:beacon',
		G: 'minecraft:glowstone'
	},
	pedestalItems: [
		'endrem:nether_eye',                        // Око Ада
		'endrem:magical_eye',                       // Магическое Око
		'irons_spellbooks:lightning_bottle',        // Бутылка с молнией
		'bosses_of_mass_destruction:ancient_anima', // Древняя душа
		'bosses_of_mass_destruction:void_thorn'     // Пустотный шип
	],
	spawnerEntity: { //todo особенности у монстров
		1: {
			ArmorItems: [
				Item.of('minecraft:netherite_boots'),
				Item.of('minecraft:netherite_leggings'),
				Item.of('minecraft:netherite_chestplate'),
				Item.of('minecraft:netherite_helmet')
			],
			id:'minecraft:zombie'
		},
		2: {
			id:'minecraft:witch'
		},
		3: {
			id:'minecraft:husk'
		},
		4: {
			id:'minecraft:vindicator'
		},
		5: {
			id:'minecraft:piglin_brute',
			IsImmuneToZombification: true
		},
		6: {
			id:'irons_spellbooks:necromancer'
		},
		7: {
			id:'minecraft:creeper'
		}
	},
	guardianEntitys: { //todo = особенности каждого стража
		1: {
			wakeupMsg: '§2Страж §9Харон §2пробудился...',
			arr: [
				{
					name: 'Харон',
					id: 'irons_spellbooks:citadel_keeper',
					bossbarId: 'zarya:charon',
					func_setNBT: ((entity, nbt) => {
						nbt.HandItems[0] = Item.of('epicfight:netherite_tachi');
						// console.log(nbt.Health)
						nbt.Health = nbt.Health * 10;
						za_ArenaDante.func_setMobAttribute(nbt, 'generic.max_health', nbt.Health)
						// console.log(nbt.Health)
					})
				}
			]
		},
		2: {
			wakeupMsg: '§2Страж §9Минос §2пробудился...',
			arr: [
				{
					name: 'Минос',
					id: 'minecraft:illusioner',
					bossbarId: 'zarya:minos',
					func_setNBT: ((entity, nbt) => {})
				}
			]
		},
		3: {
			wakeupMsg: '§2Страж §9Цербер §2пробудился...',
			arr: [
				{
					name: 'Цербер',
					id: 'mutantmonsters:mutant_zombie',
					bossbarId: 'zarya:cerberus',
					func_setNBT: ((entity, nbt) => {})
				}
			]
		},
		4: {
			wakeupMsg: '§2Страж §9Плутос §2пробудился...',
			arr: [
				{
					name: 'Плутос',
					id: 'irons_spellbooks:archevoker',
					bossbarId: 'zarya:plutus',
					func_setNBT: ((entity, nbt) => {})
				}
			]
		},
		5: {
			wakeupMsg: '§2Страж §9Флегьяс §2пробудился...',
			arr: [
				{
					name: 'Флегьяс',
					id: 'mutantmonsters:mutant_skeleton',
					bossbarId: 'zarya:flegyas',
					func_setNBT: ((entity, nbt) => {})
				}
			]
		},
		6: {
			wakeupMsg: '§2Стражи §9Алекто§2, §9Мигера §2и §9Тисифона §2пробудились...',
			arr: [
				{
					name: 'Алекто',
					id: 'minecraft:witch',
					bossbarId: 'zarya:alecto',
					func_setNBT: ((entity, nbt) => {})
				},
				{
					name: 'Мигера',
					id: 'minecraft:witch',
					bossbarId: 'zarya:miguera',
					func_setNBT: ((entity, nbt) => {})
				},
				{
					name: 'Тисифона',
					id: 'minecraft:witch',
					bossbarId: 'zarya:tisiphone',
					func_setNBT: ((entity, nbt) => {})
				}
			]
		},
		7: {
			wakeupMsg: '§2Стражи §9Хирон §2и §9Несс §2пробудились...',
			arr: [
				{
					name: 'Хирон',
					id: 'mutantmonsters:mutant_enderman',
					bossbarId: 'zarya:chiron',
					func_setNBT: ((entity, nbt) => {})
				},
				{
					name: 'Несс',
					id: 'mutantmonsters:mutant_creeper',
					bossbarId: 'zarya:ness',
					func_setNBT: ((entity, nbt) => {})
				}
			]
		},
		8: {
			wakeupMsg: '§9Злые Щели §2вылезли наружу...',
			arr: [
				{
					name: 'Злые Щели',
					id: 'irons_spellbooks:dead_king',
					func_setNBT: ((entity, nbt) => {
						nbt.HandItems[1] = Item.of('irons_spellbooks:blood_staff')
					})
				},
				{
					name: 'Злые Щели',
					id: 'irons_spellbooks:dead_king',
					func_setNBT: ((entity, nbt) => {
						nbt.HandItems[1] = Item.of('irons_spellbooks:blood_staff')
					})
				},
				{
					name: 'Злые Щели',
					id: 'irons_spellbooks:dead_king',
					func_setNBT: ((entity, nbt) => {
						nbt.HandItems[1] = Item.of('irons_spellbooks:blood_staff')
					})
				}
			]
		},
		9: {
			wakeupMsg: '§9§lА вот и §4§lОН...',
			arr: [
				{
					name: 'Люцифер',
					id: 'minecraft:wither',
					func_setNBT: ((entity, nbt) => {
						if (nbt.ForgeData === undefined) {
							nbt.ForgeData = {'progressivebosses:difficulty': 8}
						}
						nbt.ForgeData.putFloat('progressivebosses:difficulty', 8);
					})
				}
			]
		}
	},
	startStageMessage: {
		1: '§2Начат §6первый §2круг Ада - §d"Лимб"',
		2: '§2Начат §6второй §2круг Ада - §d"Похоть"',
		3: '§2Начат §6третий §2круг Ада - §d"Чревоугодие"',
		4: '§2Начат §6четвертый §2круг Ада - §d"Жадность"',
		5: '§2Начат §6пятый §2круг Ада - §d"Гнев"',
		6: '§2Начат §6шестой §2круг Ада - §d"Ересь"',
		7: '§2Начат §6седьмой §2круг Ада - §d"Насилие"',
		8: '§2Начат §6восьмой §2круг Ада - §d"Обман"',
		9: '§2Начат §6девятый §2круг Ада - §d"Предательство"'
	},
	completeStageMessage: {
		1: '§6Пройден первый круг Ада',
		2: '§6Пройден второй круг Ада',
		3: '§6Пройден третий круг Ада',
		4: '§6Пройден четвертый круг Ада',
		5: '§6Пройден пятый круг Ада',
		6: '§6Пройден шестой круг Ада',
		7: '§6Пройден седьмой круг Ада',
		8: '§6Пройден восьмой круг Ада',
		9: '§6§lПройдены все круги Ада'
	},

	func_buildStage: ((event) => {
		/////////// Создание блока стадии ///////////
		let stageLevel = event.server.getLevel(event.server.persistentData.za_DanteArena.dimension);
		let stageNumber = event.server.persistentData.za_DanteArena.currentStage;
		let firstStagePos = event.server.persistentData.za_DanteArena.firstStagePos;
		let stageBC = stageLevel.getBlock(firstStagePos.x, firstStagePos.y + stageNumber - 1, firstStagePos.z);
		stageBC.set(`kubejs:dante_stage_${stageNumber}`);
		
		let barrier = 'minecraft:barrier';
		let bedrock = 'minecraft:bedrock';
		// console.log(za_ArenaDante.spawnerEntity[stageNumber])
		let spawnerNBT = {
			SpawnData: {
				entity: {
					za_DanteStage: stageNumber,
					za_DanteRemainingKills: 15,
					CanPickUpLoot: false,
					PersistenceRequired: true,
					ActiveEffects: [
						{
							Amplifier: true,
							Duration: 19999980,
							Id: 12,
							ShowParticles: false
						}
					],
					KubeJSPersistentData: {
						za_DanteSpawnerPos: {
							x: 0,
							y: 0,
							z: 0
						}
					}
				}
			}
		}
		Object.assign(spawnerNBT.SpawnData.entity, za_ArenaDante.spawnerEntity[stageNumber]);
		// console.log(spawnerNBT)
		if (stageNumber == 8) {
			za_ArenaDante.func_removeArena(event, true);
			event.server.persistentData.za_DanteArena.firstSpawnersPos.forEach(firstSpawnerPos => {
				//////////////////// !!!ВЗРЫВЫ!!! ////////////////////
				stageLevel.createExplosion(firstSpawnerPos.x, firstSpawnerPos.y, firstSpawnerPos.z)
					.strength(5)
					.damagesTerrain(false)
					.explode();
			})
		} else if (stageNumber == 9) {
			// Ничего
		} else {
			event.server.persistentData.za_DanteArena.firstSpawnersPos.forEach(firstSpawnerPos => {
				let spawnerContainer = stageLevel.getBlock(
					firstSpawnerPos.x,
					firstSpawnerPos.y + stageNumber - 1,
					firstSpawnerPos.z);
				if (stageNumber == 1) {
					//////// Убрать предмет пьедестала (чтобы не дропался) ////////
					let nbt = spawnerContainer.getDown().getEntityData();
					nbt.heldItem.id = 'minecraft:air';
					spawnerContainer.getDown().setEntityData(nbt);
				}
				/////////// Создание спавнера ///////////
				spawnerContainer.set('minecraft:spawner')
				// console.log(spawnerContainer.getEntityData())
				spawnerNBT.SpawnData.entity.KubeJSPersistentData.za_DanteSpawnerPos = {
					x: spawnerContainer.getX(),
					y: spawnerContainer.getY(),
					z: spawnerContainer.getZ()
				}
				spawnerContainer.mergeEntityData(spawnerNBT);
				// console.log(spawnerContainer.getEntityData())
				if (stageNumber == 1) {
					//////////////// Оболочка - Дно ////////////////
					spawnerContainer.offset( 0, -1,  0).set(barrier);
					spawnerContainer.offset( 0, -1,  1).set(barrier);
					spawnerContainer.offset( 0, -1, -1).set(barrier);
					spawnerContainer.offset( 1, -1,  0).set(barrier);
					spawnerContainer.offset( 1, -1,  1).set(bedrock);
					spawnerContainer.offset( 1, -1, -1).set(bedrock);
					spawnerContainer.offset(-1, -1,  0).set(barrier);
					spawnerContainer.offset(-1, -1,  1).set(bedrock);
					spawnerContainer.offset(-1, -1, -1).set(bedrock);
					//////////////// Оболочка - Бока ////////////////
					spawnerContainer.offset( 0,  0,  1).set(barrier);
					spawnerContainer.offset( 0,  0, -1).set(barrier);
					spawnerContainer.offset( 1,  0,  0).set(barrier);
					spawnerContainer.offset( 1,  0,  1).set(bedrock);
					spawnerContainer.offset( 1,  0, -1).set(bedrock);
					spawnerContainer.offset(-1,  0,  0).set(barrier);
					spawnerContainer.offset(-1,  0, -1).set(bedrock);
					spawnerContainer.offset(-1,  0,  1).set(bedrock);
				}
				//////////////// Оболочка - Верх ////////////////
				spawnerContainer.offset( 0,  1,  0).set(barrier);
				spawnerContainer.offset( 0,  1,  1).set(barrier);
				spawnerContainer.offset( 0,  1, -1).set(barrier);
				spawnerContainer.offset( 1,  1,  0).set(barrier);
				spawnerContainer.offset( 1,  1,  1).set(bedrock);
				spawnerContainer.offset( 1,  1, -1).set(bedrock);
				spawnerContainer.offset(-1,  1,  0).set(barrier);
				spawnerContainer.offset(-1,  1, -1).set(bedrock);
				spawnerContainer.offset(-1,  1,  1).set(bedrock);

				//////////////////// ВЗРЫВЫ!!! ////////////////////
				stageLevel.createExplosion(spawnerContainer.getX(), spawnerContainer.getY(), spawnerContainer.getZ())
					.strength(5)
					.damagesTerrain(false)
					.explode();
			})
		};
		event.server.tell(`${za_ArenaDante.prefix} ${za_ArenaDante.startStageMessage[stageNumber]}`)
	}),

	func_removeArena: ((event, onlySpawners) => {
		/////////// Удаляем спавнеры ///////////
		let stageLevel = event.server.getLevel(event.server.persistentData.za_DanteArena.dimension);
		let maxHeightSpawners = Math.min(event.server.persistentData.za_DanteArena.currentStage, 7);
		event.server.persistentData.za_DanteArena.firstSpawnersPos.forEach(pos => {
			for (var i = maxHeightSpawners; i >= -1; i--) {
				stageLevel.getBlock(pos.x - 1, pos.y + i, pos.z - 1).set('minecraft:air')
				stageLevel.getBlock(pos.x    , pos.y + i, pos.z - 1).set('minecraft:air')
				stageLevel.getBlock(pos.x + 1, pos.y + i, pos.z - 1).set('minecraft:air')
				stageLevel.getBlock(pos.x - 1, pos.y + i, pos.z    ).set('minecraft:air')
				stageLevel.getBlock(pos.x    , pos.y + i, pos.z    ).set('minecraft:air')
				stageLevel.getBlock(pos.x + 1, pos.y + i, pos.z    ).set('minecraft:air')
				stageLevel.getBlock(pos.x - 1, pos.y + i, pos.z + 1).set('minecraft:air')
				stageLevel.getBlock(pos.x    , pos.y + i, pos.z + 1).set('minecraft:air')
				stageLevel.getBlock(pos.x + 1, pos.y + i, pos.z + 1).set('minecraft:air')
			}
		})

		if (onlySpawners) {return}
		/////////// Удаляем следы ритуала ///////////
		let firstStagePos = event.server.persistentData.za_DanteArena.firstStagePos;
		for (var i = event.server.persistentData.za_DanteArena.currentStage - 1; i >= 0; i--) {
			stageLevel.getBlock(firstStagePos.x, firstStagePos.y + i, firstStagePos.z).set('minecraft:air')
		}

		event.getLevel().getEntities().filter(entity => {
			return (entity.getPersistentData().contains('za_DanteSpawnerPos')
				|| entity.getPersistentData().contains('za_DanteGuardian'))
		}).forEach(entity => {
			// if (entity.getPersistentData().contains('za_DanteGuardian')) {
			// 	// Не работает, т.к. косяк в коде kubejsadditions, игнорируется булево (всегда true). Обходим
			// 	// entity.getLevel().forceLoadChunk(event.getPrevX(), event.getPrevZ(), false);
			// 	if (entity.getLevel().getServerLevel() != null) {
			// 		let chunkPos = entity.getLevel().minecraftLevel.getChunkAt(entity.getMinecraftEntity().blockPosition()).getPos();
			// 		entity.getLevel().getServerLevel().setChunkForced(chunkPos.x, chunkPos.z, false);
			// 	}
			// };
			if (entity.getPersistentData().contains('za_DanteBossBar')) {
				event.server.runCommandSilent(`bossbar remove ${entity.getPersistentData().za_DanteBossBar}`);
			};
			entity.remove();
		})

		stageLevel.createExplosion(firstStagePos.x, firstStagePos.y, firstStagePos.z)
			.strength(5)
			.causesFire(true)
			.explode();

		event.server.persistentData.remove('za_DanteArena')
	}),

	func_getParameters: ((rotation, stagePos, offsetY) => {
		let result = {
			incrX: 0,
			incrZ: 0,
			rowXcolumnZ: false,
			firstPos: null
		};
		if (rotation == 1) {
			result.incrX = 1;
			result.incrZ = 1;
			result.rowXcolumnZ = true;
		} else if (rotation == 2) {
			result.incrX = -1;
			result.incrZ = 1;
			result.rowXcolumnZ = false;
		} else if (rotation == 3) {
			result.incrX = -1;
			result.incrZ = -1;
			result.rowXcolumnZ = true;
		} else if (rotation == 4) {
			result.incrX = 1;
			result.incrZ = -1;
			result.rowXcolumnZ = false;
		} else {return null};

		if (result.rowXcolumnZ) {
			result.firstPos = stagePos.offset(-result.incrX*18, offsetY, -result.incrZ*17)
		} else {
			result.firstPos = stagePos.offset(-result.incrX*17, offsetY, -result.incrZ*18)
		};
		return result;
	}),

	func_setMobAttribute: ((nbt, name, v) => {
		let maxHealth = {
			Base: v,
			Name: name
		};
		if (nbt.contains('Attributes')) {
			nbt.Attributes.add(nbt.Attributes.size(), maxHealth);
		} else {
			nbt.Attributes = [maxHealth]
		};
	}),

	func_getRandOffsetXZ: ((min, max) => {
		let k = max - min + 1;
		let rX = Math.floor(Math.random() * k) + min;  if (Math.round(Math.random()) == 1) {rX = -rX};
		if (rX >= min) {k += min; min = 0;} 
		let rZ = Math.floor(Math.random() * k) + min;  if (Math.round(Math.random()) == 1) {rZ = -rZ};
		if (Math.round(Math.random()) == 1) {[rX, rZ] = [rZ, rX]};
		// console.log(`X = ${rX} Z = ${rZ}`)
		return {x: rX, z: rZ}
	}),

	func_spawnParticles: ((event, particle, pos) => {
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()  }.0 ${pos.getY()+1}.0 ${pos.getZ()  }.0`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.0 ${pos.getY()+1}.0 ${pos.getZ()  }.0`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()  }.0 ${pos.getY()  }.0 ${pos.getZ()  }.0`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.0 ${pos.getY()  }.0 ${pos.getZ()  }.0`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()  }.0 ${pos.getY()+1}.0 ${pos.getZ()+1}.0`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.0 ${pos.getY()+1}.0 ${pos.getZ()+1}.0`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()  }.0 ${pos.getY()  }.0 ${pos.getZ()+1}.0`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.0 ${pos.getY()  }.0 ${pos.getZ()+1}.0`)

		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.5 ${pos.getY()+1}.0 ${pos.getZ()  }.5 0.22 0 0.22 0.003 30`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.5 ${pos.getY()  }.0 ${pos.getZ()  }.5 0.22 0 0.22 0.003 30`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.0 ${pos.getY()+1}.5 ${pos.getZ()  }.5 0 0.22 0.22 0.003 30`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()  }.0 ${pos.getY()+1}.5 ${pos.getZ()  }.5 0 0.22 0.22 0.003 30`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.5 ${pos.getY()+1}.5 ${pos.getZ()  }.0 0.22 0.22 0 0.003 30`)
		event.server.runCommandSilent(`particle ${particle} ${pos.getX()+1}.5 ${pos.getY()+1}.5 ${pos.getZ()+1}.0 0.22 0.22 0 0.003 30`)
	})
};

onEvent('block.right_click', event => {
	if (event.getHand() != MAIN_HAND) {return};

	if (event.getBlock().getId() != 'minecraft:beacon'
		|| event.getItem().getId() != 'endrem:cursed_eye'
		|| event.getEntity().getPlayer() == null
		|| event.getEntity().getPlayer().isFake() == true) {
		return
	}
	event.cancel()
	if (event.getLevel().getDimension().toString() != za_ArenaDante.dimension) {
		event.getEntity().tell(`${za_ArenaDante.prefix} ${za_ArenaDante.wrongDimensionMsg}`)
		return
	}
	if (event.getEntity().getPersistentData().za_DantesCurse != true) {
		event.getEntity().tell(`${za_ArenaDante.prefix} §3Ты не проклят...`)
		return
	}
	if (event.server.persistentData.contains('za_DanteArena')) {
		let x = event.server.persistentData.za_DanteArena.firstStagePos.x;
		let y = event.server.persistentData.za_DanteArena.firstStagePos.y;
		let z = event.server.persistentData.za_DanteArena.firstStagePos.z;
		event.getEntity().tell(`${za_ArenaDante.prefix} §3Где-то уже начат ритуал [x:§a${x}§3, y:§a${y}§3, z:§a${z}§3]...`)
		return
	}
	/////////// Проверяем структуру ///////////
	let currentCheck = 0;
	let lastChecked = {count: 0, msg: [], pos: ""};
	let missmatchRow = (iColumn, row, par, remainingPedestalItems, posArray) => {
		// console.log(row);
		for (var iRow = 0; iRow <= row.length - 1; iRow++) {
			if (row[iRow] == ' '){
				continue;
			};
			let checkBlock;
			currentCheck++;
			if (par.rowXcolumnZ) {
				checkBlock = event.getLevel().getBlock(par.firstPos.offset(iRow*par.incrX, 0, iColumn*par.incrZ))
			} else {
				checkBlock = event.getLevel().getBlock(par.firstPos.offset(iColumn*par.incrX, 0, iRow*par.incrZ))
			};
			// console.log(row[iRow])
			// console.log(checkBlock.getId())
			// console.log(za_ArenaDante.blocks[row[iRow]])
			// console.log(`checkBlock ${checkBlock.getX()} ${checkBlock.getY()} ${checkBlock.getZ()} id ${checkBlock.getId()}; ${row[iRow]} = ${za_ArenaDante.blocks[row[iRow]]}`)
			if (checkBlock.getId() != za_ArenaDante.blocks[row[iRow]]) {
				console.log(`Ожидается ${za_ArenaDante.blocks[row[iRow]]} на координатах ${checkBlock.getX()}, ${checkBlock.getY()}, ${checkBlock.getZ()}`);
				// console.log(`currentCheck = ${currentCheck}`);
				if (lastChecked.count < currentCheck) {
					lastChecked.count = currentCheck;
					lastChecked.msg = [Text.of([
						'§3Ожидается §r"',
						Text.translate(Item.of(za_ArenaDante.blocks[row[iRow]]).getItem().descriptionId),
						`"§3 на координатах §a${checkBlock.getX()}§3, §a${checkBlock.getY()}§3, §a${checkBlock.getZ()}§3`
					])];
					lastChecked.pos = checkBlock.getPos();
				};
				// console.log(lastChecked);
				currentCheck = 0;
				return true;
			};
			if (checkBlock.getId() == 'irons_spellbooks:pedestal') {
				// console.log(checkBlock.getEntityData())
				let pedestalItem = checkBlock.getEntityData().heldItem;
				// console.log(pedestalItem)
				// console.log(pedestalItem.id)
				// console.log(remainingPedestalItems)
				if (remainingPedestalItems.length == 0) {
					console.log('Пьедесталов больше чем предметов');
					if (lastChecked.count < currentCheck) {
						lastChecked.count = currentCheck;
						lastChecked.msg = ['§3Пьедесталов больше чем предметов'];
						lastChecked.pos = checkBlock.getPos();
					};
					currentCheck = 0;
					return true;
				} else if (remainingPedestalItems.includes(pedestalItem.id)) {
					let ind = remainingPedestalItems.indexOf(pedestalItem.id);
					remainingPedestalItems.splice(ind, 1);
					posArray.push({
						x: checkBlock.getX(),
						y: checkBlock.getY() + 1,
						z: checkBlock.getZ()
					});
				} else {
					console.log(`Лежит неверный предмет ${pedestalItem.id} на пьедестале по координатам ${checkBlock.getX()}, ${checkBlock.getY()}, ${checkBlock.getZ()}`)
					console.log(`Ожидается один из ${remainingPedestalItems}`);
					if (lastChecked.count < currentCheck) {
						let itemsText = ['§3Ожидается §r"'];
						for (let i = 0; i < remainingPedestalItems.length; i++) {
							itemsText.push(Text.translate(Item.of(remainingPedestalItems[i]).getItem().descriptionId))
							if (i < remainingPedestalItems.length - 1) {
								itemsText.push('"§3, §r"')
							} else {
								itemsText.push('"§3')
							}
						};
						lastChecked.count = currentCheck;
						lastChecked.msg = [
							Text.of([
								'§3Лежит неверный предмет §r"',
								Text.translate(Item.of(pedestalItem.id).getItem().descriptionId),
								`"§3 на пьедестале по координатам §a${checkBlock.getX()}§3, §a${checkBlock.getY()}§3, §a${checkBlock.getZ()}§3`
							]),
							Text.of(itemsText)
						];
						lastChecked.pos = checkBlock.getPos();
					};
					currentCheck = 0;
					return true;
				}
				// console.log(remainingPedestalItems)
			};
		};
		return false;
	};

	for (let checkRotation = 1; checkRotation <= 4; checkRotation++) {
		// spawnersPos = getSpawnersPos(checkRotation, event.getBlock().getPos());
		let spawnersPos = [];
		// console.log(checkRotation)
		let par = za_ArenaDante.func_getParameters(checkRotation, event.getBlock().getPos(), -3);
		let missmatch = false;
		let remainingPedestalItems = za_ArenaDante.pedestalItems.slice();
		za_ArenaDante.layers.some( layer => {
			// console.log('firstPos = ' + firstPos)
			// console.log(`currentCheck = ${currentCheck}`);
			par.firstPos = par.firstPos.above();
			for (let i = 0; i < layer.length; i++) {
				let row = layer[i];
				if (missmatchRow(i, row, par, remainingPedestalItems, spawnersPos)) {
					missmatch = true;
					break;
				}
			};
			if (missmatch) {return true};
		});
		if (missmatch) {continue};
		for (let height = 1; height <= za_ArenaDante.emptyHeight; height++) {
			par.firstPos = par.firstPos.above();
			for (let i = 0; i < za_ArenaDante.layerEmpty.length; i++) {
				let row = za_ArenaDante.layerEmpty[i];
				if (missmatchRow(i, row, par, remainingPedestalItems, spawnersPos)) {
					missmatch = true;
					break;
				}
			};
			if (missmatch) {break};
		};
		if (missmatch) {continue};
		if (remainingPedestalItems.length != 0) {
			console.log(`Остались предметы без пьедесталов ${remainingPedestalItems}`)
			continue;
		}
		// console.log(spawnersPos)
		console.log('Структура корректна!')
		/////////// Прописывание данных арены  ///////////
		event.server.persistentData.put('za_DanteArena', {
			guardians: [],
			currentStage: 1,
			dimension: event.getLevel().getDimension().toString(),
			firstStagePos: {
				x: event.getBlock().getX(),
				y: event.getBlock().getY(),
				z: event.getBlock().getZ()
			},
			rotation: checkRotation,
			firstSpawnersPos: spawnersPos
		})

		za_ArenaDante.func_buildStage(event);
		return;
	};
	lastChecked.msg.forEach(msg => {
		event.getEntity().tell(Text.of([`${za_ArenaDante.prefix} `, msg]))
	})
	za_ArenaDante.func_spawnParticles(event, 'wrd:algae_particle', lastChecked.pos);
})

onEvent('block.right_click', event => {
	if (event.getHand() != MAIN_HAND) {return};

	// console.log('getForceLoadedChunks');
	// event.getLevel().getForceLoadedChunks().forEach(chunkPos => {
	// 	console.log(chunkPos)
	// 	// if (event.getLevel().getServerLevel() != null) {
	// 	// 	event.getLevel().getServerLevel().setChunkForced(chunkPos.x, chunkPos.z, false);
	// 	// }
	// });

	//////////////// Подсветить стражей ////////////////
	if (event.getBlock().getId().contains("kubejs:dante_stage_")
		&& event.getItem().getId() != 'minecraft:totem_of_undying') {
		
		za_ArenaDante.func_spawnParticles(event, 'wrd:pink_magic_particle', event.getBlock().getPos());
		event.server.runCommandSilent(`playsound warden_and_sculk:sonic_boom player @a ${event.getBlock().getX()} ${event.getBlock().getY()} ${event.getBlock().getZ()}`)

		// Мобы могут быть в выгруженных чанках
		event.server.persistentData.za_DanteArena.guardians.forEach( guardian => {
			// console.log(guardian)
			let guardianLevel = event.server.getLevel(guardian.dimension);
			guardianLevel.forceLoadChunk(guardian.chunkPosX, guardian.chunkPosZ, true);
		})
		// Мобам нужно время чтобы прогрузиться
		event.server.scheduleInTicks(1, callback => {

			event.getLevel().getEntities().filter(entity => {
				return (entity.getPersistentData().contains('za_DanteGuardian'))
			}).forEach(entity => {
				// console.log(entity)
				entity.getPotionEffects().add('minecraft:glowing', 200, 0, false, false)
				// if (entity.getDistance(event.getBlock().getPos()) >= 70.0) {
				if (entity.getDistance(event.getBlock().getPos()) >= 2.0) {
					let offset = za_ArenaDante.func_getRandOffsetXZ(2, 6);
					entity.setPosition(event.getBlock().offset(offset.x, 0, offset.z))
				}
				entity.setRevengeTarget(event.getPlayer())
			});

			event.server.persistentData.za_DanteArena.guardians.forEach( guardian => {
				let guardianLevel = event.server.getLevel(guardian.dimension);
				// event.getLevel().forceLoadChunk(guardian.chunkPosX, guardian.chunkPosZ, false);
				if (guardianLevel.getServerLevel() != null) {
					guardianLevel.getServerLevel().setChunkForced(guardian.chunkPosX, guardian.chunkPosZ, false);
				}
			})
		});
	}
	//////////////// Прерывание прохождения кругов ада ////////////////
	if (!event.getBlock().getId().contains("kubejs:dante_stage_")
		|| event.getItem().getId() != 'minecraft:totem_of_undying'
		|| event.getEntity().getPlayer() == null
		|| event.getEntity().getPlayer().isFake() == true
		|| !event.server.persistentData.contains('za_DanteArena')) {
		return
	}
	
	let firstStagePos = event.server.persistentData.za_DanteArena.firstStagePos.copy();
	let guardians = event.server.persistentData.za_DanteArena.guardians.copy();
	// Мобы могут быть в выгруженных чанках
	guardians.forEach( guardian => {
		// console.log(guardian)
		let guardianLevel = event.server.getLevel(guardian.dimension);
		guardianLevel.forceLoadChunk(guardian.chunkPosX, guardian.chunkPosZ, true);
	})
	// Мобам нужно время чтобы прогрузиться
	event.server.scheduleInTicks(1, callback => {

		za_ArenaDante.func_removeArena(event, false);

		guardians.forEach( guardian => {
			// console.log(guardian)
			let guardianLevel = event.server.getLevel(guardian.dimension);
			//////////////// Принудительно выгрузить старые чанки ////////////////
			// Не работает, т.к. косяк в коде kubejsadditions, игнорируется булево (всегда true). Обходим
			// event.getLevel().forceLoadChunk(guardian.chunkPosX, guardian.chunkPosZ, false);
			if (guardianLevel.getServerLevel() != null) {
				guardianLevel.getServerLevel().setChunkForced(guardian.chunkPosX, guardian.chunkPosZ, false);
			}
		})
	
		event.getLevel().createExplosion(firstStagePos.x, firstStagePos.y, firstStagePos.z)
			.strength(5)
			.causesFire(true)
			.explode()

		event.server.tell(`${za_ArenaDante.prefix} §cПрохождение прервано!`)
		// console.log('in callback')
	})
	// console.log('after callback')
})

onEvent('entity.drops', event => {
	////////// Отключить дроп подобранных предметов (или надетых) //////////
	if (event.getEntity().getPersistentData().contains('za_DanteSpawnerPos')
		|| event.getEntity().getPersistentData().contains('za_DanteGuardian')) {
		event.cancel()
	}
})

onEvent('entity.hurt', event => {
	////////// Убирать монстра, если нет ритуала //////////
	if (event.getEntity() != null
		&& (event.getEntity().getPersistentData().contains('za_DanteSpawnerPos')
			|| event.getEntity().getPersistentData().contains('za_DanteGuardian'))
		&& !event.server.persistentData.contains('za_DanteArena')) {

		event.getEntity().remove();
		return;
	};

	////////// Монстр не должен агрится на монстров //////////
	if (event.getEntity() != null
		&& (event.getEntity().getPersistentData().contains('za_DanteSpawnerPos')
			|| event.getEntity().getPersistentData().contains('za_DanteGuardian'))
		&& event.getSource().getActual() != null
		&& (event.getSource().getActual().getPersistentData().contains('za_DanteSpawnerPos')
			|| event.getSource().getActual().getPersistentData().contains('za_DanteGuardian'))) {

		event.cancel();
		event.getSource().getActual().setRevengeTarget(null);
		return;
	};

	////////// Только проклятый может бить монстров //////////
	if (event.getEntity() != null
		&& (event.getEntity().getPersistentData().contains('za_DanteSpawnerPos')
			|| event.getEntity().getPersistentData().contains('za_DanteGuardian'))
		&& (event.getSource().getActual() == null
			|| (!event.getSource().getActual().getPersistentData().getBoolean('za_DantesCurse')
			&& event.getSource().getActual().getType() != 'irons_spellbooks:citadel_keeper')
			&& !event.getSource().getActual().getPersistentData().contains('za_DanteSpawnerPos'))) {

		event.cancel()

	};
	////////// Уменьшать боссбар при получении урона стражем //////////
	if (!event.isCancelled()
		&& event.getEntity() != null
		&& event.getEntity().getPersistentData().contains('za_DanteBossBar')) {

		event.server.runCommandSilent(`bossbar set ${event.getEntity().getPersistentData().za_DanteBossBar} players @a`);
		// console.log(event.getEntity().getFullNBT().Health)
		// console.log(event.getDamage())
		let newHP = Math.ceil(Math.max(event.getEntity().getFullNBT().Health - event.getDamage(), 0))
		// console.log(newHP)
		event.server.runCommandSilent(`bossbar set ${event.getEntity().getPersistentData().za_DanteBossBar} value ${newHP}`);

	}
})

onEvent('player.logged_in', event => {
	////////// Снять проклятье, если разблокирован Край //////////
	if (event.getPlayer().getPersistentData().getBoolean('za_DantesCurse')
		&& !event.getLevel().getGameRules().getBoolean('disablePortalEnd')) {
		event.player.getPersistentData().putBoolean('za_DantesCurse', false);
	}
})

onEvent('player.tick', event => {

	let arenaDistance = 50;

	////////// Проклятым нельзя ломать и ставить блоки вблизи арены //////////
	if (event.getPlayer().getTicksExisted() % 40 == 0 // раз в 2 секунды
		&& event.server.persistentData.contains('za_DanteArena')
		&& event.getPlayer().getPersistentData().getBoolean('za_DantesCurse')) {

		if (!event.getPlayer().isCreativeMode()
			&& !event.getPlayer().isSpectator()) {

			let firstStagePos = event.server.persistentData.za_DanteArena.firstStagePos;
			let stageLevel = event.server.getLevel(event.server.persistentData.za_DanteArena.dimension);
			if (event.getPlayer().getLevel() == stageLevel
				&& event.getPlayer().getDistance(firstStagePos.x, firstStagePos.y, firstStagePos.z) <= arenaDistance) {

				if (event.getPlayer().minecraftPlayer.mayBuild()) {
					event.getPlayer().setGameMode('adventure');
				}

				if (!event.getPlayer().getPersistentData().getBoolean('za_ParticipantDanteArena')) {
					event.getPlayer().getPersistentData().putBoolean('za_ParticipantDanteArena', true)
				}
				event.getPlayer().getPersistentData().putInt('za_TimeOutDanteArena', 0)

			} else {

				if (!event.getPlayer().minecraftPlayer.mayBuild()) {
					event.getPlayer().setGameMode('survival');
				};

				if (event.getPlayer().getPersistentData().getBoolean('za_ParticipantDanteArena')
					&& event.getPlayer().isAlive()) {
					
					let maxTime = 10;
					let za_TimeOutDanteArena = event.getPlayer().getPersistentData().getInt('za_TimeOutDanteArena');
					za_TimeOutDanteArena++;
					event.getPlayer().getPersistentData().putInt('za_TimeOutDanteArena', za_TimeOutDanteArena);
					if (za_TimeOutDanteArena <= 4) {
						let playerName = event.getPlayer().toString();
						let subtitle = '{"text":"Вернись...","color":"red"}';
						let title = '{"text":""}';
						event.server.runCommandSilent(`title "${playerName}" times 5 20 15`);
						event.server.runCommandSilent(`title "${playerName}" subtitle ${subtitle}`);
						event.server.runCommandSilent(`title "${playerName}" title ${title}`);
					} else if (za_TimeOutDanteArena <= maxTime) {
						let playerName = event.getPlayer().toString();
						let subtitle = `{"text":"Станет плохо через ${maxTime - za_TimeOutDanteArena}","color":"blue"}`;
						let title = '{"text":"Вернись...","color":"red"}';
						event.server.runCommandSilent(`title "${playerName}" times 5 35 5`);
						event.server.runCommandSilent(`title "${playerName}" subtitle ${subtitle}`);
						event.server.runCommandSilent(`title "${playerName}" title ${title}`);
					} else {

						let playerName = event.getPlayer().toString();
						let subtitle = `{"text":"Арена выкачивает твою жизнь!!!","color":"red"}`;
						let title = '{"text":""}';
						event.server.runCommandSilent(`title "${playerName}" times 5 35 5`);
						event.server.runCommandSilent(`title "${playerName}" subtitle ${subtitle}`);
						event.server.runCommandSilent(`title "${playerName}" title ${title}`);

						let currentEffect = event.getPlayer().getPotionEffects().getActive('minecraft:wither');
						if (currentEffect == null
							|| currentEffect.getAmplifier() < 2
							|| (currentEffect.getAmplifier() == 2 && currentEffect.getDuration() < 40)) {
							event.getPlayer().getPotionEffects().add('minecraft:wither', 50, 2) // 2,5 секунды 3 уровня
						};

						stageLevel.getEntities().filter(entity => {
							return (entity.getPersistentData().contains('za_DanteSpawnerPos')
								|| entity.getPersistentData().contains('za_DanteGuardian'))
						}).forEach(entity => {
							entity.heal(4);
							// Нельзя делать entity.setFullNBT если установлены PersistentData, т.к. слетят все PersistentData
						})
					}
				}
			}

		} else {
			event.getPlayer().getPersistentData().putInt('za_TimeOutDanteArena', 0)
		}

	}

	////////// Нет арены, можно строить //////////
	if (event.getPlayer().getTicksExisted() % 40 == 0 // раз в 2 секунды
		&& !event.server.persistentData.contains('za_DanteArena')
		&& !event.getPlayer().isCreativeMode()
		&& !event.getPlayer().isSpectator()
		&& !event.getPlayer().minecraftPlayer.mayBuild()) {
		event.getPlayer().setGameMode('survival');
	}

	////////// Эффекты от проклятия //////////
	if (event.getPlayer().getTicksExisted() % 1200 == 0 // раз в 60 секунд
		&& event.getPlayer().isAlive()
		&& event.getPlayer().getPersistentData().getBoolean('za_DantesCurse')
		&& !event.getPlayer().isCreativeMode()
		&& !event.getPlayer().isSpectator()) {

		////////// Тошнота //////////
		if (!event.getPlayer().getPotionEffects().getDuration('minecraft:nausea') < 200) {
			event.getPlayer().getPotionEffects().add('minecraft:nausea', 200)
		}
		event.getPlayer().tell("§4§lПроклятье...")
		event.server.runCommandSilent(`playsound warden_and_sculk:sculk_shrieker_phase_1 player @a ${event.getPlayer().getX()} ${event.getPlayer().getY()} ${event.getPlayer().getZ()}`)

		let randomNumber = Math.floor(Math.random() * 10) + 1 // между 1 и 10
		
		if (randomNumber == 1) {

			// console.log("Закрыть инвентарь")
			event.getPlayer().closeInventory()

		} else if (randomNumber == 2) {

			// console.log("Толчок")
			let randomX = Math.random(); if (Math.round(Math.random()) == 1) {randomX = -randomX}
			let randomY = Math.random(); if (Math.round(Math.random()) == 1) {randomY = -randomY}
			let randomZ = Math.random(); if (Math.round(Math.random()) == 1) {randomZ = -randomZ}
			event.getPlayer().addMotion(randomX, randomY, randomZ)
        	event.getPlayer().getMinecraftEntity().hurtMarked = true;

		} else if (randomNumber == 3) {

			// console.log("Голод")
			event.getPlayer().setFoodLevel(0)

		} else if (randomNumber == 4) {

			// console.log("Поворот")
			let randomYaw = Math.floor(Math.random() * 100) + 20; if (Math.round(Math.random()) == 1) {randomYaw = -randomYaw}
			randomYaw += event.getPlayer().getYaw()

			let randomPitch = Math.floor(Math.random() * 50) + 20; if (Math.round(Math.random()) == 1) {randomPitch = -randomPitch}
			randomPitch += event.getPlayer().getPitch()

			event.getPlayer().setRotation(randomYaw, randomPitch)

		} else if (randomNumber == 5) {

			// console.log("Слепота")
			if (!event.getPlayer().getPotionEffects().getDuration('minecraft:blindness') < 60) {
				event.getPlayer().getPotionEffects().add('minecraft:blindness', 60) // 3 секунды
			}

		} else if (randomNumber == 6) {

			// console.log("Смена позиции курсора хотбара")
			let randomMove = Math.floor(Math.random() * 8) + 1 // от 1 до 8
			let newSlot = event.getPlayer().getSelectedSlot() + randomMove
			if (newSlot > 8) {
				newSlot -= 9
			}
			event.getPlayer().setSelectedSlot(newSlot)

		} else if (randomNumber == 7) {

			// console.log("Свап предметов в хотбаре")
			let inventory = event.getPlayer().getInventory()
			let A = inventory.extract(event.getPlayer().getSelectedSlot(), 999, false)

			let randomMove = Math.floor(Math.random() * 8) + 1 // от 1 до 8
			let newSlot = event.getPlayer().getSelectedSlot() + randomMove
			if (newSlot > 8) {
				newSlot -= 9
			}
			let B = inventory.extract(newSlot, 999, false)

			inventory.insert(newSlot, A, false)
			inventory.insert(event.getPlayer().getSelectedSlot(), B, false)

		}
	}
})

onEvent('player.respawn', event => {
	if(event.getPlayer().getPersistentData().getBoolean('za_ParticipantDanteArena')) {
		event.getPlayer().getPersistentData().putBoolean('za_ParticipantDanteArena', false)
		event.getPlayer().getPersistentData().putInt('za_TimeOutDanteArena', 0)
	}
})

onEvent('player.inventory.changed', event => {
	////////// Получение проклятья Данте //////////
	if (!event.getPlayer().getPersistentData().getBoolean('za_DantesCurse')
		&& event.getLevel().getGameRules().getBoolean('disablePortalEnd')
		&& !event.getPlayer().isCreativeMode()
		&& !event.getPlayer().isSpectator()
		&& event.getPlayer().getInventory().find('endrem:cursed_eye') >= 0) {

		event.getPlayer().getPersistentData().putBoolean('za_DantesCurse', true);
		// console.log(event.getPlayer().getPotionEffects().getDuration('minecraft:blindness'));
		if (event.getPlayer().getPotionEffects().getDuration('minecraft:blindness') < 200) {
			event.getPlayer().getPotionEffects().add('minecraft:blindness', 200) // 10 сек
		}
		let msg = '§lУ тебя странное чувство... Похоже... §4§lТы проклят...';
		event.getEntity().tell(msg);

		let playerName = event.getPlayer().toString();
		event.server.runCommandSilent(`title "${playerName}" times 10 120 10`);
		event.server.runCommandSilent(`title "${playerName}" subtitle "${msg}"`);
		event.server.runCommandSilent(`title "${playerName}" title {"text":""}`);
		// console.log(event.getPlayer().getPersistentData())

		event.server.runCommandSilent(`playsound wrd:boss_final_die_1 player @a ${event.getPlayer().getX()} ${event.getPlayer().getY()} ${event.getPlayer().getZ()}`)

	}
})

onEvent('entity.death', event => {
	if (!event.server.persistentData.contains('za_DanteArena')
		|| !event.getEntity().getPersistentData().contains('za_DanteGuardian')
		&& !event.getEntity().getPersistentData().contains('za_DanteSpawnerPos')) {
		return
	}
	let stageLevel = event.server.getLevel(event.server.persistentData.za_DanteArena.dimension);

	let spawnGuardians = (currentStage) => {
		let firstStagePos = event.server.persistentData.za_DanteArena.firstStagePos;

		////////// Очистить арену от блоков //////////
		let rotation = event.server.persistentData.za_DanteArena.rotation;
		let par = za_ArenaDante.func_getParameters(rotation, BlockPos(firstStagePos.x, firstStagePos.y, firstStagePos.z), -1);
		
		for (let height = 1; height <= za_ArenaDante.emptyHeight + 1; height++) {
			for (let iColumn = 0; iColumn < za_ArenaDante.layerEmpty.length; iColumn++) {
				let row = za_ArenaDante.layerEmpty[iColumn];
				for (var iRow = 0; iRow <= row.length - 1; iRow++) {
					if (row[iRow] == ' '){
						continue;
					};
					let checkBlock;
					if (par.rowXcolumnZ) {
						checkBlock = stageLevel.getBlock(par.firstPos.offset(iRow*par.incrX, height, iColumn*par.incrZ))
					} else {
						checkBlock = stageLevel.getBlock(par.firstPos.offset(iColumn*par.incrX, height, iRow*par.incrZ))
					};
					if (checkBlock.getId() != 'minecraft:air'
						&& checkBlock.getId() != 'minecraft:barrier'
						&& checkBlock.getId() != 'minecraft:bedrock'
						&& checkBlock.getId() != 'minecraft:spawner'
						&& !checkBlock.getId().contains("kubejs:dante_stage_")) {
						checkBlock.set('minecraft:air')
					}
				};
			};
		};

		////////// Спавн стражей //////////
		za_ArenaDante.guardianEntitys[currentStage].arr.forEach( guardianData => {
			let guardian = stageLevel.createEntity(guardianData.id);
			let offset = za_ArenaDante.func_getRandOffsetXZ(2, 6);
			guardian.setPosition(firstStagePos.x + offset.x, firstStagePos.y, firstStagePos.z + offset.z);
			guardian.setCustomName(guardianData.name);
			guardian.setCustomNameAlwaysVisible(true);
			let nbt = guardian.getFullNBT();
			let fireProof = {
				Amplifier: true,
				Duration: 19999980,
				Id: 12,
				ShowParticles: false
			};
			nbt.PersistenceRequired = true;
			if (nbt.contains('ActiveEffects')) {
				nbt.ActiveEffects.add(nbt.ActiveEffect.size(), fireProof);
			} else {
				nbt.ActiveEffects = [fireProof];
			};
			guardianData.func_setNBT(guardian, nbt);
			guardian.setFullNBT(nbt);
			guardian.getPersistentData().putBoolean('za_DanteGuardian', true);
			guardian.spawn();
			if ('bossbarId' in guardianData) {
				guardian.getPersistentData().putString('za_DanteBossBar', guardianData.bossbarId);
				event.server.runCommandSilent(`bossbar add ${guardianData.bossbarId} {"text":"${guardianData.name}"}`);
				event.server.runCommandSilent(`bossbar set ${guardianData.bossbarId} color red`);
				event.server.runCommandSilent(`bossbar set ${guardianData.bossbarId} players @a`);
				// console.log(guardian.getFullNBT().Health)
				event.server.runCommandSilent(`bossbar set ${guardianData.bossbarId} max ${guardian.getFullNBT().Health}`);
				event.server.runCommandSilent(`bossbar set ${guardianData.bossbarId} value ${guardian.getFullNBT().Health}`);
			}

			let chunkPos = stageLevel.minecraftLevel.getChunkAt(guardian.getMinecraftEntity().blockPosition()).getPos();
			let index = event.server.persistentData.za_DanteArena.guardians.size();
			event.server.persistentData.za_DanteArena.guardians.add(index,
				{
					uuid: '',
					chunkPosX: chunkPos.x,
					chunkPosZ: chunkPos.z,
					dimension: stageLevel.getDimension().toString()
				}
			);
			event.server.persistentData.za_DanteArena.guardians[index].putUUID("uuid", guardian.getId());
			event.server.runCommandSilent(`playsound bosses_of_mass_destruction:comet_shoot hostile @a ${guardian.getX()} ${guardian.getY()} ${guardian.getZ()}`)
			// console.log(event.server.persistentData.za_DanteArena.guardians[index])
		})
		// console.log(event.server.persistentData.za_DanteArena.guardians.length)
		event.server.tell(`${za_ArenaDante.prefix} ${za_ArenaDante.guardianEntitys[currentStage].wakeupMsg}`);
	};

	if (event.getEntity().getPersistentData().za_DanteGuardian == true) {
		event.server.runCommandSilent(`bossbar remove ${event.getEntity().getPersistentData().za_DanteBossBar}`);
		event.server.runCommandSilent(`playsound wrd:yeti_death hostile @a ${event.getEntity().getX()} ${event.getEntity().getY()} ${event.getEntity().getZ()}`)

		// console.log(event.server.persistentData.za_DanteArena.guardians);
		// console.log(event.server.persistentData.za_DanteArena.guardians.length);
		// let oldGuardianInd = event.server.persistentData.za_DanteArena.guardians.findIndex( guardian => {
		// 	return guardian.getUUID('uuid').equals(event.getEntity().getId());
		// });
		// console.log('oldGuardianInd = '+ oldGuardianInd);
		// if (oldGuardianInd != -1) {
		// 	event.server.persistentData.za_DanteArena.guardians.remove(oldGuardianInd); // не сработало
		// };
		event.server.persistentData.za_DanteArena.guardians.removeIf(guardian => {
			return guardian.getUUID('uuid').equals(event.getEntity().getId());
		});
		// console.log(event.server.persistentData.za_DanteArena.guardians);
		// console.log(event.server.persistentData.za_DanteArena.guardians.length);

		if (event.server.persistentData.za_DanteArena.guardians.length <= 0) {
			event.server.tell(`${za_ArenaDante.prefix} ${za_ArenaDante.completeStageMessage[event.server.persistentData.za_DanteArena.currentStage]}`)
			if (event.server.persistentData.za_DanteArena.currentStage >= 9) {
				////////////////// КОНЕЦ //////////////////
				za_ArenaDante.func_removeArena(event, false);
				if (event.getLevel().getGameRules().getBoolean('disablePortalEnd')) {
					event.server.runCommandSilent('effect give @a minecraft:nausea 10');
					event.server.tell('Мир дрогнул, кажется произошло неизбежное...');

					event.getLevel().getGameRules().set('disablePortalEnd', false)
					event.getLevel().getPlayers().forEach( player => {
						if (player.getPersistentData().getBoolean('za_DantesCurse')) {
							event.server.runCommandSilent(`playsound wrd:boss_death player @a ${player.getX()} ${player.getY()} ${player.getZ()}`)
							player.tell('Ты чувствуешь облегчение... Проклятье спало...');
							player.getPersistentData().putBoolean('za_DantesCurse', false)
						}
						player.stages.add('unlock_portal_end')
					})
				}
			} else {
				event.server.persistentData.za_DanteArena.currentStage++;
				za_ArenaDante.func_buildStage(event);
				if (event.server.persistentData.za_DanteArena.currentStage >= 8) {
					spawnGuardians(event.server.persistentData.za_DanteArena.currentStage);
				}
			}
		}
	} else if (event.getEntity().getPersistentData().contains('za_DanteSpawnerPos')) {
		let za_DanteSpawnerPos = event.getEntity().getPersistentData().za_DanteSpawnerPos;
		let x = za_DanteSpawnerPos.x;
		let y = za_DanteSpawnerPos.y;
		let z = za_DanteSpawnerPos.z;
		let spawnerBC = stageLevel.getBlock(x,y,z);
		if (spawnerBC.getId() != 'minecraft:spawner') {
			return
		}
		let spawnerData = spawnerBC.getEntityData();
		// console.log(spawnerData)
		// console.log(spawnerBC.getEntityData())
		if (spawnerData.SpawnData.entity.za_DanteRemainingKills - 1 <= 0) {
			if (event.server.persistentData.za_DanteArena.guardians.length == 0
				&& event.server.persistentData.za_DanteArena.currentStage == spawnerData.SpawnData.entity.za_DanteStage) {
				spawnGuardians(spawnerData.SpawnData.entity.za_DanteStage);
			}
			spawnerBC.set('minecraft:bedrock')
			//////////////////// ВЗРЫВЫ!!! ////////////////////
			stageLevel.createExplosion(x, y, z)
				.strength(5)
				.damagesTerrain(false)
				.explode();
		} else {
			spawnerData.SpawnData.entity.za_DanteRemainingKills--;
			// console.log(spawnerBC.getEntityData())
		}
	}
})

onEvent('entity.enter_chunk', event => {
	// console.log('entity.enter_chunk')
	if (event.getPrevX() == event.getChunkX() && event.getPrevZ() == event.getChunkZ()) {return};
	////////// Телепортировать мобов обратно на арену, если они изменили измерение //////////
	if (event.getEntity().getPersistentData().contains('za_DanteGuardian')
		|| event.getEntity().getPersistentData().contains('za_DanteSpawnerPos')) {

		let stageLevel = event.server.getLevel(event.server.persistentData.za_DanteArena.dimension);
		if (event.getEntity().getLevel() != stageLevel) {
			// console.log('event.getEntity().getLevel() != stageLevel')
			let firstStagePos = event.server.persistentData.za_DanteArena.firstStagePos;
			let stageBlock = stageLevel.getBlock(firstStagePos.x, firstStagePos.y, firstStagePos.z);
			let offset = za_ArenaDante.func_getRandOffsetXZ(2, 6);
			event.getEntity().setPosition(stageBlock.offset(offset.x, 0, offset.z));
			return;
		};
	};

	if (event.getEntity().getPersistentData().contains('za_DanteGuardian')) {
		// console.log('entity.enter_chunk')
		// console.log(event.getPrevX())
		// console.log(event.getPrevZ())
		///////////// RIP /////////////
		// let canUnloadOldChunk = true;
		event.server.persistentData.za_DanteArena.guardians.forEach( guardian => {
			// console.log(guardian)
			if (guardian.getUUID('uuid').equals(event.getEntity().getId())) {
				guardian.chunkPosX = event.getChunkX();
				guardian.chunkPosZ = event.getChunkZ();
				guardian.dimension = event.getEntity().getLevel().getDimension().toString();
			}
			///////////// RIP /////////////
			// } else if (guardian.dimension == event.getLevel().getDimension().toString() && guardian.x == event.getPrevX() && guardian.z == event.getPrevZ()) {
			// 	canUnloadOldChunk = false;
			// 	// console.log('canUnloadOldChunk = false')
			// }
		})
		///////////// RIP /////////////
		// if (canUnloadOldChunk) {
		// 	// console.log('canUnloadOldChunk = true')
		// 	//////////////// Принудительно выгрузить старые чанки ////////////////
		// 	// Не работает, т.к. косяк в коде kubejsadditions, игнорируется булево (всегда true). Обходим
		// 	// event.getLevel().forceLoadChunk(event.getPrevX(), event.getPrevZ(), false);
		// 	if (event.getLevel().getServerLevel() != null) {
		// 		event.getLevel().getServerLevel().setChunkForced(event.getPrevX(), event.getPrevZ(), false);
		// 	}
		// }
		// //////////////// Принудительно загрузить новые чанки ////////////////
		// event.getLevel().forceLoadChunk(event.getChunkX(), event.getChunkZ(), true);
	}
})
