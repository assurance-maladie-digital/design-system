<template>
	<div class="d-flex align-center">
		<PageFooter :access-level=2>
			<template #contentLinks>
				<div>Image</div>
			</template>
		</PageFooter>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

   	@Component
	export default class PageFooterSlots extends Vue {
	}
</script>