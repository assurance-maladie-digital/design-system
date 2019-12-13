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
				<div v-bind="options.tooltipText">
					{{ value.tooltip }}
				</div>
			</VTooltip>
		</div>
		<div v-bind="options.description">
			{{ value.description }}
		</div>
		<div v-bind="options.field">
			<VTextField
				v-bind="value.metadata"
				:value="value.value"
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

	interface QuestionData {
		title: string;
		type: string;
		value: any;
		description?: string;
		tooltip?: string;
		metadata?: {
			[key: string]: any;
		};
	}

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
		mixins: [ customizable(config) ]
	})
	export default class Question extends Props {

		mdiInformation = mdiInformation;
		options!: Options;
		value!: QuestionData;

	}
</script>

<style scoped>
</style>
