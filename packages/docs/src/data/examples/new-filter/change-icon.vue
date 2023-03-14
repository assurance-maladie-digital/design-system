<template>
	<div class="d-flex justify-center">
		<FilterMenu
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
		>
			<template #filter-firstname="{ on, attrs }">
				<VTextField
					label="Nom"
					outlined
					class="mt-4"
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</FilterMenu>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiAccount } from '@mdi/js';

	@Component
	export default class FilterModuleUsage extends Vue {
		userIcon = mdiAccount;

		filters = [
			{
				name: 'firstname',
				label: 'Prénom',
				description: 'Entrez ici le prénom du patient que vous recherchez',
				chips: [],
				icon: this.userIcon
			}
		];
	}
</script>
