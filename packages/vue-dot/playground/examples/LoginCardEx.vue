<template>
	<DocSection title="LoginCard">
		<LoginCard :login="login" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class LoginCardEx extends Vue {

		async login(email: string, password: string): Promise<void> {

			return new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, 600);
			});
		}
	}
</script>
