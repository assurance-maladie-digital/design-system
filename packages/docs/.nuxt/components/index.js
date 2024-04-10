export const DocA11yCriteria = () => import('../../src/components/global/DocA11yCriteria.vue' /* webpackChunkName: "components/doc-a11y-criteria" */).then(c => wrapFunctional(c.default || c))
export const DocAlert = () => import('../../src/components/global/DocAlert.vue' /* webpackChunkName: "components/doc-alert" */).then(c => wrapFunctional(c.default || c))
export const DocAlertBridge = () => import('../../src/components/global/DocAlertBridge.vue' /* webpackChunkName: "components/doc-alert-bridge" */).then(c => wrapFunctional(c.default || c))
export const DocApi = () => import('../../src/components/global/DocApi.vue' /* webpackChunkName: "components/doc-api" */).then(c => wrapFunctional(c.default || c))
export const DocApiTable = () => import('../../src/components/global/DocApiTable.vue' /* webpackChunkName: "components/doc-api-table" */).then(c => wrapFunctional(c.default || c))
export const DocColorPalette = () => import('../../src/components/global/DocColorPalette.vue' /* webpackChunkName: "components/doc-color-palette" */).then(c => wrapFunctional(c.default || c))
export const DocComponentOverview = () => import('../../src/components/global/DocComponentOverview.vue' /* webpackChunkName: "components/doc-component-overview" */).then(c => wrapFunctional(c.default || c))
export const DocComponentOverviewBtn = () => import('../../src/components/global/DocComponentOverviewBtn.vue' /* webpackChunkName: "components/doc-component-overview-btn" */).then(c => wrapFunctional(c.default || c))
export const DocDesignPrinciplesPage = () => import('../../src/components/global/DocDesignPrinciplesPage.vue' /* webpackChunkName: "components/doc-design-principles-page" */).then(c => wrapFunctional(c.default || c))
export const DocEcoDesign = () => import('../../src/components/global/DocEcoDesign.vue' /* webpackChunkName: "components/doc-eco-design" */).then(c => wrapFunctional(c.default || c))
export const DocExample = () => import('../../src/components/global/DocExample.vue' /* webpackChunkName: "components/doc-example" */).then(c => wrapFunctional(c.default || c))
export const DocExpansionPanel = () => import('../../src/components/global/DocExpansionPanel.vue' /* webpackChunkName: "components/doc-expansion-panel" */).then(c => wrapFunctional(c.default || c))
export const DocExpansionPanels = () => import('../../src/components/global/DocExpansionPanels.vue' /* webpackChunkName: "components/doc-expansion-panels" */).then(c => wrapFunctional(c.default || c))
export const DocHomePageContributors = () => import('../../src/components/global/DocHomePageContributors.vue' /* webpackChunkName: "components/doc-home-page-contributors" */).then(c => wrapFunctional(c.default || c))
export const DocHomePageHeader = () => import('../../src/components/global/DocHomePageHeader.vue' /* webpackChunkName: "components/doc-home-page-header" */).then(c => wrapFunctional(c.default || c))
export const DocHomePageList = () => import('../../src/components/global/DocHomePageList.vue' /* webpackChunkName: "components/doc-home-page-list" */).then(c => wrapFunctional(c.default || c))
export const DocHomePageTeam = () => import('../../src/components/global/DocHomePageTeam.vue' /* webpackChunkName: "components/doc-home-page-team" */).then(c => wrapFunctional(c.default || c))
export const DocImage = () => import('../../src/components/global/DocImage.vue' /* webpackChunkName: "components/doc-image" */).then(c => wrapFunctional(c.default || c))
export const DocMarkup = () => import('../../src/components/global/DocMarkup.vue' /* webpackChunkName: "components/doc-markup" */).then(c => wrapFunctional(c.default || c))
export const DocMaterialLoader = () => import('../../src/components/global/DocMaterialLoader.vue' /* webpackChunkName: "components/doc-material-loader" */).then(c => wrapFunctional(c.default || c))
export const DocReleaseNotes = () => import('../../src/components/global/DocReleaseNotes.vue' /* webpackChunkName: "components/doc-release-notes" */).then(c => wrapFunctional(c.default || c))
export const DocRoadmap = () => import('../../src/components/global/DocRoadmap.vue' /* webpackChunkName: "components/doc-roadmap" */).then(c => wrapFunctional(c.default || c))
export const DocTabItem = () => import('../../src/components/global/DocTabItem.vue' /* webpackChunkName: "components/doc-tab-item" */).then(c => wrapFunctional(c.default || c))
export const DocTabs = () => import('../../src/components/global/DocTabs.vue' /* webpackChunkName: "components/doc-tabs" */).then(c => wrapFunctional(c.default || c))
export const DocTemplateOverview = () => import('../../src/components/global/DocTemplateOverview.vue' /* webpackChunkName: "components/doc-template-overview" */).then(c => wrapFunctional(c.default || c))
export const DocUsage = () => import('../../src/components/global/DocUsage.vue' /* webpackChunkName: "components/doc-usage" */).then(c => wrapFunctional(c.default || c))
export const ExampleError = () => import('../../src/components/global/ExampleError.vue' /* webpackChunkName: "components/example-error" */).then(c => wrapFunctional(c.default || c))
export const VueFile = () => import('../../src/components/global/VueFile.vue' /* webpackChunkName: "components/vue-file" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
