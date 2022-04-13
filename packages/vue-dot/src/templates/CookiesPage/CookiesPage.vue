<template>
	<PageContainer
		size="m"
		class="vd-cookies-page"
	>
		<VCard class="pa-4 pa-md-8">
			<VForm ref="form">
				<h2 class="text-h5 font-weight-bold mb-6">
					{{ locales.title }}
				</h2>

				<p>
					{{ locales.description }}
				</p>

				<p>
					{{ locales.cookieDefinition }}
				</p>

				<div class="d-flex flex-wrap justify-end mx-n2 mt-n2 mb-6">
					<VBtn
						color="primary"
						outlined
						class="text-none ma-2"
						@click="setGlobalPreferences(false)"
					>
						{{ locales.rejectAll }}
					</VBtn>

					<VBtn
						color="primary"
						outlined
						class="text-none ma-2"
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
					:cookies="cookies"
					class="mb-6"
				/>

				<div class="d-flex mt-16">
					<VSpacer />

					<VBtn
						color="primary"
						class="text-none"
						@click="submit"
					>
						{{ locales.saveBtn }}
					</VBtn>
				</div>
			</VForm>
		</VCard>
	</PageContainer>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';
	import { CookiesPageItems, Preferences } from './types';

	import CookiesInformation from './CookiesInformation';

	import { Refs, VForm } from '../../types';
	import { TypeEnum } from './CookiesInformation/TypeEnum';

	const Props = Vue.extend({
		props: {
			items: {
				type: Object as PropType<CookiesPageItems>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			CookiesInformation
		}
	})
	export default class CookiesPage extends MixinsDeclaration {
		$refs!: Refs<{
			form: VForm;
		}>;

		locales = locales;

		preferences: Preferences = {
			[TypeEnum.FUNCTIONAL]: null,
			[TypeEnum.ANALYTICS]: null
		};

		get filteredPreferences(): Partial<Preferences> {
			const filtered: Partial<Preferences> = {};

			Object.entries(this.preferences).forEach(([key, value]) => {
				if (this.items[key as TypeEnum] !== undefined) {
					filtered[key] = value;
				}
			});

			return filtered;
		}

		setGlobalPreferences(value: boolean): void {
			this.preferences[TypeEnum.FUNCTIONAL] = value;
			this.preferences[TypeEnum.ANALYTICS] = value;
		}

		async submit(): Promise<void> {
			await this.$nextTick();

			if (!this.$refs.form.validate()) {
				return;
			}

			this.$emit('submit', this.filteredPreferences);
		}
	}
</script>
