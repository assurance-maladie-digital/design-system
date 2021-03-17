<template>
	<VSheet
		class="v-example w-100 mb-9"
		outlined
		rounded
	>
		<VLazy
			min-height="52"
			@mouseenter="importTemplate"
		>
			<div class="text-right pa-2">
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
		</VLazy>

		<VDivider />

		<div v-if="parsed">
			<VExpandTransition>
				<div v-show="expand">
					<VItemGroup
						v-model="selected"
						class="pa-2"
						mandatory
					>
						<template v-for="(section, i) in sections">
							<VItem
								:key="`item-${i}`"
								:value="section"
							>
								<template #default="{ active, toggle }">
									<VBtn
										:input-value="active"
										class="mr-2"
										text
										@click="toggle"
									>
										{{ section }}
									</VBtn>
								</template>
							</VItem>
						</template>
					</VItemGroup>

					<VDivider />

					<VWindow
						v-model="selected"
						class="grey lighten-5"
					>
						<template v-for="(section, i) in sections">
							<VWindowItem
								:key="`window-${i}`"
								:value="section"
							>
								<DocMarkup
									:code="parsed[section]"
									:rounded="false"
									no-margin
								/>
							</VWindowItem>
						</template>
					</VWindow>

					<VDivider />
				</div>
			</VExpandTransition>
		</div>

		<VThemeProvider :dark="dark">
			<VSheet
				class="pa-4"
				rounded="b"
			>
				<VueFile :file="file" />
			</VSheet>
		</VThemeProvider>
	</VSheet>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiInvertColors, mdiCodeTags } from '@mdi/js';

	import DocTooltipBtn from '../page/DocTooltipBtn.vue';

	interface Parsed {
		[key: string]: string;
		template: string;
		style: string;
		script: string;
		codepenResources: string;
		codepenAdditional: string;
	}

	const Props = Vue.extend({
		props: {
			file: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			DocTooltipBtn
		}
	})
	export default class DocExample extends MixinsDeclaration {
		invertColorsIcon = mdiInvertColors;
		sourceIcon = mdiCodeTags;

		dark = false;
		expand = false;
		hasError = false;
		selected = 'template';
		parsed: Parsed | null = null;

		get sections(): string[] {
			return ['template', 'script', 'style'].filter((section) => this.parsed && this.parsed[section]);
		}

		importTemplate(): Promise<void> {
			return import(
				/* webpackChunkName: "examples-source" */
				/* webpackMode: "lazy-once" */
				`!raw-loader!../../content/examples/${this.file}.vue`
			).then(comp => this.boot(comp.default));
		}

		boot(res: string): void {
			const template = this.parseTemplate('template', res);
			const style = this.parseTemplate('style', res);
			const script = this.parseTemplate('script', res);
			const codepenResources = this.parseTemplate('codepen-resources', res);
			const codepenAdditional = this.parseTemplate('codepen-additional', res);

			this.parsed = {
				template,
				style,
				script,
				codepenResources,
				codepenAdditional
			};
		}

		parseTemplate(target: string, template: string): string {
			const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
			const regex = new RegExp(string, 'g');
			const parsed = regex.exec(template) || [];

			return parsed[1] || '';
		}
	}
</script>

<style lang="scss">
	.v-example {
		code[class*="language-"],
		pre[class*="language-"] {
			text-shadow: none;
		}

		pre.language-markup::after {
			content: 'vue' !important;
		}
	}
</style>
