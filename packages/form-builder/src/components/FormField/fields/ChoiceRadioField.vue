<template>
	<div class="vd-choice-button-field vd-form-input">
		<VBtnToggle
			v-bind="field.fieldOptions"
			:value="field.value"
			:multiple="false"
			:class="{ 'column': !isInline }"
			class="vd-choice-button-field-toggle mb-2 layout wrap accent--text"
			@change="emitChangeEvent"
		>
			<VBtn
				v-for="(item, index) in filteredItems"
				:key="index"
				:value="item.value"
				:outlined="field.value !== item.value"
				elevation="0"
				height="40"
				active-class="white--text"
				class="text-none"
				color="accent"
			>
				<span class="text-body-1">
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
			v-if="showHint"
			class="px-3 mb-0 v-messages"
			:class="this.$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
		>
			{{ field.fieldOptions.hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import { FieldComponent } from '../mixins/fieldComponent';

	import { FieldItem } from '../types';
	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Form field to select a value from a list */
	@Component
	export default class ChoiceRadioField extends MixinsDeclaration {
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

			const filteredItems = this.field.items.filter((item) => {
				return item.value !== null || item.value !== undefined;
			});

			return filteredItems;
		}

		get isInline(): boolean | null {
			return this.field?.fieldOptions?.inline as unknown as boolean | null;
		}

		get showHint(): boolean {
			return Boolean(this.field.fieldOptions?.hint);
		}

		getIconStyle(item: FieldItem): IndexedObject {
			return {
				visibility: item.value === this.field.value ? 'visible' : 'hidden'
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
