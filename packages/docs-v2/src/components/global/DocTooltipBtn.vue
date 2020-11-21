<template>
	<span class="doc-tooltip-btn d-inline-block">
		<VTooltip
			bottom
			content-class="doc-tooltip-btn__content"
			open-delay="200"
		>
			<template #activator="{ on }">
				<VBtn
					:aria-label="label"
					icon
					v-bind="$attrs"
					v-on="{
						...on,
						...$listeners
					}"
				>
					<slot name="icon" />
				</VBtn>
			</template>

			{{ label }}
		</VTooltip>
	</span>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			icon: {
				type: String,
				default: undefined
			},
			label: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		inheritAttrs: false
	})
	export default class DocTooltipBtn extends MixinsDeclaration {}
</script>

<style lang="scss">
	.doc-tooltip-btn__content p {
		margin: 0;
	}
</style>
