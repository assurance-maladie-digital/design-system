import {PropType} from "vue";

interface FieldTypeMixinThis {
	field: {
		type: string;
		value: any;
		maxLength: number;
	};
}

export default {
	props: {
		field: {
			type: Object as PropType<FieldTypeMixinThis['field']>,
			required: true
		}
	},
	watch: {
		'field.value'(this: FieldTypeMixinThis, newValue: any, oldValue: any) {
			if (this.field.type === 'number') {
				if (isNaN(Number(newValue))) {
					this.field.value = oldValue;
				}
				if (newValue.toString().length > this.field.maxLength) {
					this.field.value = oldValue;
				}
			}
		},
	},
	computed: {
		fieldType(this: FieldTypeMixinThis) {
			const typeMap: Record<string, string> = {
				"nir": "NirField",
				"textarea": "VTextarea",
				"text": "VTextField",
				"number": "VTextField",
				"password": "PasswordField",
				"date": "DatePicker",
				"period": "PeriodField",
				"range": "RangeField",
				"select": "VSelect",
				"choiceButton": "SelectBtnField",
			};
			return typeMap[this.field.type] || "VTextField";
		},
		fieldRules(this: FieldTypeMixinThis) {
			if (this.field.type === 'number') {
				return [
					(v:any) => !isNaN(parseFloat(v)),
					(v:any) => (v && v.toString().length <= this.field.maxLength) || `Input must be less than ${this.field.maxLength} characters`,
				];
			}
			return [];
		},
	},
};
