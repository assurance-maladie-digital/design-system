/**
 * Get the list of ressources to delete
 *
 * @param {options} options Options, used in conditions
 * @returns {array}
*/
function getRessourcesToDelete(options) {
	return [
		{
			type: 'file',
			path: 'src/assets/logo.png'
		},
		{
			type: 'folder',
			path: 'src/router/'
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
		}
	];
}

module.exports = getRessourcesToDelete;
