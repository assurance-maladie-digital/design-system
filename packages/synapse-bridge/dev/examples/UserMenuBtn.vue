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
	</PageContainer>
</template>

<script lang="ts">
import UserMenuBtn from "../src/elements/UserMenuBtn";
import PageContainer from "../src/elements/PageContainer";
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
			]
		};
	},
});
</script>
