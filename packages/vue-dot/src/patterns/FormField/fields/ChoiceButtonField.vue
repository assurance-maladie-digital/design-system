<template>
	<div>
		<VItemGroup
			:value="choiceValue"
			v-bind="field.fieldOptions"
		>
			<template v-for="(item, index) in filteredItems">
				<VItem
					#default="{ active }"
					:key="index"
					:value="item.value"
				>
					<VBtn
						block
						elevation="0"
						height="40"
						class="mb-2 text-none"
						:outlined="!active"
						color="accent"
						@click="toggleItem(item, active)"
					>
						<span class="body-1">
							{{ item.text }}
						</span>

						<VSpacer />

						<VScrollXTransition>
							<VIcon v-if="active">
								{{ checkIcon }}
							</VIcon>
						</VScrollXTransition>
					</VBtn>
				</VItem>
			</template>
		</VItemGroup>

		<p
			v-if="field && field.fieldOptions && field.fieldOptions.hint"
			class="mx-4 mb-0 v-messages"
			:class="this.$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
		>
			{{ field.fieldOptions.hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import { FieldItem } from '../types';

	import { ChoiceField } from '../mixins/choiceField';
	import { FieldComponent } from '../mixins/fieldComponent';

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
	}
</script>
