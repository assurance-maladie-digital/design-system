import { IndexedObject } from '@cnamts/vue-dot/src/types';

export type UsageProps = IndexedObject<
	boolean | string[] | IndexedObject<IndexedObject<number | string>>
>;
