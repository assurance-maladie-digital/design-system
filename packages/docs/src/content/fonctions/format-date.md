---
title: Fonction formatDate
description: La fonction `formatDate` permet d’appliquer un [format Day.js](https://day.js.org/docs/en/display/format) à une variable de type Dayjs.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { formatDate } from '@cnamts/vue-dot/src/functions/formatDate';

date = dayjs('2020-05-01');

formatDate(date); // 01/05/2020

formatDate(date, 'D/M/YYYY'); // 2/5/2020
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="functions/format-date"></doc-api>
</doc-tab-item>

</doc-tabs>
