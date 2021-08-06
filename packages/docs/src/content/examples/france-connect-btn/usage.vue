<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<FranceConnectBtn
		    v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	@Component({
		inheritAttrs: false
	})
	export default class FranceConnectBtn extends Vue {
		defaultProps = {
			iconText: 'S’identifier avec FranceConnect',
		};
	}
</script>
