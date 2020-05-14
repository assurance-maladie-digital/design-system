<template>
	<CustomIcon
		size="50px"
	>
		<VIcon
			size="50px"
			color="red"
		>
			{{ mdiStar }}
		</VIcon>
	</CustomIcon>
</template>

<script>

	import { mdiStar } from '@mdi/js';
	export default {
		data() {
			return {
				mdiStar: mdiStar
			};
		}
	};
</script>
