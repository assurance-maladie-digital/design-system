import { FieldValue } from './../../patterns/FormField/types.d';
import { Form } from './../../patterns/FormBuilder/types';

export interface FormValue {
	[key: string]: FieldValue;
}

/** Return an array with field values */
export default function getFormValue(form: Form): FormValue {
	const data: FormValue = {};

	Object.keys(form)
		.map((key: string) => {
			// Transform Form to FormValue, data.something = form.value
			// Convert numbers to strings
			const value = form[key].value;

			if (!value) {
				return null;
			}

			return data[key] = value;
		});

	return data;
}
