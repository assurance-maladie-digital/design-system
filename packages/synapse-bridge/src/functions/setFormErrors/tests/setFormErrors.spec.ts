import { describe, expect, it } from 'vitest';
import { setFormErrors } from '../';
import {
  form,
  formErrors,
  formErrorsInvalidValues,
  formErrorsWrongTypes,
} from './data/formErrors';

describe('setFormErrors', () => {
  it('sets error messages on fields', () => {
    expect(setFormErrors(formErrors, form)).toMatchSnapshot();
  });

  it('does not sets an error on unknown fields', () => {
    expect(setFormErrors(formErrorsInvalidValues, form)).toMatchSnapshot();
  });

  it('skips errors with wrong types', () => {
    expect(setFormErrors(formErrorsWrongTypes, form)).toMatchSnapshot();
  });
});
