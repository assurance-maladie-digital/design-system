<script lang="ts">
import { defineComponent, PropType } from 'vue'
import '@vuepic/vue-datepicker/dist/main.css'
import DatePicker from '../DatePicker/DatePicker.vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { customizable } from '@/mixins/customizable'
import { config } from './config'

dayjs.extend(customParseFormat)

export interface PeriodValue {
	from: string | null
	to: string | null
}

export default defineComponent({
	mixins: [customizable(config)],
	emits: ['update:modelValue'],
	name: 'PeriodField',
	components: {
		DatePicker,
	},
	props: {
		modelValue: {
			type: Object as PropType<PeriodValue>,
			default: () => ({
				from: null,
				to: null,
			}),
			required: true,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		dateFormat: {
			type: String,
			default: 'DD/MM/YYYY',
		},
		dateFormatReturn: {
			type: String,
			default: 'DD/MM/YYYY',
		},
	},
	data() {
		return {
			periodValue: {} as PeriodValue,
		}
	},
	watch: {
		modelValue: {
			handler(newValue) {
				this.periodValue = newValue
			},
			immediate: true,
			deep: true,
		},
	},
	computed: {
		startDate() {
			if (!this.periodValue?.from) {
				return undefined
			}
			return dayjs(this.periodValue.from, this.dateFormatReturn).format(
				'YYYY-MM-DD'
			)
		},
	},
	methods: {
		updateFrom(e: string) {
			this.periodValue = {
				from: e,
				to: this.periodValue.to,
			}
			this.$emit('update:modelValue', this.periodValue)
		},
		updateTo(e: string) {
			this.periodValue = {
				from: this.periodValue.from,
				to: e,
			}
			this.$emit('update:modelValue', this.periodValue)
		},
	},
})
</script>

<template>
	<div class="vd-period-field d-flex flex-wrap max-width-none ma-n2">
		<DatePicker
			:modelValue="periodValue?.from || undefined"
			:outlined="outlined"
			:disabled="disabled"
			:vuetify-options="options.from"
			text-field-class="vd-period-field-picker flex-grow-1 ma-2"
			:date-format="dateFormat"
			:date-format-return="dateFormatReturn"
			@update:modelValue="updateFrom"
		/>

		<DatePicker
			:modelValue="periodValue?.to || undefined"
			:outlined="outlined"
			:disabled="disabled"
			:vuetify-options="options.to"
			:start-date="startDate"
			text-field-class="vd-period-field-picker flex-grow-1 ma-2"
			:date-format="dateFormat"
			:date-format-return="dateFormatReturn"
			@update:modelValue="updateTo"
		/>
	</div>
</template>
