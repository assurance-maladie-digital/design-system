<template>
	<div class="doc-api w-100">
		<DocAlert
			v-if="error"
			type="error"
			class="mb-0"
		>
			Une erreur est survenue lors du chargement de l’API.
		</DocAlert>

		<div
			v-else-if="api"
			v-for="(component, componentName, index) in api"
			:key="componentName"
		>
			<h3
				v-if="showTitle"
				class="text-h5 font-weight-bold my-0"
				:class="{ 'mt-14': index > 0 }"
			>
				{{ componentName }}
			</h3>

			<div
				v-for="(items, itemName, itemIndex) in component"
				:key="`${componentName}-${itemName}`"
				:class="{ 'mt-6': itemIndex > 0 || showTitle }"
			>
				<component
					:is="subHeaderElement"
					class="text-h6 mb-4"
				>
					{{ formatItemName(itemName) }}
				</component>

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

	import { API_HEADER_MAPPING } from '../../constants/apiTableHeaders';
	import { Api } from '../../types';

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
		error = false;

		get showTitle(): boolean {
			if (!this.api) {
				return false;
			}

			return Object.keys(this.api).length > 1;
		}

		get subHeaderElement(): string {
			return this.showTitle ? 'h4' : 'h3';
		}

		formatItemName(itemName: string): string {
			return API_HEADER_MAPPING[itemName];
		}

		async getApi(componentName: string): Promise<Api | undefined> {
			try {
				const data = await import(
					/* webpackChunkName: "api-data" */
					/* webpackMode: "eager" */
					`../../data/api/${componentName}.ts`
				);

				return data.api;
			} catch(error) {
				this.error = true;
			}
		}

		async created() {
			this.api = await this.getApi(this.name) || null;
		}
	}
</script>
