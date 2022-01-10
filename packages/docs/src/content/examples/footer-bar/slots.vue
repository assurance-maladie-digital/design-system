<template>
	<FooterBar>
		<template #append>
			<p class="grey--text text--darken-1 my-3 mx-4">
				Information partenaires
			</p>
		</template>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarSlots extends Vue {}
</script>
