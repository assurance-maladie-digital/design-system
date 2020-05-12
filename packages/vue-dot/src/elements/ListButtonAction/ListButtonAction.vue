<template>
	<div>
		<VBtn
			v-for="(button, index) in listButton"
			:key="index"
			:color="button.color?button.color:setColor(button.type)"
			class="ml-6 px-5"
			@click="button.action"
		>
			{{ button.label }}
		</VBtn>
	</div>
</template>
<script lang="ts">
	import Component from 'vue-class-component';
	import Vue, { PropType } from 'vue';
	import { ButtonAction } from '@/elements/ListButtonAction/index';

	const Props = Vue.extend({
		props: {
			/**
			 * Define props buttons actions by passing
			 * An array of object ButtonAction,
			 * If it not passing to Parent then template
			 * initialization is prioritized
			 */

			buttonActions: {
				type: Array as PropType<Array<ButtonAction>>,
				required: false
			}
		}
	});
	@Component
	export default class ListButtonAction extends Props {
		// order of render's  button on the template
		btnOrder = ['submit', 'validate', 'reset', 'refresh', 'cancel'];

		/**
		 *  Sort by the order of the list of button actions
		 *  if the first element button type is: reset or refresh or cancel
		 *  always return button submit in first (to left not to right position)
		 */
		get listButton() {
			return this.buttonActions.sort((a: any, b: any) => {
				return this.btnOrder.indexOf(a.type) - this.btnOrder.indexOf(b.type);
			});

		}

		/**
		 * set by default the color of the button
		 *
		 * @param type
		 */
		setColor(type: string) {
			let color = '';
			if (type === 'submit') {
				color = 'primary';
			} else {
				color = 'normal';
			}
			return color;
		}
	}
</script>
