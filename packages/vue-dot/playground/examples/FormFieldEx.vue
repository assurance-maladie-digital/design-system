<template>
	<DocSection title="FormField">
		<FormField
			v-model="field"
			class="pa-0"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FormFieldEx extends Vue {
		field = {
			type: 'password',
			value: null,
			label: 'Mot de passe'
		};
	}
</script>
