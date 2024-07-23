import { describe, expect, it } from 'vitest';

import { getFileExtension } from '../';

describe('getFileExtension', () => {
  it('returns the extension of a file', () => {
    const filename = 'test.pdf';

    expect(getFileExtension(filename)).toEqual('pdf');
  });
});
