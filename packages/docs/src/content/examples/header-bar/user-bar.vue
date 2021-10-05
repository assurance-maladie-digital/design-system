<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<HeaderBar theme="cnam">
			<template #user-bar>
				<div class="ma-6">
					<FranceConnectBtn
						href="#slot-user-bar"
						height="50"
						width="200"
					/>
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
	export default class HeaderUserBarUsage extends Vue {}
</script>
