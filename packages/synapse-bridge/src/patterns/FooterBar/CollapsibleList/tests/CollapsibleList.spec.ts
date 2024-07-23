import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import { vuetify } from '@tests/unit/setup';
import CollapsibleList from '../';

describe('collapsibleList', () => {
  it('renders correctly', async () => {
    const wrapper = mount(CollapsibleList, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        listTitle: 'Santé',
        items: [
          {
            text: 'Mon espace santé',
            href: 'https://www.ameli.fr/assure/sante/mon-espace-sante',
          },
          {
            text: 'Accomplir les bons gestes',
            href: 'https://www.ameli.fr/assure/sante/bons-gestes',
          },
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders correctly with in mobile mode', () => {
    const wrapper = mount(CollapsibleList, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        listTitle: 'Santé',
        items: [
          {
            text: 'Mon espace santé',
            href: 'https://www.ameli.fr/assure/sante/mon-espace-sante',
          },
          {
            text: 'Accomplir les bons gestes',
            href: 'https://www.ameli.fr/assure/sante/bons-gestes',
          },
        ],
      },
    });

    wrapper.vm.$vuetify.display.name = 'xs';
    wrapper.vm.$vuetify.display.smAndDown = true;

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('render correctly without items', () => {
    const wrapper = mount(CollapsibleList, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        listTitle: 'Santé',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
