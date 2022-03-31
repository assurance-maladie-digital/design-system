---
title: Fonction formatDate
description: Description de la fonction formatDate.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

La fonction formatDate permet d’appliquer un [format Dayjs](https://day.js.org/docs/en/display/format) à une variable de type Dayjs.

Pour l’utiliser, il faut l’importer :

```ts
import { formatDate } from '@cnamts/vue-dot/src/functions/formatDate';

```ts
dateFormatted = formatDate(date, ?format);
```

## Exemple

```typescript
date = dayjs('2020-05-01');

// 01/05/2020
formatDate(date);

// 2/5/2020
formatDate(date, 'D/M/YYYY');

```

</doc-tab-item>

<doc-tab-item label="API">

<doc-api name="functions/format-date"></doc-api>

</doc-tab-item>

</doc-tabs>
