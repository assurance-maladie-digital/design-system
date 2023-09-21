import { VueWrapper, shallowMount } from "@vue/test-utils";

import DataList from "../";
import { getDataList } from "./data/dataList";

let wrapper: VueWrapper<any>;

describe("DataList", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(DataList, {
			propsData: {
				items: getDataList(),
			},
		});

		const elExists = wrapper.find(".vd-data-list").exists();
		expect(elExists).toBe(true);

		// Check items exists
		const itemsExists = wrapper.find(".vd-data-list-item").exists();
		expect(itemsExists).toBe(true);

		const titleExists = wrapper.find("h4").exists();
		expect(titleExists).toBe(false);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a title", () => {
		wrapper = shallowMount(DataList, {
			propsData: {
				items: getDataList(),
				listTitle: "Informations",
			},
		});

		const elExists = wrapper.find("h4").exists();
		expect(elExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with an empty list", () => {
		wrapper = shallowMount(DataList, {
			propsData: {
				items: [],
			},
		});

		// Check items does not exist
		const itemsExists = wrapper.find(".vd-data-list-item").exists();
		expect(itemsExists).toBe(false);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with an icon", () => {
		const listWithIcon = getDataList();

		// Add an action to the second item
		listWithIcon[1].icon = "mdiTest";

		wrapper = shallowMount(
			DataList,
			{
				propsData: {
					items: listWithIcon,
					icons: {
						mdiTest: "test",
					},
				},
			},
			true
		);

		// Check items does not exist
		const itemsExists = wrapper.find(".vd-data-list-item .v-icon").exists();
		expect(itemsExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a class", async () => {
		const listWithClass = getDataList();

		// Add a class to the second item
		listWithClass[1].class = "custom-class";

		wrapper = shallowMount(DataList, {
			propsData: {
				items: listWithClass,
			},
		});

		// Check that items now exist
		const itemsExists = wrapper
			.find(".vd-data-list-item.custom-class")
			.exists();
		expect(itemsExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders loading state correctly", async () => {
		wrapper = shallowMount(DataList, {
			propsData: {
				items: getDataList(),
				loading: true,
				itemsNumberLoading: 3,
				headingLoading: true,
			},
		});

		// Check that items does not exist
		let itemsExists = wrapper.find(".vd-data-list-item").exists();
		expect(itemsExists).toBe(false);

		expect(wrapper).toMatchSnapshot();

		wrapper.setProps({ loading: false });

		await wrapper.vm.$nextTick();

		// Check that items now exist
		itemsExists = wrapper.find(".vd-data-list-item").exists();
		expect(itemsExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with an action", async () => {
		const listWithAction = getDataList();

		// Add an action to the second item
		listWithAction[1].action = "Edit";

		wrapper = shallowMount(
			DataList,
			{
				propsData: {
					items: listWithAction,
					flex: true,
				},
			},
			true
		);

		expect(wrapper).toMatchSnapshot();
	});

	it("emits action event", async () => {
		const listWithAction = getDataList();

		// Add an action to the second item
		listWithAction[2].action = "Edit";

		wrapper = shallowMount(
			DataList,
			{
				propsData: {
					items: listWithAction,
					flex: true,
				},
			},
			true
		);

		// Find the second item element
		const itemWithAction = wrapper.findAll(".vd-data-list-item").at(2);
		expect(itemWithAction.exists()).toBe(true);

		const actionBtn = itemWithAction.find(".vd-data-list-item-action-btn");
		expect(actionBtn.exists()).toBe(true);

		actionBtn.trigger("click");

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted("click:item-action")).toEqual([[2]]);
	});
});
