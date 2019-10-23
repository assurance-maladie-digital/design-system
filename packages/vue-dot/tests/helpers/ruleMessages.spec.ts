import ruleMessage from '../../src/helpers/ruleMessage';

// Tests
describe('ruleMessage', () => {
	it('returns the requested message when it\'s an object', () => {
		const messages = {
			default: 'test'
		};

		expect(ruleMessage(messages, 'default')).toBe('test');
	});

	it('returns the requested message when it\'s a function', () => {
		const messages = {
			default: () => 'test'
		};

		expect(ruleMessage(messages, 'default')).toBe('test');
	});

	it('returns the requested message when it\'s a function with parameters', () => {
		const messages = {
			default: (value: number) => 'test' + value
		};

		expect(ruleMessage(messages, 'default', [10])).toBe('test10');
	});
});
