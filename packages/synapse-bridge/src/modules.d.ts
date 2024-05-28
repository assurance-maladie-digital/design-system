declare module 'jest-serializer-vue'

declare module 'vuex' {
	export * from 'vuex/types/index.d.ts';
	export * from 'vuex/types/helpers.d.ts';
	export * from 'vuex/types/logger.d.ts';
	export * from 'vuex/types/vue.d.ts';
}

declare module "*.svg" {
	const content: string;
	export default content;
}
