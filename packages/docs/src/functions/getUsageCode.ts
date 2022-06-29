import { UsageProps } from '~/types/usage';

import { toKebabCase } from './toKebabCase';
import { toPascalCase } from './toPascalCase';

export function getUsageCode(name: string, displayProps: UsageProps, slotContent: string | null): string {
	let attributeArray = [];

	for (const [key, value] of Object.entries(displayProps)) {
		if (Boolean(value) === false) {
			continue;
		}

		let trimmed = toKebabCase(key.trim());

		const isNumber = typeof value === 'number';
		const isObject = typeof value === 'object';
		const isFunction = typeof value === 'function';

		const isDynamicValue = isNumber || isObject || isFunction;

		if (isDynamicValue) {
			trimmed = `:${trimmed}`;
		}

		if (isObject || isFunction) {
			trimmed += `="${key.trim()}"`;
		} else if (value !== true) {
			trimmed += `="${value}"`;
		}

		attributeArray.push(trimmed);
	}

	attributeArray = attributeArray.sort();

	// Display attributes on single when none or one attribute
	const hasSlotContent = Boolean(slotContent);
	const parsedName = toPascalCase(name);

	const singleLine = attributeArray.length > 1;
	const space = ' ';

	const indent = singleLine ? '\r\t' : attributeArray.length ? space : '';

	let tail = '';

	if (singleLine) {
		tail += '\r';
	} else if (!singleLine && !hasSlotContent) {
		tail += space;
	}

	tail += `${hasSlotContent ? '' : '/'}>`;

	const attributes = attributeArray.join('\r\t');
	const endContent = hasSlotContent ? `${slotContent}</${parsedName}>` : '';

	return `<${parsedName}${indent}${attributes}${tail}${endContent}`;
}
