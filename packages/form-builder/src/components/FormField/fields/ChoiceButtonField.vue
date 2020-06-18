<template>
	<div class="vd-choice-button-field vd-form-input">
		<VBtnToggle
			v-bind="field.metadata"
			:value="choiceValue"
			:multiple="field.multiple"
			:class="{ 'column': !isInline }"
			class="vd-choice-button-field-toggle mb-2 layout wrap accent--text"
		>
			<VBtn
				v-for="(item, index) in filteredItems"
				:key="index"
				:value="item.value"
				:outlined="!isSelected(item.value)"
				elevation="0"
				height="40"
				active-class="white--text"
				class="text-none"
				color="accent"
				@click="toggleItem(item)"
			>
				<span class="body-1">
					{{ item.text }}
				</span>

				<VSpacer />

				<VIcon
					:style="getIconStyle(item)"
					class="ml-1 white--text"
				>
					{{ checkIcon }}
				</VIcon>
			</VBtn>
		</VBtnToggle>

		<p
			v-if="field && field.metadata && field.metadata.hint"
			class="px-3 mb-0 v-messages"
			:class="this.$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
		>
			{{ field.metadata.hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import { ChoiceField } from '../mixins/choiceField';
	import { FieldComponent } from '../mixins/fieldComponent';

	import { FieldItem } from '../types';
	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	const MixinsDeclaration = mixins(FieldComponent, ChoiceField);

	/** Form field to select a value from a list */
	@Component
	export default class ChoiceButtonField extends MixinsDeclaration {
		checkIcon = mdiCheck;

		/**
		 * Filter items with truthy value only
		 *
		 * @returns {FieldItem[]} The filtered items
		 */
		get filteredItems(): FieldItem[] {
			if (!Array.isArray(this.field.items)) {
				return [];
			}

			const filteredItems = this.field.items.filter((item) => Boolean(item.value));

			return filteredItems;
		}

		get isInline(): boolean | null {
			return this.field?.metadata?.inline as unknown as boolean | null;
		}

		get showHint(): boolean {
			return Boolean(this.field.metadata?.hint);
		}

		getIconStyle(item: FieldItem): IndexedObject {
			return {
				visibility: this.isSelected(item.value) ? 'visible' : 'hidden'
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/vue-dot/src/tokens';

	.vd-choice-button-field-toggle {
		background: none !important;

		&.column .v-btn {
			border-radius: 4px !important;
			border-width: 1px !important;

			+ .v-btn {
				margin-top: 8px;
			}
		}

		.v-btn {
			background: #fff;

			&.v-btn--active::before {
				opacity: 0 !important;
			}
		}

		&.theme--dark {
			.v-btn {
				background: #1e1e1e;
			}
		}

		&:not(.v-btn-toggle--group) .v-btn.v-btn {
			border-color: $vd-accent !important;
		}
	}
</style>
