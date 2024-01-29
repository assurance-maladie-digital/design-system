<script setup lang="ts">
</script>

<template>
	<VApp>
		<VAppBar
			color="primary"
			class="px-8"
		>
			<VAppBarTitle>
				Playground
			</VAppBarTitle>
		</VAppBar>

		<VMain id="main" class="px-4">

		</VMain>
	</VApp>
</template>

<style lang="scss">
	@import '@cnamts/design-tokens/dist/tokens';

	#main {
		padding-top: 4.5rem;
		background: $vd-am-blue-lighten-97;
	}
</style>
