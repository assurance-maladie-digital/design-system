---
title: Fonction calcHumanFileSize
description: La fonction `calcHumanFileSize` permet de convertir un nombre de byte en unité lisible.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { calcHumanFileSize } from '@cnamts/vue-dot/src/functions/calcHumanFileSize';

fileSizeUnits = [ 'o', 'ko', 'mo', 'go'];
separator = ' ';

calcHumanFileSize(1024, fileSizeUnits, seprator); // '1 ko' 
calcHumanFileSize(1048576, fileSizeUnits, seprator); // '1 mo' 
calcHumanFileSize(1073741824, fileSizeUnits, seprator); // '1 go' 
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="functions/calc-human-file-size"></doc-api>
</doc-tab-item>

</doc-tabs>
