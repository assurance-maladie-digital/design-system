import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import DialogBox from '../'
import { VDialog, VCard } from 'vuetify/components'

const defaultProps = {
	modelValue: true,
	title: 'Test title',
	width: '600px',
	cancelBtnText: 'Cancel',
	confirmBtnText: 'Confirm',
	hideActions: false,
	persistent: false,
}

describe('DialogBox', () => {
	describe('rendering and props', () => {
		it('renders correctly with props', async () => {
			const wrapper = mount(DialogBox, {
				props: defaultProps,
				global: {
					plugins: [vuetify],
					stubs: {
						VDialog: {
							template: '<div><slot></slot></div>',
						},
					},
				},
			})

			await wrapper.vm.$nextTick()

			const dialog = wrapper.findComponent(VDialog);
			const title = wrapper.findComponent(VCard).find('h2').text();

			expect(dialog.exists()).toBe(true);
			expect(title).toBe('Test title');
		})

		it('is closed when model value is false', async () => {
			const wrapper = mount(DialogBox, {
				props: {
					...defaultProps,
					modelValue: false,
				},
				global: {
					plugins: [vuetify],
				},
			})

			await wrapper.vm.$nextTick()

			const card = wrapper.findComponent(VCard);

			expect(card.exists()).toBe(false);
		})

		it('becomes visible when the model value is updated', async () => {
			const wrapper = mount(DialogBox, {
				props: defaultProps,
				global: {
					plugins: [vuetify],
				},
			})

			const card = wrapper.getComponent(VCard)
			expect(card.isVisible()).toBe(true)

			await wrapper.setProps({ modelValue: false })
			expect(card.isVisible()).toBe(false)

			await wrapper.setProps({ modelValue: true })
			expect(card.isVisible()).toBe(true)
		})

		it('renders the title slot', async () => {
			const wrapper = mount(DialogBox, {
				slots: {
					title: '<h2>Test title</h2>',
				},
				props: defaultProps,
				global: {
					plugins: [vuetify],
				},
			})

			const modal = wrapper.getComponent(VCard)
			const title = modal.find<HTMLElement>('h2').text()

			await modal.vm.$nextTick()

			expect(title).toBe('Test title')
		})
	})

	describe('focusable elements and tab navigation', () => {
		it('gets the correct focusable elements', async () => {
			const wrapper = mount(DialogBox, {
				slots: {
					default: `
						<button id="first">First</button>
						<button id="second" disabled>Second</button>
						<button id="third">third</button>
						<a href="https://www.ameli.fr/" id="link">ameli.fr</a>
					`,
				},
				props: {
					...defaultProps,
					hideActions: true,
					persistent: true,
				},
				global: {
					plugins: [vuetify],
				},
			})

			const modal = wrapper.getComponent(VCard)

			const firstBtn = modal.find<HTMLElement>('#first')
			const thirdBtn = modal.find<HTMLElement>('#third')
			const theLink = modal.find<HTMLElement>('#link')

			await modal.vm.$nextTick()

			expect(await wrapper.vm.getSelectableElements()).toEqual([
				firstBtn.element,
				thirdBtn.element,
				theLink.element,
			])
		})

		it('handles the internal tab navigation', async () => {
			const wrapper = mount(DialogBox, {
				slots: {
					default: `
						<button id="first">First</button>
						<button id="second" disabled>Second</button>
						<button id="third">third</button>
						<a href="https://www.ameli.fr/" id="link">ameli.fr</a>
					`,
				},
				props: {
					...defaultProps,
					hideActions: true,
					persistent: true,
				},
				global: {
					plugins: [vuetify],
				},
			})

			async function triggerTab() {
				modal.find(':focus').trigger('keydown', {
					keyCode: 9,
					key: 'Tab',
					code: 'Tab',
				})

				await wrapper.vm.$nextTick()
			}

			async function triggerShiftTab() {
				modal.find(':focus').trigger('keydown', {
					keyCode: 9,
					key: 'Tab',
					code: 'Tab',
					shiftKey: true,
				})

				await wrapper.vm.$nextTick()
			}

			const modal = wrapper.getComponent(VCard)

			const firstBtn = modal.find<HTMLElement>('#first')
			const link = modal.find<HTMLElement>('#link')
			await modal.vm.$nextTick()

			firstBtn.element.focus()
			await modal.vm.$nextTick()

			await triggerShiftTab()
			expect(link.element).toEqual(document.activeElement)

			await triggerTab()
			expect(firstBtn.element).toEqual(document.activeElement)
		})
	})

	describe('event emissions', () => {
		it('emits an event when close button is clicked', async () => {
			const wrapper = mount(DialogBox, {
				props: {
					modelValue: true,
				},
				global: {
					plugins: [vuetify],
				},
			})

			const modal = wrapper.getComponent(VCard)

			expect(wrapper.vm.$data.dialog).toBe(true)

			const closeBtn = modal.find('button')
			await closeBtn.trigger('click')

			expect(wrapper.emitted('update:modelValue')).toBeTruthy()
		})

		it('emits a cancel event when cancel button is clicked', async () => {
			const wrapper = mount(DialogBox, {
				props: defaultProps,
				global: {
					plugins: [vuetify],
				},
			})

			const modal = wrapper.getComponent(VCard)

			const cancelBtn = modal.find('.vd-dialog-box-actions-ctn button')
			await cancelBtn.trigger('click')

			expect(wrapper.emitted('cancel')).toBeTruthy()
		})

		it('emits a confirm event when confirm button is clicked', async () => {
			const wrapper = mount(DialogBox, {
				props: defaultProps,
				global: {
					plugins: [vuetify],
				},
			})

			const modal = wrapper.getComponent(VCard)

			const confirmBtn = modal.find('[data-test-id="confirm-btn"]')
			await confirmBtn.trigger('click')

			expect(wrapper.emitted('confirm')).toBeTruthy()
		})
	})

	describe('Test methods', () => {
		it('getSelectableElements if this.$refs.dialogContent.$el is undefined', async () => {
			const wrapper = shallowMount(DialogBox, {
				props: defaultProps,
				global: {
					plugins: [vuetify],
				},
			})
			const result = await wrapper.vm.getSelectableElements()
			expect(result).toEqual([])
		})
	})
})
