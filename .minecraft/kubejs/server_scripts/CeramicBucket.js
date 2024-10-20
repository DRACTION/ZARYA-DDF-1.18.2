onEvent('recipes', event => {
	event.remove({id: 'ceramicbucket:ceramic_bucket'})
	event.smelting('ceramicbucket:ceramic_bucket', 'ceramicbucket:unfired_clay_bucket').xp(0.3)
})
