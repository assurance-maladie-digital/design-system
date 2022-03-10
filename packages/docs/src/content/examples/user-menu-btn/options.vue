<template>
	<UserMenuBtn
		:vuetify-options="vuetifyOptions"
		full-name="Édith Cartier"
	>
		<VListItem
			v-for="(item, index) in items"
			:key="index"
		>
			<VListItemTitle>{{ item }}</VListItemTitle>
		</VListItem>
	</UserMenuBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UserMenuBtnOptions extends Vue {
		items = [
			'Profil',
			'Paramètres'
		];

		vuetifyOptions = {
			menu: {
				minWidth: '264px',
				maxWidth: '264px'
			},
			btn: {
				text: false
			},
			icon: {
				color: 'primary'
			},
			logoutIcon: {
				class: 'd-none'
			}
		};
	}
</script>
