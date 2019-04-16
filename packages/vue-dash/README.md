# Vue Dash

Vue Dash is a tool made to create and manage CNAM front-end projects.

![preview](https://user-images.githubusercontent.com/10298932/56200180-95dc6a80-603e-11e9-8f76-16572dd8abc2.png)

Inspired by and built on top of [Vue CLI](https://cli.vuejs.org/guide/).

## Installation

To install Vue Dash, you need to use yarn or npm:

```sh
yarn global add @cnamts/vue-dash
# OR
npm install -g @cnamts/vue-dash
```

This will make the Vue Dash command available globally.<br>
You can verify that it's properly installed by simply running `vue-dash`, it should show a help message listing all available commands.

## Basics

### Instant Prototyping

You can create a new project in seconds using the `create` command:

```sh
vue-dash create hello-world
```

You'll need to answer some questions, then it will install everything necessary, and that's it!

You can even start automatically the development server by adding the auto-start option:

```sh
vue-dash create hello-world --auto-start
```
