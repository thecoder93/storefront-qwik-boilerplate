import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
	defaultLocale: {
		lang: 'en-US',
		currency: 'USD',
		timeZone: 'America/Los_Angeles',
	},
	supportedLocales: [
		{ lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' },
	],
	assets: [
		'address',
		'cart',
		'category',
		'checkout',
		'common',
		'footer',
		'order',
		'product',
	],
};
