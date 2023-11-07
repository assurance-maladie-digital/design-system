<script lang="ts">
	import { defineComponent, PropType } from 'vue'

	import { MenuItem } from './types'

	export default defineComponent({
		emits: ['update:modelValue'],
		props: {
			modelValue: {
				type: String,
				default: undefined,
			},
			items: {
				type: Array as PropType<MenuItem[]>,
				default: () => [],
			},
		},
		watch: {
			modelValue: {
				handler(value: string | null) {
					if (value) {
						this.setHash(value)
					}
				},
				immediate: true,
			},
		},
		methods: {
			setHash(hash: string) {
				if (this.$route.hash === hash) {
					return
				}

				this.$router.replace({
					path: this.$route.path,
					hash,
				})

				this.$emit('update:modelValue', hash)
			},
		},
	})
</script>

<template>
	<ul
		v-if="items.length"
		class="vd-contextual-menu"
	>
		<li
			v-for="{ text, hash, level } in items"
			:key="hash"
		>
			<a
				:href="hash"
				:class="{
					'text-primary active': $route.hash === hash,
					'text-medium-emphasis': $route.hash !== hash,
					'ps-4': level === 2,
					'ps-6': level === 3,
					'ps-9': level === 4,
					'ps-12': level === 5,
					'ps-14': level === 6
				}"
				class="d-flex align-center text-decoration-none text-body-1 px-4 py-2"
				@click.prevent.stop="setHash(hash)"
				v-text="text"
			/>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
	ul {
		list-style: none;
	}

	a {
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
