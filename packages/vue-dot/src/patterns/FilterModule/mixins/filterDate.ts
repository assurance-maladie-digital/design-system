import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

const Props = Vue.extend({
	props: {

	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class FilterDate extends MixinsDeclaration {

}
