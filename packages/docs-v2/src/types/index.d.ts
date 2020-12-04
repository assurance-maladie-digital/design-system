import { IndexedObject } from '@cnamts/vue-dot/src/types';

export interface ApiProp {
	name: string;
	type: string | string[];
	description: string;
	required?: boolean;
	default?: string | number | boolean | null | undefined;
	signature: string;
	value: string;
	example?: IndexedObject | string;
	props?: IndexedObject<IndexedObject | string>;
	snippet?: string;
}

type ItemValue = Pick<ApiProp, 'name' | 'type' | 'default' | 'required' | 'description'>;

type ItemSlot = Pick<ApiProp, 'name' | 'description' | 'props'>;
type ItemEvent = Pick<ApiProp, 'name' | 'description' | 'value'>;
type ItemFunction = Pick<ApiProp, 'name' | 'signature' | 'description'>;
type ItemModifier = Pick<ApiProp, 'name' | 'type' | 'description' | 'snippet'>;
type ItemArgument = Pick<ApiProp, 'name' | 'type' | 'default' | 'description' | 'example' | 'snippet'>;

interface ApiHeaderList {
	options: ItemValue[];
	slots: ItemSlot[];
	props: ItemValue[];
	events: ItemEvent[];
	functions: ItemFunction[];
	modifiers: ItemModifier[];
	argument: ItemArgument[];
}

export type HeaderList = keyof ApiHeaderList;
export type ApiHeaders = Partial<ApiHeaderList>;

export type Api = IndexedObject<ApiHeaders>;
