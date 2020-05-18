<template>
	<DocSection
		no-divider
		title="DialogBox"
	>
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Show list of button actions
		</h2>

		<VBtn
			color="primary"
			class="ml-6 px-5"
			@click="dialog=true"
		>
			Show dialog
		</VBtn>

		<DialogBox
			:dialog.sync="dialog"
			:size="size"
			@cancel="dialog=false"
			@validate="dialog=false"
		>
			<template #content>
				<div>This it's a simple dialog with a text ...</div>
			</template>
		</DialogBox>
		<div class="mg" />
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Select different size of the dialog
		</h2>
		<v-radio-group v-model="size">
			<v-radio
				label="x-small"
				value="x-small"
			/>

			<v-radio
				label="small"
				value="small"
			/>

			<v-radio
				label="medium"
				value="medium"
			/>

			<v-radio
				label="large"
				value="large"
			/>

			<v-radio
				label="x-large"
				value="x-large"
			/>
		</v-radio-group>
	</DocSection>
</template>
<style lang="scss">
	.mg {
		margin-top: 20px
	}
</style>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component<DialogBoxEx>({
		watch: {
			size: {
				handler(value, oldValue) {
					if ('870' !== value) {
						this.size = value;
						this.dialog = true;
					}
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class DialogBoxEx extends Vue {
		dialog = false;
		size = '870';
	}
</script>
