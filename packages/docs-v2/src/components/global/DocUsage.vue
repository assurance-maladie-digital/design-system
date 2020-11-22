<template>
	<VLazy min-height="198">
		<VSheet
			rounded
			outlined
			class="overflow-hidden mb-12"
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
									@click="toggle(); usageProps[prop] = !active;"
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
							<component
								v-if="component"
								:is="component"
								v-bind="{ ...usageProps }"
							/>
							<!-- <VueFile
								v-if="file"
								ref="usage"
								:file="file"
								v-bind="{ ...usageProps }"
								@loaded="setContents"
								@error="hasError = true"
							/> -->
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
								v-model="usageProps[prop]"
								:class="i === 0 && 'mt-0'"
								:label="startCase(prop)"
								dense
								hide-details
								inset
							/>

							<VSlider
								v-for="(item, prop) in sliders"
								:key="prop"
								v-model="usageProps[prop]"
								:label="item.label"
								:max="item.max"
								:min="item.min"
								:step="item.step || 1"
								class="my-2"
								hide-details
							/>

							<VSelect
								v-for="(items, prop) in selects"
								:key="prop"
								v-model="usageProps[prop]"
								:items="items"
								:label="startCase(prop)"
								class="my-2"
								clearable
								dense
								filled
								hide-details
							/>

							<VTextField
								v-for="(prop) in textFields"
								:key="prop"
								v-model="usageProps[prop]"
								:label="startCase(prop)"
								class="my-2"
								dense
								filled
								hide-details
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
									@click="() => usageProps[prop] = item"
								>
									{{ item }}
								</VBtn>
							</VBtnToggle>

							<VRadioGroup
								v-for="(items, prop) in radioGroups"
								:key="prop"
								:label="startCase(prop)"
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
					<VDivider />
				</VCol>

				<VCol cols="12">
					<DocMarkup
						:code="formatAttributes"
						rounded="b"
					/>
				</VCol>
			</VRow>
		</VSheet>
	</VLazy>
</template>

<script lang="ts">
	import Vue, { ComponentOptions } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiInvertColors } from '@mdi/js';

	import { VueClass } from 'vue-class-component/lib/declarations';

	interface ImportedComponent extends VueClass<Vue> {
		options: {
			data: (this: Vue) => object;
		};
	}

	interface Theme {
		isDark: true;
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
		inject: ['theme']
	})
	export default class DocUsage extends MixinsDeclaration {
		theme!: Theme;

		invertColorsIcon = mdiInvertColors;

		component = null;

		booleans = null;
		btnToggles = null;
		radioGroups = null;
		selects = null;
		sliders = null;
		textFields = null;

		dark = false;
		file: string | null = null;
		hasError = false;
		options = {};

		tab = null;
		tabs = [];
		usageProps: any = {};

		get color(): string | undefined {
			return (this.dark || this.theme.isDark) ? undefined : 'grey lighten-5';
		}

		get formatAttributes(): string {
			let attributeArray = [];

			for (const [key, value] of Object.entries(this.usageProps)) {
				if (Boolean(value) === false) {
					continue;
				}

				let trimmed = key.trim();

				if (value !== true) {
					trimmed += `="${value}"`;
				}

				attributeArray.push(trimmed);
			}

			attributeArray = attributeArray.sort();

			// Display attributes on single when none or one attribute
			const singleLine = attributeArray.length > 1;
			const space = ' ';

			const indent = singleLine ? '\r\t' : space;
			const tail = `${singleLine ? '\r' : space}/>`;
			const attributes = attributeArray.join('\r\t');

			return `<${this.toPascalCase(this.name)}${indent}${attributes}${tail}`;
		}

		mounted() {
			this.file = `../../content/examples/${this.name}/usage`;
			this.importComponent();
		}

		toPascalCase(str: string): string {
			const words = str.match(/[a-z]+/gi);

			if (!words) {
				return '';
			}

			const pascalCaseStr = words.map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join('');

			return pascalCaseStr;
		}

		importComponent(): Promise<void> {
			return import(
				/* webpackChunkName: "examples" */
				/* webpackMode: "lazy-once" */
				`../../content/examples/${this.name}/usage.vue`
			)
				.then(comp => {
					this.component = comp.default;
					this.setContents(comp.default);
				});
		}

		startCase(str: string): string {
			return str;
		}

		setContents(component: ImportedComponent): void {
			if (!component) {
				return;
			}

			Object.assign(this.$data, component.options.data.call(this));

			this.usageProps = Object.assign({}, this.$data.defaults);

			if (this.$data.options) {
				for (const [key, value] of Object.entries(this.$data.options)) {
					(this as any)[key] = value;
				}
			}

			if (this.$data.tabs) {
				this.tabs = this.$data.tabs;
			}
		}

		toggleRadioProp(props: string[], toggled: string): void {
			for (const prop of props) {
				this.usageProps[prop] = false;
			}

			this.usageProps[toggled] = true;
		}
	}
</script>
