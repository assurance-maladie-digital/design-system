<template>
	<LogoBrandSection
		service-sub-title="Documentation du Design System"
		service-title="Design System"
		:vuetify-options="vuetifyOptions"
	/>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class LogoBrandSectionOptions extends Vue {
	vuetifyOptions = {
		dividerColor: '#459b5a',
		title: {
			color: '#459b5a',
			fontWeight: 'bold',
			fontSize: '1.125rem',
			lineHeight: '1.125rem'
		},
		subTitle: {
			color: '#459b5a',
			fontWeight: 'bold',
			fontSize: '0.875rem',
			lineHeight: '1.125rem'
		}
	};
}
</script>
