/**
 * This file is in typescript just so we can have the types available and auto-completion for fields to make life easier whilst writing these,
 * later on it could be just JSON or typescript or whatever as far as I'm concerned
 */

import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	title: 'Network Failure During HUP',
	description: `HUP probably failed because of a networking issue. Recommendation/workaround is to try again, and possibly check the Internet connectivity if it keeps failing.`,
	properties: {
		permalinkPattern:
			'https://jel.ly.fish/pattern-host-os-update-hup-stuck-50-when-connectivity-unstable-23d662d',
		hupDeviceCantReachAPI: {
			description: "device can't reach our API for downloading the delta",
			$$formula:
				"/failed or not found, trying another source/.test(contract['find /mnt/data/*hup/*log -mtime -180 | xargs tail -n 250 -v'].stdout)",
		},
		balenaRegistryComAuthError: {
			description: 'Could not communicate with * for authentication',
			$$formula:
				"/test_balena_registry: Could not communicate with .* for authentication/.test(contract['journalctl --no-pager --no-hostname -pwarning -perr -a'].stdout)",
		},
	},
} as JsonSchema;
