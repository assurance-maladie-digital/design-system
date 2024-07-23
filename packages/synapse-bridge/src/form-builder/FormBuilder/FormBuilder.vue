<script lang="ts">
import { defineComponent } from 'vue';

import FormFieldList from '../FormFieldList';
import FormBuilderCore from './mixins/formBuilderCore';

export default defineComponent({
  components: {
    FormFieldList,
  },
  mixins: [FormBuilderCore],
  emits: ['refresh'],
});
</script>

<template>
  <div class="vd-form-builder w-100">
    <FormFieldList
      v-for="(section, sectionName) in modelValue"
      :key="`section-${sectionName}`"
      :description="section.description"
      :list-title="section.title"
      :model-value="section.questions"
      @refresh="$emit('refresh')"
      @update:model-value="sectionUpdated($event, String(sectionName))"
    >
      <!--
			Pass down the scoped slots
			@see https://github.com/vuejs/vue/pull/7765 for the official discussion
			and https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component
			/52823029#52823029
			for the source of this solution
		-->
      <template v-for="slot in Object.keys($slots)" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </FormFieldList>
  </div>
</template>

<style lang="scss" scoped>
.vd-field-list + .vd-field-list {
	padding-top: 46px;
	border-top: solid 1px rgba(0, 0, 0, 0.12);

	&.theme--dark {
		border-color: rgba(255, 255, 255, 0.12);
	}
}
</style>
