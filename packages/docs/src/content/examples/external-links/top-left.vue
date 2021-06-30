<template>
	<VCard
		class="mx-auto overflow-hidden"
		height="200"
		width="50%"
	>
		<VCardText>
			<ExternalLinks position="top left" />
		</VCardText>
	</VCard>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	inheritAttrs: false
})
export default class ExternalLinksTopLeft extends Vue {}
</script>
