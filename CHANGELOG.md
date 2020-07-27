## Non publié

### Interne

- 🔒 **Sécurité**
  - **lodash:** Mise à jour vers de la `v4.17.15` vers la `v4.17.19` ([#444](https://github.com/assurance-maladie-digital/design-system/pull/444)) ([3584d6f](https://github.com/assurance-maladie-digital/design-system/commit/3584d6fa8caf80fca4aba4a883be6be191342368))

- ♻️ **Refactoring**
  - **NotificationBar:** Refonte du composant suite à la mise à jour de Vuetify ([#346](https://github.com/assurance-maladie-digital/design-system/pull/346)) ([9ec5ca3](https://github.com/assurance-maladie-digital/design-system/commit/9ec5ca39d3ac4f15a5fdfac96f5a6845f46c2f5c))
  - **DatePicker:** Utilisation de la syntaxe standard du helper `mixins` ([#449](https://github.com/assurance-maladie-digital/design-system/pull/449)) ([253f51e](https://github.com/assurance-maladie-digital/design-system/commit/253f51e5930e2b07459d96079e0595aa7b4813a0))

- 🔥 **Suppressions**
  - **dépendances:** Suppression de la dépendance non-utilisée `webpack-node-externals` ([#437](https://github.com/assurance-maladie-digital/design-system/pull/437)) ([035a0dd](https://github.com/assurance-maladie-digital/design-system/commit/035a0ddf3a64467797de579133f880a3d4636990))

- ⬆️ **Dépendances**
  - **vuetify:** Mise à jour vers la `v2.3` ([#374](https://github.com/assurance-maladie-digital/design-system/pull/374)) ([c335b4a](https://github.com/assurance-maladie-digital/design-system/commit/c335b4a5fa9b6777c30bf4d6e90fcaaa28b92296))
  - **vuetify-loader:** Mise à jour vers la `v1.6.0` ([#434](https://github.com/assurance-maladie-digital/design-system/pull/434)) ([4831a70](https://github.com/assurance-maladie-digital/design-system/commit/4831a70accf2cc604d06d3d74123ce6b4a9dcb4c))
  - **ts-jest:** Mise à jour vers la `v26.1.3` ([#438](https://github.com/assurance-maladie-digital/design-system/pull/438)) ([2f29033](https://github.com/assurance-maladie-digital/design-system/commit/2f29033a75026cb987cc1b3f5cf62f8d1649c667))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.7.0` ([#440](https://github.com/assurance-maladie-digital/design-system/pull/440)) ([0d81ee3](https://github.com/assurance-maladie-digital/design-system/commit/0d81ee3e3e3095bc4b1c886de40c57c881d86744))
  - **@babel/core:** Mise à jour vers la `v7.10.5` ([#441](https://github.com/assurance-maladie-digital/design-system/pull/441)) ([067d788](https://github.com/assurance-maladie-digital/design-system/commit/067d788e3f86882231104fadb1cd2fa203b2b935))
  - **typescript:** Mise à jour vers la `v3.9.7` ([#443](https://github.com/assurance-maladie-digital/design-system/pull/443)) ([cdf483b](https://github.com/assurance-maladie-digital/design-system/commit/cdf483bc0b9fc8efa988efa956ed814940a57d2d))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30` ([#446](https://github.com/assurance-maladie-digital/design-system/pull/446)) ([1f6c61f](https://github.com/assurance-maladie-digital/design-system/commit/1f6c61f8ed8d5f80d63c126289d8784125fb6453))
  - **dayjs:** Mise à jour vers la `v1.8.30` ([#452](https://github.com/assurance-maladie-digital/design-system/pull/452)) ([34874ea](https://github.com/assurance-maladie-digital/design-system/commit/34874ea7d0379cf92d5ca799235fdf329af583b7))
  - **vue-class-component:** Mise à jour vers la `v7.2.5` ([#453](https://github.com/assurance-maladie-digital/design-system/pull/453)) ([334160f](https://github.com/assurance-maladie-digital/design-system/commit/334160f749f00f055593a774d8df1f615dcccaa7))
  - **vuetify:** Mise à jour vers la `v2.3.6` ([#451](https://github.com/assurance-maladie-digital/design-system/pull/451)) ([4f25c80](https://github.com/assurance-maladie-digital/design-system/commit/4f25c809fa056b9b825212f473e8adba192ecee7))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.0.7` ([#448](https://github.com/assurance-maladie-digital/design-system/pull/448)) ([6e7ec58](https://github.com/assurance-maladie-digital/design-system/commit/6e7ec58c59028bd850f8546ce57612ee8ca9142e))
  - **@types/jest:** Mise à jour vers la `v26.0.7` ([#454](https://github.com/assurance-maladie-digital/design-system/pull/454)) ([cc99040](https://github.com/assurance-maladie-digital/design-system/commit/cc99040243a055e109f774341875b7e857f98f8b))
  - **@types/node:** Mise à jour vers la `v12.12.52` ([#455](https://github.com/assurance-maladie-digital/design-system/pull/455)) ([cb4711a](https://github.com/assurance-maladie-digital/design-system/commit/cb4711abac1f78c62c1a37b341ff183d23e026f5))

## v2.0.0-alpha.53

Cette version comporte de nouvelles fonctionnalités ainsi que des corrections de bugs concernant les composants `UploadWorkflow`, `FileList` et `FileUpload`. Elle inclut également des correctifs d'accessibilité et du refactoring en vue du passage en version bêta.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **FileList/UploadWorkflow:** Ajout d'un bouton d'upload sur chaque ligne ([#408](https://github.com/assurance-maladie-digital/design-system/pull/408)) ([6ef29aa](https://github.com/assurance-maladie-digital/design-system/commit/6ef29aabfce3e6c4b5c5b1f04fdab6313a83fa65))
  - **FileList:** Ajout des fichiers optionnels ([#420](https://github.com/assurance-maladie-digital/design-system/pull/420)) ([7de86a4](https://github.com/assurance-maladie-digital/design-system/commit/7de86a4e3c8289136d30a4542adc83f4f4266dfd))
  - **mixins:** Ajout de la mixin `widthable` ([#424](https://github.com/assurance-maladie-digital/design-system/pull/424)) ([8070012](https://github.com/assurance-maladie-digital/design-system/commit/807001276b75aad7700b63422b4bea49fb6e689b))
  - **helpers:** Ajout du helper `convertToUnit` ([#424](https://github.com/assurance-maladie-digital/design-system/pull/424)) ([8070012](https://github.com/assurance-maladie-digital/design-system/commit/807001276b75aad7700b63422b4bea49fb6e689b))

- 🐛 **Correction de bugs**
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

Cette version comporte un changement de dépendance important, ainsi que des nouvelles fonctionnalités diverses comme les classes de largeur de champs de formulaires, mais aussi des corrections de bugs sur le `FileUpload` et du refactoring en vue du passage en version bêta.

### Vue Dot

- 💥 **Changements majeurs**
  - **dépendances:** Remplacement de `vue-the-mask` par `vue-input-facade` ([#363](https://github.com/assurance-maladie-digital/design-system/pull/363)) ([c17ad2b](https://github.com/assurance-maladie-digital/design-system/commit/c17ad2bcb951afb7f5adc37bab8b6c0b440e6016))

- ✨ **Nouvelles fonctionnalités**
  - **SubHeader:** Ajout d'un défilement horizontal lorsque le contenu déborde ([a940ce7](https://github.com/assurance-maladie-digital/design-system/commit/a940ce7c3217fabf160364a40c009fbe7d3e2729))
  - **DataList:** Ajout de la prop `render-html-value` ([#348](https://github.com/assurance-maladie-digital/design-system/pull/348)) ([7b0cc23](https://github.com/assurance-maladie-digital/design-system/commit/7b0cc2330c5d82e1f27598c3b79aeba8fa649bd9))
  - **directives:** Ajout du helper `registerDirectives` ([#351](https://github.com/assurance-maladie-digital/design-system/pull/351)) ([dc9577f](https://github.com/assurance-maladie-digital/design-system/commit/dc9577fdd020f284d44d8f245f6a82f8fff7a871))
  - **DatePicker:** Ajout de la prop `outlined` ([#355](https://github.com/assurance-maladie-digital/design-system/pull/355)) ([714ee7a](https://github.com/assurance-maladie-digital/design-system/commit/714ee7ad8189d55be502611bc2d3f99d92a6511f))
  - **helpers:** Ajout de la fonction `deepRemoveKeys` ([#360](https://github.com/assurance-maladie-digital/design-system/pull/360)) ([d1e5cb0](https://github.com/assurance-maladie-digital/design-system/commit/d1e5cb0e780e0a8c1e0b1e7bb4623eb1d55139ba))
  - **tokens:** Ajout des tokens et classes `input-width` ([#381](https://github.com/assurance-maladie-digital/design-system/pull/381)) ([8e7fce3](https://github.com/assurance-maladie-digital/design-system/commit/8e7fce338692ec122085f72b9c3d73c66db9d84b)) ([#397](https://github.com/assurance-maladie-digital/design-system/pull/397)) ([d4d75ce](https://github.com/assurance-maladie-digital/design-system/commit/d4d75cec94e4cab2285e6ca6faee5a58b16bb8a9))

- 🐛 **Correction de bugs**
  - **SubHeader:** Correction de la prop `title` utilisée à la place de `listTitle` ([#323](https://github.com/assurance-maladie-digital/design-system/pull/323)) ([0c56297](https://github.com/assurance-maladie-digital/design-system/commit/0c562971a3f3ead0562afca58efb90c52000ef4a))
  - **DataList:** Correction du mode `row` ne fonctionnant pas ([#299](https://github.com/assurance-maladie-digital/design-system/pull/299)) ([bfcda8e](https://github.com/assurance-maladie-digital/design-system/commit/bfcda8e55037f906b5e73ada65914c609f69742d))
  - **FileUpload :** Correction des styles de focus ([#364](https://github.com/assurance-maladie-digital/design-system/pull/364)) ([53733cb](https://github.com/assurance-maladie-digital/design-system/commit/53733cbb8be76d99a0409958fb6153816558a749))
  - **LocalStorageUtility:** Correction d'erreurs lorsque `localStorage` n'est pas supporté ([#375](https://github.com/assurance-maladie-digital/design-system/pull/375)) ([42ff78c](https://github.com/assurance-maladie-digital/design-system/commit/42ff78cc745dfaad068b6862e759bf4c0957c05c))
  - **FileUpload:** Correction du type de la valeur et ajout d'une fonction de validation sur celle-ci ([#380](https://github.com/assurance-maladie-digital/design-system/pull/380)) ([494b226](https://github.com/assurance-maladie-digital/design-system/commit/494b2268b9c79e3c91e90823818bc62fa4706b72))

- ♻️ **Refactoring**
  - **SubHeader:** Modification de la prop `title-text` pour qu'elle soit optionnelle ([860b849](https://github.com/assurance-maladie-digital/design-system/commit/860b849dc8c0f531049353f26e97187e6590d82e))
  - **eventable:** Renommage de la prop `showWeekEnds` en `showWeekends` ([#354](https://github.com/assurance-maladie-digital/design-system/pull/354)) ([180f506](https://github.com/assurance-maladie-digital/design-system/commit/180f506e232e444244d7b4c0cc732ff7c4cee41d))
  - **package:** Suppression d'artefacts de build non nécessaires ([ee012c5](https://github.com/assurance-maladie-digital/design-system/commit/ee012c5fbbdcd75960e6e363939902a6ff2c92a6))
  - **PaginatedTable:** Suppression de la prop non utilisée `serverItemsLength` ([#370](https://github.com/assurance-maladie-digital/design-system/pull/370)) ([a4244c8](https://github.com/assurance-maladie-digital/design-system/commit/a4244c8f3dca5b77af080150c8aa657c14a0efaa))
  - **FileList:** Renommage de la prop `hide-list-divider` en `hide-last-divider` ([#378](https://github.com/assurance-maladie-digital/design-system/pull/378)) ([3483de9](https://github.com/assurance-maladie-digital/design-system/commit/3483de931040693bd97b75f14b957bd316e4f6f8))
  - **DatePicker:** Mise à jour du binding de la prop `success-messages` ([#382](https://github.com/assurance-maladie-digital/design-system/pull/382)) ([a0ea9d9](https://github.com/assurance-maladie-digital/design-system/commit/a0ea9d9805a05118b27ece6f1bdd601f131919ab))

- ✅ **Tests**
  - **SubHeader:** Ajout d'un test sur l'état de chargement ([#325](https://github.com/assurance-maladie-digital/design-system/pull/325)) ([c8bd939](https://github.com/assurance-maladie-digital/design-system/commit/c8bd93934b85f8c3e68f2b5c7d2096a955a0b2f4))
  - **DataList:** Suppression d'un ancien test ([29e1e96](https://github.com/assurance-maladie-digital/design-system/commit/29e1e961963562b31090ea1163b386a353a36b12))

### Vue Dash

- ♻️ **Refactor**
  - **template:** Suppression des imports non utilisés dans le template ([e89b0c0](https://github.com/assurance-maladie-digital/design-system/commit/e89b0c099077dbae493886a48d4d830b5516419c))

### Interne

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
  - **vue-cli:** Mise à jour du monorepo vers la `v4.4.6` et de **vue-router** vers la `v3.5.1` ([#395](https://github.com/assurance-maladie-digital/design-system/pull/395)) ([4e6ad36](https://github.com/assurance-maladie-digital/design-system/commit/4e6ad3645815e28153e5e441a3b7d5e8e646ad78))
  - **@types/jest:** Mise à jour vers la `v26.0.3` ([#396](https://github.com/assurance-maladie-digital/design-system/pull/396)) ([c8a72ed](https://github.com/assurance-maladie-digital/design-system/commit/c8a72ed16af5f14611aaf72376f1e137a63c81b1))

### 📚 Guide de migration

#### Remplacer `vue-the-mask`

Au moment de la sortie de cette version, [Vue the mask](https://github.com/vuejs-tips/vue-the-mask) n'a pas été mis à jour depuis deux ans (voir [#137](https://github.com/vuejs-tips/vue-the-mask/issues/137)), nous avons donc décidé de le remplacer par [Vue input facade](https://github.com/RonaldJerez/vue-input-facade), un fork mis à jour plus régulièrement.

Pour mettre à jour, vous devez supprimer `vue-the-mask` du fichier `package.json`, en utilisant la commande `yarn remove vue-the-mask`, et installer `vue-input-facade` en utilisant `yarn add vue-input-facade`.

Après avoir installé le nouveau package, vous devez mettre à jour l'utilisation du plugin :

```diff
// src/plugins/vue-dot.ts
-// Register v-mask directive
-import VueTheMask from 'vue-the-mask';
-Vue.use(VueTheMask);
+// Register v-facade directive
+import InputFacade from 'vue-input-facade';
+Vue.use(InputFacade);
```
Et aussi mettre à jour la déclaration du module :
```diff
// src/modules.d.ts
-declare module 'vue-the-mask';
+declare module 'vue-input-facade';
```

Il est également nécessaire d'ajouter `vue-input-facade` à la liste des dépendances qui doivent être transpilées pour assurer la comptabilité des navigateurs comme IE11 :
```diff
// Transpile ES6 inside dependencies
transpileDependencies: [
	/node_modules[/\\\\]vuetify[/\\\\]/,
	'vuex-persist',
+	'vue-input-facade'
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
