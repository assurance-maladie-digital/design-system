import { ErrorMessages, GenericFnOpt } from '../../rules/types';

/** Get the value of an error message */
export function ruleMessage<T>(
	errorMessages: ErrorMessages<T>,
	key: string,
	args: T[] = []
): string {
	if (typeof errorMessages[key] === 'function') {
		return (errorMessages[key] as GenericFnOpt<T>)(...args);
	}

	return errorMessages[key] as string;
}
