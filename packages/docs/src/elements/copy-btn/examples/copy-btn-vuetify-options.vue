<template>
	<VLayout align-center>
		<p class="mb-0 mr-1">Copiez le texte :</p>

		<CopyBtn
			label="Copier le texte"
			text-to-copy="Exemple"
			:vuetify-options="vuetifyOptions"
		/>
	</VLayout>
</template>

<script>
	export default {
		data() {
			return {
				vuetifyOptions: {
					menu: {
						offsetX: false,
						offsetY: true,
						nudgeLeft: 50
					},
					btn: {
						large: true
					},
					icon: {
						color: 'accent'
					}
				}
			};
		}
	};
</script>
