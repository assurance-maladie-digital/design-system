<template>
	<div
		class="vd-data-list-loading"
	>
		<HeaderLoading
			v-if="heading"
			:dark="dark"
			:class="titleClass"
			height="1.5rem"
			width="100"
		/>

		<ul
			:class="listClass"
			class="vd-data-list-loading-items pl-0"
		>
			<li
				v-for="index in itemsNumber"
				:key="index + '-loading-item'"
				class="vd-data-list-loading-item mb-2"
				:style="{ width }"
			>
				<HeaderLoading
					height="1rem"
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
	import Vue, { PropType } from 'vue';
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
			/** Dark mode */
			dark: {
				type: Boolean,
				default: false
			},
			titleClass: {
				type: String,
				default: 'mb-3 headline'
			},
			/** The key/value width */
			width: {
				type: String,
				default: '200px'
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

		.vd-data-list-loading-items {
			list-style: none;

			.vd-data-list-loading-item {
				display: flex;
				flex-wrap: wrap;
			}

			// Column
			&.vd-column .vd-data-list-loading-item {
				flex-direction: column;
			}

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
