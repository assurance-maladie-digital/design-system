export interface IndexedObject<T = string> {
	[key: string]: T;
}

export interface Theme {
	primary: string;
	secondary: string;
	accent: string;
	info: string;
	warning: string;
	error: string;
	success: string;
	risquePro: string;
}

export interface VuetifyTheme extends Theme {
	[key: string]: string;
}

export interface Color {
	darken80: string;
	darken60: string;
	darken40: string;
	darken20: string;
	base: string;
	lighten20: string;
	lighten40: string;
	lighten60: string;
	lighten80: string;
	lighten90: string;
	lighten97: string;
}

export interface ColorBootstrap {
	darken80: string;
	darken60: string;
	darken40: string;
	darken20: string;
	base: string;
	lighten20: string;
	lighten40: string;
	lighten60: string;
	lighten80: string;
	lighten90: string;
	lighten97: string;
}

export interface Palette {
	amBlue: Color;
	cyan: Color;
	frostedBlue: Color;
	parme: Color;
	mauve: Color;
	pink: Color;
	brick: Color;
	orange: Color;
	yellow: Color;
	green: Color;
	turquoise: Color;
	grey: Color;
}

export interface PaletteBootstrap {
	amBlue: ColorBootstrap;
	cyan: ColorBootstrap;
	frostedBlue: ColorBootstrap;
	parme: ColorBootstrap;
	mauve: ColorBootstrap;
	pink: ColorBootstrap;
	brick: ColorBootstrap;
	orange: ColorBootstrap;
	yellow: ColorBootstrap;
	green: ColorBootstrap;
	turquoise: ColorBootstrap;
	grey: ColorBootstrap;
}

export type Colors = Theme & Palette;
export type ColorsBootstrap = Theme & PaletteBootstrap;

export interface Tokens {
	dialogWidth: {
		dialogSmall: string;
		dialogMedium: string;
	};
	pageWidth: string;
	inputWidth: {
		inputSmall: string;
		inputMedium: string;
		inputLarge: string;
		inputXLarge: string;
	};
	colors: Colors;
}

export interface TokensBootstrap {
	dialogWidth: {
		dialogSmall: string;
		dialogMedium: string;
	};
	pageWidth: string;
	inputWidth: {
		inputSmall: string;
		inputMedium: string;
		inputLarge: string;
		inputXLarge: string;
	};
	colorsBootstrap: ColorsBootstrap;
}
