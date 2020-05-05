<template>
	<div
		class="vd-data-list-loading"
	>
		<HeaderLoading
			v-if="heading"
			class="mb-2 mt-3"
			height="1.75rem"
			width="100"
			:dark="dark"
		/>

		<ul
			:class="listClass"
			class="vd-data-list-loading-items pl-0"
		>
			<li
				v-for="index in itemsNumber"
				:key="index + '-loading-item'"
				class="mr-2"
			>
				<HeaderLoading
					height="1.25rem"
					class="mb-1"
					width="60"
					:dark="dark"
				/>

				<HeaderLoading
					class="mb-2"
					height="1.5rem"
					width="90"
					:dark="dark"
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
			},
			flex: {
				type: Boolean,
				default: false
			},
			/** Is dark mode */
			dark: {
				type: Boolean,
				default: false
			}

		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DataListLoading extends MixinsDeclaration {
		get listClass() {
			return {
				'vd-column': !this.row || this.flex,
				'vd-flex': this.flex
			};
		}
	}
</script>

<style lang="scss" scoped>
	.vd-data-list-loading {
		flex: none;
		margin-left: 8px;

		.vd-data-list-loading-items {
			list-style: none;

			&.vd-flex {
				display: flex;
				flex-wrap: wrap;
			}
		}

		&:not(:last-child) {
			margin-right: 80px;
		}
	}

	@media only screen and (max-width: 425px) {
		.vd-data-list-loading {
			&:not(:last-child) {
				margin-right: 0;
			}
		}
	}
</style>
