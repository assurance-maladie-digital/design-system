import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

const HTML_ATTRS = /(\S+)\s*=\s*([']|["])\s*([\W\w]*?)\s*\2/gim;

const DEFAULT_OPTIONS = {
	functionRemplacement: '{[Function]}'
};

interface HTMLFnOpts {
	attrIgnore: (name: string, value: unknown) => boolean;
	functionRemplacement: string;
}

/**
 * Serialize wrapper
 *
 * `functionRemplacement` is used to ensure a deterministic snapshot
 * (workaround of https://github.com/vuejs/vue-test-utils/issues/975)
 * @deprecated Bug fixed, not useful anymore
 */
export function html(wrapper: Wrapper<Vue>, options?: HTMLFnOpts): string {
	const opts = {
		...DEFAULT_OPTIONS,
		...options
	} as HTMLFnOpts;

	const serializedWrapper = wrapper.html().replace(HTML_ATTRS, (matches, name, quote, value) => {
		if (opts.functionRemplacement && /^\s*function\s*/gi.test(value)) {
			return `${name}="${opts.functionRemplacement}"`;
		}

		if (opts.attrIgnore && opts.attrIgnore(name, value)) {
			return '';
		}

		return matches;
	});

	return serializedWrapper;
}
