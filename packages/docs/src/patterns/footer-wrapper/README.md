::: slot title
# FooterWrapper
:::

::: slot description
Le pattern `FooterWrapper` est utilisé avec le composant `FooterBtn` pour afficher un pied de page.
:::

## Utilisation

<DocExample
  eager
  file="patterns/footer-wrapper/examples/footer-wrapper"
/>

## API

<DocApi
  :value="['FooterWrapper', 'FooterBtn']"
  :api="{
    FooterWrapper: {
      slots: [
        {
          name: 'default',
          description: 'Slot pour ajouter du contenu.'
        }
      ]
    },
    FooterBtn: {
      props: [
        {
          name: 'inert',
          type: 'boolean',
          value: 'false',
          description: 'Rend le bouton inactif.'
        }
      ],
      slots: [
        {
          name: 'default',
          description: 'Slot pour le texte.'
        }
      ]
    }
  }"
/>

## Exemples

### Bouton inert

Vous pouvez rendre un bouton inactif grâce à la propriété `inert`. Celui-ci sera alors désactivé et rendu en tant que `div`.

<DocExample
  eager
  file="patterns/footer-wrapper/examples/footer-wrapper-inert"
/>

### Utilisation du slot

Vous pouvez utiliser le slot par défaut pour ajouter du contenu.

<DocExample
  eager
  file="patterns/footer-wrapper/examples/footer-wrapper-slot"
/>
