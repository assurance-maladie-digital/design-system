<template>
	<component
		:is="component"
		v-if="component"
		v-bind="{
			...$attrs,
			...$props,
		}"
		v-on="$listeners"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

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
		component = null;

		created() {
			this.load();
		}

		async load(): Promise<void> {
			let component = {} as any;

			try {
				// component = await import(
				// 	/* webpackChunkName: "examples" */
				// 	/* webpackMode: "lazy" */
				// 	`../../content/composants/copy-btn/examples/usage.vue`
				// );

				this.$emit('loaded', component.default);
			} catch (err) {
				// component = await import('./ExampleMissing');
				this.$emit('error', err);
			}

			this.component = component.default;
		}
	}
</script>
