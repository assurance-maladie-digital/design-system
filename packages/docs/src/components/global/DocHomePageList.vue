<template>
	<div class="doc-home-page-list">
		<VRow>
			<VCol
				v-for="(item, index) in items"
				:key="index"
				cols="12"
				sm="6"
				class="m-2 p-2 v-col-auto background"
			>
				<DocTextHighlight
					:title="item.title"
					:content="item.content"
				/>
			</VCol>
		</VRow>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocTextHighlight from '../page/DocTextHighlight.vue';

	import { homePageListItems } from '../../data/homePageListItems';

	@Component({
		components: {
			DocTextHighlight
		}
	})
	export default class DocHomePageList extends Vue {
		items = homePageListItems;
	}
</script>


<style lang="scss" scoped>
.background {
	background-color: rgba(#0c419a, 0.1);
	border: 3px solid white;
	border-radius: 10px;
}
</style>
