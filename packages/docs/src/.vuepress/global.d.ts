import { VueDotOptions } from '@cnamts/vue-dot';
import { Framework } from 'vuetify';

declare module 'vue/types/vue' {
	// Add this.$vuetify
	interface Vue {
		$vd: VueDotOptions;
		$vuetify: Framework;
	}
}
