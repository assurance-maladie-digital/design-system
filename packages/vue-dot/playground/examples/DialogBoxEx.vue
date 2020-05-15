<template>
	<DocSection title="DialogBox">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Show list of button actions
		</h2>
		<ListButtonAction
			:button-actions="buttonActions"
		/>
		<DialogBox
			:dialog.sync="dialogSize"
			:button-actions="[]"
			:title="size"
			:size="size"
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
					color="normal"
					class="ml-6 px-5"
					@click="action('reset')"
				>
					ANNULER
				</VBtn>
				<VBtn
					color="primary"
					class="ml-6 px-5"
					@click="action('validate')"
				>
					VALIDER
				</VBtn>
			</template>
		</DialogBox>

		<DialogBox
			:dialog.sync="dialogThree"
			title="DIALOG DRAGGABLE"
			is-draggable
			@cancel="dialogThree=false"
			@validate="dialogThree=false"
		>
			<template #content>
				<div>Click to the top of Dialog then with a mousedown drag to left, right; to and bottom</div>
			</template>
			<template #footer />
		</DialogBox>
		<div class="mg" />
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Select different size of the dialog
		</h2>
		<v-radio-group v-model="size">
			<v-radio
				label="x-small"
				value="x-small"
			/>

			<v-radio
				label="small"
				value="small"
			/>

			<v-radio
				label="medium"
				value="medium"
			/>

			<v-radio
				label="large"
				value="large"
			/>

			<v-radio
				label="x-large"
				value="x-large"
			/>
		</v-radio-group>
	</DocSection>
</template>
<style lang="scss">
	.mg{margin-top:20px}
</style>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { ButtonAction } from '../../src/elements/ListButtonAction/types';
	import { Refs } from '../../src/types';

	@Component<DialogBoxEx>({
		watch: {
			size: {
				handler(value, oldValue) {
					if(''!==value){
						this.size=value;
						this.dialogSize = true;
					}
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class DialogBoxEx extends Vue {
		// Refs
		$refs!: Refs<{
			form: HTMLFormElement;
		}>;
		dialogOne = false;
		dialogTwo = false;
		dialogThree =false;
		dialogSize =false;
		size = '';
		field: { login?: string, password?: string } = {};
		valid = true;
		nameRules = [
			(v: any) => !!v || 'Name is required',
			(v: any) => (v && v.length <= 20) || 'Name must be less than 10 characters'
		];
		buttonActions: ButtonAction[] = [
			{
				label: 'Dialog Text',
				size:'x-large',
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
			},
			{
				label: 'Dialog Draggable',
				color: 'accent',
				action: () => {
					this.dialogDrag();
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
		 *  show dialog with form
		 */
		dialogDrag() {
			return this.dialogThree = true;
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
