import { shallowMount } from '@vue/test-utils';
import { WarningRules } from '../index';
import { describe, it, expect } from 'vitest';

type ValidationRule = any;


describe('WarningRules', () => {
	const warningRules: ValidationRule[] = [
		((date: string) => date === '01/01/2022' ? 'Invalid date' : null) as ValidationRule,
		((date: string) => date.length !== 10 ? 'Invalid date format' : null) as ValidationRule,
	];

	it('handles warningRules that do not return a string', () => {
		const wrapper = shallowMount(WarningRules, {
			props: {
				warningRules,
			},
		});

		(wrapper.vm as any).validate('15/04/2023');
		expect((wrapper.vm as any).messages).toHaveLength(0);
	});

  it('adds warning messages for invalid date', () => {
    const wrapper = shallowMount(WarningRules, {
      props: {
        warningRules,
      },
    });

    (wrapper.vm as any).validate('01/01/2022');
    expect((wrapper.vm as any).messages).toContain('Invalid date');
  });

  it('adds warning messages for invalid date format', () => {
    const wrapper = shallowMount(WarningRules, {
      props: {
        warningRules,
      },
    });

    (wrapper.vm as any).validate('01/01/22');
    expect((wrapper.vm as any).messages).toContain('Invalid date format');
  });

  it('does not add warning messages for valid date', () => {
    const wrapper = shallowMount(WarningRules, {
      props: {
        warningRules,
      },
    });

    (wrapper.vm as any).validate('02/02/2022');
    expect((wrapper.vm as any).messages).toHaveLength(0);
  });

  it('clears previous warning messages before validation', () => {
    const wrapper = shallowMount(WarningRules, {
      props: {
        warningRules,
      },
    });

    (wrapper.vm as any).validate('01/01/2022');
    expect((wrapper.vm as any).messages).toContain('Invalid date');

    (wrapper.vm as any).validate('02/02/2022');
    expect((wrapper.vm as any).messages).toHaveLength(0);
  });

	it('sets default value for warningRules prop', () => {
		const wrapper = shallowMount(WarningRules);
		expect((wrapper.vm as any).warningRules).toEqual([]);
	});
});
