<template>
	<BackBtn />

	<VSheet color="primary" class="pa-4">
		<BackBtn dark />
	</VSheet>

	<BackBtn>
		<template #default> Précédent </template>

		<template #icon>
			<VIcon>
				{{ backIcon }}
			</VIcon>
		</template>
	</BackBtn>
</template>

<script lang="ts">
import BackBtn from "@/elements/BackBtn/BackBtn.vue";
import { defineComponent } from "vue";

import { mdiChevronLeft } from "@mdi/js";

export default defineComponent({
	components: {
		BackBtn,
	},
	data() {
		return {
			backIcon: mdiChevronLeft,
		};
	},
});
</script>
