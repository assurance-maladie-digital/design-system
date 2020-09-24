<template>
	<div>
		<VTextField
			v-model="textToCopy"
			label="Texte à copier"
			class="vd-form-input"
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

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class CopyBtnEx extends Vue {
		textToCopy = 'Exemple';
	}
</script>
