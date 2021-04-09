import { locales } from './locales';
import { parseDate } from '../../helpers/parseDate';
import { PeriodValue, FieldValue } from '@cnamts/form-builder/src/components/FormField/types.d';
import { FilterStructures, ColumnValue } from './types';
import { ChoiceValue, FieldItemValue } from '@cnamts/form-builder/src/components/FormField/types';
import { FormValues } from '@cnamts/form-builder/src/functions/getFormValues/types';
import dayjs from 'dayjs';

export type FilterValueText<T = FormValues> = (formValues: T) => string | null;

export const filterStructures: FilterStructures = {
	text: {
		fields: {
			select: {
				type: 'select',
				fieldOptions: {
					type: 'choiceAutocomplete',
					outlined: true,
					label: locales.filterStructure.text.search,
					menuProps: {
						origin: 'bottom',
						maxHeight: 185,
						disableKeys: true
					},
					class: 'pb-16 mb-16'
				},
				value: null,
				multiple: true
			}
		},
		valueToString: (formValues: FormValues): string | null => {
			const fieldSelect = formValues.select as ChoiceValue;

			const selectedItems = fieldSelect.value as FieldItemValue[];

			if (!selectedItems || !selectedItems.length) {
				return null;
			}

			let text = '';
			const nbSelectedItems = selectedItems.length;

			if (nbSelectedItems > 1) {
				text = locales.filterStructure.text.selectedElements(nbSelectedItems);
			} else {
				text = String(selectedItems[0]);
			}

			return text;
		},
		filter: (value: ColumnValue, formValues: FormValues): boolean => {
			const fieldSelect = formValues.select as ChoiceValue;

			const selectedItems = fieldSelect?.value as FieldItemValue[];

			if (selectedItems && selectedItems.length) {
				return selectedItems.includes(value);
			}

			return true;
		}
	},
	date: {
		fields: {
			date: {
				type: 'period',
				fieldOptions: {
					from: {
						outlined: true,
						textField: {
							label: locales.filterStructure.date.fromLabel
						}
					},
					to: {
						outlined: true,
						textField: {
							label: locales.filterStructure.date.toLabel
						}
					}
				}
			}
		},
		valueToString: (formValues: FormValues): string | null => {
			const filterValue = formValues.date as PeriodValue;

			const fromValue = filterValue.from;
			const toValue = filterValue.to;

			let text = '';

			// Check if there is a filter to apply
			if (!fromValue && !toValue) {
				return null;
			}

			if (fromValue) {
				text = `${locales.filterStructure.date.fromLabel} ${dayjs(fromValue).format('DD/MM/YYYY')}`;
			}

			if (fromValue && toValue) {
				text += ', ';
			}

			if (toValue) {
				text += `${locales.filterStructure.date.toLabel} ${dayjs(toValue).format('DD/MM/YYYY')}`;
			}

			return text;
		},
		filter: (value: ColumnValue, formValues: FormValues): boolean => {
			const filterValue = formValues.date as PeriodValue;

			const fromValue = filterValue?.from;
			const toValue = filterValue?.to;

			// Check if there is a filter to apply
			if (!fromValue && !toValue) {
				return true;
			}

			// Filter column with value equal to null or not string value
			if (!value || typeof value !== 'string') {
				return false;
			}

			// Check from value
			if (
				fromValue && parseDate(value as string).toDate() < dayjs(fromValue).toDate()
			) {
				return false;
			}

			// Check toValue
			if (
				toValue && parseDate(value as string).toDate() > dayjs(toValue).toDate()
			) {
				return false;
			}

			return true;
		}
	},
	number: {
		fields: {
			numberMin: {
				type: 'number',
				fieldOptions: {
					outlined: true,
					mask: '###########',
					label: locales.filterStructure.number.minLabel
				}
			},
			numberMax: {
				type: 'number',
				fieldOptions: {
					outlined: true,
					mask: '###########',
					label: locales.filterStructure.number.maxLabel
				}
			}
		},
		valueToString: (formValues: FormValues): string | null => {
			const numberMin = formValues.numberMin as FieldValue;
			const numberMax = formValues.numberMax as FieldValue;
			let text = '';

			// Check if there is a filter to apply
			if (!numberMax && !numberMin) {
				return null;
			}

			if (numberMin) {
				text = `${locales.filterStructure.number.minLabel} ${numberMin}`;
			}

			if (numberMax && numberMin) {
				text += '. ';
			}

			if (numberMax) {
				text += `${locales.filterStructure.number.maxLabel} ${numberMax}`;
			}

			return text;
		},
		filter: (value: ColumnValue, formValues: FormValues): boolean => {
			const numberMin = formValues.numberMin as string;
			const numberMax = formValues.numberMax as string;

			// Check if there is a filter to apply
			if (!numberMax && !numberMin) {
				return true;
			}

			if (!value) {
				return false;
			}

			// Check numberMin
			if (numberMin && Number.parseInt(value as string, 10) < Number.parseInt(numberMin, 10)) {
				return false;
			}

			// Check numberMax
			if (numberMax && Number.parseInt(value as string, 10) > Number.parseInt(numberMax, 10)) {
				return false;
			}

			return true;
		}
	}
};
