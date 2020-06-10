import { Refs } from '../../types';

export type DatePickerRefs = Refs<{
	picker: {
		activePicker: string;
	};
	/** VMenu */
	menu: {
		save: (date: string) => void;
	};
	/** VTextField */
	input: {
		validate: () => boolean;
		hasFocused: boolean;
		hasError: boolean;
	};
}>;
