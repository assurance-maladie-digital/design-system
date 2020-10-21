<template>
	<VCard
		:loading="loading"
		:min-height="loading ? 200 : null"
		class="doc-example mb-12"
		outlined
	>
		<VToolbar
			:color="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-3'"
			dense
			flat
		>
			<VChip
				v-if="newIn"
				color="info"
				small
			>
				<VIcon
					small
					left
				>
					{{ starIcon }}
				</VIcon>

				<span>
					Nouveau en <strong>{{ newIn }}</strong>
				</span>
			</VChip>

			<VSpacer />

			<VTooltip
				v-if="!$vuetify.theme.dark"
				bottom
			>
				<template #activator="{ on }">
					<VBtn
						icon
						aria-label="Inverser les couleurs"
						@click="dark = !dark"
						v-on="on"
					>
						<VIcon>
							{{ invertColorsIcon }}
						</VIcon>
					</VBtn>
				</template>

				Inverser les couleurs
			</VTooltip>

			<VTooltip
				v-if="!hideCodeBlock"
				bottom
			>
				<template #activator="{ on }">
					<VBtn
						aria-label="Voir la source"
						icon
						@click="expand = !expand"
						v-on="on"
					>
						<VIcon>
							{{ sourceIcon }}
						</VIcon>
					</VBtn>
				</template>

				Voir la source
			</VTooltip>
		</VToolbar>

		<VExpandTransition v-if="parsed">
			<VCard
				v-show="expand"
				color="#2d2d2d"
				dark
				flat
				tile
			>
				<VItemGroup
					v-model="selected"
					class="pa-2"
					mandatory
				>
					<template v-for="(section, i) in sections">
						<VItem
							#default="{ active, toggle }"
							:key="`item-${i}`"
							:value="section"
						>
							<VBtn
								:input-value="active"
								:color="active ? '' : 'transparent'"
								active-class="grey darken-2 white--text"
								class="mr-2"
								depressed
								rounded
								@click="toggle"
							>
								{{ section }}
							</VBtn>
						</VItem>
					</template>
				</VItemGroup>

				<VDivider />

				<VWindow v-model="selected">
					<template v-for="(section, i) in sections">
						<VWindowItem
							:key="`window-${i}`"
							:value="section"
							eager
						>
							<div :class="$vuetify.breakpoint.smAndUp ? 'v-example__container' : ''">
								<!--
									<DocMarkup> will render a <pre> tag,
									we need to avoid white spaces here
								-->
								<DocMarkup
									:code="parsed[section]"
									class="mb-0"
									tile
								/>
							</div>
						</VWindowItem>
					</template>
				</VWindow>
			</VCard>
		</VExpandTransition>

		<VFadeTransition>
			<VSheet
				v-if="component"
				:dark="dark"
				tile
				flat
			>
				<VCardText>
					<div data-app="true">
						<component :is="component" />
					</div>
				</VCardText>
			</VSheet>
		</VFadeTransition>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiStar, mdiInvertColors, mdiCodeTags } from '@mdi/js';

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
			/** Load example when mounted */
			eager: {
				type: Boolean,
				default: false
			},
			/** Source file of the example */
			file: {
				type: String,
				default: undefined
			},
			/** Display new in version indicator */
			newIn: {
				type: String,
				default: undefined
			},
			/** Expand code block */
			show: {
				type: Boolean,
				default: false
			},
			hideCodeBlock: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocExample extends MixinsDeclaration {
		starIcon = mdiStar;
		invertColorsIcon = mdiInvertColors;
		sourceIcon = mdiCodeTags;

		branch = '';
		component = null;
		dark = false;
		expand = false;
		loading = false;

		observer: IntersectionObserver | null = null;
		parsed: Parsed | null = null;
		selected = 'template';

		get sections(): string[] {
			return ['template', 'script', 'style'].filter((section) => this.parsed && this.parsed[section]);
		}

		created() {
			this.expand = this.show;
		}

		beforeDestroy() {
			this.unobserve();
		}

		mounted() {
			this.importComponent();

			if (this.hideCodeBlock) {
				return;
			}

			if (this.eager) {
				return this.getFiles();
			}

			const options: IntersectionObserverInit = {
				threshold: 0
			};

			this.observer = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						this.importTemplate();
					}
				})
			}, options);

			this.observer.observe(this.$el);
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

		async getFiles() {
			this.loading = true;
			await this.importTemplate();
			this.loading = false;
		}

		getLang(tab: string): string {
			if (tab === 'script') {
				return 'ts';
			}

			if (tab === 'style') {
				return 'scss';
			}

			return 'vue';
		}

		importComponent() {
			return import(
				/* webpackChunkName: "examples" */
				/* webpackMode: "lazy-once" */
				`../../${this.file}.vue`
			)
				.then(comp => (this.component = comp.default));
		}

		importTemplate() {
			return import(
				/* webpackChunkName: "examples-source" */
				/* webpackMode: "lazy-once" */
				`!raw-loader!../../${this.file}.vue`
			)
				.then(comp => this.boot(comp.default))
				.then(this.unobserve);
		}

		parseTemplate(target: string, template: string): string {
			const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
			const regex = new RegExp(string, 'g');
			const parsed = regex.exec(template) || [];

			return parsed[1] || '';
		}

		unobserve(): void {
			if (this.observer) {
				this.observer.unobserve(this.$el);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.doc-example {
		width: 100%;

		.v-window {
			height: 100%;
			overflow-y: auto;
			max-height: calc(100vh - 275px);
		}
	}
</style>
