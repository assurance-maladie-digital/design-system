---
title: calcHumanFileSize
description: La fonction `calcHumanFileSize` permet de convertir un nombre de bytes en nombre plus lisible avec une unité.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
const SPACE_CHARACTER = ' ';
const fileSizeUnits = [ 'o', 'Ko', 'Mo', 'Go'];

calcHumanFileSize(1024, fileSizeUnits, SPACE_CHARACTER); // '1 Ko'
calcHumanFileSize(1_048_576, fileSizeUnits, SPACE_CHARACTER); // '1 Mo'
calcHumanFileSize(1_073_741_824, fileSizeUnits, SPACE_CHARACTER); // '1 Go'
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="functions/calc-human-file-size"></doc-api>
</doc-tab-item>

</doc-tabs>
