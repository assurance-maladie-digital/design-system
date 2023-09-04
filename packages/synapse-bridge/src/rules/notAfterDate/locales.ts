import { ErrorMessages } from '@cnamts/vue-dot/src/rules/types';

export const defaultErrorMessages: ErrorMessages = {
	default: (date: string) => `La date doit être antérieure ou égale au ${date}.`
};
