<template>
	<div>
		<FilterModule
			v-bind="$attrs"
			v-on="$listeners"
			@filter-list="displayFIlters($event)"
		/>
		<VSnackbar
			v-if="snackbarText"
			v-model="snackbar"
			color="info"
		>
			{{ snackbarText }}

			<template #action="{ attrs }">
				<VBtn
					v-bind="attrs"
					text
					@click="snackbar = false"
				>
					Fermer
				</VBtn>
			</template>
		</VSnackbar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	const filters: Field[] = [
		{
			type: 'select',
			multiple: true,
			dynamic: true,
			items: [
				{
					text: 'Email',
					value: 'email'
				},
				{
					text: 'Courrier',
					value: 'mail'
				},
				{
					text: 'SMS',
					value: 'sms'
				}
			],
			value: null,
			fieldOptions: {
				outlined: true,
				label: 'Moyen de contact',
				filterTitle: 'Moyen de contact'
			}
		},
		{
			type: 'range',
			min: 0,
			max: 100,
			value: null,
			fieldOptions: {
				outlined: true,
				filterTitle: 'Intervalles'
			}
		},
		{
			type: 'text',
			value: null,
			fieldOptions: {
				label: 'Entrez un nom',
				hideDetails: true,
				outlined: true,
				filterTitle: 'Nom de famille'
			}
		}
	];

	@Component
	export default class FilterModuleUsage extends Vue {
		snackbar = false;
		snackbarText: Field[] | null = null;

		defaultProps = {
			filters
		};

		displayFIlters( filtersArray: Field[] ): void {
			this.$nextTick(() => {
				this.snackbar = true;
				this.snackbarText = filtersArray;
			});
		}
	}
</script>
