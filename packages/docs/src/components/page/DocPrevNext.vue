<template>
	<div
		v-if="prev || next"
		class="doc-prev-next"
	>
		<VDivider class="mb-4" />

		<div class="d-flex flex-wrap">
			<RouterLink
				v-if="prev"
				:to="prev.path"
				class="text-decoration-none body-1"
			>
				<span
					aria-hidden="true"
					class="text-h6"
					v-html="arrows.prev"
				/>

				<span v-text="prev.title" />
			</RouterLink>

			<VSpacer class="mr-6" />

			<RouterLink
				v-if="next"
				:to="next.path"
				class="text-decoration-none body-1"
			>
				<span v-text="next.title" />

				<span
					aria-hidden="true"
					class="text-h6"
					v-html="arrows.next"
				/>
			</RouterLink>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Next } from '@cnamts/vue-dot/src/types';

	interface Arrows {
		next: string;
		prev: string;
	}

	interface Link {
		to: Next;
		title: string;
	}

	const Props = Vue.extend({
		props: {
			prev: {
				type: Object as PropType<Link>,
				default: undefined
			},
			next: {
				type: Object as PropType<Link>,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocPrevNext extends MixinsDeclaration {
		get arrows(): Arrows {
			return {
				next: '&nbsp;→',
				prev: '←&nbsp;'
			};
		}
	}
</script>
