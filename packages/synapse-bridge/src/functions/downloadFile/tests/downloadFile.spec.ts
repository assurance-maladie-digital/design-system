import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import { downloadFile } from "../";


describe('downloadFile', () => {
	// https://stackoverflow.com/questions/69552023/after-update-typescript-3-7-2-to-latest-typescript-4-4-4-error-ts2339
	const nav = window.navigator as any;
	const mockCreateObjectURL = vi.fn();
	const mockRevokeObjectURL = vi.fn();

	const file = new File(['test'], 'attestation.txt', {
		type: 'text/plain',
	});

	beforeEach(() => {
		global.URL.createObjectURL = mockCreateObjectURL;
		global.URL.revokeObjectURL = mockRevokeObjectURL;
	});
	afterEach(() => {
		vi.resetAllMocks();
		document.body.innerHTML = '';
	})

	it('download a file', () => {
		mockCreateObjectURL.mockReturnValue('blob:test');
		downloadFile(file, file.name, file.type);
		expect(mockCreateObjectURL).toHaveBeenCalledWith(new Blob([file], { type: file.type }));
		expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:test');
	});

	it('download a file with utf8Bom', () => {
		mockCreateObjectURL.mockReturnValue('blob:test-bom');
		downloadFile(file, file.name, file.type, true);
		expect(mockCreateObjectURL).toHaveBeenCalled();
		expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:test-bom');
	});

	it('download a file with content type BufferSource', () => {
		const buffer = new ArrayBuffer(8);
		mockCreateObjectURL.mockReturnValue('blob:test-buffer');
		downloadFile(buffer, file.name, file.type);
		expect(mockCreateObjectURL).toHaveBeenCalledWith(new Blob([buffer], { type: file.type }));
		expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:test-buffer');
	});

	it('download a file with content type String', () => {
		mockCreateObjectURL.mockReturnValue('blob:test-string');
		downloadFile('test', file.name, file.type);
		expect(mockCreateObjectURL).toHaveBeenCalledWith(new Blob(['test'], { type: file.type }));
		expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:test-string');
	});

	it('download a file on Internet Explorer', () => {
		const mockSaveOrOpenBlob = vi.fn();
		nav.msSaveOrOpenBlob = mockSaveOrOpenBlob;
		downloadFile(file, file.name, file.type);
		expect(mockSaveOrOpenBlob).toHaveBeenCalledWith(new Blob([file], { type: file.type }), file.name);
	});
});
