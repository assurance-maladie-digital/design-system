<template>
	<div>
		<FormFieldList
			v-model="fieldList.questions"
			@change="listUpdated"
			@refresh="listRefreshed"
		/>

		<VSnackbar
			v-model="snackbar"
			color="info"
		>
			{{ snackbarText }}

			<template v-slot:action="{ attrs }">
				<VBtn
					text
					v-bind="attrs"
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

	import { FieldList } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component
	export default class FormFieldListEvents extends Vue {
		refresh = false;

		snackbar = false;
		snackbarText = '';

		fieldList: FieldList = {
			questions: {
				questionStringId: {
					title: 'Champ pas dynamique',
					type: 'text',
					value: null,
					fieldOptions: {
						label: 'Label du champ',
						outlined: true
					}
				},
				questionDateId: {
					title: 'Champ dynamique',
					type: 'date',
					value: null,
					dynamic: true,
					fieldOptions: {
						label: 'Date de naissance',
						outlined: true
					}
				}
			}
		};

		getSnackbarText(eventName: string): string {
			return `Événement "${eventName}" émis`;
		}

		listUpdated(): void {
			this.snackbar = true;
			this.snackbarText = this.getSnackbarText('change');
		}

		listRefreshed(): void {
			this.$nextTick(() => {
				this.snackbar = true;
				this.snackbarText = `${this.snackbarText}, ainsi que ${this.getSnackbarText('refresh')}`;
			});
		}
	}
</script>
