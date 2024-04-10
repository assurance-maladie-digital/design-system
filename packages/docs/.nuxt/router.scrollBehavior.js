/** Adapted from @see https://github.com/nuxt/nuxt/blob/2.x/packages/vue-app/template/router.scrollBehavior.js */
module.exports = (to, from, savedPosition) => {
	const DEFAULT_POSITION = { x: 0, y: 0 };

	if (to.hash) {
		const isNotValidSelector = '#' + CSS.escape(to.hash.substr(1)) !== to.hash;
		const isExample = to.hash.includes('doc-example');

		if (isNotValidSelector || isExample) {
			return;
		}

		return {
			selector: to.hash,
			offset: {
				y: 100
			}
		};
	}

	return savedPosition || DEFAULT_POSITION;
};
