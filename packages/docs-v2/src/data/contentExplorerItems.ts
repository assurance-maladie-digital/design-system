import { TreeviewItem } from '~/components/content-explorer/types';

export const contentExplorerItems: TreeviewItem[] = [
	{
		name: 'public',
		path: 'public/index',
		children: [
			{
				name: 'css',
				path: 'public/css/index',
				children: [
					{
						name: 'base.css',
						path: 'public/css/base.css',
						file: 'css'
					},
					{
						name: 'loader.css',
						path: 'public/css/loader.css',
						file: 'css'
					}
				]
			},
			{
				name: 'js',
				path: 'public/js/index',
				children: [
					{
						name: 'lib',
						path: 'public/js/lib/index',
						children: [
							{
								name: 'matomo.js',
								path: 'public/js/lib/matomo.js',
								file: 'js'
							}
						]
					},
					{
						name: 'config.js',
						path: 'public/js/config.js',
						file: 'js'
					},
					{
						name: 'config.js.dist',
						path: 'public/js/config.js.dist',
						file: 'js'
					},
					{
						name: 'config.js.env',
						path: 'public/js/config.js.env',
						file: 'js'
					}
				]
			},
			{
				name: 'android-chrome-192x192.png',
				file: 'png'
			},
			{
				name: 'android-chrome-512x512.png',
				file: 'png'
			},
			{
				name: 'apple-touch-icon.png',
				file: 'png'
			},
			{
				name: 'favicon-16x16.png',
				file: 'png'
			},
			{
				name: 'favicon-32x32.png',
				file: 'png'
			},
			{
				name: 'favicon.ico',
				file: 'ico'
			},
			{
				name: 'index.html',
				file: 'html'
			},
			{
				name: 'robots.txt',
				file: 'txt'
			},
			{
				name: 'safari-pinned-tab.svg',
				file: 'svg'
			},
			{
				name: 'site.webmanifest',
				file: 'json'
			}
		]
	},
	{
		name: 'src',
		path: 'src',
		children: [
			{
				name: 'assets',
				children: [
					{
						name: 'logo.svg',
						file: 'svg'
					}
				]
			},
			{
				name: 'components',
				children: [
					{
						name: 'layout',
						children: [
							{
								name: 'tests',
								children: [
									{
										name: 'AppFooter.spec.ts',
										file: 'ts'
									},
									{
										name: 'AppHeader.spec.ts',
										file: 'ts'
									},
									{
										name: 'AppToolbar.spec.ts',
										file: 'ts'
									},
									{
										name: 'HeaderMenu.spec.ts',
										file: 'ts'
									}
								]
							},
							{
								name: 'AppFooter.vue',
								file: 'vue'
							},
							{
								name: 'AppHeader.vue',
								file: 'vue'
							},
							{
								name: 'AppToolbar.vue',
								file: 'vue'
							},
							{
								name: 'HeaderMenu.vue',
								file: 'vue'
							},
							{
								name: 'index.ts',
								file: 'ts'
							},
							{
								name: 'README.md',
								file: 'md'
							}
						]
					},
					{
						name: 'Links',
						children: [
							{
								name: 'tests',
								children: [
									{
										name: 'Links.spec.ts',
										file: 'ts'
									}
								]
							},
							{
								name: 'index.ts',
								file: 'ts'
							},
							{
								name: 'Links.vue',
								file: 'vue'
							}
						]
					}
				]
			},
			{
				name: 'constants',
				children: [
					{
						name: 'index.ts',
						file: 'ts'
					}
				]
			},
			{
				name: 'plugins',
				children: [
					{
						name: 'axios.ts',
						file: 'ts'
					},
					{
						name: 'form-builder.ts',
						file: 'ts'
					},
					{
						name: 'vue-dot.ts',
						file: 'ts'
					},
					{
						name: 'vuetify.ts',
						file: 'ts'
					},
					{
						name: 'webfontloader.ts',
						file: 'ts'
					}
				]
			},
			{
				name: 'router',
				children: [
					{
						name: 'index.ts',
						file: 'ts'
					},
					{
						name: 'navigationRedirect.ts',
						file: 'ts'
					},
					{
						name: 'routes.ts',
						file: 'ts'
					}
				]
			},
			{
				name: 'services',
				children: [
					{
						name: 'folders',
						children: [
							{
								name: 'api.ts',
								file: 'ts'
							}
						]
					},
					{
						name: 'dateFormatter.ts',
						file: 'ts'
					}
				]
			},
			{
				name: 'store',
				children: [
					{
						name: 'index.ts',
						file: 'ts'
					},
					{
						name: 'types.d.ts',
						file: 'ts'
					}
				]
			},
			{
				name: 'theme',
				children: [
					{
						name: 'colors.ts',
						file: 'ts'
					},
					{
						name: 'styles.scss',
						file: 'scss'
					}
				]
			},
			{
				name: 'translations',
				children: [
					{
						name: 'fr'
					},
					{
						name: 'index.ts',
						file: 'ts'
					}
				]
			},
			{
				name: 'types',
				children: [
					{
						name: 'index.d.ts',
						file: 'ts'
					}
				]
			},
			{
				name: 'views',
				children: [
					{
						name: 'tests',
						children: [
							{
								name: 'About.spec.ts',
								file: 'ts'
							},
							{
								name: 'Home.spec.ts',
								file: 'ts'
							},
							{
								name: 'Maintenance.spec.ts',
								file: 'ts'
							},
							{
								name: 'NotFound.spec.ts',
								file: 'ts'
							}
						]
					},
					{
						name: 'About.vue',
						file: 'vue'
					},
					{
						name: 'Home.vue',
						file: 'vue'
					},
					{
						name: 'Maintenance.vue',
						file: 'vue'
					},
					{
						name: 'NotFound.vue',
						file: 'vue'
					}
				]
			},
			{
				name: 'App.vue',
				file: 'vue'
			},
			{
				name: 'decorators.ts',
				file: 'ts'
			},
			{
				name: 'global.d.ts',
				file: 'ts'
			},
			{
				name: 'i18n.ts',
				file: 'ts'
			},
			{
				name: 'main.ts',
				file: 'ts'
			},
			{
				name: 'modules.d.ts',
				file: 'ts'
			}
		]
	},
	{
		name: 'tests',
		path: 'tests',
		children: [
			{
				name: 'e2e',
				children: [
					{
						name: 'plugins',
						children: [
							{
								name: 'index.js',
								file: 'js'
							}
						]
					},
					{
						name: 'specs',
						children: [
							{
								name: 'About.spec.ts',
								file: 'ts'
							},
							{
								name: 'Home.spec.ts',
								file: 'ts'
							},
							{
								name: 'NotFound.spec.ts',
								file: 'ts'
							}
						]
					},
					{
						name: 'support',
						children: [
							{
								name: 'commands.js',
								file: 'js'
							},
							{
								name: 'index.js',
								file: 'js'
							}
						]
					},
					{
						name: 'types',
						children: [
							{
								name: 'index.d.ts',
								file: 'ts'
							}
						]
					},
					{
						name: 'eslintrc.js',
						file: 'js'
					},
					{
						name: 'tsconfig.json',
						file: 'json'
					}
				]
			},
			{
				name: 'unit',
				children: [
					{
						name: 'App.spec.ts',
						file: 'ts'
					},
					{
						name: 'index.ts',
						file: 'ts'
					}
				]
			}
		]
	},
	{
		name: '.browserslistrc',
		path: '_browserslistrc',
		file: 'txt'
	},
	{
		name: '.editorconfig',
		path: '_editorconfig',
		file: 'txt'
	},
	{
		name: '.eslintrc.js',
		path: '_eslintrc.js',
		file: 'js'
	},
	{
		name: '.gitignore',
		path: '_gitignore',
		file: 'txt'
	},
	{
		name: 'babel.config.js',
		path: 'babel.config.js',
		file: 'js'
	},
	{
		name: 'cypress.json',
		path: 'cypress.json',
		file: 'json'
	},
	{
		name: 'jest.config.js',
		path: 'jest.config.js',
		file: 'js'
	},
	{
		name: 'package.json',
		path: 'package.json',
		file: 'json'
	},
	{
		name: 'postcss.config.js',
		path: 'postcss.config.js',
		file: 'js'
	},
	{
		name: 'README.md',
		path: 'README.md',
		file: 'md'
	},
	{
		name: 'tsconfig.json',
		path: 'tsconfig.json',
		file: 'json'
	},
	{
		name: 'vue.config.js',
		path: 'vue.config.js',
		file: 'js'
	},
	{
		name: 'yarn.lock',
		path: 'yarn.lock',
		file: 'txt'
	}
];
