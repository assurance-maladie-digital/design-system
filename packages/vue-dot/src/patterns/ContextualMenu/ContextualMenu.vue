<template>
	<ul class="vd-contextual-menu">
		<li
			v-for="{ text, hash, level } in items"
			:key="hash"
		>
			<a
				:href="hash"
				:class="{
					'text-primary active': $route.hash === hash,
					'text--secondary': $route.hash !== hash,
					'ps-4': level === 2,
					'ps-6': level === 3,
					'ps-9': level === 4,
					'ps-12': level === 5,
					'ps-14': level === 6
				}"
				class="d-flex align-center text-decoration-none text-body-1 pl-4"
				@click.prevent.stop="setHash(hash)"
				v-text="text"
			/>
		</li>
	</ul>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { MenuItem } from './types';

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: null
			},
			items: {
				type: Array as PropType<MenuItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component<ContextualMenu>({
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler(value: string | null) {
					if (value) {
						this.setHash(value);
					}
				},
				immediate: true
			}
		}
	})
	export default class ContextualMenu extends MixinsDeclaration {
		emitChangeEvent({ hash }: MenuItem): void {
			this.$emit('change', hash);
		}

		setHash(hash: string): void {
			if (this.$route.hash === hash) {
				return;
			}

			this.$router.replace({
				path: this.$route.path,
				hash
			});
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		list-style: none;
	}

	a {
		height: 40px;
		position: relative;
		transition: none;

		&::before {
			content: "";
			width: 2px;
			background: rgba(0, 0, 0, 0.6);
			position: absolute;
			left: 0;
			height: 100%;
		}

		&::after {
			content: "";
			width: 4px;
			border-radius: 0 2px 2px 0;
			background: currentColor;
			position: absolute;
			left: 0;
			height: 100%;
			opacity: 0;
		}

		&.active::after {
			opacity: 1;
		}
	}
</style>
