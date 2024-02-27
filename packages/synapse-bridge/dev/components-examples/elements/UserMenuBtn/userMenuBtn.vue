<template>
	<PageContainer>
		<UserMenuBtn
			additional-information="Information supplémentaire"
			full-name="Virginie Beauchesne"
		/>
		<br/><br/>
		<UserMenuBtn full-name="Édith Cartier">
			<VListItem
				v-for="(item, index) in items"
				:key="index"
			>
				<VListItemTitle>{{ item }}</VListItemTitle>
			</VListItem>
		</UserMenuBtn>
		<br/><br/>
		<UserMenuBtn
			additional-information="Information supplémentaire"
			full-name="Virginie Beauchesne"
			mobile-version
		/>
		<br/><br/>
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
	</PageContainer>
</template>

<script lang="ts">
import UserMenuBtn from "@/elements/UserMenuBtn";
import PageContainer from "@/elements/PageContainer";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		UserMenuBtn,
		PageContainer,
	},
	data() {
		return {
			items: [
				'Administration',
				'Profil',
				'Paramètres'
			],
			vuetifyOptions: {
				menu: {
					minWidth: '264px',
					maxWidth: '264px'
				},
				btn: {
					variant: 'outlined',
				},
				icon: {
					color: 'primary'
				},
				logoutIcon: {
					class: 'd-none'
				}
			}
		};
	},
});
</script>
