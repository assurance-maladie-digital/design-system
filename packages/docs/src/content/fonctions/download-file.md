---
title: Fonction downloadFile
description: La fonction `downloadFile` permet de télécharger un fichier.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { downloadFile } from '@cnamts/vue-dot/src/functions/downloadFile';

const txtFile = 'Exemple';
const csvFile = 'Données;';

downloadFile(txtFile, 'example.txt', 'text/plain');
downloadFile(csvFile, 'exemple.csv', 'text/csv', true);
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="functions/download-file"></doc-api>
</doc-tab-item>

</doc-tabs>
