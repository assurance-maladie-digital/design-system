<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<UserMenuBtn
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
	export default class UserMenuBtnUsage extends Vue {
		defaultProps = {
			fullName: 'Virginie Beauchesne',
			additionalInformation: 'Information supplémentaire'
		};

		options = {
			booleans: [
				'hideUserIcon',
				'hideLogoutBtn'
			],
			textFields: [
				'fullName',
				'additionalInformation'
			]
		};
	}
</script>
