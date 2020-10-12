# Contribution Guide

First off, thanks for taking the time to contribute! This is really important to help us improve our Design System.

Make sure to read the [Code of Conduct](CODE_OF_CONDUCT.md) before starting.

## Report bugs

Bugs are reported using [GitHub issues](https://guides.github.com/features/issues/).

Before creating a new issue, [check if your bug hasn't already been reported](https://github.com/assurance-maladie-digital/design-system/issues?q=is%3Aissue+is%3Aopen). If that's the case and you don't find a solution in the comments, contribute to the issue instead of creating a new one.

Also, see if the error is reproducible with the latest version.

### Submit a (good) bug report

Explain the problem and include additional details to help maintainers reproduce the problem:
- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps.** Include links to files or projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).

[Go to issues](https://github.com/assurance-maladie-digital/design-system/issues)

## Suggest changes

Enhancement suggestions are tracked as GitHub issues, [create a new issue](#submitting-a-good-bug-report).

## Language used

In Issues and Pull Request comments/descriptions, you can use French or English.
The later will be understandable by more people, but if you don't feel confortable describing your problem in English, you can use French, we'll respond as well!

However, in code, all functions, variables, comments, commits, etc (with the exception of locales) should be written in English.

## Code contribution

You can look for issues labelled with `help-wanted` if you're not sure where to start!

### Local development

Our Design System is constructed using a monorepo architecture. This means that we manage multiple packages inside a single repository.

We use [Lerna](https://lerna.js.org/) to manage our monorepo, consult [their documentation](https://github.com/lerna/lerna#readme) if you want more informations about a command for example.

#### Setup environment

To start, fork [Design System](https://github.com/assurance-maladie-digital/design-system/) into your own repo.

```bash
// Clone your forked repo
$ git clone <forked-design-system-repo>

// Go to your new design-system directory
$ cd design-system

// Checkout the branch you are working on
$ git checkout <branch name>

// Install dependencies
$ yarn
```

Now you are ready to boot up your dev environment!

##### Python dependency

If you don't have python installed, you need to install it because one of our dependencies need it to have a pseudoterminal, see [node-pty](https://github.com/microsoft/node-pty#dependencies) for more information.

#### Starting up dev environment

It's best to execute these commands from the root directory:

```bash
// To start Vue Dot playground
$ yarn dev

// To launch tests
$ yarn test

// To build all packages
$ yarn build
```

To run a command in a specific package, add the `:lerna` suffix to the command name, then use the `--scope` option:

```bash
$ yarn lint:lerna --scope @cnamts/cli-helpers
```

##### Windows

There is currently an [issue when using monorepo-run on Windows](https://github.com/Akryum/monorepo-run/issues/9), so you'll need to add the `:lerna` suffix to the command names, eg. `yarn dev:lerna`.

#### Code style

You need to respect the code style defined in the EditorConfig file and to resolve any warning or error thrown by *ESLint*.

#### Commit guidelines

Be explicit, and follow these guidelines:

- Write it in English
- Start with an emoji from [gitmoji](https://gitmoji.carloscuesta.me/) corresponding to the changes made
- Tell what package is affected by your changes
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood
- Start with a verb (eg. *Add*, *Fix*, *Update*, *Refactor*)

Example commit message: `✨ vue-dot: Add DatePicker` (pattern is `[gitmoji] [scope]: [message]`)

#### Pull requests

When creating a pull request, follow and complete the provided template.
