import DownloadBtn from '@/elements/DownloadBtn';

import { filePromise } from '@/elements/DownloadBtn/tests/data/filePromise';

// Tests
describe('DownloadBtn', () => {
	it('renders correctly', () => {
		// Mount component
		cy.mountComponent(DownloadBtn, {
			propsData: {
				filePromise
			},
			slots: {
				default: 'justificatif.pdf'
			}
		}, true);
		cy.get('#__cy_root').toMatchSnapshot();
	});
});
