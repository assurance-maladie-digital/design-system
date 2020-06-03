<template>
	<div>
		<h3
			v-if="title"
			class="subheading font-weight-bold mb-2"
		>
			{{ title }}
		</h3>

		<ul>
			<li
				v-for="link in links"
				:key="link.id"
			>
				<a :href="link.url">
					{{ link.name }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { Link } from '@/types';

	const Props = Vue.extend({
		props: {
			title: {
				type: String,
				default: undefined
			},
			links: {
				type: Array as PropType<Link[]>,
				required: true
			}
		}
	});

	/** Displays a list of links */
	@Component
	export default class Links extends Props {}
</script>
