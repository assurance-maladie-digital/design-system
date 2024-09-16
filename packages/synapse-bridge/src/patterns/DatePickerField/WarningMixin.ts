import { type ValidationRule } from '@/main'
import {
	type ComponentPublicInstance,
	defineComponent,
	type PropType,
} from 'vue'
import { VTextField } from 'vuetify/lib/components/index.mjs'

export default defineComponent({
	props: {
		warningRules: {
			type: Array as PropType<ValidationRule[]>,
			default: () => [],
		},
	},
	data: () => ({
		warningMessages: [] as string[],
	}),
	watch: {
		internalValue(newValue) {
			this.validateWarning(newValue)
		},
	},
	methods: {
		validateWarning(value: string) {
			const textField = this.$refs[
				'text-field'
			] as ComponentPublicInstance<typeof VTextField>
			if (!textField) return
			if (!textField.isValid) {
				this.warningMessages = []
			}

			this.warningMessages = this.warningRules
				.map((rule) => rule(value))
				.filter((result) => typeof result === 'string')
		},
	},
})
