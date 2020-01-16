<template>
	<div>
		<VItemGroup
			:value="field.value"
			v-bind="field.metadata"
			@change="emitChangeEvent"
		>
			<template v-for="(item, index) in field.items">
				<VItem
					v-slot:default="{ active, toggle }"
					:key="index"
					:value="item.value"
				>
					<VBtn
						block
						elevation="0"
						height="40"
						class="select-button-border mb-2 text-none"
						:color="active ? 'accent' : 'transparent'"
						@click="itemtoggle(item, active, toggle)"
					>
						<VLayout
							justify-center
							row
							class="mx-0"
						>
							<span
								class="body-1"
								:class="active ? 'white--text' : 'accent--text'"
							>{{ item.text }}</span>
							<VSpacer />
							<v-scroll-x-transition>
								<VIcon
									v-if="active"
									size="22"
									color="white"
								>
									{{ checkIcon }}
								</VIcon>
							</v-scroll-x-transition>
						</VLayout>
					</VBtn>
				</VItem>
			</template>
		</VItemGroup>
		<span
			v-if="field.metadata && field.metadata.hint"
			class="mx-4 v-messages theme--light"
		>{{ field.metadata.hint }} </span>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form field to select a value from a list */
	@Component
	export default class SelectButtonField extends FieldComponent {
		checkIcon = mdiCheck;

		/** toggle the item selection */
		itemtoggle(item: any, active: boolean, toggle: any) {
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
	.select-button-border {
		border: 1px solid var(--v-accent-base) !important;
	}
</style>
