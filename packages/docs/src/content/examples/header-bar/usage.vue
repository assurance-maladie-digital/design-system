<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<HeaderBar>
			<!-- <template #user-bar>
				TEST
			</template> -->
		</HeaderBar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class HeaderBarUsage extends Vue {
		headerConfig = {
			service: {
				title: {
					text: 'Test title',
					mobileDisplay: true
				},
				subTitle: {
					text: 'Test subtitle',
					mobileDisplay: false
				},
				mobileDisplay: false
			}
		};

		navBar = {};
	}
</script>
