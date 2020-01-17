<template>
	<div>
		<VItemGroup
			:value="field.value"
			v-bind="field.metadata"
			@change="emitChangeEvent"
		>
			<template v-for="(item, index) in field.items">
				<VItem
					#default="{ active, toggle }"
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
						@click="itemtoggle(item, active, toggle)"
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
			v-if="field.metadata && field.metadata.hint"
			class="mx-4 v-messages theme--light mb-0"
		>
			{{ field.metadata.hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import FieldComponent from '../mixins/fieldComponent';

	import { FieldItem } from '../types';

	/** Form field to select a value from a list */
	@Component
	export default class ChoiceButtonField extends FieldComponent {
		checkIcon = mdiCheck;

		/** toggle the item selection */
		itemtoggle(item: FieldItem, active: boolean, toggle: Function) {
			// in multpple
			// uncheck all other selected items when check the item with 'alone' property
			// or uncheck the items with 'alone' prop if selected when item without alone is selected
			if (item.alone && !active && this.field.metadata.multiple) {
				this.field.value = [];
			} else if (
				this.field.items &&
				Array.isArray(this.field.value) &&
				!item.alone &&
				!active &&
				this.field.metadata.multiple
			) {
				// delete each selected item with 'alone' prop to true
				let index = this.field.value.length - 1;
				while (index >= 0) {
					const valueSelected = this.field.value[index];
					// search if the item is alone
					if (
						this.field.items.find((element) => {
							return element.value === valueSelected && element.alone;
						})
					) {
						// delete alone item
						this.field.value.splice(index, 1);
					}

					index -= 1;
				}
			}

			// finaly toggle the item
			Vue.nextTick(() => {
				toggle();
			});
		}
	}
</script>

<style lang="scss" scoped>
</style>
