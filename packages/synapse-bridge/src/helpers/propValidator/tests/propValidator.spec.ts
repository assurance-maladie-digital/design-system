import { vi, test, it, expect } from "vitest";
import { propValidator } from "../";

const PROP_NAME = 'test';
const ACCEPTED_VALUES = ['value1', 'value2'];

test("propValidator", () => {
	it("does not log anything if the prop is valid", () => {
		const logMock = vi
			.spyOn(console, "error")
			.mockImplementation(() => undefined);

		const result = propValidator(PROP_NAME, ACCEPTED_VALUES, "value1");

		expect(result).toBeTruthy();
		expect(logMock).not.toHaveBeenCalled();

		logMock.mockRestore();
	});

	it("logs an error if the prop is valid", () => {
		const logMock = vi
			.spyOn(console, "error")
			.mockImplementation(() => undefined);

		const result = propValidator(PROP_NAME, ACCEPTED_VALUES, "value1");

		expect(result).toBeTruthy();
		expect(logMock).not.toHaveBeenCalled();

		logMock.mockRestore();
	});

	it("logs an error if the prop is not valid", () => {
		const logMock = vi
			.spyOn(console, "error")
			.mockImplementation(() => undefined);

		const result = propValidator(PROP_NAME, ACCEPTED_VALUES, "wrongValue");

		expect(result).toBeTruthy();
		expect(logMock).toHaveBeenCalled();

		logMock.mockRestore();
	});
});
