<template>
	<VLayout>
		<HeaderLoading
			:width="width"
			:height="height"
		/>

		<div class="ml-12">
			<VTextField
				v-model="width"
				label="Largeur"
				class="vd-form-input mb-4"
				hide-details
				outlined
			/>

			<VTextField
				v-model="height"
				label="Hauteur"
				class="vd-form-input"
				hide-details
				outlined
			/>
		</div>
	</VLayout>
</template>

<script>
	export default {
		data() {
			return {
				width: '200px',
				height: '2rem'
			};
		}
	};
</script>
