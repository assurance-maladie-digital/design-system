<template>
	<VLazy
		min-height="198"
		class="w-100"
	>
		<VSheet
			rounded
			outlined
			class="overflow-hidden mt-8 mb-12"
		>
			<VRow no-gutters>
				<VCol
					cols="12"
					md="8"
					class="d-flex flex-column"
				>
					<VResponsive
						class="d-flex"
						height="44"
					>
						<VSlideGroup
							v-if="tabs.length"
							active-class="primary--text"
							multiple
							show-arrows="always"
						>
							<VSlideItem
								v-for="(prop) in tabs"
								:key="prop"
								v-slot="{ active, toggle }"
							>
								<VBtn
									:input-value="active"
									depressed
									height="44"
									text
									tile
									@click="toggle(); toggleOption(prop, active)"
								>
									{{ prop }}
								</VBtn>
							</VSlideItem>
						</VSlideGroup>
					</VResponsive>

					<VDivider />

					<VThemeProvider :dark="dark">
						<VSheet
							:color="color"
							class="overflow-y-auto h-100 d-flex align-center justify-center pa-4"
							max-height="400"
							min-height="100"
						>
							<VueFile
								v-if="file"
								:file="file"
								v-bind="{ ...usageProps }"
								@loaded="setContents"
								@error="hasError = true"
							/>
						</VSheet>
					</VThemeProvider>
				</VCol>

				<VCol
					cols="12"
					md="4"
				>
					<VDivider class="hidden-md-and-up" />

					<VSheet
						class="d-flex align-center"
						height="44px"
					>
						<VDivider
							vertical
							class="hidden-sm-and-down"
						/>

						<p class="px-3 mb-0 text-h6 font-weight-medium">
							Options
						</p>

						<div class="pa-1 ms-auto">
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

					<div class="d-flex">
						<VDivider
							vertical
							class="hidden-sm-and-down"
						/>

						<VResponsive
							class="overflow-y-auto pa-3"
							height="100%"
							max-height="400"
						>
							<VCheckbox
								v-for="(prop, i) in booleans"
								:key="prop"
								:value="usageProps[prop]"
								:class="i === 0 && 'mt-0'"
								:label="toKebabCase(prop)"
								hide-details
								dense
								inset
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
								class="my-2"
								hide-details
								@input="setProp(prop, $event)"
							/>

							<VSelect
								v-for="(items, prop) in selects"
								:key="prop"
								:value="usageProps[prop]"
								:items="items"
								:label="toKebabCase(prop)"
								class="my-2"
								clearable
								dense
								filled
								hide-details
								@input="setProp(prop, $event)"
							/>

							<VTextField
								v-for="(prop) in textFields"
								:key="prop"
								:value="usageProps[prop]"
								:label="toKebabCase(prop)"
								class="my-2"
								dense
								filled
								hide-details
								@input="setProp(prop, $event)"
							/>

							<VBtnToggle
								v-for="(items, prop) in btnToggles"
								:key="prop"
								class="my-2"
							>
								<VBtn
									v-for="(item, i) in items"
									:key="`${prop}${i}`"
									text
									@click="toggleBtnProp(items, item)"
								>
									{{ item }}
								</VBtn>
							</VBtnToggle>

							<VRadioGroup
								v-for="(items, prop) in radioGroups"
								:key="prop"
								:label="toKebabCase(prop)"
							>
								<VRadio
									v-for="item in items"
									:key="item"
									:label="item"
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
								:code="formatAttributes"
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

	interface ImportedComponent extends VueClass<Vue> {
		options: {
			data: (this: Vue) => object;
		};
	}

	interface Theme {
		isDark: true;
	}

	type Props = IndexedObject<
		boolean | string[] | IndexedObject<IndexedObject<number | string>>
	>;

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
		inject: ['theme']
	})
	export default class DocUsage extends MixinsDeclaration {
		theme!: Theme;

		invertColorsIcon = mdiInvertColors;
		sourceIcon = mdiCodeTags;

		booleans = null;
		btnToggles = null;
		radioGroups = null;
		selects = null;
		sliders = null;
		textFields = null;

		dark = false;
		expand = false;
		hasError = false;
		options = {};

		tab = null;
		tabs = [];
		usageProps: Props = {};
		displayProps: Props = {};

		get file(): string {
			return `${this.name}/usage`;
		}

		get color(): string | undefined {
			return (this.dark || this.theme.isDark) ? undefined : 'grey lighten-5';
		}

		get formatAttributes(): string {
			let attributeArray = [];

			for (const [key, value] of Object.entries(this.displayProps)) {
				if (Boolean(value) === false) {
					continue;
				}

				let trimmed = this.toKebabCase(key.trim());

				const isNumber = typeof value === 'number';
				const isObject = typeof value === 'object';

				const isDynamicValue = isNumber || isObject;

				if (isDynamicValue) {
					trimmed = `:${trimmed}`;
				}

				if (isObject) {
					trimmed += `="${key.trim()}"`;
				} else if (value !== true) {
					trimmed += `="${value}"`;
				}

				attributeArray.push(trimmed);
			}

			attributeArray = attributeArray.sort();

			// Display attributes on single when none or one attribute
			const singleLine = attributeArray.length > 1;
			const space = ' ';

			const indent = singleLine ? '\r\t' : attributeArray.length ? space : '';
			const tail = `${singleLine ? '\r' : space}/>`;
			const attributes = attributeArray.join('\r\t');

			return `<${this.toPascalCase(this.name)}${indent}${attributes}${tail}`;
		}

		toKebabCase(str: string): string {
			return str.replace(/\s+/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
		}

		toPascalCase(str: string): string {
			const words = str.match(/[a-z]+/gi);

			if (!words) {
				return '';
			}

			const pascalCaseStr = words.map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join('');

			return pascalCaseStr;
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

			const defaults = this.$data.defaultProps as Props;
			const propsHiddenByDefault = (this.$data.propsHiddenByDefault || []) as string[];

			const filteredDefaults = Object
				.keys(defaults)
				.filter((key) => !propsHiddenByDefault.includes(key))
				.reduce<Props>((res, key) => (res[key] = defaults[key], res), {});

			this.usageProps = Object.assign({}, defaults);
			this.displayProps = Object.assign({}, filteredDefaults);

			if (this.options) {
				for (const [key, value] of Object.entries(this.options)) {
					(this as unknown as IndexedObject<unknown>)[key] = value;
				}
			}
		}

		toggleRadioProp(props: string[], toggled: string): void {
			for (const prop of props) {
				this.setProp(prop, false);
			}

			this.setProp(toggled, true);
		}

		toggleBtnProp(prop: string, item: string): void {;
			this.$set(this.usageProps, prop, item);
		}

		toggleOption(prop: string, active: boolean): void {
			this.setProp(prop, !active);
		}
	}
</script>

<style lang="scss" scoped>
	.doc-code {
		border-top: thin solid rgba(0, 0, 0, 0.12);
	}
</style>
