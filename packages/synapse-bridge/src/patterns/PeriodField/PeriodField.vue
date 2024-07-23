<script lang="ts">
import { defineComponent } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { mdiCalendar } from '@mdi/js';

interface PeriodFieldData {
  date: Date[] | null
  calendarIcon: string
}

export default defineComponent({
  name: 'PeriodField',
  components: {
    VueDatePicker,
  },
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    noPrependIcon: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: 'DD/MM/YYYY',
    },
    label: {
      type: String,
      default: '',
    },
    dateFormat: {
      type: String,
      default: 'dd/MM/yyyy',
    },
    dateFormatReturn: {
      type: String,
      default: 'dd/MM/yyyy',
    },
  },
  emits: ['update:modelValue'],
  data(): PeriodFieldData {
    return {
      date: null,
      calendarIcon: mdiCalendar,
    };
  },
  computed: {
    formattedDateFormat() {
      return this.dateFormat.replace(/D/g, 'd').replace(/Y/g, 'y');
    },
    formattedDateFormatReturn() {
      return this.dateFormatReturn.replace(/D/g, 'd').replace(/Y/g, 'y');
    },
    prependIconValue() {
      if (!this.appendIcon && !this.noPrependIcon) {
        return this.calendarIcon;
      }
      return undefined;
    },
    getVariant() {
      return this.disabled || this.noPrependIcon || !this.outlined
        ? 'underlined'
        : 'outlined';
    },
  },
  watch: {
    date(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('update:modelValue', newVal);
      }
    },
  },
});
</script>

<template>
  <div class="vd-form-input">
    <VueDatePicker
      v-model="date"
      range
      :format="formattedDateFormat"
      :model-type="formattedDateFormatReturn"
      locale="fr"
      :clearable="false"
      :disabled="disabled"
      auto-apply
    >
      <template #dp-input="{ value }">
        <v-text-field
          :model-value="value"
          color="primary"
          hide-details
          readonly
          :variant="getVariant"
          :disabled="disabled"
          :aria-describedby="label"
          :label="label"
          :prepend-icon="!outlined ? prependIconValue : undefined"
          :append-inner-icon="
            outlined || appendIcon ? calendarIcon : undefined
          "
        />
      </template>
    </VueDatePicker>
  </div>
</template>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

//surcharge du style du composant VueDatePicker
:deep(.dp__button) {
	display: none !important;
}

.week-ends {
	background-color: #b3b4b5;
	border-radius: 57%;
	width: 39px;
	height: 25px;
	display: inline-block;
	padding-bottom: 1px;
}

:deep(.dp__today) {
	border: 1px solid #2eb5e4 !important;
	color: #2eb5e4;
	border-radius: 50%;
}

:deep(.dp__active_date) {
	background: #2eb5e4;
	color: var(--dp-primary-text-color);
	border-radius: 50%;
}

:deep(.dp__date_hover:hover) {
	border-radius: 50%;
}

:deep(.v-field__input) {
	min-height: 0;
}

:deep(.v-input__details) {
	padding-top: 0;
}

:deep(.v-field--variant-outlined .v-field__outline__notch::after) {
	height: calc(100% - 1px);
}

:deep(
		.v-field--variant-outlined.v-field--focused
			.v-field__outline__notch::after
	) {
	height: calc(100% - 2px);
}

:deep(.dp__clear_icon) {
	top: 35%;
	right: 4%;
	border-radius: 50%;
	height: 20px;
	min-width: 16px;
}

:deep(.vd-append-icon ~ .dp__clear_icon) {
	right: 35px !important;
}

:deep(.v-input__prepend > .v-icon) {
	opacity: 1 !important;
}

.warning-style {
	:deep(.v-icon) {
		color: #f0b323 !important;
	}

	:deep(.v-label) {
		color: #f0b323 !important;
	}

	:deep(.v-messages) {
		color: #f0b323 !important;
	}

	:deep(.v-text-field) {
		border-color: #f0b323 !important;
	}

	:deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
		color: #f0b323;
	}
}

.error-style {
	:deep(.v-icon) {
		color: #b33f2e !important;
	}

	:deep(.v-label) {
		color: #b33f2e !important;
	}

	:deep(.v-messages) {
		color: #b33f2e !important;
	}

	:deep(.v-text-field) {
		border-color: #b33f2e !important;
	}

	:deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
		color: #b33f2e;
	}
}
</style>
