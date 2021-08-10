<template>
	<VApp>
		<VBtn
			color="primary"
			to="/demarrer/introduction"
			class="d-none"
		>
			Commencer
		</VBtn>
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class Index extends Vue {
		beforeCreate(): void {
			this.$nuxt.$router.push('/demarrer/introduction');
		}
	}
</script>
