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
					v-for="subcolor in color[1]" 
					v-bind:key="subcolor.name"
					class="pa-3 d-flex justify-space-between"
					:style="{ 'background-color': subcolor }">
					<span class="caption">{{ getColorName(subcolor.name) }}</span>
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
			console.log(cle)
			return [String(cle), palette[cle]];
		});

		getColorName(key:string):string {
			let string: string[] = []
			let number: string[] = []
			key.split('').forEach(el => 
				if(isNaN(el)) {
					string.push(el)
				} else {
					number.push(el)
				}
			)
			return string.join('') + '-' + number.join('') 
		}

		mounted() {
			console.log(this.paletteList)
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