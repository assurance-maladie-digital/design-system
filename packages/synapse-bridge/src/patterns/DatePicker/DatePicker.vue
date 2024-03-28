<template>
	<div v-if="!rangeIsUsed">
		<VueDatePicker
			v-if="!rangeIsUsed && !birthdate"
			v-model="date"
			ref="myDatePicker"
			placeholder="Date"
			:enable-time-picker="false"
			text-input
			:hide-input-icon="noPrependIcon"
			:format="format"
			:disabled="disabled"
			:clearable="clearable"
			:class="{
        'placeholder-no-icon': noPrependIcon || appendIcon,
        'myDatePicker': datePickerClass
      }"
			calendar-cell-class-name="dp-custom-cell"
			auto-apply
			hide-offset-dates
			locale="fr"
			@open="blockOpenOnclick"
			@close="handleClose"
			@input="handleInput"
		>
			<template #input-icon>
				<VIcon @click="handleIconClick">{{ calendarIcon }}</VIcon>
			</template>
			<template #day="{ date }">
				<div :class="showWeekends && isWeekend(date) ? 'week-ends' : ''">
					{{ date.getDate() }}
				</div>
			</template>
			<template #dp-input="{}">
				<input type="text" :value="inputHistory" class="dp__input" />
			</template>
		</VueDatePicker>

		<VueDatePicker
			v-else
			v-model="date"
			ref="myDatePicker"
			calendar-cell-class-name="dp-custom-cell"
			placeholder="Date de naissance"
			hide-offset-dates
			locale="fr"
			auto-apply
			:format="format"
			:enable-time-picker="false"
			:flow="['year', 'month', 'calendar']"
			text-input
			@open="blockOpenOnclick"
			@close="handleClose"
		>
			<template #input-icon>
				<VIcon @click="handleIconClick">{{ calendarIcon }}</VIcon>
			</template>
		</VueDatePicker>

		<p class="hint">Format JJ/MM/AAAA</p>
	</div>

	<div v-else>
		<VueDatePicker v-model="startDate" auto-apply locale="fr" placeholder="Début" :format="format">
			<template #input-icon>
				<VIcon @click="handleIconClick">{{ calendarIcon }}</VIcon>
			</template>
		</VueDatePicker>

		<VueDatePicker v-model="date" auto-apply range locale="fr" placeholder="Fin" :format="format">
			<template #input-icon>
				<VIcon>{{ calendarIcon }}</VIcon>
			</template>
			<template #dp-input="{}">
				<input placeholder="Fin" type="text" :value="formatDate(endDate)" class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg" />
			</template>
		</VueDatePicker>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { mdiCalendar } from "@mdi/js";

export default defineComponent({
	components: { VueDatePicker },
	props: {
		birthdate: {
			type: Boolean,
			default: false
		},
		rangeIsUsed: {
			type: Boolean,
			default: false
		},
		appendIcon: {
			type: Boolean,
			default: false
		},
		noCalendar: {
			type: Boolean,
			default: false
		},
		noPrependIcon: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		showWeekends: {
			type: Boolean,
			default: false
		},
		textFieldActivator: {
			type: Boolean,
			default: false
		},
		outlined: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			date: null,
			placeholder: 'Date',
			format: 'dd/MM/yyyy',
			clearable: false,
			period: false,
			startDate: null,
			endDate: null,
			textInputOptions: {
				openMenu: false,
				format: 'dd/MM/yyyy',
			},
			isCalOpen: false,
			calendarIcon: mdiCalendar,
			disallowOutlined: true,
			hasError: false,
			hasWarning: false,
			inputHistory: ''
		};
	},
	watch: {
		appendIcon(newVal) {
			this.applyIconStyle(newVal);
		},
		disallowOutlined(newVal) {
			this.applyDisallowOutlined(newVal);
		},
		startDate(newVal) {
			if (newVal)
				this.date = [newVal];
		},
		date() {
			if (this.date && Array.isArray(this.date) && this.date.length > 1) {
				this.endDate = this.date[1];
			}
		},
		inputHistory(newVal) {
			if (newVal.length > 10) {
				this.inputHistory = newVal.slice(0, 10);
			}
		},
	},
	mounted() {
		this.applyIconStyle(this.appendIcon);
		this.applyDisallowOutlined(!this.outlined);
	},
	computed: {
		datePickerClass() {
			return this.hasError ? 'error' : this.hasWarning ? 'warning' : '';
		}
	},
	methods: {
		isWeekend(date) {
			const dayOfWeek = date.getDay();
			return dayOfWeek === 0 || dayOfWeek === 6;
		},
		handleIconClick(event) {
			const myDatePicker = this.$refs.myDatePicker;
			event.stopPropagation();
			this.isCalOpen = !this.isCalOpen;
			if (!this.noCalendar) {
				this.isCalOpen ? myDatePicker.openMenu() : myDatePicker.closeMenu();
			}
		},
		blockOpenOnclick() {
			const myDatePicker = this.$refs.myDatePicker;

			if (!this.isCalOpen && !this.textFieldActivator && !this.noPrependIcon) {
				myDatePicker.closeMenu();
			} else {
				this.isCalOpen = !this.isCalOpen;
			}
		},
		handleClose() {
			this.isCalOpen = false;
		},
		applyIconStyle(appendIcon) {
			const icon = this.$el.querySelector('.dp__input_icon');
			if (icon) {
				icon.style.marginLeft = appendIcon ? '95%' : '0';
			}
		},
		applyDisallowOutlined(disallowOutlined) {
			const input = this.$el.querySelector('.dp__input');
			const borderBottomStyle = '1.5px solid #ced4da';
			const noBorderStyle = 'none';

			if (input) {
				input.style.borderBottomLeftRadius = '0';
				input.style.borderBottomRightRadius = '0';
				input.style.border = disallowOutlined ? noBorderStyle : '';
				input.style.borderBottom = disallowOutlined ? borderBottomStyle : '';
			}
		},
		formatDate(date) {
			if (!date) return '';

			const d = new Date(date);
			const month = (d.getMonth() + 1).toString().padStart(2, '0');
			const day = d.getDate().toString().padStart(2, '0');
			const year = d.getFullYear();

			return `${day}/${month}/${year}`;
		},
		handleInput(value) {
			if (!this.noCalendar) return;

			if (value.data === null) {
				this.inputHistory = this.inputHistory.slice(0, -1);
				return;
			}

			if (this.inputHistory.length === 2 || this.inputHistory.length === 5) {
				this.inputHistory += '/';
			}

			if (this.inputHistory.length > 10) return;

			this.inputHistory += value.data;
		},
	}
});
</script>

<style scoped>
.week-ends {
	background-color: #b3b4b5;
	border-radius: 55%;
	width: 27px;
	height: 25px;
	display: inline-block;
	padding-bottom: 1px;
}

.dp-custom-cell {
	border-radius: 50%;
}

.dp__today {
	border: 1px solid #2eb5e4;
}

.dp__active_date {
	background: #2eb5e4;
	color: var(--dp-primary-text-color);
}

.dp__input::placeholder {
	margin-left: -10px !important;
}

.hint {
	color: #888;
	font-size: 0.8em;
	margin-top: 0.5em;
}

.placeholder-no-icon .dp__input_icon_pad {
	padding-inline-start: 0 !important;
}

.dp__disabled {
	background: transparent;
	opacity: 0.8;
}

.dp--tp-wrap {
	display: none;
}

.dp__button_bottom {
	display: none !important;
}

.myDatePicker .dp__input:focus {
	border: solid 2px #0c419a;
}

.myDatePicker.error .dp__input:focus {
	border: solid 2px red;
}

.myDatePicker.warning .dp__input:focus {
	border: solid 2px orange;
}
</style>
