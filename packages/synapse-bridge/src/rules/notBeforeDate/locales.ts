import { ErrorMessages } from '../types'

export const defaultErrorMessages: ErrorMessages = {
	default: (date: string) =>
		`La date doit être postérieure ou égale au ${date}.`,
}