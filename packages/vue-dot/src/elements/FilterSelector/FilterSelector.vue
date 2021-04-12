<template>
	<v-menu offset-y>
		<template #activator="{ on, attrs }">
			<v-btn
				color="secondary"
				dark
				v-bind="attrs"
				v-on="on"
			>
				Filters
			</v-btn>
		</template>
		<v-list>
			<v-list-item
				v-for="(item, index) in list"
				:key="index"
			>
				<v-list-item-title @click="clicked(index)">
					{{ item.header.text }}
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			list: {
				type: Array,
				default: undefined,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FilterSelector extends MixinsDeclaration {
		isOpen = false;

		clicked(index: number): void {
			this.$emit('open-dialog', index);
		}
	}
</script>

<style lang="scss" scoped>

</style>
