import { NotificationModule } from '@cnamts/vue-dot/src/modules/notification/types';
import { VueDotOptions } from '@cnamts/vue-dot/types';
import { ContentFunction } from './types/content';

declare module 'vue/types/vue' {
	interface Vue extends NotificationModule {
		$content: ContentFunction;
		$vd: VueDotOptions;
	}
}
