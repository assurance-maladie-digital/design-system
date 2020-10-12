---
title: FileUpload
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
Le pattern `FileUpload` est utilisé pour permettre à l'utilisateur de sélectionner ou de glisser-déposer des fichiers.
:::

## Utilisation

<DocExample
  eager
  file="composants/file-upload/examples/file-upload"
/>

## API

<DocApi
  :value="['FileUpload']"
  :api="{
    FileUpload: {
      props: [
        {
          name: 'multiple',
          type: 'boolean',
          default: 'false',
          description: 'Permet de sélectionner plusieurs fichiers.'
        },
        {
          name: 'value',
          type: 'File | File[]',
          default: '[]',
          description: 'Le ou les fichiers sélectionnés.'
        },
        {
          name: 'no-ripple',
          type: 'boolean',
          default: 'false',
          description: 'Désactive l\'ondulation.'
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Désactive le composant.'
        },
        {
          name: 'file-size-max',
          type: 'number',
          default: '10485760',
          description: 'Taille maximale d\'un fichier en octets (par défaut 10 MB).'
        },
        {
          name: 'file-size-units',
          type: 'string[]',
          default: '[\'o\', \'Ko\', \'Mo\', \'Go\', \'To\']',
          description: 'Les unités de taille utilisées pour la traduction.'
        },
        {
          name: 'allowed-extensions',
          type: 'string[]',
          default: '[\'pdf\', \'jpg\', \'jpeg\', \'png\']',
          description: 'Les extensions autorisées.'
        },
        {
          name: 'accept',
          type: 'string',
          default: 'undefined',
          description: 'L\'attribut natif `accept`. Par défaut, la valeur sera calculée à partir des extensions autorisées.'
        },
        {
          name: 'max-width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur maximale du composant.'
        },
        {
          name: 'min-width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur minimale du composant.'
        },
        {
          name: 'width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur du composant.'
        }
      ],
      slots: [
        {
          name: 'placeholder',
          description: 'Slot pour remplacer le contenu par défaut.'
        },
        {
          name: 'icon',
          description: 'Slot pour remplacer l\'icône par défaut.'
        },
        {
          name: 'action-text',
          description: 'Slot pour remplacer le texte d\'action.'
        },
        {
          name: 'or',
          description: 'Slot pour remplacer le texte `Ou`.'
        },
        {
          name: 'button-text',
          description: 'Slot pour remplacer le label du bouton d\'action.'
        },
        {
          name: 'info-text',
          description: 'Slot pour remplacer les informations sur le fichier à sélectionner.'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque la valeur change.',
          value: 'File | File[]'
        },
        {
          name: 'error',
          description: 'Événement émis lorsque lorsqu\'il y a une erreur de validation.',
          value: '{\n	file: File,\n	code: ErrorCodes\n}'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/file-upload/examples/file-upload-playground"
  hide-code-block
/>

## Exemples

### Règles de validation

Vous pouvez modifier taille maximale d'un fichier ainsi que les extensions autorisées avec les props `file-size-max` et `allowed-extensions`.

<DocInfo>

Vous pouvez spécifier la prop `accept` pour définir quels types de fichiers l'utilisateur peut sélectionner. Par défaut, celle-ci est calculée automatiquement à partir de la prop `allowed-extensions`.

</DocInfo>

<DocExample file="composants/file-upload/examples/file-upload-rules" />

### Utilisation des slots

#### Remplacer le contenu par défaut

Vous pouvez utiliser le slot `placeholder` pour remplacer le contenu par défaut.

<DocExample file="composants/file-upload/examples/file-upload-slot-placeholder" />

#### Personnalisation par éléments

Vous pouvez utiliser les slots pour remplacer les textes et l'icône par défaut.

<DocExample file="composants/file-upload/examples/file-upload-slots" />
