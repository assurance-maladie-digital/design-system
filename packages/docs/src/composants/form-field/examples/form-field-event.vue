<template>
	<div>
		<FormField
			:field="field"
			@change="fieldChanged"
		/>
		<DialogBox
			v-model="dialog"
			@cancel="dialog = false"
			@confirm="dialog = false"
		>
			<p>
				Evènement 'change' émit
			</p>
			<pre
				class="mt-4"
				:class="[
					$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
				]"
				v-html="field"
			/>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldEventEx extends Vue {
		dialog = false;

		field: Field = {
			type: 'date',
			value: null,
			fieldOptions: {
				outlined: true
			}
		};

		async fieldChanged(field: Field): Promise<void> {
			this.field = field;

			setTimeout(() => {
				this.dialog = true;
			}, 100);

		}

	}
</script>
