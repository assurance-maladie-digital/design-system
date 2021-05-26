import { contentFunc } from '@nuxt/content/types/content';

// Extend global interfaces

declare module 'vue/types/vue' {
	// Add this.$content
	interface Vue {
		$content: contentFunc;
	}
}
