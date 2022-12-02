<template>
	<VSheet
		outlined
		rounded
		class="v-example w-100 mb-9"
	>
		<VLazy
			min-height="52px"
			@mouseenter="importTemplate"
		>
			<div class="text-right pa-2">
				<DocTooltipBtn
					:disabled="error"
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
					:disabled="error"
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
						mandatory
						class="pa-2"
					>
						<template v-for="(section, index) in sections">
							<VItem
								:key="`item-${index}`"
								:value="section"
							>
								<template #default="{ active, toggle }">
									<VBtn
										:input-value="active"
										text
										class="mr-2"
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
						touchless
						class="grey-lighten-97"
					>
						<template v-for="(section, index) in sections">
							<VWindowItem
								:key="`window-${index}`"
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
				rounded="b"
				class="pa-4"
			>
				<VueFile
					:file="file"
					@error="error = true"
				/>
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
		error = false;
		selected = 'template';
		parsed: Parsed | null = null;

		get sections(): string[] {
			const componentSections = [
				'template',
				'script',
				'style'
			];

			return componentSections.filter((section) => this.parsed && this.parsed[section]);
		}

		async importTemplate(): Promise<void> {
			try {
				const component = await import(
					/* webpackChunkName: "examples-source" */
					/* webpackMode: "lazy-once" */
					`!raw-loader!../../data/examples/${this.file}.vue`
				);

				this.boot(component.default);
			} catch(error) {
				this.error = true;
			}
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
