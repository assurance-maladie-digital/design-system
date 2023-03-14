<template>
	<div class="d-flex justify-center">
		<FilterMenu
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
			v-bind="$attrs"
			v-on="$listeners"
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


	@Component({
		inheritAttrs: false
	})
	export default class FilterModuleUsage extends Vue {
		filters = [
			{
				name: 'firstname',
				label: 'Prénom',
				description: 'Entrez ici le prénom du patient que vous recherchez',
				chips: []
			},
			{
				name: 'lastname',
				label: 'Nom',
				description: 'Entrez ici le nom du patient que vous recherchez',
				chips: []
			},
		];
	}
</script>
