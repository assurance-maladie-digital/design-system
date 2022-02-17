## Non publié

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **ErrorPage:** Affichage de l'ID de support ([#1724](https://github.com/assurance-maladie-digital/design-system/pull/1724)) ([a362e5d](https://github.com/assurance-maladie-digital/design-system/commit/a362e5d28791e7c53608bc7bf7b27cbcc0003594))
  - **FooterBar:** Transmission des attributs au composant ([#1733](https://github.com/assurance-maladie-digital/design-system/pull/1733)) ([0e0f810](https://github.com/assurance-maladie-digital/design-system/commit/0e0f8101e2c68838b2195887bcbef1233ab3be84))
  - **FooterWrapper/FooterBtn:** Ajout de logs de dépréciation ([#1767](https://github.com/assurance-maladie-digital/design-system/pull/1767)) ([432b93a](https://github.com/assurance-maladie-digital/design-system/commit/432b93a95f0f10ea8e9635532ace6235cfa0074e))
  - **types:** Ajout de l'interface `VForm` ([#1769](https://github.com/assurance-maladie-digital/design-system/pull/1769)) ([68ec7ee](https://github.com/assurance-maladie-digital/design-system/commit/68ec7ee6f67b5577bf16948a0ea75445dc29fe2c))
  - **notification:** Ajout de l'interface `NotificationModule` ([#1771](https://github.com/assurance-maladie-digital/design-system/pull/1771)) ([418732a](https://github.com/assurance-maladie-digital/design-system/commit/418732ab41c44f412eac476405a5c3604264599f))
  - **FranceConnectBtn:** Ajout d'une transition sur la couleur de fond ([#1779](https://github.com/assurance-maladie-digital/design-system/pull/1779)) ([8086b3d](https://github.com/assurance-maladie-digital/design-system/commit/8086b3d21c48746dc0312697aa25bcd28a2bdbd3))

- 🐛 **Corrections de bugs**
  - **NotificationBar:** Correction de l'affichage sur les écrans mobiles ([#1675](https://github.com/assurance-maladie-digital/design-system/pull/1675)) ([b18214c](https://github.com/assurance-maladie-digital/design-system/commit/b18214ce5646382b281adb62fe96896b588f27df))
  - **DatePicker:** Correction de l'affichage du menu avec la prop `text-field-activator` ([#1678](https://github.com/assurance-maladie-digital/design-system/pull/1678)) ([f50dad2](https://github.com/assurance-maladie-digital/design-system/commit/f50dad2c031536e2720fdf3d6b8bd3b5ecd5f1db))
  - **TableToolbar:** Correction de l'affichage sur les écrans mobiles ([#1682](https://github.com/assurance-maladie-digital/design-system/pull/1682)) ([4475614](https://github.com/assurance-maladie-digital/design-system/commit/44756148642db190bffd59e93f6c9bd0c808116a))
  - **FooterBar/HeaderBarMenuBtn:** Ajout de l'attribut `inheritAttrs` manquant ([#1735](https://github.com/assurance-maladie-digital/design-system/pull/1735)) ([d535df6](https://github.com/assurance-maladie-digital/design-system/commit/d535df68eb40f6ec3e456af3fe21d69c7ca3af64))
  - **getThemeIcon:** Correction d'une faute d'orthographe dans un commentaire ([#1736](https://github.com/assurance-maladie-digital/design-system/pull/1736)) ([f3576c6](https://github.com/assurance-maladie-digital/design-system/commit/f3576c614b167b52fc9d2aa5f1bfc348a71348e5))
  - **rules:** Correction du message d'erreur par défaut de la règle de validation `notAfterToday` ([#1747](https://github.com/assurance-maladie-digital/design-system/pull/1747)) ([20b96d4](https://github.com/assurance-maladie-digital/design-system/commit/20b96d44e774c255aee6635e062aeb1055644e7f))
  - **styles:** Correction de la hauteur de ligne dans les champs select ([#1764](https://github.com/assurance-maladie-digital/design-system/pull/1764)) ([742fbfe](https://github.com/assurance-maladie-digital/design-system/commit/742fbfe0ad39da96e71463e1ef04fac5a75f2925))
  - **FooterBar:** Correction des styles non appliqués au contenu des slots ([#1765](https://github.com/assurance-maladie-digital/design-system/pull/1765)) ([e58cea2](https://github.com/assurance-maladie-digital/design-system/commit/e58cea231b189e670ad66804faf63a6e859951fa))
  - **FooterBar:** Correction de l'affichage sur les écrans mobiles ([#1766](https://github.com/assurance-maladie-digital/design-system/pull/1766)) ([c91cf1e](https://github.com/assurance-maladie-digital/design-system/commit/c91cf1eae407864ed5236e276a9bda862f02d03b))
  - **FooterBar:** Correction de l'affichage sur les écrans mobiles ([#1768](https://github.com/assurance-maladie-digital/design-system/pull/1768)) ([4951ca7](https://github.com/assurance-maladie-digital/design-system/commit/4951ca7cd79acf3c7c48e79ac53519942024716c))

- ♻️ **Refactoring**
  - **HeaderBar:** Refonte du bouton pour activer le menu sur les écrans mobiles ([#1726](https://github.com/assurance-maladie-digital/design-system/pull/1726)) ([50e0938](https://github.com/assurance-maladie-digital/design-system/commit/50e09381f38102e42ab321a3915607efbd111ebe))
  - **HeaderBar:** Ajout des props `show-nav-bar-menu-btn` et `mobile-version` ([#1728](https://github.com/assurance-maladie-digital/design-system/pull/1728)) ([9997290](https://github.com/assurance-maladie-digital/design-system/commit/999729041137d56a73383195f873ef39c82954f9))
  - **FranceConnectBtn:** Renommage de la prop `icon-text` en `label` ([#1760](https://github.com/assurance-maladie-digital/design-system/pull/1760)) ([db19524](https://github.com/assurance-maladie-digital/design-system/commit/db1952423d4ef2037f9b0fea8a5b309276c0a520))

- 🎨 **Qualité de code**
  - **ErrorPage:** Utilisation d'une constante `MixinsDeclaration` ([#1742](https://github.com/assurance-maladie-digital/design-system/pull/1742)) ([bc54ed5](https://github.com/assurance-maladie-digital/design-system/commit/bc54ed516262d2b281803249c5085c2b0eb7e9e2))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction du hook de qualité manquant ([#1725](https://github.com/assurance-maladie-digital/design-system/pull/1725)) ([d06aca0](https://github.com/assurance-maladie-digital/design-system/commit/d06aca0703cdacf61da6ce5958f168f9615a00f8))

- ♻️ **Refactoring**
  - **template:** Utilisation de TypeScript pour la configuration de Jest ([#1684](https://github.com/assurance-maladie-digital/design-system/pull/1684)) ([189652b](https://github.com/assurance-maladie-digital/design-system/commit/189652b335249b359d8c50af3b646c5a0cd30a77))
  - **template:** Utilisation de l'interface `NotificationModule` ([#1772](https://github.com/assurance-maladie-digital/design-system/pull/1772)) ([9596934](https://github.com/assurance-maladie-digital/design-system/commit/95969345b2c554809d3a2e49ba609b911e7025da))

- ✅ **Tests**
  - **template:** Ajout d'un test sur `AppHeader` ([#1683](https://github.com/assurance-maladie-digital/design-system/pull/1683)) ([e18f57c](https://github.com/assurance-maladie-digital/design-system/commit/e18f57cb69c0214fe73ee6dd381a92efd623bbc5))

- 🎨 **Qualité de code**
  - **template:** Utilisation d'une constante `MixinsDeclaration` dans le composant `Links` ([#1743](https://github.com/assurance-maladie-digital/design-system/pull/1743)) ([a69b466](https://github.com/assurance-maladie-digital/design-system/commit/a69b466f060d6acda7011902baf15e7abc3875e6))

### FormBuilder

- 🐛 **Corrections de bugs**
  - **RangeField:** Correction de l'affichage sur les écrans mobiles et suppression du `VForm` à l'intérieur du champ ([#1680](https://github.com/assurance-maladie-digital/design-system/pull/1680)) ([923d65c](https://github.com/assurance-maladie-digital/design-system/commit/923d65cc5ff0ff79487aa3a285ccffa60b4c3484))
  - **PeriodField:** Correction de l'affichage sur les écrans mobiles ([#1681](https://github.com/assurance-maladie-digital/design-system/pull/1681)) ([ae36361](https://github.com/assurance-maladie-digital/design-system/commit/ae36361bd4e045184262e97deedb03e8db16135c))

- ♻️ **Refactoring**
  - **FormField:** Utilisation de la couleur primaire au lieu de la couleur d'accent ([#1691](https://github.com/assurance-maladie-digital/design-system/pull/1691)) ([4c9c89a](https://github.com/assurance-maladie-digital/design-system/commit/4c9c89a106cf2ada43a4e8d9444f99fed2718768))
  - **RangeField:** Renommage de la propriété interne `isMobile` en `mobileVersion` ([#1741](https://github.com/assurance-maladie-digital/design-system/pull/1741)) ([9c6fed0](https://github.com/assurance-maladie-digital/design-system/commit/9c6fed021aefb9952c6923860e959a36a129668c))

### Documentation

- ✨ **Nouvelles fonctionnalités**
  - **components:** Affichage du langage dans le composant `DocUsage` ([#1763](https://github.com/assurance-maladie-digital/design-system/pull/1763)) ([f00b4a2](https://github.com/assurance-maladie-digital/design-system/commit/f00b4a226b8c8b4a6a1ee6ebb672660565c91099))

- 🐛 **Corrections de bugs**
  - **global:** Correction du décalage pour les ancres HTML ([#1712](https://github.com/assurance-maladie-digital/design-system/pull/1712)) ([28fa1a8](https://github.com/assurance-maladie-digital/design-system/commit/28fa1a864c2fe88d39c1a8126440a309c7070adf))
  - **introduction:** Correction de l'affichage de la date de dernière publication ([#1715](https://github.com/assurance-maladie-digital/design-system/pull/1715)) ([29922af](https://github.com/assurance-maladie-digital/design-system/commit/29922af2786eee6be12c5a17a30637102b408e62))
  - **DocTabs:** Correction de la largeur des onglets verticaux ([#1739](https://github.com/assurance-maladie-digital/design-system/pull/1739)) ([01a3f60](https://github.com/assurance-maladie-digital/design-system/commit/01a3f605045de12d2a8702710cd56275b2bcc640))
  - **global:** Correction de la hauteur minimale des pages ([#1755](https://github.com/assurance-maladie-digital/design-system/pull/1755)) ([7381ff6](https://github.com/assurance-maladie-digital/design-system/commit/7381ff698d495e16f1373870de7c5f16ba7b2216))
  - **global:** Correction des règles typographiques ([#1777](https://github.com/assurance-maladie-digital/design-system/pull/1777)) ([8be7413](https://github.com/assurance-maladie-digital/design-system/commit/8be7413e463f9afd4b4c0d6f235d029f659a9ff9))

- ♻️ **Refactoring**
  - **accessibility:** Désactivation du tri sur la colonne "Critère" ([#1713](https://github.com/assurance-maladie-digital/design-system/pull/1713)) ([a943d5e](https://github.com/assurance-maladie-digital/design-system/commit/a943d5eb540c704f2a47564d0dfa810cb3e2354d))
  - **global:** Mise à jour de l'espacement des pages ([#1717](https://github.com/assurance-maladie-digital/design-system/pull/1717)) ([1d00d07](https://github.com/assurance-maladie-digital/design-system/commit/1d00d07e30c946105dea9377882c1cd482a8fff9))
  - **global:** Utilisation du composant `PageContainer` ([#1718](https://github.com/assurance-maladie-digital/design-system/pull/1718)) ([3ed928b](https://github.com/assurance-maladie-digital/design-system/commit/3ed928b19854c454bb825e9bcf5fc09136a1b70f))
  - **introduction:** Refonte du layout de la page ([#1719](https://github.com/assurance-maladie-digital/design-system/pull/1719)) ([79bcaed](https://github.com/assurance-maladie-digital/design-system/commit/79bcaed6e58e9548a7b27867083ea1c50a7a00db))
  - **roadmap:** Mise à jour du lien pour créer une nouvelle demande et de la taille du bouton de demande ([#1720](https://github.com/assurance-maladie-digital/design-system/pull/1720)) ([07a053d](https://github.com/assurance-maladie-digital/design-system/commit/07a053da2a8c1134fff3651e60fdbc1b9472dd0d))
  - **components:** Suppression de la couleur de fond au survol des lignes ([#1750](https://github.com/assurance-maladie-digital/design-system/pull/1750)) ([4ed747b](https://github.com/assurance-maladie-digital/design-system/commit/4ed747baee69f72b0838da0479b4743763b4bf57))
  - **global:** Mise à jour des styles du composant `DocExpansionPanels` ([#1751](https://github.com/assurance-maladie-digital/design-system/pull/1751)) ([a784552](https://github.com/assurance-maladie-digital/design-system/commit/a784552e34a6f6ad557efadf4654b97146f1c1f1))
  - **global:** Mise à jour des couleurs de fond ([#1752](https://github.com/assurance-maladie-digital/design-system/pull/1752)) ([51924e7](https://github.com/assurance-maladie-digital/design-system/commit/51924e7770ac9c06572d73e5fd27e24fa1403acc))
  - **components:** Mise à jour des styles du composant `DocUsage` ([#1761](https://github.com/assurance-maladie-digital/design-system/pull/1761)) ([e29061c](https://github.com/assurance-maladie-digital/design-system/commit/e29061c7cad6e74bba6591a3559b7051a122a937))
  - **global:** Mise à jour des couleurs du thème pour le code ([#1762](https://github.com/assurance-maladie-digital/design-system/pull/1762)) ([4429fa0](https://github.com/assurance-maladie-digital/design-system/commit/4429fa0cc38e32a2445b94163d77f47c500bac33))
  - **global:** Utilisation de l'interface `NotificationModule` ([#1773](https://github.com/assurance-maladie-digital/design-system/pull/1773)) ([398bcaf](https://github.com/assurance-maladie-digital/design-system/commit/398bcafde1452f4db7c747d985a0778973ad111a))
  - **global:** Mise à jour des styles et des espacements ([#1776](https://github.com/assurance-maladie-digital/design-system/pull/1776)) ([76f05e5](https://github.com/assurance-maladie-digital/design-system/commit/76f05e57ef29b7fb47c59f10b3651aa4200b1190))

- 🔥 **Suppressions**
  - **introduction:** Suppression du titre secondaire ([#1716](https://github.com/assurance-maladie-digital/design-system/pull/1716)) ([e35d2c7](https://github.com/assurance-maladie-digital/design-system/commit/e35d2c7b401163ad4c6b7e7f7912d67e68f70825))
  - **components:** Suppression des propriétés `VLayout` non utilisées ([#1732](https://github.com/assurance-maladie-digital/design-system/pull/1732)) ([4bc02b5](https://github.com/assurance-maladie-digital/design-system/commit/4bc02b55462b9b0b601a6503c6c02dd2338b7320))

- 📝 **Documentation**
  - **global:** Ajout de la page accessibilité ([#1707](https://github.com/assurance-maladie-digital/design-system/pull/1707)) ([648bccf](https://github.com/assurance-maladie-digital/design-system/commit/648bccfa69d4da8766f5dc53506df94ce881dddd))
  - **explorer:** Mise à jour du contenu du fichier `base.css` ([#1714](https://github.com/assurance-maladie-digital/design-system/pull/1714)) ([d1ac04b](https://github.com/assurance-maladie-digital/design-system/commit/d1ac04b7c3a3182c301cfcd820c6c8bcd3b49335))
  - **components:** Ajout d'informations sur les propriétés transmises aux composants ([#1734](https://github.com/assurance-maladie-digital/design-system/pull/1734)) ([ce8da80](https://github.com/assurance-maladie-digital/design-system/commit/ce8da807adf8d4d10ddbed25f10c5d11c160ef80))
  - **UploadWorkflow:** Mise à jour de la description de la prop `customizable` ([#1740](https://github.com/assurance-maladie-digital/design-system/pull/1740)) ([f792763](https://github.com/assurance-maladie-digital/design-system/commit/f79276328582a2a9d776bad08c8a8c542e026e97))
  - **global:** Utilisation de `text` à la place du langage `bash` pour représenter du texte ([#1753](https://github.com/assurance-maladie-digital/design-system/pull/1753)) ([c882aba](https://github.com/assurance-maladie-digital/design-system/commit/c882aba87563480642b409b86b9213608c5f1c66))
  - **global:** Mise à jour des exemples ([#1754](https://github.com/assurance-maladie-digital/design-system/pull/1754)) ([6f2e5ed](https://github.com/assurance-maladie-digital/design-system/commit/6f2e5ede8e943df6d5ee5191519803ad9bf204c3))
  - **explorer:** Renommage du fichier `jest.config.js` en `jest.config.ts` ([#1759](https://github.com/assurance-maladie-digital/design-system/pull/1759)) ([ee6cb78](https://github.com/assurance-maladie-digital/design-system/commit/ee6cb78eee0fa66a602cc1e5880f6107461fef00))
  - **DatePicker:** Mise à jour de la description de la prop `picker-date` ([#1768](https://github.com/assurance-maladie-digital/design-system/pull/1768)) ([be2dc4a](https://github.com/assurance-maladie-digital/design-system/commit/be2dc4a95a467e50d8d5f7dee71dc987035761a6))
  - **global:** Mise à jour de la page principes de design ([#1770](https://github.com/assurance-maladie-digital/design-system/pull/1770)) ([5f69694](https://github.com/assurance-maladie-digital/design-system/commit/5f69694625d94489d238b5d389f60ccdc2833fad))

### Interne

- 🔧 **Configuration**
  - **ci:** Mise à jour de l'image `cimg/node` vers la `v14.19` ([#1783](https://github.com/assurance-maladie-digital/design-system/pull/1783)) ([8ac88d9](https://github.com/assurance-maladie-digital/design-system/commit/8ac88d9c32992bf4b506cac2b0173bd918d76918))

- ⬆️ **Dépendances**
  - **vue-input-facade:** Mise à jour vers la `v1.3.8` ([#1668](https://github.com/assurance-maladie-digital/design-system/pull/1668)) ([ecea62a](https://github.com/assurance-maladie-digital/design-system/commit/ecea62af4e0ed516d878d95639c874cc2efa1564))
  - **slugify:** Mise à jour vers la `v1.6.5` ([#1674](https://github.com/assurance-maladie-digital/design-system/pull/1674)) ([03bcc4e](https://github.com/assurance-maladie-digital/design-system/commit/03bcc4eb9f36d5f66fd2fde460fbe8cbec43ab07))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v5.9.0` ([#1686](https://github.com/assurance-maladie-digital/design-system/pull/1686)) ([cb60f68](https://github.com/assurance-maladie-digital/design-system/commit/cb60f68b84b677950d3b02e7665505b0d04335aa))
  - **@vue/eslint-config-typescript:** Mise à jour vers la `v10` ([#1687](https://github.com/assurance-maladie-digital/design-system/pull/1687)) ([759cda2](https://github.com/assurance-maladie-digital/design-system/pull/1368/commits/759cda2daf8a5932bc65cf9c3bd28de8d75951c1))
  - **sass-loader:** Mise à jour vers la `v10.2.1` ([#1721](https://github.com/assurance-maladie-digital/design-system/pull/1721)) ([b3de137](https://github.com/assurance-maladie-digital/design-system/commit/b3de137294e3ec36e3c44898e0ff511284bda749))
  - **axios:** Mise à jour vers la `v0.25.0` ([#1729](https://github.com/assurance-maladie-digital/design-system/pull/1729)) ([52d1888](https://github.com/assurance-maladie-digital/design-system/commit/52d1888c3754ebc3ce2955bec69961ff2f6882ad))
  - **typescript:** Mise à jour vers la `v4.5.5` ([#1745](https://github.com/assurance-maladie-digital/design-system/pull/1745)) ([69dcadd](https://github.com/assurance-maladie-digital/design-system/commit/69dcadd41fe7d2d67a30190f83f4cf167de45746))
  - **@netlify/functions:** Mise à jour vers la `v0.11.0` ([#1749](https://github.com/assurance-maladie-digital/design-system/pull/1749)) ([1011879](https://github.com/assurance-maladie-digital/design-system/commit/10118799b65919f921761e40365be3289af6c437))
  - **@babel/core:** Mise à jour vers la `v7.16.12` ([#1757](https://github.com/assurance-maladie-digital/design-system/pull/1757)) ([aa58144](https://github.com/assurance-maladie-digital/design-system/commit/aa5814449003c121cbccfa1aea35c8b8e9ef9fcc))
  - **vuetify:** Mise à jour vers la `v2.6.3` ([#1775](https://github.com/assurance-maladie-digital/design-system/pull/1775)) ([95138d0](https://github.com/assurance-maladie-digital/design-system/commit/95138d0b5d518ffacf6ce1ba6af742a429b3080c))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v37.7.0` ([#1780](https://github.com/assurance-maladie-digital/design-system/pull/1780)) ([0542e49](https://github.com/assurance-maladie-digital/design-system/commit/0542e49fb2bea456a3f845d2ffdfa27dce37fcc2))
  - **lint-staged:** Mise à jour vers la `v12.3.3` ([#1781](https://github.com/assurance-maladie-digital/design-system/pull/1781)) ([bd59bf8](https://github.com/assurance-maladie-digital/design-system/commit/bd59bf8cc804cfd34b4d15e45019419c870955a4))
  - **@types/node:** Mise à jour vers la `v14.18.10` ([#1782](https://github.com/asurance-maladie-digital/design-system/pull/1782)) ([2d4c5b7](https://github.com/assurance-maladie-digital/design-system/commit/2d4c5b70de508b85a13b50ae35ea9a4e940fe474))
  - **core-js:** Mise à jour vers la `v3.21.1` ([#1784](https://github.com/assurance-maladie-digital/design-system/pull/1784))

## v2.2.0

**Version publiée le 14/12/2021.**

Cette version comporte l'ajout du nouveau composant `FooterBar` et de nouvelles fonctionnalités sur le composant `DatePicker` ainsi que des correctifs d'accessibilité et des correctifs sur Vue Dot et Vue Dash.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **HeaderBar:** Ajout d'un lien vers la page d'accueil sur le logo ([#1612](https://github.com/assurance-maladie-digital/design-system/pull/1612)) ([3f26bbd](https://github.com/assurance-maladie-digital/design-system/commit/3f26bbd928de6c591e72a1b614a633758242bf4b))
  - **DatePicker:** Ajout de la gestion du copier/coller ([#1647](https://github.com/assurance-maladie-digital/design-system/pull/1647)) ([4174305](https://github.com/assurance-maladie-digital/design-system/commit/417430545c22eeac16c02b84cb2ef986164a9c7c))
  - **DatePicker:** Ajout de la gestion de l'appui sur la touche *Entrée* ([#1648](https://github.com/assurance-maladie-digital/design-system/pull/1648)) ([#1647](https://github.com/assurance-maladie-digital/design-system/pull/1647)) ([2704190](https://github.com/assurance-maladie-digital/design-system/commit/2704190ed07d208fffcd33fc5d3ea80ea069c0dd))
  - **DatePicker:** Transmission des écouteurs d'événements ([#1649](https://github.com/assurance-maladie-digital/design-system/pull/1649)) ([1f12f67](https://github.com/assurance-maladie-digital/design-system/commit/1f12f67986a3f81c0b8e964d92278eee8cde4707))
  - **FooterBar:** Ajout d'un nouveau composant ([#1652](https://github.com/assurance-maladie-digital/design-system/pull/1652)) ([7c3b521](https://github.com/assurance-maladie-digital/design-system/commit/7c3b5214616f7d2ab61390f322a07c53a2b12126))
  - **DialogBox:** Ajout de la prop `hide-actions` ([#1656](https://github.com/assurance-maladie-digital/design-system/pull/1656)) ([18972d6](https://github.com/assurance-maladie-digital/design-system/commit/18972d60561a4904d9519a3ab1ba6987805fe055))
  - **CustomIcon:** Ajout de la prop `label` ([#1661](https://github.com/assurance-maladie-digital/design-system/pull/1661)) ([34c23b2](https://github.com/assurance-maladie-digital/design-system/commit/34c23b2372c89a861862813e10fb0fece0ad7fb3))

- 🐛 **Corrections de bugs**
  - **Logo:** Correction du logo Risque Pro ([#1641](https://github.com/assurance-maladie-digital/design-system/pull/1641)) ([c678ffa](https://github.com/assurance-maladie-digital/design-system/commit/c678ffa04fe15cd760055c0887486383cdfba729))
  - **DatePicker:** Correction de la valeur mal réinitialisée sans `v-model` ([#1646](https://github.com/assurance-maladie-digital/design-system/pull/1646)) ([bcd5dc9](https://github.com/assurance-maladie-digital/design-system/commit/bcd5dc9779b0542b3d4855d27ae5b475b04e349f))
  - **DatePicker:** Correction d'une erreur lors de la mise à jour de la prop `active-picker` en mode `birthdate` ([#1650](https://github.com/assurance-maladie-digital/design-system/pull/1650)) ([ab7e2df](https://github.com/assurance-maladie-digital/design-system/commit/ab7e2df3c5e572572c5d06d22711aaa1360f6fb9))

- ♿️ **Accessibilité**
  - **HeaderBar:** Ajout d'un label sur le bouton pour fermer le menu de navigation ([#1574](https://github.com/assurance-maladie-digital/design-system/pull/1574)) ([19a0e62](https://github.com/assurance-maladie-digital/design-system/commit/19a0e620a9d940de03be1498a83f24a86752234a))
  - **Logo:** Ajout des attributs `role="img"` et `focusable="false"` ([#1642](https://github.com/assurance-maladie-digital/design-system/pull/1642)) ([631675f](https://github.com/assurance-maladie-digital/design-system/commit/631675f8652355273250835fcd1c225576ca1e11))
  - **HeaderBrandSection:** Ajout des attributs ARIA sur le séparateur vertical ([#1662](https://github.com/assurance-maladie-digital/design-system/pull/1662)) ([f48a600](https://github.com/assurance-maladie-digital/design-system/commit/f48a60048c8a269c5e23d9707826e848d0bcc655))

- ✅ **Tests**
  - **HeaderBrandSection:** Correction d'un warning ([#1643](https://github.com/assurance-maladie-digital/design-system/pull/1643)) ([b66cd26](https://github.com/assurance-maladie-digital/design-system/commit/b66cd26cbdd4d02ce7bda574e766e6e46b559feb))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **config:** Ajout des composants manquants pour le tree-shaking de VueDot ([#1669](https://github.com/assurance-maladie-digital/design-system/pull/1669)) ([26cef1b](https://github.com/assurance-maladie-digital/design-system/commit/26cef1bb271a09a3f6edc8c3126b5bd76e7cfb8d))

- ♻️ **Refactoring**
  - **template:** Mise à jour de la couleur de fond par défaut ([#1645](https://github.com/assurance-maladie-digital/design-system/pull/1645)) ([23389a0](https://github.com/assurance-maladie-digital/design-system/commit/23389a0f66761469a84bdb5654dcb4adc7fa3ffc))
  - **template:** Mise à jour du favicon ([#1655](https://github.com/assurance-maladie-digital/design-system/pull/1655)) ([956bfaa](https://github.com/assurance-maladie-digital/design-system/commit/956bfaa4b9598eb0f034cfe5f4bc8f48646bf484))
  - **template:** Utilisation du composant `FooterBar` ([#1670](https://github.com/assurance-maladie-digital/design-system/pull/1670)) ([9849ae5](https://github.com/assurance-maladie-digital/design-system/commit/9849ae57f781675ed4646d4e3d18a663081f9e9d))

- 🔥 **Suppressions**
  - **template:** Suppression du fichier `logo.svg` non utilisé ([#1638](https://github.com/assurance-maladie-digital/design-system/pull/1638)) ([ce3e0a5](https://github.com/assurance-maladie-digital/design-system/commit/ce3e0a55482c5a48fecc1bbb66882b18e2e9a53e))

- ♿️ **Accessibilité**
  - **template:** Ajout des attributs ARIA sur l'icône de chargement ([#1663](https://github.com/assurance-maladie-digital/design-system/pull/1663)) ([df33bad](https://github.com/assurance-maladie-digital/design-system/commit/df33bad8d3bc054a65a13dd2651c44f1f9c39ee2))

- 🏗 **Architecture**
  - **template:** Déplacement des composants layout dans des dossiers dédiés ([#1657](https://github.com/assurance-maladie-digital/design-system/pull/1657)) ([7b4ebb9](https://github.com/assurance-maladie-digital/design-system/commit/7b4ebb931faf6ffa830f160ca417a43dc4ad9ddf))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#1660](https://github.com/assurance-maladie-digital/design-system/pull/1660)) ([131ba58](https://github.com/assurance-maladie-digital/design-system/commit/131ba58891bd76525649116663b252ba243477aa))

### FormBuilder

- ♻️ **Refactoring**
  - **RangeField:** Inversion des champs min et max et amélioration de l'utilisabilité ([#1575](https://github.com/assurance-maladie-digital/design-system/pull/1575)) ([8df8411](https://github.com/assurance-maladie-digital/design-system/commit/8df8411a7300436c5de84e3058d4511be368c1a9))

### Design Tokens

- ♻️ **Refactoring**
  - **colors:** Mise à jour de la couleur de warning ([#1644](https://github.com/assurance-maladie-digital/design-system/pull/1644)) ([5bed6d6](https://github.com/assurance-maladie-digital/design-system/commit/5bed6d6c9584ee07fb400dd3454c7aca93209bf0))

### Documentation

- ✨ **Nouvelles fonctionnalités**
  - **DocUsage:** Ajout d'une validation sur le format des propriétés ([#1586](https://github.com/assurance-maladie-digital/design-system/pull/1586)) ([ddd7ea9](https://github.com/assurance-maladie-digital/design-system/commit/ddd7ea99b82d68cad87038fd78c57fed5afd049a))

- 🐛 **Corrections de bugs**
  - **DocMarkdown:** Correction de la compilation du HTML ([#1572](https://github.com/assurance-maladie-digital/design-system/pull/1572)) ([a22c280](https://github.com/assurance-maladie-digital/design-system/commit/a22c28031b45dc9a79625101126b90ba149f2725))
  - **global:** Correction des accents dans les ancres HTML ([#1583](https://github.com/assurance-maladie-digital/design-system/pull/1583)) ([3aa2e09](https://github.com/assurance-maladie-digital/design-system/commit/3aa2e096d4c7abc5e59391ccc0ccb860a76671c4))
  - **global:** Correction de fautes d'orthographe dans les composants ([#1636](https://github.com/assurance-maladie-digital/design-system/pull/1636)) ([b44998b](https://github.com/assurance-maladie-digital/design-system/commit/b44998bfe80e3199f335f21f01d5534efba7729e))
  - **global:** Correction des liens externes ([#1637](https://github.com/assurance-maladie-digital/design-system/pull/1637)) ([e2c694b](https://github.com/assurance-maladie-digital/design-system/commit/e2c694b899a8f9e867e037a15cd295724c36ce18))

- ♻️ **Refactoring**
  - **guides:** Refonte de la fonction Netlify `users` ([#1569](https://github.com/assurance-maladie-digital/design-system/pull/1569)) ([c995707](https://github.com/assurance-maladie-digital/design-system/commit/c995707547207b791beda67ebb24d22b7e305874))

- 📝 **Documentation**
  - **CustomIcon:** Ajout de la prop `icon` dans l'API du composant ([#1573](hhttps://github.com/assurance-maladie-digital/design-system/pull/1573)) ([adf6e2a](https://github.com/assurance-maladie-digital/design-system/commit/adf6e2ae8c0eed92aa446515826317d0770e2d2f))
  - **global:** Ajout d'un lien vers la politique de signalement de vulnérabilités ([#1614](hhttps://github.com/assurance-maladie-digital/design-system/pull/1614)) ([a03527a](https://github.com/assurance-maladie-digital/design-system/commit/a03527adce8c337f0b379e327cda96eda71e39b0))
  - **roadmap:** Mise à jour de la page ([#1659](https://github.com/assurance-maladie-digital/design-system/pull/1659)) ([b6b3cdb](https://github.com/assurance-maladie-digital/design-system/commit/b6b3cdbc746176b439e17719eab6ef703fa5fef7))

### Interne

- 🐛 **Corrections de bugs**
  - **build:** Correction des fichiers de tests et de coverage publiés ([#1584](https://github.com/assurance-maladie-digital/design-system/pull/1584)) ([a10e1f2](https://github.com/assurance-maladie-digital/design-system/commit/a10e1f2c8d5919ec0b6ebdb07cf522dcce677e08))

- 🔧 **Configuration**
  - **ci:** Ajout du déploiement sur Netlify ([#1363](https://github.com/assurance-maladie-digital/design-system/pull/1363)) ([c76790d](https://github.com/assurance-maladie-digital/design-system/commit/c76790d2cc567883389be63a2704aa0791670fec))
  - **ci:** Amélioration de la configuration ([#1602](https://github.com/assurance-maladie-digital/design-system/pull/1602)) ([1d38caa](https://github.com/assurance-maladie-digital/design-system/commit/1d38caad160b50221eb7806074effaad74d1f4b1))
  - **ci:** Mise à jour de `codecov` vers la `v3.2.2` ([#1603](https://github.com/assurance-maladie-digital/design-system/pull/1603)) ([b009cc3](https://github.com/assurance-maladie-digital/design-system/commit/b009cc3318edbc847e404840afc4177e5a8e2987))
 - **config:** Mise à jour de la taille maximale du build ([#1653](https://github.com/assurance-maladie-digital/design-system/pull/1653)) ([f8c9356](https://github.com/assurance-maladie-digital/design-system/commit/f8c9356cfc13e502e91890e707f4f85540476376))

- 📝 **Documentation**
  - **README:** Mise à jour du badge npm ([#1582](https://github.com/assurance-maladie-digital/design-system/pull/1582)) ([853bc97](https://github.com/assurance-maladie-digital/design-system/commit/853bc97835c1e11e8be97e834bb2093631504f90))
  - **global:** Ajout du fichier `SECURITY.md` ([#1617](https://github.com/assurance-maladie-digital/design-system/pull/1617)) ([8520f50](https://github.com/assurance-maladie-digital/design-system/commit/8520f507d50ada1d8f26a24f6bf1bc3a4cf11a7c))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#1671](https://github.com/assurance-maladie-digital/design-system/pull/1671)) ([8170c6e](https://github.com/assurance-maladie-digital/design-system/commit/8170c6e528d8161283e0f8b4bfc6032e8d000130))

- ⬆️ **Dépendances**
  - **vue-router:** Mise à jour vers la `v3.5.3` ([#1566](https://github.com/assurance-maladie-digital/design-system/pull/1566)) ([66b0967](https://github.com/assurance-maladie-digital/design-system/commit/66b09670af3565e278526fb76e47d48b2ffb2fb4))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.15` ([#1571](https://github.com/assurance-maladie-digital/design-system/pull/1571)) ([34ea036](https://github.com/assurance-maladie-digital/design-system/commit/34ea036f07a2d9c048bc49f17fca5d7f53b5884e))
  - **@babel/core:** Mise à jour vers la `v7.16.0` ([#1578](https://github.com/assurance-maladie-digital/design-system/pull/1578)) ([1c3b113](https://github.com/assurance-maladie-digital/design-system/commit/1c3b113d8989e33a29e76e909ceb0b702d9533bd))
  - **netlify-cli:** Épinglage de la dépendance à la `v6.14.16` ([#1589](https://github.com/assurance-maladie-digital/design-system/pull/1589)) ([5059e97](https://github.com/assurance-maladie-digital/design-system/commit/5059e97998c07cf706f223b17fb901fc45d10578))
  - **@mdi/js:** Mise à jour vers la `v6.5.95` ([#1605](https://github.com/assurance-maladie-digital/design-system/pull/1605)) ([e2adede](https://github.com/assurance-maladie-digital/design-system/commit/e2adede0531e517a8f1e56809869708a4aa281d6))
  - **@vue/test-utils:** Mise à jour vers la `v1.3.0` ([#1609](https://github.com/assurance-maladie-digital/design-system/pull/1609)) ([a6b98d8](https://github.com/assurance-maladie-digital/design-system/commit/a6b98d894819265f4fe265cc680e53fcf5b078da))
  - **@nuxt/content:** Mise à jour vers la `v1.15.1` ([#1610](https://github.com/assurance-maladie-digital/design-system/pull/1610)) ([6f7c16d](https://github.com/assurance-maladie-digital/design-system/commit/6f7c16d3eb03f0de7ef9eb8a07a33d8a526ee3a5))
  - **@netlify/functions:** Mise à jour vers la `v0.10.0` ([#1611](https://github.com/assurance-maladie-digital/design-system/pull/1611)) ([1f93035](https://github.com/assurance-maladie-digital/design-system/commit/1f93035e1d02e2504e3565b613a59ac8253939ee))
  - **@types/node:** Mise à jour vers la `v14.18.0` ([#1618](https://github.com/assurance-maladie-digital/design-system/pull/1618)) ([2a90676](https://github.com/assurance-maladie-digital/design-system/commit/2a90676514304a87f9b0e43e758ff52ae4e0d4f5))
  - **lint-staged:** Mise à jour vers la `v12.1.2` ([#1619](https://github.com/assurance-maladie-digital/design-system/pull/1619)) ([3760026](https://github.com/assurance-maladie-digital/design-system/commit/376002619fc5604a6e491b5e3e259c80ffbe1a75))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.4.5` ([#1620](https://github.com/assurance-maladie-digital/design-system/pull/1620)) ([8578dc5](https://github.com/assurance-maladie-digital/design-system/commit/8578dc50b29021ace970702059014aada4dc8557))
  - **slugify:** Mise à jour vers la `v1.6.3` ([#1621](https://github.com/assurance-maladie-digital/design-system/pull/1621)) ([5080dd0](https://github.com/assurance-maladie-digital/design-system/commit/5080dd00045a9acb311bdbd9acf77cc8ee2417d0))
  - **core-js:** Mise à jour vers la `v3.19.3` ([#1629](https://github.com/assurance-maladie-digital/design-system/pull/1629)) ([d969bb9](https://github.com/assurance-maladie-digital/design-system/commit/d969bb9c0453b440d8af6fa49a4203e88b6d735e))
  - **vuetify:** Mise à jour vers la `v2.6.1` ([#1631](https://github.com/assurance-maladie-digital/design-system/pull/1631)) ([b99873d](https://github.com/assurance-maladie-digital/design-system/pull/1368/commits/b99873d7abc8d20839bb1e8d0924a1a3973d4a42))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v5.6.0` ([#1639](https://github.com/assurance-maladie-digital/design-system/pull/1639)) ([8bb7804](https://github.com/assurance-maladie-digital/design-system/commit/8bb78048e68324b2135b362faa0cbb9c8ff77387))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v37.2.0` ([#1651](https://github.com/assurance-maladie-digital/design-system/pull/1651)) ([737d8fe](https://github.com/assurance-maladie-digital/design-system/commit/737d8fea9f21407e3193f92a390ada0c2f07611e))
  - **typescript:** Mise à jour vers la `v4.5.3` ([#1654](https://github.com/assurance-maladie-digital/design-system/pull/1654)) ([1929c3f](https://github.com/assurance-maladie-digital/design-system/commit/1929c3f2fff3be816e8c6c497f03de479f57b027))
  - **@nuxtjs/vuetify:** Mise à jour vers la `v1.12.3` ([#1658](https://github.com/assurance-maladie-digital/design-system/pull/1658)) ([76d81dc](https://github.com/assurance-maladie-digital/design-system/commit/76d81dc06b83a5e64d9c2293f2e56263e0833da7))

## v2.1.0

**Version publiée le 27/10/2021.**

Cette version comporte l'ajout des nouveaux composants `Logo` et `HeaderBar`, la documentation des règles de validation ainsi que des correctifs d'accessibilité et des correctifs sur Vue Dot, Vue Dash et le FormBuilder.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **helpers:** Ajout du helper `propValidator` ([#1526](https://github.com/assurance-maladie-digital/design-system/pull/1526)) ([5bc97c3](https://github.com/assurance-maladie-digital/design-system/commit/5bc97c3ed7e8db549f5cd11c2ee561f42c7f885c))
  - **Logo:** Ajout d'un nouveau composant ([#1527](https://github.com/assurance-maladie-digital/design-system/pull/1527)) ([b20e576](https://github.com/assurance-maladie-digital/design-system/commit/b20e576117120a4a5691e23e10c89b1aa6c17352))
  - **HeaderBar:** Ajout d'un nouveau composant ([#1525](https://github.com/assurance-maladie-digital/design-system/pull/1525)) ([6549933](https://github.com/assurance-maladie-digital/design-system/commit/6549933d558d001ab1e4d5fde40f1ac5662e0b76))

- 🐛 **Corrections de bugs**
  - **dependencies:** Correction de la dépendance `deepmerge` manquante ([#1512](https://github.com/assurance-maladie-digital/design-system/pull/1512)) ([1e2dbf0](https://github.com/assurance-maladie-digital/design-system/commit/1e2dbf0b1b393b1520951a30256a646632159c3a))
  - **HeaderBar:** Correction de l'affichage du nom de l'onglet courant ([#1543](https://github.com/assurance-maladie-digital/design-system/pull/1543)) ([2119915](https://github.com/assurance-maladie-digital/design-system/commit/211991567bbfeb3b355c49795b22f44a89fd7c95))
  - **HeaderBar:** Correction du comportement du menu de navigation sur les écrans mobiles ([#1544](https://github.com/assurance-maladie-digital/design-system/pull/1544)) ([f9ed7d4](https://github.com/assurance-maladie-digital/design-system/commit/f9ed7d40d751e005b41f65cc94f12ae01a3c2aff))
  - **HeaderBar:** Correction de l'interface `NavigationItem` ([#1553](https://github.com/assurance-maladie-digital/design-system/pull/1553)) ([56d2650](https://github.com/assurance-maladie-digital/design-system/commit/56d26508b66d5d7b9e123500297b4a53ba54ed7c))
  - **HeaderBar:** Correction du comportement du menu de navigation sur les écrans mobiles ([#1564](https://github.com/assurance-maladie-digital/design-system/pull/1564)) ([35e1be6](https://github.com/assurance-maladie-digital/design-system/commit/35e1be66769e52649a1b60df095cc4390f6cbd31))

- ♻️ **Refactoring**
  - **global:** Utilisation du caractère apostrophe ([#1467](https://github.com/assurance-maladie-digital/design-system/pull/1467)) ([3b12700](https://github.com/assurance-maladie-digital/design-system/commit/3b127009e68426616402ed2ec26efa74bc77403b))
  - **tests:** Mise à jour de la formulation dans les tests ([#1474](https://github.com/assurance-maladie-digital/design-system/pull/1474)) ([a65e2e8](https://github.com/assurance-maladie-digital/design-system/commit/a65e2e89ac2f9d9a642e875283e18b113297a4a4))
  - **rules:** Mise à jour des messages d'erreur des règles de validation ([#1476](https://github.com/assurance-maladie-digital/design-system/pull/1476)) ([d0aed49](https://github.com/assurance-maladie-digital/design-system/commit/d0aed492b7c1861c4411757c07fd7a3019c8e1cd))
  - **isEmailValid:** Mise à jour des données de test ([#1483](https://github.com/assurance-maladie-digital/design-system/pull/1483)) ([acfef7a](https://github.com/assurance-maladie-digital/design-system/commit/acfef7ac369de704d2f795503c7b0ed71500180b))

- ♿️ **Accessibilité**
  - **FranceConnectBtn:** Ajout d'un label sur le bouton et amélioration du style au focus ([#1508](https://github.com/assurance-maladie-digital/design-system/pull/1508)) ([a6115cb](https://github.com/assurance-maladie-digital/design-system/commit/a6115cb21fb55e7561e11f4755aa65beae8f9b73))
  - **NotificationBar:** Ajout de l'attribut ARIA `role` ([#1509](https://github.com/assurance-maladie-digital/design-system/pull/1509)) ([56cf6e7](https://github.com/assurance-maladie-digital/design-system/commit/56cf6e790a052c8bf75bc324b0cf9dccc31d40c6))

- ✅ **Tests**
  - **pickerDate:** Correction d'un warning ([#1518](https://github.com/assurance-maladie-digital/design-system/pull/1518)) ([022a68a](https://github.com/assurance-maladie-digital/design-system/commit/022a68a06ef4d777fc978673f63579c32a51d250))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction de la police italique non chargée ([#1359](https://github.com/assurance-maladie-digital/design-system/pull/1359)) ([d5fc107](https://github.com/assurance-maladie-digital/design-system/commit/d5fc1072719803e85aa35e968fe402cea168d827))
  - **template:** Correction des commandes manquantes dans le fichier `package.json` ([#1475](https://github.com/assurance-maladie-digital/design-system/pull/1475)) ([9431fd2](https://github.com/assurance-maladie-digital/design-system/commit/9431fd214048c12ff4e2886a16634cbf4740080b))
  - **template:** Correction du rapport de couverture de code ([#1479](https://github.com/assurance-maladie-digital/design-system/pull/1479)) ([de0f728](https://github.com/assurance-maladie-digital/design-system/commit/de0f728b70cd56eb31e85f8686aa4d7e2fc7e79c))
  - **template:** Correction de l'utilisation du composant `ErrorPage` lorsque i18n n'est pas installé ([#1480](https://github.com/assurance-maladie-digital/design-system/pull/1480)) ([bfbee3f](https://github.com/assurance-maladie-digital/design-system/commit/bfbee3f645b9c529de954ce29e21afccd9d5e408))
  - **template:** Correction des erreurs de validation HTML ([#1506](https://github.com/assurance-maladie-digital/design-system/pull/1506)) ([ce41668](https://github.com/assurance-maladie-digital/design-system/commit/ce41668c7177bcccb50be2920617f4dc4bfb7ad5))
  - **template:** Correction de la compatibilité avec npm ([#1514](https://github.com/assurance-maladie-digital/design-system/pull/1514)) ([88ae2a2](https://github.com/assurance-maladie-digital/design-system/commit/88ae2a2b93f99d0543b3be6f0322c82ca3d53d0b))

- ♻️ **Refactoring**
  - **template:** Utilisation du caractère apostrophe ([#1472](https://github.com/assurance-maladie-digital/design-system/pull/1472)) ([9ad9f0b](https://github.com/assurance-maladie-digital/design-system/commit/9ad9f0b62ee685b366514adecf1fae360d0ea764))
  - **template:** Mise à jour du message par défaut lorsque JavaScript est désactivé ([#1473](https://github.com/assurance-maladie-digital/design-system/pull/1473)) ([a3f8e49](https://github.com/assurance-maladie-digital/design-system/commit/a3f8e4912a5c610a518beb935212960385185b9a))
  - **template:** Mise à jour des styles du loader ([#1513](https://github.com/assurance-maladie-digital/design-system/pull/1513)) ([262b124](https://github.com/assurance-maladie-digital/design-system/commit/262b1241e600078ee9c6f7eec31ca8b928f18cfc))
  - **config:** Ajout des nouveaux composants pour le tree-shaking de VueDot ([#1545](https://github.com/assurance-maladie-digital/design-system/pull/1545)) ([303a86c](https://github.com/assurance-maladie-digital/design-system/commit/303a86ccd434df5e6b0bad635fd291ff3fa6362f))
  - **template:** Utilisation du composant `HeaderBar` et mise à jour du template ([#1552](https://github.com/assurance-maladie-digital/design-system/pull/1552)) ([8c13acd](https://github.com/assurance-maladie-digital/design-system/commit/8c13acdc77837e3a9cca3c0f7d24a78ce87447bc))

- 🚨 **Lint**
  - **template:** Correction des erreurs de lint lorsque i18n n'est pas installé ([#1478](https://github.com/assurance-maladie-digital/design-system/pull/1478)) ([5e50e1e](https://github.com/assurance-maladie-digital/design-system/commit/5e50e1eb53a45007d0d6bdc513fadf4600acc5d6))
  - **global:** Correction des erreurs de lint ([#1534](https://github.com/assurance-maladie-digital/design-system/pull/1534)) ([b31684f](https://github.com/assurance-maladie-digital/design-system/commit/b31684fadbab0a1e4ae9df71219e617b4ed4962c))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#1550](https://github.com/assurance-maladie-digital/design-system/pull/1550)) ([f07aeee](https://github.com/assurance-maladie-digital/design-system/commit/f07aeee55a1f1698ea2cda4ebe5ef733191d14d4))

### FormBuilder

- 🐛 **Corrections de bugs**
  - **ChoiceSliderField:** Correction des étiquettes qui masquent le titre ([#1537](https://github.com/assurance-maladie-digital/design-system/pull/1537)) ([3a18705](https://github.com/assurance-maladie-digital/design-system/commit/3a18705a7cf3e4d217cf780a47a7110333f99298))
  - **setFormErrors:** Correction de la gestion des erreurs ([#1556](https://github.com/assurance-maladie-digital/design-system/pull/1556)) ([8e90760](https://github.com/assurance-maladie-digital/design-system/commit/8e90760bdaa9fa8716d062d1d240152a4416ded4))
  - **ChoiceButtonField:** Correction des styles ([#1558](https://github.com/assurance-maladie-digital/design-system/pull/1558)) ([aaff7a1](https://github.com/assurance-maladie-digital/design-system/commit/aaff7a1a5417506761649a9d09f09c56bd0c625f))
  - **ChoiceSliderField:** Correction de la taille par défaut des étiquettes ([#1559](https://github.com/assurance-maladie-digital/design-system/pull/1559)) ([26bda12](https://github.com/assurance-maladie-digital/design-system/commit/26bda12b084a964c708973031297b4eb9008e99f))
  - **ChoiceField:** Correction de la gestion des messages d'erreur ([#1560](https://github.com/assurance-maladie-digital/design-system/pull/1560)) ([93911f4](https://github.com/assurance-maladie-digital/design-system/commit/93911f485de622dbb14c67ea1e2e335dc2cf0e32))

- ♻️ **Refactoring**
  - **tests:** Mise à jour de la formulation dans les tests ([#1468](https://github.com/assurance-maladie-digital/design-system/pull/1468)) ([bdaf37b](https://github.com/assurance-maladie-digital/design-system/commit/bdaf37b3d19b5bb36873cec43e81fa22fe62efbd))

### Documentation

- ✨ **Nouvelles fonctionnalités**
  - **global:** Affichage des onglets en mode vertical sur les écrans mobiles ([#1541](https://github.com/assurance-maladie-digital/design-system/pull/1541)) ([3061254](https://github.com/assurance-maladie-digital/design-system/commit/30612541d8d63ceeb528263f4ce3aa827b40efe4))

- 🐛 **Corrections de bugs**
  - **global:** Correction de l'URL des fonctions et du fichier `.env` manquant ([#1418](https://github.com/assurance-maladie-digital/design-system/pull/1418)) ([9e36413](https://github.com/assurance-maladie-digital/design-system/commit/9e36413fbb10527de33d7485e9d54ea7f6b96407))
  - **global:** Correction de l'import d'une icône inexistante ([#1433](https://github.com/assurance-maladie-digital/design-system/pull/1433)) ([65d9d48](https://github.com/assurance-maladie-digital/design-system/commit/65d9d48431a8e7a680a5a0f2aea39d9556682994))
  - **global:** Correction du tri de l'API exemple utilisateurs ([#1451](https://github.com/assurance-maladie-digital/design-system/pull/1451)) ([abee612](https://github.com/assurance-maladie-digital/design-system/commit/abee6128f4e2cee556259a1e8419675c667cc86c))
  - **global:** Correction des erreurs de validation HTML ([#1510](https://github.com/assurance-maladie-digital/design-system/pull/1510)) ([4201916](https://github.com/assurance-maladie-digital/design-system/commit/42019168b8bed4efd623d489f5ced7f617032562))

- ♻️ **Refactoring**
  - **introduction:** Mise à jour des icônes ([#1335](https://github.com/assurance-maladie-digital/design-system/pull/1335)) ([c30816b](https://github.com/assurance-maladie-digital/design-system/commit/c30816b2c989cf7a53b3dfcb1cfcbe6047698cdf))
  - **DocHeader:** Utilisation du composant `HeaderBar` ([#1533](https://github.com/assurance-maladie-digital/design-system/pull/1533)) ([c58a3bd](https://github.com/assurance-maladie-digital/design-system/commit/c58a3bd2559e9aeb50309255b9bf1c6bc31d5f9a))
  - **DocExample:** Désactivation des fonctionnalités tactiles ([#1548](https://github.com/assurance-maladie-digital/design-system/pull/1548)) ([9590e83](https://github.com/assurance-maladie-digital/design-system/commit/9590e83e88fe3afcaad8a4a8aade4f1b84cb47a0))
  - **global:** Désactivation de la transition verticale sur les écrans mobiles ([#1549](https://github.com/assurance-maladie-digital/design-system/pull/1549)) ([2a9e407](https://github.com/assurance-maladie-digital/design-system/commit/2a9e4076b56d1a54c83bd9d35ceebd63aaf86313))

- 🔧 **Configuration**
  - **config:** Modification de la configuration des variables d'environnement ([#1568](https://github.com/assurance-maladie-digital/design-system/pull/1568)) ([d03464c](https://github.com/assurance-maladie-digital/design-system/pull/1368/commits/d03464caec32d7c0aceafb17d1fcd3fb88ae30cc))

- 🔥 **Suppressions**
  - **header:** Suppression de la recherche ne fonctionnant pas ([#1434](https://github.com/assurance-maladie-digital/design-system/pull/1434)) ([d30aa2b](https://github.com/assurance-maladie-digital/design-system/commit/d30aa2b60afccbef78a093612996c08159740bc0))

- 📝 **Documentation**
  - **guides:** Ajout d'un guide pour récupérer des données et les afficher dans un tableau paginé ([#1372](https://github.com/assurance-maladie-digital/design-system/pull/1372)) ([9196706](https://github.com/assurance-maladie-digital/design-system/commit/919670667af005b252898063a64081639930f07f))
  - **contribution:** Mise à jour de la page ([#1396](https://github.com/assurance-maladie-digital/design-system/pull/1396)) ([51b75ca](https://github.com/assurance-maladie-digital/design-system/commit/51b75ca522b176bb54cc0b17a9f3046496de7555))
  - **PaginatedTable:** Ajout de l'interface `DataOptions` dans l'API du composant ([#1401](hhttps://github.com/assurance-maladie-digital/design-system/pull/1401)) ([56f831f](https://github.com/assurance-maladie-digital/design-system/commit/56f831f91cb16e75bc6aab9fb98d22421d8c93bd))
  - **rules:** Documentation de la règle de validation `required` ([#1412](https://github.com/assurance-maladie-digital/design-system/pull/1412)) ([4da4471](https://github.com/assurance-maladie-digital/design-system/commit/4da44715c5e7e8bda7d76d39ec97800efc686465))
  - **rules:** Documentation de la règle de validation `exactLength` ([#1422](https://github.com/assurance-maladie-digital/design-system/pull/1422)) ([e6f6686](https://github.com/assurance-maladie-digital/design-system/commit/e6f668683b4e00f04d4bcff547c962898cc1f20c))
  - **rules:** Documentation de la règle de validation `minLength` ([#1423](https://github.com/assurance-maladie-digital/design-system/pull/1423)) ([faff625](https://github.com/assurance-maladie-digital/design-system/commit/faff62515c0c702a4c63edeeb0cfad5a015c681b))
  - **rules:** Documentation de la règle de validation `maxLength` ([#1431](https://github.com/assurance-maladie-digital/design-system/pull/1431)) ([126aa6e](https://github.com/assurance-maladie-digital/design-system/commit/126aa6eeccc1024e1e304eaa01fc0c38844d29f7))
  - **rules:** Documentation de la règle de validation `email` ([#1432](https://github.com/assurance-maladie-digital/design-system/pull/1432)) ([9e3623d](https://github.com/assurance-maladie-digital/design-system/commit/9e3623dacd4d460d5a168711b7c8015911a81652))
  - **rules:** Documentation de la règle de validation `isDateValid` ([#1447](https://github.com/assurance-maladie-digital/design-system/pull/1447)) ([b961227](https://github.com/assurance-maladie-digital/design-system/commit/b9612272fd9506cddee09ce23515bfce9fd9d172))
  - **rules:** Documentation de la règle de validation `notAfterToday` ([#1448](https://github.com/assurance-maladie-digital/design-system/pull/1448)) ([e2cbe4f](https://github.com/assurance-maladie-digital/design-system/commit/e2cbe4f51787c6d6fd82c2be687b16935d4f790c))
  - **rules:** Documentation de la règle de validation `notBeforeToday` ([#1449](https://github.com/assurance-maladie-digital/design-system/pull/1449)) ([73bcce9](https://github.com/assurance-maladie-digital/design-system/commit/73bcce97f02311484f6ca27428795a7b4e7ca042))
  - **roadmap:** Mise à jour de la page ([#1503](https://github.com/assurance-maladie-digital/design-system/pull/1503)) ([abec127](https://github.com/assurance-maladie-digital/design-system/commit/abec127a3c28c5979089ef67c23ec5bc2b762ae5))
  - **global:** Mise à jour de la formulation dans les exemples ([#1532](https://github.com/assurance-maladie-digital/design-system/pull/1532)) ([5d35651](https://github.com/assurance-maladie-digital/design-system/commit/5d3565124225933ae9c879e5b8b12890c03ef466))
  - **Logo:** Mise à jour de l'API du composant ([#1546](https://github.com/assurance-maladie-digital/design-system/pull/1546)) ([cad497b](https://github.com/assurance-maladie-digital/design-system/commit/cad497b93893bfc6c7047bec948a3abf931c50ea))
  - **HeaderBar:** Mise à jour des exemples d'utilisation ([#1547](https://github.com/assurance-maladie-digital/design-system/pull/1547)) ([dc1c156](https://github.com/assurance-maladie-digital/design-system/commit/dc1c1567aadd71319ae509709eb6eab52c87fb6a))

### Interne

- 🔒 **Sécurité**
  - **remark-html:** Mise à jour vers de la `v13.0.1` vers la `v13.0.2` ([#1421](https://github.com/assurance-maladie-digital/design-system/pull/1421)) ([6542b89](https://github.com/assurance-maladie-digital/design-system/commit/6542b89c313a5ec0ae37ae786e5516caeabb265f))

- 🐛 **Corrections de bugs**
  - **playgrounds:** Correction de fautes d'orthographe ([#1536](https://github.com/assurance-maladie-digital/design-system/pull/1536)) ([1df5dcb](https://github.com/assurance-maladie-digital/design-system/commit/1df5dcbeb39b613691d6d52549929b50992316fc))

- 🔧 **Configuration**
  - **ci:** Mise à jour de l'image `cimg/node` vers la `v14.18` ([#1454](https://github.com/assurance-maladie-digital/design-system/pull/1454)) ([38efd29](https://github.com/assurance-maladie-digital/design-system/commit/38efd29992df0eb495af6218be144605895c39ca))
  - **global:** Mise à jour du fichier `.gitignore` ([#1477](https://github.com/assurance-maladie-digital/design-system/pull/1477)) ([50edc9f](https://github.com/assurance-maladie-digital/design-system/commit/50edc9f809eaa196c5afefd275b7f4e69ab2260f))
  - **ci:** Mise à jour de `codecov` vers la `v3.2.0` ([#1505](https://github.com/assurance-maladie-digital/design-system/pull/1505)) ([3064c24](https://github.com/assurance-maladie-digital/design-system/commit/3064c244369e5cad9dcadc939243be1ae2c5692a))
  - **config:** Mise à jour de la taille maximale du build ([#1530](https://github.com/assurance-maladie-digital/design-system/pull/1530)) ([e9a7702](https://github.com/assurance-maladie-digital/design-system/commit/e9a7702fb823b8f030138fb42db556f0d9fcd432))
  - **config:** Utilisation de `parseInt` à la place de de `parseFloat` dans le fichier `vue.config.js` ([#1535](https://github.com/assurance-maladie-digital/design-system/pull/1535)) ([94bda6f](https://github.com/assurance-maladie-digital/design-system/commit/94bda6ff84324f858a7a3995df0be5a38f851692))

- 🔥 **Suppressions**
  - **issues:** Suppression des templates inutilisés ([#1511](https://github.com/assurance-maladie-digital/design-system/pull/1511)) ([93b8280](https://github.com/assurance-maladie-digital/design-system/commit/93b8280beee2ba38643b4576251f067c23e248be))

- 📝 **Documentation**
  - **global:** Mise à jour du champ auteur ([#1481](https://github.com/assurance-maladie-digital/design-system/pull/1481)) ([02693b3](https://github.com/assurance-maladie-digital/design-system/commit/02693b3df4974a0e6ac5a7a40293bf489e071ba2))
  - **global:** Mise à jour du code de conduite ([#1482](https://github.com/assurance-maladie-digital/design-system/pull/1482)) ([cee4264](https://github.com/assurance-maladie-digital/design-system/commit/cee426421b6a5171d4b2a4a374038416aa1cad15))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#1570](https://github.com/assurance-maladie-digital/design-system/pull/1570)) ([854364b](https://github.com/assurance-maladie-digital/design-system/commit/854364b37fdb4857ad63b1464c393b3dfd2f46cc))

- ⬆️ **Dépendances**
  - **dayjs:** Mise à jour vers la `v1.10.7` ([#1436](https://github.com/assurance-maladie-digital/design-system/pull/1436)) ([a93a139](https://github.com/assurance-maladie-digital/design-system/commit/a93a1390c7a4a42e46a1990186415b319d8b1660))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.13` ([#1450](https://github.com/assurance-maladie-digital/design-system/pull/1450)) ([39e77c3](https://github.com/assurance-maladie-digital/design-system/commit/39e77c3a6a26e068a76184be71af305bde457953))
  - **vue-input-facade:** Mise à jour vers la `v1.3.7` ([#1464](https://github.com/assurance-maladie-digital/design-system/pull/1464)) ([7877b57](https://github.com/assurance-maladie-digital/design-system/commit/7877b5747032d8f45b495ade36b664d266101f0b))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.4.3` ([#1469](https://github.com/assurance-maladie-digital/design-system/pull/1469)) ([7ae8f4a](https://github.com/assurance-maladie-digital/design-system/commit/7ae8f4a1f015ac239e5b736257ff5e6601893783))
  - **@babel/core:** Mise à jour vers la `v7.15.8` ([#1470](https://github.com/assurance-maladie-digital/design-system/pull/1470)) ([49a2900](https://github.com/assurance-maladie-digital/design-system/commit/49a2900fe207c07ebac1841fd807f77dbb9df669))
  - **vuetify:** Mise à jour vers la `v2.5.10` ([#1497](https://github.com/assurance-maladie-digital/design-system/pull/1497)) ([136480c](https://github.com/assurance-maladie-digital/design-system/commit/136480cff7f9de35bc5fc4f730e8963027a14c64))
  - **typescript:** Mise à jour vers la `v4.4.4` ([#1501](https://github.com/assurance-maladie-digital/design-system/pull/1501)) ([3ca75b5](https://github.com/assurance-maladie-digital/design-system/commit/3ca75b5e269fb27e7631def610b20cacc814179a))
  - **@vue/eslint-config-typescript:** Mise à jour vers la `v8` ([#1502](https://github.com/assurance-maladie-digital/design-system/pull/1502)) ([0865f75](https://github.com/assurance-maladie-digital/design-system/commit/0865f75c301537a4c138ca63a6aa3e1825e0a5da))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.14` ([#1504](https://github.com/assurance-maladie-digital/design-system/pull/1504)) ([f0b6e8a](https://github.com/assurance-maladie-digital/design-system/commit/f0b6e8a561053f320d86fc7330093eeaf7b31dbf))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.20.0` ([#1517](https://github.com/assurance-maladie-digital/design-system/pull/1517)) ([b7764c2](https://github.com/assurance-maladie-digital/design-system/commit/b7764c2f2ad0466cbd2a27d5fc7d192a232969be))
  - **babel-loader:** Mise à jour vers la `v8.2.3` ([#1519](https://github.com/assurance-maladie-digital/design-system/pull/1519)) ([ba8bc3f](https://github.com/assurance-maladie-digital/design-system/commit/ba8bc3fc67aef54fa7484b6dcbb02d0bc75fce4c))
  - **@nuxt/content:** Mise à jour vers la `v1.15.0` ([#1524](https://github.com/assurance-maladie-digital/design-system/pull/1524)) ([7ec71ee](https://github.com/assurance-maladie-digital/design-system/commit/7ec71ee4f0633685cabf71113e5b86a55f8eec80))
  - **ts-node:** Mise à jour vers la `v10.4.0` ([#1529](https://github.com/assurance-maladie-digital/design-system/pull/1529)) ([cd403f8](https://github.com/assurance-maladie-digital/design-system/commit/cd403f832387dc6d9310854249babe70cbcefd49))
  - **lint-staged:** Mise à jour vers la `v11.2.4` ([#1539](https://github.com/assurance-maladie-digital/design-system/pull/1539)) ([2a46083](https://github.com/assurance-maladie-digital/design-system/commit/2a4608305858fa3ea5d5baa84de77bce95f93c4a))
  - **@mdi/js:** Mise à jour vers la `v6.4.95` ([#1540](https://github.com/assurance-maladie-digital/design-system/pull/1540)) ([a74394c](https://github.com/assurance-maladie-digital/design-system/commit/a74394c052bd405658ab57ca6db78971018e410e))
  - **core-js:** Mise à jour vers la `v3.19.0` ([#1542](https://github.com/assurance-maladie-digital/design-system/pull/1542)) ([8d6c97f](https://github.com/assurance-maladie-digital/design-system/commit/8d6c97f2b908b9933b6a75e052b779755b710581))
  - **axios:** Mise à jour vers la `v0.24.0` ([#1555](https://github.com/assurance-maladie-digital/design-system/pull/1555)) ([369e92f](https://github.com/assurance-maladie-digital/design-system/commit/369e92febe02e943786cc30f493040a4ce0c9b48))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v5.2.0` ([#1557](https://github.com/assurance-maladie-digital/design-system/pull/1557)) ([5cceba4](https://github.com/assurance-maladie-digital/design-system/commit/5cceba4d33cf60e9f0235d039724c9b32f5fc2ec))
  - **@types/node:** Mise à jour vers la `v14.17.32` ([#1561](https://github.com/assurance-maladie-digital/design-system/pull/1561)) ([7fdbd65](https://github.com/assurance-maladie-digital/design-system/commit/7fdbd6550fa46c5f75904381e79f9ebac878ad68))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v37.0.3` ([#1563](https://github.com/assurance-maladie-digital/design-system/pull/1563)) ([6b0d628](https://github.com/assurance-maladie-digital/design-system/pull/1368/commits/6b0d62871020e5d2c10f7bfaad0a25b80d4d328c))

## v2.0.0

**Version publiée le 30/08/2021.**

Cette version majeure comporte l'ajout de guides et la complétion de la documentation, ainsi que des correctifs sur Vue Dot, les CLI Helpers et la documentation.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **TableToolbar:** Correction de l'affichage sur les écrans mobiles ([#1347](https://github.com/assurance-maladie-digital/design-system/pull/1347)) ([f78383f](https://github.com/assurance-maladie-digital/design-system/commit/f78383f3b54edea2771ed089df96f77683939f37))

- ♻️ **Refactoring**
  - **FranceConnectBtn:** Suppression de la valeur par défaut de la prop `href` ([#1333](https://github.com/assurance-maladie-digital/design-system/pull/1333)) ([a9f751c](https://github.com/assurance-maladie-digital/design-system/commit/a9f751c7b1e3bdebab5a23394f1557737d876260))

- 🎨 **Qualité de code**
  - **tests:** Mise à jour des labels des blocs `describe` ([#1345](https://github.com/assurance-maladie-digital/design-system/pull/1345)) ([404a997](https://github.com/assurance-maladie-digital/design-system/commit/404a997610e51b521923888e79ae74d3ea100d2e))

### Vue Dash

- ✨ **Nouvelles fonctionnalités**
  - **prompts:** Ajout de l'option Jenkins files ([#1315](https://github.com/assurance-maladie-digital/design-system/pull/1315)) ([de25e11](https://github.com/assurance-maladie-digital/design-system/commit/de25e118bb672007470a3e083f7a372e8153c42c))

- 🎨 **Qualité de code**
  - **tests:** Mise à jour des labels des blocs `describe` ([#1346](https://github.com/assurance-maladie-digital/design-system/pull/1346)) ([c973a62](https://github.com/assurance-maladie-digital/design-system/commit/c973a6230eb0acf4c1cdc78230b856a4a58efcd0))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#1394](https://github.com/assurance-maladie-digital/design-system/pull/1394)) ([c80283c](https://github.com/assurance-maladie-digital/design-system/commit/c80283c26b595ffa5d8d5ede0c919fc9cbeb687f))

### CLI Helpers

- 🐛 **Corrections de bugs**
  - **build:** Correction du dossier `src` non listé dans la liste des ressources à publier ([#1392](https://github.com/assurance-maladie-digital/design-system/pull/1392)) ([e6ef1fe](https://github.com/assurance-maladie-digital/design-system/commit/e6ef1fec4094d3bc83b428614528c77e448959d0))
  - **dependencies:** Correction de la dépendance `@types/figlet` manquante ([#1393](https://github.com/assurance-maladie-digital/design-system/pull/1393)) ([4e722ce](https://github.com/assurance-maladie-digital/design-system/commit/4e722ce930f63ff24647f33f071a78bed510da78))

### Documentation

- ✨ **Nouvelles fonctionnalités**
  - **global:** Ajout d'un hook pour appliquer des règles typographiques ([#1351](https://github.com/assurance-maladie-digital/design-system/pull/1351)) ([a6099b6](https://github.com/assurance-maladie-digital/design-system/commit/a6099b6ad7e37e32ed5dc8f10e9c6090f46e61c5))

- 🐛 **Corrections de bugs**
  - **installation:** Correction de l'affichage des `ExpansionPanels` ([#1325](https://github.com/assurance-maladie-digital/design-system/pull/1325)) ([11cfa7c](https://github.com/assurance-maladie-digital/design-system/commit/11cfa7cf7230459e4cffb895a9f8c6a3bc876f20))
  - **DocGithubLink:** Correction du lien d'édition ([#1352](https://github.com/assurance-maladie-digital/design-system/pull/1352))) ([255e38f](https://github.com/assurance-maladie-digital/design-system/commit/255e38ff1ff666bdb7dca7e18d726e3b0de5729d))
  - **introduction:** Correction du lien "précédent" cassé ([#1354](https://github.com/assurance-maladie-digital/design-system/pull/1354)) ([cae2aa6](https://github.com/assurance-maladie-digital/design-system/commit/cae2aa6211166eda0c5ffc0f082b3236acd54c4d))
  - **explorer:** Correction de l'affichage du Starter Kit Explorer ([#1357](https://github.com/assurance-maladie-digital/design-system/pull/1357)) ([ec1f283](https://github.com/assurance-maladie-digital/design-system/commit/ec1f2839ed6e2dcc45bb12842092b111bd9721a0))
  - **global:** Correction des règles typographiques ([#1358](https://github.com/assurance-maladie-digital/design-system/pull/1358)) ([fe6d095](https://github.com/assurance-maladie-digital/design-system/commit/fe6d09514edbc4aa55d8eb6c848360eeb14026fb))
  - **DocIndent:** Correction du nom de la classe ([#1373](https://github.com/assurance-maladie-digital/design-system/pull/1373)) ([eb37b55](https://github.com/assurance-maladie-digital/design-system/commit/eb37b556db5ce02834418b6e3bb91bd52728f3df))

- ♻️ **Refactoring**
  - **home:** Refonte de la page d'accueil ([#1330](https://github.com/assurance-maladie-digital/design-system/pull/1330)) ([7ef81d5](https://github.com/assurance-maladie-digital/design-system/commit/7ef81d57c327f3cea2c2cca082e6fe1b592176ea))

- 🔥 **Suppressions**
  - **glossaire:** Suppression de la page ([#1370](https://github.com/assurance-maladie-digital/design-system/pull/1370)) ([d246436](https://github.com/assurance-maladie-digital/design-system/commit/d2464363bcf6692be400abfda43a1b07025326c3))

- 🔧 **Configuration**
  - **config:** Ajout de l'option `--fail-on-error` à la commande `yarn generate` ([#1338](https://github.com/assurance-maladie-digital/design-system/pull/1338)) ([fb102ae](https://github.com/assurance-maladie-digital/design-system/commit/fb102ae13b34faa38dab28cfda85f31e9cf52844))

- 📝 **Documentation**
  - **roadmap:** Mise à jour de la page ([#1327](https://github.com/assurance-maladie-digital/design-system/pull/1327)) ([853e06b](https://github.com/assurance-maladie-digital/design-system/commit/853e06be8327bee5362681e67911aa0c35a8d76e))
  - **guides** Ajout du guide sur la gestion des variables d'environnement ([#1290](https://github.com/assurance-maladie-digital/design-system/pull/1290)) ([1d7def8](https://github.com/assurance-maladie-digital/design-system/commit/1d7def8c9a54db3c03faa82a9d85fc6d27e7a951))
  - **guides:** Ajout du guide sur les `v-model` personnalisés ([#1297](https://github.com/assurance-maladie-digital/design-system/pull/1297)) ([7d53155](https://github.com/assurance-maladie-digital/design-system/commit/7d5315561d525649d46e6d8855d59a8b9573424c))
  - **guides:** Ajout du guide sur la gestion des événements ([#1302](https://github.com/assurance-maladie-digital/design-system/pull/1302)) ([ad28235](https://github.com/assurance-maladie-digital/design-system/commit/ad2823551a9163c1162968352068a85521424ba7))
  - **FranceConnectBtn:** Documentation du composant ([#1329](https://github.com/assurance-maladie-digital/design-system/pull/1329)) ([5766901](https://github.com/assurance-maladie-digital/design-system/commit/576690153394e1920f61a2f29ba8aa204059bbb9))
  - **guides:** Ajout du guide sur l'authentification avec token ([#1305](https://github.com/assurance-maladie-digital/design-system/pull/1305)) ([38d424e](https://github.com/assurance-maladie-digital/design-system/commit/38d424eb4cabc8af21bdc660c73865250a3a03ad))
  - **guides:** Ajout du guide sur l'utilisation du store ([#1301](https://github.com/assurance-maladie-digital/design-system/pull/1301)) ([bc18d88](https://github.com/assurance-maladie-digital/design-system/commit/bc18d88d2c218e56054c6b582ed55de42295d42a))
  - **guides:** Mise à jour du guide sur la création d'un nouveau composant ([#1348](https://github.com/assurance-maladie-digital/design-system/pull/1348)) ([353d450](https://github.com/assurance-maladie-digital/design-system/commit/353d4509965a9b9c3c1868d7e4d3a5d5eff10478))
  - **global:** Correction de fautes d'orthographe ([#1350](https://github.com/assurance-maladie-digital/design-system/pull/1350)) ([e73f69a](https://github.com/assurance-maladie-digital/design-system/commit/e73f69a422f89b0ae55167161bac5617ab558ecf))
  - **global:** Ajout d'une indentation au début des sections ([#1353](https://github.com/assurance-maladie-digital/design-system/pull/1353)) ([255e38f](https://github.com/assurance-maladie-digital/design-system/commit/255e38ff1ff666bdb7dca7e18d726e3b0de5729d))
  - **global:** Ajout de la page principes de design ([#1368](https://github.com/assurance-maladie-digital/design-system/pull/1368)) ([39ee570](https://github.com/assurance-maladie-digital/design-system/commit/39ee570fd72b920fedff51d63a6418d3827b9a12))
  - **global:** Correction d'une mauvaise formulation ([#1390](https://github.com/assurance-maladie-digital/design-system/pull/1390)) ([bfb75f0](https://github.com/assurance-maladie-digital/design-system/commit/bfb75f0bf4255b754727f30d64695d7849f28a43))

### Interne

- 🔧 **Configuration**
  - **ci:** Mise à jour de la configuration de renovate ([#1343](https://github.com/assurance-maladie-digital/design-system/pull/1343)) ([2f82e81](https://github.com/assurance-maladie-digital/design-system/commit/2f82e81d02fc6c4adaed6d4d3680fe8180ec0300))
  - **ci:** Mise à jour de la configuration de renovate ([#1361](https://github.com/assurance-maladie-digital/design-system/pull/1361)) ([99d8b8b](https://github.com/assurance-maladie-digital/design-system/pull/1368/commits/99d8b8bdf53b6b7c985a9729f81a597c379dd05e))

- 📝 **Documentation**
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#1395](https://github.com/assurance-maladie-digital/design-system/pull/1395)) ([c68a01c](https://github.com/assurance-maladie-digital/design-system/pull/1368/commits/c68a01c588ffe8e7bc31cd58f7d6d5316573fe2b))

- ⬆️ **Dépendances**
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.4.2` ([#1323](https://github.com/assurance-maladie-digital/design-system/pull/1323)) ([a4f7c94](https://github.com/assurance-maladie-digital/design-system/commit/a4f7c946a318590a8b8214de56467887feef03c3))
  - **lint-staged:** Mise à jour vers la `v11.1.2` ([#1328](https://github.com/assurance-maladie-digital/design-system/pull/1328)) ([c404b44](https://github.com/assurance-maladie-digital/design-system/commit/c404b4457a9615ed72c00b5e79449463dcaee005))
  - **nuxt:** Mise à jour du monorepo vers la `v2.15.8` ([#1340](https://github.com/assurance-maladie-digital/design-system/pull/1340)) ([26aa24c](https://github.com/assurance-maladie-digital/design-system/commit/26aa24c090e89451e9716beb68bb2971446cb9d2))
  - **@babel/core:** Mise à jour vers la `v7.15.0` ([#1326](https://github.com/assurance-maladie-digital/design-system/pull/1326)) ([6029357](https://github.com/assurance-maladie-digital/design-system/commit/60293578895928641f8ebe11a334053e33d65fb1))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.29.3` ([#1355](https://github.com/assurance-maladie-digital/design-system/pull/1355)) ([e295b74](https://github.com/assurance-maladie-digital/design-system/commit/e295b74a206985e38428c008d2259343b6754b63))
  - **core-js:** Mise à jour vers la `v3.16.4` ([#1360](https://github.com/assurance-maladie-digital/design-system/pull/1360)) ([6bd2630](https://github.com/assurance-maladie-digital/design-system/commit/6bd2630cfaaf89d1bc09232c2afa1ae220450129))
  - **ts-node:** Mise à jour vers la `v10.2.1` ([#1364](https://github.com/assurance-maladie-digital/design-system/pull/1364)) ([6ae8772](https://github.com/assurance-maladie-digital/design-system/commit/6ae8772363d6702b643e77a43fb829fa5d51efe3))
  - **@types/node:** Mise à jour vers la `v14.17.12` ([#1366](https://github.com/assurance-maladie-digital/design-system/pull/1366)) ([8a8d20c](https://github.com/assurance-maladie-digital/design-system/commit/8a8d20c7ce1aa176dce69622a19bc17aa90feaad))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v36.0.8` ([#1374](https://github.com/assurance-maladie-digital/design-system/pull/1374)) ([197d1b2](https://github.com/assurance-maladie-digital/design-system/commit/197d1b23bece57dfb78bc93cb41067c2665af0b5))
  - **typescript:** Mise à jour vers la `v4.4.2` ([#1384](https://github.com/assurance-maladie-digital/design-system/pull/1384)) ([8528ea6](https://github.com/assurance-maladie-digital/design-system/commit/8528ea60a1eb903b652ef0e26211eded85175028))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.17.0` ([#1386](https://github.com/assurance-maladie-digital/design-system/pull/1386)) ([8421fe2](https://github.com/assurance-maladie-digital/design-system/commit/8421fe2efddaf57498478aa897f45bd4aa73d957))
  - **vuetify-loader:** Mise à jour vers la `v1.7.3` ([#1387](https://github.com/assurance-maladie-digital/design-system/pull/1387)) ([230916f](https://github.com/assurance-maladie-digital/design-system/commit/230916f324df911e65a756d4c4ec7c8c1a893533))

## v2.0.0-beta.12

**Version publiée le 02/08/2021.**

Cette version comporte l'ajout de la documentation et du nouveau composant `FranceConnectBtn`, ainsi que des correctifs sur Vue Dot et le FormBuilder.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **SubHeader:** Correction de l'événement `click:list-item` ne fonctionnant pas ([#1203](https://github.com/assurance-maladie-digital/design-system/pull/1203)) ([13056bb](https://github.com/assurance-maladie-digital/design-system/commit/13056bb354fc9860c9def9978630414d040b7f62))
  - **styles:** Correction de la position du curseur de redimensionnement dans les champs de formulaires ([#1212](https://github.com/assurance-maladie-digital/design-system/pull/1212)) ([2314b2e](https://github.com/assurance-maladie-digital/design-system/commit/2314b2eded1063ad9e746e46e5a201b72cece285))
  - **TableToolbar:** Correction de l'espacement du bouton *Ajouter* ([#1214](https://github.com/assurance-maladie-digital/design-system/pull/1214)) ([6cb82bc](https://github.com/assurance-maladie-digital/design-system/commit/6cb82bc01dc5ca913d304d4bc85a470f909b6279))
  - **TableToolbar:** Correction de l'espacement de l'icône du bouton *Ajouter* ([#1215](https://github.com/assurance-maladie-digital/design-system/pull/1215)) ([73e6152](https://github.com/assurance-maladie-digital/design-system/commit/73e61528b18aede1afd2385811f77c54323e1a08))
  - **ExternalLinks:** Correction de la valeur de la propriété `z-index` du bouton ([#1216](https://github.com/assurance-maladie-digital/design-system/pull/1216)) ([74c7aaf](https://github.com/assurance-maladie-digital/design-system/commit/74c7aaf050806f75e6fd17fefe467756912b033b))
  - **ExternalLinks:** Correction de l'arrondi lorsqu'il n'y a pas de données ([#1217](https://github.com/assurance-maladie-digital/design-system/pull/1217)) ([a49b415](https://github.com/assurance-maladie-digital/design-system/commit/a49b415f4037469c1b718a0f5f6edb210bbba22d))
  - **ExternalLinks:** Correction de l'affichage du bouton sur les écrans mobiles ([#1218](https://github.com/assurance-maladie-digital/design-system/pull/1218)) ([32742b2](https://github.com/assurance-maladie-digital/design-system/commit/32742b28a7fedbdd69b9f885bca415a4fc7a2758))
  - **FilterModule:** Correction des événements manquants ([#1256](https://github.com/assurance-maladie-digital/design-system/pull/1256)) ([195617f](https://github.com/assurance-maladie-digital/design-system/commit/195617fba865fb4900b4291c05a123142c03bddf))
  - **FranceConnectBtn:** Ajout d'un nouveau composant ([#1268](https://github.com/assurance-maladie-digital/design-system/pull/1268)) ([8261209](https://github.com/assurance-maladie-digital/design-system/commit/82612092f3775984d03fc28effb15c18d27aa8d1))
  - **ExternalLinks:** Correction de la position du menu ([#1263](https://github.com/assurance-maladie-digital/design-system/pull/1263)) ([4581e8e](https://github.com/assurance-maladie-digital/design-system/commit/4581e8e435917e4aa87b2215e3c2719e890922a2))

- ♻️ **Refactoring**
  - **PaginatedTable:** Modification de la valeur par défaut de la prop `suffix` à `undefined` ([#1205](https://github.com/assurance-maladie-digital/design-system/pull/1205)) ([8df8e55](https://github.com/assurance-maladie-digital/design-system/commit/8df8e55c59fe820e99f0c0722e243f25b5cd9ffc))

- 🔧 **Configuration**
  - **config:** Mise à jour de la taille maximale du build ([#1183](https://github.com/assurance-maladie-digital/design-system/pull/1183)) ([cd82a69](https://github.com/assurance-maladie-digital/design-system/commit/cd82a69f9f284592bdb805aec359ae78080a97db))

### Vue Dash

- ♻️ **Refactoring**
  - **prompts:** Mise à jour des questions ([#1291](https://github.com/assurance-maladie-digital/design-system/pull/1291)) ([c671596](https://github.com/assurance-maladie-digital/design-system/commit/c671596e77e30a8180f2bb2a197740d09ae549b4))

- 🔥 **Suppressions**
  - **prompts:** Suppression de l'option FormBuilder ([#1298](https://github.com/assurance-maladie-digital/design-system/pull/1298)) ([d759f82](https://github.com/assurance-maladie-digital/design-system/commit/d759f82e4c1d6b0bd3123e1d1b312cfedf2a5bf0))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#1312](https://github.com/assurance-maladie-digital/design-system/pull/1312)) ([63060ff](https://github.com/assurance-maladie-digital/design-system/commit/63060ffe21f4383be870c5c1d140ed7b452a56d3))

### FormBuilder

- 🐛 **Corrections de bugs**
  - **ChoiceSliderField:** Correction des styles pour l'affichage des étiquettes ([#1194](https://github.com/assurance-maladie-digital/design-system/pull/1194)) ([3707e4b](https://github.com/assurance-maladie-digital/design-system/commit/3707e4bcfc163983b527cd7ca5fbb26485bb057a))
  - **ChoiceSliderField:** Correction de la valeur par défaut manquante ([#1204](https://github.com/assurance-maladie-digital/design-system/pull/1204)) ([350e9e5](https://github.com/assurance-maladie-digital/design-system/commit/350e9e56ef8c0f88875299368d4a33de53758bda))
  - **PeriodField:** Correction de la largeur des champs ([#1208](https://github.com/assurance-maladie-digital/design-system/pull/1208)) ([a1ef419](https://github.com/assurance-maladie-digital/design-system/commit/a1ef41997c998905911afc32bbae35baa7199b3e))
  - **ChoiceButtonField:** Correction de l'espacement interne ([#1211](https://github.com/assurance-maladie-digital/design-system/pull/1211)) ([f6d4795](https://github.com/assurance-maladie-digital/design-system/commit/f6d4795afae962d373d4dc31dc5d0f2fa9b46f65))

- ♻️ **Refactoring**
  - **ChoiceSliderField:** Refonte du composant ([#1193](https://github.com/assurance-maladie-digital/design-system/pull/1193)) ([8252ccf](https://github.com/assurance-maladie-digital/design-system/commit/8252ccfd3bf8637c20bf52b06e5e8c7f856d796e))

### Documentation

- ✨ **Nouvelles fonctionnalités**
  - **global:** Ajout de la documentation ([#1128](https://github.com/assurance-maladie-digital/design-system/pull/1128)) ([2f9607e](https://github.com/assurance-maladie-digital/design-system/commit/2f9607e73a973989e172155c6c055419c09ee141))

- 📝 **Documentation**
  - **RangeField:** Documentation du champ ([#1245](https://github.com/assurance-maladie-digital/design-system/pull/1245)) ([d1a7656](https://github.com/assurance-maladie-digital/design-system/commit/d1a765626dfaafb9a1238fbad1dc5bdeacaf46ea))
  - **FilterModule:** Documentation du composant ([#1257](https://github.com/assurance-maladie-digital/design-system/pull/1257)) ([c5adcc2](https://github.com/assurance-maladie-digital/design-system/commit/c5adcc295beb3e020217b3476e94a3703de6ee2c))
  - **global:** Ajout de la page glossaire ([#1265](https://github.com/assurance-maladie-digital/design-system/pull/1265)) ([d7d427b](https://github.com/assurance-maladie-digital/design-system/commit/d7d427bf7a9f8adc2ecd7488644806572bebedaf))
  - **global:** Ajout de la page roadmap ([#1300](https://github.com/assurance-maladie-digital/design-system/pull/1300)) ([ae0fd46](https://github.com/assurance-maladie-digital/design-system/commit/ae0fd46d01ef7db9dc559746aa919ddebf0f2dfa))

### Interne

- 🔧 **Configuration**
  - **ci:** Mise à jour de `codecov` vers la `v1.2.5` ([#1258](https://github.com/assurance-maladie-digital/design-system/pull/1258)) ([d48d228](https://github.com/assurance-maladie-digital/design-system/commit/d48d2282d5257b9e610e70bb8e69d32dfc9abb1e))

- 📝 **Documentation**
  - **issues:** Mise à jour des templates ([#1202](https://github.com/assurance-maladie-digital/design-system/pull/1202)) ([9338b22](https://github.com/assurance-maladie-digital/design-system/commit/9338b22b5f0a6202a4a3d1b938bef75dce590e3c))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#1313](https://github.com/assurance-maladie-digital/design-system/pull/1313)) ([d875bfd](https://github.com/assurance-maladie-digital/design-system/commit/d875bfd010fb3b722886d60ddd91f71cd1c51cca))

- ⬆️ **Dépendances**
  - **typescript:** Mise à jour vers la `v4.3.5` ([#1201](https://github.com/assurance-maladie-digital/design-system/pull/1201)) ([c958d51](https://github.com/assurance-maladie-digital/design-system/commit/c958d510657de591daf65ee53936c89d9e7a48cf))
  - **jest-mock-process:** Mise à jour vers la `v1.4.1` ([#1219](https://github.com/assurance-maladie-digital/design-system/pull/1219)) ([34ed5c5](https://github.com/assurance-maladie-digital/design-system/commit/34ed5c51dba8a8010062005cfa2f2e0f4ea199ff))
  - **dayjs:** Mise à jour vers la `v1.10.6` ([#1222](https://github.com/assurance-maladie-digital/design-system/pull/1222)) ([0486632](https://github.com/assurance-maladie-digital/design-system/commit/04866329710d9c5659342b44c5eaec9b28327772))
  - **@types/content-disposition:** Mise à jour vers la `v0.5.4` ([#1236](https://github.com/assurance-maladie-digital/design-system/pull/1236)) ([93c691e](https://github.com/assurance-maladie-digital/design-system/commit/93c691e7b968d5ee354e43c0a56ea4a93cc23d7d))
  - **@types/figlet:** Mise à jour vers la `v1.5.4` ([#1237](https://github.com/assurance-maladie-digital/design-system/pull/1237)) ([9fda7cc](https://github.com/assurance-maladie-digital/design-system/commit/9fda7ccfdf6229921e47789936cbca53b893154d))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.12` ([#1238](https://github.com/assurance-maladie-digital/design-system/pull/1238)) ([b768056](https://github.com/assurance-maladie-digital/design-system/commit/b768056bbcf3e3f08b7f41baef45431dcc65d85b))
  - **@types/jest:** Mise à jour vers la `v26.0.24` ([#1239](https://github.com/assurance-maladie-digital/design-system/pull/1239)) ([1c11bed](https://github.com/assurance-maladie-digital/design-system/commit/1c11bed345efe02d200c50edbb8ebec8f52e2ca1))
  - **ts-node:** Mise à jour vers la `v10.1.0` ([#1248](https://github.com/assurance-maladie-digital/design-system/pull/1248)) ([7ce067e](https://github.com/assurance-maladie-digital/design-system/commit/7ce067ee846279dc76711f69bb4b8473d657fde1))
  - **@babel/core:** Mise à jour vers la `v7.14.8` ([#1286](https://github.com/assurance-maladie-digital/design-system/pull/1286)) ([35fc5d2](https://github.com/assurance-maladie-digital/design-system/commit/35fc5d2977764318232ba436de2fdbfb73055c22))
  - **nuxt:** Mise à jour du monorepo vers la `v2.15.7` ([#1250](https://github.com/assurance-maladie-digital/design-system/pull/1250)) ([11c7ea6](https://github.com/assurance-maladie-digital/design-system/commit/11c7ea63ddef253d13c31a6f25d45eaf8f01c6fa))
  - **@nuxt/typescript-build:** Mise à jour vers la `v2.1.0` ([#1251](https://github.com/assurance-maladie-digital/design-system/pull/1251)) ([bff3de7](https://github.com/assurance-maladie-digital/design-system/commit/bff3de781c26971087f23d3626625e3bab7b9c3b))
  - **@vue/test-utils:** Mise à jour vers la `v1.2.2` ([#1288](https://github.com/assurance-maladie-digital/design-system/pull/1288)) ([ff327b9](https://github.com/assurance-maladie-digital/design-system/commit/ff327b9c0e75b657d129dca451846c45a20f97d1))
  - **lint-staged:** Mise à jour vers la `v11.1.1` ([#1289](https://github.com/assurance-maladie-digital/design-system/pull/1289)) ([f36712b](https://github.com/assurance-maladie-digital/design-system/commit/f36712bff984f5ae606a41be285023d693339663))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.28.5` ([#1296](https://github.com/assurance-maladie-digital/design-system/pull/1296)) ([670a498](https://github.com/assurance-maladie-digital/design-system/commit/670a49821a58a1be6fbadef5ea18dc20d24a121d))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v36.0.6` ([#1299](https://github.com/assurance-maladie-digital/design-system/pull/1299)) ([ad1da8a](https://github.com/assurance-maladie-digital/design-system/commit/ad1da8a316c94c71a22407ccfb1739f84d2aa95c))
  - **core-js:** Mise à jour vers la `v3.16.0` ([#1303](https://github.com/assurance-maladie-digital/design-system/pull/1303)) ([7af0ccb](https://github.com/assurance-maladie-digital/design-system/commit/7af0ccbe33d49e4054e9524a0763294375c34828))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.15.0` ([#1304](https://github.com/assurance-maladie-digital/design-system/pull/1304)) ([8f6fe3e](https://github.com/assurance-maladie-digital/design-system/commit/8f6fe3e08254c8d7082f9168cc2f0173acc52460))
  - **vuetify:** Mise à jour vers la `v2.5.8` ([#1306](https://github.com/assurance-maladie-digital/design-system/pull/1306)) ([cd4a5bd](https://github.com/assurance-maladie-digital/design-system/commit/cd4a5bdb6d4451bf3f29fccf5b566aaeb0a0591f))
  - **eslint:** Mise à jour vers la `v7.32.0` ([#1307](https://github.com/assurance-maladie-digital/design-system/pull/1307)) ([c5f5216](https://github.com/assurance-maladie-digital/design-system/commit/c5f5216edac66ad3fe2ae9749885951aaec7a912))
  - **@types/node:** Mise à jour vers la `v14.17.7` ([#1309](https://github.com/assurance-maladie-digital/design-system/pull/1309)) ([f638ade](https://github.com/assurance-maladie-digital/design-system/commit/f638adece272ae11ed95f4d490a7fe468a18d643))

## v2.0.0-beta.11

**Version publiée le 22/06/2021.**

Cette version comporte l'ajout des nouveaux composants `FilterModule` et `ExternalLinks`, ainsi que le nouveau champ de formulaire `RangeField` et plusieurs correctifs sur Vue Dot et le FormBuilder.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **FilterModule:** Ajout d'un nouveau composant ([#1102](https://github.com/assurance-maladie-digital/design-system/pull/1102)) ([73f97ff](https://github.com/assurance-maladie-digital/design-system/commit/73f97ffc20da05112173c084158965bd4ecbf8d9))
  - **ExternalLinks:** Ajout d'un nouveau composant ([#1105](https://github.com/assurance-maladie-digital/design-system/pull/1105)) ([0ea1b8f](https://github.com/assurance-maladie-digital/design-system/commit/0ea1b8fb729cf7bf2912f1d059aa2113dc00a373))

- 🐛 **Corrections de bugs**
  - **functions:** Correction de la copie des valeurs fausses dans la fonction `deepCopy` ([#1138](https://github.com/assurance-maladie-digital/design-system/pull/1138)) ([832dfdd](https://github.com/assurance-maladie-digital/design-system/commit/832dfddca11e3bd533e1a6d356e49893a3386a72))

- 🔧 **Configuration**
  - **config:** Mise à jour de la taille maximale du build ([#1139](https://github.com/assurance-maladie-digital/design-system/pull/1139)) ([c9b445b](https://github.com/assurance-maladie-digital/design-system/commit/c9b445b153ea4dd896fa4d08d8615a8b22377259))

- 🎨 **Qualité de code**
  - **global:** Utilisation de l'interface `IndexedObject` au lieu de types personnalisés ([#1163](https://github.com/assurance-maladie-digital/design-system/pull/1163)) ([50a29e5](https://github.com/assurance-maladie-digital/design-system/commit/50a29e548b59020799fa8a665603f37ed508ded8))
  - **global:** Amélioration de la qualité du code ([#1164](https://github.com/assurance-maladie-digital/design-system/pull/1164)) ([a1872eb](https://github.com/assurance-maladie-digital/design-system/commit/a1872eb17a334804eadc7bf8cb458200728a7337))

### Vue Dash

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#1181](https://github.com/assurance-maladie-digital/design-system/pull/1181)) ([dba5edc](https://github.com/assurance-maladie-digital/design-system/commit/dba5edcb0dfd7903269b3e98fefad266c1632592))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **RangeField:** Ajout d'un nouveau champ ([#1112](https://github.com/assurance-maladie-digital/design-system/pull/1112)) ([f21d0f5](https://github.com/assurance-maladie-digital/design-system/commit/f21d0f52e0336b0d4ca58951da4fa912cf895c6c))
  - **FormFieldList:** Ajout du slot `section-description` ([#1143](https://github.com/assurance-maladie-digital/design-system/pull/1143)) ([eea2a93](https://github.com/assurance-maladie-digital/design-system/commit/eea2a93c2460fe9ee8a71d98c3818f3bb92b0ec2))

- 🐛 **Corrections de bugs**
  - **fields:** Correction de la réinitialisation de la valeur de certains champs ([#1136](https://github.com/assurance-maladie-digital/design-system/pull/1136)) ([41ac4eb](https://github.com/assurance-maladie-digital/design-system/commit/41ac4ebb1f935e9b1ca14fbe7be2953cd6de07cf))

- ♻️ **Refactoring**
  - **RangeField:** Inversion des champs min et max ([#1147](https://github.com/assurance-maladie-digital/design-system/pull/1147)) ([0d46584](https://github.com/assurance-maladie-digital/design-system/commit/0d46584638cfaabeb2157e6c1a2ddaddedbe57b2))

- 🔧 **Configuration**
  - **config:** Mise à jour de la taille maximale du build ([#1123](https://github.com/assurance-maladie-digital/design-system/pull/1123)) ([ea78c19](https://github.com/assurance-maladie-digital/design-system/commit/ea78c197d8fc026c648c5e46e828e2da19f12c8e))

### Interne

- 🔧 **Configuration**
  - **ci:** Mise à jour de l'image `cimg/node` vers la `v14.17` ([#1099](https://github.com/assurance-maladie-digital/design-system/pull/1099)) ([1ad5f9c](https://github.com/assurance-maladie-digital/design-system/commit/1ad5f9c70b8dc6a4188a9928bbb26f41cd5ea468))
  - **ci:** Mise à jour de `codecov` vers la `v1.2.3` ([#1131](https://github.com/assurance-maladie-digital/design-system/pull/1131)) ([645c086](https://github.com/assurance-maladie-digital/design-system/commit/645c0868657a072e725bd9509713109a0b882bbc))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#1130](https://github.com/assurance-maladie-digital/design-system/pull/1130)) ([f4f6cf4](https://github.com/assurance-maladie-digital/design-system/commit/f4f6cf4f18af1f5376584dfee1fae8aed88234e0))

- 📝 **Documentation**
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#1182](https://github.com/assurance-maladie-digital/design-system/pull/1182)) ([c2b3f63](https://github.com/assurance-maladie-digital/design-system/commit/c2b3f63d4982bfe1c6a745f1ddf80472ab86018e))

- ⬆️ **Dépendances**
  - **dayjs:** Mise à jour vers la `v1.10.5` ([#1127](https://github.com/assurance-maladie-digital/design-system/pull/1127)) ([2e0217c](https://github.com/assurance-maladie-digital/design-system/commit/2e0217c8a42300b01a4a08b3dc3a2e5b403e7b39))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.4.1` ([#1152](https://github.com/assurance-maladie-digital/design-system/pull/1152)) ([4e71476](https://github.com/assurance-maladie-digital/design-system/commit/4e714761c03184d7fd774ea8976a254811c20c72))
  - **sass:** Épinglage de la dépendance à la `v1.32.13` ([#1157](https://github.com/assurance-maladie-digital/design-system/pull/1157)) ([ac5c3e3](https://github.com/assurance-maladie-digital/design-system/commit/ac5c3e3a2d61667a892c35d3683b7971710a599b))
  - **vue:** Mise à jour vers la `v2.6.14` ([#1158](https://github.com/assurance-maladie-digital/design-system/pull/1158)) ([4b6f2b1](https://github.com/assurance-maladie-digital/design-system/commit/4b6f2b16133312702432b9531e5763dcdee17f6b))
  - **@types/node:** Mise à jour vers la `v14.17.3` ([#1160](https://github.com/assurance-maladie-digital/design-system/pull/1160)) ([c475144](https://github.com/assurance-maladie-digital/design-system/commit/c4751442b2803b156ac7501d5188bdb98fc33404))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.11.1` ([#1165](https://github.com/assurance-maladie-digital/design-system/pull/1165)) ([3fd6b49](https://github.com/assurance-maladie-digital/design-system/commit/3fd6b49b267ae4391aa2941e1f18db21ac373e56))
  - **@vue/test-utils:** Mise à jour vers la `v1.2.1` ([#1167](https://github.com/assurance-maladie-digital/design-system/pull/1167)) ([6326d3b](https://github.com/assurance-maladie-digital/design-system/commit/6326d3b482d5058c9c40c352daf8752a82381516))
  - **@babel/core:** Mise à jour vers la `v7.14.6` ([#1169](https://github.com/assurance-maladie-digital/design-system/pull/1169)) ([779b0e3](https://github.com/assurance-maladie-digital/design-system/commit/779b0e3ee4a08cc7fb9517252c81ec6501f37810))
  - **vuetify:** Mise à jour vers la `v2.5.4` ([#1171](https://github.com/assurance-maladie-digital/design-system/pull/1171)) ([c198990](https://github.com/assurance-maladie-digital/design-system/commit/c198990d9969cae22ff64a9d8b7b6120c3108d40))
  - **typescript:** Mise à jour vers la `v4.3.4` ([#1172](https://github.com/assurance-maladie-digital/design-system/pull/1172)) ([422b509](https://github.com/assurance-maladie-digital/design-system/commit/422b509f226d71a79d52d99b7a3a9e4d267bf435))
  - **eslint:** Mise à jour vers la `v7.29.0` ([#1175](https://github.com/assurance-maladie-digital/design-system/pull/1175)) ([a89ec7a](https://github.com/assurance-maladie-digital/design-system/commit/a89ec7a98b050e9c50fd8a460e2363ba69bde67b))
  - **vue-input-facade:** Mise à jour vers la `v1.3.6` ([#1176](https://github.com/assurance-maladie-digital/design-system/pull/1176)) ([162d4c5](https://github.com/assurance-maladie-digital/design-system/commit/162d4c519b854d822e0a067df3f4b5103768eaf1))
  - **core-js:** Mise à jour vers la `v3.15.0` ([#1177](https://github.com/assurance-maladie-digital/design-system/pull/1177)) ([5d12a31](https://github.com/assurance-maladie-digital/design-system/commit/5d12a31fc8728f553c478635cc57ef5234213bbb))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v35.4.0` ([#1178](https://github.com/assurance-maladie-digital/design-system/pull/1178)) ([64fec70](https://github.com/assurance-maladie-digital/design-system/commit/64fec70b8209bb2b2bef7753a843113dab824a4d))
  - **vue-router:** Mise à jour vers la `v3.5.2` ([#1179](https://github.com/assurance-maladie-digital/design-system/pull/1179)) ([5747ee2](https://github.com/assurance-maladie-digital/design-system/commit/5747ee22f87ae54711517741f8240754b035947b))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.28.0` ([#1180](https://github.com/assurance-maladie-digital/design-system/pull/1180)) ([2ee9767](https://github.com/assurance-maladie-digital/design-system/commit/2ee9767e8aed1bbf172827d7a03e6adfbca40324))

## v2.0.0-beta.10

**Version publiée le 25/05/2021.**

Cette version comporte la suppression du composant `PageCard`, l'ajout de la prop `fallback-filename` sur le composant `DownloadBtn`, ainsi que la correction de la copie des fichiers lors de la création d'un nouveau projet et la refonte des environnements de développement.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **DownloadBtn:** Ajout de la prop `fallback-filename` et d'un nom de fichier par défaut ([#1068](https://github.com/assurance-maladie-digital/design-system/pull/1068)) ([490b05e](https://github.com/assurance-maladie-digital/design-system/commit/490b05ee895195176e37567b1ecfb2acd28ae094))

- 🐛 **Corrections de bugs**
  - **DatePicker:** Correction du calcul de la date maximale en mode `birthdate` ([#1046](https://github.com/assurance-maladie-digital/design-system/pull/1046)) ([7fcbd97](https://github.com/assurance-maladie-digital/design-system/commit/7fcbd97bef15a903b65e6d5bfc07febca8a10f40))
  - **DownloadBtn:** Correction du nom des headers ([#1047](https://github.com/assurance-maladie-digital/design-system/pull/1047)) ([b722431](https://github.com/assurance-maladie-digital/design-system/commit/b7224312d2a4e6bbef1affbf7f94c51057a91990))
  - **DownloadBtn:** Correction des styles sur les écrans mobiles ([#1048](https://github.com/assurance-maladie-digital/design-system/pull/1048)) ([ee4abbb](https://github.com/assurance-maladie-digital/design-system/commit/ee4abbb25ff6be0c0c335c7b98e86f2edd866a1d))
  - **rules:** Suppression des espaces blancs sur les chaînes de caractères dans la règle `required` ([#1055](https://github.com/assurance-maladie-digital/design-system/pull/1055)) ([c0cef39](https://github.com/assurance-maladie-digital/design-system/commit/c0cef39ef5491b991dd1f104dcbd3d31e169c876))
  - **DatePicker:** Sélection de l'année `1990` par défaut en mode `birthdate` ([#1060](https://github.com/assurance-maladie-digital/design-system/pull/1060)) ([cad4b36](https://github.com/assurance-maladie-digital/design-system/commit/cad4b3650353391e6ea24ea8e4d8d4c5433a9ec2))

- ♻️ **Refactoring**
  - **ErrorPage:** Utilisation du composant `PageContainer` à la place de `PageCard` ([#1062](https://github.com/assurance-maladie-digital/design-system/pull/1062)) ([4877246](https://github.com/assurance-maladie-digital/design-system/commit/4877246872e45a0fb5d5840d339444f1ed59c166))
  - **PageContainer:** Ajout d'un conteneur interne et correction de l'espacement interne ([#1067](https://github.com/assurance-maladie-digital/design-system/pull/1067)) ([4b5a40e](https://github.com/assurance-maladie-digital/design-system/commit/4b5a40e1a2f251c1e64e21703689bde43df7aec9))
  - **DataListItem:** Suppression de l'utilisation du composant `VLayout` déprécié ([#1075](https://github.com/assurance-maladie-digital/design-system/pull/1075)) ([214c4f2](https://github.com/assurance-maladie-digital/design-system/commit/214c4f22cbc163865c63b71694bef6d2824ba1f4))
  - **FileList:** Suppression de l'utilisation du composant `VLayout` déprécié ([#1076](https://github.com/assurance-maladie-digital/design-system/pull/1076)) ([142e27d](https://github.com/assurance-maladie-digital/design-system/commit/142e27d5b40693daec7623f9dfe8ff45bc02340b))
  - **debounce:** Utilisation de `addEventListener` dans la directive ([#1079](https://github.com/assurance-maladie-digital/design-system/pull/1079)) ([645d455](https://github.com/assurance-maladie-digital/design-system/commit/645d455d286799d4f32eba96837332108a70be90))

- 🔥 **Suppressions**
  - **PageCard:** Suppression du composant ([#1066](https://github.com/assurance-maladie-digital/design-system/pull/1066)) ([1175200](https://github.com/assurance-maladie-digital/design-system/commit/11752004fcd5a70876e9c759a294d588ef46097a))
  - **SubHeader:** Suppression des options `layout` inutiles ([#1078](https://github.com/assurance-maladie-digital/design-system/pull/1078)) ([024c1ad](https://github.com/assurance-maladie-digital/design-system/commit/024c1ad115d66d3c1b8152509b5d4a0b35e9a173))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction de la dépendance `vuex` manquante ([#1071](https://github.com/assurance-maladie-digital/design-system/pull/1071)) ([02030c7](https://github.com/assurance-maladie-digital/design-system/commit/02030c7e9be765c5b0a8b45523a9bbd03f3109c8))
  - **template:** Correction de la fermeture de la balise `VCard` dans le fichier `About.vue` ([#1073](https://github.com/assurance-maladie-digital/design-system/pull/1073)) ([0b02155](https://github.com/assurance-maladie-digital/design-system/commit/0b02155016a7df3abead548aea1ae1a86290b493))

- ♻️ **Refactoring**
  - **template:** Utilisation du composant `PageContainer` à la place de `PageCard` ([#1069](https://github.com/assurance-maladie-digital/design-system/pull/1069)) ([d2c32f2](https://github.com/assurance-maladie-digital/design-system/commit/d2c32f21db04c2e77f04f63569dee038a2785dc7))
  - **template:** Renommage du fichier `main.js` en `main.ts` ([#1072](https://github.com/assurance-maladie-digital/design-system/pull/1072)) ([458e472](https://github.com/assurance-maladie-digital/design-system/commit/458e47210fd178dd72b5c2f177a7c1b3627b9f60))

- 🔥 **Suppressions**
  - **config:** Suppression du composant `PageCard` pour le tree-shaking de VueDot ([#1070](https://github.com/assurance-maladie-digital/design-system/pull/1070)) ([66f63e7](https://github.com/assurance-maladie-digital/design-system/commit/66f63e7c25ca9f5956cf24aeea113fc298e4329c))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#1110](https://github.com/assurance-maladie-digital/design-system/pull/1110)) ([69367f6](https://github.com/assurance-maladie-digital/design-system/commit/69367f6525e9e337862f5f837896935e615e2ab6))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#1121](https://github.com/assurance-maladie-digital/design-system/pull/1121)) ([905da01](https://github.com/assurance-maladie-digital/design-system/commit/905da0196818f71a8fba2ff14fb4d7b1a9034aad))

### FormBuilder

- ♻️ **Refactoring**
  - **FormField:** Suppression de l'utilisation du composant `VLayout` déprécié ([#1080](https://github.com/assurance-maladie-digital/design-system/pull/1080)) ([011f6e9](https://github.com/assurance-maladie-digital/design-system/commit/011f6e9f2489c367748f47616abcb8dfaee76d18))
  - **PeriodField:** Suppression de l'utilisation du composant `VLayout` déprécié ([#1081](https://github.com/assurance-maladie-digital/design-system/pull/1081)) ([a860b26](https://github.com/assurance-maladie-digital/design-system/commit/a860b2696442dbf204fd24e58271cbc6dc375dc4))

### Interne

- 🐛 **Corrections de bugs**
  - **playgrounds:** Correction des playgrounds ([#1082](https://github.com/assurance-maladie-digital/design-system/pull/1082)) ([b141e08](https://github.com/assurance-maladie-digital/design-system/commit/b141e0836464e1d126b0ab2a0edc4dfa2be5f5ed))

- ♻️ **Refactoring**
  - **playground:** Refonte des playgrounds ([#1049](https://github.com/assurance-maladie-digital/design-system/pull/1049)) ([1760712](https://github.com/assurance-maladie-digital/design-system/commit/1760712883088452cd84324759ac6b81b33e1403))

- 🔥 **Suppressions**
  - **lerna:** Suppression des propriétés `gitHead` dans les fichiers `package.json` ([#1045](https://github.com/assurance-maladie-digital/design-system/pull/1045)) ([d941896](https://github.com/assurance-maladie-digital/design-system/commit/d94189622cc1fe5e03484472199336a86ba4404d))
  - **playground:** Suppression d'une `div` inutile ([#1077](https://github.com/assurance-maladie-digital/design-system/pull/1077)) ([dbd9878](https://github.com/assurance-maladie-digital/design-system/commit/dbd987889a8b09bbe71988076ede8c24ebc8b1ea))

- 🔧 **Configuration**
  - **ci:** Mise à jour de la configuration de renovate ([#1106](https://github.com/assurance-maladie-digital/design-system/pull/1106)) ([974f29e](https://github.com/assurance-maladie-digital/design-system/commit/974f29e645ea9cf23e4da8002e99f9626a30eadb))
  - **ci:** Mise à jour de `codecov` vers la `v1.2.1` ([#1117](https://github.com/assurance-maladie-digital/design-system/pull/1117)) ([7405b5f](https://github.com/assurance-maladie-digital/design-system/commit/7405b5fcc3744c04217f25b62b19603f1a31c056))

- 📝 **Documentation**
  - **pull-requests:** Mise à jour du template ([#1074](https://github.com/assurance-maladie-digital/design-system/pull/1074)) ([b8da289](https://github.com/assurance-maladie-digital/design-system/commit/b8da289b6d3ec4e0313483795df5227160de9fed))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#1122](https://github.com/assurance-maladie-digital/design-system/pull/1122)) ([e2eb5a9](https://github.com/assurance-maladie-digital/design-system/commit/e2eb5a942f3ed71c81b843e4bd082f1eaffc3646))

- ⬆️ **Dépendances**
  - **@types/jest:** Mise à jour vers la `v26.0.23` ([#1052](https://github.com/assurance-maladie-digital/design-system/pull/1052)) ([dfadb25](https://github.com/assurance-maladie-digital/design-system/commit/dfadb25f7ea95f43dcc183b2e1778e269818086e))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.4.0` ([#1053](https://github.com/assurance-maladie-digital/design-system/pull/1053)) ([b5c76f3](https://github.com/assurance-maladie-digital/design-system/commit/b5c76f3f47ba46202e27788356c459795e35fef4))
  - **cross-env:** Épinglage de la dépendance à la `v7.0.3` ([#1057](https://github.com/assurance-maladie-digital/design-system/pull/1057)) ([2602657](https://github.com/assurance-maladie-digital/design-system/commit/260265707cf180d4152fe0c7b7e6b2bf8c5e99c4))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.13` et de **@vue/test-utils** vers la `v1.2.0` ([#1083](https://github.com/assurance-maladie-digital/design-system/pull/1083)) ([7b30774](https://github.com/assurance-maladie-digital/design-system/commit/7b30774dd8337cc4ad60f1bee5019f78571c8bb8))
  - **core-js:** Mise à jour vers la `v3.12.1` ([#1084](https://github.com/assurance-maladie-digital/design-system/pull/1084)) ([ed5e7af](https://github.com/assurance-maladie-digital/design-system/commit/ed5e7af070aea85f3039b0a679b06b5a063a9d6d))
  - **fs-extra:** Mise à jour vers la `v10` ([#1085](https://github.com/assurance-maladie-digital/design-system/pull/1085)) ([a04feb6](https://github.com/assurance-maladie-digital/design-system/commit/a04feb61c6cffaaf9024e0503ca572079db668c7))
  - **ts-jest:** Mise à jour vers la `v26.5.6` ([#1090](https://github.com/assurance-maladie-digital/design-system/pull/1090)) ([f1bdef2](https://github.com/assurance-maladie-digital/design-system/commit/f1bdef27f10cde61a65738b20660936793dbb153))
  - **lint-staged:** Mise à jour vers la `v11` ([#1093](https://github.com/assurance-maladie-digital/design-system/pull/1093)) ([7dee9be](https://github.com/assurance-maladie-digital/design-system/commit/7dee9be10bc3d2fff473c8d283c8b552cb4285be))
  - **sass-loader:** Mise à jour vers la `v10.2.0` ([#1096](https://github.com/assurance-maladie-digital/design-system/pull/1096)) ([f97b347](https://github.com/assurance-maladie-digital/design-system/commit/f97b347583c3b94da0273bc85e4d68a74005d38c))
  - **vuetify:** Mise à jour vers la `v2.5.0` ([#1098](https://github.com/assurance-maladie-digital/design-system/pull/1098)) ([3cc6ef7](https://github.com/assurance-maladie-digital/design-system/commit/3cc6ef747f8bfba6e3e3682941a5d41eeb994875))
  - **babel:** Mise à jour du monorepo vers la `v7.14.3` ([#1101](https://github.com/assurance-maladie-digital/design-system/pull/1101)) ([9352e52](https://github.com/assurance-maladie-digital/design-system/commit/9352e5232881a56ebeb9157f6b6adc967db2005f))
  - **vue-input-facade:** Mise à jour vers la `v1.3.4` ([#1095](https://github.com/assurance-maladie-digital/design-system/pull/1095)) ([e56a277](https://github.com/assurance-maladie-digital/design-system/commit/e56a277874342306f41d4c50502876585b53a746))
  - **sass:** Mise à jour vers la `v1.34.0` ([#1111](https://github.com/assurance-maladie-digital/design-system/pull/1111)) ([c3c416d](https://github.com/assurance-maladie-digital/design-system/commit/c3c416d76ec69b023d57628d336940860081e50b))
  - **eslint:** Mise à jour vers la `v7.27.0` ([#1114](https://github.com/assurance-maladie-digital/design-system/pull/1114)) ([e997756](https://github.com/assurance-maladie-digital/design-system/commit/e9977560f3dbe3ccf88b5168ad2b55170b6819f4))
  - **ts-node:** Mise à jour vers la `v10` ([#1115](https://github.com/assurance-maladie-digital/design-system/pull/1115)) ([3429d6e](https://github.com/assurance-maladie-digital/design-system/commit/3429d6e8f5d7fb1f577124a2c33052c6a1ba1fe2))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v35` ([#1116](https://github.com/assurance-maladie-digital/design-system/pull/1116)) ([9af2094](https://github.com/assurance-maladie-digital/design-system/commit/9af2094ecbb20aebe38f15c28522002de3182073))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.25.0` ([#1118](https://github.com/assurance-maladie-digital/design-system/pull/1118)) ([35487f4](https://github.com/assurance-maladie-digital/design-system/commit/35487f4ca4e032e0eaa4ccca9cbe6ce867894718))
  - **@types/node:** Mise à jour vers la `v14.17.1` ([#1119](https://github.com/assurance-maladie-digital/design-system/pull/1119)) ([7868c48](https://github.com/assurance-maladie-digital/design-system/commit/7868c48686a44170a4f0769bf36a051ba8a079a4))

## v2.0.0-beta.9

**Version publiée le 22/04/2021.**

Cette version comporte des correctifs sur les composants `DownloadBtn`, `DataList` et `LangBtn`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **LangBtn:** Correction de l'espacement lorsque la prop `hide-down-arrow` est présente ([#1039](https://github.com/assurance-maladie-digital/design-system/pull/1039)) ([6556629](https://github.com/assurance-maladie-digital/design-system/commit/6556629cca23dbd2780a261d2e2f8bec15c55c75))
  - **DataList:** Correction d'un espace en trop sur le dernier item de la liste ([#1040](https://github.com/assurance-maladie-digital/design-system/pull/1040)) ([91a8c07](https://github.com/assurance-maladie-digital/design-system/commit/91a8c07703573899ab42a91513005724c3ce71ed))
  - **DownloadBtn:** Correction du type de la prop `file-promise` et du téléchargement du fichier ([#1041](https://github.com/assurance-maladie-digital/design-system/pull/1041)) ([b5b2fcd](https://github.com/assurance-maladie-digital/design-system/commit/b5b2fcdda70847b13f529456904373392f0a8309))

### Vue Dash

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#1043](https://github.com/assurance-maladie-digital/design-system/pull/1043)) ([b2edc3b](https://github.com/assurance-maladie-digital/design-system/commit/b2edc3bc60cb81c627fc9b18af7a50f03634b1be))

### Interne

- 🔧 **Configuration**
  - **ci:** Utilisation de l'image `cimg/node` à la place de `circle/node` ([#1038](https://github.com/assurance-maladie-digital/design-system/pull/1038)) ([7a809f1](https://github.com/assurance-maladie-digital/design-system/commit/7a809f1d7983da3c2728fc366523361111b58509))
  - **ci:** Mise à jour de `codecov` vers la `v1.1.5` ([#1028](https://github.com/assurance-maladie-digital/design-system/pull/1028)) ([acbac61](https://github.com/assurance-maladie-digital/design-system/commit/acbac614caaccdc8acfefe5f11124fb2802d1bc5))

- 📝 **Documentation**
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#1044](https://github.com/assurance-maladie-digital/design-system/pull/1044)) ([2a52a8f](https://github.com/assurance-maladie-digital/design-system/commit/2a52a8f00623f7e3adbd5e0320f24cca1acfc50b))

- ⬆️ **Dépendances**
  - **vuetify:** Mise à jour vers la `v2.4.11` ([#1033](https://github.com/assurance-maladie-digital/design-system/pull/1033)) ([7f1fdf6](https://github.com/assurance-maladie-digital/design-system/commit/7f1fdf6275d72401f0c043e1abbad0e6977581df))
  - **sass:** Mise à jour vers la `v1.32.11` ([#1035](https://github.com/assurance-maladie-digital/design-system/pull/1035)) ([098733f](https://github.com/assurance-maladie-digital/design-system/commit/098733ff3091915cd922dae7bf96849742219b88))
  - **babel:** Mise à jour du monorepo vers la `v7.13.16` ([#1036](https://github.com/assurance-maladie-digital/design-system/pull/1036)) ([0870dec](https://github.com/assurance-maladie-digital/design-system/commit/0870dec9462a54761254ec7f279a6f10a6889689))
  - **core-js:** Mise à jour vers la `v3.11.0` ([#1042](https://github.com/assurance-maladie-digital/design-system/pull/1042)) ([e50fce3](https://github.com/assurance-maladie-digital/design-system/commit/e50fce350682ad4a87ccbe6cd2c5a8097f3046e2))

## v2.0.0-beta.8

**Version publiée le 19/04/2021.**

Cette version comporte l'ajout des nouveaux composants `DataListGroup` et `PageContainer`, la refonte du composant `DataList` ainsi que plusieurs correctifs sur Vue Dot.

### Vue Dot

- 💥 **Changements majeurs**
  - **DataList:** Suppression de la prop `flex` ([#982](https://github.com/assurance-maladie-digital/design-system/pull/982)) ([725ff60](https://github.com/assurance-maladie-digital/design-system/commit/725ff6026a3af646b3342d160be0fedf761ce73c))

- ✨ **Nouvelles fonctionnalités**
  - **DataListGroup:** Ajout d'un nouveau composant ([#985](https://github.com/assurance-maladie-digital/design-system/pull/985)) ([4dfecf2](https://github.com/assurance-maladie-digital/design-system/commit/4dfecf20f1e78dc8a05f5c52a02febf57924358d))
  - **PageContainer:** Ajout d'un nouveau composant ([#1010](https://github.com/assurance-maladie-digital/design-system/pull/1010)) ([077b7d8](https://github.com/assurance-maladie-digital/design-system/commit/077b7d8c8ce69804d2be45a0f757f1e11b92d95e))
  - **PageContainer:** Ajout de la prop `spacing` ([#1023](https://github.com/assurance-maladie-digital/design-system/pull/1023)) ([28e5bca](https://github.com/assurance-maladie-digital/design-system/commit/28e5bcab39a557c040ab7925f263ca64db3b057c))
  - **PageContainer:** Ajout de la prop `color` ([#1024](https://github.com/assurance-maladie-digital/design-system/pull/1024)) ([1565ab0](https://github.com/assurance-maladie-digital/design-system/commit/1565ab09df783fdfd095dc1b6ae2b8a227ddf32f))

- 🐛 **Corrections de bugs**
  - **DataList:** Correction d'un espace en trop sur le dernier item de la liste ([#984](https://github.com/assurance-maladie-digital/design-system/pull/984)) ([d3512d2](https://github.com/assurance-maladie-digital/design-system/commit/d3512d2ed19502b4f3a5fb6ed9c7cbfed783a969))
  - **DialogBox:** Correction des styles ([#995](https://github.com/assurance-maladie-digital/design-system/pull/995)) ([3ecad7c](https://github.com/assurance-maladie-digital/design-system/commit/3ecad7c3ebdb3cb29d75ffe5fc4fe3276a2e6d46))
  - **PageContainer:** Correction de l'espace non calculé correctement ([#1022](https://github.com/assurance-maladie-digital/design-system/pull/1022)) ([bf88b9b](https://github.com/assurance-maladie-digital/design-system/commit/bf88b9b632fd704a936fc2d7c09b942dabec7066))

- ♻️ **Refactoring**
  - **DataList:** Utilisation de la mixin `widthable` ([#981](https://github.com/assurance-maladie-digital/design-system/pull/981)) ([38c0853](https://github.com/assurance-maladie-digital/design-system/commit/38c0853186519f648b7c034bd9186aafefc8deec))
  - **DataList:** Mise à jour du style par défaut du titre ([#983](https://github.com/assurance-maladie-digital/design-system/pull/983)) ([2728d53](https://github.com/assurance-maladie-digital/design-system/commit/2728d53e80e6eb28b7ffccfe637275296917d010))
  - **SubHeader:** Utilisation du composant `DataListGroup` ([#989](https://github.com/assurance-maladie-digital/design-system/pull/989)) ([c25f357](https://github.com/assurance-maladie-digital/design-system/commit/c25f357a1f633cda7072d1f2236d342fed42b2e6))
  - **SubHeader:** Utilisation de la prop `modal-title` à la place du slot ([#997](https://github.com/assurance-maladie-digital/design-system/pull/997)) ([8136c91](https://github.com/assurance-maladie-digital/design-system/commit/8136c91b6c8e60eeee96ff7f789c1472d4021e76))

### Vue Dash

- ✨ **Nouvelles fonctionnalités**
  - **config:** Ajout des composants `DataListGroup` et `PageContainer` pour le tree-shaking de VueDot ([#1025](https://github.com/assurance-maladie-digital/design-system/pull/1025)) ([877bb4d](https://github.com/assurance-maladie-digital/design-system/commit/877bb4d103c8e57fde0d4733398a35635653034c))

- 🐛 **Corrections de bugs**
  - **template:** Correction d'une faute d'orthographe dans le fichier `.editorconfig` ([#977](https://github.com/assurance-maladie-digital/design-system/pull/977)) ([2728d53](https://github.com/assurance-maladie-digital/design-system/commit/2728d53e80e6eb28b7ffccfe637275296917d010))

- 🔥 **Suppressions**
  - **template:** Suppression du fichier `.eslintignore` ([#975](https://github.com/assurance-maladie-digital/design-system/pull/975)) ([692e8b5](https://github.com/assurance-maladie-digital/design-system/commit/692e8b5bb9261a00a9670cf0e59155b9af77e1f4))
  - **template:** Suppression des commentaires inutiles dans le fichier `tsconfig.json` ([#976](https://github.com/assurance-maladie-digital/design-system/pull/976)) ([09ba95f](https://github.com/assurance-maladie-digital/design-system/commit/09ba95f9983a38efd2c819ddd0310e20cc3399c0))
  - **template:** Suppression des classes inutiles dans le fichier `logo.svg` ([#978](https://github.com/assurance-maladie-digital/design-system/pull/978)) ([5e9ec77](https://github.com/assurance-maladie-digital/design-system/commit/5e9ec776e9e41df95e3494de1a4208f2eb3a5fa6))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#1031](https://github.com/assurance-maladie-digital/design-system/pull/1031)) ([1245c05](https://github.com/assurance-maladie-digital/design-system/commit/1245c052549e8c19285d5b9ede84043eab2b3bca))

### Interne

- 🔧 **Configuration**
  - **config:** Mise à jour de la taille maximale du build ([#1011](https://github.com/assurance-maladie-digital/design-system/pull/1011)) ([e05cb6a](https://github.com/assurance-maladie-digital/design-system/commit/e05cb6aab53419a8ebc8f5d588f437b224279b2f))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#1026](https://github.com/assurance-maladie-digital/design-system/pull/1026)) ([cd06e18](https://github.com/assurance-maladie-digital/design-system/commit/cd06e18c19df846a2d51cf0a91d995cb5bc1f8d7))

- 📝 **Documentation**
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#1032](https://github.com/assurance-maladie-digital/design-system/pull/1032)) ([cbae6d5](https://github.com/assurance-maladie-digital/design-system/commit/cbae6d5b2c4d148b6f6207351950fd9671adc2d5))

- ⬆️ **Dépendances**
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.3.1` ([#969](https://github.com/assurance-maladie-digital/design-system/pull/969)) ([9110b1c](https://github.com/assurance-maladie-digital/design-system/commit/9110b1c5973b0df4dc1d1bb97e681a38e73ccb8c))
  - **@babel/preset-env:** Mise à jour vers la `v7.13.12` ([#971](https://github.com/assurance-maladie-digital/design-system/pull/971)) ([9d29676](https://github.com/assurance-maladie-digital/design-system/commit/9d296768e16665f81109a5d98ead9e741ee24c97))
  - **@types/jest:** Mise à jour vers la `v26.0.22` ([#986](https://github.com/assurance-maladie-digital/design-system/pull/986)) ([f53fb04](https://github.com/assurance-maladie-digital/design-system/commit/f53fb045b9a7eca5d09164b1fce702d7f8144174))
  - **core-js:** Mise à jour vers la `v3.10.0` ([#994](https://github.com/assurance-maladie-digital/design-system/pull/994)) ([0e71a92](https://github.com/assurance-maladie-digital/design-system/commit/0e71a92d5e399ace1c049961349ee9d984702eb6))
  - **vuetify:** Mise à jour vers la `v2.4.9` ([#999](https://github.com/assurance-maladie-digital/design-system/pull/999)) ([fd29bae](https://github.com/assurance-maladie-digital/design-system/commit/fd29bae0887e218862d8533d94fe92530898dc3f))
  - **core-js:** Mise à jour vers la `v3.10.1` ([#1008](https://github.com/assurance-maladie-digital/design-system/pull/1008)) ([5054f0f](https://github.com/assurance-maladie-digital/design-system/commit/5054f0fe2f7d4c41b81227445529f45f6d35d91c))
  - **typescript:** Mise à jour vers la `v4.2.4` ([#1009](https://github.com/assurance-maladie-digital/design-system/pull/1009)) ([b675a1c](https://github.com/assurance-maladie-digital/design-system/commit/b675a1ca0a574b3560a0316ee0e2b3c4d48910e7))
  - **babel:** Mise à jour du monorepo vers la `v7.13.15` ([#1012](https://github.com/assurance-maladie-digital/design-system/pull/1012)) ([a36c71b](https://github.com/assurance-maladie-digital/design-system/commit/a36c71b12130c092cda14f30083c105e3d8aa639))
  - **eslint:** Mise à jour vers la `v7.24.0` ([#1014](https://github.com/assurance-maladie-digital/design-system/pull/1014)) ([e58b67a](https://github.com/assurance-maladie-digital/design-system/commit/e58b67a5ae7034b7cd14c7cb83417d8e699e616d))
  - **@vue/test-utils:** Mise à jour vers la `v1.1.4` ([#1015](https://github.com/assurance-maladie-digital/design-system/pull/1015)) ([fa9dfa3](https://github.com/assurance-maladie-digital/design-system/commit/fa9dfa35e5a24091ad35d7134f31f55987c67539))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.9.0` ([#1016](https://github.com/assurance-maladie-digital/design-system/pull/1016)) ([e6d6720](https://github.com/assurance-maladie-digital/design-system/commit/e6d67208fe7096f921c9337619940357ee525f05))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.11` ([#1017](https://github.com/assurance-maladie-digital/design-system/pull/1017)) ([5cc330e](https://github.com/assurance-maladie-digital/design-system/commit/5cc330e114a46f6a2c45a62299a8f60e575faac4))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.22.0` ([#1018](https://github.com/assurance-maladie-digital/design-system/pull/1018)) ([3153543](https://github.com/assurance-maladie-digital/design-system/commit/315354323f4330be37886fbdccef51c87355407b))
  - **ts-jest:** Mise à jour vers la `v26.5.5` ([#1021](https://github.com/assurance-maladie-digital/design-system/pull/1021)) ([721c9bc](https://github.com/assurance-maladie-digital/design-system/commit/721c9bcdecc71cf10b1ae5755106e798177da6bd))
  - **@types/node:** Mise à jour vers la `v14.14.41` ([#1027](https://github.com/assurance-maladie-digital/design-system/pull/1027)) ([47caec5](https://github.com/assurance-maladie-digital/design-system/commit/47caec536449152a8a588a61819835397adfa288))
  - **sass:** Mise à jour vers la `v1.32.10` ([#1029](https://github.com/assurance-maladie-digital/design-system/pull/1029)) ([fa336e3](https://github.com/assurance-maladie-digital/design-system/commit/fa336e34a1b5ffc8481faa24f80ef3b9f856200f))
  - **@types/figlet:** Mise à jour vers la `v1.5.1` ([#1030](https://github.com/assurance-maladie-digital/design-system/pull/1030)) ([2b112f6](https://github.com/assurance-maladie-digital/design-system/commit/2b112f66d25126e4df07291cf75657705cbfe82d))

### 📚 Guide de migration

#### Utilisation du nouveau composant `DataListGroup`

La prop `flex` du composant a été supprimée, et ce comportement est maintenant porté par le nouveau composant `DataListGroup`.

Si vous utilisiez ce fonctionnement dans votre projet pour définir plusieurs colonnes de données :

```html
<DataList
	:items="data"
	flex
/>
```

avec la structure de données suivante :

```ts
import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';

data: DataList = [
	{
		key: 'Nom',
		value: 'Dupont'
	},
	{
		key: 'Prénom',
		value: 'Paul'
	},
	// Autres items
];
```

Vous devez maintenant utiliser le composant `DataListGroup` :

```html
<DataListGroup :items="items" />
```

avec la structure de données suivante :

```ts
items: DataListGroupItems = [
	{
		items: [
			{
				key: 'Nom',
				value: 'Dupont'
			},
			// Autres items
		]
	},
	{
		items: [
			{
				key: 'Prénom',
				value: 'Paul'
			},
			// Autres items
		]
	},
	// Autres items
```

#### Renommer la prop `data-lists` sur le `SubHeader`

La prop `data-lists` a été renommée en `data-list-group-items` :

```diff
<SubHeader
-	:data-lists="items"
+	:data-list-group-items="items"
>
```

## v2.0.0-beta.7

**Version publiée le 19/03/2021.**

Cette version comporte la mise à jour des couleurs du thème ainsi que plusieurs correctifs sur Vue Dot et Vue Dash.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **FooterBtn:** Correction de la couleur du bouton écrasée par Vuetify avec la prop `inert` ([#939](https://github.com/assurance-maladie-digital/design-system/pull/939)) ([22dc501](https://github.com/assurance-maladie-digital/design-system/commit/22dc5016efbf11cdd502a34eede9df1e68cd5b03))
  - **SubHeader:** Correction de la couleur des boutons d'actions dans les `DataList` ([#957](https://github.com/assurance-maladie-digital/design-system/pull/957)) ([49a102e](https://github.com/assurance-maladie-digital/design-system/commit/49a102ef8db1f54e6e008ad04116ce7d4c24908b))
  - **UploadWorkflow:** Correction de l'événement `view-file` non émis ([#959](https://github.com/assurance-maladie-digital/design-system/pull/959)) ([11dadfb](https://github.com/assurance-maladie-digital/design-system/commit/11dadfb947e9e820c9065c4f8640bd49cb1d8b6e))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **config:** Ajout des composants manquants pour le tree-shaking de VueDot ([#948](https://github.com/assurance-maladie-digital/design-system/pull/948)) ([17348c0](https://github.com/assurance-maladie-digital/design-system/commit/17348c088ecca36c003db85e261c7a11fb820254))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#967](https://github.com/assurance-maladie-digital/design-system/pull/967)) ([f54073f](https://github.com/assurance-maladie-digital/design-system/commit/f54073f8356785e8e36f3570be05bb8ba7e02618))

### Design Tokens

- ♻️ **Refactoring**
  - **colors:** Mise à jour des couleurs du thème ([#935](https://github.com/assurance-maladie-digital/design-system/pull/935)) ([18ac9cb](https://github.com/assurance-maladie-digital/design-system/commit/18ac9cb11d2e55b1146735d821770ae390c6c060))

### Interne

- ♻️ **Refactoring**
  - **playground:** Mise à jour des styles suite à la mise à jour du thème ([#955](https://github.com/assurance-maladie-digital/design-system/pull/955)) ([4e6b777](https://github.com/assurance-maladie-digital/design-system/commit/4e6b777eaacaced206c77a4a4b811ebadfba3a1b))

- 📝 **Documentation**
  - **LICENSE:** Mise à jour de la licence ([#947](https://github.com/assurance-maladie-digital/design-system/pull/947)) ([e83ad12](https://github.com/assurance-maladie-digital/design-system/commit/e83ad12060e231d667b46cf950134b9c14151c0b))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#968](https://github.com/assurance-maladie-digital/design-system/pull/968)) ([a3f7adf](https://github.com/assurance-maladie-digital/design-system/commit/a3f7adfad979ae73150c3482e0cce1bb44f7476a))

- ⬆️ **Dépendances**
  - **core-js:** Mise à jour vers la `v3.9.1` ([#913](https://github.com/assurance-maladie-digital/design-system/pull/913)) ([2a3c2c7](https://github.com/assurance-maladie-digital/design-system/commit/2a3c2c7b1c59c47f3776c29d3c151a8265d4593c))
  - **sass:** Mise à jour vers la `v1.32.8` ([#915](https://github.com/assurance-maladie-digital/design-system/pull/915)) ([03a86bb](https://github.com/assurance-maladie-digital/design-system/commit/03a86bb9092af743c792d2106b64b4d033110f3d))
  - **@babel/preset-env:** Mise à jour vers la `v7.13.9` ([#930](https://github.com/assurance-maladie-digital/design-system/pull/930)) ([eef7033](https://github.com/assurance-maladie-digital/design-system/commit/eef70338f0bb9c34c9887fd5b888f2e6dc27d1d2))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.7.0` ([#931](https://github.com/assurance-maladie-digital/design-system/pull/931)) ([c857651](https://github.com/assurance-maladie-digital/design-system/commit/c857651baca753ab8ac608716cf811befc452867))
  - **lerna:** Mise à jour vers la `v4` ([#933](https://github.com/assurance-maladie-digital/design-system/pull/933)) ([226be74](https://github.com/assurance-maladie-digital/design-system/commit/226be74146a7567422aae8dba6026de02cfff409))
  - **typescript:** Mise à jour vers la `v4.2.3` ([#938](https://github.com/assurance-maladie-digital/design-system/pull/938)) ([49ab486](https://github.com/assurance-maladie-digital/design-system/commit/49ab4860575a9853c740657900f76fe2b6da8ec5))
  - **babel:** Mise à jour du monorepo vers la `v7.13.10` ([#941](https://github.com/assurance-maladie-digital/design-system/pull/941)) ([2745f3c](https://github.com/assurance-maladie-digital/design-system/commit/2745f3cbaf165f04e674f4e1ddf20374eced560d))
  - **eslint:** Mise à jour vers la `v7.22.0` ([#949](https://github.com/assurance-maladie-digital/design-system/pull/949)) ([c661f8a](https://github.com/assurance-maladie-digital/design-system/commit/c661f8afc216aaacc5ad71eecc931b6e6837c625))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v32.3.0` ([#950](https://github.com/assurance-maladie-digital/design-system/pull/950)) ([3a23f50](https://github.com/assurance-maladie-digital/design-system/commit/3a23f5032674259916b6131869b06c270979ad57))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.18.0` ([#951](https://github.com/assurance-maladie-digital/design-system/pull/951)) ([c5bd74d](https://github.com/assurance-maladie-digital/design-system/commit/c5bd74d97779e2b9b4971b957f938583652452b1))
  - **vuetify:** Mise à jour vers la `v2.4.7` ([#960](https://github.com/assurance-maladie-digital/design-system/pull/960)) ([7b9ed08](https://github.com/assurance-maladie-digital/design-system/commit/7b9ed080de1142822fd00a868cfebc0108e2197a))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.12` ([#961](https://github.com/assurance-maladie-digital/design-system/pull/961)) ([429df88](https://github.com/assurance-maladie-digital/design-system/commit/429df886349b455edf8f87cd47d3caf3a2a9ff7c))
  - **ts-jest:** Mise à jour vers la `v26.5.4` ([#962](https://github.com/assurance-maladie-digital/design-system/pull/962)) ([7a1757d](https://github.com/assurance-maladie-digital/design-system/commit/7a1757d3fde111ec87d6197d67c1fd45512ac063))
  - **@types/jest:** Mise à jour vers la `v26.0.21` ([#963](https://github.com/assurance-maladie-digital/design-system/pull/963)) ([3810918](https://github.com/assurance-maladie-digital/design-system/commit/3810918bed51ab6dce1188b4e7d360d18253b319))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.3.0` ([#965](https://github.com/assurance-maladie-digital/design-system/pull/965)) ([42246b4](https://github.com/assurance-maladie-digital/design-system/commit/42246b418a31919c093db84cab0b3c0048732b2a))
  - **@types/node:** Mise à jour vers la `v14` ([#966](https://github.com/assurance-maladie-digital/design-system/pull/966)) ([16c87a5](https://github.com/assurance-maladie-digital/design-system/commit/16c87a56ff568100737685ce542f5c0c123d433b))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.8` ([#927](https://github.com/assurance-maladie-digital/design-system/pull/927)) ([350a1ba](https://github.com/assurance-maladie-digital/design-system/commit/350a1badae73d39639711071d5c3b78cff410ce3))

## v2.0.0-beta.6

**Version publiée le 19/02/2021.**

Cette version comporte la refonte du module `notification` ainsi que de nouvelles fonctionnalités comme l'ajout du composant `DownloadBtn` et de la fonction `downloadFile`, et plusieurs correctifs sur Vue Dot et Vue Dash.

### Vue Dot

- 💥 **Changements majeurs**
  - **notification:** Mise à jour de l'API du module ([#871](https://github.com/assurance-maladie-digital/design-system/pull/871)) ([a867125](https://github.com/assurance-maladie-digital/design-system/commit/a8671251f916556f81c71d0ac088c8adff082e60))

- ✨ **Nouvelles fonctionnalités**
  - **DataList:** Ajout de l'attribut `class` dans les items ([#851](https://github.com/assurance-maladie-digital/design-system/pull/851)) ([232b0e7](https://github.com/assurance-maladie-digital/design-system/commit/232b0e79ba7fcd12f2647fde03c86907d4ba8c74))
  - **NotificationBar:** Ajout d'icônes par défaut ([#872](https://github.com/assurance-maladie-digital/design-system/pull/872)) ([ab50ce0](https://github.com/assurance-maladie-digital/design-system/commit/ab50ce0438c1a8479caa8a3ddaec858c4b5e7910))
  - **constants:** Ajout de l'énumération `STATE_ENUM` ([#883](https://github.com/assurance-maladie-digital/design-system/pull/883)) ([02ac43f](https://github.com/assurance-maladie-digital/design-system/commit/02ac43fa349b7e1124130349118a703608384fa8))
  - **DownloadBtn:** Ajout d'un nouveau composant et de la fonction `downloadFile` ([#781](https://github.com/assurance-maladie-digital/design-system/pull/781)) ([988039b](https://github.com/assurance-maladie-digital/design-system/commit/988039b081b9dbb3aa1fcf606fdd2f6e54564aa3))
  - **DatePicker:** Transmission des slots du `VTextField` ([#812](https://github.com/assurance-maladie-digital/design-system/pull/812)) ([251416b](https://github.com/assurance-maladie-digital/design-system/commit/251416b9aa20d3b731a8117ba4dabd7f4cf26f27))

- 🐛 **Corrections de bugs**
  - **DatePicker:** Correction des slots conditionnels qui cassent la directive `vue-input-facade` ([#828](https://github.com/assurance-maladie-digital/design-system/pull/828)) ([62ebec0](https://github.com/assurance-maladie-digital/design-system/commit/62ebec0c3fb768dda42b63070189ef68e7d2cd1b))
  - **LocalStorageUtility:** Correction du préfixe manquant dans la méthode `removeItem` ([#901](https://github.com/assurance-maladie-digital/design-system/pull/901)) ([c7afef6](https://github.com/assurance-maladie-digital/design-system/commit/c7afef688d2b3eb83460d310ab35046bb9a25424))
  - **DatePicker:** Correction de l'espacement du slot `prepend` ([#908](https://github.com/assurance-maladie-digital/design-system/pull/908)) ([5074a55](https://github.com/assurance-maladie-digital/design-system/commit/5074a558603c8dbc664a6e8dedcaf845e8b10d36))

- ♻️ **Refactoring**
  - **TableToolbar:** Renommage de la prop `create-btn` en `add-btn` ([#849](https://github.com/assurance-maladie-digital/design-system/pull/849)) ([98a8ce3](https://github.com/assurance-maladie-digital/design-system/commit/98a8ce335350350174242452fa90f41f11452e72))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction de l'utilisation du composant `ErrorPage` ([#839](https://github.com/assurance-maladie-digital/design-system/pull/839)) ([62d9c32](https://github.com/assurance-maladie-digital/design-system/commit/62d9c3209e85896ce0d0548b3158fc59321cd00a))
  - **template:** Correction de l'export du service `formatDate` ([#840](https://github.com/assurance-maladie-digital/design-system/pull/840)) ([a076f3a](https://github.com/assurance-maladie-digital/design-system/commit/a076f3a7965f930bc257242b6eda032975f81017))

- ♻️ **Refactoring**
  - **template:** Réécriture du commentaire du service API exemple `folders` ([#841](https://github.com/assurance-maladie-digital/design-system/pull/841)) ([d3b9ea3](https://github.com/assurance-maladie-digital/design-system/commit/d3b9ea304baa84b76dc5d23f5ac7b33d7d0c2e17))
  - **template:** Mise à jour de l'utilisation du module `notification` ([#873](https://github.com/assurance-maladie-digital/design-system/pull/873)) ([4cc853b](https://github.com/assurance-maladie-digital/design-system/commit/4cc853b724918f53779f309e7c94777148fbd404))

- 🔥 **Suppressions**
  - **template:** Suppression de la classe `main-ctn` non utilisée dans le composant `App` ([#842](https://github.com/assurance-maladie-digital/design-system/pull/842)) ([9100b7a](https://github.com/assurance-maladie-digital/design-system/commit/9100b7a49024e9a50504b1987560b04dfc49dcbf))

- 🔧 **Configuration**
  - **config:** Ajout du champ `engines` au fichier `package.json` ([#906](https://github.com/assurance-maladie-digital/design-system/pull/906)) ([ec1eec4](https://github.com/assurance-maladie-digital/design-system/commit/ec1eec41a86911a6f4fb76cddbec2f9407912b23))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#908](https://github.com/assurance-maladie-digital/design-system/pull/908)) ([e93315b](https://github.com/assurance-maladie-digital/design-system/commit/e93315b5ab17c1410b2b76392e0923651b27e47b))

### Interne

- ♻️ **Refactoring**
  - **playground:** Mise à jour des styles ([#885](https://github.com/assurance-maladie-digital/design-system/pull/885)) ([237ef28](https://github.com/assurance-maladie-digital/design-system/commit/237ef2891e17c189e4423d7c64935c2314f42bef))

- 🔧 **Configuration**
  - **config:** Mise à jour de la taille maximale du build ([#822](https://github.com/assurance-maladie-digital/design-system/pull/822)) ([d3b64be](https://github.com/assurance-maladie-digital/design-system/commit/d3b64beec8e2e2250434e110fd6410c401db7174))

- 📝 **Documentation**
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#916](https://github.com/assurance-maladie-digital/design-system/pull/916)) ([d395c7f](https://github.com/assurance-maladie-digital/design-system/commit/d395c7f5c24e39f999a456f478f74dcbd32fcd2b))

- ⬆️ **Dépendances**
  - **core-js:** Mise à jour vers la `v3.8.3` ([#832](https://github.com/assurance-maladie-digital/design-system/pull/832)) ([e32c91c](https://github.com/assurance-maladie-digital/design-system/commit/e32c91c5b3418581e502c82ce97ef0fd16f92b17))
  - **fs-extra:** Mise à jour vers la `v9.1.0` ([#834](https://github.com/assurance-maladie-digital/design-system/pull/834)) ([f6079fb](https://github.com/assurance-maladie-digital/design-system/commit/f6079fbfb6c1e24a366127942919b174c94589b4))
  - **dayjs:** Mise à jour vers la `v1.10.4` ([#844](https://github.com/assurance-maladie-digital/design-system/pull/844)) ([b443a69](https://github.com/assurance-maladie-digital/design-system/commit/b443a69fa09a92f62a764cf240311317b7c3e160))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.11` ([#845](https://github.com/assurance-maladie-digital/design-system/pull/845)) ([22b1625](https://github.com/assurance-maladie-digital/design-system/commit/22b1625e8eba7a5d35ebf0917c5424939a3a615c))
  - **vue-router/vuex:** Mise à jour de **vue-router** vers la `v3.5.1` et de **vuex** vers la `v3.6.2` ([#852](https://github.com/assurance-maladie-digital/design-system/pull/852)) ([173f133](https://github.com/assurance-maladie-digital/design-system/commit/173f1334594c0b8b5fabe8535ea6273233ad0943))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.1.0` ([#855](https://github.com/assurance-maladie-digital/design-system/pull/855)) ([ec99581](https://github.com/assurance-maladie-digital/design-system/commit/ec995810e6d4292917dc9a935fa8a79c63b04a42))
  - **@vue/test-utils:** Mise à jour vers la `v1.1.3` ([#879](https://github.com/assurance-maladie-digital/design-system/pull/879)) ([3b2e342](https://github.com/assurance-maladie-digital/design-system/commit/3b2e342f460febec27c1d40109d6caedb8171ae1))
  - **vuetify-loader:** Mise à jour vers la `v1.7.2` ([#881](https://github.com/assurance-maladie-digital/design-system/pull/881)) ([1e16b11](https://github.com/assurance-maladie-digital/design-system/commit/1e16b1157bfc7b681a7c9ca023549eb4a3165f1c))
  - **lint-staged:** Mise à jour vers la `v10.5.4` ([#884](https://github.com/assurance-maladie-digital/design-system/pull/884)) ([251416b](https://github.com/assurance-maladie-digital/design-system/commit/251416b9aa20d3b731a8117ba4dabd7f4cf26f27))
  - **ts-jest:** Mise à jour vers la `v26.5.1` ([#889](https://github.com/assurance-maladie-digital/design-system/pull/889)) ([a9e1642](https://github.com/assurance-maladie-digital/design-system/commit/a9e164237a3f70c43dc315dd3515ee5f2720c196))
  - **vuetify:** Mise à jour vers la `v2.4.4` ([#891](https://github.com/assurance-maladie-digital/design-system/pull/891)) ([227d2ae](https://github.com/assurance-maladie-digital/design-system/commit/227d2ae7c390d901e167cabc2495454659d3a856))
  - **sass:** Mise à jour vers la `v1.32.7` ([#892](https://github.com/assurance-maladie-digital/design-system/pull/892)) ([acef4e8](https://github.com/assurance-maladie-digital/design-system/commit/acef4e8ac8f28a389362b4ceebfc7a65e0a6a1ac))
  - **typescript:** Mise à jour vers la `v4.1.5` ([#893](https://github.com/assurance-maladie-digital/design-system/pull/893)) ([b7b8a8d](https://github.com/assurance-maladie-digital/design-system/commit/b7b8a8d66d7190b5c51cb35c276fdd645fd1f41c))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.7` ([#895](https://github.com/assurance-maladie-digital/design-system/pull/895)) ([84a4ef5](https://github.com/assurance-maladie-digital/design-system/commit/84a4ef5f0cad79bb105bb5e0605e73585b9714d8))
  - **babel:** Mise à jour du monorepo vers la `v7.12.16` ([#896](https://github.com/assurance-maladie-digital/design-system/pull/896)) ([d5794fd](https://github.com/assurance-maladie-digital/design-system/commit/d5794fd575f8c36a07b6c09dec4dc132bd9dc941))
  - **@types/node:** Mise à jour vers la `v12.20.1` ([#897](https://github.com/assurance-maladie-digital/design-system/pull/897)) ([6e2a2af](https://github.com/assurance-maladie-digital/design-system/commit/6e2a2affd4193a84e993c27b8e80505955c0308f))
  - **eslint:** Mise à jour vers la `v7.20.0` ([#898](https://github.com/assurance-maladie-digital/design-system/pull/898)) ([7ad2a9e](https://github.com/assurance-maladie-digital/design-system/commit/7ad2a9eef0afe91f9f63ed6c0e5e33c6ef1ad101))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.6.0` ([#899](https://github.com/assurance-maladie-digital/design-system/pull/899)) ([10b375a](https://github.com/assurance-maladie-digital/design-system/commit/10b375ad084191284765322722150cb740c40bd1))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v32.0.2` ([#900](https://github.com/assurance-maladie-digital/design-system/pull/900)) ([dde6d47](https://github.com/assurance-maladie-digital/design-system/commit/dde6d47277d13ab404b370575e61facdf26c5680))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.15.1` ([#902](https://github.com/assurance-maladie-digital/design-system/pull/902)) ([f79f5ec](https://github.com/assurance-maladie-digital/design-system/commit/f79f5ecda1d8189437e79f883e8addeb1d82c987))

### 📚 Guide de migration

#### Renommer `notify` et `rmNotif`

Les méthodes `notify` et `rmNotif` du module `notification` ont été renommées en `addNotification` et `clearNotification`, vous pouvez les renommer à travers votre projet, par exemple :

```diff
-methods: mapActions('notification', ['notify', 'rmNotif'])
+methods: mapActions('notification', ['addNotification', 'clearNotification'])
```

Deux méthodes `add` et `clear` on également été ajoutées pour simplifier l'utilisation hors des composants :

```diff
-store.dispatch('notification/notify', notification);
+store.dispatch('notification/add', notification);
-store.dispatch('notification/rmNotif');
+store.dispatch('notification/clear');
```

#### Renommer `show-create-btn` et `create-btn-label` sur `TableToolbar`

Les props `show-create-btn` et `create-btn-label` on été renommées en `show-add-btn` et `add-btn-label` :

```diff
<TableToolbar
-	show-create-btn
+	show-add-btn
-	create-btn-label="Ajouter"
+	add-btn-label="Ajouter"
>
```

## v2.0.0-beta.5

**Version publiée le 18/01/2021.**

Cette version comporte l'ajout du composant `TableToolbar` ainsi que l'ajout des styles communs dans Vue Dot et plusieurs correctifs sur le FormBuilder.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **styles:** Ajout des styles communs `vuetify.scss` et `utilities.scss` ([#625](https://github.com/assurance-maladie-digital/design-system/pull/625)) ([689279d](https://github.com/assurance-maladie-digital/design-system/commit/689279d1eed92256fffb346a041e4a04b764f150))
  - **TableToolbar:** Ajout d'un nouveau composant ([#735](https://github.com/assurance-maladie-digital/design-system/pull/375)) ([4b88587](https://github.com/assurance-maladie-digital/design-system/commit/4b88587d39b8807957832e20702a0d1dd3b29fab))

- 🐛 **Corrections de bugs**
  - **styles:** Correction du style des onglets ([#766](https://github.com/assurance-maladie-digital/design-system/pull/766)) ([ceb0534](https://github.com/assurance-maladie-digital/design-system/commit/ceb0534884e37f89df13ddde14f7551659863441))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#813](https://github.com/assurance-maladie-digital/design-system/pull/813)) ([ecdcae0](https://github.com/assurance-maladie-digital/design-system/commit/ecdcae00c497ef96d2022a865be82e1b89a322b8))

### Vue Dash

- ♻️ **Refactoring**
  - **template:** Utilisation des styles communs de Vue Dot ([#624](https://github.com/assurance-maladie-digital/design-system/pull/624)) ([31c3376](https://github.com/assurance-maladie-digital/design-system/commit/31c3376d6fcda97447c40aeb6e72bd61862b9f69))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#830](https://github.com/assurance-maladie-digital/design-system/pull/830)) ([3fb4dba](https://github.com/assurance-maladie-digital/design-system/commit/3fb4dba025ad7d6a9e4411b0b10f99ff542201d2))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#827](https://github.com/assurance-maladie-digital/design-system/pull/827)) ([c48c6eb](https://github.com/assurance-maladie-digital/design-system/commit/c48c6ebd58cf6c0067af99fc6f73c4245d3634e3))

### FormBuilder

- 🐛 **Corrections de bugs**
  - **fields:** Suppression des types non standards sur les champs de sélection ([#814](https://github.com/assurance-maladie-digital/design-system/pull/814)) ([1936781](https://github.com/assurance-maladie-digital/design-system/commit/1936781d942a1df3b76923df6175a32290d3b9f7))

- ♻️ **Refactoring**
  - **template:** Utilisation des styles communs de Vue Dot ([#767](https://github.com/assurance-maladie-digital/design-system/pull/767)) ([a076f3a](https://github.com/assurance-maladie-digital/design-system/commit/a076f3a7965f930bc257242b6eda032975f81017))

- 🔥 **Suppressions**
  - **fields:** Suppression du composant `SelectField` non utilisé ([#815](https://github.com/assurance-maladie-digital/design-system/pull/815)) ([09a3ba4](https://github.com/assurance-maladie-digital/design-system/commit/09a3ba44f1eb11ebe168d75cfb92c20ba27a1e71))

### Interne

- 🔒 **Sécurité**
  - **ini:** Mise à jour vers de la `v1.3.5` vers la `v1.3.8` ([#793](https://github.com/assurance-maladie-digital/design-system/pull/793)) ([ea0eba1](https://github.com/assurance-maladie-digital/design-system/commit/ea0eba186924b960474630154610aa9d301fdfe6))

- 📝 **Documentation**
  - **issues:** Correction du template pour les demandes de nouvelles fonctionnalités ([#765](https://github.com/assurance-maladie-digital/design-system/pull/765)) ([e056de9](https://github.com/assurance-maladie-digital/design-system/commit/e056de9c9fb679677ca77ae47ad44b28c831639f))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#829](https://github.com/assurance-maladie-digital/design-system/pull/829)) ([7034077](https://github.com/assurance-maladie-digital/design-system/commit/703407742fbb118593947a4bc44627393ecee814))

- ⬆️ **Dépendances**
  - **lint-staged:** Mise à jour vers la `v10.5.3` ([#772](https://github.com/assurance-maladie-digital/design-system/pull/772)) ([aee38de](https://github.com/assurance-maladie-digital/design-system/commit/aee38de5f56c96ec827c9b960396ddb53b392e80))
  - **ts-node:** Mise à jour vers la `v9.1.1` ([#777](https://github.com/assurance-maladie-digital/design-system/pull/777)) ([0bb5cca](https://github.com/assurance-maladie-digital/design-system/commit/0bb5cca27e451f7e69c408406b589374fa8a852e))
  - **babel:** Mise à jour du monorepo vers la `v7.12.10` ([#785](https://github.com/assurance-maladie-digital/design-system/pull/785)) ([1a7fa22](https://github.com/assurance-maladie-digital/design-system/commit/1a7fa22da2f11a473f8b1bfe668bb3e148c8c343))
  - **typescript:** Mise à jour vers la `v4.1.3` ([#790](https://github.com/assurance-maladie-digital/design-system/pull/790)) ([d761ff2](https://github.com/assurance-maladie-digital/design-system/commit/d761ff2a16bfc53da2d00403253e4195fcedcde1))
  - **@vue/test-utils:** Mise à jour vers la `v1.1.2` ([#792](https://github.com/assurance-maladie-digital/design-system/pull/792)) ([08c1e39](https://github.com/assurance-maladie-digital/design-system/commit/08c1e39ae82900fae1c51db96dc56807a3c9a31b))
  - **@babel/preset-env:** Mise à jour vers la `v7.12.11` ([#795](https://github.com/assurance-maladie-digital/design-system/pull/795)) ([28a9507](https://github.com/assurance-maladie-digital/design-system/commit/28a9507d84456bb5b9580deb132bf2616068e192))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.4.1` ([#797](https://github.com/assurance-maladie-digital/design-system/pull/797)) ([b75a4b9](https://github.com/assurance-maladie-digital/design-system/commit/b75a4b9b7646a69859c43db0624142eeeef2813b))
  - **vuetify:** Mise à jour vers la `v2.4.2` ([#801](https://github.com/assurance-maladie-digital/design-system/pull/801)) ([7d08907](https://github.com/assurance-maladie-digital/design-system/commit/7d08907945f194aa1aa28181b44812d837f44512))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.6` ([#803](https://github.com/assurance-maladie-digital/design-system/pull/803)) ([16c8636](https://github.com/assurance-maladie-digital/design-system/commit/16c863624250126428b9a0a2eadcb5f6c5a81f1b))
  - **dayjs:** Mise à jour vers la `v1.10.3` ([#804](https://github.com/assurance-maladie-digital/design-system/pull/804)) ([e23f9d2](https://github.com/assurance-maladie-digital/design-system/commit/e23f9d29e8c8baad5a3f3014ba598ed294c1a25f))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.4.1` ([#805](https://github.com/assurance-maladie-digital/design-system/pull/805)) ([111e636](https://github.com/assurance-maladie-digital/design-system/commit/111e63636c97c38bdf8e4c2d8014a1e659765c55))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.0.9` ([#806](https://github.com/assurance-maladie-digital/design-system/pull/806)) ([4266529](https://github.com/assurance-maladie-digital/design-system/commit/4266529ec5da9e4c9ada11a82f8653427d6163a1))
  - **core-js:** Mise à jour vers la `v3.8.2` ([#808](https://github.com/assurance-maladie-digital/design-system/pull/808)) ([3d3982c](https://github.com/assurance-maladie-digital/design-system/commit/3d3982c4aca154a6dd243490f2d14e723f6cb930))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.10` ([#809](https://github.com/assurance-maladie-digital/design-system/pull/809)) ([4ff6aba](https://github.com/assurance-maladie-digital/design-system/commit/4ff6abad56ad22cd67de3566cecc5f3bba36478a))
  - **@types/jest:** Mise à jour vers la `v26.0.20` ([#810](https://github.com/assurance-maladie-digital/design-system/pull/810)) ([7a480d1](https://github.com/assurance-maladie-digital/design-system/commit/7a480d1258cdab2d875382598ebe550576ee5b0e))
  - **sass-loader:** Mise à jour vers la `v10.1.1` ([#818](https://github.com/assurance-maladie-digital/design-system/pull/818)) ([47b8c28](https://github.com/assurance-maladie-digital/design-system/commit/47b8c289e468c123907cc9ac976a7a7cd9d553c4))
  - **webpack:** Mise à jour vers la `v4.46.0` ([#819](https://github.com/assurance-maladie-digital/design-system/pull/819)) ([33e5960](https://github.com/assurance-maladie-digital/design-system/commit/33e59603c9ef1490b3a2aa55ff0fca06ec8f44cc))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.13.0` ([#820](https://github.com/assurance-maladie-digital/design-system/pull/820)) ([df241b9](https://github.com/assurance-maladie-digital/design-system/commit/df241b90b83e8b5e9f53dd9c0b090748d9b2dc95))
  - **sass:** Mise à jour vers la `v1.32.4` ([#821](https://github.com/assurance-maladie-digital/design-system/pull/821)) ([261ba15](https://github.com/assurance-maladie-digital/design-system/commit/261ba152fec64229965a27fa00590cefb805da64))
  - **@types/node:** Mise à jour vers la `v12.19.14` ([#823](https://github.com/assurance-maladie-digital/design-system/pull/823)) ([23668ac](https://github.com/assurance-maladie-digital/design-system/commit/23668acba84ec2bb32f91f8554d7c243f655d733))
  - **eslint:** Mise à jour vers la `v7.18.0` ([#824](https://github.com/assurance-maladie-digital/design-system/pull/824)) ([154548e](https://github.com/assurance-maladie-digital/design-system/commit/154548e41d354e98dfe91db5a8fb81c769d2b629))
  - **@mdi/js:** Mise à jour vers la `v5.9.55` ([#825](https://github.com/assurance-maladie-digital/design-system/pull/825)) ([bafb88e](https://github.com/assurance-maladie-digital/design-system/commit/bafb88e51b4c6decb6e816a7d3e975ef9013b545))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v31.0.7` ([#826](https://github.com/assurance-maladie-digital/design-system/pull/826)) ([32722e1](https://github.com/assurance-maladie-digital/design-system/commit/32722e137368adf04326682952c1c1341e47c929))

### 📚 Guide de migration

#### Utiliser les styles de Vue Dot

Les styles communs aux applications tels que que les ajustements de Vuetify et les classes utilitaires les plus utilisées ont été ajoutés dans Vue Dot, vous pouvez donc supprimer ces styles de vos projets.

Certaines classes ont été renommées par convention :

```diff
-class="custom-table"
+class="vd-custom-table"
```

```diff
-class="no-max-width"
+class="max-width-none"
```

## v2.0.0-beta.4

**Version publiée le 30/11/2020.**

Cette version comporte l'ajout des champs personnalisés sur le FormBuilder ainsi que plusieurs correctifs sur Vue Dot, Vue Dash et le FormBuilder.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **ErrorPage:** Correction du type de la prop `btn-route` ([#736](https://github.com/assurance-maladie-digital/design-system/pull/736)) ([9b9bbd2](https://github.com/assurance-maladie-digital/design-system/commit/9b9bbd25afbe722e3cd5275a2a370dca9e1fedc4))
  - **LangBtn:** Correction de la valeur par défaut de la prop `available-languages` ([#737](https://github.com/assurance-maladie-digital/design-system/pull/737)) ([e6cdeac](https://github.com/assurance-maladie-digital/design-system/commit/e6cdeac5ab9c3eedfcce277fec6657e4d57c78a1))
  - **FileUpload:** Correction du type `ErrorCodeType` et de l'interface `ErrorEvent` ([#738](https://github.com/assurance-maladie-digital/design-system/pull/738)) ([d00088f](https://github.com/assurance-maladie-digital/design-system/commit/d00088f5a2584b8ae2dcc6d1464f76e47f5b4f19))
  - **peerDependencies:** Correction de la dépendance `@cnamts/design-tokens` manquante ([#739](https://github.com/assurance-maladie-digital/design-system/pull/739)) ([bab2654](https://github.com/assurance-maladie-digital/design-system/commit/bab26549758ef8dd93494e02fd406a9e2b0b7c56))
  - **PaginatedTable:** Correction de l'événement `update:options` émis deux fois ([#766](https://github.com/assurance-maladie-digital/design-system/pull/766)) ([6484e72](https://github.com/assurance-maladie-digital/design-system/commit/6484e72a6d665f773264db83e677533ff5fcb403))
  - **rules:** Correction des messages d'erreur des règles de validation `notAfterToday` et `notBeforeToday` ([#767](https://github.com/assurance-maladie-digital/design-system/pull/767)) ([6c1f24a](https://github.com/assurance-maladie-digital/design-system/commit/6c1f24acf453dac9018b5ed839dab9dad8a3c4fb))

- ♿️ **Accessibilité**
  - **HeaderLoading:** Ajout des attributs ARIA ([#758](https://github.com/assurance-maladie-digital/design-system/pull/758)) ([2db6606](https://github.com/assurance-maladie-digital/design-system/commit/2db660648e1e2565c0efe1f59a95c9d3198ca5a5))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **config:** Correction de la variable d'environnement `VUE_APP_VERSION` déclarée dans `vueDotLoader` ([#750](https://github.com/assurance-maladie-digital/design-system/pull/750)) ([d265dac](https://github.com/assurance-maladie-digital/design-system/commit/d265dacf0386e0b213da216818873a945d9e75b1))
  - **template:** Correction de la variable `maintenance` non définie dans `AppHeader` ([#751](https://github.com/assurance-maladie-digital/design-system/pull/751)) ([8519cc9](https://github.com/assurance-maladie-digital/design-system/commit/8519cc915cff09c91b497de37806d1c5ad4c666c))

- 🔥 **Suppressions**
  - **template:** Suppression d'un `margin-left` dupliqué dans le composant `AppHeader` ([#740](https://github.com/assurance-maladie-digital/design-system/pull/740)) ([0b2931a](https://github.com/assurance-maladie-digital/design-system/commit/0b2931af250119a37c96086d623bec2e50655e2d))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances et de Cypress vers la `v6` ([#761](https://github.com/assurance-maladie-digital/design-system/pull/761)) ([e7ad211](https://github.com/assurance-maladie-digital/design-system/commit/e7ad21116140a9be866ea6affd73bc62890668d3))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **fields:** Ajout des champs personnalisés ([#729](https://github.com/assurance-maladie-digital/design-system/pull/729)) ([2748f63](https://github.com/assurance-maladie-digital/design-system/commit/2748f63573b849380ccc79a72f8e51f7c671a04c))

- 🐛 **Corrections de bugs**
  - **peerDependencies:** Correction des intervalles de versions des dépendances ([#721](https://github.com/assurance-maladie-digital/design-system/pull/721)) ([951f21a](https://github.com/assurance-maladie-digital/design-system/commit/951f21ae9e6ad935a5fdf92a83d283a82769a526))
  - **ChoiceButtonField:** Correction de la largeur du champ avec la prop `inline` ([#759]https://github.com/assurance-maladie-digital/design-system/pull/759)) ([534a729](https://github.com/assurance-maladie-digital/design-system/commit/534a7294b39ea0ddfc26dcf4da023d576766c9f2))

- ♻️ **Refactoring**
  - **ChoiceField:** Utilisation d'un getter pour `isOtherActive` ([#760](https://github.com/assurance-maladie-digital/design-system/pull/760)) ([08064c7](https://github.com/assurance-maladie-digital/design-system/commit/08064c78cad819a605c45b9d5504e37fc12a4fc7))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#741](https://github.com/assurance-maladie-digital/design-system/pull/741)) ([fbb696c](https://github.com/assurance-maladie-digital/design-system/commit/fbb696cf8be995ad3b9a93831acd7fb27393c9ea))

### Interne

- 🔧 **Configuration**
  - **ci:** Remplacement de Travis CI par CircleCI ([#749](https://github.com/assurance-maladie-digital/design-system/pull/749)) ([d55d994](https://github.com/assurance-maladie-digital/design-system/commit/d55d99476f660a5608da42891053fe079083b2db))
  - **jest:** Utilisation de TypeScript pour la configuration de Jest ([#752](https://github.com/assurance-maladie-digital/design-system/pull/752)) ([1b6fe3b](https://github.com/assurance-maladie-digital/design-system/commit/1b6fe3b3f058b970b2700eaccb987834ccd6954e))
  - **config:** Ajout du champ `engines` dans le fichier `package.json` ([#754](https://github.com/assurance-maladie-digital/design-system/pull/754)) ([51752d3](https://github.com/assurance-maladie-digital/design-system/commit/51752d3661a1e290b16fbd930f5a0d5ba3684198))

- 📝 **Documentation**
  - **CHANGELOG:** Correction du fichier CHANGELOG ([#720](https://github.com/assurance-maladie-digital/design-system/pull/720)) ([5f94ff5](https://github.com/assurance-maladie-digital/design-system/commit/5f94ff5ac4efd685a332135a64c54c9b9c0c882c))
  - **pull-requests:** Mise à jour du template ([#728](https://github.com/assurance-maladie-digital/design-system/pull/728)) ([847dcd1](https://github.com/assurance-maladie-digital/design-system/commit/847dcd115aba8cbab0ac5b64c73458b81aae628b))
  - **issues:** Ajout d'un template pour les rapports de bugs ([#713](https://github.com/assurance-maladie-digital/design-system/pull/713)) ([ac7ae4a](https://github.com/assurance-maladie-digital/design-system/commit/ac7ae4ad566538122281e44e9c3efe0187205f25))
  - **issues:** Ajout d'un template pour les demandes de nouvelles fonctionnalités ([#712](https://github.com/assurance-maladie-digital/design-system/pull/712)) ([db9cacd](https://github.com/assurance-maladie-digital/design-system/commit/db9cacda9a0123f03b6a822ac85f304067e89201))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#762](https://github.com/assurance-maladie-digital/design-system/pull/762)) ([722445f](https://github.com/assurance-maladie-digital/design-system/commit/722445fd2eb6ed5d6e3649ccbf14f257569cb633))

- ⬆️ **Dépendances**
  - **copy-webpack-plugin:** Mise à jour vers la `v6.3.2` ([#722](https://github.com/assurance-maladie-digital/design-system/pull/722)) ([9591a89](https://github.com/assurance-maladie-digital/design-system/commit/9591a899e29386117b4cc0983e11adddc39b2a82))
  - **typescript:** Mise à jour vers la `v4.1.2` ([#724](https://github.com/assurance-maladie-digital/design-system/pull/724)) ([fe50608](https://github.com/assurance-maladie-digital/design-system/commit/fe5060829a7d67a2fe7480ff919c0365888f3747))
  - **babel:** Mise à jour du monorepo vers la `v7.12.7` ([#726](https://github.com/assurance-maladie-digital/design-system/pull/726)) ([8f02cd9](https://github.com/assurance-maladie-digital/design-system/commit/8f02cd92b474b2588daeda6297422fff9ded0894))
  - **eslint:** Mise à jour vers la `v7.13.0` ([#727](https://github.com/assurance-maladie-digital/design-system/pull/727)) ([d91574e](https://github.com/assurance-maladie-digital/design-system/commit/d91574ec692f192322b91f08e12c4c7a5becaa35))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.8.2` ([#730](https://github.com/assurance-maladie-digital/design-system/pull/730)) ([140be35](https://github.com/assurance-maladie-digital/design-system/commit/140be3578fc1e80d8660887e83adfeb5c64be81f))
  - **lint-staged:** Mise à jour vers la `v10.5.2` ([#732](https://github.com/assurance-maladie-digital/design-system/pull/732)) ([e23ed5f](https://github.com/assurance-maladie-digital/design-system/commit/e23ed5f99bb2aad8aa8ab25689cc5e9bae74c58d))
  - **vuetify:** Mise à jour vers la `v2.3.19` ([#743](https://github.com/assurance-maladie-digital/design-system/pull/743)) ([a0f434f](https://github.com/assurance-maladie-digital/design-system/commit/a0f434f6abe445ece6dbb0ec7e501c3ac5ee2e3a))
  - **@babel/core:** Mise à jour vers la `v7.12.9` ([#744](https://github.com/assurance-maladie-digital/design-system/pull/744)) ([e72b0ce](https://github.com/assurance-maladie-digital/design-system/commit/e72b0ce07bfbcee27c53e77b517153932f6260cc))
  - **@types/node:** Mise à jour vers la `v12.19.7` ([#745](https://github.com/assurance-maladie-digital/design-system/pull/745)) ([fd9d165](https://github.com/assurance-maladie-digital/design-system/commit/fd9d165c349351111a604a722f857d4eabfc3e2c))
  - **vuex:** Mise à jour vers la `3.6.0` ([#747](https://github.com/assurance-maladie-digital/design-system/pull/747)) ([1ca4491](https://github.com/assurance-maladie-digital/design-system/commit/1ca44918ffacc2afd857fcfeee0f713ba54324f5))
  - **core-js:** Mise à jour vers la `v3.8.0` ([#748](https://github.com/assurance-maladie-digital/design-system/pull/748)) ([3d61261](https://github.com/assurance-maladie-digital/design-system/commit/3d61261f20add9c22e1722fc24dd94c28ef3ee06))
  - **babel-loader:** Mise à jour vers la `v8.2.2` ([#756](https://github.com/assurance-maladie-digital/design-system/pull/756)) ([beec1d8](https://github.com/assurance-maladie-digital/design-system/commit/beec1d8bc22740b37ec4795582fbd5dfcadc6482))

## v2.0.0-beta.3

**Version publiée le 18/11/2020.**

Cette version comporte plusieurs mises à jour du template de Vue Dash comme l'ajout des options FormBuilder et Cypress, ainsi que le Tree shaking de Vue Dot, et d'autres mises à jour comme la refonte du composant `ErrorPage`.

### Vue Dot

- ♻️ **Refactoring**
  - **DataList:** Renommage de l'interface `IDataList` en `DataList` ([#649](https://github.com/assurance-maladie-digital/design-system/pull/649)) ([62cf170](https://github.com/assurance-maladie-digital/design-system/commit/62cf170b49cc6bad6d02c56e1fcf75d653dac303))
  - **ErrorPage:** Refonte du composant ([#651](https://github.com/assurance-maladie-digital/design-system/pull/651)) ([5e05fd1](https://github.com/assurance-maladie-digital/design-system/commit/5e05fd14efe43d544e1cf24507926db29133379a))

### Vue Dash

- ✨ **Nouvelles fonctionnalités**
  - **prompts:** Ajout de l'option FormBuilder ([#636](https://github.com/assurance-maladie-digital/design-system/pull/636)) ([dfe1c80](https://github.com/assurance-maladie-digital/design-system/commit/dfe1c80a09d9acdf6ecca2c72de22708938b5784))
  - **prompts:** Ajout de l'option Cypress ([#567](https://github.com/assurance-maladie-digital/design-system/pull/567)) ([7555363](https://github.com/assurance-maladie-digital/design-system/commit/7555363bae9b65feed20faa3360aadbcc41d3efc))
  - **config:** Ajout du tree-shaking de VueDot ([#685](https://github.com/assurance-maladie-digital/design-system/pull/685)) ([de1bf9e](https://github.com/assurance-maladie-digital/design-system/commit/de1bf9ea69a2797707202e8213d950ecfd0c9b41))
  - **template:** Ajout d'une transition par défaut sur les liens ([#716](https://github.com/assurance-maladie-digital/design-system/pull/716)) ([4da5d45](https://github.com/assurance-maladie-digital/design-system/commit/4da5d4557cf00190df1367fbeb7fd60663e33e9c))

- 🐛 **Corrections de bugs**
  - **template:** Correction des attributs `data-cy` manquants ([#695](https://github.com/assurance-maladie-digital/design-system/pull/695)) ([b54b359](https://github.com/assurance-maladie-digital/design-system/commit/b54b359eef4c537371664285c10eebb38e33416c))
  - **template:** Correction du fichier d'entrée ([#715](https://github.com/assurance-maladie-digital/design-system/pull/715)) ([d137477](https://github.com/assurance-maladie-digital/design-system/commit/d13747748bb9aebd1b057990e1ef178ce71eda3f))

- ♻️ **Refactoring**
  - **template:** Refonte du fichier `index.html` ([#682](https://github.com/assurance-maladie-digital/design-system/pull/682)) ([195d33d](https://github.com/assurance-maladie-digital/design-system/commit/195d33dbe0e051214eb2aa09c57af4dc4491f585))
  - **template:** Suppression des routes dans les traductions ([#694](https://github.com/assurance-maladie-digital/design-system/pull/694)) ([48ff81d](https://github.com/assurance-maladie-digital/design-system/commit/48ff81d12d1961c152b8d5196178eae1fc6b70fe))
  - **template:** Utilisation de l'objet `window` pour déclarer les variables globales ([#717](https://github.com/assurance-maladie-digital/design-system/pull/717))

- 🔥 **Suppressions**
  - **template:** Suppression des fichiers JavaScript par défaut ([#711](https://github.com/assurance-maladie-digital/design-system/pull/711)) ([07205d5](https://github.com/assurance-maladie-digital/design-system/commit/07205d58b01180a32599106cdb2374f3b0fc8782))

- 🚨 **Lint**
  - **config:** Ajout d'ESLint ([#683](https://github.com/assurance-maladie-digital/design-system/pull/683)) ([bf09d5f](https://github.com/assurance-maladie-digital/design-system/commit/bf09d5f62b71b076d0be3c03de18e2df5ad9175e))
  - **config:** Ajout des descriptions JSDoc manquantes dans `vueDotLoader` ([#708](https://github.com/assurance-maladie-digital/design-system/pull/708)) ([8f136bf](https://github.com/assurance-maladie-digital/design-system/commit/8f136bf385281e9cd096cafdffc3638c55a641ec))

- 🔧 **Configuration**
  - **template:** Suppression de TSLint et mise à jour de la configuration d'ESLint ([#642](https://github.com/assurance-maladie-digital/design-system/pull/642)) ([9f2a06](https://github.com/assurance-maladie-digital/design-system/commit/9f2a06aba4a188a4ebfd58ce6bf407e1c1a88606))
  - **template:** Mise à jour d'ESLint et de la configuration ([#693](https://github.com/assurance-maladie-digital/design-system/pull/693)) ([9f13e39](https://github.com/assurance-maladie-digital/design-system/commit/9f13e392bc76a003a3b3fac6007bf323b702c57d))

- ⬆️ **Dépendances**
  - **template:** Mise à jour de Cypress vers la `v5` ([#707](https://github.com/assurance-maladie-digital/design-system/pull/707)) ([6abfc29](https://github.com/assurance-maladie-digital/design-system/commit/6abfc295ad70827d06c1f54eddd38f1457b339b7))
  - **template:** Mise à jour de Jest vers la `v26` ([#709](https://github.com/assurance-maladie-digital/design-system/pull/709)) ([587c539](https://github.com/assurance-maladie-digital/design-system/commit/587c5394e9508a5688ba04efed3af23d73f1c4fe))
  - **template:** Mise à jour des dépendances ([#718](https://github.com/assurance-maladie-digital/design-system/pull/718)) ([aee640e](https://github.com/assurance-maladie-digital/design-system/commit/aee640e66c48cbed086581d254c53a4cbe5718a0))

### Interne

- 🚨 **Lint**
  - **config:** Mise à jour des règles de lint ([#651](https://github.com/assurance-maladie-digital/design-system/pull/651)) ([e3acd43](https://github.com/assurance-maladie-digital/design-system/commit/e3acd43e3e14726c0e45b29b58363eacc9e26fb3))

- 📝 **Documentation**
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#719](https://github.com/assurance-maladie-digital/design-system/pull/719)) ([7814d0d](https://github.com/assurance-maladie-digital/design-system/commit/7814d0d65869d802aaf36d9c5127a5d4a3d4770b))

- ⬆️ **Dépendances**
  - **@types/jest:** Mise à jour vers la `v26.0.15` ([#650](https://github.com/assurance-maladie-digital/design-system/pull/650)) ([0be84b2](https://github.com/assurance-maladie-digital/design-system/commit/0be84b2be875be1316f32c673afd95d6083a7b51))
  - **@mdi/js:** Mise à jour vers la `v5.8.55` ([#662](https://github.com/assurance-maladie-digital/design-system/pull/662)) ([7495ac1](https://github.com/assurance-maladie-digital/design-system/commit/7495ac1a18293f10879a494f527d6705a06b81ac))
  - **typescript:** Mise à jour vers la `v4.0.5` ([#667](https://github.com/assurance-maladie-digital/design-system/pull/667)) ([a285256](https://github.com/assurance-maladie-digital/design-system/commit/a285256f1fc588f30316b7c04665b4c70d270c59))
  - **@types/figlet:** Mise à jour vers la `v1.2.1` ([#669](https://github.com/assurance-maladie-digital/design-system/pull/669)) ([ec2195c](https://github.com/assurance-maladie-digital/design-system/commit/ec2195c625453256be39096e07217719e4bf1c7b))
  - **lint-staged:** Mise à jour vers la `v10.5.1` ([#672](https://github.com/assurance-maladie-digital/design-system/pull/672)) ([87fd841](https://github.com/assurance-maladie-digital/design-system/commit/87fd841109408c00f9c0bb9b389ff85813e38ed0))
  - **@vue/test-utils:** Mise à jour vers la `v1.1.1` ([#673](https://github.com/assurance-maladie-digital/design-system/pull/673)) ([0f3f65f](https://github.com/assurance-maladie-digital/design-system/commit/0f3f65fc22249ee0703da73be088f48fd0a6c727))
  - **jest:** Mise à jour vers la `v26.6.3` ([#675](https://github.com/assurance-maladie-digital/design-system/pull/675)) ([f9f1220](https://github.com/assurance-maladie-digital/design-system/commit/f9f1220490832c627121da0713cbc1842966c0de))
  - **sass:** Mise à jour vers la `v1.29.0` ([#679](https://github.com/assurance-maladie-digital/design-system/pull/679)) ([6c12086](https://github.com/assurance-maladie-digital/design-system/commit/6c12086647d44b2d53ce1fd8e3d8cd3a52d239f7))
  - **vue-router:** Mise à jour vers la `v3.4.9` ([#684](https://github.com/assurance-maladie-digital/design-system/pull/684)) ([e7fdf8a](https://github.com/assurance-maladie-digital/design-system/commit/e7fdf8a20214c8d7840bac3dcaa480d12c6f8701))
  - **core-js:** Mise à jour vers la `v3.7.0` ([#686](https://github.com/assurance-maladie-digital/design-system/pull/686)) ([dc1c015](https://github.com/assurance-maladie-digital/design-system/commit/dc1c0154f94335bb7983a8ce3972fdf31793d0d0))
  - **eslint:** Mise à jour vers la `v7.13.0` ([#687](https://github.com/assurance-maladie-digital/design-system/pull/687)) ([f9f9a72](https://github.com/assurance-maladie-digital/design-system/commit/f9f9a72d00d4172f4b6e565d9692cefa0aef17a9))
  - **ts-jest:** Mise à jour vers la `v26.4.4` ([#688](https://github.com/assurance-maladie-digital/design-system/pull/688)) ([43c61b7](https://github.com/assurance-maladie-digital/design-system/commit/43c61b70c21c249db01ea50faea6cc717ea3c0b3))
  - **dayjs:** Mise à jour vers la `v1.9.6` ([#691](https://github.com/assurance-maladie-digital/design-system/pull/691)) ([ce0e0ef](https://github.com/assurance-maladie-digital/design-system/commit/ce0e0ef609a3060e8d2165a1251e07734c4d84cb))
  - **babel-loader:** Mise à jour vers la `v8.2.1` ([#696](https://github.com/assurance-maladie-digital/design-system/pull/696)) ([efa393c](https://github.com/assurance-maladie-digital/design-system/commit/efa393cc12e7efcedc3f5f2ea06a140f1fad12f4))
  - **sass-loader:** Mise à jour vers la `v10.1.0` ([#698](https://github.com/assurance-maladie-digital/design-system/pull/698)) ([8dfd17](https://github.com/assurance-maladie-digital/design-system/commit/8dfd17dca7d30d5ea69f79cf04bbe7b1e4c13904))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.4` ([#699](https://github.com/assurance-maladie-digital/design-system/pull/699)) ([df9d858](https://github.com/assurance-maladie-digital/design-system/commit/df9d858c431291681ce940f9458413e9230c5ad4))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.3.1` ([#700](https://github.com/assurance-maladie-digital/design-system/pull/700)) ([0dc6f5f](https://github.com/assurance-maladie-digital/design-system/commit/0dc6f5f91384bb67953567a39a6c6c5defffbf39))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.7.8` ([#701](https://github.com/assurance-maladie-digital/design-system/pull/701)) ([45c01ae](https://github.com/assurance-maladie-digital/design-system/commit/45c01aeebba3f9f5e36e8fb0f9b3a3523e70ca92))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.9` ([#704](https://github.com/assurance-maladie-digital/design-system/pull/704)) ([c1ac15a](https://github.com/assurance-maladie-digital/design-system/commit/c1ac15a2b38f1a7ce33edb8a0a31607439156b46))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.8.1` ([#706](https://github.com/assurance-maladie-digital/design-system/pull/706)) ([2b842e8](https://github.com/assurance-maladie-digital/design-system/commit/2b842e865b0dc319c8bb5772feb2ccf79b212136))
  - **vuetify:** Mise à jour vers la `v2.3.18` ([#710](https://github.com/assurance-maladie-digital/design-system/pull/710)) ([316014a](https://github.com/assurance-maladie-digital/design-system/commit/316014ac2d10c194863abce6f862b106deb9dca3))
  - **@types/node:** Mise à jour vers la `v12.19.5` ([#714](https://github.com/assurance-maladie-digital/design-system/pull/714)) ([5c06166](https://github.com/assurance-maladie-digital/design-system/commit/5c06166b5e175480d0a92be26d9244061f569215))

### 📚 Guide de migration

#### Renommer l'interface `IDataList`

L'interface `IDataList` a été renommée en `DataList` :

```diff
-import { IDataList } from '@cnamts/vue-dot/src/elements/DataList/types';
+import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';
```

#### Renommer `cta` et `title` sur `ErrorPage`

Les props `cta` et `title` ont été renommées en `btn-text` et `page-title`, et la prop `btn-text` a maintenant la valeur `Retour à l'accueil` par défaut :

```diff
<ErrorPage
-	title="Page non trouvée"
+	page-title="Page non trouvée"
	message="Il semblerait qu'il y ait eu une erreur !"
	code="404"
-	cta="Retour à l'accueil"
>
```

Pour désactiver le bouton vous devez maintenant utiliser la prop `no-btn` :

```diff
<ErrorPage
	page-title="Page non trouvée"
	message="Il semblerait qu'il y ait eu une erreur !"
+	no-btn
>
```

#### Tree shaking de Vue Dot

Le Tree shaking est maintenant disponible dans Vue Dash via la fonction `vueDotLoader`, cela permet de charger automatiquement les composants utilisés, et de réduire la taille finale de l'application en ne chargeant pas les composants non utilisés.

Vous pouvez utiliser cette fonction dans le fichier `vue.config.js` :

```diff
process.env.VUE_APP_VERSION = require('./package.json').version;

+const { vueDotLoader } = require('@cnamts/vue-cli-plugin-vue-dash/vueDotLoader');

module.exports = {
+	chainWebpack: config => {
+		// Auto-load VueDot components
+		config.plugin('VuetifyLoaderPlugin').tap(vueDotLoader);
+	},
  // ...
};
```

Puis supprimer l'import de Vue Dot dans votre fichier de plugin :

```diff
// src/plugins/vue-dot.ts
import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

import '@cnamts/vue-dot/dist/vue-dot.css';
-import VueDot from '@cnamts/vue-dot';

// Import the theme styles
import '@/theme/styles/index.scss';

// Register v-facade directive
import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

-Vue.use(VueDot);
```

Si vous utilisez la directive `v-debounce`, vous devez l'importer directement :

```diff
+import { debounce } from '@cnamts/vue-dot/src/directives/debounce';

+Vue.directive('debounce', debounce);
```

#### Mettre à jour les variables globales

Il est maintenant recommandé de définir les variables globales en utilisant l'objet `window` afin d'être plus explicite et d'améliorer la maintenabilité des applications, nous vous recommandons de mettre à jour vos applications en suivant les modifications de la Pull Request [#717](https://github.com/assurance-maladie-digital/design-system/pull/717).

#### Migrer de TSLint vers ESLint

TSLint est maintenant déprécié depuis plus d'un an en faveur de [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint).

Pour mettre à jour, vous devez supprimer le fichier `tslint.json`, et nous vous conseillons également de mettre à jour ESLint vers la version 7, pour cela vous pouvez suivre les modifications de la Pull Request [#693](https://github.com/assurance-maladie-digital/design-system/pull/693).

#### Mettre à jour Jest et Cypress

Nous vous conseillons de mettre à jour Jest de la `v24` à la `v26`, pour cela vous devez ajouter le champ `resolutions` dans votre fichier `package.json` :

```diff
+"resolutions": {
+	"jest": "^26.6.3",
+	"ts-jest": "^26.4.4",
+	"babel-jest": "^26.6.3"
+}
```

Ainsi que de mettre à jour Cypress de la `v3` à la `v5`, pour cela vous devez mettre à jour `@vue/cli-plugin-e2e-cypress` à la `v4.5.9`, puis ajouter `cypress` dans le champ `resolutions` :

```diff
"resolutions": {
	"jest": "^26.6.3",
	"ts-jest": "^26.4.4",
	"babel-jest": "^26.6.3",
+	"cypress": "^4.6.0"
}
```

## v2.0.0-beta.2

**Version publiée le 19/10/2020.**

Cette version comporte l'ajout du composant `ErrorPage` ainsi que plusieurs correctifs sur le FormBuilder et la refonte du composant `LangBtn`.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **ErrorPage:** Ajout d'un nouveau template ([#604](https://github.com/assurance-maladie-digital/design-system/pull/604)) ([ce55807](https://github.com/assurance-maladie-digital/design-system/commit/ce558079ead05a855303576856bdc4b1ead37c61))

- ♻️ **Refactoring**
  - **LangBtn:** Refonte du composant ([#621](https://github.com/assurance-maladie-digital/design-system/pull/621)) ([e795fbb](https://github.com/assurance-maladie-digital/design-system/commit/e795fbb178f2293e38cb5ed103e49fb25ad26f7f))

### Vue Dash

- 🔥 **Suppressions**
  - **template:** Utilisation du composant `ErrorPage` de Vue Dot ([#605](https://github.com/assurance-maladie-digital/design-system/pull/605)) ([cea80b5](https://github.com/assurance-maladie-digital/design-system/commit/cea80b59029ef986bc3d0c4c4344c228d2e331e4))
  - **template:** Suppression des imports des composants globaux ([#580](https://github.com/assurance-maladie-digital/design-system/pull/580)) ([b9d8835](https://github.com/assurance-maladie-digital/design-system/commit/b9d8835c8693924a212d8425b955b5bdef7bebff))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#644](https://github.com/assurance-maladie-digital/design-system/pull/644)) ([9c78937](https://github.com/assurance-maladie-digital/design-system/commit/9c78937246b42887a79927f65c29a8ba503cf5cb))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **FormField:** Ajout de la gestion des messages d'erreur sur `ChoiceButtonField` ([#584](https://github.com/assurance-maladie-digital/design-system/pull/584)) ([43acdbd](https://github.com/assurance-maladie-digital/design-system/commit/43acdbd9b7c8e03adf0bc5ee429e8b309d551085))

- 🐛 **Corrections de bugs**
  - **FormField:** Correction des marges sur le champ période ([#580](https://github.com/assurance-maladie-digital/design-system/pull/580)) ([d8c8303](https://github.com/assurance-maladie-digital/design-system/commit/d8c8303e2ab9f6c8e43bf8abbcc7d73b74103527))
  - **FormField:** Correction de la largeur du champ textarea ([#609](https://github.com/assurance-maladie-digital/design-system/pull/609)) ([d927c36](https://github.com/assurance-maladie-digital/design-system/commit/d927c36cbab1b91865f98395ca7898bbfa82cb1f))
  - **FormField:** Correction de l'affichage du champ select lorsque la valeur est égale à zéro ([#591](https://github.com/assurance-maladie-digital/design-system/pull/591)) ([62b90ba](https://github.com/assurance-maladie-digital/design-system/commit/62b90bada5a69973fc8f17b40f64720acca9e711))
  - **FormField:** Correction de la sélection multiple sur `ChoiceField` ([#596](https://github.com/assurance-maladie-digital/design-system/pull/596)) ([875ce37](https://github.com/assurance-maladie-digital/design-system/commit/875ce37073640b77e92c72e555435c9ff6293ba3))
  - **FormField:** Correction de l'affichage des textes longs dans `ChoiceButtonField` ([#614](https://github.com/assurance-maladie-digital/design-system/pull/614)) ([cd5c51b](https://github.com/assurance-maladie-digital/design-system/commit/cd5c51b433ec97a3812c2a037630fb1d13ccd174))

### Interne

- 🔥 **Suppressions**
  - **global:** Suppression des anciens commentaires TSLint ([#587](https://github.com/assurance-maladie-digital/design-system/pull/587)) ([e0e162a](https://github.com/assurance-maladie-digital/design-system/commit/e0e162aa9e3f413701c1fb59c9dad4de62f995c3))

- 🚨 **Lint**
  - **config:** Mise à jour des règles de lint ([#582](https://github.com/assurance-maladie-digital/design-system/pull/582)) ([70a87ca](https://github.com/assurance-maladie-digital/design-system/commit/70a87ca774af580f3a86b65c955bd6877051d29a))

- 🔧 **Configuration**
  - **config:** Mise à jour de la version de yarn dans la configuration de Travis CI ([#589](https://github.com/assurance-maladie-digital/design-system/pull/589)) ([0a47260](https://github.com/assurance-maladie-digital/design-system/commit/0a47260c6b5cfb3782bb6b25a579af918987f38f))
  - **config:** Mise à jour de la taille maximale du build ([#607](https://github.com/assurance-maladie-digital/design-system/pull/607)) ([aa78533](https://github.com/assurance-maladie-digital/design-system/commit/aa785339f6f7d58936f307c71bd78595b2e72230))

- 📝 **Documentation**
  - **pull-requests:** Mise à jour du template ([#635](https://github.com/assurance-maladie-digital/design-system/pull/635)) ([bd95d61](https://github.com/assurance-maladie-digital/design-system/commit/bd95d6119b8559725ba9390ddc336a57ba342179))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#645](https://github.com/assurance-maladie-digital/design-system/pull/645)) ([8ad6d76](https://github.com/assurance-maladie-digital/design-system/commit/8ad6d76c6c43d06b602a3d3115b842d10eb09451))

- ⬆️ **Dépendances**
  - **typescript:** Mise à jour vers la `v4.0.3` ([#572](https://github.com/assurance-maladie-digital/design-system/pull/572)) ([3167679](https://github.com/assurance-maladie-digital/design-system/commit/31676794ecee410642c4b8112532e4fdb3b99705))
  - **ts-jest:** Mise à jour vers la `v26.4.1` ([#573](https://github.com/assurance-maladie-digital/design-system/pull/573)) ([b06f87b](https://github.com/assurance-maladie-digital/design-system/commit/b06f87b33356ec1ec7316015cb81e5f405727ba1))
  - **eslint:** Mise à jour de `eslint` et de `eslint-plugin-vue` vers la `v7` ([#582](https://github.com/assurance-maladie-digital/design-system/pull/582)) ([70a87ca](https://github.com/assurance-maladie-digital/design-system/commit/70a87ca774af580f3a86b65c955bd6877051d29a))
  - **sass:** Mise à jour vers la `v1.27.0` ([#608](https://github.com/assurance-maladie-digital/design-system/pull/608)) ([a170b22](https://github.com/assurance-maladie-digital/design-system/commit/a170b22f21f759b537817836a143e70a407abd57))
  - **@vue/eslint-config-typescript:** Mise à jour vers la `v7` ([#610](https://github.com/assurance-maladie-digital/design-system/pull/610)) ([c6d91b7](https://github.com/assurance-maladie-digital/design-system/commit/c6d91b7ed9499adec0e9bc30109eeb535f0c7698))
  - **sass-loader:** Mise à jour vers la `v10.0.3` ([#613](https://github.com/assurance-maladie-digital/design-system/pull/613)) ([328894c](https://github.com/assurance-maladie-digital/design-system/commit/328894cf6f7148f31c7337c8fa939316f7882a2c))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.2.1` ([#615](https://github.com/assurance-maladie-digital/design-system/pull/615)) ([56966b7](https://github.com/assurance-maladie-digital/design-system/commit/56966b7adb342a84d0f4de4223d4bcbe7bf5070e))
  - **eslint:** Mise à jour vers la `v7.11.0` ([#582](https://github.com/assurance-maladie-digital/design-system/pull/582)) ([04dde13](https://github.com/assurance-maladie-digital/design-system/commit/04dde131b2fd35e993e3a3e7dadedb9cfc62f732))
  - **fs-extra:** Mise à jour vers la `v9.0.2` ([#618](https://github.com/assurance-maladie-digital/design-system/pull/618)) ([5bb730b](https://github.com/assurance-maladie-digital/design-system/commit/5bb730b250d6836949bcf78f829e1812e8b80280))
  - **jest:** Mise à jour vers la `v26.5.3` ([#619](https://github.com/assurance-maladie-digital/design-system/pull/619)) ([b5523d4](https://github.com/assurance-maladie-digital/design-system/commit/b5523d455303be65118c0a259f6fc45cc01796cf))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.4.1` ([#622](https://github.com/assurance-maladie-digital/design-system/pull/622)) ([b6c84d0](https://github.com/assurance-maladie-digital/design-system/commit/b6c84d00c747b50a200d11dee02fd41cc033f4cf))
  - **dayjs:** Mise à jour vers la `v1.9.3` ([#623](https://github.com/assurance-maladie-digital/design-system/pull/623)) ([94d53fd](https://github.com/assurance-maladie-digital/design-system/commit/94d53fd961d4a6d2c75919c619cda171ac19801e))
  - **vuetify:** Mise à jour vers la `v2.3.14` ([#626](https://github.com/assurance-maladie-digital/design-system/pull/626)) ([330605d](https://github.com/assurance-maladie-digital/design-system/commit/330605d6415ae542ddc18eff298b6d7293495901))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.6.5` ([#628](https://github.com/assurance-maladie-digital/design-system/pull/628)) ([e2a906f](https://github.com/assurance-maladie-digital/design-system/commit/e2a906f8116aa23a4ea9584f554349a42e18c037))
  - **@mdi/js:** Mise à jour vers la `v5.7.55` ([#629](https://github.com/assurance-maladie-digital/design-system/pull/629)) ([9e50f41](https://github.com/assurance-maladie-digital/design-system/commit/9e50f4107d8854314264e84b050f7bbe0cb5d731))
  - **vue-router:** Mise à jour vers la `v3.4.7` ([#633](https://github.com/assurance-maladie-digital/design-system/pull/633)) ([d91db7e](https://github.com/assurance-maladie-digital/design-system/commit/d91db7e3c9256ab581afc2ce1ac5131dbc0403d6))
  - **@types/node:** Mise à jour vers la `v12.12.68` ([#637](https://github.com/assurance-maladie-digital/design-system/pull/637)) ([f591a67](https://github.com/assurance-maladie-digital/design-system/commit/f591a6775185de0dd0eab77413122f7cd222dce8))
  - **babel:** Mise à jour du monorepo vers la `v7.12.3` ([#639](https://github.com/assurance-maladie-digital/design-system/pull/639)) ([b9cb467](https://github.com/assurance-maladie-digital/design-system/commit/b9cb467262829dcb2ad5eeed658d3187eec3bda3))
  - **lint-staged:** Mise à jour vers la `v10.4.2` ([#640](https://github.com/assurance-maladie-digital/design-system/pull/640)) ([74b4102](https://github.com/assurance-maladie-digital/design-system/commit/74b4102fae2a9a59221235dabcebf0c055870af6))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.1.0` ([#641](https://github.com/assurance-maladie-digital/design-system/pull/641)) ([d5f2fe1](https://github.com/assurance-maladie-digital/design-system/commit/d5f2fe1288ec7977914f48c35085c87f0f6b7f03))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.8` ([#643](https://github.com/assurance-maladie-digital/design-system/pull/643)) ([6259402](https://github.com/assurance-maladie-digital/design-system/commit/625940298f931da730a9e6e9c57e33f81062d81a))

### 📚 Guide de migration

#### Utiliser le composant `ErrorPage`

Le composant `ErrorPage` a été ajouté dans Vue Dot, vous pouvez donc le supprimer de votre projet. Il n'y a pas de modification sur l'API du composant.

#### Utiliser le type `Next`

Le type `Next` a été ajouté dans Vue Dot, vous pouvez également le supprimer de votre projet :

```diff
// src/router/navigationRedirect.ts
-import { Next } from './types';
+import { Next } from '@cnamts/vue-dot/src/types';
```

## v2.0.0-beta.1

**Version publiée le 18/09/2020.**

Cette version comporte plusieurs correctifs sur le template de Vue Dash ainsi que sur les composants `DataListItem` et `UploadWorkflow`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **DataListItem:** Correction d'une erreur avec les valeurs numériques ([#532](https://github.com/assurance-maladie-digital/design-system/pull/532)) ([1d1654f](https://github.com/assurance-maladie-digital/design-system/commit/1d1654fbd59378863beb1b1cfff9ae064fef803e))
  - **UploadWorkFlow:** Correction de l'événement `change` non émis lors de l'appel de `resetFile` ([#565](https://github.com/assurance-maladie-digital/design-system/pull/565)) ([6d7c8c9](https://github.com/assurance-maladie-digital/design-system/commit/6d7c8c9c07111aeb211df6fdbb65b06132904df3))
  - **UploadWorkFlow:** Correction de l'affichage des erreurs dans la liste ([#566](https://github.com/assurance-maladie-digital/design-system/pull/566)) ([f16c6b8](https://github.com/assurance-maladie-digital/design-system/commit/f16c6b81967d8a830526b493e33367f58f788083))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction de la dépendance `@cnamts/design-tokens` manquante ([#525](https://github.com/assurance-maladie-digital/design-system/pull/525)) ([c2f7c6a](https://github.com/assurance-maladie-digital/design-system/commit/c2f7c6ab1900ca75e0437130d130aa9a1ce591e0))
  - **template:** Correction d'une erreur de syntaxe SCSS dans le thème par défaut ([#528](https://github.com/assurance-maladie-digital/design-system/pull/528)) ([c776019](https://github.com/assurance-maladie-digital/design-system/commit/c776019d845ae4cc77005de56927e02ff54d11fe))
  - **template:** Correction des styles ([#529](https://github.com/assurance-maladie-digital/design-system/pull/529)) ([61219ba](https://github.com/assurance-maladie-digital/design-system/commit/61219ba4d35cae73a4542ac06f95509ea819175f))
  - **template:** Correction d'un polyfill manquant pour `vue-input-facade` pour IE 11 ([#559](https://github.com/assurance-maladie-digital/design-system/pull/559)) ([0415936](https://github.com/assurance-maladie-digital/design-system/commit/0415936ea50fe08e470494e83685f5b92811e35c))
  - **template:** Correction de `vue-input-facade` manquant dans `transpileDependencies` ([#570](https://github.com/assurance-maladie-digital/design-system/pull/570)) ([5a278c8](https://github.com/assurance-maladie-digital/design-system/commit/5a278c88345bea1a81806eec4cc5dbbed29ed288))

- ♻️ **Refactoring**
  - **template:** Utilisation des classes d'aide de Vuetify plutôt que des styles personnalisés ([#560](https://github.com/assurance-maladie-digital/design-system/pull/560)) ([c99df42](https://github.com/assurance-maladie-digital/design-system/commit/c99df4222263ac23cea1b4398db02862822f9934))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#564](https://github.com/assurance-maladie-digital/design-system/pull/564)) ([753fc73](https://github.com/assurance-maladie-digital/design-system/commit/753fc73a21890278413997762b13025c24d790a9))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **FormField:** Gestion des sauts de ligne dans le tooltip ([#540](https://github.com/assurance-maladie-digital/design-system/pull/540)) ([50cdcf9](https://github.com/assurance-maladie-digital/design-system/commit/50cdcf95fba42120b368e95327e0bc2e01cc3b91))

### Interne

- 🔒 **Sécurité**
  - **node-fetch:** Mise à jour vers de la `v2.6.0` vers la `v2.6.1` ([#554](https://github.com/assurance-maladie-digital/design-system/pull/554)) ([7ee0288](https://github.com/assurance-maladie-digital/design-system/commit/7ee02884dba451756575f29d8aef5b90bea71cc3))

- 🔧 **Configuration**
  - **playground:** Correction des playgrounds ([102a668](https://github.com/assurance-maladie-digital/design-system/commit/102a668dd4ab4a7e9819c736c9a2aacbc714ecbc))

- 📝 **Documentation**
  - **pull-requests:** Mise à jour du template ([#537](https://github.com/assurance-maladie-digital/design-system/pull/537)) ([b1448d1](https://github.com/assurance-maladie-digital/design-system/commit/b1448d14366bfb4010c74e5792861f93cf180c44))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#569](https://github.com/assurance-maladie-digital/design-system/pull/569)) ([d3c4e19](https://github.com/assurance-maladie-digital/design-system/commit/d3c4e1910240abae36f84c53554fb2bdcb59f4cd))

- ⬆️ **Dépendances**
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.4` ([#514](https://github.com/assurance-maladie-digital/design-system/pull/514)) ([b2aba53](https://github.com/assurance-maladie-digital/design-system/commit/b2aba5346a8dd310fb7bebc59a1d4255ec5ca104))
  - **vue:** Mise à jour vers la `v2.6.12` ([#518](https://github.com/assurance-maladie-digital/design-system/pull/518)) ([63bf6c9](https://github.com/assurance-maladie-digital/design-system/commit/63bf6c9a2ff7c1093337e4b3008c7a467b08510d))
  - **@babel/core:** Mise à jour vers la `v7.11.4` ([#521](https://github.com/assurance-maladie-digital/design-system/pull/521)) ([51f80d7](https://github.com/assurance-maladie-digital/design-system/commit/51f80d725eca972f9e8ba86ed3a175d60cee51d5))
  - **ts-node:** Mise à jour vers la `v9` ([#522](https://github.com/assurance-maladie-digital/design-system/pull/522)) ([0b380b6](https://github.com/assurance-maladie-digital/design-system/commit/0b380b67e5c45ed4b2b7d8e0887bee060b8bed79))
  - **jest:** Mise à jour vers la `v26.4.2` ([#523](https://github.com/assurance-maladie-digital/design-system/pull/523)) ([5e8b9af](https://github.com/assurance-maladie-digital/design-system/commit/5e8b9afd2c10230e6dec9ca35eb2ee66db66a941))
  - **vuetify:** Mise à jour vers la `v2.3.10` ([#533](https://github.com/assurance-maladie-digital/design-system/pull/533)) ([0dae038](https://github.com/assurance-maladie-digital/design-system/commit/0dae038b48a2321ad7592464b9204e94e6336aaa))
  - **@vue/eslint-plugin-typescript:** Mise à jour vers la `v5.1.0` ([#536](https://github.com/assurance-maladie-digital/design-system/pull/536)) ([ddb7a59](https://github.com/assurance-maladie-digital/design-system/commit/ddb7a594d08145e15db9bef0bc5d2138ca5691e5))
  - **@vue/test-utils:** Mise à jour vers la `v1.0.5` ([#538](https://github.com/assurance-maladie-digital/design-system/pull/538)) ([e47e85b](https://github.com/assurance-maladie-digital/design-system/commit/e47e85b0fa9d13e0c5ca116dd22532b7b0241eb1))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.1.0` ([#541](https://github.com/assurance-maladie-digital/design-system/pull/541)) ([e33b625](https://github.com/assurance-maladie-digital/design-system/commit/e33b6255f2458a5ff117ebee15318e1986a81a57))
  - **babel:** Mise à jour du monorepo vers la `v7.11.6` ([#543](https://github.com/assurance-maladie-digital/design-system/pull/543)) ([2a3f23d](https://github.com/assurance-maladie-digital/design-system/commit/2a3f23daa67c863edbd00369d14b545017f3dd34))
  - **sass-loader:** Mise à jour vers la `v10.0.2` ([#549](https://github.com/assurance-maladie-digital/design-system/pull/549)) ([ff44f8b](https://github.com/assurance-maladie-digital/design-system/commit/ff44f8b3977a1ad549ad7dfcfd040d34ec8b5f60))
  - **typescript:** Mise à jour vers la `v4` ([#520](https://github.com/assurance-maladie-digital/design-system/pull/520)) ([98b0efe](https://github.com/assurance-maladie-digital/design-system/commit/98b0efe9af1acd168de9863248e0204429325572))
  - **ts-jest:** Mise à jour vers la `v26.3.0` ([#535](https://github.com/assurance-maladie-digital/design-system/pull/535)) ([1133114](https://github.com/assurance-maladie-digital/design-system/commit/11331140717ea8afbda6010b1cfe0960768c8af0))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4` ([#542](https://github.com/assurance-maladie-digital/design-system/pull/542)) ([18a855e](https://github.com/assurance-maladie-digital/design-system/commit/18a855e905ca6cb7becf47616fbcd309e34d1d95))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.5.1` ([#550](https://github.com/assurance-maladie-digital/design-system/pull/550)) ([add8171](https://github.com/assurance-maladie-digital/design-system/commit/add81710af3ae7b5045fa0995091850e780b5fa6))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.6`, de **@vue/test-utils** vers la `v1.1.0` et de **vue-class-component** vers la `v7.2.6` ([#553](https://github.com/assurance-maladie-digital/design-system/pull/553)) ([8a5beb2](https://github.com/assurance-maladie-digital/design-system/commit/8a5beb2ed5452562dc38ea26159376117498e39d))
  - **lint-staged:** Mise à jour vers la `v10.4.0` ([#555](https://github.com/assurance-maladie-digital/design-system/pull/555)) ([bd2b8de](https://github.com/assurance-maladie-digital/design-system/commit/bd2b8de0bb091fb17430f88c75f3ab60fb30d5a9))
  - **@mdi/js:** Mise à jour vers la `v5.6.55` ([#557](https://github.com/assurance-maladie-digital/design-system/pull/557)) ([37530fa](https://github.com/assurance-maladie-digital/design-system/commit/37530fada2a94ea0785b86bf87a945e2568845bb))
  - **dayjs:** Mise à jour vers la `v1.8.36` ([#558](https://github.com/assurance-maladie-digital/design-system/pull/558)) ([645e63f](https://github.com/assurance-maladie-digital/design-system/commit/645e63f2d22b7eb03457403cf20441b893cf4894))
  - **@types/jest:** Mise à jour vers la `v26.0.14` ([#556](https://github.com/assurance-maladie-digital/design-system/pull/556)) ([01970b7](https://github.com/assurance-maladie-digital/design-system/commit/01970b73f0804bd085965bf54f2b748123cdad8b))
  - **@types/node:** Mise à jour vers la `v12.12.62` ([#561](https://github.com/assurance-maladie-digital/design-system/pull/561)) ([f17a75f](https://github.com/assurance-maladie-digital/design-system/commit/f17a75f9e2fd96ebf284b1ec98473e9a918ca54c))
  - **webpack:** Mise à jour vers la `v4.41.2` ([#562](https://github.com/assurance-maladie-digital/design-system/pull/562)) ([6f94327](https://github.com/assurance-maladie-digital/design-system/commit/6f94327a0332c719f4226c1d7ccbeb8d50331fb8))
  - **sass:** Mise à jour vers la `v1.26.11` ([#563](https://github.com/assurance-maladie-digital/design-system/pull/563)) ([9162c3d](https://github.com/assurance-maladie-digital/design-system/commit/9162c3de94cf3a508a176e7420d562928bd9c78f))
  - **json-to-scss:** Mise à jour vers la `v1.6.2` ([#568](https://github.com/assurance-maladie-digital/design-system/pull/568)) ([641edd9](https://github.com/assurance-maladie-digital/design-system/commit/641edd98e40f04baca945cd5a82397d3fa32bd43))

## v2.0.0-beta.0

**Version publiée le 18/08/2020.**

Cette première version bêta comporte deux nouveaux packages, `@cnamts/design-tokens` et `@cnamts/form-builder`, la mise à jour de Vuetify en version 2.3, du refactoring sur les composants ainsi que l'ajout d'un template pour les Pull Requests et d'un fichier CHANGELOG.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **DatePicker:** Ajout de l'événement `input` ([#457](https://github.com/assurance-maladie-digital/design-system/pull/457)) ([7124804](https://github.com/assurance-maladie-digital/design-system/commit/7124804b432f7446e19170fbaf95aade15c909c0))

- ♻️ **Refactoring**
  - **NotificationBar:** Refonte du composant suite à la mise à jour de Vuetify ([#436](https://github.com/assurance-maladie-digital/design-system/pull/436)) ([9ec5ca3](https://github.com/assurance-maladie-digital/design-system/commit/9ec5ca39d3ac4f15a5fdfac96f5a6845f46c2f5c))
  - **DatePicker:** Utilisation de la syntaxe standard du helper `mixins` ([#449](https://github.com/assurance-maladie-digital/design-system/pull/449)) ([253f51e](https://github.com/assurance-maladie-digital/design-system/commit/253f51e5930e2b07459d96079e0595aa7b4813a0))
  - **playground:** Correction de la couleur du bouton pour changer de thème ([f06d77c](https://github.com/assurance-maladie-digital/design-system/commit/f06d77c84952490b639bfd910a49532877555ebd))
  - **FileUpload:** Refonte du composant ([#273](https://github.com/assurance-maladie-digital/design-system/pull/273)) ([f75e491](https://github.com/assurance-maladie-digital/design-system/commit/f75e491dc4cffde64c73f655ff5d9ef48cb7c1ae))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction d'espaces blancs en trop ([#458](https://github.com/assurance-maladie-digital/design-system/pull/458)) ([76eab8a](https://github.com/assurance-maladie-digital/design-system/commit/76eab8a55a3b3fbd6b0ac8eaa86eada8315131d8))

- ♻️ **Refactoring**
  - **template:** Refonte des styles du thème suite à la mise à jour de Vuetify ([#482](https://github.com/assurance-maladie-digital/design-system/pull/482)) ([d5af459](https://github.com/assurance-maladie-digital/design-system/commit/d5af4590c3ca6c64bd652b037629b7a1740ece34))

- 🔥 **Suppressions**
  - **template:** Suppression des styles inutiles suite à la mise à jour de Vuetify ([#460](https://github.com/assurance-maladie-digital/design-system/pull/460)) ([cd41eef](https://github.com/assurance-maladie-digital/design-system/commit/cd41eefc028b4eac87fa217ec94cef708c1e05ed))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#511](https://github.com/assurance-maladie-digital/design-system/pull/511)) ([c120bf1](https://github.com/assurance-maladie-digital/design-system/commit/c120bf1b8474307cfc49c3c354adff14d59ada96))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **global:** Ajout du package FormBuilder ([#190](https://github.com/assurance-maladie-digital/design-system/pull/190)) ([0e4403e](https://github.com/assurance-maladie-digital/design-system/commit/0e4403e8690d58c2d7925d967c578ff935b8ebc0))

### Design Tokens

- ✨ **Nouvelles fonctionnalités**
  - **global:** Extraction des Design Tokens dans un nouveau package ([#483](https://github.com/assurance-maladie-digital/design-system/pull/483)) ([9399134](https://github.com/assurance-maladie-digital/design-system/commit/9399134e1954e271af9db386f1c836fd93fd7e4c))

- 🐛 **Corrections de bugs**
  - **types:** Correction des types et ajout du fichier `index.ts` manquant ([#494](https://github.com/assurance-maladie-digital/design-system/pull/494)) ([28efd5c](https://github.com/assurance-maladie-digital/design-system/commit/28efd5c3658d6412ae418d9378902fa1e0e8a30e))

### Interne

- 🔒 **Sécurité**
  - **lodash:** Mise à jour vers de la `v4.17.15` vers la `v4.17.19` ([#444](https://github.com/assurance-maladie-digital/design-system/pull/444)) ([3584d6f](https://github.com/assurance-maladie-digital/design-system/commit/3584d6fa8caf80fca4aba4a883be6be191342368))

- ♻️ **Refactoring**
  - **peerDependencies:** Mise à jour des dépendances ([#508](https://github.com/assurance-maladie-digital/design-system/pull/508)) ([de12946](https://github.com/assurance-maladie-digital/design-system/commit/de1294632dcc0540ee517ae6f5819a98e93cabe0))
  - **dependencies:** Déplacement des dépendances communes vers la racine ([#509](https://github.com/assurance-maladie-digital/design-system/pull/509)) ([bc40e59](https://github.com/assurance-maladie-digital/design-system/commit/bc40e59ec9a983194bd6cc89b0850852d5b23c68))

- 🔥 **Suppressions**
  - **dependencies:** Suppression de la dépendance non-utilisée `webpack-node-externals` ([#437](https://github.com/assurance-maladie-digital/design-system/pull/437)) ([035a0dd](https://github.com/assurance-maladie-digital/design-system/commit/035a0ddf3a64467797de579133f880a3d4636990))

- 📝 **Documentation**
  - **CHANGELOG:** Ajout d'un fichier CHANGELOG ([#456](https://github.com/assurance-maladie-digital/design-system/pull/456)) ([5541e18s](https://github.com/assurance-maladie-digital/design-system/commit/5541e18784a5d4884bc174b96eefc5d25bad5979))
  - **pull-requests:** Ajout d'un template pour les Pull Requests ([#464](https://github.com/assurance-maladie-digital/design-system/pull/464)) ([6206290](https://github.com/assurance-maladie-digital/design-system/commit/620629039da9256fe0b6c842eb89f830732f7974))
  - **README:** Ajout du package Design Tokens à la section écosystème ([043c1d5](https://github.com/assurance-maladie-digital/design-system/commit/043c1d55b8c56d950df7e15e00aeb70c036cd47f))
  - **README:** Ajout du package FormBuilder à la section écosystème ([c71beca](https://github.com/assurance-maladie-digital/design-system/commit/c71becae7bfa990c70992e695fe0bd0e52dec170))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#513](https://github.com/assurance-maladie-digital/design-system/pull/513)) ([5962865](https://github.com/assurance-maladie-digital/design-system/commit/596286522cfbf6439fec0efe895fa4965beed4bf))

- 🔧 **Configuration**
  - **config:** Mise à jour de la taille maximale du build ([4335c4a](https://github.com/assurance-maladie-digital/design-system/commit/4335c4ab8dcff5840df967f5d22852309a9dde17))

- ⬆️ **Dépendances**
  - **vuetify-loader:** Mise à jour vers la `v1.6.0` ([#434](https://github.com/assurance-maladie-digital/design-system/pull/434)) ([4831a70](https://github.com/assurance-maladie-digital/design-system/commit/4831a70accf2cc604d06d3d74123ce6b4a9dcb4c))
  - **typescript:** Mise à jour vers la `v3.9.7` ([#443](https://github.com/assurance-maladie-digital/design-system/pull/443)) ([cdf483b](https://github.com/assurance-maladie-digital/design-system/commit/cdf483bc0b9fc8efa988efa956ed814940a57d2d))
  - **vue-class-component:** Mise à jour vers la `v7.2.5` ([#453](https://github.com/assurance-maladie-digital/design-system/pull/453)) ([334160f](https://github.com/assurance-maladie-digital/design-system/commit/334160f749f00f055593a774d8df1f615dcccaa7))
  - **vuetify:** Mise à jour vers la `v2.3` ([#374](https://github.com/assurance-maladie-digital/design-system/pull/374)) ([c335b4a](https://github.com/assurance-maladie-digital/design-system/commit/c335b4a5fa9b6777c30bf4d6e90fcaaa28b92296))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.0.7` ([#448](https://github.com/assurance-maladie-digital/design-system/pull/448)) ([6e7ec58](https://github.com/assurance-maladie-digital/design-system/commit/6e7ec58c59028bd850f8546ce57612ee8ca9142e))
  - **vue-input-facade:** Mise à jour vers la `v1.3.2` ([#473](https://github.com/assurance-maladie-digital/design-system/pull/473)) ([829bc7b](https://github.com/assurance-maladie-digital/design-system/commit/829bc7b14ea57b469a2b9160c1eb4e9c57c2c69f))
  - **babel:** Mise à jour du monorepo vers la `v7.11.0` ([#476](https://github.com/assurance-maladie-digital/design-system/pull/476)) ([0bf9e21](https://github.com/assurance-maladie-digital/design-system/commit/0bf9e21dea0a9b66193a4c2dea99b11571c6c718))
  - **@babel/core:** Mise à jour vers la `v7.11.1` ([#487](https://github.com/assurance-maladie-digital/design-system/pull/487)) ([60f6325](https://github.com/assurance-maladie-digital/design-system/commit/60f6325ca9a2ec7b94def3b4483135c014704fd2))
  - **webpack:** Mise à jour vers la `v4.41.1` ([#461](https://github.com/assurance-maladie-digital/design-system/pull/461)) ([9c4ca26](https://github.com/assurance-maladie-digital/design-system/commit/9c4ca26d2baaeeecc85fa82dea92c79e37fb0f75))
  - **sass-loader:** Mise à jour vers la `v9.0.3` ([#490](https://github.com/assurance-maladie-digital/design-system/pull/490)) ([f498cc1](https://github.com/assurance-maladie-digital/design-system/commit/f498cc111fef8018e00a1cd37a1f2f09a597e618))
  - **@types/node:** Mise à jour vers la `v12.12.54` ([#492](https://github.com/assurance-maladie-digital/design-system/pull/492)) ([bcf8310](https://github.com/assurance-maladie-digital/design-system/commit/bcf831001723dd2e7b2d80825943269dee42641f))
  - **vuetify:** Mise à jour vers la `v2.3.8` ([#495](https://github.com/assurance-maladie-digital/design-system/pull/495)) ([859c200](https://github.com/assurance-maladie-digital/design-system/commit/859c200babe1d5bf4a2a433ddeaa4807575c62b1))
  - **vue-router:** Mise à jour vers la `v3.4.2` ([#496](https://github.com/assurance-maladie-digital/design-system/pull/496)) ([53b8d27](https://github.com/assurance-maladie-digital/design-system/commit/53b8d272c69174e6219cf24840dd3740634ad2bb))
  - **dayjs:** Mise à jour vers la `v1.8.33` ([#497](https://github.com/assurance-maladie-digital/design-system/pull/497)) ([f3ec80a](https://github.com/assurance-maladie-digital/design-system/commit/f3ec80a8676586e9fd22d96b2b7f9b9ba6aa4c32))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.3` et de **vue-router** vers la `v3.4.3` ([#398](https://github.com/assurance-maladie-digital/design-system/pull/398)) ([7ad77b6](https://github.com/assurance-maladie-digital/design-system/commit/7ad77b6709b8671fa54133d973a4c3234c1ab754))
  - **jest:** Mise à jour vers la `v26.4.0` ([#499](https://github.com/assurance-maladie-digital/design-system/pull/499)) ([5ec3db1](https://github.com/assurance-maladie-digital/design-system/commit/5ec3db178442b42bdf5a32b27d5163e13ea5952f))
  - **@mdi/js:** Mise à jour vers la `v5.5.55` ([#500](https://github.com/assurance-maladie-digital/design-system/pull/500)) ([1843597](https://github.com/assurance-maladie-digital/design-system/commit/184359742ceacd2362e24cb675613cf0850d9dff))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.9.0` ([#501](https://github.com/assurance-maladie-digital/design-system/pull/501)) ([a456afc](https://github.com/assurance-maladie-digital/design-system/commit/a456afcad310b4328bf1091bef6e92729f7991aa))
  - **ts-jest:** Mise à jour vers la `v26.2.0` ([#502](https://github.com/assurance-maladie-digital/design-system/pull/502)) ([9b8495c](https://github.com/assurance-maladie-digital/design-system/commit/9b8495c3393a9f863409d4a3f1f94e1849cfc921))
  - **@types/jest:** Mise à jour vers la `v26.0.10` ([#505](https://github.com/assurance-maladie-digital/design-system/pull/505)) ([c7be0f5](https://github.com/assurance-maladie-digital/design-system/commit/c7be0f526c259f05f70932356dfec18580b42e18))
  - **@vue/test-utils:** Mise à jour vers la `v1.0.4` ([#507](https://github.com/assurance-maladie-digital/design-system/pull/507)) ([b43fb05](https://github.com/assurance-maladie-digital/design-system/commit/b43fb0581b3a2b962c7b191a7a6cf121460b004b))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.2.4` ([#510](https://github.com/assurance-maladie-digital/design-system/pull/510)) ([9061af7](https://github.com/assurance-maladie-digital/design-system/commit/9061af7c88d3feae5f24c34d67da54cfd4102d12))

### 📚 Guide de migration

#### Mise à jour de Vuetify

Vuetify a été mis à jour à la version LTS `2.3`, vous pouvez suivre le [guide de migration de Vuetify 2.3](https://github.com/vuetifyjs/vuetify/releases/tag/v2.3.0#user-content-upgrade-guide) pour la mise à jour.

#### Mise à jour des autres dépendances

Nous avons mis à jour les dépendances requises pour Vue Dot, il faut mettre à jour les dépendances suivantes si ce n'est pas déjà fait :
- **@mdi/js**: `^5.0.0`
- **vue**: `^2.6.11`
- **vuetify**: `^2.3.0`
- **vuex**: `^3.5.0`

#### Design Tokens

Si vous utilisez les Design Tokens initialement présents dans Vue Dot, vous devez installer le nouveau package `@cnamts/design-tokens` :

```sh
yarn add @cnamts/design-tokens
```

Puis importer ceux-ci depuis le package :

```diff
-import tokens from '@cnamts/vue-dot/src/tokens;
+import { tokens } from '@cnamts/design-tokens;
```

De même, la constante `vuetifyTheme` a changé d'emplacement et est maintenant appelée `lightTheme` :

```diff
-import { vuetifyTheme } from '@cnamts/vue-dot/src/tokens/vuetifyTheme';
+import { lightTheme } from '@cnamts/design-tokens/src/colors';
```

#### Styles du thème

Suite à la mise à jour de Vuetify, les styles par défaut du thème ont été mis à jour dans Vue Dash, et leur taille a été réduite d'environ 60 lignes.

Vous pouvez retrouver le détail de ces changements et mettre à jour ces styles dans vos projets en suivant les modifications des Pull Requests [#460](https://github.com/assurance-maladie-digital/design-system/pull/460) et [#482](https://github.com/assurance-maladie-digital/design-system/pull/482).

## v2.0.0-alpha.53

**Version publiée le 10/07/2020.**

Cette version comporte de nouvelles fonctionnalités ainsi que des correctifs sur les composants `UploadWorkflow`, `FileList` et `FileUpload`. Elle inclut également des correctifs d'accessibilité et du refactoring en vue du passage en version bêta.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **FileList/UploadWorkflow:** Ajout d'un bouton d'upload sur chaque ligne ([#408](https://github.com/assurance-maladie-digital/design-system/pull/408)) ([6ef29aa](https://github.com/assurance-maladie-digital/design-system/commit/6ef29aabfce3e6c4b5c5b1f04fdab6313a83fa65))
  - **FileList:** Ajout des fichiers optionnels ([#420](https://github.com/assurance-maladie-digital/design-system/pull/420)) ([7de86a4](https://github.com/assurance-maladie-digital/design-system/commit/7de86a4e3c8289136d30a4542adc83f4f4266dfd))
  - **mixins:** Ajout de la mixin `widthable` ([#424](https://github.com/assurance-maladie-digital/design-system/pull/424)) ([8070012](https://github.com/assurance-maladie-digital/design-system/commit/807001276b75aad7700b63422b4bea49fb6e689b))
  - **helpers:** Ajout du helper `convertToUnit` ([#424](https://github.com/assurance-maladie-digital/design-system/pull/424)) ([8070012](https://github.com/assurance-maladie-digital/design-system/commit/807001276b75aad7700b63422b4bea49fb6e689b))

- 🐛 **Corrections de bugs**
  - **UploadWorkflow:** Correction d'une erreur de validation sur les fichiers avec une extension en majuscules ([#407](https://github.com/assurance-maladie-digital/design-system/pull/407)) ([70a6684](https://github.com/assurance-maladie-digital/design-system/commit/70a668482a1618ed75aa18eaa58d797b5e97dbc9))
  - **UploadWorkflow:** Correction de l'affichage de la fenêtre de sélection lors d'une erreur ([#409](https://github.com/assurance-maladie-digital/design-system/pull/409)) ([669c79d](https://github.com/assurance-maladie-digital/design-system/commit/669c79da8370798f060111b7fe8ab870590e7ae2))
  - **FileList:** Correction du titre du fichier qui ne retourne pas à la ligne ([#411](https://github.com/assurance-maladie-digital/design-system/pull/411)) ([c417ffb](https://github.com/assurance-maladie-digital/design-system/commit/c417ffbcdf6375ef817a5a3a21cd9bfe73010840))
  - **DatePicker:** Correction de la largeur du sélecteur d'année sur IE 11 ([#421](https://github.com/assurance-maladie-digital/design-system/pull/421)) ([7bd3b06](https://github.com/assurance-maladie-digital/design-system/commit/7bd3b0635bbc642f0272e355da03c5c418d56b64))
  - **rules:** Correction des conditions dans les règles `maxLength` et `minLength` ([#432](https://github.com/assurance-maladie-digital/design-system/pull/432)) ([7bd3b06](https://github.com/assurance-maladie-digital/design-system/commit/7bd3b0635bbc642f0272e355da03c5c418d56b64))

- ♿️ **Accessibilité**
  - **DatePicker/FileList:** Ajout des `aria-label` manquants ([#427](https://github.com/assurance-maladie-digital/design-system/pull/427)) ([f069e35](https://github.com/assurance-maladie-digital/design-system/commit/f069e35376d002182fcbd9ff7de7c7de3297471c))
  - **playground:** Correction du label dans l'exemple `debounce` ([#428](https://github.com/assurance-maladie-digital/design-system/pull/428)) ([fafee4e](https://github.com/assurance-maladie-digital/design-system/commit/fafee4e596f6404546179af407c36d72e2e5e78c))

- ♻️ **Refactoring**
  - **UploadWorkflow:** Extraction des fonctionnalités en mixins ([#342](https://github.com/assurance-maladie-digital/design-system/pull/342)) ([479e56b](https://github.com/assurance-maladie-digital/design-system/commit/479e56bfca55f3e56f5e8b3da51913d610237d1a))
  - **playground:** Utilisation de la classe `vd-form-input` dans les exemples ([#425](https://github.com/assurance-maladie-digital/design-system/pull/425)) ([0c7927a](https://github.com/assurance-maladie-digital/design-system/commit/0c7927a651eff5f139178256dc5e3ea5b497ce03))
  - **LocalStorageUtility:** Mise à jour de la détection de fonctionnalité de `localStorage` ([#426](https://github.com/assurance-maladie-digital/design-system/pull/426)) ([2ab0821](https://github.com/assurance-maladie-digital/design-system/commit/2ab0821b52b826a44617f9628e8cdd616cd1092a))
  - **DialogBox:** Ajout du suffixe `Btn` dans les locales ([#429](https://github.com/assurance-maladie-digital/design-system/pull/429)) ([6cee959](https://github.com/assurance-maladie-digital/design-system/commit/6cee959b0049a34c9130e392a4e0840c2528817c))
  - **DatePicker:** Déplacement des tests des mixins dans un dossier dédié ([#430](https://github.com/assurance-maladie-digital/design-system/pull/430)) ([41e4645](https://github.com/assurance-maladie-digital/design-system/commit/41e46453c24dfbb61ff7888c0d048f73bb52850a))
  - **global:** Mise à jour de l'utilisation de `deepMerge` et utilisation de `any` dans le type `Options` ([#430](https://github.com/assurance-maladie-digital/design-system/pull/430)) ([41e4645](https://github.com/assurance-maladie-digital/design-system/commit/41e46453c24dfbb61ff7888c0d048f73bb52850a))
  - **FileUpload:** Mise à jour de la taille maximale d'un fichier à 10MB par défaut ([#433](https://github.com/assurance-maladie-digital/design-system/pull/433)) ([ac28846](https://github.com/assurance-maladie-digital/design-system/commit/ac288468dd2a3771cd5f903325857fd13aaedfb0))

- 🔥 **Suppressions**
  - **PageCard:** Suppression de la prop `no-shadow` ([#412](https://github.com/assurance-maladie-digital/design-system/pull/412)) ([a91cdcd](https://github.com/assurance-maladie-digital/design-system/commit/a91cdcd24ebbe409883b99c6ed545e16eab26b98))

- ✅ **Tests**
  - **global:** Utilisation de `toBeUndefined()` à la place de `toBe(undefined)` ([#410](https://github.com/assurance-maladie-digital/design-system/pull/410)) ([02d84e2](https://github.com/assurance-maladie-digital/design-system/commit/02d84e242cd6d42377e4cf540da3d73a20ad46a8))

### Vue Dash
- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([3cf35fd](https://github.com/assurance-maladie-digital/design-system/commit/3cf35fd42355cf32a8a415bf2a9509a7df426de8))

### Interne
- ⬆️ **Dépendances**
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.0.6` ([#394](https://github.com/assurance-maladie-digital/design-system/pull/394)) ([3fa3d8f](https://github.com/assurance-maladie-digital/design-system/commit/3fa3d8fd14978602f62887f9baccd26bd1a0382d))
  - **babel:** Mise à jour du monorepo vers la `v7.10.4` ([#399](https://github.com/assurance-maladie-digital/design-system/pull/399)) ([62e2e8b](https://github.com/assurance-maladie-digital/design-system/commit/62e2e8bfb2d4137d3b292357e45dc811599d160b))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.0.3` ([#400](https://github.com/assurance-maladie-digital/design-system/pull/400)) ([61767db](https://github.com/assurance-maladie-digital/design-system/commit/61767db500527c254ab855237df2e89cfa8478ca))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v28.6.1` ([#401](https://github.com/assurance-maladie-digital/design-system/pull/401)) ([25b8def](https://github.com/assurance-maladie-digital/design-system/commit/25b8def6d1c6004c60935160e50fb63cba819998))
  - **typescript:** Mise à jour vers la `v3.9.6` ([#401](https://github.com/assurance-maladie-digital/design-system/pull/401)) ([25b8def](https://github.com/assurance-maladie-digital/design-system/commit/25b8def6d1c6004c60935160e50fb63cba819998))
  - **dayjs:** Mise à jour vers la `v1.8.29` ([#404](https://github.com/assurance-maladie-digital/design-system/pull/404)) ([27bfc33](https://github.com/assurance-maladie-digital/design-system/commit/27bfc33b4fd59279f62a98cb6ad73c1fd10a365e))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.6.0` ([#413](https://github.com/assurance-maladie-digital/design-system/pull/413)) ([9e3c419](https://github.com/assurance-maladie-digital/design-system/commit/9e3c419d86c2071aff840ebaeb61aa6aa099e4ea))
  - **@types/jest:** Mise à jour vers la `v26.0.4` ([#414](https://github.com/assurance-maladie-digital/design-system/pull/414)) ([49ca48a](https://github.com/assurance-maladie-digital/design-system/commit/49ca48a1bdd73f1a361c4c94a236f9047383bd0c))
  - **sass:** Mise à jour vers la `v1.26.10` ([#416](https://github.com/assurance-maladie-digital/design-system/pull/416)) ([b97b0e9](https://github.com/assurance-maladie-digital/design-system/commit/b97b0e9c9f6dd0f153a3018957564a449bf0419d))
  - **sass-loader:** Mise à jour vers la `v9` ([#403](https://github.com/assurance-maladie-digital/design-system/pull/403)) ([736f26f](https://github.com/assurance-maladie-digital/design-system/commit/736f26ff76ce37f21d9946aad077ad479348a3dc))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v29.1.3` ([#423](https://github.com/assurance-maladie-digital/design-system/pull/423)) ([d9120c8](https://github.com/assurance-maladie-digital/design-system/commit/d9120c868a4c0ff0f98f7edd603e009b9723c2fe))

### 📚 Guide de migration

#### Largeur des composants `FileUpload` et `UploadWorkflow`

Ces composants ont maintenant une largeur par défaut de `100%`, vous pouvez utiliser la prop `width` pour définir une largeur :

```diff
<FileUpload
+	width="512"
/>
```

#### Suppression de l'ombre sur `PageCard`

La prop `no-shadow` a été supprimée car elle ne fonctionnait pas correctement. Pour retirer l'ombre, vous pouvez utiliser la même méthode que sur une `VCard` :

```diff
<PageCard
-	no-shadow
+	:elevation="0"
/>
```

## v2.0.0-alpha.52

**Version publiée le 01/07/2020.**

Cette version comporte un changement de dépendance important, ainsi que des nouvelles fonctionnalités diverses comme les classes de largeur de champs de formulaires, mais aussi des correctifs sur le `FileUpload` et du refactoring en vue du passage en version bêta.

### Vue Dot

- 💥 **Changements majeurs**
  - **dependencies:** Remplacement de `vue-the-mask` par `vue-input-facade` ([#363](https://github.com/assurance-maladie-digital/design-system/pull/363)) ([c17ad2b](https://github.com/assurance-maladie-digital/design-system/commit/c17ad2bcb951afb7f5adc37bab8b6c0b440e6016))

- ✨ **Nouvelles fonctionnalités**
  - **SubHeader:** Ajout d'un défilement horizontal lorsque le contenu déborde ([a940ce7](https://github.com/assurance-maladie-digital/design-system/commit/a940ce7c3217fabf160364a40c009fbe7d3e2729))
  - **DataList:** Ajout de la prop `render-html-value` ([#348](https://github.com/assurance-maladie-digital/design-system/pull/348)) ([7b0cc23](https://github.com/assurance-maladie-digital/design-system/commit/7b0cc2330c5d82e1f27598c3b79aeba8fa649bd9))
  - **directives:** Ajout du helper `registerDirectives` ([#351](https://github.com/assurance-maladie-digital/design-system/pull/351)) ([dc9577f](https://github.com/assurance-maladie-digital/design-system/commit/dc9577fdd020f284d44d8f245f6a82f8fff7a871))
  - **DatePicker:** Ajout de la prop `outlined` ([#355](https://github.com/assurance-maladie-digital/design-system/pull/355)) ([714ee7a](https://github.com/assurance-maladie-digital/design-system/commit/714ee7ad8189d55be502611bc2d3f99d92a6511f))
  - **helpers:** Ajout de la fonction `deepRemoveKeys` ([#360](https://github.com/assurance-maladie-digital/design-system/pull/360)) ([d1e5cb0](https://github.com/assurance-maladie-digital/design-system/commit/d1e5cb0e780e0a8c1e0b1e7bb4623eb1d55139ba))
  - **tokens:** Ajout des tokens et classes `input-width` ([#381](https://github.com/assurance-maladie-digital/design-system/pull/381)) ([8e7fce3](https://github.com/assurance-maladie-digital/design-system/commit/8e7fce338692ec122085f72b9c3d73c66db9d84b)) ([#397](https://github.com/assurance-maladie-digital/design-system/pull/397)) ([d4d75ce](https://github.com/assurance-maladie-digital/design-system/commit/d4d75cec94e4cab2285e6ca6faee5a58b16bb8a9))

- 🐛 **Corrections de bugs**
  - **SubHeader:** Correction de la prop `title` utilisée à la place de `list-title` ([#323](https://github.com/assurance-maladie-digital/design-system/pull/323)) ([0c56297](https://github.com/assurance-maladie-digital/design-system/commit/0c562971a3f3ead0562afca58efb90c52000ef4a))
  - **DataList:** Correction du mode `row` ne fonctionnant pas ([#299](https://github.com/assurance-maladie-digital/design-system/pull/299)) ([bfcda8e](https://github.com/assurance-maladie-digital/design-system/commit/bfcda8e55037f906b5e73ada65914c609f69742d))
  - **FileUpload :** Correction des styles de focus ([#364](https://github.com/assurance-maladie-digital/design-system/pull/364)) ([53733cb](https://github.com/assurance-maladie-digital/design-system/commit/53733cbb8be76d99a0409958fb6153816558a749))
  - **LocalStorageUtility:** Correction d'erreurs lorsque `localStorage` n'est pas supporté ([#375](https://github.com/assurance-maladie-digital/design-system/pull/375)) ([42ff78c](https://github.com/assurance-maladie-digital/design-system/commit/42ff78cc745dfaad068b6862e759bf4c0957c05c))
  - **FileUpload:** Correction du type de la valeur et ajout d'une fonction de validation sur celle-ci ([#380](https://github.com/assurance-maladie-digital/design-system/pull/380)) ([494b226](https://github.com/assurance-maladie-digital/design-system/commit/494b2268b9c79e3c91e90823818bc62fa4706b72))

- ♻️ **Refactoring**
  - **SubHeader:** Modification de la prop `title-text` pour qu'elle soit optionnelle ([860b849](https://github.com/assurance-maladie-digital/design-system/commit/860b849dc8c0f531049353f26e97187e6590d82e))
  - **eventable:** Renommage de la prop `show-week-ends` en `show-weekends` ([#354](https://github.com/assurance-maladie-digital/design-system/pull/354)) ([180f506](https://github.com/assurance-maladie-digital/design-system/commit/180f506e232e444244d7b4c0cc732ff7c4cee41d))
  - **FileList:** Renommage de la prop `hide-list-divider` en `hide-last-divider` ([#378](https://github.com/assurance-maladie-digital/design-system/pull/378)) ([3483de9](https://github.com/assurance-maladie-digital/design-system/commit/3483de931040693bd97b75f14b957bd316e4f6f8))
  - **DatePicker:** Mise à jour du binding de la prop `success-messages` ([#382](https://github.com/assurance-maladie-digital/design-system/pull/382)) ([a0ea9d9](https://github.com/assurance-maladie-digital/design-system/commit/a0ea9d9805a05118b27ece6f1bdd601f131919ab))

- 🔥 **Suppressions**
  - **package:** Suppression d'artefacts de build non nécessaires ([ee012c5](https://github.com/assurance-maladie-digital/design-system/commit/ee012c5fbbdcd75960e6e363939902a6ff2c92a6))
  - **PaginatedTable:** Suppression de la prop non utilisée `server-items-length` ([#370](https://github.com/assurance-maladie-digital/design-system/pull/370)) ([a4244c8](https://github.com/assurance-maladie-digital/design-system/commit/a4244c8f3dca5b77af080150c8aa657c14a0efaa))

- ✅ **Tests**
  - **SubHeader:** Ajout d'un test sur l'état de chargement ([#325](https://github.com/assurance-maladie-digital/design-system/pull/325)) ([c8bd939](https://github.com/assurance-maladie-digital/design-system/commit/c8bd93934b85f8c3e68f2b5c7d2096a955a0b2f4))
  - **DataList:** Suppression d'un ancien test ([29e1e96](https://github.com/assurance-maladie-digital/design-system/commit/29e1e961963562b31090ea1163b386a353a36b12))

### Vue Dash

- 🔥 **Suppressions**
  - **template:** Suppression des imports non utilisés dans le template ([e89b0c0](https://github.com/assurance-maladie-digital/design-system/commit/e89b0c099077dbae493886a48d4d830b5516419c))

### Interne

- 🔧 **Configuration**
  - **config:** Ajout de `preserveSymlinks` au fichier `tsconfig.json` ([#383](https://github.com/assurance-maladie-digital/design-system/pull/383)) ([488b4e3](https://github.com/assurance-maladie-digital/design-system/commit/488b4e3919d579f246cc2c728d4e0a9394c7d95f))

- ⬆️ **Dépendances**
  - **copy-webpack-plugin:** Mise à jour vers la `v6.0.2` ([#327](https://github.com/assurance-maladie-digital/design-system/pull/327)) ([3b1a17e](https://github.com/assurance-maladie-digital/design-system/commit/3b1a17e4032ff1438613b1765e280a57845e0776))
  - **fs-extra:** Mise à jour vers la `v9.0.1` ([#329](https://github.com/assurance-maladie-digital/design-system/pull/329)) ([c23385f](https://github.com/assurance-maladie-digital/design-system/commit/c23385fffbd2fe49f1d7efb3486bcb2f9ad0b0f0))
  - **lerna:** Mise à jour vers la `v3.22.1` ([#347](https://github.com/assurance-maladie-digital/design-system/pull/347)) ([eee41c3](https://github.com/assurance-maladie-digital/design-system/commit/eee41c331e3a0e6b81e8600c887478137d170d12))
  - **@types/node:** Mise à jour vers la `v12.12.47` ([#350](https://github.com/assurance-maladie-digital/design-system/pull/350)) ([3a86faa](https://github.com/assurance-maladie-digital/design-system/commit/3a86faa7710e7261c8376d7a0b766ac603aa8e3c))
  - **vuetify:** Mise à jour vers la `v2.2.34` ([#352](https://github.com/assurance-maladie-digital/design-system/pull/352)) ([b5836eb](https://github.com/assurance-maladie-digital/design-system/commit/b5836eb43f4188de0297d9ea11d4e9c648e27c66))
  - **vuetify-loader:** Mise à jour vers la `v1.5.0` ([#358](https://github.com/assurance-maladie-digital/design-system/pull/358)) ([a375ec2](https://github.com/assurance-maladie-digital/design-system/commit/a375ec2239b32307549c56b5c39ca8f59cf8fd63))
  - **vue-router:** Mise à jour vers la `v3.3.4` ([#365](https://github.com/assurance-maladie-digital/design-system/pull/365)) ([29dcdb7](https://github.com/assurance-maladie-digital/design-system/commit/29dcdb7132714c3da4bab3acf8f2b9378a55d79e))
  - **vue-input-facade:** Mise à jour vers la `1.3.1` ([#369](https://github.com/assurance-maladie-digital/design-system/pull/369)) ([d55b2c0](https://github.com/assurance-maladie-digital/design-system/commit/d55b2c0dff1cb6fbeccc0af9f39e6aed7ff25eb2))
  - **lint-staged:** Mise à jour vers la `v10.2.11` ([#373](https://github.com/assurance-maladie-digital/design-system/pull/373)) ([cdf8ccf](https://github.com/assurance-maladie-digital/design-system/commit/cdf8ccf5180ff05bf3cd9d812cf0298b3640139a))
  - **ts-jest:** Mise à jour vers la `v26.1.1` ([#387](https://github.com/assurance-maladie-digital/design-system/pull/387)) ([eee4fb0](https://github.com/assurance-maladie-digital/design-system/commit/eee4fb08e3b523d19b49b315a2f5d733d50bea21))
  - **babel:** Mise à jour du monorepo vers la `v7.10.3` ([#384](https://github.com/assurance-maladie-digital/design-system/pull/384)) ([1b42117](https://github.com/assurance-maladie-digital/design-system/commit/1b42117e4d65fa13b9ef92aa98b92d26bf400aa8))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.5.0` ([#390](https://github.com/assurance-maladie-digital/design-system/pull/390)) ([d1b81af](https://github.com/assurance-maladie-digital/design-system/commit/d1b81af89a385cb413521beea06a05b16e3153f5))
  - **sass:** Mise à jour vers la `v1.26.9` ([#391](https://github.com/assurance-maladie-digital/design-system/pull/391)) ([066cc8a](https://github.com/assurance-maladie-digital/design-system/commit/066cc8ab0a39bc52a7ba01a6efa8a803b2b1561b))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v28.5.1` ([#392](https://github.com/assurance-maladie-digital/design-system/pull/392)) ([e5ed339](https://github.com/assurance-maladie-digital/design-system/commit/e5ed339027ce191b28d69385e4760ca9a7e2359c))
  - **jest:** Mise à jour vers la `v26.1.0` ([#393](https://github.com/assurance-maladie-digital/design-system/pull/393)) ([8a6f178](https://github.com/assurance-maladie-digital/design-system/commit/8a6f178c1c7219cfa8bd708a629fd4243a7e49e2))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.4.6` et de **vuex** vers la `v3.5.1` ([#395](https://github.com/assurance-maladie-digital/design-system/pull/395)) ([4e6ad36](https://github.com/assurance-maladie-digital/design-system/commit/4e6ad3645815e28153e5e441a3b7d5e8e646ad78))
  - **@types/jest:** Mise à jour vers la `v26.0.3` ([#396](https://github.com/assurance-maladie-digital/design-system/pull/396)) ([c8a72ed](https://github.com/assurance-maladie-digital/design-system/commit/c8a72ed16af5f14611aaf72376f1e137a63c81b1))

### 📚 Guide de migration

#### Remplacer `vue-the-mask`

Au moment de la sortie de cette version, [Vue the mask](https://github.com/vuejs-tips/vue-the-mask) n'a pas été mis à jour depuis deux ans (voir [#137](https://github.com/vuejs-tips/vue-the-mask/issues/137)), nous avons donc décidé de le remplacer par [Vue input facade](https://github.com/RonaldJerez/vue-input-facade), un fork mis à jour plus régulièrement.

Pour mettre à jour, vous devez supprimer `vue-the-mask` du fichier `package.json`, en utilisant la commande `yarn remove vue-the-mask`, et installer `vue-input-facade` en utilisant `yarn add vue-input-facade`.

Après avoir installé le nouveau package, vous devez mettre à jour la déclaration du module :

```diff
// src/modules.d.ts
-declare module 'vue-the-mask';
+declare module 'vue-input-facade';
```

Et aussi mettre à jour l'utilisation du plugin :

```diff
// src/plugins/vue-dot.ts
-// Register v-mask directive
-import VueTheMask from 'vue-the-mask';
-Vue.use(VueTheMask);
+// Register v-facade directive
+import InputFacade from 'vue-input-facade';
+Vue.use(InputFacade);
```

Il est également nécessaire d'ajouter `vue-input-facade` à la liste des dépendances qui doivent être transpilées pour assurer la comptabilité des navigateurs comme IE 11 :

```diff
// vue.config.js
// Transpile ES6 inside dependencies
transpileDependencies: [
	/node_modules[/\\\\]vuetify[/\\\\]/,
	'vuex-persist',
+	'vue-input-facade'
]
```

Pour la compatibilité des navigateurs comme IE 11, vous devez également ajouter le polyfill `custom-event-polyfill` en utilisant `yarn add custom-event-polyfill`, puis l'importer dans votre application :

```diff
// main.ts
+// Polyfill for vue-input-facade on IE
+// (not included in core-js)
+import 'custom-event-polyfill';
]
```

Si vous n'utilisez pas directement la directive `v-mask`, c'est tout ce que vous avez à faire !

Si vous l'utilisez, vous devez rechercher et remplacer `v-mask` par `v-facade`. Vous pouvez configurer `vue-input-facade` pour utiliser la directive `v-mask` (voir [Migrating existing projects](https://github.com/RonaldJerez/vue-input-facade#migrating-existing-projects)), mais nous vous conseillons de la renommer maintenant pour éviter de créer de la dette technique.

#### Renommer `show-week-ends` sur le `DatePicker`

La prop `show-week-ends` a été renommée en `show-weekends` :

```diff
<DatePicker
-	showWeekEnds
+	showWeekends
/>
```

#### Utiliser la nouvelle prop `outlined` sur le `DatePicker`

Lorsque vous utilisez la prop `outlined` sur le `DatePicker`, le `VMenu` sera maintenant positionné au bon endroit et la prop `append-icon` sera activée automatiquement :

```diff
<DatePicker
-	:vuetify-options="{
-		menu: {
-			nudgeBottom: 56,
-			nudgeRight: 0
-		}
-	}"
	outlined
-	append-icon
/>
```

#### Utiliser les nouvelles classes pour les champs de formulaires

Nous avons ajouté de nouveaux Design Tokens et de nouvelles classes pour ajuster la largeur des champs de formulaires, vous pouvez rechercher et remplacer les anciennes classes `form-input` par `vd-form-input` :

```diff
<VTextField
-	class="form-input"
+	class="vd-form-input"
/>
```

Et vous pouvez utiliser les nouveaux suffixes `xl`, `l`, `s` :

```html
<VTextField class="vd-form-input-xl" />
```

Vous pouvez également supprimer les anciennes classes de votre thème :

```diff
// src/theme/styles/utility.scss
-.form-input {
-	width: 328px;
-	flex: none;
-}
```

## v2.0.0-alpha.51

**Version publiée le 02/06/2020.**

Cette version comporte plusieurs mois de refactoring de la librairie et de son écosystème, c'est la première version d'une série en vue du passage en version bêta.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **functions:** Ajout de la fonction `formatNir` ([#108](https://github.com/assurance-maladie-digital/design-system/pull/108)) ([5d19a26](https://github.com/assurance-maladie-digital/design-system/commit/5d19a2611bcc43967a4d0d49f93766fad861fd4c))
  - **rules:** Ajout de la règle de validation `exactLength` ([#203](https://github.com/assurance-maladie-digital/design-system/pull/203)) ([3eb5798](https://github.com/assurance-maladie-digital/design-system/commit/3eb5798b2bd4531683758577d9bd40a78fee3ba5))
  - **helpers:** Ajout du helper `scrollBehavior` ([#210](https://github.com/assurance-maladie-digital/design-system/pull/210)) ([e3bcc56](https://github.com/assurance-maladie-digital/design-system/commit/e3bcc56f19f8032792f930b7646e7db62bb81843))
  - **DataList:** Ajout d'un bouton d'action ([#211](https://github.com/assurance-maladie-digital/design-system/pull/211)) ([635e5a1](https://github.com/assurance-maladie-digital/design-system/commit/635e5a123888f7b82b87a9ada3a59ecab0d0d9af))
  - **FooterWrapper/FooterBtn:** Ajout de nouveaux composants ([#253](https://github.com/assurance-maladie-digital/design-system/pull/253)) ([da1f9bb](https://github.com/assurance-maladie-digital/design-system/commit/da1f9bbb194f3e3aa1aabe19fb7c550ed1a5b93b))
  - **DialogBox:** Ajout d'un nouveau composant ([#238](https://github.com/assurance-maladie-digital/design-system/pull/238)) ([088c2db](https://github.com/assurance-maladie-digital/design-system/commit/088c2dbe64ca0dc74d96ccda8686c5bf5052f8db))
  - **DialogBox:** Ajout des propriétés `btnCancelText` et `confirmBtnText` ([#280](https://github.com/assurance-maladie-digital/design-system/pull/280)) ([6467582](https://github.com/assurance-maladie-digital/design-system/commit/64675828c2abac76df349122d32ae11965e2b6e9))

- 🐛 **Corrections de bugs**
  - **CopyBtn:** Correction du nom du composant ([de5c0b5](https://github.com/assurance-maladie-digital/design-system/commit/de5c0b523883e9ea29aa4ade8800be60135d4ed5))
  - **DataList:** Ajout d'un binding d'option manquant ([#240](https://github.com/assurance-maladie-digital/design-system/pull/240)) ([79e983d](https://github.com/assurance-maladie-digital/design-system/commit/79e983dd5565e7bbec8f6fcf23c8bbca5cd3a294))
  - **SubHeader:** Correction des styles ([#289](https://github.com/assurance-maladie-digital/design-system/pull/289)) ([8c389f7](https://github.com/assurance-maladie-digital/design-system/commit/8c389f7634fddd061e3caf1bc4aa59ad832f7fe6))
  - **FooterWrapper:** Correction des styles sur les écrans mobiles ([#288](https://github.com/assurance-maladie-digital/design-system/pull/288)) ([15603a1](https://github.com/assurance-maladie-digital/design-system/commit/15603a142f24a92a11251cd26859fb8bf176fdb7))
  - **DatePicker:** Correction de l'affichage de `Invalid Date` lorsque le mauvais format est utilisé ([#306](https://github.com/assurance-maladie-digital/design-system/pull/306)) ([394c17d](https://github.com/assurance-maladie-digital/design-system/commit/394c17db7d788d751bd692b66730d4aa4f822d45))

- ♻️ **Refactoring**
  - **debounce:** Refonte de la directive ([#144](https://github.com/assurance-maladie-digital/design-system/pull/144)) ([aa21507](https://github.com/assurance-maladie-digital/design-system/commit/aa21507b675d931b68a000e8be1996d088571ed4))
  - **CopyBtn:** Refonte du composant ([#146](https://github.com/assurance-maladie-digital/design-system/pull/146)) ([7bc0199](https://github.com/assurance-maladie-digital/design-system/commit/7bc019949244b6083e85e77dcf8a99192487ef1e))
  - **rules:** Refonte des règles de validation ([#147](https://github.com/assurance-maladie-digital/design-system/pull/147)) ([68ff5da](https://github.com/assurance-maladie-digital/design-system/commit/68ff5da882a4cc5cbb84b2f9e9f73fa2337c5f26))
  - **CopyBtn:** Mise à jour de l'API du composant ([#147](https://github.com/assurance-maladie-digital/design-system/pull/147)) ([68ff5da](https://github.com/assurance-maladie-digital/design-system/commit/68ff5da882a4cc5cbb84b2f9e9f73fa2337c5f26))
  - **components:** Inversion des propriétés booléennes avec `true` comme valeur par défaut ([#154](https://github.com/assurance-maladie-digital/design-system/pull/154)) ([7eb25e3](https://github.com/assurance-maladie-digital/design-system/commit/7eb25e343821c6b00591878a589cd675ddc80ec3))
  - **DataList:** Refonte du composant ([#155](https://github.com/assurance-maladie-digital/design-system/pull/155)) ([ec8f28d](https://github.com/assurance-maladie-digital/design-system/commit/ec8f28d255932216573da019f6bc793fb7af3145))
  - **HeaderLoading:** Refonte du composant ([#167](https://github.com/assurance-maladie-digital/design-system/pull/167)) ([d052b4e](https://github.com/assurance-maladie-digital/design-system/commit/d052b4e2b1308985a29acaec36ce521a4e21894d))
  - **DataList:** Mise à jour de l'ordre des props ([fbbdc4f](https://github.com/assurance-maladie-digital/design-system/commit/fbbdc4f5ac6ab0c926aeb635a8e2cdfaeb01b546))
  - **DataListLoading:** Refonte du composant ([#194](https://github.com/assurance-maladie-digital/design-system/pull/194)) ([c2c84c9](https://github.com/assurance-maladie-digital/design-system/commit/c2c84c90af0dc507611146072e05e4db63f4de69))
  - **DataList:** Renommage de la prop `list` en `items` ([#227](https://github.com/assurance-maladie-digital/design-system/pull/227)) ([e6cc88b](https://github.com/assurance-maladie-digital/design-system/commit/e6cc88ba12ad498c62243eaa195020b42b4c36df))
  - **DataList:** Renommage de la prop `width` en `item-width` ([#239](https://github.com/assurance-maladie-digital/design-system/pull/239)) ([1721dff](https://github.com/assurance-maladie-digital/design-system/commit/1721dff160d707a540dfa1dafd2a4a491b0a2ac2))
  - **DataList:** Utilisation de l'interface `DataOptions` de Vuetify ([#241](https://github.com/assurance-maladie-digital/design-system/pull/241)) ([31a06ce](https://github.com/assurance-maladie-digital/design-system/commit/31a06ce3f1ba6b7988e6ef8022336778195593c7))
  - **DataListItem:** Déplacement des options dans le fichier `config.ts` ([#275](https://github.com/assurance-maladie-digital/design-system/pull/275)) ([3729fb5](https://github.com/assurance-maladie-digital/design-system/commit/3729fb5e613bb50bb38bdd1382c8c26b46f80f9a))
  - **UploadWorkflow:** Utilisation de `DialogBox` ([#279](https://github.com/assurance-maladie-digital/design-system/pull/279)) ([9346570](https://github.com/assurance-maladie-digital/design-system/commit/93465701222a0c98abd958ecccfde7d6bf2fe632))
  - **DatePicker:** Utilisation du helper `mixins` ([#305](https://github.com/assurance-maladie-digital/design-system/pull/305)) ([d0e5d88](https://github.com/assurance-maladie-digital/design-system/commit/d0e5d880f585e52e51329c56401cf9d6437b7a7c))
  - **DatePicker:** Ajout du type `date` sur le `VTextField` et correction de l'alignement des icônes ([#307](https://github.com/assurance-maladie-digital/design-system/pull/307)) ([021f2b0](https://github.com/assurance-maladie-digital/design-system/commit/021f2b0db54f7108ee49f799b49d630ff0446518))
  - **playground:** Mise à jour des exemples `DatePickerEx` et `RulesEx` ([90a5fdb](https://github.com/assurance-maladie-digital/design-system/commit/90a5fdb59542e589d63c02dd80f269777c688c58))

- ⚡️ **Performances**
  - **webpack:** Ajout du champ `module` pour activer le tree-shaking ([b0859d6](https://github.com/assurance-maladie-digital/design-system/commit/b0859d6913172032d145abb888c95a3a4cb7abbc))

- 🏗 **Architecture**
  - **PageCard:** Déplacement du composant dans le dossier `elements` ([#258](https://github.com/assurance-maladie-digital/design-system/pull/258)) ([cbf5e57](https://github.com/assurance-maladie-digital/design-system/commit/cbf5e57c29489d3475d1234d690d72c14076ca9f))
  - **FileList:** Déplacement du composant comme enfant de `UploadWorkflow` ([#278](https://github.com/assurance-maladie-digital/design-system/pull/278)) ([8de9d66](https://github.com/assurance-maladie-digital/design-system/commit/8de9d66ab21c349c87033fe76361bd39d1d20e44))
  - **tests:** Déplacement de la fonction `html` dans le dossier `tests/utils` ([#309](https://github.com/assurance-maladie-digital/design-system/pull/309)) ([3f8e803](https://github.com/assurance-maladie-digital/design-system/commit/3f8e80381cd1682b95764da8880e40ee4521f8b9))

- ✅ **Tests**
  - **global:** Correction de fautes d'orthographe ([#169](https://github.com/assurance-maladie-digital/design-system/pull/169)) ([620bdb2](https://github.com/assurance-maladie-digital/design-system/commit/620bdb22721170eb45eff55c9b2d07d9f8001b89))
  - **utils:** Ajout de la fonction `addVApp` ([#308](https://github.com/assurance-maladie-digital/design-system/pull/308)) ([5ce63f7](https://github.com/assurance-maladie-digital/design-system/commit/5ce63f7328206ed02549044557b75627868ed33f))
  - **index:** Déplacement de la déclaration de `vue-the-mask` dans le fichier `tests/index.ts` ([#310](https://github.com/assurance-maladie-digital/design-system/pull/310)) ([d604c32](https://github.com/assurance-maladie-digital/design-system/commit/d604c3255edb0a5dcf99ded3eef90434e91e5a4a))

- 🔥 **Suppressions**
  - **Playground:** Suppression d'un ancien exemple dans `CopyBtnEx` ([b5cfc30](https://github.com/assurance-maladie-digital/design-system/commit/b5cfc303c3f5ec934766676915c60b91f0fbfea2))
  - **types:** Suppression d'un import inutile dans le fichier `src/index.ts` ([fed0b04](https://github.com/assurance-maladie-digital/design-system/commit/fed0b04d1ea6f02c4099074145620880e1de6180))
  - **DialogBox:** Suppression de l'import des Design Tokens ([#319](https://github.com/assurance-maladie-digital/design-system/pull/319)) ([2d0c1fc](https://github.com/assurance-maladie-digital/design-system/commit/2d0c1fc122bccc3a1242dbf078c77ea6b29e2d4b))

- 🚨 **Lint**
  - **playground:** Correction d'erreurs sur les types de retours ([be74c93](https://github.com/assurance-maladie-digital/design-system/commit/be74c93cd0d936c2d00c76674e22f6a14d00ed4b))

- 📝 **Documentation**
  - **package.json:** Mise à jour de la description ([ebfb0fa](https://github.com/assurance-maladie-digital/design-system/commit/ebfb0fa9357086ec4e0c92952b1dfdf0ce0325db))
  - **README:** Suppression de l'option `global` dans les instructions d'installation ([cfd9e49](https://github.com/assurance-maladie-digital/design-system/commit/cfd9e49692399f27ad627b4b5040c7334f950ac8))
  - **README:** Mise à jour de la section écosystème ([#274](https://github.com/assurance-maladie-digital/design-system/pull/274)) ([1e6def1](https://github.com/assurance-maladie-digital/design-system/commit/1e6def1cbde81db2d10541c9209f67ff4e307e68))

- 🔧 **Configuration**
  - **lint:** Suppression de TSLint et mise à jour de la configuration d'ESLint ([#281](https://github.com/assurance-maladie-digital/design-system/pull/281)) ([1e6def1](https://github.com/assurance-maladie-digital/design-system/commit/1e6def1cbde81db2d10541c9209f67ff4e307e68))

### Vue Dash

- ✨ **Nouvelles fonctionnalités**
  - **prompts:** Ajout de l'option Matomo ([#175](https://github.com/assurance-maladie-digital/design-system/pull/175)) ([a8bb95b](https://github.com/assurance-maladie-digital/design-system/commit/a8bb95b7c5a2bbf41df6cee1ed0a74c039b40aea))

- 🐛 **Corrections de bugs**
  - **template:** Correction de la configuration du router ([#179](https://github.com/assurance-maladie-digital/design-system/pull/179)) ([1c89a67](https://github.com/assurance-maladie-digital/design-system/commit/1c89a673b894f2b76c62ba33e7796539e106fdae))
  - **template:** Correction de la mauvaise version de Vue Dot utilisée ([#188](https://github.com/assurance-maladie-digital/design-system/pull/188)) ([fec3a39](https://github.com/assurance-maladie-digital/design-system/commit/fec3a3993b9add67d716aed2936bdaaadb1b3289))
  - **template:** Épinglage de la de Vue Dot en versions alpha et bêta ([#259](https://github.com/assurance-maladie-digital/design-system/pull/259)) ([8330d80](https://github.com/assurance-maladie-digital/design-system/commit/8330d806a53b9c1128aaafa0ec7d232c4fa191a5))

- ♻️ **Refactoring**
  - **template:** Mise à jour du template ([#111](https://github.com/assurance-maladie-digital/design-system/pull/111)) ([7088316](https://github.com/assurance-maladie-digital/design-system/commit/7088316c095cd7e58f19d0ee3d2915ae6ba595a2))
  - **template:** Utilisation de la fonction `html` de Vue Dot ([52bdafc](https://github.com/assurance-maladie-digital/design-system/commit/52bdafc997420c6dead34b1e9dce2ab54ac63c96))
  - **template:** Mise à jour des styles du thème ([#189](https://github.com/assurance-maladie-digital/design-system/pull/189)) ([99f62fd](https://github.com/assurance-maladie-digital/design-system/commit/99f62fd2ceee9855813174279f4d38d44d556cfc))
  - **template:** Utilisation du helper `scrollBehavior` de Vue Dot ([#210](https://github.com/assurance-maladie-digital/design-system/pull/210)) ([e3bcc56](https://github.com/assurance-maladie-digital/design-system/commit/e3bcc56f19f8032792f930b7646e7db62bb81843))
  - **prompts:** Traduction des prompts en français ([#226](https://github.com/assurance-maladie-digital/design-system/pull/226)) ([f440a93](https://github.com/assurance-maladie-digital/design-system/commit/f440a93530f3d86985e378eb95c64815fa441e9b))
  - **template:** Utilisation des composants de Footer de Vue Dot ([#254](https://github.com/assurance-maladie-digital/design-system/pull/254)) ([238fcb6](https://github.com/assurance-maladie-digital/design-system/commit/238fcb6f7fd916b2f402875b32e21faa8e08714f))

- 🔧 **Configuration**
  - **lint:** Mise à jour de la configuration d'ESLint ([#317](https://github.com/assurance-maladie-digital/design-system/pull/317)) ([a538ac1](https://github.com/assurance-maladie-digital/design-system/commit/a538ac1c2e83d176522ab4f868fcbfcf3c7407d6))
  - **tests:** Mise à jour de la configuration des tests unitaires ([#318](https://github.com/assurance-maladie-digital/design-system/pull/318)) ([ba5f861](https://github.com/assurance-maladie-digital/design-system/commit/ba5f86141cceb2c3c4a09f8b19b242c131b87560))

- ⬆️ **Dépendances**
  - **jest:** Mise à jour vers la `v25` ([#182](https://github.com/assurance-maladie-digital/design-system/pull/182)) ([3a42d8e](https://github.com/assurance-maladie-digital/design-system/commit/3a42d8e7246278f8810db3d433e9c94b23fe0cf8))
  - **jest:** Mise à jour vers la `v25` et mise à jour de la configuration ([#185](https://github.com/assurance-maladie-digital/design-system/pull/185)) ([6c407fc](https://github.com/assurance-maladie-digital/design-system/commit/6c407fca6cbeb173372b5a6fb78b4fb9411f675e))
  - **template:** Mise à jour des dépendances ([#316](https://github.com/assurance-maladie-digital/design-system/pull/316)) ([c307f71](https://github.com/assurance-maladie-digital/design-system/commit/c307f718069c9a3ef2883de669e4a426d314b8d7))

### Interne

- ✨ **Nouvelles fonctionnalités**
  - **ci:** Ajout de renovate ([#112](https://github.com/assurance-maladie-digital/design-system/pull/112)) ([ca39dfa](https://github.com/assurance-maladie-digital/design-system/commit/ca39dfadb82add9e039588bd6d3d7bb76285e6d2))

- 🔥 **Suppressions**
  - **dependencies:** Suppression de la dépendance `monorepo-run` ([#196](https://github.com/assurance-maladie-digital/design-system/pull/196)) ([90aa1df](https://github.com/assurance-maladie-digital/design-system/commit/90aa1df8e97527dcbb4b3d8a88a1e1e8e7754f30))

- 🔧 **Configuration**
  - **config:** Mise à jour de la configuration de Travis CI ([#187](https://github.com/assurance-maladie-digital/design-system/pull/187)) ([7ede478](https://github.com/assurance-maladie-digital/design-system/commit/7ede478631394800aaa0ef675cbf0024ba160059))
  - **config:** Mise à jour de la taille maximale du build ([bad20e7](https://github.com/assurance-maladie-digital/design-system/commit/bad20e76aa1d6bd8c6108db8c246eeabd64215b1))

- ⬆️ **Dépendances**
  - **global:** Épinglage des dépendances ([#113](https://github.com/assurance-maladie-digital/design-system/pull/113)) ([d1cbcc6](https://github.com/assurance-maladie-digital/design-system/commit/d1cbcc617b6500299c024ad8a2f605e2fae79f5e))
  - **vue-class-component:** Mise à jour vers la `7.2.3` ([#114](https://github.com/assurance-maladie-digital/design-system/pull/114)) ([d0e0964](https://github.com/assurance-maladie-digital/design-system/commit/d0e0964b6fffc718957526238d78f9e103ae4530))
  - **global:** Mise à jour des dépendances ([#136](https://github.com/assurance-maladie-digital/design-system/pull/136)) ([8cfe357](https://github.com/assurance-maladie-digital/design-system/commit/8cfe3576e1172b2c843c07664c01c312a96ba48c))
  - **typescript:** Mise à jour vers la `v3.8.3` ([#124](https://github.com/assurance-maladie-digital/design-system/pull/124)) ([e85a707](https://github.com/assurance-maladie-digital/design-system/commit/e85a707c062ffcf32dc68c0692ccce986faa6195))
  - **global:** Mise à jour des dépendances ([0fed9a3](https://github.com/assurance-maladie-digital/design-system/commit/0fed9a3761c7f5c27932d67090df2f82e08c5748))
  - **@mdi/js:** Mise à jour de la `peerDependency` vers la `v5.1.45` ([#152](https://github.com/assurance-maladie-digital/design-system/pull/152)) ([e48721c](https://github.com/assurance-maladie-digital/design-system/commit/e48721c6b0cdf5dfa4d164a284888e54265b5d08))
  - **global:** Mise à jour des dépendances ([95e4a3c](https://github.com/assurance-maladie-digital/design-system/commit/95e4a3c6693a1bbd1f8b3ee2a0219489b5525422))
  - **jest:** Mise à jour vers la `v25.5.4` ([#168](https://github.com/assurance-maladie-digital/design-system/pull/168)) ([4b5e570](https://github.com/assurance-maladie-digital/design-system/commit/4b5e5707e8eb9e65d7d3b58ea4d4b5b307af0c45)) ([#197](https://github.com/assurance-maladie-digital/design-system/pull/197)) ([8bf3202](https://github.com/assurance-maladie-digital/design-system/commit/8bf3202bbc71b915c2c238ca973258614f57c68a))
  - **jest-mock-process:** Mise à jour vers la `v1.4.0` ([#204](https://github.com/assurance-maladie-digital/design-system/pull/204)) ([42b14d1](https://github.com/assurance-maladie-digital/design-system/commit/42b14d13a4d20d2fb7fe8d833f534c2c3e2cbc0a))
  - **vue-router:** Épinglage de la dépendance à la `v3.1.6` ([#212](https://github.com/assurance-maladie-digital/design-system/pull/212)) ([2f9fe54](https://github.com/assurance-maladie-digital/design-system/commit/2f9fe5422c0cd9a7b77e6e705f9d0ad1400101d2))
  - **vuex:** Mise à jour vers la `3.4.0` ([#216](https://github.com/assurance-maladie-digital/design-system/pull/216)) ([3537d27](https://github.com/assurance-maladie-digital/design-system/commit/3537d278d8d48035da9237b104fe19f7ff1532b9))
  - **ts-jest:** Mise à jour vers la `v25.5.1` ([#215](https://github.com/assurance-maladie-digital/design-system/pull/215)) ([98ab101](https://github.com/assurance-maladie-digital/design-system/commit/98ab10128f39cff9f5ee45d719df4f0312d93076))
  - **copy-webpack-plugin:** Mise à jour vers la `v6` ([#242](https://github.com/assurance-maladie-digital/design-system/pull/242)) ([ce00075](https://github.com/assurance-maladie-digital/design-system/commit/ce00075acb69f4291c264d944ffddebea2e97a81))
  - **@vue/test-utils:** Mise à jour vers la `v1.0.3` ([#246](https://github.com/assurance-maladie-digital/design-system/pull/246)) ([51b3cd3](https://github.com/assurance-maladie-digital/design-system/commit/51b3cd37c8865a1b17383c19bf9d7274131bd616))
  - **@types/jest:** Mise à jour vers la `v25.2.3` ([#257](https://github.com/assurance-maladie-digital/design-system/pull/257)) ([f0a3c53](https://github.com/assurance-maladie-digital/design-system/commit/f0a3c5390044a8c7550e16058739dfbf48c188a2))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.1` ([#263](https://github.com/assurance-maladie-digital/design-system/pull/263)) ([c7d5a83](https://github.com/assurance-maladie-digital/design-system/commit/c7d5a83003376a2b07cc30132cc89621be10a2e0))
  - **@mdi/js:** Mise à jour vers la `v5.3.45` ([#276](https://github.com/assurance-maladie-digital/design-system/pull/276)) ([76135cf](https://github.com/assurance-maladie-digital/design-system/commit/76135cfc25c5441d13b2bb7a8d3f12354a8450ff))
  - **lerna:** Mise à jour vers la `v3.22.0` ([#277](https://github.com/assurance-maladie-digital/design-system/pull/277)) ([4b52c12](https://github.com/assurance-maladie-digital/design-system/commit/4b52c12ebc681d5b9632fad4fdee128a53e9008c))
  - **vue-loader:** Mise à jour vers la `v1.4.4` ([#287](https://github.com/assurance-maladie-digital/design-system/pull/287)) ([096c1e6](https://github.com/assurance-maladie-digital/design-system/commit/096c1e6babdc6eaef7d159025c47bcb7ff90deea))
  - **vuetify:** Mise à jour vers la `v2.2.30` ([#291](https://github.com/assurance-maladie-digital/design-system/pull/291)) ([fe2ddc1](https://github.com/assurance-maladie-digital/design-system/commit/fe2ddc1019e27fd2be181afcc9ef4c60d8a74289))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.4.1` ([#292](https://github.com/assurance-maladie-digital/design-system/pull/292)) ([920ec3f](https://github.com/assurance-maladie-digital/design-system/commit/920ec3fcd0118c1c2f1ccac96b1af5be71f8fcea))
  - **dayjs:** Mise à jour vers la `v1.8.28` ([#297](https://github.com/assurance-maladie-digital/design-system/pull/297)) ([72029c6](https://github.com/assurance-maladie-digital/design-system/commit/72029c61ac3a219caee15d4b5c23c36e5216ed47))
  - **ts-node:** Mise à jour vers la `v8.10.2` ([#301](https://github.com/assurance-maladie-digital/design-system/pull/301)) ([1ca7bf3](https://github.com/assurance-maladie-digital/design-system/commit/1ca7bf351d8bc168356b51154269386ae4158895))
  - **sass:** Mise à jour vers la `v1.26.7` ([#302](https://github.com/assurance-maladie-digital/design-system/pull/302)) ([4199f85](https://github.com/assurance-maladie-digital/design-system/commit/4199f851d9194d5b1682151ad3a0c0b7dc7d0748))
  - **lint-staged:** Mise à jour vers la `v10.2.7` ([#303](https://github.com/assurance-maladie-digital/design-system/pull/303)) ([4c4f797](https://github.com/assurance-maladie-digital/design-system/commit/4c4f79768348b5323019786a3e6e3a2960f9c572))
  - **vue-router:** Mise à jour vers la `3.3.2` ([#304](https://github.com/assurance-maladie-digital/design-system/pull/304)) ([6f33ddd](https://github.com/assurance-maladie-digital/design-system/commit/6f33dddf007f814ac16e57329102bda4c53cd945))
  - **babel:** Mise à jour du monorepo vers la `v7.10.2` ([#311](https://github.com/assurance-maladie-digital/design-system/pull/311)) ([8c00f6f](https://github.com/assurance-maladie-digital/design-system/commit/8c00f6f9be137e82648cfe748f2f62bb5deade93))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v26.0.2` ([#312](https://github.com/assurance-maladie-digital/design-system/pull/312)) ([3cdf57b](https://github.com/assurance-maladie-digital/design-system/commit/3cdf57b8399b335652bcc3d0c7cd6b2b00c61660))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.1.0` ([#313](https://github.com/assurance-maladie-digital/design-system/pull/313)) ([9106805](https://github.com/assurance-maladie-digital/design-system/commit/9106805f104ae391f59183038f67419bcf4c98cf))
  - **@types/node:** Mise à jour vers la `v12.12.43` ([#314](https://github.com/assurance-maladie-digital/design-system/pull/314)) ([217069f](https://github.com/assurance-maladie-digital/design-system/commit/217069f36d1be7bca37ddab93d64605cbc0c6f29))

## v2.0.0-alpha.50

**Version publiée le 06/03/2020.**

Cette version comporte deux correctifs sur le `DatePicker` ainsi qu'une simplification de son utilisation.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **DatePicker:** Correction de l'alignement des icônes ([23a4724](https://github.com/assurance-maladie-digital/design-system/commit/23a472485afba66c04067676e5c87c26560e2026))
  - **DatePicker:** Modification de la date minimale en mode `birthdate` de `1950` à `1900` ([31e4950](https://github.com/assurance-maladie-digital/design-system/commit/31e49508a6496ad7989891cb20b0675affddca45))

- ♻️ **Refactoring**
  - **DatePicker:** Simplification de l'API ([#107](https://github.com/assurance-maladie-digital/design-system/pull/107)) ([f48bb5e](https://github.com/assurance-maladie-digital/design-system/commit/f48bb5e2fb628952cd161353d786b44ea1b66732))

### 📚 Guide de migration

#### Simplification de l'utilisation du DatePicker

Les propriétés passées au composant `DatePicker` sont maintenant passées directement au composant `VTextField` à l'intérieur. Il n'est plus nécessaire de passer par la prop `vuetify-options`, vous pouvez donc simplifier votre code :

```diff
<DatePicker
-	:vuetify-options="{
-		textField: {
-			clearable: true
-		}
-	}"
+	clearable
/>
```

## v2.0.0-alpha.49

**Version publiée le 24/02/2020.**

Cette version comporte un correctif sur les imports dans le template de Vue Dash.

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction des imports ([#100](https://github.com/assurance-maladie-digital/design-system/pull/100)) ([44a5d92](https://github.com/assurance-maladie-digital/design-system/commit/44a5d9264e7a13320436f0675ea31de5063bcf82))

## v2.0.0-alpha.19

**Version publiée le 09/07/2019.**

Cette version comporte des nouvelles fonctionnalités et des correctifs sur le composant `FileUpload`.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **FileUpload:** Ajout de la prop `disabled` ([8f26d1d](https://github.com/assurance-maladie-digital/design-system/commit/8f26d1dd7e51449bb5437bda7339fc920c593405))
  - **FileUpload:** Ajout de la prop `input-ref` ([f8919b8](https://github.com/assurance-maladie-digital/design-system/commit/f8919b8ac41b35935855dd5d0323d2cd98405d87))

- 🐛 **Corrections de bugs**
  - **FileUpload:** Correction de l'affichage du label ([9f09904](https://github.com/assurance-maladie-digital/design-system/commit/9f09904ac88284f4ebb3ded819ea8c69ccf3def4))
  - **FileUpload:** Correction du type du `v-model` ([7b95858](https://github.com/assurance-maladie-digital/design-system/commit/7b95858baaeebd4589abacef1ce8f9b023c7b0b3))
  - **FileUpload:** Correction de l'événement `change` émis lorsqu'il n'y a pas de fichier sélectionné ([63ae3f5](https://github.com/assurance-maladie-digital/design-system/commit/63ae3f50aabfadadf6d6afdf2de46543a2fb3e21))

- ♻️ **Refactoring**
  - **FileUpload:** Modification de l'interface de l'événement `error` ([e1248cb](https://github.com/assurance-maladie-digital/design-system/commit/e1248cb9a4088ea530c5a9546af9e0b1cf20686f))

## v2.0.0-alpha.18

**Version publiée le 08/07/2019.**

Cette version comporte une mise à jour de l'exemple du `FileUpload` dans le playground.

### Vue Dot

- ♻️ **Refactoring**
  - **playground:** Mise à jour de l'exemple du `FileUpload` ([87c26a8](https://github.com/assurance-maladie-digital/design-system/commit/87c26a8a4dcccb293e2a1194a8470f67930411e9))

## v2.0.0-alpha.17

**Version publiée le 08/07/2019.**

Cette version comporte l'ajout du composant `FileUpload` ainsi qu'un correctif graphique dans le playground.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **FileUpload:** Ajout d'un nouveau composant ([f500464](https://github.com/assurance-maladie-digital/design-system/commit/f50046433ca73e8590244adfdd358900289e6ead))

- 🐛 **Corrections de bugs**
  - **playground:** Correction de la hauteur et la page et d'une typo ([5dc67af](https://github.com/assurance-maladie-digital/design-system/commit/5dc67afe5f37ad5fe061f9b73284af4df92af3e1))

- ♻️ **Refactoring**
  - **global:** Utilisation de la syntaxe raccourcie pour `v-slot` ([91d1cf4](https://github.com/assurance-maladie-digital/design-system/commit/91d1cf4daf560556b69dad0eefeb91dfbbc548f5))
  - **FileUpload:** Calcul dynamique des extensions affichées ([7e0d1e2](https://github.com/assurance-maladie-digital/design-system/commit/7e0d1e21f918e1c8f3023973a7b5f7cbb71a3201))
  - **FileUpload:** Modification des interfaces des événements ([11682a0](https://github.com/assurance-maladie-digital/design-system/commit/11682a0e9bf199ea483429525c1dad1ea4fad73e))

### 📚 Guide de migration

#### Valeurs des événements

La valeur de l'événement `change` est maintenant un tableau de fichiers en mode `multiple`.

La valeur de l'événement `error` est maintenant un objet contenant le code de l'erreur ainsi que le fichier en erreur :

```ts
{
	file: File;
	error: ErrorCodes;
}
```

## v2.0.0-alpha.16

**Version publiée le 26/06/2019.**

Cette version comporte un correctif sur le titre de la `DataList`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **DataList:** Correction du titre affiché même vide ([72b38b4](https://github.com/assurance-maladie-digital/design-system/commit/72b38b40e462c58b825558d94e7688deda5b9e60))

## v2.0.0-alpha.15

**Version publiée le 26/06/2019.**

Cette version comporte la mise à jour de Vuetify.

### Vue Dot

- ⬆️ **Dépendances**
  - **vuetify:** Mise à jour vers la `v1.5.16` ([7a42151](https://github.com/assurance-maladie-digital/design-system/commit/7a42151b7762c9549817c81f8243c77d4438ee62))

## v2.0.0-alpha.14

**Version publiée le 26/06/2019.**

Cette version comporte une nouvelle prop ainsi qu'un correctif sur la validation du `DatePicker`.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **DatePicker:** Ajout de la prop `append-icon` ([abe1836](https://github.com/assurance-maladie-digital/design-system/commit/abe1836ae04460d936541bda87dd654b8777d967))

- 🐛 **Corrections de bugs**
  - **DatePicker:** Correction des `warning-rules` qui ne fonctionnent pas ([2554388](https://github.com/assurance-maladie-digital/design-system/commit/2554388e05c8808e4fa51fe3b423ad144b03acc1))

## v2.0.0-alpha.13

**Version publiée le 25/06/2019.**

Cette version comporte une refonte du template de Vue Dash.

### Vue Dash

- ♻️ **Refactoring**
  - **template:** Mise à jour du template ([d268888](https://github.com/assurance-maladie-digital/design-system/commit/d268888fb77178153002b1162756d1585265b74c))

### 📚 Guide de migration

#### Mise à jour des projets

Le template de Vue Dash a subi une refonte, certaines dépendances comme Sentry ont été supprimées, d'autres mises à jour. La structure du dossier `public` a également été modifiée et il est maintenant recommandé d'écrire vos composants un utilisant la [syntaxe de classes](https://class-component.vuejs.org/).

Vous pouvez retrouver le détail de ces changements et mettre à jour vos projets en suivant les modifications du commit ([d268888](https://github.com/assurance-maladie-digital/design-system/commit/d268888fb77178153002b1162756d1585265b74c)).

## v2.0.0-alpha.12

**Version publiée le 21/06/2019.**

Cette version comporte un correctif sur la publication du package `@cnamts/cli-helpers`.

### CLI Helpers

- 🐛 **Corrections de bugs**
  - **build:** Correction de fichiers non listés dans les ressources à publier ([d18f672](https://github.com/assurance-maladie-digital/design-system/commit/d18f67266eefc49cd0b973eb25a466b0c1c8efec))

## v2.0.0-alpha.11

**Version publiée le 19/06/2019.**

Cette version comporte un correctif sur la publication du package `@cnamts/cli-helpers`.

### CLI Helpers

- 🐛 **Corrections de bugs**
  - **global:** Correction de la mauvaise publication du package `@cnamts/cli-helpers` ([ccfacc0](https://github.com/assurance-maladie-digital/design-system/commit/ccfacc05a9e977bc2f5d8d1dfbb57ffac496f59d))

## v2.0.0-alpha.10

**Version publiée le 19/06/2019.**

Cette version comporte une modification interne sur les dépendances.

### Interne

- ⬆️ **Dépendances**
  - **global:** Déplacement de `ts-node` dans les dépendances globales ([5c11d8d](https://github.com/assurance-maladie-digital/design-system/commit/5c11d8dac7067a8b5d5311ee1bbfbdd0aee59a00))

## v2.0.0-alpha.9

**Version publiée le 19/06/2019.**

Cette version comporte des modifications internes sur les scripts de build et les dépendances.

### CLI Helpers

- 🔧 **Configuration**
  - **build:** Ajout d'un script de build ([d1f6bb7](https://github.com/assurance-maladie-digital/design-system/commit/d1f6bb7578a9251a79312b342de3bdd8534e33e5))

### Interne

- ⬆️ **Dépendances**
  - **global:** Déplacement de `fs-extra` dans les dépendances globales ([2ca246b](https://github.com/assurance-maladie-digital/design-system/commit/2ca246b2081ede76bf168edc3f85c28d10d446b8))

## v2.0.0-alpha.8

**Version publiée le 19/06/2019.**

Cette version comporte un correctif de dépendance pour Vue Dash et des modifications de configurations internes.

### Vue Dash

- 🐛 **Corrections de bugs**
  - **dependencies:** Correction de la dépendance `@cnamts/cli-helpers` manquante ([0b9939d](https://github.com/assurance-maladie-digital/design-system/commit/0b9939d57dc48b8b018fd2f535656a0a52de89d9))

### Interne

- 🔧 **Configuration**
  - **config:** Mise à jour de la configuration de Lerna ([f05d735](https://github.com/assurance-maladie-digital/design-system/commit/f05d735be9b01718e145d32e50fd46ea4259c04d))
  - **config:** Mise à jour dees références git ([f1da6e1](https://github.com/assurance-maladie-digital/design-system/commit/f1da6e1791bcc8c0ddbbe17ee9f9275f99140cb5))

## v2.0.0-alpha.7

**Version publiée le 14/06/2019.**

Cette version comporte l'ajout du composant `CopyBtn` ainsi que l'utilisation de la nouvelle directive `v-slot` de Vue.js.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **CopyBtn:** Ajout d'un nouveau composant ([e8c363b](https://github.com/assurance-maladie-digital/design-system/commit/e8c363b3f8cd94e91fef1933dbe346c744adcbdd))

- ♻️ **Refactoring**
  - **global:** Utilisation de la nouvelle directive `v-slot` de Vue.js ([80ab593](https://github.com/assurance-maladie-digital/design-system/commit/80ab593847f2a24c0c7452cbc5392cfb63fbcbd4))

- 🔧 **Configuration**
  - **build:** Mise à jour du script de build ([c8a7d2f](https://github.com/assurance-maladie-digital/design-system/commit/c8a7d2f5edff68fbe005e0f3f7f461c618326cb4))
  - **lerna:** Mise à jour de la version dans le fichier `lerna.json` ([d48e012](https://github.com/assurance-maladie-digital/design-system/commit/d48e012736a2ab1035d9d66baa98bdae76d9a5cf))

- ⬆️ **Dépendances**
  - **global:** Mise à jour des dépendances ([14845ba](https://github.com/assurance-maladie-digital/design-system/commit/14845badcdf1b4326255d81650dd9a350556da99))

## v2.0.0-alpha.6

**Version publiée le 06/06/2019.**

Cette version comporte un correctif sur la règle de validation `isDateValid`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **rules:** Correction de la règle de validation `isDateValid` lorsque la valeur est vide ([257b2fd](https://github.com/assurance-maladie-digital/design-system/commit/257b2fdf435488b37c9b3b06ca92c1ba18b03b4a))

## v2.0.0-alpha.5

**Version publiée le 06/06/2019.**

Cette version comporte un correctif sur le typage des règles de validation.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **rules:** Correction du typage des règles de validation ([34f6685](https://github.com/assurance-maladie-digital/design-system/commit/34f668554bc6ed9ec4663d352b28e9a6a2c9a07b))

## v2.0.0-alpha.4

**Version publiée le 05/06/2019.**

Cette version comporte la nouvelle règle de validation `minLength` ainsi qu'une mise à jour des règles existantes.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **rules:** Ajout de la règle de validation `minLength` ([647f1e5](https://github.com/assurance-maladie-digital/design-system/commit/647f1e50bd74b59fa1a04060652f64076dbb0541))

- ♻️ **Refactoring**
  - **rules:** Renommage de la règle de validation `length` en `maxLength` ([647f1e5](https://github.com/assurance-maladie-digital/design-system/commit/647f1e50bd74b59fa1a04060652f64076dbb0541))

- 🔧 **Configuration**
  - **scripts:** Renommage de la commande `demo:serve` en `playground` ([da697e3](https://github.com/assurance-maladie-digital/design-system/commit/da697e30d58715f5e984a72807e8bc9f1804aee7))

### 📚 Guide de migration

#### Import de la règle de validation `maxLength`

La règle de validation `length` a été renommée en `maxLength`, vous devez mettre à jour les imports de celle-ci :

```diff
-import length from '../../src/rules/length';
+import maxLength from '../../src/rules/maxLength';
```

## v2.0.0-alpha.3

**Version publiée le 05/06/2019.**

Cette version corrige les fichiers de build manquants dans la dernière version, elle n'apporte aucune modification.

## v2.0.0-alpha.2

**Version publiée le 05/06/2019.**

Cette version comporte un correctif sur le composant `PaginatedTable`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **PaginatedTable:** Correction de la récupération des items ([c3aa44e](https://github.com/assurance-maladie-digital/design-system/commit/c3aa44eaba503c62bc8542437b58ca70cfeef6e9))

## v2.0.0-alpha.1

**Version publiée le 05/06/2019.**

Cette version comporte un correctif sur la configuration du build.

### Interne

- 🐛 **Corrections de bugs**
  - **build:** Correction de la configuration ([9da1cf8](https://github.com/assurance-maladie-digital/design-system/commit/9da1cf88e9d2994afc5235104b466f63a0fa0d25))
