import { PluginFunction } from 'vue';

// Types for the library usage
// eg. Vue.use(FormBuilder, options)

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface FormBuilderOptions {}

export interface FormBuilderPlugin {
	install: PluginFunction<FormBuilderOptions>;
}

declare const FormBuilder: FormBuilderPlugin;
export default FormBuilder;
