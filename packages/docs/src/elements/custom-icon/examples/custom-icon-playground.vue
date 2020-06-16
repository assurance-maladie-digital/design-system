<template>
	<VRow>
		<VCol
			cols="12"
			sm="6"
		>
			<VSelect
				v-model="props.color"
				:items="colors"
				label="Couleur"
				outlined
			/>

			<VSelect
				v-model="standardSize"
				:items="propSizes"
				label="Taille standard"
				outlined
				@change="standardSizeSelected"
			/>

			<VSelect
				v-model="props.size"
				:items="sizes"
				label="Taille personnalisée"
				outlined
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<CustomIcon v-bind="props" />
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import tokens from '@cnamts/vue-dot/src/tokens';

	interface Props {
		[key: string]: string | boolean | null;
	}

	@Component
	export default class CustomIconPlayground extends Vue {
		props: Props = {
			color: tokens.colors.primary,
			icon: 'github',
			size: null,
			small: false,
			medium: false,
			large: false,
			xLarge: false
		};

		colors = [
			{
				text: 'primary',
				value: tokens.colors.primary
			},
			{
				text: 'accent',
				value: tokens.colors.accent
			}
		];

		standardSize = '';

		propSizes = [
			{
				text: 'Défaut',
				value: ''
			},
			{
				text: 'small',
				value: 'small'
			},
			{
				text: 'medium',
				value: 'medium'
			},
			{
				text: 'large',
				value: 'large'
				},
			{
				text: 'x-large',
				value: 'xLarge'
			}
		];

		sizes = [
			{
				text: 'Aucune',
				value: null
			},
			{
				text: '40px',
				value: '40px'
			},
			{
				text: '50px',
				value: '50px'
			},
			{
				text: '150px',
				value: '150px'
			}
		];

		standardSizeSelected(standardSize: string): void {
			// Reset all standard sizes
			this.props.small = false;
			this.props.medium = false;
			this.props.large = false;
			this.props.xLarge = false;

			// Set new standard size and reset the main size if needed
			if (standardSize) {
				this.props[standardSize] = true;
				this.props.size = null;
			}
		}
	}
</script>
