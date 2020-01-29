# CLI Helpers

> Helper functions to build CLI tools.

## Installation

This package is built with TypeScript and is meant to be used in TypeScript projects, but a JavaScript version is built so you can use it in node.js environment.

To install it, you need to use yarn or npm:

```sh
yarn add @cnamts/cli-helpers
# OR
npm install @cnamts/cli-helpers
```

## Usage

You can import the different helpers from the main file:

```ts
import { log, done, getPath } from '@cnamts/cli-helpers';
```

Or you can import them using their files, like so:

```ts
import { log, done } from '@cnamts/cli-helpers/src/logger';
import { getPath } from '@cnamts/cli-helpers/src/getPath';
```

## Helpers

### colors

Get an object with standardized colors.

```ts
import { colors } from '@cnamts/cli-helpers';

console.log(colors.primary); // Use 'primary' color
```

### getPath

Get path relative to current working directory.

```ts
import { getPath } from '@cnamts/cli-helpers';

const myPath = getPath('./file'); // Equivalent to path.join(process.cwd(), './file)
```

### traceLine

Trace a straight line across the terminal using box-drawing character `─`, by default it uses the `primary` color from [colors](./colors.ts), but you can change it.

```ts
import { traceLine } from '@cnamts/cli-helpers';

traceLine(); // Example: ───────────────────────

traceLine('#eee') // With custom color
```

### logger

Log informations to the user such as errors, warnings, events and others.

```ts
import { log, cmd, info, done, warn, error, verbose, event } from '@cnamts/cli-helpers';

log('Default log');
cmd('yarn lint');
info('Info log');
done('Success log');
warn('Warning log');
error('Error log');
verbose('Verbose log');
event('Event log');
```

![Result of different log methods in terminal](https://user-images.githubusercontent.com/10298932/69444239-3ec71280-0d50-11ea-83b4-46b1ecc69eaf.png)

### renderHeader

Display header with Georgia11 font and optionally author and/or version.

```ts
import { renderHeader } from '@cnamts/cli-helpers';

renderHeader('Package', 'Someone', '1.0.0');
```

![Result of renderHeader function in terminal](https://user-images.githubusercontent.com/10298932/69446366-851e7080-0d54-11ea-8c33-beb7e7e30c36.png)

## Contributing

Feel free to open an issue or a pull request to improve this package!
Just make sure to respect the code style by running `yarn lint` and to update the tests and check the coverage with `yarn test`.
