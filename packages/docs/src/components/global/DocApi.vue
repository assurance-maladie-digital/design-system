<template>
	<div class="doc-api w-100">
		<div
			v-for="(component, componentName, index) in api"
			:key="componentName"
		>
			<h2
				v-if="showTitle"
				class="text-h5 font-weight-bold mt-0 mb-0"
				:class="{ 'mt-14': index > 0 }"
			>
				{{ componentName }}
			</h2>

			<div
				v-for="(items, itemName, itemIndex) in component"
				:key="`${componentName}-${itemName}`"
				:class="{ 'mt-6': itemIndex > 0 || showTitle }"
			>
				<h3 class="text-h6 mb-4">
					{{ itemName }}
				</h3>

				<DocApiTable
					:field="itemName"
					:items="items"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Api } from '../../types';

	const getApi = (name: string) => {
		return import(
			/* webpackChunkName: "api-data" */
			/* webpackMode: "eager" */
			`../../data/api/${name}.ts`
		);
	};

	const Props = Vue.extend({
		props: {
			name: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocApi extends MixinsDeclaration {
		api: Api | null = null;

		get showTitle(): boolean {
			if (!this.api) {
				return false;
			}

			return Object.keys(this.api).length > 1;
		}

		async created() {
			this.api = (await getApi(this.name)).api;
		}
	}
</script>
