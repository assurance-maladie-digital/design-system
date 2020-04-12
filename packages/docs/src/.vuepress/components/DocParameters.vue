<template>
	<div>
		<div
			v-if="missingItems.length > 0"
			class="px-2"
		>
			<strong>MISSING ITEMS:</strong>

			{{ missingItems.join(', ') }}
		</div>

		<VDataIterator
			:items="computedItems"
			:items-per-page="-1"
			:search="search"
			class="component-parameters"
			hide-default-footer
		>
			<template v-slot="{ items }">
				<div>
					<template v-for="(item, i) in items">
						<DocApiItem
							:key="item.name"
							:headers="headers"
							:item="item"
						/>

						<VDivider
							v-if="i + 1!== items.length"
							:key="`divider-${i}`"
						/>
					</template>
				</div>
			</template>

			<template #no-results>
				<div class="text-center pa-6 title font-weight-regular">
					No matching records found
				</div>
			</template>
		</VDataIterator>
	</div>
</template>

<script>
	export default {
		name: 'DocParameters',
		props: {
			target: {
				type: String,
				default: ''
			},
			headers: {
				type: Array,
				default: () => ([])
			},
			lang: {
				type: String,
				default: ''
			},
			items: {
				type: Array,
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
		},
		computed: {
			computedItems () {
				const items = [];

				for (const item of this.items) {
					const newItem = item !== Object(item)
						? { name: item }
						: Object.assign({}, item);

					const keys = Object.keys(newItem);

					for (let i = 0; i < keys.length; i++) {
						const key = keys[i];
						const fn = this[`gen${key}`];

						if (fn) {
							newItem[key] = fn(newItem[key], item);
						}
					}

					newItem.description = item.description;

					items.push(newItem);
				}
				return items;
			},
			missingItems() {
				if (process.env.NODE_ENV !== 'development') {
					return [];
				}

				const items = this.computedItems.filter(item => item.description.indexOf('MISSING DESCRIPTION') > -1);

				return items.map(item => item.name);
			}
		},
		methods: {
			parseSource(source) {
				if (!source) {
					return '';
				}

				if (source.match(/^v-/)) {
					source = source.replace(/v-/, '');
				}

				return source;
			}
		}
	}
</script>

<style lang="scss">
	.component-parameters {
		font-size: 14px;

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
