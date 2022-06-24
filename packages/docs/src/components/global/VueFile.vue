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
			try {
				const file = this.file;
				const component = await import(
					/* webpackChunkName: "examples" */
					/* webpackMode: "lazy-once" */
					`../../data/examples/${file}.vue`
				);

				this.component = component.default;
				this.$emit('loaded', component.default);
			} catch(error) {
				this.$emit('error', error);
			}
		}
	}
</script>
