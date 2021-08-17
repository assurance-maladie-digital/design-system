import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default (context: any, inject: any) => {
	Vue.use(
		VueGtag,
		{
			config: {
				id: 'G-G8Y6B5FWDB'
			}
		},
		context.app.router
	);

	inject('gtag', (Vue as any).$gtag);
}
