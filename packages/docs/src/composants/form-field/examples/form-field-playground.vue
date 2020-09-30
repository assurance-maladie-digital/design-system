<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VTextField
				v-model.number="props.questionTitle"
				label="question: titre"
				hide-details
				clearable
				class="mt-8"
				outlined
			/>
			<VExpandTransition mode="out-int">
				<VCard v-if="props.questionTitle">
					<VTextField
						v-if="props.questionTitle"
						v-model.number="props.questionTooltip"
						label="question: tooltip"
						hide-details
						clearable
						class="mt-8"
						outlined
					/>
				</VCard>
			</VExpandTransition>
			<VTextField
				v-model.number="props.questionDescription"
				label="question: description"
				hide-details
				clearable
				class="mt-8"
				outlined
			/>
			<VSwitch
				v-model="props.questionDynamic"
				label="question: dynamique"
				hide-details
				clearable
				class="mt-8"
			/>
			<VSelect
				v-model="props.questionType"
				:items="questionTypes"
				label="question: type"
				hide-details
				clearable
				outlined
				class="mt-8"
			/>
			<!-- number -->
			<VExpandTransition mode="out-int">
				<VCard v-if="props.questionType === 'number'">
					<VCardText>
						<VTextField
							v-model.number="props.questionOptionMask"
							label="nombrer: mask"
							hide-details
							clearable
							outlined
						/>
					</VCardText>
				</VCard>
			</VExpandTransition>
			<!-- select -->
			<VExpandTransition mode="out-int">
				<VCard v-if="props.questionType === 'select'">
					<VCardText>
						<VSelect
							v-model.number="props.questionOptionsType"
							:items="questionOptionsTypeItems"
							label="type"
							hide-details
							outlined
						/>
						<VSwitch
							v-model="props.questionMultiple"
							label="multiple"
							hide-details
						/>
						<VSwitch
							v-model="props.questionSelectOther"
							label="autre"
							hide-details
						/>
						<!-- other -->
						<VExpandTransition mode="out-int">
							<VCard
								v-if="props.questionSelectOther"
								class="mt-4"
							>
								<VCardText>
									<pre
										:class="[
											$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
										]"
										contenteditable
										@blur="props.questionSelectOtherOptions = JSON.parse($event.target.textContent)"
										v-html="props.questionSelectOtherOptions"
									/>

									<VSelect
										v-model.number="props.questionSelectOtherSelectedValue"
										:items="questionOtherSelectedValueItems"
										label="valeur correspondante"
										class="mt-4"
										hide-details
										clearable
										outlined
									/>
									<VExpandTransition mode="out-int">
										<VTextField
											v-model.number="props.questionSelectOtherLabel"
											label="label"
											class="mt-4 pa-4"
											hide-details
											clearable
											outlined
										/>
									</vexpandtransition>
								</VCardText>
							</VCard>
						</VExpandTransition>
					</VCardText>
				</VCard>
			</VExpandTransition>
			<!-- period -->
			<VExpandTransition mode="out-int">
				<VCard
					v-if="props.questionType === 'period'"
					class="mt-4"
				>
					<VCardText>
						<p>Option date de début</p>
						<pre
							:class="[
								$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
							]"
							contenteditable
							@blur="props.questionFieldOptionsFrom = JSON.parse($event.target.textContent)"
							v-html="props.questionFieldOptionsFrom"
						/>

						<p class="mt-4">
							Option date de fin
						</p>
						<pre
							:class="[
								$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
							]"
							class="mt-2"
							contenteditable
							@blur="props.questionFieldOptionsTo = JSON.parse($event.target.textContent)"
							v-html="props.questionFieldOptionsTo"
						/>
					</VCardText>
				</VCard>
			</VExpandTransition>
			<VCard
				v-if="props.questionType !== 'period'"
				class="mt-4"
			>
				<VCardText>
					<p>
						Options générique
					</p>
					<pre

						:class="[
							$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
						]"

						contenteditable
						@blur="props.questionFieldOptions = JSON.parse($event.target.textContent)"
						v-html="props.questionFieldOptions"
					/>
				</VCardText>
			</VCard>
		</VCol>
		<VCol
			cols="12"
			md="6"
		>
			<VCard>
				<VCardText>
					<FormField :field="finalField" />
				</VCardText>
			</VCard>
			<VCard class="mt-4">
				<VCardText>
					<p>
						Affichage de la structure
					</p>
					<pre
						:class="[
							$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
						]"
						v-html="finalField"
					/>
				</VCardText>
			</VCard>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field, OtherField } from '@cnamts/form-builder/src/components/FormField/types';

	@Component<FormFieldPlayground>({
		watch: {
			field: {
				handler(newValue: Field) {
					this.finalField = newValue;
				},
				immediate: true
			}
		}
	})
	export default class FormFieldPlayground extends Vue {

		finalField: Field | null = null;

		props = {
			sectionTitle: 'section titre',
			sectionDescription: 'section description',
			questionType: 'text',
			questionTitle: '',
			questionTooltip: '',
			questionDescription: '',
			questionDynamic: false,
			questionMultiple: false,
			questionOptionsType: null,
			questionOptionMask: '####-####-####-##',
			questionSelectOther: null,
			questionSelectOtherSelectedValue: null,
			questionSelectOtherOptions: {
				placeholder: 'Autre'
			},
			questionSelectOtherLabel: null,
			questionFieldOptionsTo: {
				outlined: true,
				textField: {
					label: 'date de début'
				}
			},
			questionFieldOptionsFrom: {
				outlined: true,
				textField: {
					label: 'date de fin'
				}
			},
			questionFieldOptions: {
				outlined: true,
				hint: '4 caractères maximum',
				persistentHint: true
			}
		};

		questionOtherSelectedValueItems = [
			{
				text: 'aucun',
				value: null
			},
			{
				text: 'S',
				value: 0
			},
			{
				text: 'M',
				value: 1
			},
			{
				text: 'L',
				value: 2
			}
		];

		questionItems = [
			{
				text: 'S',
				value: 0
			},
			{
				text: 'M',
				value: 1
			},
			{
				text: 'L',
				value: 2
			}
		];

		questionTypes = [
			{
				text: 'texte',
				value: 'text'
			},
			{
				text: 'zone de texte',
				value: 'textarea'
			},
			{
				text: 'date',
				value: 'date'
			},
			{
				text: 'nombre',
				value: 'number'
			},
			{
				text: 'select',
				value: 'select'
			},
			{
				text: 'période',
				value: 'period'
			}
		];

		questionOptionsTypeItems = [
			{
				text: 'aucun',
				value: null
			},
			{
				text: 'barre',
				value: 'choiceSlider'
			},
			{
				text: 'bouton',
				value: 'choiceButton'
			}
		];

		get field(): Field {
			return {
				type: this.props.questionType,
				title: this.props.questionTitle,
				description: this.props.questionDescription,
				tooltip: this.props.questionTitle ? this.props.questionTooltip : undefined,
				multiple: this.props.questionType === 'select' ? this.props.questionMultiple : undefined,
				dynamic: this.props.questionDynamic,
				items: this.props.questionType === 'select' ? this.questionItems : undefined,
				value: null,
				other: this.other,
				fieldOptions: {
					... this.props.questionFieldOptions,
					type: this.props.questionType === 'select' ? this.props.questionOptionsType : undefined,
					mask: this.props.questionType === 'number' ? this.props.questionOptionMask : undefined,
					from: this.props.questionType === 'period' ? this.props.questionFieldOptionsFrom : undefined,
					to: this.props.questionType === 'period' ? this.props.questionFieldOptionsTo : undefined
				}
			};
		}

		get other(): OtherField | undefined {
			if (this.props.questionSelectOther) {

				let otherField: OtherField = {};

				otherField['selectedChoice'] = this.props.questionSelectOtherSelectedValue != null ? this.props.questionSelectOtherSelectedValue : undefined;

				otherField['label'] = this.props.questionSelectOtherLabel || undefined;

				otherField['fieldOptions'] = this.props.questionSelectOtherOptions || undefined;

				return otherField;
			}

			return undefined;
		}
	}
</script>
