<template>
	<div class="d-flex">
		<v-col cols="6">
			<div v-if="!birthdate && !period">
				<VueDatePicker
					v-model="date"
					ref="myDatePicker"
					:placeholder="placeholder"
					:enable-time-picker="false"
					:hide-input-icon="noPrependIcon"
					:format="format"
					:disabled="disabled"
					:clearable="clearable"
					:text-input="noCalendar ? textInputOptions : false"
					:class="{'placeholder-no-icon': noPrependIcon || appendIcon }"
					calendar-cell-class-name="dp-custom-cell"
					auto-apply
					hide-offset-dates
					locale="fr"
					@open="blockOpenOnclick"
					@close="handleClose"
				>
					<template #input-icon>
						<VIcon @click="handleIconClick">
							{{ calendarIcon }}
						</VIcon>
					</template>
					<template #day="{ date }">
						<div :class="showWeekends && isWeekend(date) ? 'week-ends' : ''">
							{{ date.getDate() }}
						</div>
					</template>
				</VueDatePicker>
				<p class="hint">Format JJ/MM/AAAA</p>
			</div>
			<div v-if="birthdate">
				<VueDatePicker
					v-model="date"
					calendar-cell-class-name="dp-custom-cell"
					hide-offset-dates
					locale="fr"
					auto-apply
					:format="format"
					:enable-time-picker="false"
					:flow="['year', 'month', 'calendar']"
					:placeholder="placeholder"
					@open="blockOpenOnclick"
					@close="handleClose"
				>
					<template #input-icon>
						<VIcon @click="handleIconClick">
							{{ calendarIcon }}
						</VIcon>
					</template>
				</VueDatePicker>
				<p class="hint">Format JJ/MM/AAAA</p>
			</div>
			<div v-if="period">
				<VueDatePicker
					append-icon="mdi-calendar"
					v-model="startDate"
					:format="format"
					:placeholder="placeholder"
					:enable-time-picker="false"
					calendar-cell-class-name="dp-custom-cell"
					auto-apply
					hide-offset-dates
					locale="fr"
					@open="blockOpenOnclick"
					@close="handleClose"
				/>

				<VueDatePicker
					append-icon="mdi-calendar"
					v-model="date"
					:placeholder="placeholder"
					:enable-time-picker="false"
					calendar-cell-class-name="dp-custom-cell"
					auto-apply
					hide-offset-dates
					locale="fr"
					range
					@open="blockOpenOnclick"
					@close="handleClose"
				>
					<template #input-icon>
						<VIcon @click="handleIconClick">
							{{ calendarIcon }}
						</VIcon>
					</template>
				</VueDatePicker>
			</div>
		</v-col>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import {mdiCalendar} from "@mdi/js";

export default defineComponent({
	components: { VueDatePicker },
	props: {
		birthdate: {
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
			date: '',
			dateStart: new Date(),
			placeholder: 'Date',
			format: 'dd/MM/yyyy',
			clearable: false,
			period: false,
			startDate: new Date(),
			textInputOptions: {
				openMenu: false,
				format: 'dd/MM/yyyy',
			},
			isCalOpen: false,
			calendarIcon: mdiCalendar,
			disallowOutlined:true
		}
	},
	watch: {
		appendIcon(newVal: boolean) {
			this.applyIconStyle(newVal);
		},
		disallowOutlined(newVal: boolean) {
			this.applyDisallowOutlined(newVal);
		},
		startDate(newVal: Date) {
			const startDate = this.dateStart || new Date();
			this.date = [startDate];
		},
	},
	mounted() {
			this.applyIconStyle(this.appendIcon);
			this.applyIconStyle(this.appendIcon);
			// outline is true by default in lib
			this.applyDisallowOutlined(!this.outlined);
			this.applyDisallowOutlined(!this.outlined);
	},
	methods: {
		isWeekend(date: Date): boolean {
			const dayOfWeek = date.getDay();
			return dayOfWeek === 0 || dayOfWeek === 6;
		},
		handleIconClick(event: Event) {
			const myDatePicker = this.$refs.myDatePicker as typeof VueDatePicker;
				event.stopPropagation();
				this.isCalOpen = !this.isCalOpen;
				this.isCalOpen && !this.noCalendar ? myDatePicker.openMenu() : myDatePicker.closeMenu();
		},
		blockOpenOnclick() {
			const myDatePicker = this.$refs.myDatePicker as typeof VueDatePicker;
			return !this.isCalOpen && !this.textFieldActivator && !this.noPrependIcon ? myDatePicker.closeMenu() : this.isCalOpen = !this.isCalOpen
		},
		handleClose() {
			this.isCalOpen = false;
		},
		applyIconStyle(appendIcon: boolean): void {
			const icon = this.$el.querySelector('.dp__input_icon');
			if (icon) {
				icon.style.marginLeft = appendIcon ? '95%' : '';
			}
		},
		applyDisallowOutlined(disallowOutlined: boolean): void {
			const input = this.$el.querySelector('.dp__input');
			const borderBottomStyle = '2px solid #ced4da';
			const noBorderStyle = 'none';

			if (input) {
				console.log(input.style)
				input.style.borderBottomLeftRadius = '0';
				input.style.borderBottomRightRadius = '0';
				input.style.border = disallowOutlined ? noBorderStyle : '';
				input.style.borderBottom = disallowOutlined ? borderBottomStyle : '';
			}
		}
	}
})
</script>

<style lang="scss">
.week-ends {
	background-color: #B3B4B5;
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
	border: 1px solid #2EB5E4;
}
.dp__active_date {
	background: #2EB5E4;
	color: var(--dp-primary-text-color);
}
.dp__input::placeholder {
	margin-left: -10px !important;
}
.hint {
	color: #888;
	font-size: 0.8em;
}
.placeholder-no-icon {
	.dp__input_icon_pad{
		padding-inline-start: 0 !important;
	}
}

.dp__disabled {
	background: transparent;
	opacity: 0.8;
}

</style>
