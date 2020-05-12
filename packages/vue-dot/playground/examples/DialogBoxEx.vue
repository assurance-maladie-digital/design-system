<template>
	<DocSection title="DialogBox">
		<ListButtonAction
			:button-actions="buttonActions"
		/>

		<DialogBox
			:dialog.sync="dialogOne"
			:button-actions="[]"
			title="DIALOG TEXT PLAIN"
		>
			<template #content>
				<div>This is a dialog with a simple text.</div>
			</template>
		</DialogBox>

		<DialogBox
			:dialog.sync="dialogTwo"
			title="DIALOG FORM"
		>
			<template #content>
				<VForm
					ref="form"
					v-model="valid"

					class="form-builder"
				>
					<VTextField
						v-model="field.lastname"
						:rules="nameRules"
						label="Login"
						required
					/>
					<VTextField
						v-model="field.firstname"
						label="Password"
						:rules="nameRules"
						type="password"
					/>
				</VForm>
			</template>
			<template #footer>
				<VBtn
					color="primary"
					class="ml-6 px-5"
					@click="action('validate')"
				>
					VALIDATE
				</VBtn>
				<VBtn
					color="normal"
					class="ml-6 px-5"
					@click="action('reset')"
				>
					RESET
				</VBtn>
			</template>
		</DialogBox>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { ButtonAction } from '../../src/elements/ListButtonAction/types';
	import { Refs } from '../../src/types';

	@Component
	export default class DialogBoxEx extends Vue {
		// Refs
		$refs!: Refs<{
			form: HTMLFormElement;
		}>;
		dialogOne = false;
		dialogTwo = false;
		field: { login?: string, password?: string } = {};
		valid = true;
		nameRules = [
			(v: any) => !!v || 'Name is required',
			(v: any) => (v && v.length <= 20) || 'Name must be less than 10 characters'
		];
		buttonActions: ButtonAction[] = [
			{
				label: 'Dialog Text',
				action: () => {
					this.dialogText();
				}
			},
			{
				label: 'Dialog Form',
				color: 'primary',
				action: () => {
					this.dialogForm();
				}
			}
		];
		/**
		 * show dialog text plain
		 */
		dialogText() {
			return this.dialogOne = true;
		}

		/**
		 *  show dialog with form
		 */
		dialogForm() {
			return this.dialogTwo = true;
		}

		/**
		 * trigger action type: validate or reset
		 *  Dialog: Form
		 *
		 * @param type
		 */
		action(type: string) {
			switch (type) {
				case 'validate':
					if (this.$refs.form.validate()) {
						this.dialogTwo = false;
					}
					break;
				case 'reset':
					this.$refs.form.reset();
					break;
			}
		}
	}
</script>
