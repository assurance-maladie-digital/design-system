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
	export default class FooterEx extends Vue {}
</script>
