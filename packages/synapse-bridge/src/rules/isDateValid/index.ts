import type { ErrorMessages, ValidationResult, ValidationRule, Value } from '../types';

import { isDateValid as checkIfDateValid } from '../../functions/validation/isDateValid/index.ts';
import { defaultErrorMessages } from './locales';

import { ruleMessage } from '@/helpers/ruleMessage';

/** Check that the value is a valid date (DD/MM/YYYY format) */
export function isDateValidFn(
  errorMessages: ErrorMessages = defaultErrorMessages,
): ValidationRule {
  return (value: Value): ValidationResult => {
    if (!value) {
      return true;
    }

    const validationResult = checkIfDateValid(value);
    const errorMessage = typeof validationResult === 'string' ? ruleMessage(errorMessages, validationResult) : true;

    return errorMessage || ruleMessage(errorMessages, 'default');
  };
}

export const isDateValid = isDateValidFn();
