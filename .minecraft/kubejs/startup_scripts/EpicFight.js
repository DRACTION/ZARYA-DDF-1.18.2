// Чары Farmer's Delight «Предательство» (backstabbing) по умолчанию только на ножах.
// Этот скрипт разрешает их и для кинжалов Epic Fight (стол, наковальня, книги).
onEvent('postinit', () => {
	if (global.zaryaBackstabbingOnDaggers) {
		return
	}
	global.zaryaBackstabbingOnDaggers = true

	let EnchantmentCategory = java('net.minecraft.world.item.enchantment.EnchantmentCategory')
	let ItemStack = java('net.minecraft.world.item.ItemStack')
	let ForgeRegistries = java('net.minecraftforge.registries.ForgeRegistries')

	let ench = Utils.getRegistries().enchantments().get('farmersdelight:backstabbing')
	if (!ench) {
		console.error('[Z@RYA] farmersdelight:backstabbing not found')
		return
	}

	let isEpicFightDagger = (item) => {
		if (!item) {
			return false
		}
		let id = ForgeRegistries.ITEMS.getKey(item)
		if (id == null) {
			return false
		}
		let s = String(id)
		return s.startsWith('epicfight:') && s.endsWith('_dagger')
	}

	let knifeCat = ench.category
	let applied = false

	let catClass = knifeCat.getClass()
	while (catClass != null && !applied) {
		let catFields = catClass.getDeclaredFields()
		for (let i = 0; i < catFields.length; i++) {
			let f = catFields[i]
			if ((f.getModifiers() & 8) != 0 || String(f.getType().getName()) != 'java.util.function.Predicate') {
				continue
			}
			f.setAccessible(true)
			let val = f.get(knifeCat)
			if (val != null) {
				f.set(knifeCat, val.or(item => isEpicFightDagger(item)))
				applied = true
				break
			}
		}
		catClass = catClass.getSuperclass()
	}

	if (!applied) {
		let newCat = EnchantmentCategory.create('zarya_knife_or_dagger', item => {
			return knifeCat.canEnchant(item) || isEpicFightDagger(item)
		})
		let eClass = ench.getClass()
		while (eClass != null && !applied) {
			let eFields = eClass.getDeclaredFields()
			for (let i = 0; i < eFields.length; i++) {
				let f = eFields[i]
				if ((f.getModifiers() & 8) != 0) {
					continue
				}
				f.setAccessible(true)
				if (knifeCat.equals(f.get(ench))) {
					f.set(ench, newCat)
					applied = true
					break
				}
			}
			eClass = eClass.getSuperclass()
		}
	}

	let dagger = Utils.getRegistries().items().get('epicfight:iron_dagger')
	let ok = dagger && ench.canEnchant(new ItemStack(dagger))
	if (ok) {
		console.info('[Z@RYA] Предательство (backstabbing) доступно для кинжалов Epic Fight')
	} else {
		console.error('[Z@RYA] Не удалось разрешить backstabbing для кинжалов')
	}
})
