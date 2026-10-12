// Петиция: планшет Create с опросом комфорта жителя (Villager Comfort).
// 0 комфорта = 100%, каждый пункт ниже нуля уменьшает процент на столько же.

// [не жалуется, жалоба при отрицательном значении]
var PetitionLabels = {
	bedroom_size: ['На размер спальни не жалуется', 'Маленькая спальня'],
	beds: ['На число кроватей не жалуется', 'Много кроватей в спальне'],
	bedroom_light: ['В спальне светло', 'Темно в спальне'],
	workstation_in_bedroom: ['Рабочее место отдельно от спальни', 'Рабочее место в спальне'],
	workplace_size: ['Рабочее место просторное', 'Тесное рабочее место'],
	workstations: ['На соседние рабочие места не жалуется', 'Много рабочих мест рядом'],
	workplace_light: ['На работе светло', 'Темно на работе'],
	distance: ['На дорогу до работы не жалуется', 'Работа слишком близко к кровати'],
	outside: ['Достаточно времени на свежем воздухе', 'Мало бывает на улице'],
	zombie: ['Зомби? Не, не слышал', 'Напуган зомби'],
	sleep: ['Хорошо спит', 'Давно не спал']
}

const PetitionTextComponent = java('net.minecraft.network.chat.TextComponent')
const PetitionTranslatableComponent = java('net.minecraft.network.chat.TranslatableComponent')
const PetitionRegistry = java('net.minecraft.core.Registry')
const PetitionArrayList = java('java.util.ArrayList')

// Класс-фильтр KubeJS запрещает java('com.simibubi...') и java('dev.ghen...'), поэтому классы берутся через загрузчик игры
var petitionReflect = null

function petitionReflection(player) {
	if (petitionReflect != null) return petitionReflect
	let loader = player.getClass().getClassLoader()
	let findMethod = (cls, name) => {
		let methods = cls.getMethods()
		for (let i = 0; i < methods.length; i++)
			if (methods[i].getName() == name) return methods[i]
		return null
	}
	let entryClass = loader.loadClass('com.simibubi.create.content.equipment.clipboard.ClipboardEntry')
	let entryCtor = null
	let ctors = entryClass.getConstructors()
	for (let i = 0; i < ctors.length; i++)
		if (ctors[i].getParameterCount() == 2) entryCtor = ctors[i]
	petitionReflect = {
		explain: findMethod(loader.loadClass('dev.ghen.villagercomfort.comfort.ComfortHelper'), 'explain'),
		saveAll: findMethod(entryClass, 'saveAll'),
		entry: (checked, text) => entryCtor.newInstance([checked, new PetitionTextComponent(text)])
	}
	return petitionReflect
}

function petitionOf(item) {
	return item && item.id == 'create:clipboard' && item.nbt && item.nbt.zarya_petition
}

function petitionPad(n) {
	return n < 10 ? '0' + n : '' + n
}

function petitionNow() {
	let d = new Date()
	return petitionPad(d.getDate()) + '.' + petitionPad(d.getMonth() + 1) + '.' + d.getFullYear() +
		' ' + petitionPad(d.getHours()) + ':' + petitionPad(d.getMinutes())
}

// «Имя, Профессия» или «Профессия». Профессия — тот же ключ, что у жителя в игре.
function petitionWho(villager) {
	let path = String(PetitionRegistry.VILLAGER_PROFESSION.getKey(villager.getVillagerData().getProfession()).getPath())
	let profession = new PetitionTranslatableComponent(villager.getType().getDescriptionId() + '.' + path)
	let who = new PetitionTextComponent('')
	if (villager.hasCustomName()) {
		let name = String(villager.getCustomName().getString())
		// Villager Names на ПКМ на мгновение дописывает « the Farmer» в имя.
		let suffix = ' the ' + path.charAt(0).toUpperCase() + path.substring(1)
		if (name.length >= suffix.length && name.substring(name.length - suffix.length) == suffix)
			name = name.substring(0, name.length - suffix.length).trim()
		if (name)
			who = who.append(name).append(', ')
	}
	return who.append(profession)
}

// Планшет Create: пункт занимает max(12, строк * 9 + 3) px, строка 150 px, на странице меньше 185 px.
// Шрифт на сервере не измерить, поэтому ширина символов взята с запасом.
const PETITION_PAGE_HEIGHT = 180
const PETITION_LINE_WIDTH = 150

function petitionTextWidth(text) {
	let width = 0
	for (let i = 0; i < text.length; i++) {
		let c = text.charAt(i)
		if (c == ' ') width += 4
		else if ('жшщыюмЖШЩЫЮМmwMW%'.indexOf(c) >= 0) width += 8
		else width += 6
	}
	return width
}

function petitionEntryHeight(text) {
	let words = text.split(' ')
	let lines = 1
	let width = 0
	for (let i = 0; i < words.length; i++) {
		let w = petitionTextWidth(words[i])
		if (width > 0 && width + 4 + w > PETITION_LINE_WIDTH) {
			lines++
			width = 0
		}
		width += (width > 0 ? 4 : 0) + w
		while (width > PETITION_LINE_WIDTH) {
			lines++
			width -= PETITION_LINE_WIDTH
		}
	}
	return Math.max(12, lines * 9 + 3)
}

function petitionComplaint(id, value) {
	let label = PetitionLabels[id]
	if (!label) return id + ' (' + value + ')'
	return (value < 0 ? label[1] : label[0]) + ' (' + value + ')'
}

onEvent('recipes', e => {
	//////////////// Петиция ////////////////
	//1 планшет + 1 изумруд = 1 петиция
	e.shapeless(Item.of('create:clipboard', '{zarya_petition:1b}').withName(Text.of('Петиция')), [
		'create:clipboard',
		'minecraft:emerald'
	]).id('zarya:shapeless/petition')
})

onEvent('item.entity_interact', event => {
	if (String(event.target.type) != 'minecraft:villager') return
	let inMain = petitionOf(event.player.mainHandItem)
	let inOff = petitionOf(event.player.offHandItem)
	if (!inMain && !inOff) return
	// После отмены игра повторяет клик второй рукой, и без этого открылась бы торговля
	event.cancel()
	if (!petitionOf(event.item)) return
	if (inMain && String(event.hand) != 'MAIN_HAND') return

	let player = event.player.minecraftEntity
	// Без задержки следом приходит ПКМ предметом, и планшет Create помечается как открытый
	player.getCooldowns().addCooldown(player.getItemInHand(event.hand).getItem(), 10)

	try {
		let r = petitionReflection(player)
		let villager = event.target.minecraftEntity
		let survey = r.explain.invoke(null, [villager])
		let factors = survey.getFactors()
		let total = Number(survey.getTotal())

		let lines = [[false, petitionNow()], [false, 'Уровень комфорта']]
		for (let i = 0; i < factors.size(); i++) {
			let factor = factors.get(i)
			let value = Number(factor.getValue())
			lines.push([value >= 0, petitionComplaint(String(factor.getId()), value)])
		}
		lines.push([total >= 0, 'Итого: ' + (total + 100) + '% комфорта'])

		let pages = new PetitionArrayList()
		let page = new PetitionArrayList()
		let used = 0
		for (let i = 0; i < lines.length; i++) {
			let height = petitionEntryHeight(lines[i][1])
			if (used + height > PETITION_PAGE_HEIGHT && page.size() > 0) {
				pages.add(page)
				page = new PetitionArrayList()
				used = 0
			}
			page.add(r.entry(lines[i][0], lines[i][1]))
			used += height
		}
		pages.add(page)

		let handStack = player.getItemInHand(event.hand)
		let split = handStack.getCount() > 1
		let stack = split ? handStack.split(1) : handStack
		r.saveAll.invoke(null, [pages, stack])
		let tag = stack.getOrCreateTag()
		tag.putBoolean('Readonly', true)
		tag.putBoolean('zarya_petition', true)
		tag.putInt('Type', 1)
		tag.putInt('PreviouslyOpenedPage', 0)
		stack.setHoverName(new PetitionTextComponent('Петиция (').append(petitionWho(villager)).append(')'))

		if (split && !player.getInventory().add(stack))
			player.drop(stack, false)

		event.player.tell(new PetitionTextComponent('Записаны жалобы ').append(petitionWho(villager)))
	} catch (err) {
		console.error(`[Z@RYA] Петиция: не удалось записать опрос: ${err}`)
	}
})

onEvent('item.right_click', event => {
	if (!petitionOf(event.item)) return
	if (!event.item.nbt.Pages) event.cancel()
})

// Пустая петиция не открывает редактор, а Shift+ПКМ не ставит её блоком
onEvent('block.right_click', event => {
	if (!petitionOf(event.item)) return
	if (!event.item.nbt.Pages || event.player.minecraftEntity.isShiftKeyDown()) event.cancel()
})
