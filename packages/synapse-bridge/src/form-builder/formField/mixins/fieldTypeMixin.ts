interface FieldTypeMixinThis {
	field: {
		type: string;
	};
}
export default {
	props: {
		field: {
			type: Object,
			required: true
		}
	},
	computed: {
		fieldType(this: FieldTypeMixinThis) {
			switch (this.field.type) {
				case "nir":
					return "NirField";
				case "textarea":
					return "VTextarea";
				case "text":
					return "VTextField";
				case "number":
					return "VInput";
				case "password":
					return "PasswordField";
				case "date":
					return "DatePicker";
				case "period":
					return "PeriodField";
				case "range":
					return "RangeField";
				case "select":
					return "VSelect";
				case "choiceButton":
					return "SelectBtnField";
				default:
					return "VTextField";
			}
		},
	},
};
