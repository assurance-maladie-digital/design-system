<template>
	<!-- DatePicker -->
	<VMenu
		ref="menu"
		v-model="menu"
		v-bind="menuOptions"
	>
		<template #activator="{}">
			<!-- TextField to enter date by hand -->
			<VTextField
				ref="input"
				v-model="dateFormatted"
				v-facade="maskValue"
				v-bind="textFieldOptions"
				:outlined="outlined"
				:class="textFieldClasses"
				:success-messages="textFieldOptions.successMessages || successMessages"
				:error.sync="internalErrorProp"
				class="vd-date-picker-text-field"
				@blur="textFieldBlur"
				@click="textFieldClicked"
			>
				<template #prepend>
					<VBtn
						v-if="!noPrependIcon && !showAppendIcon"
						v-bind="options.btn"
						:aria-label="locales.openCalendar"
						@click="menu = true"
					>
						<slot name="prepend-icon">
							<VIcon v-bind="options.icon">
								{{ calendarIcon }}
							</VIcon>
						</slot>
					</VBtn>
				</template>

				<template #append>
					<VBtn
						v-if="showAppendIcon"
						v-bind="options.btn"
						:aria-label="locales.openCalendar"
						@click="menu = true"
					>
						<slot name="append-icon">
							<VIcon v-bind="options.icon">
								{{ calendarIcon }}
							</VIcon>
						</slot>
					</VBtn>
				</template>
			</VTextField>
		</template>

		<!--
			Calendar

			We bind max & min properties manually
			since we set them when using birthdate mode
		-->
		<VDatePicker
			v-if="!noCalendar"
			ref="picker"
			v-model="date"
			v-bind="options.datePicker"
			type="date"
			:picker-date.sync="internalPickerDate"
			:max="options.datePicker.max || max"
			:min="options.datePicker.min || min"
			:events="calendarEvents"
			@change="saveFromCalendar"
		/>
	</VMenu>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { DatePickerRefs } from './types';

	import { customizable, Options, Customizable } from '../../mixins/customizable';
	import { Eventable } from '../../mixins/eventable';
	import { WarningRules } from '../../mixins/warningRules';

	import { DateLogic } from './mixins/dateLogic';
	import { MaskValue } from './mixins/maskValue';
	import { Birthdate } from './mixins/birthdate';
	import { PickerDate } from './mixins/pickerDate';
	import { ErrorProp } from './mixins/errorProp';

	import { mdiCalendar } from '@mdi/js';

	import deepmerge from 'deepmerge';

	const IProps = Vue.extend({
		props: {
			/** Disable the calendar */
			noCalendar: {
				type: Boolean,
				default: false
			},
			/** Disable the prepend icon */
			noPrependIcon: {
				type: Boolean,
				default: false
			},
			/**
			 * Put VTextField in outlined mode,
			 * default to append icon and adjust VMenu
			 */
			outlined: {
				type: Boolean,
				default: false
			},
			/** Use append icon instead of prepend */
			appendIcon: {
				type: Boolean,
				default: false
			},
			/** Open calendar menu when the text field is clicked */
			textFieldActivator: {
				type: Boolean,
				default: false
			},
			/**
			 * Provide classes to the VTextField
			 * This is needed because classes are
			 * not contained in $attrs
			 */
			textFieldClass: {
				type: [String, Array] as PropType<string | string[]>,
				default: undefined
			}
		}
	});

	@Component
	class Props extends IProps {}

	interface IDatePicker extends Props, Customizable, Eventable, WarningRules, DateLogic, MaskValue, Birthdate, PickerDate, ErrorProp {
		$refs: DatePickerRefs;
	}

	const MixinsDeclaration = mixins<IDatePicker>(
		Props,
		customizable(config),
		Eventable,
		WarningRules,
		DateLogic,
		MaskValue,
		Birthdate,
		PickerDate,
		ErrorProp
	);

	/**
	 * DatePicker is a component that makes the date picker
	 * from Vuetify simpler to use
	 */
	@Component<DatePicker>({
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class DatePicker extends MixinsDeclaration {
		// Locales
		locales = locales;

		// Icon
		calendarIcon = mdiCalendar;

		/** The v-model of VMenu */
		menu = false;

		get showAppendIcon(): boolean {
			return this.appendIcon || this.outlined;
		}

		get menuOptions(): Options {
			const position = {
				nudgeBottom: this.outlined ? 56 : 45,
				nudgeRight: this.outlined ? 0 : 45
			};

			return deepmerge(position, this.options.menu) as Options;
		}

		/**
		 * Compute the options for the VTextField
		 * (Merge options and binded attributes)
		 *
		 * @returns {Options} Computed options
		 */
		get textFieldOptions(): Options {
			// Merge textField options (custom or default) with
			// directly binded attributes (theses attributes
			// will override 'options.textField')
			return deepmerge(this.options.textField || [], this.$attrs) as Options;
		}

		/**
		 * Compute the classes for the VTextField
		 * (Merge user classes and fixed behavior)
		 *
		 * @returns {string|string[]} Computed classes
		 */
		get textFieldClasses(): (string | string[])[] {
			const textFieldClasses = [];

			if (this.warningRules.length) {
				textFieldClasses.push('vd-warning-rules');
			}

			if (this.textFieldClass) {
				if (typeof this.textFieldClass === 'object') {
					textFieldClasses.push(this.textFieldClass);
				} else {
					textFieldClasses.push([this.textFieldClass]);
				}
			}

			return textFieldClasses;
		}

		/**
		 * Open calendar menu if textFieldActivator is true
		 *
		 * @returns {void}
		 */
		textFieldClicked(): void {
			if (this.textFieldActivator) {
				this.menu = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	// Hide scrollbar in VMenu
	.vd-date-picker-menu {
		overflow: hidden;

		// Custom events
		// Disabled when the btn is active
		::v-deep {
			.v-btn:not(.v-btn--active) {
				.v-date-picker-table__events {
					// Make the container take full space
					height: 100%;
					bottom: 0 !important;

					// Put the content in front
					.v-btn__content {
						z-index: 2;
					}

					// Make the dot take full space
					.vd-custom-event {
						position: absolute;
						height: 100%;
						width: 100%;
						margin: 0;
						left: 0;
						// Make sure we still see the text
						opacity: .4;
					}
				}
			}

			// Don't show custom events when the date is selected
			.v-btn.v-btn--active {
				.vd-custom-event {
					display: none;
				}
			}

			// Fix https://github.com/vuetifyjs/vuetify/issues/11809
			.v-picker--date {
				display: flex;
			}
		}
	}

	// Fix margin-top on enclosed text field
	// since we're using a slot with a button
	.vd-date-picker-text-field.v-text-field--enclosed ::v-deep {
		.v-input__prepend-outer,
		.v-input__prepend-inner,
		.v-input__append-inner,
		.v-input__append-outer {
			.v-btn--icon {
				margin-top: -7px;
			}
		}
	}
</style>
