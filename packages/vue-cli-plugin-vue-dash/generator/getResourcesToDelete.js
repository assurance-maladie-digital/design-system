/**
 * Get the ressources to delete
 *
 * @param {options} options The plugin options
 * @returns {Array} The ressources to delete
 */
function getResourcesToDelete(options) {
	return [
		{
			type: 'file',
			path: 'src/assets/logo.png'
		},
		{
			type: 'file',
			path: 'src/shims-tsx.d.ts'
		},
		{
			type: 'file',
			path: 'src/shims-vue.d.ts'
		},
		{
			type: 'file',
			path: 'src/components/HelloWorld.vue'
		},
		{
			type: 'file',
			path: 'tests/unit/example.spec.ts'
		},
		{
			type: 'folder',
			path: 'src/translations/',
			condition: !options.i18n
		},
		{
			type: 'file',
			path: 'src/i18n.ts',
			condition: !options.i18n
		},
		{
			type: 'file',
			path: 'tests/e2e/specs/test.js'
		},
		{
			type: 'file',
			path: 'src/router/index.js'
		},
		{
			type: 'file',
			path: 'src/store/index.js'
		},
		{
			type: 'file',
			path: 'cypress.json',
			condition: !options.cypress
		},
		{
			type: 'folder',
			path: 'tests/e2e/',
			condition: !options.cypress
		},
		{
			type: 'folder',
			path: 'pipeline/',
			condition: !options.jenkins
		},
		{
			type: 'folder',
			path: 'public/js/lib/',
			condition: !options.matomo
		}
	];
}

module.exports = { getResourcesToDelete };
