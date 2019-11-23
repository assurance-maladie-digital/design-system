<template>
	<VLayout>
		<slot
			name="content-1"
			v-bind="{ field: fields[0] }"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			fields: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component
	export default class OneColumnLayout extends Props {}
</script>
