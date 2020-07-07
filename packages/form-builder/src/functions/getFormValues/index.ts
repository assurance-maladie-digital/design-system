import { FormValues } from './types';

import { Form } from '../../components/FormBuilder/types';
import { deepMapValues } from '../deepMapValues';

/**
 * Return an array with field values
 *
 * @param {Form} form The form object
 * @returns {FormValues} The form values
 */
export function getFormValues(form: Form): FormValues {
	return deepMapValues(form, 'value');
}
