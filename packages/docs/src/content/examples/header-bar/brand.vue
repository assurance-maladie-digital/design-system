<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<HeaderBar
			theme="custom"
		>
			<template #brand>
				<div class="ma-8">
					<img
						src="~/assets/logos/logo-msa.svg"
						alt="Logo MSA"
					>
				</div>
			</template>
		</HeaderBar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class HeaderBrandUsage extends Vue {}
</script>
