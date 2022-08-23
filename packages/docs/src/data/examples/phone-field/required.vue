<template>
	<PhoneField
		v-model="phone"
		required
		outlined
		class="vd-form-input"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class PhoneFieldRequired extends Vue {
		phone: string | null = null;
	}
</script>
