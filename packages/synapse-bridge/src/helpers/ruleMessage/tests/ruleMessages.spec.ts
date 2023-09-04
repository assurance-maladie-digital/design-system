import { ruleMessage } from '../';

describe('ruleMessage', () => {
	it('returns the requested message when it is an object', () => {
		const messages = {
			default: 'test'
		};

		expect(ruleMessage(messages, 'default')).toBe('test');
	});

	it('returns the requested message when it is a function', () => {
		const messages = {
			default: () => 'test'
		};

		expect(ruleMessage(messages, 'default')).toBe('test');
	});

	it('returns the requested message when it is a function with parameters', () => {
		const messages = {
			default: (value: number) => 'test' + value
		};

		expect(ruleMessage(messages, 'default', [10])).toBe('test10');
	});
});
