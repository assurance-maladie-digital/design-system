<template>
	<VLayout wrap>
		<VLayout
			v-for="columnIndex in columnsNumber"
			:key="columnIndex + '-loader'"
			class="vd-data-list-loading-item"
			column
		>
			<HeaderLoading
				class="mb-2 mt-3"
				height="1.75rem"
				width="100"
				dark
			/>

			<template v-for="index in itemsNumber">
				<HeaderLoading
					:key="index + '-key'"
					height="1.25rem"
					class="mb-1"
					width="60"
					dark
				/>

				<HeaderLoading
					:key="index + '-value'"
					class="mb-2"
					height="1.5rem"
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

<style lang="scss" scoped>
	.vd-data-list-loading-item {
		flex: none;
		margin-left: 8px;

		&:not(:last-child) {
			margin-right: 80px;
		}
	}

	@media only screen and (max-width: 425px) {
		.vd-data-list-loading-item {
			&:not(:last-child) {
				margin-right: 0;
			}
		}
	}
</style>
