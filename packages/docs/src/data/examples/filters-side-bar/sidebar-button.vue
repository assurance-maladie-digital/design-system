<template>
	<div class="d-flex justify-center">
		<FiltersSideBar
			v-model="filters"
			side-bar-button
			:limited-inline-filter="limitedInlineFilter"
			hide-reset
		>
			<template #filter-firstname="{ on, attrs }">
				<VTextField
					label="Prénom"
					class="mt-4"
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
			<template #filter-lastname="{ on, attrs }">
				<VTextField
					label="Nom"
					class="mt-4"
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
			<template #filter-nickname="{ on, attrs }">
				<VTextField
					label="Surnom"
					class="mt-4"
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</FiltersSideBar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilterMenuApplyButton extends Vue {
		limitedInlineFilter=['firstname', 'lastname']

		filters = [
			{
				name: 'firstname',
				label: 'Prénom',
				chips: [],
				descrption: 'Entrer le prénom d\'un utilisateur',
				clearAfterValidate: true
			},
			{
				name: 'lastname',
				label: 'Nom',
				chips: [],
				descrption: 'Entrer le nom d\'un utilisateur',
				clearAfterValidate: true
			},
			{
				name: 'nickname',
				label: 'Surnom',
				chips: [],
				descrption: 'Entrer le surnom d\'un utilisateur',
				clearAfterValidate: true
			}
		];
	}
</script>
