<template>
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
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FooterBtn from '@cnamts/vue-dot/src/patterns/FooterWrapper/FooterBtn';

	@Component({
		components: {
			FooterBtn
		}
	})
	export default class FooterWrapperInertBtn extends Vue {}
</script>
