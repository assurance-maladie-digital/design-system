<template>
	<!-- DatePicker -->
	<VMenu
		ref="menu"
		v-model="menu"
		v-bind="options.menu"
		:return-value.sync="date"
	>
		<template v-slot:activator="{ on }">
			<!-- TextField to enter date by hand -->
			<VTextField
				ref="input"
				v-model.lazy="dateFormatted"
				v-mask="'##/##/####'"
				v-bind="options.textField"
				@blur="saveFromTextField"
			>
				<VBtn
					slot="prepend"
					v-bind="options.btn"
					class="ma-0"
					@click="menu = true"
				>
					<VIcon
						v-bind="options.icon"
					>
						event
					</VIcon>
				</VBtn>
			</VTextField>
		</template>

		<!-- Calendar -->
		<VDatePicker
			v-if="!noCalendar"
			v-model="date"
			v-bind="options.datePicker"
			@input="saveDate"
		/>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import customizable from '../mixins/customizable';

	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';

	// Use custom formats
	dayjs.extend(advancedFormat);

	const Props = Vue.extend({
		props: {
			/** Disable the calendar */
			noCalendar: {
				type: Boolean,
				default: false
			},
			/**
			 * Custom mask string.
			 * By default it's computed from dateFormat
			 *
			 * If false is passed, don't apply a mask
			 */
			mask: {
				type: [String, Boolean],
				default: undefined
			},
			/** The format of the date inside the text field */
			dateFormat: {
				type: String,
				default: 'DD/MM/YYYY'
			},
			/** The v-model value */
			value: {
				type: String,
				default: ''
			}
		}
	});

	/**
	 * DatePicker is a component that
	*/
	@Component({
		mixins: [
			// Default configuration
			customizable({
				textField: {
					hint: 'Format JJ/MM/AAAA',
					label: 'Date',
					persistentHint: true,
					returnMaskedValue: true
				},
				menu: {
					closeOnContentClick: false,
					minWidth: '290px',
					nudgeBottom: 45,
					nudgeRight: 45,
					lazy: true,
					zIndex: 1,
					contentClass: 'vd-date-picker-menu'
				},
				btn: {
					icon: true
				},
				datePicker: {
					firstDayOfWeek: 1,
					noTitle: true,
					locale: 'fr'
				},
				icon: {
					color: '#808080'
				}
			})
		]
	})
	export default class DatePicker extends Props {
		/** The v-model of VMenu */
		menu = false;

		/** */
		date = this.value;

		textFieldDate = this.date;

		/** Return the mask to apply to the TextField */
		get maskValue() {
			// If the mask is false, don't apply mask
			if (this.mask === false) {
				// Undefined is the default value for mask property
				return undefined;
			}

			// If a mask is specified by the user, use it
			if (typeof this.mask === 'string') {
				return this.mask;
			}

			// Else, compute the mask from dateFormat

			// Match every letter, case insensitive
			const regexp = /[a-z]/gmi;

			// Replace every letter by # (in Vuetify masks, # matches any digit)
			return this.dateFormat.replace(regexp, '#');
		}

		/** Format date with dayjs and dateFormat */
		get dateFormatted() {
			if (this.date === '') {
				return '';
			}

			const formatted = dayjs(this.date).format(this.dateFormat);

			return formatted;
		}

		/** */
		set dateFormatted(value: string) {
			this.textFieldDate = value;
		}

		saveDate() {
			(this.$refs.menu as any).save(this.date);
		}

		saveFromTextField() {
			if (!this.textFieldDate) {
				return;
			}

			const dateFormatRegex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;

			// If date doesn't match regex, format isn't valid
			if (!this.textFieldDate.match(dateFormatRegex)) {
				return;
			}

			// console.log(this.textFieldDate, dayjs(this.textFieldDate, 'DD/MM/YYYY'));
			// this.date = dayjs(this.textFieldDate, 'DD/MM/YYYY').format('YYYY-DD-MM');

			const [day, month, year] = this.textFieldDate.split('/');
			this.date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-date-picker-menu {
		overflow: hidden;
	}
</style>
