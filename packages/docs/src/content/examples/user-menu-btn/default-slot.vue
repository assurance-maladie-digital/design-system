<template>
	<UserMenuBtn full-name="Édith Cartier">
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
	export default class UserMenuBtnDefaultSlot extends Vue {
		items = [
			'Administration',
			'Profil',
			'Paramètres'
		];
	}
</script>
