<template>
	<VContainer fluid>
		<div v-if="value.title">
			<span v-bind="options.title">{{ value.title }}</span>
			<VTooltip v-bind="options.tooltip">
				<template v-slot:activator="{ on }">
					<v-btn
						v-bind="options.tooltipBtn"
						icon
						v-on="on"
					>
						<VIcon>{{ mdiInformation }}</VIcon>
					</v-btn>
				</template>
				<div v-bind="options.tooltipText">{{ value.tooltip }}</div>
			</VTooltip>
		</div>
		<div v-bind="options.description">{{ value.description }}</div>
		<div v-bind="options.field">
			<FormField
				:value="formValue"
				@change="formFieldChanged"
			/>
		</div>
	</VContainer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiInformation } from '@mdi/js';

	import config from './config';

	import customizable, { Options } from '../../mixins/customizable';

	import { QuestionData, ComponentMap } from './types';

	import { Field } from '../FormField/types';

	const Props = Vue.extend({
		props: {
			value: {
				type: Object,
				required: true
			}
		}
	});

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		mixins: [customizable(config)]
	})
	export default class Question extends Props {
		componentMap: ComponentMap = {
			short_text: 'string'
		};

		mdiInformation = mdiInformation;
		options!: Options;
		value!: QuestionData;

		get formValue() {
			return {
				value: this.value.value,
				label: this.value.metadata ? this.value.metadata.label : null,
				options: this.value.metadata,
				type: this.componentMap[this.value.type]
			};
		}

		formFieldChanged(formFieldValue: Field) {
			this.$emit('change', { ...this.value, value: formFieldValue.value });
		}
	}
</script>

<style scoped>
</style>
