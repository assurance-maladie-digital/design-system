import { rules, rulesFunctions } from '../../src/rules';

describe('rules', () => {
	it('should list all rules', () => {
		expect(rules).toMatchSnapshot();
	});

	it('should list all rules functions', () => {
		expect(rulesFunctions).toMatchSnapshot();
	});
});
