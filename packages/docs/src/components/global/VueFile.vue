<template>
	<component
		:is="component"
		v-if="component"
		v-bind="{
			...$attrs,
			...$props
		}"
		v-on="$listeners"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	interface DynamicImport {
		default: Vue;
	}

	const Props = Vue.extend({
		props: {
			file: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		inheritAttrs: false
	})
	export default class VueFile extends MixinsDeclaration {
		component: Vue | null = null;

		async created() {
			await this.load();
		}

		async load(): Promise<void> {
			let component = {} as DynamicImport;

			try {
				const file = this.file;
				component = await import(
					/* webpackChunkName: "examples" */
					/* webpackMode: "lazy-once" */
					`../../data/examples/${file}.vue`
				);

				this.$emit('loaded', component.default);
			} catch(error) {
				component = await import('./ExampleError.vue') as unknown as DynamicImport;

				this.$emit('error', error);
			}

			this.component = component.default;
		}
	}
</script>
