<template>
	<div>
		<VItemGroup
			:value="choiceValue"
			v-bind="field.metadata"
		>
			<template v-for="(item, index) in field.items">
				<VItem
					#default="{ active }"
					:key="index"
					:value="item.value"
				>
					<VBtn
						block
						elevation="0"
						height="40"
						class="mb-2 text-none"
						:outlined="!active"
						color="accent"
						@click="toggleItem(item, active)"
					>
						<span class="body-1">
							{{ item.text }}
						</span>

						<VSpacer />

						<VScrollXTransition>
							<VIcon v-if="active">
								{{ checkIcon }}
							</VIcon>
						</VScrollXTransition>
					</VBtn>
				</VItem>
			</template>
		</VItemGroup>
		<p
			v-if="field && field.metadata && field.metadata.hint"
			class="mx-4 mb-0 v-messages"
			:class="this.$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
		>
			{{ field.metadata.hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import ChoiceField from '../mixins/choiceField';

	/** Form field to select a value from a list */
	@Component
	export default class ChoiceButtonField extends ChoiceField {
		checkIcon = mdiCheck;
	}
</script>
