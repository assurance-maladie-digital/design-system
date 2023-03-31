<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<Logo
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class LogoUsage extends Vue {
		defaultProps = {
			size: 'normal'
		};

		propsHiddenByDefault = [
			'size'
		];

		options = {
			booleans: [
				'hideSignature',
				'hideOrganism',
				'risquePro',
				'avatar'
			],
			selects: {
				size: [
					'x-small',
					'small',
					'normal'
				]
			}
		};
	}
</script>
