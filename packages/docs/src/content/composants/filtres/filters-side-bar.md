---
title: FiltersSideBar
description: Le pattern `FiltersSideBar` est utilisé pour permettre à l’utilisateur de sélectionner des filtres dans un panel dédié.
---

<doc-alert-bridge class="mb-8">

Ce composant comporte des différences entre la version VueDot et la version Bridge, veuillez consulter l'onglet `Bridge` pour plus d'informations.

</doc-alert-bridge>

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="filters-side-bar/usage"></doc-example>

### Exemples

#### Formatage des puces

Vous pouvez modifier le formatage des puces en utilisant la propriété `chipFormat`.

<doc-alert type="info">

Le nombre de filtres sélectionnés est automatiquement calculé en fonction du nombre de puces affichées.<br>
De ce fait, si vous combinez les valeurs d’un champ dans une seule puce, le nombre de filtres sélectionnés en sera impacté.

</doc-alert>

<doc-example file="filters-side-bar/chip-format"></doc-example>

#### Combinaison de composants filtres

Vous pouvez utiliser plusieurs composants de filtres pour un seul et même filtre afin de pouvoir modifier un filtre à différents endroits sur une page.

<doc-example file="filters-side-bar/filter-combination"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="filters-side-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Style des panneaux

Vous pouvez modifier le style des panneaux en utilisant les classes générées à partir des noms des filtres.

<doc-example file="filters-side-bar/custom-style"></doc-example>

</doc-tab-item>


<doc-tab-item label="Bridge">

### Utilisation avec VueJs 3 et la librairie Bridge.

Dans la version bridge, la prop `value` a été remplacée par `modelValue`. L'événement `update` a été remplacé par `update:modelValue`. Dans les slots, les événements auparavant passés via la variable `on` sont maintenant intégrés dans la variable `attrs`.


```vue
<template>
	{{ filters }}
	<FiltersSideBar v-model="filters">
		<template #name="{ attrs }">
			<VTextField
				v-bind="attrs"
				color="primary"
				label="Nom"
				variant="outlined"
				hide-details
			/>
		</template>

		<template #folder="{ attrs }">
			<p class="text-secondary">
				Vous pouvez filtrer entre les dossiers de type
				<b>Arrêt de Travail (AT)</b> et
				<b>Maladie Professionnelle (MP)</b> ou <b>Autre</b>.
			</p>

			<VSelect
				v-bind="attrs"
				:items="folderTypes"
				color="primary"
				label="Type de dossier"
				multiple
				variant="outlined"
				return-object
				hide-details
			/>
		</template>

		<template #updated-at="{ attrs }">
			<DatePicker
				v-bind="attrs"
				v-model="date"
				label="Date de mise à jour"
				outlined
			/>
		</template>

		<template #period="{ attrs }">
			<PeriodField v-bind="attrs" outlined />
		</template>

		<template #profession="{ attrs }">
			<SearchListField
				v-bind="attrs"
				:items="professionList"
			/>
		</template>
	</FiltersSideBar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	FiltersSideBar,
	DatePicker,
	PeriodField,
	SearchListField
} from "@cnamts/synapse-bridge";
import { ChipItem } from "@cnamts/synapse-bridge/src/elements/ChipList/types";
import dayjs from "dayjs";
export default defineComponent({
	components: {
		FiltersSideBar,
		DatePicker,
		PeriodField,
		SearchListField
	},
	data() {
		return {
			filters: [
				{
					name: "name",
					title: "Identité",
				},
				{
					name: "folder",
					title: "Type de dossier",
				},
				{
					name: 'updated-at',
					title: 'Mise à jour'
				},
				{
					name: "period",
					title: "Période",
					formatChip: ([min, max]: [number, number]): ChipItem[] => [
						{
							text: `Du ${min} au ${max}`,
							value: [min, max]
						}
					]
				},
				{
					name: "profession",
					title: "Profession",
				},
			],
			folderTypes: [
				{
					title: "AT",
					value: "at",
				},
				{
					title: "MP",
					value: "mp",
				},
				{
					title: "Autre",
					value: "other",
				},
			],
			professionList: [
				{
					label: "Chirurgien-dentiste",
					value: "chirurgien-dentiste",
				},
				{
					label: "Infirmier",
					value: "infirmier",
				},
				{
					label: "Orthophoniste",
					value: "orthophoniste",
				},
				{
					label: "Orthoptiste",
					value: "orthoptiste",
				},
				{
					label: "Pédicure-podologue",
					value: "pedicure-podologue",
				},
				{
					label: "Pharmacien",
					value: "pharmacien",
				},
			],
			date: dayjs().toDate(),
		};
	},
});
</script>
```

</doc-tab-item>

</doc-tabs>
