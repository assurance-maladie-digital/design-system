import DataList from '@/elements/DataList';
import { getDataList } from '@/elements/DataList/tests/data/dataList';
// Tests
describe('DataList', () => {

	it('renders correctly', () => {
		// Mount component
		cy.mountComponent(DataList, {
			props: {
				items: getDataList()
			}
		}, true);
	});

});
