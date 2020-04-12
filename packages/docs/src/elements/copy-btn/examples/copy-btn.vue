<template>
	<div>
		<VTextField
			v-model="textToCopy"
			label="Texte à copier"
			class="form-input"
			hide-details
			outlined
		>
			<template #append>
				<CopyBtn
					label="Copier le texte"
					:text-to-copy="textToCopy"
				/>
			</template>
		</VTextField>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				textToCopy: 'Exemple'
			};
		}
	};
</script>
