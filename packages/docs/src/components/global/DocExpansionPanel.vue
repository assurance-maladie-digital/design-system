<template>
	<VExpansionPanel>
		<VExpansionPanelHeader class="text-subtitle-2 font-weight-bold">
			{{ label }}
		</VExpansionPanelHeader>

		<VExpansionPanelContent>
			<slot />
		</VExpansionPanelContent>
	</VExpansionPanel>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocExpansionPanel extends MixinsDeclaration {}
</script>
