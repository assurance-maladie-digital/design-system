<template>
	<VLayout
		column
		class="vd-layout ma-n4"
	>
		<h4
			v-if="getField(0).title"
			class="mx-4 mt-4 my-0 body-1"
		>
			<span>{{ getField(0).title }}</span>

			<VTooltip
				v-if="getField(0).tooltip"
				right
			>
				<template v-slot:activator="{ on }">
					<VBtn
						icon
						class="ml-1"
						v-on="on"
					>
						<VIcon size="20">
							{{ informationIcon }}
						</VIcon>
					</VBtn>
				</template>

				<span>{{ getField(0).tooltip }}</span>
			</VTooltip>
		</h4>

		<p
			v-if="getField(0).description"
			:class="descriptionColor"
			class="body-2 mx-4 mb-0 mt-1"
		>
			{{ getField(0).description }}
		</p>

		<slot
			name="content-1"
			v-bind="getField(0)"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiInformationOutline } from '@mdi/js';

	import LayoutComponent from '../mixins/layoutComponent';

	@Component
	export default class LayoutQuestion extends LayoutComponent {
		informationIcon = mdiInformationOutline;

		/**
		 * Color of the description text (changes in light/dark mode)
		 *
		 * @returns {string} The color class
		 */
		get descriptionColor(): string {
			let color = 'grey--text ';

			// Only the modifier changes
			color += this.$vuetify.theme.dark ? 'text--lighten-1' : 'text--darken-1';

			return color;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-layout ::v-deep .v-input {
		width: 50%;
		flex: none;
	}
	.vd-layout ::v-deep .v-item-group {
		width: 50%;
		flex: none;
	}
</style>
