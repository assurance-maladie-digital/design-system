import type { ComponentOptionsMixin, DefineComponent } from 'vue';

export type Options = Record<string, any>;

interface Props {
  vuetifyOptions: Options | undefined
}

type RawBindings = unknown;
type Data = unknown;

interface Computed {
  options: () => Options
}

interface Methods {}
type Mixins = ComponentOptionsMixin;
type Extends = ComponentOptionsMixin;
interface Emits {}
type EE = string;
interface PublicProps {}
interface Defaults {}

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
