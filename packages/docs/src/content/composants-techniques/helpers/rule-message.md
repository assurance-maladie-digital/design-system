---
title: ruleMessage
description: Le helper `ruleMessage` permet de générer un message d'erreur à partir d'une règle de validation.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { ruleMessage } from '@cnamts/vue-dot/src/helpers/ruleMessage';

const message = ruleMessage('required');
// message === 'Ce champ est requis'
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/rule-message"></doc-api>
</doc-tab-item>

</doc-tabs>
