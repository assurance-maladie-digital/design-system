<template>
	<div
		class="vd-choice-button-field"
		:class="{ 'vd-form-input': !isInline }"
	>
		<VBtnToggle
			v-bind="options"
			:value="choiceFieldValue"
			:multiple="multiple"
			:type="undefined"
			:class="{ 'column': !isInline }"
			class="vd-choice-button-field-toggle layout wrap accent--text"
		>
			<VBtn
				v-for="(item, index) in filteredItems"
				:key="index"
				:value="item.value"
				:outlined="!isSelected(item.value)"
				elevation="0"
				height="auto"
				min-height="40"
				active-class="white--text"
				class="text-none text-wrap py-2 text-left"
				color="accent"
				@click="toggleItem(item)"
			>
				<span class="text-body-1">
					{{ item.text }}
				</span>

				<VSpacer />

				<VIcon
					:style="getIconStyle(item)"
					class="ml-1 white--text flex-shrink-0"
				>
					{{ checkIcon }}
				</VIcon>
			</VBtn>
		</VBtnToggle>

		<template v-if="errorMessages">
			<p
				v-for="(errorMessage, index) in errorMessages"
				:key="index"
				class="px-3 mt-2 mb-0 v-messages error--text"
				:class="$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
			>
				{{ errorMessage }}
			</p>
		</template>

		<p
			v-else-if="showHint"
			class="px-3 mt-2 mb-0 v-messages"
			:class="$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
		>
			{{ options.hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import { ChoiceComponent } from '../mixins/choiceComponent';

	import { FieldItem } from '../types';
	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	const MixinsDeclaration = mixins(ChoiceComponent);

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
			if (!Array.isArray(this.items)) {
				return [];
			}

			const filteredItems = this.items.filter((item) => {
				return item.value !== null && item.value !== undefined;
			});

			return filteredItems;
		}

		get isInline(): boolean | null {
			return this.options?.inline as boolean | null;
		}

		get showHint(): boolean {
			return Boolean(this.options?.hint);
		}

		get errorMessages(): string[] | null {
			const errorMessages = this.options?.errorMessages;

			if (typeof errorMessages === 'string') {
				return [errorMessages];
			}

			if (Array.isArray(errorMessages) && errorMessages.length) {
				return errorMessages;
			}

			return null;
		}

		getIconStyle(item: FieldItem): IndexedObject {
			return {
				visibility: this.isSelected(item.value) ? 'visible' : 'hidden'
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

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
