<template>
	<VLayout>
		<VLayout
			v-for="columnIndex in columnsNumber"
			:key="columnIndex + '-loader'"
			:style="{
				marginRight: columnIndex !== columnsNumber ? '80px' : undefined
			}"
			column
		>
			<HeaderLoading
				height="26"
				width="100"
				dark
			/>

			<template v-for="index in itemsNumber">
				<HeaderLoading
					:key="index + '-key'"
					class="mt-4"
					height="14"
					width="60"
					dark
				/>

				<HeaderLoading
					:key="index + '-value'"
					class="mt-2"
					height="22"
					width="90"
					dark
				/>
			</template>
		</VLayout>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			columnsNumber: {
				type: Number,
				default: 4
			},
			itemsNumber: {
				type: Number,
				default: 2
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DataListLoading extends MixinsDeclaration {}
</script>
