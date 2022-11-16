<template>
	<div>
		<VTextField
			v-model="internalValue"
			label="Rechercher"
			outlined
			clearable
		>
			<template #prepend-inner>
				<VIcon>
					{{ searchIcon }}
				</VIcon>
			</template>
		</VTextField>
		<VCol>
			<div
				v-for="item in listSearch"
				:key="item"
			>
				<VRow>
					<div>
						<v-checkbox
							height="10"
							:value="item"
						/>
					</div>
					<VCol class="d-flex align-center">
						{{ item }}
					</VCol>
				</VRow>
			</div>
		</VCol>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { PropType } from 'vue/types/v3-component-props';
	import { mdiMagnify } from '@mdi/js';

	interface InternalValue {
		search: string;
	}

	const Props = Vue.extend({
		props: {
			value: {
				type: Object as PropType<InternalValue>,
				required: true
			}
		}
	});

	@Component<SearchFilter>({
		watch: {
			value(newValue: InternalValue) {
				this.internalValue = newValue;
			}
		}
	})

	export default class SearchFilter extends Props {
		searchIcon = mdiMagnify;
		listSearch: Array<string> = [
			'foo',
			'bar',
			'baz'
		];

		internalValue: InternalValue = this.value;
	}
</script>
