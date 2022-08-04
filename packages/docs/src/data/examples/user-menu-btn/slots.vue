<template>
	<UserMenuBtn full-name="Édith Cartier">
		<template #icon>
			<VIcon
				size="32px"
				color="grey-base"
				class="ml-0 ml-sm-4"
			>
				{{ userIcon }}
			</VIcon>
		</template>

		<template #content>
			<VSheet>
				<div class="pa-2">
					<div class="pa-2">
						<h2 class="text-subtitle-1 font-weight-bold">
							Caisses
						</h2>

						{{ caisses }}
					</div>

					<div class="pa-2">
						<h2 class="text-subtitle-1 font-weight-bold">
							Régimes
						</h2>

						{{ regimes }}
					</div>
				</div>

				<VDivider />

				<VBtn
					class="primary--text font-weight-bold justify-start px-4"
					height="56px"
					text
					large
					block
				>
					<VIcon
						color="primary"
						class="mr-2"
					>
						{{ logoutIcon }}
					</VIcon>

					Déconnexion
				</VBtn>
			</VSheet>
		</template>
	</UserMenuBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiAccountCircle, mdiLogoutVariant  } from '@mdi/js';

	@Component
	export default class UserMenuBtnSlots extends Vue {
		userIcon = mdiAccountCircle;
		logoutIcon = mdiLogoutVariant;

		caisses = '001, 002';
		regimes = 'Général';
	}
</script>
