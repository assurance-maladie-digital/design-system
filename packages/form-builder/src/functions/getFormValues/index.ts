import { FormValues } from './types';

import { Form } from '../../components/FormBuilder/types';
import { deepMapValues } from '../deepMapValues';
import { deepCopy } from '@cnamts/vue-dot/src/helpers/deepCopy';

/**
 * Return an array with field values
 *
 * @param {Form} form The form object
 * @returns {FormValues} The form values
 */
export function getFormValues(form: Form): FormValues {
	return deepMapValues(deepCopy(form), 'value');
}
