<template>
	<section class="doc-api">
		<DocApiItems
			:lang="lang"
			:value="value"
			:api="api"
		/>
	</section>
</template>

<script>
	export default {
		name: 'DocApi',
		props: {
			lang: {
				type: String,
				default: ''
			},
			value: {
				type: Array,
				default: () => ([])
			},
			api: Object
		}
	}
</script>

<style lang="scss" scoped>
	.doc-api {
		width: 100%;
	}
</style>
