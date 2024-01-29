import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', () => {
	const text = ref('');

	return { text };
});
