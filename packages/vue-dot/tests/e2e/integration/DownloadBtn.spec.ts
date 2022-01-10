import DownloadBtn from '@/elements/DownloadBtn';

import { filePromise } from '@/elements/DownloadBtn/tests/data/filePromise';

describe('DownloadBtn', () => {
	it('renders correctly', () => {
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
