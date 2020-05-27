<template>
	<FooterWrapper>
		<FooterBtn inert>
			Mentions légales
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
	export default class FooterInert extends Vue {}
</script>
