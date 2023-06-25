onEvent('recipes', e => {

  // Слишком жирно
    e.remove({input:'minecraft:diamond_block', type:'alchemistry:dissolver'})
    e.remove({input:'minecraft:emerald_block', type:'alchemistry:dissolver'})
    e.remove({input:'minecraft:iron_block', type:'alchemistry:dissolver'})
    e.remove({input:'minecraft:gold_block', type:'alchemistry:dissolver'})
    e.remove({input:'minecraft:copper_block', type:'alchemistry:dissolver'})
    e.remove({input:'minecraft:netherite_block', type:'alchemistry:dissolver'})
    e.remove({input:'create:zinc_block', type:'alchemistry:dissolver'})
    e.remove({input:'minecraft:coal_block', type:'alchemistry:dissolver'})

  // Алмазы
    e.remove({id:'createaddition:crushing/diamond'})
    e.recipes.create.crushing('2x createaddition:diamond_grit', 'minecraft:diamond')

    e.remove({id:'alchemistry:compactor/diamond'})
    // e.recipes.alchemistry.compactor({
    //   "input": {
    //     "ingredient": {
    //       "item": "chemlib:graphite_dust"
    //     },
    //     "count": 16
    //   },
    //   "result": {
    //     "item": "createaddition:diamond_grit"
    //   }
    // })

    e.remove({id:'alchemistry:dissolver/diamond'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:dusts/diamond"
        },
        "count": 1
      },
      "output": {
        "rolls": 1,
        "weighted": false,
        "groups": [
          {
            "probability": 100.0,
            "results": [
              { "item": "chemlib:graphite", "count": 64 },
              { "item": "chemlib:graphite", "count": 64 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/diamond')

    e.recipes.create.mixing('minecraft:diamond', ['2x createaddition:diamond_grit']).superheated().processingTime(6000)
    e.recipes.create.mixing('minecraft:diamond', ['32x chemlib:graphite_dust']).superheated().processingTime(6000)

    e.remove({id:'alchemistry:dissolver/coal'})
    e.remove({id:'alchemistry:dissolver/charcoal'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "minecraft:coals"
        },
        "count": 1
      },
      "output": {
        "rolls": 2,
        "weighted": true,
        "groups": [
          {
            "probability": 1.0,
            "results": [
              { "item": "minecraft:air" }
            ]
          },
          {
            "probability": 9.0,
            "results": [
              { "item": "chemlib:graphite", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:alchemistry/coal')

    // 1 руда = 4x64 C4 = 32 графитовой пыли = 2 алмазной пыли = 1 алмаз
    e.remove({id:'alchemistry:dissolver/ores/diamond'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:ores/diamond"
        },
        "count": 1
      },
      "output": {
        "rolls": 64,
        "weighted": false,
        "groups": [
          { // graphite = C4 100%
            "probability": 100.0,
            "results": [
              { "item": "chemlib:graphite", "count": 4 }
            ]
          },
          { // pentane = C5H12 5%
            "probability": 5.0,
            "results": [
              { "item": "chemlib:pentane", "count": 1 }
            ]
          },
          { // methane = CH4 8%
            "probability": 8.0,
            "results": [
              { "item": "chemlib:methane", "count": 1 }
            ]
          },
          { // carbon_disulfide = CS2 4%
            "probability": 4.0,
            "results": [
              { "item": "chemlib:carbon_disulfide", "count": 1 }
            ]
          },
          { // rubidium_carbonate = Rb2(CO3) 7%
            "probability": 7.0,
            "results": [
              { "item": "chemlib:rubidium_carbonate", "count": 1 }
            ]
          },
          { // carbon_dioxide = CO2 2%
            "probability": 2.0,
            "results": [
              { "item": "chemlib:carbon_dioxide", "count": 1 }
            ]
          },
          { // beta_carotene = C40H56 1%
            "probability": 1.0,
            "results": [
              { "item": "chemlib:beta_carotene", "count": 1 }
            ]
          },
          { // cucurbitacin = C32H44O8 0.5%
            "probability": 0.5,
            "results": [
              { "item": "chemlib:cucurbitacin", "count": 1 }
            ]
          },
          { // cobalt_carbonate = Co(CO3) 3%
            "probability": 3.0,
            "results": [
              { "item": "chemlib:cobalt_carbonate", "count": 1 }
            ]
          },
          { // tin_sulfate = SnSO4 9%
            "probability": 9.0,
            "results": [
              { "item": "chemlib:tin_sulfate", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/ores/diamond')
  
  // Железо
    // 1 руда = 2 железный слитка = 32 Fe
    e.remove({id:'alchemistry:dissolver/ores/iron'})
    e.remove({id:'alchemistry:dissolver/raw_iron'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:raw_materials/iron"
        },
        "count": 1
      },
      "output": {
        "rolls": 32,
        "weighted": true,
        "groups": [
          { // iron_oxide = Fe2O3 2
            "probability": 2.0,
            "results": [
              { "item": "chemlib:iron_oxide", "count": 1 }
            ]
          },
          { // iron_carbonate = Fe(CO3) 5
            "probability": 5.0,
            "results": [
              { "item": "chemlib:iron_carbonate", "count": 1 }
            ]
          },
          { // iron_disulfid = FeS2 1
            "probability": 1.0,
            "results": [
              { "item": "chemlib:iron_disulfide", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/raw_iron')

  // Медь
    // 1 руда = 32 Cu = 2 слитка
    e.remove({id:'alchemistry:dissolver/ores/copper'})
    e.remove({id:'alchemistry:dissolver/raw_copper'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:raw_materials/copper"
        },
        "count": 1
      },
      "output": {
        "rolls": 16,
        "weighted": true,
        "groups": [
          { // han_purple = BaCuSi2O6 1
            "probability": 1.0,
            "results": [
              { "item": "chemlib:han_purple", "count": 1 }
            ]
          },
          { // copper_carbonate = Cu(CO3) 5
            "probability": 5.0,
            "results": [
              { "item": "chemlib:copper_carbonate", "count": 1 }
            ]
          },
          { // copper_chloride = CuCl2 2
            "probability": 2.0,
            "results": [
              { "item": "chemlib:copper_chloride", "count": 1 }
            ]
          },
          { // copper_i_oxide = Cu20 2
            "probability": 2.0,
            "results": [
              { "item": "chemlib:copper_i_oxide", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/raw_copper')

  // Золото
    // 1 руда = 32 Au = 2 слитка
    e.remove({id:'alchemistry:dissolver/ores/gold'})
    e.remove({id:'alchemistry:dissolver/raw_gold'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:raw_materials/gold"
        },
        "count": 1
      },
      "output": {
        "rolls": 32,
        "weighted": false,
        "groups": [
          { // gold = Au 100%
            "probability": 100.0,
            "results": [
              { "item": "chemlib:gold", "count": 1 }
            ]
          },
          { // gold = Au 5%
            "probability": 5.0,
            "results": [
              { "item": "chemlib:gold", "count": 1 }
            ]
          },
          { // calcium_oxide = CaO 5%
            "probability": 5.0,
            "results": [
              { "item": "chemlib:calcium_oxide", "count": 1 }
            ]
          },
          { // titanium_oxide = Ti2O3 4%
            "probability": 4.0,
            "results": [
              { "item": "chemlib:titanium_oxide", "count": 1 }
            ]
          },
          { // rubidium_carbonate = Rb2(CO3) 8%
            "probability": 8.0,
            "results": [
              { "item": "chemlib:rubidium_carbonate", "count": 1 }
            ]
          },
          { // cobalt_aluminate = CoAl2O4 2%
            "probability": 2.0,
            "results": [
              { "item": "chemlib:cobalt_aluminate", "count": 1 }
            ]
          },
          { // potassium_cyanide = KCN 7%
            "probability": 7.0,
            "results": [
              { "item": "chemlib:potassium_cyanide", "count": 1 }
            ]
          },
          { // lithium_oxide = Li2O 9%
            "probability": 9.0,
            "results": [
              { "item": "chemlib:lithium_oxide", "count": 1 }
            ]
          },
          { // cobalt_carbonate = Co(CO3) 3%
            "probability": 3.0,
            "results": [
              { "item": "chemlib:cobalt_carbonate", "count": 1 }
            ]
          },
          { // chromium_oxide = Cr2O3 9%
            "probability": 9.0,
            "results": [
              { "item": "chemlib:chromium_oxide", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/raw_gold')

  // Редстоун
    // 1 руда = 6 Fe2O3 + 6 Sr(CO3) = 6 пыли
    e.remove({id:'alchemistry:dissolver/ores/redstone'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:ores/redstone"
        },
        "count": 1
      },
      "output": {
        "rolls": 6,
        "weighted": false,
        "groups": [
          { // 1 красная пыль 100%
            "probability": 100.0,
            "results": [
              { "item": "chemlib:iron_oxide", "count": 1 },
              { "item": "chemlib:strontium_carbonate", "count": 1 }
            ]
          },
          { // 1 красная пыль 10%
            "probability": 10.0,
            "results": [
              { "item": "chemlib:iron_oxide", "count": 1 },
              { "item": "chemlib:strontium_carbonate", "count": 1 }
            ]
          },
          { // lead_oxide = PbO 5%
            "probability": 5.0,
            "results": [
              { "item": "chemlib:lead_oxide", "count": 1 }
            ]
          },
          { // kaolinite = (Al2O3)(SiO2)2(H2O)2 1%
            "probability": 1.0,
            "results": [
              { "item": "chemlib:kaolinite", "count": 1 }
            ]
          },
          { // antimony_trioxide = Sb2O3 1%
            "probability": 1.0,
            "results": [
              { "item": "chemlib:antimony_trioxide", "count": 1 }
            ]
          },
          { // cucurbitacin = C32H44O8 2%
            "probability": 2.0,
            "results": [
              { "item": "chemlib:cucurbitacin", "count": 1 }
            ]
          },
          { // cadmium_sulfide = CdS 7%
            "probability": 7.0,
            "results": [
              { "item": "chemlib:cadmium_sulfide", "count": 1 }
            ]
          },
          { // sodium_oxide = Na2O 6%
            "probability": 6.0,
            "results": [
              { "item": "chemlib:sodium_oxide", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/ores/redstone')

  // Изумруд
    // 1 руда = 8 V + 16 Be3Al2Si6O18 + 16 Cr = 2 изумруда
    e.remove({id:'alchemistry:dissolver/ores/emerald'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:ores/emerald"
        },
        "count": 1
      },
      "output": {
        "rolls": 8,
        "weighted": false,
        "groups": [
          { // 1/4 изумруд 100%
            "probability": 100.0,
            "results": [
              { "item": "chemlib:vanadium", "count": 1 },
              { "item": "chemlib:beryl", "count": 2 },
              { "item": "chemlib:chromium", "count": 2 }
            ]
          },
          { // 1/4 изумруд 20%
            "probability": 20.0,
            "results": [
              { "item": "chemlib:vanadium", "count": 1 },
              { "item": "chemlib:beryl", "count": 2 },
              { "item": "chemlib:chromium", "count": 2 }
            ]
          },
          { // barium_oxide = BaO 16%
            "probability": 16.0,
            "results": [
              { "item": "chemlib:barium_oxide", "count": 1 }
            ]
          },
          { // cesium_hydroxide = Cs(OH) 10%
            "probability": 10.0,
            "results": [
              { "item": "chemlib:cesium_hydroxide", "count": 1 }
            ]
          },
          { // chitin = C8H13O5N 13%
            "probability": 13.0,
            "results": [
              { "item": "chemlib:chitin", "count": 1 }
            ]
          },
          { // arsenic_sulfide = As4S4 5%
            "probability": 5.0,
            "results": [
              { "item": "chemlib:arsenic_sulfide", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/ores/emerald')

  // Лазурит
    // 1 руда = 27 (Al2O3)2(SiO2) + 18 CaS + 54 Na + 27 Si = 9 лазурита
    e.remove({id:'alchemistry:dissolver/ores/lapis'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:ores/lapis"
        },
        "count": 1
      },
      "output": {
        "rolls": 10,
        "weighted": false,
        "groups": [
          { // лазурит 100%
            "probability": 100.0,
            "results": [
              { "item": "chemlib:mullite", "count": 3 },
              { "item": "chemlib:calcium_sulfide", "count": 6 },
              { "item": "chemlib:sodium", "count": 2 },
              { "item": "chemlib:silicon", "count": 3 }
            ]
          },
          { // лазурит 10%
            "probability": 10.0,
            "results": [
              { "item": "chemlib:mullite", "count": 3 },
              { "item": "chemlib:calcium_sulfide", "count": 6 },
              { "item": "chemlib:sodium", "count": 2 },
              { "item": "chemlib:silicon", "count": 3 }
            ]
          },
          { // manganese_nitrate = Mg(NO3)2 12%
            "probability": 12.0,
            "results": [
              { "item": "chemlib:manganese_nitrate", "count": 1 }
            ]
          },
          { // cadmium_carbonate = Cd(CO3) 3%
            "probability": 3.0,
            "results": [
              { "item": "chemlib:cadmium_carbonate", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/ores/lapis')

  // Цинк
    // 1 руда = 32 Zn = 2 слитка
    e.remove({id:'alchemistry:dissolver/ores/zinc'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:raw_materials/zinc"
        },
        "count": 1
      },
      "output": {
        "rolls": 32,
        "weighted": true,
        "groups": [
          { // zinc_hydroxide = Zn(OH)2 5
            "probability": 5.0,
            "results": [
              { "item": "chemlib:zinc_hydroxide", "count": 1 }
            ]
          },
          { // zinc_nitrate = Zn(NO3)2 5
            "probability": 5.0,
            "results": [
              { "item": "chemlib:zinc_nitrate", "count": 1 }
            ]
          },
          { // zinc_oxide = ZnO 8
            "probability": 8.0,
            "results": [
              { "item": "chemlib:zinc_oxide", "count": 1 }
            ]
          },
          { // zinc_sulfate = ZnSO4 5
            "probability": 5.0,
            "results": [
              { "item": "chemlib:zinc_sulfate", "count": 1 }
            ]
          },
          { // zinc_sulfide = ZnS 5
            "probability": 5.0,
            "results": [
              { "item": "chemlib:zinc_sulfide", "count": 1 }
            ]
          },
          { // zinc_carbonate = Zn(CO3) 5
            "probability": 5.0,
            "results": [
              { "item": "chemlib:zinc_carbonate", "count": 1 }
            ]
          },
          { // zinc = Z 4
            "probability": 4.0,
            "results": [
              { "item": "chemlib:zinc", "count": 1 }
            ]
          },
          { // lead_oxide = PbO | zinc = Z 1
            "probability": 1.0,
            "results": [
              { "item": "chemlib:lead_oxide", "count": 1 },
              { "item": "chemlib:zinc", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/raw_zinc')

  // Кварц
    e.custom({
      "type": "alchemistry:combiner",
      "group": "alchemistry:combiner",
      "input": [
        {
          "ingredient": {
            "item": "chemlib:barium"
          },
          "count": 16
        },
        {
          "ingredient": {
            "item": "chemlib:silicon_dioxide"
          },
          "count": 32
        }
      ],
      "result": { "item": "minecraft:quartz" }
    }).id('zarya:combiner/quartz')
    // 1 руда = 2x64 SiO2 + 64 Ba = 4 кварца
    e.remove({id:'alchemistry:dissolver/ores/quartz'})
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "tag": "forge:ores/quartz"
        },
        "count": 1
      },
      "output": {
        "rolls": 64,
        "weighted": false,
        "groups": [
          { // кварц 100%
            "probability": 100.0,
            "results": [
              { "item": "chemlib:barium", "count": 1 },
              { "item": "chemlib:silicon_dioxide", "count": 2 }
            ]
          },
          { // antimony_trioxide = Sb2O3 3%
            "probability": 3.0,
            "results": [
              { "item": "chemlib:antimony_trioxide", "count": 1 }
            ]
          },
          { // cesium_chloride = CsCl 7%
            "probability": 7.0,
            "results": [
              { "item": "chemlib:cesium_chloride", "count": 1 }
            ]
          },
          { // hassium = Hs 6%
            "probability": 6.0,
            "results": [
              { "item": "chemlib:hassium", "count": 1 }
            ]
          },
          { // einsteinium = Es 9%
            "probability": 9.0,
            "results": [
              { "item": "chemlib:einsteinium", "count": 1 }
            ]
          },
          { // bohrium = Bh 4%
            "probability": 4.0,
            "results": [
              { "item": "chemlib:bohrium", "count": 1 }
            ]
          },
          { // holmium = Ho 12%
            "probability": 12.0,
            "results": [
              { "item": "chemlib:holmium", "count": 1 }
            ]
          },
          { // moscovium = Mc 11%
            "probability": 11.0,
            "results": [
              { "item": "chemlib:moscovium", "count": 1 }
            ]
          },
          { // gadolinium = Gd 5%
            "probability": 5.0,
            "results": [
              { "item": "chemlib:gadolinium", "count": 1 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/ores/quartz')

  // Звезда Незера
    e.custom({
      "type": "alchemistry:dissolver",
      "group": "alchemistry:dissolver",
      "input": {
        "ingredient": {
          "item": "minecraft:nether_star"
        },
        "count": 1
      },
      "output": {
        "rolls": 1,
        "weighted": false,
        "groups": [
          { // Звезда незера 100%
            "probability": 100.0,
            "results": [
              { "item": "chemlib:mendelevium", "count": 64 },
              { "item": "chemlib:titanium", "count": 64 },
              { "item": "chemlib:litetium", "count": 64 },
              { "item": "chemlib:dysprosium", "count": 64 }
            ]
          }
        ]
      }
    }).id('zarya:dissolver/nether_quartz')

})