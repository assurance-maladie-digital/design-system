## Non publié

### Vue Dot

- ♻️ **Refactoring**
  - **template:** Utilisation de la syntaxe kebab-case pour les noms des événements ([#588](https://github.com/assurance-maladie-digital/design-system/pull/588))

### Interne

- ⬆️ **Dépendances**
  - **copy-webpack-plugin:** Mise à jour vers la `v6.1.1` ([#571](https://github.com/assurance-maladie-digital/design-system/pull/571)) ([fa518b0](https://github.com/assurance-maladie-digital/design-system/commit/fa518b06c932f96e98153e4ba6246da623d3090b))
  - **typescript:** Mise à jour vers la `v4.0.3` ([#572](https://github.com/assurance-maladie-digital/design-system/pull/572)) ([3167679](https://github.com/assurance-maladie-digital/design-system/commit/31676794ecee410642c4b8112532e4fdb3b99705))
  - **ts-jest:** Mise à jour vers la `v26.4.1` ([#573](https://github.com/assurance-maladie-digital/design-system/pull/573)) ([b06f87b](https://github.com/assurance-maladie-digital/design-system/commit/b06f87b33356ec1ec7316015cb81e5f405727ba1))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.3.0` ([#574](https://github.com/assurance-maladie-digital/design-system/pull/574)) ([6475eb3](https://github.com/assurance-maladie-digital/design-system/commit/6475eb34bb6e212e1e5fd33804f6a060ca281bcb))
  - **vue-router:** Mise à jour vers la `v3.4.5` ([#577](https://github.com/assurance-maladie-digital/design-system/pull/577)) ([9c56bd9](https://github.com/assurance-maladie-digital/design-system/commit/9c56bd96497bebe030337b2cf81d792429c2c5d9))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.6.2` ([#578](https://github.com/assurance-maladie-digital/design-system/pull/578)) ([fffe06e](https://github.com/assurance-maladie-digital/design-system/commit/fffe06e53cd63e3cee542b98bf31b186eff7f001))
  - **dayjs:** Mise à jour vers la `v1.9.1` ([#579](https://github.com/assurance-maladie-digital/design-system/pull/579)) ([6a71b88](https://github.com/assurance-maladie-digital/design-system/commit/6a71b8889423b144a3f12940cceec486548e3200))
  - **vuetify:** Mise à jour vers la `v2.3.12` ([#581](https://github.com/assurance-maladie-digital/design-system/pull/581))

### 📚 Guide de migration

#### Nom des événements

Certains noms d'événements ont été normalisés en kebab-case comme recommandé dans le [Style Guide ESLint de Vue.js](https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-3-x) :

- `DataList`
  - `click:item-action` renommé en `click-item-action`
- `DataListItem`
  - `click:action` renommé en `click-action`
- `SubHeader`
  - `click:list-item` renommé en `click-list-item`

## v2.0.0-beta.1

**Version publiée le 18/09/2020.**

Cette version comporte des corrections de bugs sur le template de Vue Dash ainsi que sur les composants `DataListItem` et `UploadWorkflow`.

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
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#569](https://github.com/assurance-maladie-digital/design-system/pull/569))

- ⬆️ **Dépendances**
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.4` ([#514](https://github.com/assurance-maladie-digital/design-system/pull/514)) ([b2aba53](https://github.com/assurance-maladie-digital/design-system/commit/b2aba5346a8dd310fb7bebc59a1d4255ec5ca104))
  - **dayjs:** Mise à jour vers la `v1.8.34` ([#516](https://github.com/assurance-maladie-digital/design-system/pull/516)) ([5dcc0b7](https://github.com/assurance-maladie-digital/design-system/commit/5dcc0b7dc5c1d89a04d92079231a6fa75442bd59))
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
  - **Playground:** Correction de la couleur du bouton pour changer de thème ([f06d77c](https://github.com/assurance-maladie-digital/design-system/commit/f06d77c84952490b639bfd910a49532877555ebd))
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
  - **README:** Ajout du package Form Builder à la section écosystème ([c71beca](https://github.com/assurance-maladie-digital/design-system/commit/c71becae7bfa990c70992e695fe0bd0e52dec170))
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

De même, la constante `vuetifyTheme` a changé d'emplacement et est maintenant appelée `lightTheme`

```diff
-import { vuetifyTheme } from '@cnamts/vue-dot/src/tokens/vuetifyTheme';
+import { lightTheme } from '@cnamts/design-tokens/src/colors';
```

#### Styles du thème

Suite à la mise à jour de Vuetify, les styles par défaut du thème ont été mis à jour dans Vue Dash, et leur taille a été réduite d'environ 60 lignes.

Vous pouvez retrouver le détail de ces changements et mettre à jour ces styles dans vos projets en suivant les modifications des Pull Requests [#460](https://github.com/assurance-maladie-digital/design-system/pull/460) et [#482](https://github.com/assurance-maladie-digital/design-system/pull/482).

## v2.0.0-alpha.53

**Version publiée le 10/07/2020.**

Cette version comporte de nouvelles fonctionnalités ainsi que des corrections de bugs concernant les composants `UploadWorkflow`, `FileList` et `FileUpload`. Elle inclut également des correctifs d'accessibilité et du refactoring en vue du passage en version bêta.

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

Ces composants ont maintenant une largeur par défaut de `100%`, vous pouvez utiliser la prop `width` pour définir une largeur:

```diff
<FileUpload
+	width="512"
/>
```

### Suppression de l'ombre sur `PageCard`

La prop `no-shadow` a été supprimée car elle ne fonctionnait pas correctement. Pour retirer l'ombre, vous pouvez utiliser la même méthode que sur une `VCard` :

```diff
<PageCard
-	no-shadow
+	:elevation="0"
/>
```

## v2.0.0-alpha.52

**Version publiée le 01/07/2020.**

Cette version comporte un changement de dépendance important, ainsi que des nouvelles fonctionnalités diverses comme les classes de largeur de champs de formulaires, mais aussi des corrections de bugs sur le `FileUpload` et du refactoring en vue du passage en version bêta.

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
  - **SubHeader:** Correction de la prop `title` utilisée à la place de `listTitle` ([#323](https://github.com/assurance-maladie-digital/design-system/pull/323)) ([0c56297](https://github.com/assurance-maladie-digital/design-system/commit/0c562971a3f3ead0562afca58efb90c52000ef4a))
  - **DataList:** Correction du mode `row` ne fonctionnant pas ([#299](https://github.com/assurance-maladie-digital/design-system/pull/299)) ([bfcda8e](https://github.com/assurance-maladie-digital/design-system/commit/bfcda8e55037f906b5e73ada65914c609f69742d))
  - **FileUpload :** Correction des styles de focus ([#364](https://github.com/assurance-maladie-digital/design-system/pull/364)) ([53733cb](https://github.com/assurance-maladie-digital/design-system/commit/53733cbb8be76d99a0409958fb6153816558a749))
  - **LocalStorageUtility:** Correction d'erreurs lorsque `localStorage` n'est pas supporté ([#375](https://github.com/assurance-maladie-digital/design-system/pull/375)) ([42ff78c](https://github.com/assurance-maladie-digital/design-system/commit/42ff78cc745dfaad068b6862e759bf4c0957c05c))
  - **FileUpload:** Correction du type de la valeur et ajout d'une fonction de validation sur celle-ci ([#380](https://github.com/assurance-maladie-digital/design-system/pull/380)) ([494b226](https://github.com/assurance-maladie-digital/design-system/commit/494b2268b9c79e3c91e90823818bc62fa4706b72))

- ♻️ **Refactoring**
  - **SubHeader:** Modification de la prop `title-text` pour qu'elle soit optionnelle ([860b849](https://github.com/assurance-maladie-digital/design-system/commit/860b849dc8c0f531049353f26e97187e6590d82e))
  - **eventable:** Renommage de la prop `showWeekEnds` en `showWeekends` ([#354](https://github.com/assurance-maladie-digital/design-system/pull/354)) ([180f506](https://github.com/assurance-maladie-digital/design-system/commit/180f506e232e444244d7b4c0cc732ff7c4cee41d))
  - **FileList:** Renommage de la prop `hide-list-divider` en `hide-last-divider` ([#378](https://github.com/assurance-maladie-digital/design-system/pull/378)) ([3483de9](https://github.com/assurance-maladie-digital/design-system/commit/3483de931040693bd97b75f14b957bd316e4f6f8))
  - **DatePicker:** Mise à jour du binding de la prop `success-messages` ([#382](https://github.com/assurance-maladie-digital/design-system/pull/382)) ([a0ea9d9](https://github.com/assurance-maladie-digital/design-system/commit/a0ea9d9805a05118b27ece6f1bdd601f131919ab))

- 🔥 **Suppressions**
  - **package:** Suppression d'artefacts de build non nécessaires ([ee012c5](https://github.com/assurance-maladie-digital/design-system/commit/ee012c5fbbdcd75960e6e363939902a6ff2c92a6))
  - **PaginatedTable:** Suppression de la prop non utilisée `serverItemsLength` ([#370](https://github.com/assurance-maladie-digital/design-system/pull/370)) ([a4244c8](https://github.com/assurance-maladie-digital/design-system/commit/a4244c8f3dca5b77af080150c8aa657c14a0efaa))

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

Si vous l'utilisez, vous devez rechercher et remplacer `v-mask` par `v-facade`. Vous pourriez configurer `vue-input-facade` pour utiliser `v-mask` (voir [Migrating existing projects](https://github.com/RonaldJerez/vue-input-facade#migrating-existing-projects)), mais nous vous conseillons de le renommer maintenant pour éviter de créer de la dette technique.

### Renommer `showWeekEnds` sur le `DatePicker`

La prop `showWeekEnds` a été renommée en `showWeekends` :
```diff
<DatePicker
-	showWeekEnds
+	showWeekends
/>
```

### Utiliser la nouvelle prop `outlined` sur le `DatePicker`

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

### Utiliser les nouvelles classes pour les champs de formulaires

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
  - **template:** Mise à jour de template ([#111](https://github.com/assurance-maladie-digital/design-system/pull/111)) ([7088316](https://github.com/assurance-maladie-digital/design-system/commit/7088316c095cd7e58f19d0ee3d2915ae6ba595a2))
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

Cette version comporte des nouvelles fonctionnalités et des corrections de bugs sur le composant `FileUpload`.

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

Cette version comporte le nouveau composant `FileUpload` ainsi qu'une correction graphique dans le playground.

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
  - **build:** Correction de fichiers non listés dans les fichiers à publier ([d18f672](https://github.com/assurance-maladie-digital/design-system/commit/d18f67266eefc49cd0b973eb25a466b0c1c8efec))

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

Cette version comporte le nouveau composant `CopyBtn` ainsi que l'utilisation de la nouvelle directive `v-slot` de Vue.js.

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
