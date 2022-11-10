<template>
	<div class="d-flex justify-center">
		<NewFilter
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
		>
			<template #filter-name="{ on, attrs }">
				<VTextField
					label="Nom"
					class="mt-4"
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</NewFilter>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilterModuleUsage extends Vue {
		filters = [
			{
				name: 'name',
				label: 'Nom',
				chips: [],
				descrption: 'Entrer le nom d\'un utilisateur',
				clearAfterValidate: true,
				value: 'John',
			}
		];
	}
</script>
