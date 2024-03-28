<script lang="ts" setup>
import { FooterWrapper } from '@/main'
import FooterBtn from '@/patterns/FooterWrapper/FooterBtn'
</script>

<template>
	<FooterWrapper>
		<FooterBtn>
			Mentions légales
		</FooterBtn>

		<FooterBtn>
			CGU
		</FooterBtn>

		<FooterBtn inert>
			Version 1.0.0
		</FooterBtn>
	</FooterWrapper>

	<FooterWrapper>
		<FooterBtn>
			CGU
		</FooterBtn>

		<FooterBtn inert>
			Version 1
		</FooterBtn>

		<FooterBtn inert>
			28/05/2020
		</FooterBtn>
	</FooterWrapper>

	<FooterWrapper>
		<VRow>
			<VSpacer />

			<p class="mb-0">
				Version 1
			</p>
		</VRow>
	</FooterWrapper>
</template>

<style lang="scss" scoped>
.v-layout + .v-layout {
	margin-top: 60px;
}
</style>
