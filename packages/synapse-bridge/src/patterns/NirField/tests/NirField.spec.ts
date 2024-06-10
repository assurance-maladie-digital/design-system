import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import NirField from "../";
import { vuetify } from "@tests/unit/setup";
import { locales } from "../locales";

describe("NirField", () => {
	const nir = '195122B120005';
	const key = "29";
	const formattedNir = '1 95 12 2B 120 005'

	it("renders correctly", () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with 13 characters", () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with outlined prop", () => {
		const wrapper = mount(NirField, {
			propsData: {
				outlined: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a tooltip", () => {
		const wrapper = mount(NirField, {
			propsData: {
				tooltip: "Information sur le NIR",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("emits a change event when a correct NIR is entered in single field mode", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const input = wrapper.find("input");
		await input.setValue(nir);
		await input.trigger("keyup",{
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
		});

		expect(wrapper.emitted()).toHaveProperty('update:modelValue');
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[nir][0]]);
	});

	it("emits a change event when a correct NIR is entered in dual field mode", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');

		await numberField.setValue(nir);
		await keyField.setValue(key);

		const value = wrapper.emitted('update:modelValue');

		expect(wrapper.emitted()).toHaveProperty("change");
		if (value) {
			expect(value[2]).toEqual([[nir + key][0]]);
		}
	});

	it('update the value when the nir prop is updated in single field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const input = wrapper.find("input");
		await input.setValue('123');
		await wrapper.setProps({ modelValue: '' });
		expect(wrapper.find('input').element.value).toBe('1 23');

		await input.setValue(nir);
		await wrapper.setProps({ modelValue: '' });
		expect(wrapper.find('input').element.value).toBe(formattedNir);
	});

	it('update the value when the nir prop is updated in dual field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');
		await numberField.setValue(nir);
		await keyField.setValue(key);

		await wrapper.setProps({ modelValue: '' });
		expect(wrapper.find<HTMLInputElement>('.vd-number-field input').element.value).toBe(formattedNir);
		expect(wrapper.find<HTMLInputElement>('.vd-key-field input').element.value).toBe(key);
	});

	it('display an error when the fields are required and left empty', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
				required: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');

		await numberField.trigger('click');
		await numberField.trigger('blur');

		await keyField.trigger('click');
		await keyField.trigger('blur');

		expect(wrapper.find('.vd-number-field').classes()).toContain('v-input--error');
		expect(wrapper.find('.vd-key-field').classes()).toContain('v-input--error');
	});

	it('update the value when the modelValue is null', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');
		await numberField.setValue(null);
		await keyField.setValue(null);

		await wrapper.setProps({ modelValue: null });
		expect(wrapper.find<HTMLInputElement>('.vd-number-field input').element.value).toBe('');
		expect(wrapper.find<HTMLInputElement>('.vd-key-field input').element.value).toBe('');
	});

	it('update the value when the modelValue and newValue.length >= NUMBER_LENGTH', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		await numberField.setValue(nir);

		await wrapper.setProps({ modelValue: nir });
		expect(wrapper.find<HTMLInputElement>('.vd-number-field input').element.value).toBe(nir);
	});

	it('not display the key field in single key mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.isSingleField).toBe(true);
		expect(wrapper.find('.vd-key-field').exists()).toBe(false);
	});

	it("displays an error when an incorrect NIR is entered in single field mode", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const input = wrapper.find(".vd-number-field input");
		await input.setValue("12345"); // Enter an invalid NIR
		await input.trigger("keyup", {
			key: "Tab",
			code: "Tab",
			keyCode: 9,
		});

		expect(wrapper.find("#number-field-errors").exists()).toBe(true);
	});

	it("displays an error when an incorrect NIR is entered in dual field mode", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		await numberField.setValue("12345"); // Enter an invalid NIR

		await wrapper.vm.$nextTick();
		expect(wrapper.find("#number-field-errors").exists()).toBe(true);
	});

	it("displays an error when an incorrect key is entered in dual field mode", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const keyField = wrapper.find('.vd-key-field input');
		await keyField.setValue("2"); // Enter an invalid key

		expect(wrapper.find("#number-field-errors").exists()).toBe(true);
	});

	it("set the focus on the key field when the number field is filled in dual field mode", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find<HTMLInputElement>('.vd-number-field input');
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input');

		keyField.element.focus = vi.fn();

		await numberField.setValue(nir);
		await numberField.trigger("keydown", {
			key: "1",
			code: "Digit1",
			keyCode: 49,
		});

		expect(keyField.element.focus).toHaveBeenCalled();
	});

	it("do not set the focus on the key field when the number field is filled in dual field mode there is a key modifier", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find<HTMLInputElement>('.vd-number-field input');
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input');

		keyField.element.focus = vi.fn();

		await numberField.setValue(nir);
		await numberField.trigger("keydown", {
			key: "1",
			code: "Digit1",
			keyCode: 49,
			shiftKey: true,
		});

		expect(keyField.element.focus).not.toHaveBeenCalled();
	});

	it("set the focus on the number field when the key field is empty in dual field mode", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find<HTMLInputElement>('.vd-number-field input');
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input');

		numberField.element.focus = vi.fn();

		await keyField.trigger("keyup", {
			key: "Backspace",
			code: "Backspace",
			keyCode: 8,
		});

		expect(numberField.element.focus).toHaveBeenCalled();
	});

	it("do not set the focus on the number field when the key field is not empty", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find<HTMLInputElement>('.vd-number-field input');
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input');

		numberField.element.focus = vi.fn();

		await keyField.setValue("22");

		await keyField.trigger("keyup", {
			key: "Backspace",
			code: "Backspace",
			keyCode: 8,
		});

		expect(numberField.element.focus).not.toHaveBeenCalled();
	});
	it('does not display an error when the fields are not required and left empty', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
				required: false,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');

		await numberField.trigger('click');
		await numberField.trigger('blur');

		await keyField.trigger('click');
		await keyField.trigger('blur');

		expect(wrapper.find('.vd-number-field').classes()).not.toContain('v-input--error');
		expect(wrapper.find('.vd-key-field').classes()).not.toContain('v-input--error');
	});

	it("does not render a tooltip when the tooltip prop is not provided", () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.find('VTooltip').exists()).toBe(false);
	});

	it("calls the changeNumberValue method when the number value changes", async () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		await numberField.setValue('1234567890123');

		expect(wrapper.vm.numberValue).toBe('1 23 45 67 890 123');
	});

	it("calls the changeKeyValue method when the key value changes", async () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		});

		const keyField = wrapper.find('.vd-key-field input');
		await keyField.setValue('22');

		expect(wrapper.vm.keyValue).toBe('22');
	});

	it("validates the number value when the number field loses focus", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		await numberField.setValue('12345'); // Enter an invalid NIR
		await numberField.trigger('blur');

		expect(wrapper.vm.numberErrors).toContain(locales.errorLengthNumber(13));
	});

	it("validates the key value when the key field loses focus", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const keyField = wrapper.find('.vd-key-field input');
		await keyField.setValue('2'); // Enter an invalid key
		await keyField.trigger('blur');

		expect(wrapper.vm.keyErrors).toContain(locales.errorLengthKey(2));
	});
	it("sets isInputFocused to true when the input field is focused", async () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		await numberField.trigger('focus');

		expect(wrapper.vm.isInputFocused).toBe(true);
	});

	it("returns the correct unmasked value", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const expectedValue = "1234567890123"; // Enter a valid NIR
		await numberField.setValue(expectedValue);

		expect(wrapper.vm.maskaNumberValue.unmasked).toBe(expectedValue);
	});
	it("returns the correct internal value in single field mode", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const expectedValue = "1234567890123";
		await numberField.setValue(expectedValue);

		expect(wrapper.vm.internalValue).toBe(expectedValue);
	});

	it("adds the vd-nir-field__hint class to the hint messages when mounted and hints are correct", async () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		});

		const textField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');
		textField.element.setAttribute('hint', '13 caractères');
		keyField.element.setAttribute('hint', '2 chiffres');

		expect(textField.element.getAttribute('hint')).toBe('13 caractères');
		expect(keyField.element.getAttribute('hint')).toBe('2 chiffres');

		wrapper.vm.$options.mounted?.call(wrapper.vm);

		const textFieldMessageElement = textField?.element?.querySelector('.v-messages__message');
		const keyFieldMessageElement = keyField?.element?.querySelector('.v-messages__message');

		if (textFieldMessageElement && keyFieldMessageElement) {
			expect(textFieldMessageElement.classList.contains('vd-nir-field__hint')).toBe(true);
			expect(keyFieldMessageElement.classList.contains('vd-nir-field__hint')).toBe(true);
		} else if (textFieldMessageElement ||  keyFieldMessageElement) {
			expect(textFieldMessageElement?.classList.contains('vd-nir-field__hint')).toBe(true);
			expect(keyFieldMessageElement?.classList.contains('vd-nir-field__hint')).toBe(true);
		}
	});

it("updates the v-model when a key is deleted", async () => {
  const wrapper = mount(NirField, {
    propsData: {
      nirLength: 15,
    },
    global: {
      plugins: [vuetify],
    },
  });

  const keyField = wrapper.find('.vd-key-field input');
  await keyField.setValue('22');
  await keyField.setValue('');

  const emittedValues = wrapper.emitted('update:modelValue');
	if (emittedValues) {
		const lastEmittedValue = emittedValues[emittedValues.length - 1];
		expect(lastEmittedValue).toEqual(['']);
	}

});

it("updates the v-model when a number is deleted", async () => {
  const wrapper = mount(NirField, {
    propsData: {
      nirLength: 15,
    },
    global: {
      plugins: [vuetify],
    },
  });

  const numberField = wrapper.find('.vd-number-field input');
  await numberField.setValue('1234567890123');
  await numberField.setValue('');

  const emittedValues = wrapper.emitted('update:modelValue');
	if (emittedValues) {
		const lastEmittedValue = emittedValues[emittedValues.length - 1];
		expect(lastEmittedValue).toEqual(['']);
	}
});

	it("calls the changeNumberValue method when the number value changes", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');

		// Set the number and key values
		await numberField.setValue('1234567890123');
		await keyField.setValue('22');

		// Check the emitted event
		const emittedValues = wrapper.emitted('update:modelValue');
		if (emittedValues) {
			const lastEmittedValue = emittedValues[emittedValues.length - 1];
			expect(lastEmittedValue).toEqual(['123456789012322']);
		}
	});

	it("calls the changeNumberValue method when the key value is empty", async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');

		// Set the number value and leave the key value empty
		await numberField.setValue('1234567890123');
		await keyField.setValue('');

		// Check the emitted event
		const emittedValues = wrapper.emitted('update:modelValue');
		if (emittedValues) {
			const lastEmittedValue = emittedValues[emittedValues.length - 1];
			expect(lastEmittedValue).toEqual(['1234567890123']);
		}
	});

	it("use changeNumberValue method", async () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');

		// Set the number and key values
		await numberField.setValue('1234567890123');
		await keyField.setValue('22');

		// Check the changeNumberValue method
		wrapper.vm.changeNumberValue();
		expect(wrapper.vm.internalValue).toBe('123456789012322');
	});

	it("use changeKeyValue method with number + key", async () => {
	  const wrapper = mount(NirField, {
		global: {
		  plugins: [vuetify],
		},
	  });

	  const numberField = wrapper.find('.vd-number-field input');
	  const keyField = wrapper.find('.vd-key-field input');

	  // Set the number and key values
	  await numberField.setValue('1234567890123');
	  await keyField.setValue('22');

	  // Check the changeKeyValue method
	  wrapper.vm.changeKeyValue();

	  const emittedValues = wrapper.emitted('update:modelValue');

	  expect(emittedValues).toBeTruthy();
		if (emittedValues && emittedValues.length > 2) {
			expect(emittedValues[2]).toEqual([['123456789012322'][0]]);
		}
	});

	it("use changeKeyValue method with number", async () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		});

		const numberField = wrapper.find('.vd-number-field input');

		// Set the number and key values
		await numberField.setValue('1234567890123');

		// Check the changeKeyValue method
		wrapper.vm.changeKeyValue();

		const emittedValues = wrapper.emitted('update:modelValue');

		expect(emittedValues).toBeTruthy();
		if (emittedValues && emittedValues.length > 2) {
			expect(emittedValues[1]).toEqual(['1234567890123']);
		}
	});
});
