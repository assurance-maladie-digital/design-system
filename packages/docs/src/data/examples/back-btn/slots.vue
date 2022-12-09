<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<BackBtn>
			<template #default>
				Précédent
			</template>

			<template #icon>
				<VIcon>
					{{ backIcon }}
				</VIcon>
			</template>
		</BackBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiChevronLeft } from '@mdi/js';

	@Component
	export default class BackBtnSlots extends Vue {
		backIcon = mdiChevronLeft;
	}
</script>
