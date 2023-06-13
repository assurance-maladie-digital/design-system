---
title: parseDate
description: Le helper `parseDate` permet de parser une date avec un format personnalisé à l’aide de [Day.js](https://day.js.org/).
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { parseDate } from '@cnamts/vue-dot/src/helpers/parseDate';

const date = parseDate('01/06/2023');
date.format('DD-MM-YYYY'); // 01-06-2023
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/parse-date"></doc-api>
</doc-tab-item>

</doc-tabs>
