<template>
	<VLayout
		class="doc-api-item pa-2"
		wrap
	>
		<VFlex
			v-for="(header, index) in headers"
			:key="header.name"
			:class="header.class"
		>
			<!-- Header -->
			<div
				v-if="!['example', 'props'].includes(header.value) || item.example || item.props"
				class="text-capitalize overline text--secondary text--darken-3"
				v-text="header.text || header.value"
			/>

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
			<template v-if="header.value === 'defaultValue' && item.defaultValue && header.type !== 'sass'">
				<span
					v-if="typeof item.defaultValue === 'string'"
					class="mono"
					v-text="item.defaultValue"
				/>
			</template>

			<!-- Sass Default -->
			<DocMarkup
				v-if="header.value === 'defaultValue' && header.type === 'sass' && item.defaultValue"
				:filename="false"
				lang="sass"
				value="example"
			>{{ item.defaultValue }}</DocMarkup>

			<!-- Description -->
			<!-- <base-markdown
				v-else-if="header.value === 'description' && item.description"
				:code="item.description"
			/> -->

			<p
				v-else-if="header.value === 'description' && item.description"
			>{{ item.description }}</p>

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
				v-else-if="header.value === 'value' && item.value"
				:filename="false"
				lang="ts"
				value="example"
			>{{ item.value }}</DocMarkup>
		</VFlex>
	</VLayout>
</template>

<script>
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			headers: {
				type: Array,
				default: () => ([])
			},
			item: {
				type: Object,
				default: () => ({})
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	export default class DocApiItem extends MixinsDeclaration {}
</script>

<style lang="scss">
	.doc-api-item {
		overflow: hidden;

		.mono {
			&.name {
				color: #d63200;
			}

			// &.example,
			// &:hover {
			// 	 text-decoration: underline;
			// }

			> .flex {
				padding: .4rem;
			}
		}

		.example .v-markup pre {
			padding: .25rem;
		}
	}
</style>
