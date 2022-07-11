<template>
  <div class="doc-colors mt-5 mb-5">

	<!-- First color carousel -->
	<div class="mb-15 mt-8 d-flex justify-center">
		<VIcon @click="colorSlideLeft">
			{{ mdiChevronLeft }}
		</VIcon>
		<div class="d-flex">
			<div v-for="colors in colors" 
			v-bind:key="colors" 
			class="square d-flex align-content-center justify-center">
				<VIcon color="white" class="align-self-center">
					{{ mdiCheckCircle }}
				</VIcon>
			</div>
		</div>
		<VIcon @click="colorSlideRight">
			{{ mdiChevronRight }}
		</VIcon>
	</div>

	<!-- Second color carousel -->
	<div class="d-flex justify-center">
		<VIcon @click="colorSlideLeft">
			{{ mdiChevronLeft }}
		</VIcon>
		<div class="d-flex">
			<div v-for="item in 9" 
				v-bind:key="item" 
				class="square d-flex align-content-center justify-center">
				<VIcon color="white" class="align-self-center">
					{{ mdiCheckCircle }}
				</VIcon>
			</div>
		</div>
		<VIcon @click="colorSlideRight">
			{{ mdiChevronRight }}
		</VIcon>
	</div>

	<!-- Description -->
	<!-- First part -->
	<div class="first-part-description d-flex justify-space-around pa-md-10 mt-15">
		<div>
			<div class="description-title">Nom</div>
			<div class="description-data">Bleu</div>
		</div>
		<div>
			<div class="description-title">Nom</div>
			<div class="description-data">Bleu</div>
		</div>
		<div>
			<div class="description-title">Nom</div>
			<div class="description-data">Bleu</div>
		</div>
		<div>
			<div class="description-title">Nom</div>
			<div class="description-data">Bleu</div>
		</div>
	</div>

	<!-- Second part -->
	<div class="pa-md-10 second-part-description">
		<v-row
			class="mb-3"
			no-gutters
		>
			<v-col>
			</v-col>
			<v-col>
				<span class="description-title">Texte couleur</span>
			</v-col>
			<v-col>
				<span class="description-title">Texte blanc</span>
			</v-col>
			<v-col>
				<span class="description-title">Texte noir</span>
			</v-col>
		</v-row>
		<v-row
			class="mb-10"
			no-gutters
		>
			<v-col class="aa-title">
				<span class="aa-large">Aa</span>
				<span class="description-title">large text</span>
				<VIcon>
					{{ mdiInformationOutline }}
				</VIcon>
			</v-col>
			<v-col class="d-flex align-center">
				<span class="description-data">Min 34% opacité</span>
			</v-col>
			<v-col class="d-flex align-center">
				<span class="description-data">Min 34% opacité</span>
			</v-col>
			<v-col class="d-flex align-center">
				<span class="description-data">Non lisible</span>
			</v-col>
		</v-row>
		<v-row
			no-gutters
		>
			<v-col class="aa-title">
				<span class="aa-small">Aa</span>
				<span class="description-title">small text</span>
				<VIcon>
					{{ mdiInformationOutline }}
				</VIcon>
			</v-col>
			<v-col class="d-flex align-center">
				<span class="description-data">Min 48% opacité</span>
			</v-col>
			<v-col class="d-flex align-center">
				<span class="description-data">Min 48% opacité</span>
			</v-col>
			<v-col class="d-flex align-center">
				<span class="description-data">Non lisible</span>
			</v-col>
		</v-row>
	</div>
  </div>
</template>


<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiChevronLeft, mdiChevronRight, mdiCheckCircle, mdiInformationOutline } from '@mdi/js';

	@Component({
		components: {
		}
	})
	export default class DocColors extends Vue {
		mdiChevronLeft = mdiChevronLeft;
		mdiChevronRight = mdiChevronRight;
		mdiCheckCircle = mdiCheckCircle;
		mdiInformationOutline = mdiInformationOutline;

		colors = [
			{
				name: 'Bleu AM',
				variants: [
					{
						name: 'darken-150',
						colorCode: '#06204D'
					},
					{
						name: 'darken-130',
						colorCode: '#082E6C'
					},
					{
						name: 'darken-120',
						colorCode: '#0A347B'
					},
					{
						name: '100',
						colorCode: '#0C419A'
					},
					{
						name: 'Lighten-80',
						colorCode: '#3D67AE'
					},
					{
						name: 'Lighten-60',
						colorCode: '#6D8DC2'
					}
				]
			},
			{
				name: 'Cyan',
				variants: [
					{
						name: 'darken-150',
						colorCode: '#06204D'
					},
					{
						name: 'darken-130',
						colorCode: '#082E6C'
					},
					{
						name: 'darken-120',
						colorCode: '#0A347B'
					},
					{
						name: '100',
						colorCode: '#0C419A'
					},
					{
						name: 'Lighten-80',
						colorCode: '#3D67AE'
					},
					{
						name: 'Lighten-60',
						colorCode: '#6D8DC2'
					}
				]
			},
			{
				name: 'Bleu givré',
				variants: [
					{
						name: 'darken-150',
						colorCode: '#06204D'
					},
					{
						name: 'darken-130',
						colorCode: '#082E6C'
					},
					{
						name: 'darken-120',
						colorCode: '#0A347B'
					},
					{
						name: '100',
						colorCode: '#0C419A'
					},
					{
						name: 'Lighten-80',
						colorCode: '#3D67AE'
					},
					{
						name: 'Lighten-60',
						colorCode: '#6D8DC2'
					}
				]
			}
		]

		colorSlideLeft(): void {
			console.log('left')
		}
		colorSlideRight(): void {
			console.log('right')
		}

	}
</script>


<style lang="scss">

$square-size: 48px;
.square {
	height: $square-size;
	width: $square-size;
	background-color: aqua;
	margin-left: 5px;
	margin-right: 5px;
  	transition: 0.3s;

	&:hover {
		border: solid 3px red;
	}
	.v-icon__svg {
		height: 15px;
	}
}

$border-color: 1px solid rgb(221, 221, 221);
.first-part-description {
	border: $border-color;
}
.second-part-description {
	border-left: $border-color;
	border-right: $border-color;
	border-bottom: $border-color;
}
.description-title {
	font-size: 12px;
	opacity: .7;
}
.description-data {
	font-size: 14px;
}
.aa-small {
	font-size: 17px;
	margin-right: 5px;
	font-weight: 800;
}
.aa-large {
	font-size: 30px;
	margin-right: 5px;
	font-weight: 800;
}
.aa-title {
	.v-icon__svg {
		height: 15px;
	}
}
</style>