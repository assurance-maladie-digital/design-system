import { wrapFunctional } from './utils'

export { default as DocAlert } from '../../src/components/global/DocAlert.vue'
export { default as DocApi } from '../../src/components/global/DocApi.vue'
export { default as DocApiTable } from '../../src/components/global/DocApiTable.vue'
export { default as DocContentExplorer } from '../../src/components/global/DocContentExplorer.vue'
export { default as DocExample } from '../../src/components/global/DocExample.vue'
export { default as DocImage } from '../../src/components/global/DocImage.vue'
export { default as DocMarkup } from '../../src/components/global/DocMarkup.vue'
export { default as DocMaterialLoader } from '../../src/components/global/DocMaterialLoader.vue'
export { default as DocTabItem } from '../../src/components/global/DocTabItem.vue'
export { default as DocTabs } from '../../src/components/global/DocTabs.vue'
export { default as DocUsage } from '../../src/components/global/DocUsage.vue'
export { default as VueFile } from '../../src/components/global/VueFile.vue'
export { default as DocHeader } from '../../src/components/DocHeader.vue'
export { default as DocSearchField } from '../../src/components/DocSearchField.vue'
export { default as ContentExplorer } from '../../src/components/content-explorer/ContentExplorer.vue'
export { default as DrawerDocDrawer } from '../../src/components/drawer/DocDrawer.vue'
export { default as DrawerDocDrawerList } from '../../src/components/drawer/DocDrawerList.vue'
export { default as DrawerDocDrawerListGroup } from '../../src/components/drawer/DocDrawerListGroup.vue'
export { default as DrawerDocDrawerListItem } from '../../src/components/drawer/DocDrawerListItem.vue'
export { default as CodeDocCodeBlock } from '../../src/components/code/DocCodeBlock.vue'
export { default as CodeDocMarkdown } from '../../src/components/code/DocMarkdown.vue'
export { default as PageDocGithubLink } from '../../src/components/page/DocGithubLink.vue'
export { default as PageDocPageInfo } from '../../src/components/page/DocPageInfo.vue'
export { default as PageDocPrevNext } from '../../src/components/page/DocPrevNext.vue'
export { default as PageDocTooltipBtn } from '../../src/components/page/DocTooltipBtn.vue'

export const LazyDocAlert = import('../../src/components/global/DocAlert.vue' /* webpackChunkName: "components/doc-alert" */).then(c => wrapFunctional(c.default || c))
export const LazyDocApi = import('../../src/components/global/DocApi.vue' /* webpackChunkName: "components/doc-api" */).then(c => wrapFunctional(c.default || c))
export const LazyDocApiTable = import('../../src/components/global/DocApiTable.vue' /* webpackChunkName: "components/doc-api-table" */).then(c => wrapFunctional(c.default || c))
export const LazyDocContentExplorer = import('../../src/components/global/DocContentExplorer.vue' /* webpackChunkName: "components/doc-content-explorer" */).then(c => wrapFunctional(c.default || c))
export const LazyDocExample = import('../../src/components/global/DocExample.vue' /* webpackChunkName: "components/doc-example" */).then(c => wrapFunctional(c.default || c))
export const LazyDocImage = import('../../src/components/global/DocImage.vue' /* webpackChunkName: "components/doc-image" */).then(c => wrapFunctional(c.default || c))
export const LazyDocMarkup = import('../../src/components/global/DocMarkup.vue' /* webpackChunkName: "components/doc-markup" */).then(c => wrapFunctional(c.default || c))
export const LazyDocMaterialLoader = import('../../src/components/global/DocMaterialLoader.vue' /* webpackChunkName: "components/doc-material-loader" */).then(c => wrapFunctional(c.default || c))
export const LazyDocTabItem = import('../../src/components/global/DocTabItem.vue' /* webpackChunkName: "components/doc-tab-item" */).then(c => wrapFunctional(c.default || c))
export const LazyDocTabs = import('../../src/components/global/DocTabs.vue' /* webpackChunkName: "components/doc-tabs" */).then(c => wrapFunctional(c.default || c))
export const LazyDocUsage = import('../../src/components/global/DocUsage.vue' /* webpackChunkName: "components/doc-usage" */).then(c => wrapFunctional(c.default || c))
export const LazyVueFile = import('../../src/components/global/VueFile.vue' /* webpackChunkName: "components/vue-file" */).then(c => wrapFunctional(c.default || c))
export const LazyDocHeader = import('../../src/components/DocHeader.vue' /* webpackChunkName: "components/doc-header" */).then(c => wrapFunctional(c.default || c))
export const LazyDocSearchField = import('../../src/components/DocSearchField.vue' /* webpackChunkName: "components/doc-search-field" */).then(c => wrapFunctional(c.default || c))
export const LazyContentExplorer = import('../../src/components/content-explorer/ContentExplorer.vue' /* webpackChunkName: "components/content-explorer" */).then(c => wrapFunctional(c.default || c))
export const LazyDrawerDocDrawer = import('../../src/components/drawer/DocDrawer.vue' /* webpackChunkName: "components/drawer-doc-drawer" */).then(c => wrapFunctional(c.default || c))
export const LazyDrawerDocDrawerList = import('../../src/components/drawer/DocDrawerList.vue' /* webpackChunkName: "components/drawer-doc-drawer-list" */).then(c => wrapFunctional(c.default || c))
export const LazyDrawerDocDrawerListGroup = import('../../src/components/drawer/DocDrawerListGroup.vue' /* webpackChunkName: "components/drawer-doc-drawer-list-group" */).then(c => wrapFunctional(c.default || c))
export const LazyDrawerDocDrawerListItem = import('../../src/components/drawer/DocDrawerListItem.vue' /* webpackChunkName: "components/drawer-doc-drawer-list-item" */).then(c => wrapFunctional(c.default || c))
export const LazyCodeDocCodeBlock = import('../../src/components/code/DocCodeBlock.vue' /* webpackChunkName: "components/code-doc-code-block" */).then(c => wrapFunctional(c.default || c))
export const LazyCodeDocMarkdown = import('../../src/components/code/DocMarkdown.vue' /* webpackChunkName: "components/code-doc-markdown" */).then(c => wrapFunctional(c.default || c))
export const LazyPageDocGithubLink = import('../../src/components/page/DocGithubLink.vue' /* webpackChunkName: "components/page-doc-github-link" */).then(c => wrapFunctional(c.default || c))
export const LazyPageDocPageInfo = import('../../src/components/page/DocPageInfo.vue' /* webpackChunkName: "components/page-doc-page-info" */).then(c => wrapFunctional(c.default || c))
export const LazyPageDocPrevNext = import('../../src/components/page/DocPrevNext.vue' /* webpackChunkName: "components/page-doc-prev-next" */).then(c => wrapFunctional(c.default || c))
export const LazyPageDocTooltipBtn = import('../../src/components/page/DocTooltipBtn.vue' /* webpackChunkName: "components/page-doc-tooltip-btn" */).then(c => wrapFunctional(c.default || c))
