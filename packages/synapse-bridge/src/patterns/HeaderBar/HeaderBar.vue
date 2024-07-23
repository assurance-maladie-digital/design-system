<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, ref } from 'vue';
import { Scroll } from 'vuetify/directives';
import { ThemeEnum } from '../../constants/enums/ThemeEnum';
import HeaderMenuBtn from './HeaderMenuBtn/HeaderMenuBtn.vue';
import HeaderNavigationBar from './HeaderNavigationBar/HeaderNavigationBar.vue';
import HeaderNavigationDrawer from './HeaderNavigationDrawer';
import type { NavigationItem } from './types';
import { config } from './config.ts';
import LogoBrandSection from '@/elements/LogoBrandSection';
import { customizable } from '@/mixins/customizable';
import type { Next } from '@/types';

export default defineComponent({
  components: {
    LogoBrandSection,
    HeaderMenuBtn,
    HeaderNavigationBar,
    HeaderNavigationDrawer,
  },
  directives: {
    Scroll,
  },
  mixins: [customizable(config)],
  inheritAttrs: false,
  props: {
    theme: {
      type: [String, Number] as any,
      default: ThemeEnum.DEFAULT,
      validator: (value: any) => {
        return Object.values(ThemeEnum).includes(value);
      },
    },
    serviceTitle: {
      type: String,
      default: undefined,
    },
    serviceSubTitle: {
      type: String,
      default: undefined,
    },
    navigationItems: {
      type: Array as PropType<NavigationItem[]>,
      default: undefined,
    },
    innerWidth: {
      type: String,
      default: '100%',
    },
    homeLink: {
      type: [String, Boolean, Object] as PropType<Next>,
      default: undefined,
    },
    homeHref: {
      type: String,
      default: undefined,
    },
    homeArialabel: {
      type: String,
      default: undefined,
    },
    showNavBarMenuBtn: {
      type: Boolean,
      default: false,
    },
    mobileVersion: {
      type: Boolean,
      default: false,
    },
    miniVersion: {
      type: Boolean,
      default: false,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    showStickyNavBar: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      drawer: false,
      tab: 0,
      scrolled: false,
      appBarRef: ref<HTMLElement | null>(null),
      hideScrollbar: false,
    };
  },
  computed: {
    isMobileVersion(): boolean {
      return (
        this.mobileVersion
        || this.miniVersion
        || this.$vuetify.display.name === 'xs'
      );
    },
    isMiniVersion(): boolean {
      return this.miniVersion || (this.sticky && this.scrolled);
    },
    targetSelector(): string | null {
      return this.target ? `#${this.target}` : null;
    },
    spacingClass(): string {
      return this.sticky && this.scrolled
        ? this.isMobileVersion
          ? 'px-4 py-1'
          : 'px-14 py-1'
        : this.isMobileVersion
          ? 'pa-4'
          : 'px-14 py-7';
    },
    contentSheetHeight(): number {
      return this.isMiniVersion
        ? this.isMobileVersion
          ? 52
          : 72
        : this.isMobileVersion
          ? 72
          : 120;
    },
    fullHeight(): number {
      const height = this.isMobileVersion ? 72 : 120;
      return this.showNavigationBar ? height + 48 : height;
    },
    height(): number {
      return this.showNavigationBar
        ? this.contentSheetHeight + 48
        : this.contentSheetHeight;
    },
    mainContentMargin(): string {
      return this.sticky ? `margin-top: ${this.fullHeight}px` : '';
    },
    hasNavigationItems(): boolean {
      return Boolean(
        this.navigationItems || this.$slots['navigation-drawer-content'],
      );
    },
    showHeaderMenuBtn(): boolean {
      const hasNavigation = Boolean(
        this.navigationItems || this.$slots['navigation-drawer'],
      );
      return (
        !this.showNavBarMenuBtn && this.isMobileVersion && hasNavigation
      );
    },
    showNavigationBar(): boolean {
      const isStickyNavBar
				= !this.scrolled || (this.scrolled && this.showStickyNavBar);
      return (
        isStickyNavBar
        && (Boolean(this.$slots['navigation-bar-content'])
        || (!this.showHeaderMenuBtn && this.hasNavigationItems))
      );
    },
    showSpacer(): boolean {
      return Boolean(this.$slots.default) || this.isMobileVersion;
    },
  },
  watch: {
    drawer(value: boolean): void {
      if (value) {
        document.querySelector('html')?.classList.add('overflow-hidden');
      }
 else {
        document
          .querySelector('html')
          ?.classList.remove('overflow-hidden');
      }
    },
  },
  methods: {
    updateDrawer(value: boolean): void {
      this.drawer = value;
    },
    onScroll(event: MouseEvent): void {
      if (!this.sticky) {
        return;
      }
      const target = event.currentTarget as HTMLElement | Window;
      const scrollPosition = target === window ? window.scrollY : (target as HTMLElement).scrollTop;
      this.scrolled = this.sticky && scrollPosition > this.height;
    },
  },
});
</script>

<template>
  <VLayout>
    <div :style="mainContentMargin" class="vd-header-bar-container w-100">
      <VToolbar
        v-scroll:[targetSelector]="onScroll"
        :absolute="sticky"
        :elevation="8"
        :height="height"
        class="vd-header-bar"
        role="banner"
        v-bind="{ ...options.appBar, ...$attrs }"
      >
        <VSheet
          :class="spacingClass"
          :height="contentSheetHeight"
          class="vd-header-bar-content d-flex justify-center"
          v-bind="options.contentSheet"
        >
          <VSheet :width="innerWidth" v-bind="options.innerSheet">
            <slot name="logo">
              <LogoBrandSection
                :home-arialabel="homeArialabel"
                :home-href="homeHref"
                :home-link="homeLink"
                :mobile-version="isMobileVersion"
                :reduce-logo="isMiniVersion"
                :service-sub-title="serviceSubTitle"
                :service-title="serviceTitle"
                :theme="theme"
                v-bind="options.brandSection"
              >
                <template #brand-content>
                  <slot name="brand-content" />
                </template>

                <slot name="secondary-logo" />
              </LogoBrandSection>
            </slot>

            <VSpacer v-if="showSpacer" v-bind="options.spacer" />

            <slot />

            <HeaderMenuBtn
              v-if="showHeaderMenuBtn"
              :vuetify-options="options.menuBtn"
              @click="updateDrawer(!drawer)"
            />
          </VSheet>
        </VSheet>

        <VFadeTransition v-if="showNavigationBar">
          <HeaderNavigationBar
            :drawer="drawer"
            :inner-width="innerWidth"
            :items="navigationItems"
            :mobile-version="isMobileVersion"
            :show-menu-btn="showNavBarMenuBtn"
            :tab="tab"
            :theme="theme"
            :vuetify-options="options.navigationBar"
            @update:tab="tab = $event"
            @update:drawer="drawer = $event"
          >
            <template #navigation-bar-prepend>
              <slot name="navigation-bar-prepend" />
            </template>

            <slot name="navigation-bar-content" />

            <template #navigation-bar-secondary-content>
              <slot name="navigation-bar-secondary-content" />
            </template>
          </HeaderNavigationBar>
        </VFadeTransition>
      </VToolbar>

      <slot name="navigation-drawer" v-bind="{ drawer, updateDrawer }">
        <HeaderNavigationDrawer
          v-model="drawer"
          :items="navigationItems"
          :mobile-version="isMobileVersion"
          :tab="tab"
          :theme="theme"
          :vuetify-options="options.navigationDrawer"
          @change="updateDrawer(!drawer)"
          @update:tab="tab = $event"
        >
          <template #navigation-drawer-prepend>
            <slot name="navigation-drawer-prepend" />
          </template>

          <slot name="navigation-drawer-content" />

          <template #navigation-drawer-append>
            <slot name="navigation-drawer-append" />
          </template>
        </HeaderNavigationDrawer>
      </slot>
    </div>
  </VLayout>
</template>

<style lang="scss" scoped>
.v-layout {
	display: contents !important;
}

.vd-header-bar {
	z-index: 1;
}

.vd-header-bar,
.vd-header-bar-content {
	transition: 0.1s cubic-bezier(0.4, 0, 0.6, 1) !important;
}

.vd-header-bar :deep(.v-toolbar__content) {
	display: block;
	padding: 0;
}

.vd-header-bar :deep(.v-tabs) {
	width: 100%;
	--v-tabs-height: 48px !important;
}

.vd-header-bar :deep(.v-tab) {
	text-transform: uppercase;
	letter-spacing: 0.0892857143em;

	&.v-tab:hover {
		background: rgba($color: #fff, $alpha: 0.02);
	}

	&.v-tab--selected:hover {
		background: rgba($color: #fff, $alpha: 0.1);
	}

	&.v-tab:not(.v-tab--selected) {
		color: hsla(0, 0%, 100%, 0.6);
	}
}

.vd-header-menu-btn :deep() {
	.v-btn__content {
		flex-direction: column;
	}

	.v-icon {
		margin: 0 !important;
	}
}

:deep(.v-toolbar--absolute) {
	position: fixed;
	top: 0;
	left: 0;
}

:deep(.v-toolbar--rounded) {
	border-radius: 20px 0;

	.v-toolbar__content {
		border-radius: 20px 0;
	}
}

:deep(.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active)) {
	opacity: 0.6;
}

:deep(
		.v-navigation-drawer
			> .v-navigation-drawer__content
			.v-tab:not(.v-slide-group-item--active)
	) {
	opacity: 0.6;
}

:deep(.v-navigation-drawer__scrim) {
	position: fixed;
	opacity: 0.46;
}
</style>
