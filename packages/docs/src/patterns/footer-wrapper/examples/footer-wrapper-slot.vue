<template>
	<FooterWrapper>
		<VRow>
			<VSpacer />
			<p>
				version 1
			</p>
		</VRow>
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
	export default class FooterSlot extends Vue {}
</script>
