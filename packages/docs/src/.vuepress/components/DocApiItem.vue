<template>
	<VLayout
		class="doc-api-item pa-2"
		wrap
	>
		<VFlex
			v-for="(header, index) in computedHeaders"
			:key="header.name"
			:class="header.class"
		>
			<!-- Special case "required" -->
			<span
				v-if="item.required && header.value === 'required'"
				class="mono"
				v-text="header.label"
			/>

			<!-- Header -->
			<div
				v-else
				class="text-capitalize overline text--secondary text--darken-3"
				v-text="header.label || header.value"
			/>

			<!-- Values -->

			<!-- Name -->
			<span
				v-if="header.value === 'name'"
				class="mono name"
				v-text="item.name"
			/>

			<!-- Type -->
			<span
				v-else-if="header.value === 'type'"
				class="mono"
				v-text="item.type"
			/>

			<!-- Default -->
			<template v-if="header.value === 'value' && item.value && !item.required">
				<span
					v-if="typeof item.value === 'string'"
					class="mono"
					v-text="item.value"
				/>
			</template>

			<p
				v-else-if="header.value === 'description' && item.description"
				v-html="item.description"
			/>

			<!-- Signature -->
			<DocMarkup
				v-else-if="header.value === 'signature' && item.signature"
				:filename="false"
				lang="ts"
				value="example"
			>{{ item.signature }}</DocMarkup>

			<!-- Options -->
			<DocMarkup
				v-else-if="header.value === 'example' && item.options"
				:filename="false"
				lang="json"
				value="example"
			>{{ item.options }}</DocMarkup>

			<!-- Snippet -->
			<DocMarkup
				v-else-if="header.value === 'example' && item.snippet"
				:value="item.snippet"
			/>

			<!-- Example -->
			<DocMarkup
				v-else-if="header.value === 'example' && item.example"
				:filename="false"
				lang="ts"
				value="example"
			>{{ item.example }}</DocMarkup>

			<!-- Props -->
			<DocMarkup
				v-else-if="header.value === 'props' && item.props"
				:filename="false"
				lang="ts"
				value="example"
			>{{ item.props }}</DocMarkup>

			<!-- Value -->
			<DocMarkup
				v-else-if="header.value === 'value' && item.value && !item.required"
				:filename="false"
				lang="ts"
				value="example"
			>{{ item.value }}</DocMarkup>
		</VFlex>
	</VLayout>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { ItemHeader, Item } from '../types';

	const Props = Vue.extend({
		props: {
			headers: {
				type: Array as PropType<ItemHeader[]>,
				default: () => ([])
			},
			item: {
				type: Object as PropType<Item>,
				default: () => ({})
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	export default class DocApiItem extends MixinsDeclaration {
		get computedHeaders(): ItemHeader[] {
			// Remove headers without corresponding value
			return this.headers.filter(header => this.item.hasOwnProperty(header.value));
		}
	}
</script>

<style lang="scss">
	.doc-api-item {
		overflow: hidden;

		.mono {
			&.name {
				color: #d63200;
			}

			> .flex {
				padding: .4rem;
			}
		}

		.example .v-markup pre {
			padding: .25rem;
		}
	}
</style>
