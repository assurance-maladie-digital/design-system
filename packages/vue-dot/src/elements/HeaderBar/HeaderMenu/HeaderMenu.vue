<template>
	<div class="d-flex align-center d-md-none">
		<VAppBarNavIcon
			v-bind="options.homeBtn"
			@click.stop="drawer = !drawer"
		/>
		<VNavigationDrawer
			v-model="drawer"
			v-bind="options.menuConfig"
			:width="responsiveMenu"
		>
			<VSheet v-bind="options.menuHeader">
				<h4	class="ml-5">
					{{ menuTitle }}
				</h4>

				<VBtn
					v-bind="options.closeBtn"
					@click="drawer = !drawer"
				>
					<VIcon>
						{{ closeMenuIcon }}
					</VIcon>
				</VBtn>
			</VSheet>

			<VList
				nav
				dense
			>
				<VListItemGroup	v-model="group">
					<VListItem
						v-for="(item, index) in navBar.menu"
						:key="index"
						:to="item.href"
					>
						<RouterLink
							class="vd-header-menu-navigation-item text-uppercase py-3 pl-2"
						>
							<VListItem-title>
								{{ item.label }}
							</VListItem-title>
						</RouterLink>
					</VListItem>
				</VListItemGroup>
			</VList>
		</VNavigationDrawer>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	import { NavBar, ServiceItem } from '../types';

	import { mdiChevronLeft } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			navBar: {
				type: Object as PropType<NavBar>,
				default: null
			},
			service: {
				type: Object as PropType<ServiceItem>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/** HeaderMenu is a component that display a navigation menu into the HeaderBar for responsive version */
	@Component<HeaderMenu>({
		watch: {
			group() {
				this.drawer = false;
			}
		}
	})
	export default class HeaderMenu extends MixinsDeclaration {
		locales = locales;

		closeMenuIcon = mdiChevronLeft;

		drawer = false;

		group = null;

		get hasService(): boolean {
			return Boolean(this.service !== null);
		}

		get menuTitle(): string | undefined {
			return this.hasService ? this.service.name : locales.menu;
		}

		get responsiveMenu(): string {
			return this.$vuetify.breakpoint.name === 'xs' ? '100vw' : '305';
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header {
			&-menu {
				&-navigation {
					&-item {
						color: white;
					}
				}

				&-container {
					background-color: #007fad;
					height: 100%;
				}

				&-title {
					background-color: #007fad;
					color: white;
					border-bottom: white 2px solid;
				}
			}
		}
	}
</style>
