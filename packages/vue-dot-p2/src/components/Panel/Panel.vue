<template>
	<VLayout
		:id="id"
		:column="column"
		:align-center="!column"
		wrap
		tabindex="0"
		class="panel white-panel main-width"
		@click="$emit('panel:click')"
	>
		<slot name="title">
			<VLayout
				v-if="titleText"
				wrap
				class="panel-title"
			>
				<h2
					v-if="titleText"
					class="headline text-uppercase px-3 py-2 font-weight-medium"
				>
					{{ titleText }}
				</h2>

				<template v-if="helpBtn">
					<VSpacer />
					<slot name="bloc-name" />
				</template>
			</VLayout>
		</slot>

		<VLayout
			:column="column"
			:class="layoutCss"
		>
			<template v-if="warning">
				<VSpacer />

				<CustomIcon
					size="30px"
					icon="warning"
				/>
			</template>

			<slot />
		</VLayout>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			/** Use column for VLayout */
			column: {
				type: Boolean,
				default: false
			},
			/** The title of the panel */
			titleText: {
				type: String,
				default: undefined
			},
			/** Display the help button */
			helpBtn: {
				type: Boolean,
				default: false
			},
			id: {
				type: String,
				default: 'nature'
			},
			/** Display the warning pictogramme */
			warning: {
				type: Boolean,
				default: false
			},
			layoutCss: {
				type: String,
				default: 'py-3 px-3'
			}
		}
	});

	/** Panel component */
	@Component
	export default class Panel extends Props {
		mounted() {
			this.$el.addEventListener('focus', (e) => {
				this.$emit('panel:focus', this);
			}, true);
		}
	}
</script>

<style lang="scss" scoped>
	.panel {
		background: #fff;
		border-radius: 4px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	}

	.panel-title {
		border-bottom: 1px solid #e0e0e0;
	}
</style>
