import { ErrorMessages, GenericFnOpt } from '../rules/types';

/**
 * Generic error messages function
 * Executes a function that returns a string, or returns a string
 */
export default function ruleMessage<T>(
	errorMessages: ErrorMessages<T>,
	key: string,
	args?: T[]
): string {
	// If the property in the object is a function
	if (typeof errorMessages[key] === 'function') {
		// If we have arguments
		if (args && args.length) {
			// Call it with them
			return (errorMessages[key] as GenericFnOpt<T>)(...args);
		} else {
			// Else, just call it
			return (errorMessages[key] as GenericFnOpt<T>)();
		}
	} else {
		// If the property isn't a function, return it
		return errorMessages[key] as string;
	}
}
