#!/usr/bin/env node
'use strict';

import * as yargs from 'yargs';

// Register the CLI
// tslint:disable-next-line: no-unused-expression
yargs
	.commandDir('commands')
	.alias('v', 'version')
	.alias('h', 'help')
	.help()
	.demandCommand()
	.argv;
