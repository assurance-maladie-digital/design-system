// Here you can define types that
// you'll be using across your application

export interface Link {
	id: number;
	url: string;
	name: string;
}

export interface FormRef {
	validate: () => isValid,
	resetValidation: () => undefined,
	reset: () => undefined
}
