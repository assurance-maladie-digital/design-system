import { describe, expect, it } from 'vitest';
import { getFormValues } from '../';
import { form, formWithNullValues } from './data/forms';

describe('getFormValues', () => {
  it('returns all values', () => {
    expect(getFormValues(form)).toMatchSnapshot();
  });

  it('returns an empty object when all values are null', () => {
    expect(getFormValues(formWithNullValues)).toEqual({});
  });
});
