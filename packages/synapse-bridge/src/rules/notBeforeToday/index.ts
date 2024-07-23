import { ruleMessage } from '../../helpers/ruleMessage';
import type {
  ErrorMessages,
  ValidationResult,
  ValidationRule,
  Value,
} from '../types';

import { isDateBefore } from '../../functions/validation/isDateBefore';
import { TODAY } from '../../constants';
import { defaultErrorMessages } from './locales';

/** Check that the value is not before today (DD/MM/YYYY format) */
export function notBeforeTodayFn(
  errorMessages: ErrorMessages = defaultErrorMessages,
): ValidationRule {
  return (value: Value): ValidationResult => {
    if (!value) {
      return true;
    }
    return (
      !isDateBefore(TODAY, value) || ruleMessage(errorMessages, 'default')
    );
  };
}

export const notBeforeToday = notBeforeTodayFn();
