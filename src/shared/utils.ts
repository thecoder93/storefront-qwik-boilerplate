import {
	DEFAULT_METADATA_DESCRIPTION,
	DEFAULT_METADATA_IMAGE,
	DEFAULT_METADATA_TITLE,
	DEFAULT_METADATA_URL,
} from './constants';

export const sleep = (timeout: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
};

export const generateDocumentHead = (
	url = DEFAULT_METADATA_URL,
	title = DEFAULT_METADATA_TITLE,
	description = DEFAULT_METADATA_DESCRIPTION,
	image = DEFAULT_METADATA_IMAGE
) => {
	const OG_METATAGS = [
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: url },
		{ property: 'og:title', content: title },
		{
			property: 'og:description',
			content: description,
		},
		{
			property: 'og:image',
			content: image ? image + '?w=800&h=800&format=webp' : undefined,
		},
	];
	const TWITTER_METATAGS = [
		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:url', content: url },
		{ property: 'twitter:title', content: title },
		{
			property: 'twitter:description',
			content: description,
		},
		{
			property: 'twitter:image',
			content: image ? image + '?w=800&h=800&format=webp' : undefined,
		},
	];
	return { title, meta: [...OG_METATAGS, ...TWITTER_METATAGS] };
};

export const formatPrice = (price: number, digits: number) =>
	'$' + price.toFixed(digits);
