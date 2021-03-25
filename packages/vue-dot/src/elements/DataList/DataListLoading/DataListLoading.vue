<template>
	<div
		role="alert"
		aria-busy="true"
		aria-live="polite"
		class="vd-data-list-loading"
	>
		<HeaderLoading
			v-if="heading"
			height="1.5rem"
			class="mb-4"
			width="100"
		/>

		<ul class="vd-data-list-loading-items pl-0">
			<li
				v-for="index in itemsNumber"
				:key="index + '-loading-item'"
				class="vd-data-list-loading-item mb-4"
				:class="{ 'vd-row': row }"
			>
				<HeaderLoading
					v-if="!row"
					height="1rem"
					class="mb-1"
					width="60"
				/>

				<HeaderLoading
					height="1.5rem"
					:width="row ? '150' : '90'"
				/>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			/** Number of items */
			itemsNumber: {
				type: Number,
				default: 1
			},
			/** Heading Loading option */
			heading: {
				type: Boolean,
				default: false
			},
			row: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DataListLoading extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.vd-data-list-loading {
		.vd-data-list-loading-items {
			list-style: none;
		}

		&:not(:last-child) {
			margin-right: 80px;
		}
	}

	.vd-row {
		display: flex;
		flex-wrap: wrap;
	}

	@media only screen and (max-width: 425px) {
		.vd-data-list-loading {
			&:not(:last-child) {
				margin-right: 0;
			}
		}
	}
</style>
