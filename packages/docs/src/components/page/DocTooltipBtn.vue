<template>
	<VTooltip
		bottom
		open-delay="200"
	>
		<template #activator="{ on }">
			<VBtn
				v-bind="$attrs"
				v-on="{
					...on,
					...$listeners
				}"
				:aria-label="label"
				icon
			>
				<slot name="icon" />
			</VBtn>
		</template>

		{{ label }}
	</VTooltip>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			},
			icon: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		inheritAttrs: false
	})
	export default class DocTooltipBtn extends MixinsDeclaration {}
</script>
