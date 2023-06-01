---
title: registerDirectives
description: Le helper `registerDirectives` permet d'enregistrer des directives de façon globale.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { registerDirectives } from '@cnamts/vue-dot/src/helpers/registerDirectives';

registerDirectives({
  'my-directive': MyDirective,
  'my-other-directive': MyOtherDirective,
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/register-directives"></doc-api>
</doc-tab-item>

</doc-tabs>
