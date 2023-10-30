<script lang="ts">
	import { defineComponent } from 'vue'
	import type { PropType } from 'vue'

	import { locales } from './locales'
	import { CookiesPageItems, Preferences } from './types'

	import CookiesInformation from './CookiesInformation'
	import PageContainer from '@/elements/PageContainer'

	import { VForm } from '@/types'
	import { TypeEnum } from './CookiesInformation/TypeEnum'

	export default defineComponent({
		components: {
			CookiesInformation,
			PageContainer,
		},
		emits: ['submit'],
		props: {
			items: {
				type: Object as PropType<CookiesPageItems>,
				required: true,
			},
		},
		data() {
			return {
				locales,
				preferences: {
					[TypeEnum.FUNCTIONAL]: null,
					[TypeEnum.ANALYTICS]: null,
				} as Preferences,
			}
		},
		computed: {
			filteredPreferences(): Partial<Preferences> {
				const filtered: Partial<Preferences> = {}

				Object.entries(this.preferences).forEach(([key, value]) => {
					if (this.items[key as TypeEnum] !== undefined) {
						filtered[key] = value
					}
				})

				return filtered
			}
		},
		methods: {
			setGlobalPreferences(value: boolean): void {
				this.preferences[TypeEnum.FUNCTIONAL] = value
				this.preferences[TypeEnum.ANALYTICS] = value
			},

			async submitForm(): Promise<void> {
				const { valid } = await (this.$refs.form as VForm).validate()

				if (!valid) {
					return
				}

				this.$emit('submit', this.filteredPreferences)
			}
		}
	})
</script>

<template>
	<PageContainer
		v-if="items"
		size="m"
		class="vd-cookies-page"
	>
		<VCard class="pa-4 pa-md-8">
			<VForm ref="form">
				<h2 class="text-h5 font-weight-bold mb-6">
					{{ locales.title }}
				</h2>

				<p class="mb-4">
					{{ locales.description }}
				</p>

				<p class="mb-4">
					{{ locales.cookieDefinition }}
				</p>

				<div class="d-flex flex-wrap justify-end mx-n2 mt-n2 mb-6">
					<VBtn
						data-test-id="reject-all"
						color="primary"
						variant="outlined"
						class="ma-2"
						@click="setGlobalPreferences(false)"
					>
						{{ locales.rejectAll }}
					</VBtn>

					<VBtn
						data-test-id="accept-all"
						color="primary"
						variant="outlined"
						class="ma-2"
						@click="setGlobalPreferences(true)"
					>
						{{ locales.acceptAll }}
					</VBtn>
				</div>

				<CookiesInformation
					v-for="(cookies, key) in items"
					:key="key"
					v-model="preferences[key]"
					:type="key"
					:table-items="cookies"
					class="mb-6"
				/>

				<div class="d-flex mt-16">
					<VSpacer />

					<VBtn
						data-test-id="submit"
						color="primary"
						@click="submitForm"
					>
						{{ locales.saveBtn }}
					</VBtn>
				</div>
			</VForm>
		</VCard>
	</PageContainer>
</template>
