<template>
	<VLayout wrap>
		<slot
			name="content-1"
			v-bind="{ field: fields[0] }"
		/>

		<slot
			name="content-2"
			v-bind="{ field: fields[1] }"
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
	export default class TwoColumnsLayout extends Props {}
</script>
