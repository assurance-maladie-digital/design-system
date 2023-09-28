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
import UserMenuBtn from "../src/elements/UserMenuBtn";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		UserMenuBtn,
	},
	data() {
		return {
			items: [
				'Administration',
				'Profil',
				'Paramètres'
			]
		};
	},
});
