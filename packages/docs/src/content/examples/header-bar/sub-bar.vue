<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<HeaderBar theme="cnam">
			<template #sub-bar>
				<div class="ma-2">
					Personnalisez moi
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
	export default class HeaderSubBarUsage extends Vue {}
</script>
