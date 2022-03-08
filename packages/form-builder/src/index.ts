import { registerAllComponents } from './registerAllComponents';

import { VueConstructor } from 'vue';
import { FormBuilderPlugin } from '../types';

const FormBuilder: FormBuilderPlugin = {
	install(Vue: VueConstructor) {
		registerAllComponents(Vue);
	}
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(FormBuilder);
}

export default FormBuilder;
