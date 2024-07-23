import { ruleMessage } from '../../helpers/ruleMessage';

import { parseDate } from '../../helpers/parseDate';
import { formatDate } from '../../functions/formatDate';
import { isDateBefore } from '../../functions/validation/isDateBefore';
import { defaultErrorMessages } from './locales';
import type { ValidationResult, ValidationRule, Value } from '@/rules/types';

/** Check that the value is not after the specified date (DD/MM/YYYY format) */
export function notBeforeDate(
  date: string,
  errorMessages = defaultErrorMessages,
): ValidationRule {
  return (value: Value): ValidationResult => {
    if (!value) {
      return true;
    }

    const formattedValue = formatDate(parseDate(date));

    return (
      !isDateBefore(date, value)
      || ruleMessage(errorMessages, 'default', [formattedValue])
    );
  };
}
