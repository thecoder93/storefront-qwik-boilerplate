import {
	SfIconCall,
	SfIconContactSupport,
	SfIconFacebook,
	SfIconHelp,
	SfIconInstagram,
	SfIconPinterest,
	SfIconTwitter,
	SfIconYoutube,
} from 'qwik-storefront-ui';

export const homePageCategories = [
	{
		key: 'How to buy',
		subcategories: [
			{
				key: 'Payment methods',
				link: '/',
			},
			{
				key: 'Order pickup',
				link: '/',
			},
			{
				key: 'Purchase status',
				link: '/',
			},
			{
				key: 'Track orders',
				link: '/',
			},
			{
				key: 'Returns',
				link: '/',
			},
		],
	},
	{
		key: 'Help',
		subcategories: [
			{
				key: 'Help center',
				link: '/',
			},
			{
				key: 'Security & fraud',
				link: '/',
			},
			{
				key: 'Feedback',
				link: '/',
			},
			{
				key: 'Contact',
				link: '/',
			},
		],
	},
	{
		key: 'Services',
		subcategories: [
			{
				key: 'Gift cards',
				link: '/',
			},
			{
				key: 'Store Locator',
				link: '/',
			},
			{
				key: 'Click & Collect',
				link: '/',
			},
			{
				key: 'Same Day Delivery',
				link: '/',
			},
			{
				key: 'Shipping & Delivery',
				link: '/',
			},
			{
				key: 'Coupons & Discounts',
				link: '/',
			},
			{
				key: 'Newsletter',
				link: '/',
			},
		],
	},
	{
		key: 'About',
		subcategories: [
			{
				key: 'About us',
				link: '/',
			},
			{
				key: 'Jobs',
				link: '/',
			},
			{
				key: 'Press Center',
				link: '/',
			},
			{
				key: 'Affiliate program',
				link: '/',
			},
			{
				key: 'Suppliers',
				link: '/',
			},
		],
	},
];

export const categoryCategories = [
	{ name: 'New', count: 29, href: '/category' },
	{ name: 'Women', count: 1921, href: '/category' },
	{ name: 'Men', count: 641, href: '/category' },
	{ name: 'Accessories', count: 168, href: '/category' },
	{ name: 'Sale', count: 1459, href: '/category' },
];

export const socialMedia = [
	{
		label: 'Facebook',
		link: '/',
		icon: <SfIconFacebook class='h-8 w-8' />,
	},
	{
		label: 'Twitter',
		link: '/',
		icon: <SfIconTwitter />,
	},
	{
		label: 'Instagram',
		link: '/',
		icon: <SfIconInstagram />,
	},
	{
		label: 'Pinterest',
		link: '/',
		icon: <SfIconPinterest />,
	},
	{
		label: 'Youtube',
		link: '/',
		icon: <SfIconYoutube />,
	},
];
export const contactOptions = [
	{
		key: 'Help center',
		link: '/',
		details: ['Find answers online anytime'],
		icon: <SfIconHelp size='lg' />,
	},
	{
		key: 'Live chat',
		link: '/',
		details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
		icon: <SfIconContactSupport size='lg' />,
	},
	{
		key: '1 234 567 8901',
		link: '/',
		details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
		icon: <SfIconCall size='lg' />,
	},
];
