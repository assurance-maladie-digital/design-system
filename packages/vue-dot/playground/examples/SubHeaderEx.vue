<template>
	<DocSection title="SubHeader">
		<SubHeader
			:loading="loading"
			:data-lists="dataLists"
			title-text="Prénom Nom (d'usage)"
			sub-title-text="1 69 08 75 125 456 75"
		>
			<!-- ProgressBar -->
			<template #additional-informations>
				<VSpacer />

				<template v-if="loading">
					<HeaderLoading
						class="mt-8"
						height="24"
						width="150"
						dark
					/>

					<HeaderLoading
						class="mt-2 mb-1"
						height="8"
						width="100%"
						tile
						dark
					/>
				</template>

				<template v-else>
					<p class="white--text mt-8 mb-0">
						Profil complété à 50%
					</p>

					<VProgressLinear
						v-bind="progressLinearOpts"
						:value="progressValue"
						class="mb-1"
					/>
				</template>
			</template>
		</SubHeader>

		<VBtn
			class="mt-4"
			color="accent"
			@click="loading = !loading"
		>
			{{ loading ? 'Unset' : 'Set' }} loading
		</VBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const dataListItems = [
		{
			key: 'Libellé',
			value: 'Texte saisi'
		},
		{
			key: 'Libellé',
			value: 'Texte saisi'
		}
	];

	@Component
	export default class SubHeaderEx extends Vue {
		dataLists = [
			{
				title: 'Catégorie 1',
				items: dataListItems
			},
			{
				title: 'Catégorie 2',
				items: dataListItems
			},
			{
				title: 'Catégorie 3',
				items: dataListItems
			},
			{
				title: 'Catégorie 4',
				items: dataListItems
			}
		];

		progressValue = 50;

		progressLinearOpts = {
			class: 'mt-2',
			color: '#fff',
			height: '8px',
			backgroundColor: '#fff',
			backgroundOpacity: '.24'
		};

		loading = false;
	}
</script>
