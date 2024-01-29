<script setup lang="ts">
	defineProps<{
		title: string;
		description: string;
		btnLabel: string;
	}>();
</script>

<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ description }}</p>
		<vBtn
			@click="() => {
				$emit('click', 'clicked');
			}"
		>{{ btnLabel }}</vBtn>
	</div>
</template>

<style lang="scss"></style>
