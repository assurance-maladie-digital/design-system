import type { DefineComponent, ComponentOptionsMixin } from 'vue'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Options = Record<string, any>

type Props = {
	vuetifyOptions: Options | undefined;
}

type RawBindings = unknown
type Data = unknown

type Computed = {
	options(): Options;
}

type Methods = object
type Mixins = ComponentOptionsMixin
type Extends = ComponentOptionsMixin
type Emits = object
type EE = string
type PublicProps = object
type Defaults = object

export type Customizable = DefineComponent<Props, RawBindings, Data, Computed, Methods, Mixins, Extends, Emits, EE, PublicProps, Defaults>
