/**
 * Mount a div with data-app attribute in tests
 * for Vuetify components like VSlider
 * @see https://github.com/vuetifyjs/vuetify/issues/1210
 */
export function addVApp(): void {
	const app = document.createElement('div');
	app.setAttribute('data-app', 'true');
	document.body.appendChild(app);
}
