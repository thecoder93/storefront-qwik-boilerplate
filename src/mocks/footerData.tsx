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
		key: 'howToBuy',
		subcategories: [
			{
				key: 'paymentMethods',
				link: '/',
			},
			{
				key: 'orderPickup',
				link: '/',
			},
			{
				key: 'purchaseStatus',
				link: '/',
			},
			{
				key: 'trackOrders',
				link: '/',
			},
			{
				key: 'returns',
				link: '/',
			},
		],
	},
	{
		key: 'help',
		subcategories: [
			{
				key: 'helpCenter',
				link: '/',
			},
			{
				key: 'securityFraud',
				link: '/',
			},
			{
				key: 'feedback',
				link: '/',
			},
			{
				key: 'contact',
				link: '/',
			},
		],
	},
	{
		key: 'services',
		subcategories: [
			{
				key: 'giftCards',
				link: '/',
			},
			{
				key: 'storeLocator',
				link: '/',
			},
			{
				key: 'clickCollect',
				link: '/',
			},
			{
				key: 'sameDayDelivery',
				link: '/',
			},
			{
				key: 'shippingDelivery',
				link: '/',
			},
			{
				key: 'couponsDiscounts',
				link: '/',
			},
			{
				key: 'newsletter',
				link: '/',
			},
		],
	},
	{
		key: 'about',
		subcategories: [
			{
				key: 'aboutUs',
				link: '/',
			},
			{
				key: 'jobs',
				link: '/',
			},
			{
				key: 'pressCenter',
				link: '/',
			},
			{
				key: 'affiliateProgram',
				link: '/',
			},
			{
				key: 'suppliers',
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
		key: 'helpCenter',
		link: '/',
		details: ['description'],
		icon: <SfIconHelp size='lg' />,
	},
	{
		key: 'liveChat',
		link: '/',
		details: ['openingHours-1', 'openingHours-2'],
		icon: <SfIconContactSupport size='lg' />,
	},
	{
		key: 'phone',
		link: '/',
		details: ['openingHours-1', 'openingHours-2'],
		icon: <SfIconCall size='lg' />,
	},
];
