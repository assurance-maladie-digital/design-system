<template>
	<VLazy class="doc-usage w-100 mb-8">
		<VSheet
			rounded
			outlined
			class="overflow-hidden"
		>
			<VRow no-gutters>
				<VCol
					cols="12"
					md="8"
					class="d-flex flex-column"
				>
					<VResponsive
						class="d-flex"
						height="44px"
					>
						<VSlideGroup
							v-if="tabs.length"
							active-class="primary--text"
							multiple
							show-arrows="always"
						>
							<VSlideItem
								v-for="prop in tabs"
								:key="prop"
								v-slot="{ active, toggle }"
							>
								<VBtn
									:input-value="active"
									depressed
									height="44px"
									text
									tile
									@click="toggleOption(toggle, prop, active)"
								>
									{{ prop }}
								</VBtn>
							</VSlideItem>
						</VSlideGroup>
					</VResponsive>

					<VDivider />

					<VThemeProvider :dark="dark">
						<VSheet
							max-height="400px"
							min-height="100px"
							class="overflow-y-auto h-100 d-flex justify-center pa-4"
						>
							<VueFile
								v-if="file"
								:file="file"
								v-bind="usageProps"
								@loaded="setContents"
								@error="hasError = true"
							/>
						</VSheet>
					</VThemeProvider>
				</VCol>

				<VCol
					cols="12"
					md="4"
					class="d-flex flex-column"
				>
					<VDivider class="hidden-md-and-up" />

					<VSheet
						height="44px"
						class="d-flex align-center"
					>
						<VDivider
							vertical
							class="hidden-sm-and-down"
						/>

						<p class="text-h6 font-weight-medium px-3 mb-0">
							Options
						</p>

						<div class="ms-auto pa-1">
							<DocTooltipBtn
								:disabled="hasError"
								label="Inverser les couleurs"
								@click="dark = !dark"
							>
								<template #icon>
									<VIcon>
										{{ invertColorsIcon }}
									</VIcon>
								</template>
							</DocTooltipBtn>

							<DocTooltipBtn
								:disabled="hasError"
								label="Voir la source"
								@click="expand = !expand"
							>
								<template #icon>
									<VIcon>
										{{ sourceIcon }}
									</VIcon>
								</template>
							</DocTooltipBtn>
						</div>
					</VSheet>

					<VDivider />

					<div class="doc-usage-options d-flex flex-grow-1">
						<VDivider
							vertical
							class="hidden-sm-and-down"
						/>

						<VResponsive
							height="100%"
							max-height="400px"
							class="overflow-y-auto pa-3"
						>
							<VCheckbox
								v-for="(prop) in booleans"
								:key="prop"
								:value="usageProps[prop]"
								:label="toKebabCase(prop)"
								hide-details
								dense
								@change="setProp(prop, $event)"
							/>

							<VSlider
								v-for="(item, prop) in sliders"
								:key="prop"
								:value="usageProps[prop]"
								:label="toKebabCase(prop)"
								:max="item.max"
								:min="item.min"
								:step="item.step || 1"
								hide-details
								class="my-3"
								@input="setProp(prop, $event)"
							/>

							<VSelect
								v-for="(items, prop) in selects"
								:key="prop"
								:value="usageProps[prop]"
								:items="items"
								:label="toKebabCase(prop)"
								dense
								filled
								hide-details
								background-color="am-blue lighten-3"
								class="my-3"
								@input="setProp(prop, $event)"
							/>

							<VCombobox
								v-for="(items, prop) in combobox"
								:key="prop"
								:value="usageProps[prop]"
								:items="items"
								:label="toKebabCase(prop)"
								multiple
								dense
								filled
								hide-details
								background-color="am-blue lighten-3"
								class="my-3"
								@input="setProp(prop, $event)"
							/>

							<VTextField
								v-for="prop in textFields"
								:key="prop"
								:value="usageProps[prop]"
								:label="toKebabCase(prop)"
								dense
								filled
								hide-details
								background-color="am-blue lighten-3"
								class="my-3"
								@input="setProp(prop, $event)"
							/>

							<VBtnToggle
								v-for="(items, prop) in btnToggles"
								:key="prop"
								class="my-3"
							>
								<VBtn
									v-for="(item, index) in items"
									:key="`${prop}${index}`"
									text
									@click="setProp(items, item)"
								>
									{{ item }}
								</VBtn>
							</VBtnToggle>

							<VRadioGroup
								v-for="(items, prop) in radioGroups"
								:key="prop"
								:label="toKebabCase(prop)"
								:value="getRadioGroupValue(items)"
							>
								<VRadio
									v-for="item in items"
									:key="item"
									:label="item"
									:value="item"
									@click="toggleRadioProp(items, item)"
								/>
							</VRadioGroup>
						</VResponsive>
					</div>
				</VCol>

				<VCol cols="12">
					<VExpandTransition>
						<div
							v-show="expand"
							class="doc-code"
						>
							<DocMarkup
								:code="usageCode"
								language="vue"
								no-margin
								tile
							/>
						</div>
					</VExpandTransition>
				</VCol>
			</VRow>
		</VSheet>
	</VLazy>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiInvertColors, mdiCodeTags } from '@mdi/js';

	import { VueClass } from 'vue-class-component/lib/declarations';
	import { IndexedObject } from '@cnamts/vue-dot/src/types';
	import { UsageProps } from '../../types/usage';

	import DocTooltipBtn from '../page/DocTooltipBtn.vue';

	import { getUsageCode } from '../../functions/getUsageCode';
	import { toKebabCase } from '../../functions/toKebabCase';
	import { toCamelCase } from '../../functions/toCamelCase';

	interface ImportedComponent extends VueClass<Vue> {
		options: {
			data: (this: Vue) => object;
		};
	}

	interface Theme {
		isDark: true;
	}

	interface Slider {
		min: number;
		max: number;
		step?: number;
	}

	type Sliders = IndexedObject<Slider>;

	type Combobox = IndexedObject<string[]>;
	type Selects = IndexedObject<string[]>;
	type RadioGroups = IndexedObject<string[]>;
	type BtnToggles = IndexedObject<string[]>;

	interface Options {
		booleans?: string[];
		btnToggles?: BtnToggles;
		radioGroups?: RadioGroups;
		selects?: Selects;
		combobox?: Combobox;
		sliders?: Sliders;
		textFields?: string[];
		slotContent?: string;
	}

	const Props = Vue.extend({
		props: {
			name: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			DocTooltipBtn
		},
		inject: ['theme']
	})
	export default class DocUsage extends MixinsDeclaration {
		theme!: Theme;

		toKebabCase = toKebabCase;

		invertColorsIcon = mdiInvertColors;
		sourceIcon = mdiCodeTags;

		booleans: string[] | null = null;
		btnToggles: BtnToggles | null = null;
		radioGroups: RadioGroups | null = null;
		selects: Selects | null = null;
		combobox: Combobox | null = null;
		sliders: Sliders | null = null;
		textFields: string[] | null = null;
		slotContent: string | null = null;

		options: Options = {};
		usageProps: UsageProps = {};
		displayProps: UsageProps = {};

		dark = false;
		expand = false;
		hasError = false;

		tab = null;
		tabs: string[] = [];

		get file(): string {
			return `${this.name}/usage`;
		}

		get usageCode(): string {
			return getUsageCode(this.name, this.displayProps, this.slotContent);
		}

		setProp(prop: string, value: number | string | boolean): void {
			this.$set(this.usageProps, prop, value);
			this.$set(this.displayProps, prop, value);
		}

		setContents(component: ImportedComponent): void {
			if (!component) {
				return;
			}

			Object.assign(this.$data, component.options.data.call(this));

			const defaults = this.$data.defaultProps as UsageProps;
			const propsHiddenByDefault = (this.$data.propsHiddenByDefault || []) as string[];

			this.validateProps(propsHiddenByDefault, 'propsHiddenByDefault');

			if (defaults) {
				this.validateProps(Object.keys(defaults), 'defaults');

				const filteredDefaults: UsageProps = {};

				Object
					.keys(defaults)
					.filter((key) => !propsHiddenByDefault.includes(key))
					// Convert array back to object
					.map((key) => filteredDefaults[key] = defaults[key]);

				this.usageProps = Object.assign({}, defaults);
				this.displayProps = Object.assign({}, filteredDefaults);
			}

			if (!this.options) {
				return;
			}

			for (const [key, value] of Object.entries(this.options)) {
				(this as unknown as IndexedObject<unknown>)[key] = value;

				if (typeof value === 'object') {
					this.validateProps(Object.keys(value), 'options');
				}

				if (Array.isArray(value)) {
					this.validateProps(value, 'options');
				}
			}
		}

		validateProps(props: string[], location: string): void {
			props.forEach((propName) => {
				if (propName.match(/[^a-zA-Z0-9]+(.)/g)) {
					// eslint-disable-next-line no-console
					console.error(`Wrong format for the "${propName}" property in "${location}" object. Expected "${toCamelCase(propName)}".`);
				}
			});
		}

		toggleRadioProp(props: string[], toggled: string): void {
			for (const prop of props) {
				this.setProp(prop, false);
			}

			this.setProp(toggled, true);
		}

		getRadioGroupValue(items: string[]): string {
			let value = '';

			for (const item of items) {
				const itemValue = this.usageProps[item];

				if (itemValue) {
					value = item;
				}
			}

			return value;
		}

		toggleOption(toggle: () => void, prop: string, active: boolean): void {
			toggle();

			this.setProp(prop, !active);
		}
	}
</script>

<style lang="scss" scoped>
	.doc-usage-options :deep(.v-responsive__content) {
		> :first-child {
			margin-top: 0 !important;
			padding-top: 0 !important;
		}

		> :last-child {
			margin-bottom: 0 !important;
		}
	}

	.doc-usage-options :deep() {
		.v-text-field .v-input__slot::before {
			border-color: rgba(0, 0, 0, .2);
		}
	}

	.doc-code {
		border-top: thin solid rgba(0, 0, 0, .12);
	}
</style>
