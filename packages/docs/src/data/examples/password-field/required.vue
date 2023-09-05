<template>
	<PhoneField
		v-model="password"
		required
		outlined
		class="vd-form-input"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class PasswordFieldRequired extends Vue {
		password: string | null = null;
	}
</script>
