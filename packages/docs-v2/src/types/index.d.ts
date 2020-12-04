import { IndexedObject } from '@cnamts/vue-dot/src/types';

export interface ApiProp {
	name: string;
	type: string | string[];
	description: string;
	required?: boolean;
	default?: string | number | boolean | null | undefined;
	signature: string;
	value: string;
}

type ItemValue = Pick<ApiProp, 'name' | 'type' | 'default' | 'required' | 'description'>;
type ItemDescription = Pick<ApiProp, 'name' | 'description'>;
type ItemEvent = Pick<ApiProp, 'name' | 'description' | 'value'>;
type ItemFunction = Pick<ApiProp, 'name' | 'signature' | 'description'>;
type ItemModifier = Pick<ApiProp, 'name' | 'type' | 'description'>;
type ItemArgument = Pick<ApiProp, 'type' | 'description'>;

interface ApiHeaderList {
	options: ItemValue[];
	slots: ItemDescription[];
	props: ItemValue[];
	events: ItemEvent[];
	functions: ItemFunction[];
	modifiers: ItemModifier[];
	argument: ItemArgument[];
}

export type HeaderList = keyof ApiHeaderList;
export type ApiHeaders = Partial<ApiHeaderList>;

export type Api = IndexedObject<ApiHeaders>;
