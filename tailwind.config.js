const { tailwindConfig } = require('@storefront-ui/tailwind-config');
const sfTypography = require('@storefront-ui/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [tailwindConfig],
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/routes/**/*.{js,ts,jsx,tsx}',
		'./node_modules/qwik-storefront-ui/**/*.{cjs,mjs}',
	],
	theme: {
		extend: {
			gridTemplateAreas: {
				'product-page': ['left-top right', 'left-bottom right'],
			},
			gridTemplateColumns: {
				'product-page': 'minmax(56%, 500px) auto',
			},
			gridTemplateRows: {
				'category-sidebar': 'min-content auto min-content',
			},
			screens: {
				'4xl': '1920px',
				'3xl': '1536px',
				'2xl': '1366px',
				xl: '1280px',
				lg: '1024px',
				md: '768px',
				sm: '640px',
				xs: '376px',
				'2xs': '360px',
			},
			fontFamily: {
				body: 'var(--font-body)',
				headings: 'var(--font-headings)',
			},
		},
	},
	plugins: [sfTypography, require('@savvywombat/tailwindcss-grid-areas')],
};
