import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import { downloadFile } from "../";

const file = new File(["attestation.txt"], "attestation.txt", {
	type: "text/plain",
});

describe("downloadFile", () => {
	let link: HTMLAnchorElement;
	let appendChildSpy;
	let removeChildSpy;

	beforeEach(() => {
		link = {
			style: {},
			click: vi.fn(),
		} as unknown as HTMLAnchorElement;

		vi.spyOn(document, "createElement").mockImplementation(() => link);

		appendChildSpy = vi.spyOn(document.body, "appendChild")
		removeChildSpy = vi.spyOn(document.body, "removeChild")
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	global.URL.createObjectURL = vi.fn();
	global.URL.revokeObjectURL = vi.fn();

	it("it downloads a file", () => {
		downloadFile(file, file.name, file.type);

		expect(appendChildSpy).toHaveBeenCalledTimes(1);
		expect(removeChildSpy).toHaveBeenCalledTimes(1);
		expect(link.rel).toEqual("noopener noreferrer");
		expect(link.target).toEqual("_blank");
		expect(link.download).toEqual(file.name);
		expect(link.style.display).toEqual("none");
		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it("it downloads a file with utf8Bom", () => {
		downloadFile(file, file.name, file.type, true);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it("it downloads a file with content type BufferSource", () => {
		const buffer = new ArrayBuffer(8);

		downloadFile(buffer, file.name, file.type);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it("it downloads a file with content type String", () => {
		downloadFile("test", file.name, file.type);

		expect(link.click).toHaveBeenCalledTimes(1);
	});

	it("it downloads a file on Internet Explorer", () => {
		window.navigator.msSaveOrOpenBlob = vi.fn(() => true);
		const navigatorSpy = vi.spyOn(global, "navigator", "get");

		downloadFile(file, file.name, file.type);

		expect(navigatorSpy).toHaveBeenCalledTimes(2);
	});
});
