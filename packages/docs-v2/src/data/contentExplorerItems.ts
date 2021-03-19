import { TreeviewItem } from '~/components/content-explorer/types';

export const contentExplorerItems: TreeviewItem[] = [
	{
		name: 'public',
		path: 'todo',
		children: [
			{
				name: 'css',
				path: 'todo',
				children: [
					{
						name: 'base.css',
						path: 'todo',
						file: 'css'
					},
					{
						name: 'loader.css',
						path: 'todo',
						file: 'css'
					}
				]
			},
			{
				name: 'js',
				path: 'todo',
				children: [
					{
						name: 'lib',
						path: 'todo',
						children: [
							{
								name: 'matomo.js',
								file: 'js'
							}
						]
					},
					{
						name: 'config.js',
						path: 'todo',
						file: 'js'
					},
					{
						name: 'config.js.dist',
						path: 'todo',
						file: 'js'
					},
					{
						name: 'config.js.env',
						path: 'todo',
						file: 'js'
					}
				]
			},
			{
				name: 'android-chrome-192x192.png',
				path: 'todo',
				file: 'png'
			},
			{
				name: 'android-chrome-512x512.png',
				path: 'todo',
				file: 'png'
			},
			{
				name: 'apple-touch-icon.png',
				path: 'todo',
				file: 'png'
			},
			{
				name: 'favicon-16x16.png',
				path: 'todo',
				file: 'png'
			},
			{
				name: 'favicon-32x32.png',
				path: 'todo',
				file: 'png'
			},
			{
				name: 'favicon.ico',
				path: 'todo',
				file: 'ico'
			},
			{
				name: 'index.html',
				path: 'todo',
				file: 'html'
			},
			{
				name: 'robots.txt',
				path: 'todo',
				file: 'txt'
			},
			{
				name: 'safari-pinned-tab.svg',
				path: 'todo',
				file: 'svg'
			},
			{
				name: 'site.webmanifest',
				path: 'todo',
				file: 'json'
			}
		]
	},
	{
		name: 'src',
		path: 'todo',
		children: [
			{
				name: 'assets',
				path: 'todo',
				children: [
					{
						name: 'logo.svg',
						path: 'todo',
						file: 'svg'
					}
				]
			},
			{
				name: 'components',
				path: 'todo',
				children: [
					{
						name: 'layout',
						path: 'todo',
						children: [
							{
								name: 'tests',
								path: 'todo',
								children: [
									{
										name: 'AppFooter.spec.ts',
										path: 'todo',
										file: 'ts'
									},
									{
										name: 'AppHeader.spec.ts',
										path: 'todo',
										file: 'ts'
									},
									{
										name: 'AppToolbar.spec.ts',
										path: 'todo',
										file: 'ts'
									},
									{
										name: 'HeaderMenu.spec.ts',
										path: 'todo',
										file: 'ts'
									}
								]
							},
							{
								name: 'AppFooter.vue',
								path: 'todo',
								file: 'vue'
							},
							{
								name: 'AppHeader.vue',
								path: 'todo',
								file: 'vue'
							},
							{
								name: 'AppToolbar.vue',
								path: 'todo',
								file: 'vue'
							},
							{
								name: 'HeaderMenu.vue',
								path: 'todo',
								file: 'vue'
							},
							{
								name: 'index.ts',
								path: 'todo',
								file: 'ts'
							},
							{
								name: 'README.md',
								path: 'todo',
								file: 'md²'
							}
						]
					},
					{
						name: 'Links',
						path: 'todo',
						children: [
							{
								name: 'tests',
								path: 'todo',
								children: [
									{
										name: 'Links.spec.ts',
										path: 'todo',
										file: 'ts'
									}
								]
							},
							{
								name: 'index.ts',
								path: 'todo',
								file: 'ts'
							},
							{
								name: 'Links.vue',
								path: 'todo',
								file: 'vue'
							}
						]
					}
				]
			},
			{
				name: 'constants',
				path: 'todo',
				children: [
					{
						name: 'index.ts',
						path: 'todo',
						file: 'ts'
					}
				]
			},
			{
				name: 'plugins',
				path: 'todo',
				children: [
					{
						name: 'axios.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'form-builder.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'vue-dot.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'vuetify.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'webfontloader.ts',
						path: 'todo',
						file: 'ts'
					}
				]
			},
			{
				name: 'router',
				path: 'todo',
				children: [
					{
						name: 'index.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'navigationRedirect.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'routes.ts',
						path: 'todo',
						file: 'ts'
					}
				]
			},
			{
				name: 'services',
				path: 'todo',
				children: [
					{
						name: 'folders',
						path: 'todo',
						children: [
							{
								name: 'api.ts',
								path: 'todo',
								file: 'ts'
							}
						]
					},
					{
						name: 'dateFormatter.ts',
						path: 'todo',
						file: 'ts'
					}
				]
			},
			{
				name: 'store',
				path: 'todo',
				children: [
					{
						name: 'index.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'types.d.ts',
						path: 'todo',
						file: 'ts'
					}
				]
			},
			{
				name: 'theme',
				path: 'todo',
				children: [
					{
						name: 'colors.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'styles.scss',
						path: 'todo',
						file: 'scss'
					}
				]
			},
			{
				name: 'translations',
				path: 'todo',
				children: [
					{
						name: 'fr',
						path: 'todo'
					},
					{
						name: 'index.ts',
						path: 'todo',
						file: 'ts'
					}
				]
			},
			{
				name: 'types',
				path: 'todo',
				children: [
					{
						name: 'index.d.ts',
						path: 'todo',
						file: 'ts'
					}
				]
			},
			{
				name: 'views',
				path: 'todo',
				children: [
					{
						name: 'tests',
						path: 'todo',
						children: [
							{
								name: 'About.spec.ts',
								path: 'todo',
								file: 'ts'
							},
							{
								name: 'Home.spec.ts',
								path: 'todo',
								file: 'ts'
							},
							{
								name: 'Maintenance.spec.ts',
								path: 'todo',
								file: 'ts'
							},
							{
								name: 'NotFound.spec.ts',
								path: 'todo',
								file: 'ts'
							}
						]
					},
					{
						name: 'About.vue',
						path: 'todo',
						file: 'vue'
					},
					{
						name: 'Home.vue',
						path: 'todo',
						file: 'vue'
					},
					{
						name: 'Maintenance.vue',
						path: 'todo',
						file: 'vue'
					},
					{
						name: 'NotFound.vue',
						path: 'todo',
						file: 'vue'
					}
				]
			},
			{
				name: 'App.vue',
				path: 'todo',
				file: 'vue'
			},
			{
				name: 'decorators.ts',
				path: 'todo',
				file: 'ts'
			},
			{
				name: 'global.d.ts',
				path: 'todo',
				file: 'ts'
			},
			{
				name: 'i18n.ts',
				path: 'todo',
				file: 'ts'
			},
			{
				name: 'main.ts',
				path: 'todo',
				file: 'ts'
			},
			{
				name: 'modules.d.ts',
				path: 'todo',
				file: 'ts'
			}
		]
	},
	{
		name: 'tests',
		path: 'todo',
		children: [
			{
				name: 'e2e',
				path: 'todo',
				children: [
					{
						name: 'plugins',
						path: 'todo',
						children: [
							{
								name: 'index.js',
								path: 'todo',
								file: 'js'
							}
						]
					},
					{
						name: 'specs',
						path: 'todo',
						children: [
							{
								name: 'About.spec.ts',
								path: 'todo',
								file: 'ts'
							},
							{
								name: 'Home.spec.ts',
								path: 'todo',
								file: 'ts'
							},
							{
								name: 'NotFound.spec.ts',
								path: 'todo',
								file: 'ts'
							}
						]
					},
					{
						name: 'support',
						path: 'todo',
						children: [
							{
								name: 'commands.js',
								path: 'todo',
								file: 'js'
							},
							{
								name: 'index.js',
								path: 'todo',
								file: 'js'
							}
						]
					},
					{
						name: 'types',
						path: 'todo',
						children: [
							{
								name: 'index.d.ts',
								path: 'todo',
								file: 'ts'
							}
						]
					},
					{
						name: 'eslintrc.js',
						path: 'todo',
						file: 'js'
					},
					{
						name: 'tsconfig.json',
						path: 'todo',
						file: 'json'
					}
				]
			},
			{
				name: 'unit',
				path: 'todo',
				children: [
					{
						name: 'App.spec.ts',
						path: 'todo',
						file: 'ts'
					},
					{
						name: 'index.ts',
						path: 'todo',
						file: 'ts'
					}
				]
			}
		]
	},
	{
		name: '.browserslist',
		path: 'todo',
		file: 'txt'
	},
	{
		name: '.editorconfig',
		path: 'todo',
		file: 'txt'
	},
	{
		name: '.eslintignore',
		path: 'todo',
		file: 'js'
	},
	{
		name: '.eslintrc.js',
		path: 'todo',
		file: 'js'
	},
	{
		name: '.gitignore',
		path: 'todo',
		file: 'txt'
	},
	{
		name: 'babel.config.js',
		path: 'todo',
		file: 'js'
	},
	{
		name: 'cypress.json',
		path: 'todo',
		file: 'json'
	},
	{
		name: 'jest.config.js',
		path: 'todo',
		file: 'js'
	},
	{
		name: 'package.json',
		path: 'todo',
		file: 'json'
	},
	{
		name: 'postcss.config.js',
		path: 'todo',
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
