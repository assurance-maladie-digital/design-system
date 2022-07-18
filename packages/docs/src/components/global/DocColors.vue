<template>
	<v-container class="container">
		<v-row
        	cols="12">
			<v-col 
        		cols="4"
				v-for="color in paletteList" 
				v-bind:key="color.name">
				<div
					:style="{ 'background-color': color[1].base }"
					class="pa-3 mb-1 d-flex justify-space-between text-center">
					<span class="white--text overline">{{ color[0] }}</span>
				</div>
				<div 
					v-for="( subcolor, index) in color[1]" 
					v-bind:key="subcolor"
					class="pa-3 d-flex justify-space-between"
					:style="{ 'background-color': subcolor, 'color': decideFontColor(hexToRgb(subcolor)) }">
					<span class="caption">{{ getColorName(index) }}</span>
					<span class="caption">{{ subcolor }}</span>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>


<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { palette } from '@cnamts/design-tokens/dist/colors';

	@Component
	export default class DocColors extends Vue {

		paletteList = Object.keys(palette).map(function(cle) {
			return [String(cle), palette[cle]];
		});

		getColorName(colorName: string): string{
			if(colorName === 'base') {
				return colorName
			} else {
				return colorName.substr(0, colorName.length - 2) + '-' + colorName.substr(colorName.length - 2, 2)
			}
		}

		hexToRgb(hex: string) {
			var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			hex = hex.replace(shorthandRegex, function(m, r, g, b) {
				return r + r + g + g + b + b;
			});

			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
		}
		
		decideFontColor(color: { r: number; g: number; b: number; }) {
			if((color.r * 0.299 + color.g * 0.587 + color.b * 0.114) > 176) {
				return '#000000'
			} else {
				return '#ffffff'
			}
		}
	}
</script>


<style lang="scss">
.container {
	width: 100%;
	margin-top: 30px;
	margin-bottom: 50px;
}
</style>