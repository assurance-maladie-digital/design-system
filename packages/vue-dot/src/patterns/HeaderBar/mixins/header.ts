import Vue from 'vue';
import Component from 'vue-class-component';
import locales from '../locales';

const Props = Vue.extend({
	props: {
		loggedIn: {
			type: Boolean,
			default: false
		},
		firstname: {
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
		lastname: {
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

	actionsList!: [string];
	navigationList!: [string];

	locales: object = locales;

	clickMenu() {
		this.$emit('click:menu');
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
