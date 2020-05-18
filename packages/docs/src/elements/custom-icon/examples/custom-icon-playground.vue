<template>
	<VRow>
		<VCol
			cols="12"
			sm="6"
		>
			<VSelect
				v-model="props.color"
				outlined
				:items="colors"
				label="couleur"
			/>
			<VSelect
				v-model="props.icon"
				outlined
				:items="icons"
				label="icon"
			/>
			<VSelect
				v-model="props.size"
				outlined
				:items="sizes"
				label="taille"
			/>
			<VSwitch
				v-model="props.small"
				label="small"
				@change="resetSize"
			/>
			<VSwitch
				v-model="props.medium"
				label="medium"
				@change="resetSize"
			/>
			<VSwitch
				v-model="props.large"
				label="large"
				@change="resetSize"
			/>
			<VSwitch
				v-model="props.xLarge"
				label="xLarge"
				@change="resetSize"
			/>
		</VCol>
		<VCol
			cols="12"
			md="6"
		>
			<VCard>
				<VCardText>
					<CustomIcon
						v-bind="props"
					/>
				</VCardText>
			</VCard>
		</VCol>
	</VRow>
</template>

<script>
	export default {
		data() {
			return {
				props: {
					color: 'red',
					small: false,
					icon: 'mdiAccount',
					medium: false,
					large: false,
					xLarge: false,
					size: '40px'
				},
				icons: [
					{ text: 'avatar', value: 'mdiAccount' },
					{ text: 'vuejs (pas de couleur)', value: 'vuejs' }
				],
				colors: [
					{ text: 'blue', value: 'blue' },
					{ text: 'red', value: 'red' }
				],
				sizes: [
					{ text: '', value: '' },
					{ text: '40px', value: '40px' },
					{ text: '50px', value: '50px' },
					{ text: '150px', value: '150px' }
				]
			};
		},

		methods: {
			resetSize() {
				this.props.size = null;
			}
		}

	};
</script>
