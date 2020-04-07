<template>
	<VCard
		:loading="loading"
		:min-height="loading ? 200 : undefined"
		class="mb-12"
		outlined
	>
		<VToolbar
			:color="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-3'"
			dense
			flat
		>
			<VChip
				v-if="newIn"
				color="warning"
				small
			>
				<VIcon left>
					mdi-star
				</VIcon>

				<span>New in <strong>{{ newIn }}</strong></span>
			</VChip>

			<VSpacer />

			<VTooltip
				v-if="!$vuetify.theme.dark"
				bottom
			>
				<template #activator="{ on }">
					<VBtn
						aria-label="Invert example colors"
						icon
						@click="dark = !dark"
						v-on="on"
					>
						<VIcon>mdi-invert-colors</VIcon>
					</VBtn>
				</template>

				Invert example colors
			</VTooltip>

			<VTooltip bottom>
				<template #activator="{ on }">
					<VBtn
						aria-label="Edit in Codepen"
						icon
						@click="sendToCodepen"
						v-on="on"
					>
						<VIcon>mdi-codepen</VIcon>
					</VBtn>
				</template>

				Edit in Codepen
			</VTooltip>

			<VTooltip bottom>
				<template #activator="{ on }">
					<VBtn
						aria-label="View on Github"
						:href="`https://github.com/vuetifyjs/vuetify/tree/${branch}/packages/docs/src/examples/${file}.vue`"
						icon
						target="_blank"
						v-on="on"
					>
						<VIcon>mdi-github-circle</VIcon>
					</VBtn>
				</template>

				View on Github
			</VTooltip>

			<VTooltip bottom>
				<template #activator="{ on }">
					<VBtn
						aria-label="View source"
						icon
						@click="expand = !expand"
						v-on="on"
					>
						<VIcon>mdi-code-tags</VIcon>
					</VBtn>
				</template>

				View source
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
							:key="`item-${i}`"
							:value="section"
						>
							<VBtn
								slot-scope="{ active, toggle }"
								:color="!active ? 'transparent' : ''"
								:input-value="active"
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
							<div :class="($vuetify.breakpoint.smAndUp) ? 'v-example__container' : ''">
								<Markup
									:filename="false"
									:value="file"
									class="mb-0"
								>
									{{ parsed[section] }}
								</Markup>
							</div>
						</VWindowItem>
					</template>
				</VWindow>
			</VCard>
		</VExpandTransition>

		<!-- <doc-codepen
			v-if="parsed"
			ref="codepen"
			:pen="parsed"
		/> -->

		<VFadeTransition>
			<v-sheet
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
			</v-sheet>
		</VFadeTransition>
	</VCard>
</template>

<script>
	// Utilities
	// import {
	// 	get,
	// } from 'vuex-pathify'

	// import { getBranch } from '@/util/helpers'
	// import kebabCase from 'lodash/kebabCase'

	export default {
		props: {
			eager: Boolean,
			value: {
				type: [Object, String],
				default: undefined,
			},
		},

		data: vm => ({
			branch: '',
			component: undefined,
			dark: false,
			expand: false,
			loading: false,
			observer: null,
			parsed: undefined,
			selected: 'template',
		}),

		computed: {
			// namespace: get('documentation/namespace'),
			// page: get('documentation/page'),
			internalValue () {
				if (this.value === Object(this.value)) return this.value

				return { file: this.value }
			},
			file () {
				return `${''}${this.internalValue.file}`
			},
			newIn () {
				return this.internalValue.newIn
			},
			sections () {
				return ['template', 'style', 'script'].filter(section => this.parsed[section])
			},
		},

		created () {
			this.expand = Boolean(this.internalValue.show)
		},

		beforeDestroy () {
			this.unobserve()
		},

		mounted () {
			// this.branch = getBranch()

			this.importComponent()
			if (this.eager) return this.getFiles()

			this.observer = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) this.importTemplate()
				})
			}, { threshold: 0 })

			this.observer.observe(this.$el)
		},

		methods: {
			boot (res) {
				const template = this.parseTemplate('template', res)
				const style = this.parseTemplate('style', res)
				const script = this.parseTemplate('script', res)
				const codepenResources = this.parseTemplate('codepen-resources', res)
				const codepenAdditional = this.parseTemplate('codepen-additional', res)

				this.parsed = {
					template,
					style,
					script,
					codepenResources,
					codepenAdditional,
				}
			},
			async getFiles () {
				this.loading = true
				await this.importTemplate()
				this.loading = false
			},
			getLang (tab) {
				if (tab === 'script') return 'ts'
				if (tab === 'style') return 'scss'
				return 'vue'
			},
			importComponent () {
				return import(
					/* webpackChunkName: "examples" */
					/* webpackMode: "lazy-once" */
					`../../${this.file}.vue`
				)
					.then(comp => (this.component = comp.default))
			},
			importTemplate () {
				return import(
					/* webpackChunkName: "examples-source" */
					/* webpackMode: "lazy-once" */
					`!raw-loader!../../${this.file}.vue`
				)
					.then(comp => this.boot(comp.default))
					.then(this.unobserve)
			},
			// kebabCase,
			parseTemplate (target, template) {
				const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`
				const regex = new RegExp(string, 'g')
				const parsed = regex.exec(template) || []
				return parsed[1] || ''
			},
			sendToCodepen () {
				this.$refs.codepen.submit()
			},
			togglePanel () {
				const panel = this.$refs.panel.items[0]._uid

				this.$refs.panel.panelClick(panel)
			},
			unobserve () {
				this.observer && this.observer.unobserve(this.$el)
			},
		},
	}
</script>
