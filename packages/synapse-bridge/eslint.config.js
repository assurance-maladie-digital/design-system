import a11y from 'eslint-plugin-vuejs-accessibility';
import antfu from '@antfu/eslint-config';

export default antfu({
	plugins: {
		'vuejs-accessibility': a11y,
	},
	ignores: [
		'src/elements/Logo/*',
		'src/elements/CustomIcon/mixins/themeIcon.ts',
		'src/assets/locales/*.json',
		'src/assets/locales/*.json/**',
		'public/**/*',
	],
	rules: {
		...a11y.configs.recommended.rules,
		'ts/semi': 'off',
		'curly': ['error', 'all'],
		'no-console': 'error',
		'no-alert': 'off',
		'no-shadow': 'off',
		'vue/custom-event-name-casing': 'off',
		'vue/html-self-closing': 'off',
		'vue/no-template-shadow': 'off',
		'@typescript-eslint/no-shadow': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'style/max-len': ['error', { code: 160, tabWidth: 4 }],
		'style/semi': ['error', 'always'],
		'style/indent': 'off',
		'style/quotes': ['error', 'single'],
		'style/no-tabs': 'off',
		// regles de l'extension vuejs-accessibility non comprises dans la version recommanded
		'vuejs-accessibility/no-aria-hidden-on-focusable':'error',
		'vuejs-accessibility/no-onchange': 'error',
		'vuejs-accessibility/no-role-presentation-on-focusable': 'error',
	},
}, {
	// ignore les fichiers dans public
	ignores: ['public/**/*'],
},
	// ne tient pas compte de la regle par default (160 caracteres) pour les fichiers dans le tableau
	{
	files: ['**/*.json', '**/*.md', '**/*.spec.ts'],
	ignores: ['public/**/*.json'],
	rules: {
		'style/max-len': ['error', { code: 600, tabWidth: 4 }],
	},

},
	// ne tient pas compte de la regle  'style/max-len': 'off' pour les fichiers dans le tableau
	{
	files: ['src/elements/FranceConnectBtn/FranceConnectBtn.vue', 'src/elements/FilePreview/FilePreview.vue'],
	rules: {
		'style/max-len': 'off',
	},

});
