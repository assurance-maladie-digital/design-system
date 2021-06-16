import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  DocAlert: () => import('../../src/components/global/DocAlert.vue' /* webpackChunkName: "components/doc-alert" */).then(c => wrapFunctional(c.default || c)),
  DocApi: () => import('../../src/components/global/DocApi.vue' /* webpackChunkName: "components/doc-api" */).then(c => wrapFunctional(c.default || c)),
  DocApiTable: () => import('../../src/components/global/DocApiTable.vue' /* webpackChunkName: "components/doc-api-table" */).then(c => wrapFunctional(c.default || c)),
  DocContentExplorer: () => import('../../src/components/global/DocContentExplorer.vue' /* webpackChunkName: "components/doc-content-explorer" */).then(c => wrapFunctional(c.default || c)),
  DocExample: () => import('../../src/components/global/DocExample.vue' /* webpackChunkName: "components/doc-example" */).then(c => wrapFunctional(c.default || c)),
  DocImage: () => import('../../src/components/global/DocImage.vue' /* webpackChunkName: "components/doc-image" */).then(c => wrapFunctional(c.default || c)),
  DocMarkup: () => import('../../src/components/global/DocMarkup.vue' /* webpackChunkName: "components/doc-markup" */).then(c => wrapFunctional(c.default || c)),
  DocMaterialLoader: () => import('../../src/components/global/DocMaterialLoader.vue' /* webpackChunkName: "components/doc-material-loader" */).then(c => wrapFunctional(c.default || c)),
  DocTabItem: () => import('../../src/components/global/DocTabItem.vue' /* webpackChunkName: "components/doc-tab-item" */).then(c => wrapFunctional(c.default || c)),
  DocTabs: () => import('../../src/components/global/DocTabs.vue' /* webpackChunkName: "components/doc-tabs" */).then(c => wrapFunctional(c.default || c)),
  DocUsage: () => import('../../src/components/global/DocUsage.vue' /* webpackChunkName: "components/doc-usage" */).then(c => wrapFunctional(c.default || c)),
  VueFile: () => import('../../src/components/global/VueFile.vue' /* webpackChunkName: "components/vue-file" */).then(c => wrapFunctional(c.default || c)),
  DocHeader: () => import('../../src/components/DocHeader.vue' /* webpackChunkName: "components/doc-header" */).then(c => wrapFunctional(c.default || c)),
  DocSearchField: () => import('../../src/components/DocSearchField.vue' /* webpackChunkName: "components/doc-search-field" */).then(c => wrapFunctional(c.default || c)),
  CodeDocCodeBlock: () => import('../../src/components/code/DocCodeBlock.vue' /* webpackChunkName: "components/code-doc-code-block" */).then(c => wrapFunctional(c.default || c)),
  CodeDocMarkdown: () => import('../../src/components/code/DocMarkdown.vue' /* webpackChunkName: "components/code-doc-markdown" */).then(c => wrapFunctional(c.default || c)),
  DrawerDocDrawer: () => import('../../src/components/drawer/DocDrawer.vue' /* webpackChunkName: "components/drawer-doc-drawer" */).then(c => wrapFunctional(c.default || c)),
  DrawerDocDrawerList: () => import('../../src/components/drawer/DocDrawerList.vue' /* webpackChunkName: "components/drawer-doc-drawer-list" */).then(c => wrapFunctional(c.default || c)),
  DrawerDocDrawerListGroup: () => import('../../src/components/drawer/DocDrawerListGroup.vue' /* webpackChunkName: "components/drawer-doc-drawer-list-group" */).then(c => wrapFunctional(c.default || c)),
  DrawerDocDrawerListItem: () => import('../../src/components/drawer/DocDrawerListItem.vue' /* webpackChunkName: "components/drawer-doc-drawer-list-item" */).then(c => wrapFunctional(c.default || c)),
  ContentExplorer: () => import('../../src/components/content-explorer/ContentExplorer.vue' /* webpackChunkName: "components/content-explorer" */).then(c => wrapFunctional(c.default || c)),
  PageDocGithubLink: () => import('../../src/components/page/DocGithubLink.vue' /* webpackChunkName: "components/page-doc-github-link" */).then(c => wrapFunctional(c.default || c)),
  PageDocPageInfo: () => import('../../src/components/page/DocPageInfo.vue' /* webpackChunkName: "components/page-doc-page-info" */).then(c => wrapFunctional(c.default || c)),
  PageDocPrevNext: () => import('../../src/components/page/DocPrevNext.vue' /* webpackChunkName: "components/page-doc-prev-next" */).then(c => wrapFunctional(c.default || c)),
  PageDocTooltipBtn: () => import('../../src/components/page/DocTooltipBtn.vue' /* webpackChunkName: "components/page-doc-tooltip-btn" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
