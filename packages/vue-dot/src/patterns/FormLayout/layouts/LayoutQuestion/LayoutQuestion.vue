<template>
	<VLayout
		column
		class="vd-layout ma-n4"
	>
		<h4
			v-if="getField(0).title"
			class="mx-4 mt-4 body-1 my-0"
		>
			<span>{{ getField(0).title }}</span>
			<VTooltip right>
				<template v-slot:activator="{ on }">
					<VBtn
						icon
						v-on="on"
					>
						<VIcon>{{ informationIcon }}</VIcon>
					</VBtn>
				</template>
				<span>{{ getField(0).tooltip }}</span>
			</VTooltip>
		</h4>
		<p class="body-2 mx-4 mb-0">
			{{ getField(0).description }}
		</p>
		<slot
			name="content-1"
			v-bind="getField(0)"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiInformation } from '@mdi/js';

	import LayoutComponent from '../../mixins/layoutComponent';

	@Component
	export default class LayoutQuestion extends LayoutComponent {
		informationIcon = mdiInformation;
	}
</script>

<style lang="scss" scoped>
	.vd-layout .v-input {
		width: 50%;
		flex: none;
	}
</style>
