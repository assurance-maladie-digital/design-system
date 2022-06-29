<template>
	<div class="d-flex justify-center">
		<FilterModule :filters="filters"/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilterModuleUsage extends Vue {
		filters = [
			{
				type: 'select',
				multiple: true,
				dynamic: true,
				items: [
					{
						text: 'Email',
						value: 'email'
					},
					{
						text: 'Courrier',
						value: 'mail'
					},
					{
						text: 'SMS',
						value: 'sms'
					}
				],
				value: null,
				fieldOptions: {
					outlined: true,
					label: 'Moyen de contact',
					filterTitle: 'Moyen de contact'
				}
			},
			{
				type: 'range',
				min: 0,
				max: 100,
				value: null,
				fieldOptions: {
					outlined: true,
					filterTitle: 'Intervalle'
				}
			},
			{
				type: 'text',
				value: null,
				fieldOptions: {
					outlined: true,
					hideDetails: true,
					label: 'Nom',
					filterTitle: 'Nom'
				}
			}
		];
	}
</script>
