<template>
	<DataListItem
		:label="item.label"
	>
		<template #icon>
			<VIcon color="red">
				{{ item.icon }}
			</VIcon>
		</template>
		<template #value>
			<p class="red--text">
				{{ item.value }}
			</p>
		</template>
		<template #action>
			<VMenu
				offset-y
				origin="top"
				transition="slide-y-transition"
				nudge-top="-10"
			>
				<template #activator="{on}">
					<VBtn v-on="on">
						{{ item.action }}
					</VBtn>
				</template>
				<VList
					class="py-0"
				>
					<VListItem @click="clickedAction">
						<VListItemContent>
							Modifier
						</VListItemContent>
					</VListItem>
				</VList>
			</VMenu>
		</template>
	</DataListItem>
</template>

<script>
	import DataListItem from '../../../../../vue-dot/src/elements/DataList/DataListItem/DataListItem.vue';
	import { mdiAccount } from '@mdi/js';
	export default {
		components: {
			DataListItem
		},
		data() {
			return {
				item: {
					label: 'Prénom',
					value: 'Paul',
					action: 'menu',
					icon: mdiAccount
				}
			};
		},
		methods: {
			clickedAction() {
				alert('vous avez click sur l\'action \'Modifier\'');
			}
		}
	};
</script>
