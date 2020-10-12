import { VueDotOptions } from '@cnamts/vue-dot';
import { SiteData } from 'vuepress-types';
import { Framework } from 'vuetify';

declare module 'vue/types/vue' {
	// Add this.$vuetify
	interface Vue {
		$vd: VueDotOptions;
		$vuetify: Framework;
		$site: SiteData;
	}
}
