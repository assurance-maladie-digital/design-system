::: slot title
# FooterWrapper
:::

::: slot description
L'élément `FooterWrapper` est utilisé pour afficher un bas de page générique avec du contenu personnalisé dans le slot `default`.
Un bouton `FooterBtn` est prévu spécifiquement. 
:::

## Utilisation

<DocExample
  eager
  file="patterns/footer-wrapper/examples/footer-wrapper"
/>

## API

<DocApi
  :value="['FooterWrapper']"
  :api="{
    FooterWrapper: {
      slots: [
        {
          name: 'default',
          description: 'Slot pour ajouter du contenu et notament des boutons spécifique `FooterBtn`.'
        }
      ]
    }
  }"
/>

## Exemple

### Bouton inert

Il est possible de désactiver chaques boutons `FooterBtn` avec leur prop `inert`

<DocExample
  eager
  file="patterns/footer-wrapper/examples/footer-wrapper-inert"
/>

### Utilisation du slot

Vous pouvez utiliser le slot `default` pour personnaliser le contenu.

<DocExample
  eager
  file="patterns/footer-wrapper/examples/footer-wrapper-slot"
/>
