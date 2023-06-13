---
title: propValidator
description: Le helper `propValidator` permet de valider la valeur d’une prop `String` d’un composant parmi une lise de valeurs acceptées et de générer une erreur si elle n’est pas valide.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';
import Component from 'vue-class-component';

import { propValidator } from '@cnamts/vue-dot/src/helpers/propValidator';

enum ColorEnum {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	INFO = 'info'
}

const COLOR_ENUM_VALUES = Object.values(ColorEnum);

const Props = Vue.extend({
	props: {
		color: {
			type: String,
			default: ColorEnum.PRIMARY,
			validator: (value: string) => propValidator(
				'color',
				COLOR_ENUM_VALUES,
				value
			)
		}
	}
});

@Component
export default class AppBtn extends Vue {}
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/prop-validator"></doc-api>
</doc-tab-item>

</doc-tabs>
