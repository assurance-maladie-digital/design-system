<template>
	<SelectBtnField
		v-bind="options"
		:value="choiceFieldValue"
		:items="filteredItems"
		:multiple="multiple"
		:error-messages="errorMessages"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import SelectBtnField from '@cnamts/vue-dot/src/patterns/SelectBtnField';

	import { ChoiceComponent } from '../mixins/choiceComponent';
	import { SelectBtnItem } from '@cnamts/vue-dot/src/patterns/SelectBtnField/types';

	const MixinsDeclaration = mixins(ChoiceComponent);

	@Component({
		components: {
			SelectBtnField
		}
	})
	export default class ChoiceButtonField extends MixinsDeclaration {
		get filteredItems(): SelectBtnItem[] {
			// Rename alone prop to unique for backward compatibility
			return this.items.map((item) => {
				if (item.alone) {
					delete item.alone;
					(item as SelectBtnItem).unique = true;
				}

				return item as SelectBtnItem;
			});
		}
	}
</script>
