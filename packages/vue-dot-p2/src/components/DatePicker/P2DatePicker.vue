<template>
	<VLayout>
		<DatePicker
			v-model="computedValue"
			:start-date="startDate"
			:picker-date.sync="internalPickerDate"
			:vuetify-options="{
				textField: {
					placeholder: 'JJ/MM/AAAA',
					hint: undefined,
					solo: true,
					flat: true,
					rules: datePickerRules,
					validateOnBlur: true,
					clearable: true
				},
				datePicker: {
					min: dateMin,
					max: dateMax,
					weekdayFormat: getWeekday
				},
				menu: {
					nudgeBottom: 50,
					nudgeRight: -50,
					allowOverflow: true
				},
				btn: {
					ripple: false
				}
			}"
			append-icon
			show-week-ends
			text-field-activator
			@error="resetInternalPickerDate($event)"
		>
			<template #append-icon>
				<CustomIcon
					icon="calendar"
					large
				/>
			</template>
		</DatePicker>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import dayjs from 'dayjs';
	import 'dayjs/locale/fr';

	import { formatDateISO } from '../../services/dateUtils';
	import { Refs } from '@cnamts/vue-dot/src/types';

	const Props = Vue.extend({
		props: {
			/** The v-model value */
			value: {
				type: String,
				default: ''
			},
			dateMin: {
				type: String,
				default: ''
			},
			dateMax: {
				type: String,
				default: ''
			},
			datePickerRules: {
				type: [Array, Object],
				default: () => ([])
			},
			startDate: {
				type: String,
				default: ''
			},
			effectivePickerDate: {
				type: String,
				default: ''
			}
		}
	});

	/** DatePicker from Vue Dot with special configuration */
	@Component<P2DatePicker>({
		// Define custom v-model,
		// prop name is value, event name is change
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			effectivePickerDate(): void {
				this.internalPickerDate = this.effectivePickerDate;
			}
		}
	})
	export default class P2DatePicker extends Props {
		internalPickerDate: string = '';

		isoDateToday: string = formatDateISO(dayjs());

		resetInternalPickerDate(event: boolean): void {
			if (event) {
				if (this.effectivePickerDate !== '') {
					this.internalPickerDate = this.effectivePickerDate;
				} else {
					this.internalPickerDate = this.isoDateToday;
				}
			} else {
				this.internalPickerDate = '';
			}
		}

		getWeekday(date: string): string {
			return dayjs(date).locale('fr').format('dddd').charAt(0).toUpperCase();
		}

		// computedValue is computed property
		// with a setter and a getter
		// Return the value
		get computedValue(): string {
			return this.value;
		}

		// Emit the updated value
		set computedValue(value: string) {
			this.$emit('change', value);
		}

		created() {
			if (this.effectivePickerDate !== '') {
				this.internalPickerDate = this.effectivePickerDate;
			} else {
				this.internalPickerDate = '';
			}
		}
	}
</script>

<style lang="scss">
	.vd-date-picker-text-field {
		.v-input__slot {
			width: 180px;
			max-width: 180px;
		}
	}
</style>
