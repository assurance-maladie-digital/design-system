<template>
	<v-container class="container">
		<v-row
        		cols="12">
			<v-col 
        		cols="4"
				v-for="color in palette" 
				v-bind:key="color.name">
				<div
					:style="{ 'background-color': color.subColors[4].hexa }"
					class="pa-3 mb-1 d-flex justify-space-between text-center">
					<span class="white--text overline">{{ color.name }}</span>
				</div>
				<div 
					v-for="(subcolor, index) in color.subColors" 
					v-bind:key="subcolor.name"
					class="pa-3 d-flex justify-space-between"
					:style="{ 'background-color': subcolor.hexa, 'color': index > color.whiteColorNumber ? 'black' : 'white'  }">
					<span class="caption">{{ subcolor.name }}</span>
					<span class="caption">{{ subcolor.hexa }}</span>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>


<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocColors extends Vue {

		palette = [
			{
				name: 'amBlue',
				whiteColorNumber: 5,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#020d1f'
					},
					{
						name: 'darken-60',
						hexa: '#051a3e'
					},
					{
						name: 'darken-40',
						hexa: '#07275c'
					},
					{
						name: 'darken-20',
						hexa: '#0a347b'
					},
					{
						name: 'base',
						hexa: '#0c419a'
					},
					{
						name: 'lighten-20',
						hexa: '#3d67ae'
					},
					{
						name: 'lighten-40',
						hexa: '#6d8dc2'
					},
					{
						name: 'lighten-60',
						hexa: '#9eb3d7'
					},
					{
						name: 'lighten-80',
						hexa: '#ced9eb'
					},
					{
						name: 'lighten-90',
						hexa: '#e7ecf5'
					},
					{
						name: 'lighten-97',
						hexa: '#f8f9fc'
					}
				]
			},
			{
				name: 'cyan',
				whiteColorNumber: 3,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#00212d'
					},
					{
						name: 'darken-60',
						hexa: '#004259'
					},
					{
						name: 'darken-40',
						hexa: '#006386'
					},
					{
						name: 'darken-20',
						hexa: '#0084b2'
					},
					{
						name: 'base',
						hexa: '#00a5df'
					},
					{
						name: 'lighten-20',
						hexa: '#33b7e5'
					},
					{
						name: 'lighten-40',
						hexa: '#66c9ec'
					},
					{
						name: 'lighten-60',
						hexa: '#99dbf2'
					},
					{
						name: 'lighten-80',
						hexa: '#ccedf9'
					},
					{
						name: 'lighten-90',
						hexa: '#e5f6fc'
					},
					{
						name: 'lighten-97',
						hexa: '#f7fcfe'
					}
				]
			},
			{
				name: 'frostedBlue',
				whiteColorNumber: 3,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#142327'
					},
					{
						name: 'darken-60',
						hexa: '#28464d'
					},
					{
						name: 'darken-40',
						hexa: '#3d6874'
					},
					{
						name: 'darken-20',
						hexa: '#518b9a'
					},
					{
						name: 'base',
						hexa: '#65aec1'
					},
					{
						name: 'lighten-20',
						hexa: '#84becd'
					},
					{
						name: 'lighten-40',
						hexa: '#a3ceda'
					},
					{
						name: 'lighten-60',
						hexa: '#c1dfe6'
					},
					{
						name: 'lighten-80',
						hexa: '#e0eff3'
					},
					{
						name: 'lighten-90',
						hexa: '#f0f7f9'
					},
					{
						name: 'lighten-97',
						hexa: '#fafdfd'
					}
				]
			},
			{
				name: 'parme',
				whiteColorNumber: 4,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#00212d'
					},
					{
						name: 'darken-60',
						hexa: '#2f384d'
					},
					{
						name: 'darken-40',
						hexa: '#465473'
					},
					{
						name: 'darken-20',
						hexa: '#5e709a'
					},
					{
						name: 'base',
						hexa: '#758cc0'
					},
					{
						name: 'lighten-20',
						hexa: '#91a3cd'
					},
					{
						name: 'lighten-40',
						hexa: '#acbad9'
					},
					{
						name: 'lighten-60',
						hexa: '#c8d1e6'
					},
					{
						name: 'lighten-80',
						hexa: '#e3e8f2'
					},
					{
						name: 'lighten-90',
						hexa: '#f1f3f9'
					},
					{
						name: 'lighten-97',
						hexa: '#fbfcfd'
					}
				]
			},
			{
				name: 'mauve',
				whiteColorNumber: 5,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#201224'
					},
					{
						name: 'darken-60',
						hexa: '#402449'
					},
					{
						name: 'darken-40',
						hexa: '#60376d'
					},
					{
						name: 'darken-20',
						hexa: '#804992'
					},
					{
						name: 'base',
						hexa: '#a05bb6'
					},
					{
						name: 'lighten-20',
						hexa: '#b37cc5'
					},
					{
						name: 'lighten-40',
						hexa: '#c69dd3'
					},
					{
						name: 'lighten-60',
						hexa: '#d9bde2'
					},
					{
						name: 'lighten-80',
						hexa: '#ecdef0'
					},
					{
						name: 'lighten-90',
						hexa: '#f5eff8'
					},
					{
						name: 'lighten-97',
						hexa: '#fcfafd'
					}
				]
			},
			{
				name: 'pink',
				whiteColorNumber: 5,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#2d051a'
					},
					{
						name: 'darken-60',
						hexa: '#5a0a34'
					},
					{
						name: 'darken-40',
						hexa: '#87104d'
					},
					{
						name: 'darken-20',
						hexa: '#b41567'
					},
					{
						name: 'base',
						hexa: '#e11a81'
					},
					{
						name: 'lighten-20',
						hexa: '#e7489a'
					},
					{
						name: 'lighten-40',
						hexa: '#ed76b3'
					},
					{
						name: 'lighten-60',
						hexa: '#f3a3cd'
					},
					{
						name: 'lighten-80',
						hexa: '#f9d1e6'
					},
					{
						name: 'lighten-90',
						hexa: '#fce8f2'
					},
					{
						name: 'lighten-97',
						hexa: '#fef8fb'
					}
				]
			},
			{
				name: 'brick',
				whiteColorNumber: 4,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#291112'
					},
					{
						name: 'darken-60',
						hexa: '#522224'
					},
					{
						name: 'darken-40',
						hexa: '#7b3237'
					},
					{
						name: 'darken-20',
						hexa: '#a44349'
					},
					{
						name: 'base',
						hexa: '#cd545b'
					},
					{
						name: 'lighten-20',
						hexa: '#d7767c'
					},
					{
						name: 'lighten-40',
						hexa: '#e1989d'
					},
					{
						name: 'lighten-60',
						hexa: '#ebbbbd'
					},
					{
						name: 'lighten-80',
						hexa: '#f5ddde'
					},
					{
						name: 'lighten-90',
						hexa: '#faeeef'
					},
					{
						name: 'lighten-97',
						hexa: '#fdfafa'
					}
				]
			},
			{
				name: 'orange',
				whiteColorNumber: 4,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#2d100b'
					},
					{
						name: 'darken-60',
						hexa: '#5a2017'
					},
					{
						name: 'darken-40',
						hexa: '#862f22'
					},
					{
						name: 'darken-20',
						hexa: '#b33f2e'
					},
					{
						name: 'base',
						hexa: '#e04f39'
					},
					{
						name: 'lighten-20',
						hexa: '#e67261'
					},
					{
						name: 'lighten-40',
						hexa: '#ec9588'
					},
					{
						name: 'lighten-60',
						hexa: '#f3b9b0'
					},
					{
						name: 'lighten-80',
						hexa: '#f9dcd7'
					},
					{
						name: 'lighten-90',
						hexa: '#fcedeb'
					},
					{
						name: 'lighten-97',
						hexa: '#fefaf9'
					}
				]
			},
			{
				name: 'yellow',
				whiteColorNumber: 2,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#302407'
					},
					{
						name: 'darken-60',
						hexa: '#60480e'
					},
					{
						name: 'darken-40',
						hexa: '#906b15'
					},
					{
						name: 'darken-20',
						hexa: '#c08f1c'
					},
					{
						name: 'base',
						hexa: '#f0b323'
					},
					{
						name: 'lighten-20',
						hexa: '#f3c24f'
					},
					{
						name: 'lighten-40',
						hexa: '#f6d17b'
					},
					{
						name: 'lighten-60',
						hexa: '#f9e1a7'
					},
					{
						name: 'lighten-80',
						hexa: '#fcf0d3'
					},
					{
						name: 'lighten-90',
						hexa: '#fdf7e9'
					},
					{
						name: 'lighten-97',
						hexa: '#fffdf8'
					}
				]
			},
			{
				name: 'green',
				whiteColorNumber: 2,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#112717'
					},
					{
						name: 'darken-60',
						hexa: '#224e2d'
					},
					{
						name: 'darken-40',
						hexa: '#347444'
					},
					{
						name: 'darken-20',
						hexa: '#459b5a'
					},
					{
						name: 'base',
						hexa: '#56c271'
					},
					{
						name: 'lighten-20',
						hexa: '#78ce8d'
					},
					{
						name: 'lighten-40',
						hexa: '#9adaaa'
					},
					{
						name: 'lighten-60',
						hexa: '#bbe7c6'
					},
					{
						name: 'lighten-80',
						hexa: '#ddf3e3'
					},
					{
						name: 'lighten-90',
						hexa: '#eef9f1'
					},
					{
						name: 'lighten-97',
						hexa: '#fafdfb'
					}
				]
			},
			{
				name: 'turquoise',
				whiteColorNumber: 3,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#00221c'
					},
					{
						name: 'darken-60',
						hexa: '#004439'
					},
					{
						name: 'darken-40',
						hexa: '#006755'
					},
					{
						name: 'darken-20',
						hexa: '#008972'
					},
					{
						name: 'base',
						hexa: '#00ab8e'
					},
					{
						name: 'lighten-20',
						hexa: '#33bca5'
					},
					{
						name: 'lighten-40',
						hexa: '#66cdbb'
					},
					{
						name: 'lighten-60',
						hexa: '#99ddd2'
					},
					{
						name: 'lighten-80',
						hexa: '#cceee8'
					},
					{
						name: 'lighten-90',
						hexa: '#e5f7f4'
					},
					{
						name: 'lighten-97',
						hexa: '#f7fcfc'
					}
				]
			},
			{
				name: 'grey',
				whiteColorNumber: 6,
				subColors: [
					{
						name: 'darken-80',
						hexa: '#111212'
					},
					{
						name: 'darken-60',
						hexa: '#222324'
					},
					{
						name: 'darken-40',
						hexa: '#323535'
					},
					{
						name: 'darken-20',
						hexa: '#434647'
					},
					{
						name: 'base',
						hexa: '#545859'
					},
					{
						name: 'lighten-20',
						hexa: '#76797a'
					},
					{
						name: 'lighten-40',
						hexa: '#989b9b'
					},
					{
						name: 'lighten-60',
						hexa: '#bbbcbd'
					},
					{
						name: 'lighten-80',
						hexa: '#dddede'
					},
					{
						name: 'lighten-90',
						hexa: '#eeeeee'
					},
					{
						name: 'lighten-97',
						hexa: '#fafafa'
					}
				]
			}
		]

		mounted() {
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