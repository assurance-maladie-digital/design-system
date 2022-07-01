<template>
	<FooterBar complex-mode :centerSlotsNumber="3">
		<template #center-slot-1>
			<p class="grey--text text--darken-1 my-3 mx-4">
				slot 1
			</p>
		</template>
		<template #center-slot-2>
			<p class="grey--text text--darken-1 my-3 mx-4">
				slot 2
			</p>		
		</template>
		<template #center-slot-3>
			<p class="grey--text text--darken-1 my-3 mx-4">
				slot 3
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
