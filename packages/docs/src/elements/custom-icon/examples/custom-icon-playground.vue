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
				v-model="props.size"
				outlined
				:items="sizes"
				label="taille principale"
			/>
			<VSelect
				v-model="standardSize"
				outlined
				:items="propSizes"
				label="taille standard"
				@change="StandardSizeUpdated"
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
					icon: 'github',
					size: '40px',
					small: false,
					medium: false,
					large: false,
					xLarge: false
				},
				colors: [
					{ text: 'blue', value: 'blue' },
					{ text: 'red', value: 'red' }
				],
				sizes: [
					{ text: '', value: null },
					{ text: '40px', value: '40px' },
					{ text: '50px', value: '50px' },
					{ text: '150px', value: '150px' }
				],
				standardSize: null,
				propSizes: [
					{ text: '', value: '' },
					{ text: 'small', value: 'small' },
					{ text: 'medium', value: 'medium' },
					{ text: 'large', value: 'large' },
					{ text: 'XLarge', value: 'xLarge' }
				]
			};
		},

		methods: {
			StandardSizeUpdated(standardSize) {
				// Reset all standard sizes
				this.props.small = false;
				this.props.medium = false;
				this.props.large = false;
				this.props.xLarge = false;

				// Set new standard size and reset the main size if needed
				if(standardSize) {
					this.props[standardSize] = true;
					this.props.size = null;
				}
			}
		}

	};
</script>
