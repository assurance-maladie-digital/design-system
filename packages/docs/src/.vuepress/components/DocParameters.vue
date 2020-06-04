<template>
	<VDataIterator
		:items="computedItems"
		:items-per-page="-1"
		:search="search"
		class="component-parameters"
		hide-default-footer
	>
		<template v-slot="{ items }">
			<div>
				<template v-for="(item, index) in items">
					<DocApiItem
						:key="item.name"
						:headers="headers"
						:item="item"
					/>

					<VDivider
						v-if="index + 1 !== items.length"
						:key="`divider-${index}`"
					/>
				</template>
			</div>
		</template>

		<template #no-results>
			<div class="text-center pa-6 title font-weight-regular">
				Aucune correspondance trouvée
			</div>
		</template>
	</VDataIterator>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { ItemHeader, Item } from '../types';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	import marked from 'marked';

	type Generator = (key: string, item: Item) => string;
	type GeneratorList = IndexedObject<Generator>;

	const Props = Vue.extend({
		props: {
			target: {
				type: String,
				default: ''
			},
			headers: {
				type: Array as PropType<ItemHeader[]>,
				default: () => ([])
			},
			items: {
				type: Array as PropType<Item[]>,
				default: () => ([])
			},
			search: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocParameters extends MixinsDeclaration {
		get computedItems(): Item[] {
			const items = [] as Item[];

			for (const item of this.items) {
				const newItem = Object.assign({}, item);

				const keys = Object.keys(newItem);

				// Call generator function (genKey) for each key if it exists
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);

					const fnList = (this as unknown as IndexedObject<Generator>);
					const fn = fnList[`gen${capitalizedKey}`];

					if (fn && typeof newItem[key] === 'string') {
						newItem[key] = fn(newItem[key] as string, item);
					}
				}

				items.push(newItem);
			}

			return items;
		}

		/** Parse Mardown description to HTML */
		genDescription(key: string, item: Item): string {
			return marked(key);
		}
	}
</script>

<style lang="scss">
	.component-parameters {
		font-size: .9rem;

		p {
			margin-bottom: 0;
		}

		.mono {
			font-family: 'Roboto Mono', monospace;
			font-weight: 600;
		}

		.header {
			font-family: 'Roboto Mono', monospace;
			font-size: .8rem;
		}

		.justify {
			text-align: justify;
		}

		.name {
			color: #bd4147;
		}
	}
</style>
