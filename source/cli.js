#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
		Usage
		  $ my-ai-cli

		Options
			--name  AI助手的名称 (默认: AI助手)

		Examples
		  $ my-ai-cli
		  $ my-ai-cli --name=小智
	`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
				default: 'AI助手'
			}
		}
	},
);

render(<App name={cli.flags.name} />);
