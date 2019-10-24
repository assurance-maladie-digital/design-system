import rules, { rulesFunctions } from '../../src/rules';

describe('rules', () => {
	it('should list all rules', () => {
		expect(rules).toMatchSnapshot();
		expect(rulesFunctions).toMatchSnapshot();
	});
});
