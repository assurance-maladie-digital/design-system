<template>
	<div>
		<FormFieldList
			v-model="fieldList.questions"
			@change="listChanged"
			@refresh="listRefresh"
		/>

		<DialogBox v-model="dialog">
			<VCardText class="px-0">
				<p>Un champ à été modifier</p>
				<p>Evènement `change` emit</p>
				<p v-if="refresh">
					Evènement `refresh` émit aussi car ce champ est dynamique
				</p>
			</VCardText>

			<template #actions>
				<VBtn
					color="primary"
					@click="dialog = false"
				>
					Fermer
				</VBtn>
			</template>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldList } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component<FormFieldListEvents>({
		watch: {
			dialog(newValue) {
				if (!newValue) {
					this.refresh = false;
				}
			}
		}
	})
	export default class FormFieldListEvents extends Vue {
		dialog = false;
		refresh = false;

		fieldList: FieldList = {
			questions: {
				questionStringId: {
					type: 'text',
					value: null,
					fieldOptions: {
						label: 'Label du champ',
						outlined: true
					}
				},
				questionDateId: {
					type: 'date',
					value: null,
					fieldOptions: {
						label: 'Date de naissance',
						outlined: true
					}
				}
			}
		};

		listChanged(): void {
			setTimeout(() => {
				this.dialog = true;
			}, 400);
		}

		listRefresh(): void {
			this.refresh = true;
		}
	}
</script>
