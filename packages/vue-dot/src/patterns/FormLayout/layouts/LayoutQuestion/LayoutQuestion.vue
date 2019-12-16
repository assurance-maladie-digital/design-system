<template>
	<VLayout
		class="vd-layout ma-n4"
		v-bind="options.layout"
	>
		<div v-if="getField(0).title">
			<span class="body-1">{{ getField(0).title }}</span>
			<VTooltip v-bind="options.tooltip">
				<template v-slot:activator="{ on }">
					<v-btn
						v-bind="options.tooltipBtn"
						icon
						v-on="on"
					>
						<VIcon v-bind="options.informationIcon">
							{{ informationIcon }}
						</VIcon>
					</v-btn>
				</template>
				<div class="mt-2">
					{{ getField(0).tooltip }}
				</div>
			</VTooltip>
		</div>
		<div class="body-2">
			{{ getField(0).description }}
		</div>
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

	import config from './config';

	import customizable from '../../../../mixins/customizable';

	const MixinsDeclaration = mixins(customizable(config));

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
