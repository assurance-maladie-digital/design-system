import Vue from 'vue';
import Component from 'vue-class-component';

import { mdiAccount } from '@mdi/js';

import locales from '../HeaderMenu/locales';

const Props = Vue.extend({
	props: {
		loggedIn: {
			type: Boolean,
			default: false
		},
		firstName: {
			type: String,
			default: null
		},
		hideUserIcon: {
			type: Boolean,
			default: false
		},
		accountText: {
			type: String,
			default: locales.account
		},
		lastName: {
			type: String,
			default: null
		},
		info: {
			type: String,
			default: null
		},
		actionsList: {
			type: Array,
			default: () => []
		},
		navigationList: {
			type: Array,
			default: () => []
		},
		back: {
			type: Boolean,
			default: false
		},
		breadcrumb: {
			type: String,
			default: null
		},
		searchable: {
			type: Boolean,
			default: false
		}
	}
});

/** Add birthdate prop: select year, month then day */
@Component<Header>({})

export default class Header extends Props {

	locales = locales;

	actionsList!: string[];
	navigationList!: string[];

	avatarIcon = mdiAccount;

	clickMenu() {
		this.$emit('click:menu');
	}

	menuChanged(value: boolean) {
		this.$emit('menu:change', value);
	}

	clickAction(index: number) {
		this.$emit('click:action', index);
	}

	clickLogout() {
		this.$emit('click:logout');
	}

	emitBack() {
		this.$emit('back');
	}

	emitSearch(text: string) {
		this.$emit('search', text);
	}
}
