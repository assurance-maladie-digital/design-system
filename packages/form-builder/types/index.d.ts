import { PluginFunction } from 'vue';

// Types for the library usage
// eg. Vue.use(FormBuilder, options)

export interface FormBuilderOptions {}

export interface FormBuilderPlugin {
	install: PluginFunction<FormBuilderOptions>;
}

declare const FormBuilder: FormBuilderPlugin;
export default FormBuilder;
