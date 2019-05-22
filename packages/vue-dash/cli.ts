#!/usr/bin/env node
'use strict';

import * as yargs from 'yargs';

// Register the CLI
yargs
	.commandDir('commands')
	.alias('v', 'version')
	.alias('h', 'help')
	.help()
	.demandCommand()
	.argv;
