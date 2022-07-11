import { ExtendedVue } from 'vue/types/vue';

import { IndexedObject } from '../../types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Options = IndexedObject<any>;

interface Computed {
	options: Options;
}

interface Props {
	vuetifyOptions: Options;
}

export type Customizable = ExtendedVue<Vue, unknown, unknown, Props, Computed, unknown>;
