<template>
	<div class="doc-colors d-flex flex-column w-100">
		<VTextField
			v-model="search"
			label="Rechercher"
			hide-details
			clearable
			filled
			background-color="am-blue-lighten-97"
			class="mb-4"
		>
			<template #prepend-inner>
				<VIcon class="mr-2">
					{{ searchIcon }}
				</VIcon>
			</template>
		</VTextField>

		<p v-if="noSearchResult">
			Pas de résultat.
		</p>

		<VRow
			v-else
			class="max-width-none"
		>
			<VCol
				v-for="(colorValues, colorName) in computedColors"
				:key="colorName"
				cols="12"
				sm="6"
				md="4"
				lg="4"
			>
				<div
					:style="getColorStyle(colorValues.base)"
					class="text-subtitle-1 pa-4 mb-1"
				>
					<span class="text-code">
						{{ formatColorName(colorName) }}
					</span>
				</div>

				<div
					v-for="(colorValue, variationName) in colorValues"
					:key="variationName"
					:style="getColorStyle(colorValue)"
					class="d-flex justify-space-between caption pa-4"
				>
					<span class="text-code">
						{{ formatColorName(variationName) }}
					</span>

					<span class="text-code">
						<VIcon
							v-if="warningColors.includes(colorValue)"
							:style="getColorStyle(colorValue)"
							class="mr-1"
							small
						>
							{{ alertIcon }}
						</VIcon>

						{{ colorValue }}
					</span>
				</div>
			</VCol>
		</VRow>

		<p class="d-sm-flex align-center caption mt-4">
			<VIcon
				class="mr-2"
				small
			>
				{{ alertIcon }}
			</VIcon>

			Le niveau de contraste pour ces couleurs n’est pas suffisant. Leur usage est réservé à des éléments graphiques non signifiants.
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { palette } from '@cnamts/design-tokens/dist/colors';
	import { Palette as BasePalette, Color } from '@cnamts/design-tokens/src/types';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	import { hexToRgb } from '../../functions/hexToRgb';
	import { toKebabCase } from '../../functions/toKebabCase';

	import { mdiMagnify } from '@mdi/js';
	import { mdiAlert } from '@mdi/js';

	interface Palette extends BasePalette {
		[key: string]: Color;
	}

	@Component
	export default class DocColorPalette extends Vue {
		searchIcon = mdiMagnify;
		alertIcon = mdiAlert;

		search: string | null = null;

		warningColors: string[] = [
			'#008972',
			'#76797a'
		];

		get computedColors(): Partial<Palette> {
			if (!this.search) {
				return palette;
			}

			const colors = {} as Palette;
			const search = this.search.toLowerCase();

			Object.keys(palette).forEach((key) => {
				const kebabKey = toKebabCase(key).toLowerCase();

				if (kebabKey.indexOf(search) > -1) {
					colors[key] = palette[key];
				}
			});

			return colors;
		}

		get noSearchResult(): boolean {
			return Object.keys(this.computedColors).length === 0;
		}

		formatColorName(colorName: string): string {
			return toKebabCase(colorName).replace(/\d+/, '-$&');
		}

		getTextColor(hex: string): string {
			const rgb = hexToRgb(hex);

			if (!rgb) {
				return '#fff';
			}

			const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;

			return brightness > 125 ? '#000' : '#fff';
		}

		getColorStyle(color: string): IndexedObject {
			return {
				backgroundColor: color,
				color: this.getTextColor(color)
			};
		}
	}
</script>

<style lang="scss" scoped>
	.v-icon {
		flex: none;
	}
</style>
