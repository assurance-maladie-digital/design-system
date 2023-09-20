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

<script lang="ts" setup>
import BackBtn from "../../src/elements/BackBtn";
import { mdiChevronLeft } from "@mdi/js";

const backIcon = mdiChevronLeft;
</script>
