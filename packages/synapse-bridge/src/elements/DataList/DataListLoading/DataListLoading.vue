<template>
	<div aria-hidden="true" class="vd-data-list-loading">
		<HeaderLoading
			v-if="heading"
			width="100px"
			height="1.5rem"
			class="mb-4"
		/>

		<ul class="pl-0">
			<li
				v-for="index in itemsNumber"
				:key="index + '-loading-item'"
				class="vd-data-list-loading-item"
				:class="{ 'mb-4': index !== itemsNumber }"
			>
				<HeaderLoading
					v-if="!row"
					width="60px"
					height="1rem"
					class="mb-1"
				/>

				<HeaderLoading :width="itemWidth" height="1.5rem" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Props = {
	props: {
		itemsNumber: {
			type: Number,
			default: 1,
		},
		heading: {
			type: Boolean,
			default: false,
		},
		row: {
			type: Boolean,
			default: false,
		},
	},
};

export default defineComponent({
	mixins: [Props],
	props: {
		...Props.props,
	},
	computed: {
		itemWidth(): string {
			return this.row ? '150px' : '90px';
		},
	},
});
</script>

<style lang="scss" scoped>
ul {
	list-style: none;
}
</style>
