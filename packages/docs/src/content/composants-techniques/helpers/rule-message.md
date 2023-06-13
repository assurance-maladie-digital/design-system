---
title: ruleMessage
description: Le helper `ruleMessage` retourne un message d’erreur en fonction d’une clé à partir d’une liste et exécute la fonction en transmettant les arguments si le message est une fonction.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { ruleMessage } from '@cnamts/vue-dot/src/helpers/ruleMessage';

const messages = {
	default: 'Message d’erreur par défaut.',
	tooLarge: 'Le fichier dépasse la limite'
};

ruleMessage(messages, 'default'); // 'Message d’erreur par défaut.'
```

```ts
const messages = {
	default: (value: number) => `La valeur doit être inférieure à ${value} caractères.`
};

ruleMessage<number>(messages, 'default', [10]); // 'La valeur doit être inférieure à 10 caractères.'
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/rule-message"></doc-api>
</doc-tab-item>

</doc-tabs>
