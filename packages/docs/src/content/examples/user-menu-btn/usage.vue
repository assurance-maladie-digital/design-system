<template>
	<VSheet
		min-height="156px"
		class="d-flex flex-wrap align-center justify-center"
	>
		<UserMenuBtn
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</VSheet>
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
