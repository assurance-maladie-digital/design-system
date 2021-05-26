Le fichier `.editorconfig` contient la configuration de l'éditeur de code pour le projet.

Si vous utilisez [Visual Studio Code](https://code.visualstudio.com/), pensez à installer l'extension [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

<doc-alert type="warning">
Il n'est pas recommandé d'éditer ce fichier.
</doc-alert>

## Configuration par défaut

Par défaut, le fichier contient la configuration suivante :

### Tous les langages

```bash
[*]
indent_style = tab
indent_size = 4
end_of_line = lf
charset = utf-8
insert_final_newline = true
trim_trailing_whitespace = true
```

Ce bloc permet de définir les paramètres de l'éditeur pour tous les langages :

- indentation avec tabulations
- taille de 4 espaces pour les tabulations (possibilité de changer cette valeur dans l'éditeur directement)
- nouvelles lignes de style Unix avec une nouvelle ligne terminant chaque fichier
- suppression automatique des espaces blancs en fin de ligne

### Markdown

```bash
# Overwrite for Markdown
[*.md]
indent_style = space
indent_size = 2
trim_trailing_whitespace = false
```

Ce bloc permet de redéfinir les paramètres de l'éditeur pour le langage Markdown :

- indentation avec 2 espaces
- pas de suppression automatique des espaces blancs en fin de ligne

## Plus d'informations

Vous pouvez retrouver plus d'informations sur la documentation d'[EditorConfig](https://editorconfig.org/).
