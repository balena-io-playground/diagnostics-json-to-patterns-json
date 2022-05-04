/**
 * This file is in typescript just so we can have the types available and auto-completion for fields to make life easier whilst writing these,
 * later on it could be just JSON or typescript or whatever as far as I'm concerned
 */

import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	properties: {
		sliceBoundOutOfRange: {
			description: 'known bug caused by an integer overflow while applying deltas',
			$$formula:
				"/panic: runtime error: slice bounds out of range/.test(contract['journalctl --no-pager --no-hostname -n 1000 -at balenad'])",
		},
		
		
		deviceIs32Bit: {
			allOf: [
				{
				not:{
					description: 'Device is 32 bit',
			$$formula:
				"/aarch64/.test(contract['uname -a'])",
				}},
				
				{
				not:{
					description: 'Device is 32 bit',
			$$formula:
				"/_64/.test(contract['uname -a'])",
				}},
			],
		},
		
	},
} as JsonSchema;