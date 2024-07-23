import { ruleMessage } from '../../helpers/ruleMessage';

import { parseDate } from '../../helpers/parseDate';
import { formatDate } from '../../functions/formatDate';
import { isDateAfter } from '../../functions/validation/isDateAfter';
import { defaultErrorMessages } from './locales';
import type { ValidationResult, ValidationRule, Value } from '@/rules/types';

/** Check that the value is not after the specified date (DD/MM/YYYY format) */
export function notAfterDate(
  date: string,
  errorMessages = defaultErrorMessages,
): ValidationRule {
  return (value: Value): ValidationResult => {
    if (!value) {
      return true;
    }

    const formattedValue = formatDate(parseDate(date));

    return (
      !isDateAfter(date, value)
      || ruleMessage(errorMessages, 'default', [formattedValue])
    );
  };
}
