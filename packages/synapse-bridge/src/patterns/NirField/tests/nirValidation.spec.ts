import { checkNIR, computeNIRKey, isNIRKeyValid } from '../nirValidations';
import { describe, it, expect } from 'vitest'

describe('NIR Validations', () => {
	it('returns true for valid NIR', () => {
		expect(checkNIR('175039720123594')).toBe(true);
	});

	it('returns false for invalid NIR', () => {
		expect(checkNIR('3234567890123')).toBe(false);
	});

	it('returns false for NIR with invalid length', () => {
		expect(checkNIR('123456789012')).toBe(false);
	});

	it('computes correct NIR key', () => {
		expect(computeNIRKey('2940375120005')).toBe('91');
	});

	it('returns true for valid NIR key', () => {
		expect(isNIRKeyValid('294037512000591')).toBe(true);
	});

	it('returns false for invalid NIR key', () => {
		expect(isNIRKeyValid('123456789012398')).toBe(false);
	});

	it('returns true for NIR without key', () => {
		expect(isNIRKeyValid('1234567890123')).toBe(true);
	});

	it('returns true for NIR with invalid length', () => {
		expect(isNIRKeyValid('123456789012')).toBe(true);
	});
});
