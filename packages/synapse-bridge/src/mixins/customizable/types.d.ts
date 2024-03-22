import { type DefineComponent, type ComponentOptionsMixin } from 'vue';

/* eslint-disable ts/no-explicit-any */
export type Options = Record<string, any>;

type Props = {
	vuetifyOptions: Options | undefined
};

type RawBindings = unknown;

type Data = unknown;

type Computed = {
	options(): Options
};

type Methods = Record<string, never>;

type Mixins = ComponentOptionsMixin;

type Extends = ComponentOptionsMixin;

type Emits = Record<string, never>;

type EE = string;

type PublicProps = unknown;

type Defaults = unknown;

export type Customizable = DefineComponent<
	Props,
	RawBindings,
	Data,
	Computed,
	Methods,
	Mixins,
	Extends,
	Emits,
	EE,
	PublicProps,
	Defaults
>;
