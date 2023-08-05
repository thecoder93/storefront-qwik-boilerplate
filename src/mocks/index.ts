import type { Product } from '~/types/product';

export * from './footerData';
export * from './sortingOptions';

export const priceFilters = ['100', '200'];

export const heroMock = {
	description:
		'This fashionable sneaker collection features various colors, comfort and style.',
	image: '/images/hero.webp',
	primaryButtonLink: '/product/athletic-sneakers',
	primaryButtonText: 'Order now',
	secondaryButtonLink: '/category',
	secondaryButtonText: 'Show more',
	subtitle: 'Special offer',
	title: 'Sneaker hot drops',
};

export const items: {
	id: string;
	name: string;
	slug: string;
	subcategories: [];
	productCount: number;
	image: string;
}[] = [
	{
		id: '1',
		name: 'New',
		slug: 'category',
		subcategories: [],
		productCount: 120,
		image: '/images/new-card.webp',
	},
	{
		id: '2',
		name: 'Men',
		slug: 'category',
		subcategories: [],
		productCount: 428,
		image: '/images/men-card.webp',
	},
	{
		id: '3',
		name: 'Women',
		slug: 'category',
		subcategories: [],
		productCount: 513,
		image: '/images/women-card.webp',
	},
];

export const display = [
	{
		image: '/images/display-1.webp',
		title: 'Fresh and Bold',
		subtitle: 'New collection',
		description: 'Add a pop up color to your outfit',
		buttonText: 'Discover now',
		reverse: true,
		backgroundColor: 'bg-secondary-200',
		buttonLink: '/category',
		titleClass: 'md:typography-headline-2',
		subtitleClass: 'md:typography-headline-6',
	},
	{
		image: '/images/display-2.webp',
		title: 'Sunny Days Ahead',
		subtitle: 'Be inspired',
		description: 'Step out in style with our sunglasses collection',
		buttonText: 'Discover now',
		reverse: true,
		backgroundColor: 'bg-negative-200',
		buttonLink: '/category',
	},
	{
		image: '/images/display-3.webp',
		title: 'Gear up and get ready',
		subtitle: 'Be active',
		description: 'Explore the great outdoors with our backpacks',
		buttonText: 'Discover now',
		reverse: true,
		backgroundColor: 'bg-warning-200',
		buttonLink: '/category',
	},
];

export const products: Product[] = [
	{
		id: 0,
		slug: 'athletic-sneakers',
		name: 'Athletic sneakers',
		description:
			'Lightweight • Non slip • Flexible outsole • Easy to wear on and off',
		sku: 'product-0',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 100.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 100.95, precisionAmount: 2 },
		},
		image: { alt: 'Athletic sneakers', url: '/images/product.webp' },
	},
	{
		id: 1,
		name: 'Laptop',
		slug: 'laptop',
		description:
			'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
		sku: 'product-1',
		rating: { average: 5, count: 610 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 1558.8, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 1358.8, precisionAmount: 2 },
		},
		image: {
			alt: 'Laptop',
			url: 'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
		},
	},
	{
		id: 2,
		name: 'Tablet',
		slug: 'tablet',
		description:
			'If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a "computer." It would be Tablet.',
		sku: 'product-2',
		rating: { average: 4.1, count: 111 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 485.99, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 485.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Tablet',
			url: 'https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg',
		},
	},
	{
		id: 3,
		name: 'Wireless Optical Mouse',
		slug: 'cordless-mouse',
		description:
			'The Logitech M185 Wireless Optical Mouse is a great device for any computer user, and as Logitech are the global market leaders for these devices, you are also guaranteed absolute reliability. A mouse to be reckoned with!',
		sku: 'product-3',
		rating: { average: 4, count: 245 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 25.19, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 25.19, precisionAmount: 2 },
		},
		image: {
			alt: 'Wireless Optical Mouse',
			url: 'https://demo.vendure.io/assets/preview/a1/oscar-ivan-esquivel-arteaga-687447-unsplash__preview.jpg',
		},
	},
	{
		id: 4,
		name: '32-Inch Monitor',
		slug: '32-inch-monitor',
		description:
			'The UJ59 with Ultra HD resolution has 4x the pixels of Full HD, delivering more screen space and amazingly life-like images. That means you can view documents and webpages with less scrolling, work more comfortably with multiple windows and toolbars, and enjoy photos, videos and games in stunning 4K quality. Note: beverage not included.',
		sku: 'product-4',
		rating: { average: 3, count: 591 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 372.19, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 250.19, precisionAmount: 2 },
		},
		image: {
			alt: '32-Inch Monitor',
			url: 'https://demo.vendure.io/assets/preview/d2/daniel-korpai-1302051-unsplash__preview.jpg',
		},
	},
	{
		id: 5,
		name: 'Curvy Monitor',
		slug: 'curvy-monitor',
		description:
			'Discover a truly immersive viewing experience with this monitor curved more deeply than any other. Wrapping around your field of vision the 1,800 R screencreates a wider field of view, enhances depth perception, and minimises peripheral distractions to draw you deeper in to your content.',
		sku: 'product-5',
		rating: { average: 5, count: 456 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 203.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 172.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Curvy Monitor',
			url: 'https://demo.vendure.io/assets/preview/9c/alexandru-acea-686569-unsplash__preview.jpg',
		},
	},
	{
		id: 6,
		name: 'High Performance RAM',
		slug: 'high-performance-ram',
		description:
			'Each RAM module is built with a pure aluminium heat spreader for faster heat dissipation and cooler operation. Enhanced to XMP 2.0 profiles for better overclocking; Compatibility: Intel 100 Series, Intel 200 Series, Intel 300 Series, Intel X299, AMD 300 Series, AMD 400 Series.',
		sku: 'product-6',
		rating: { average: 5, count: 89 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 178.79, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 150.19, precisionAmount: 2 },
		},
		image: {
			alt: 'High Performance RAM',
			url: 'https://demo.vendure.io/assets/preview/58/liam-briese-1128307-unsplash__preview.jpg',
		},
	},
	{
		id: 7,
		name: 'Gaming PC',
		slug: 'gaming-pc',
		description:
			'This pc is optimised for gaming, and is also VR ready. The Intel Core-i7 CPU and High Performance GPU give the computer the raw power it needs to function at a high level.',
		sku: 'product-7',
		rating: { average: 4, count: 365 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 1590.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 1590.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Gaming PC',
			url: 'https://demo.vendure.io/assets/preview/5a/florian-olivo-1166419-unsplash__preview.jpg',
		},
	},
	{
		id: 8,
		name: 'Hard Drive',
		slug: 'hard-drive',
		description:
			'Boost your PC storage with this internal hard drive, designed just for desktop and all-in-one PCs.',
		sku: 'product-8',
		rating: { average: 4, count: 765 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 100.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 100.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Hard Drive',
			url: 'https://demo.vendure.io/assets/preview/96/vincent-botta-736919-unsplash__preview.jpg',
		},
	},
	{
		id: 9,
		name: 'Clacky Keyboard',
		slug: 'clacky-keyboard',
		description:
			'Let all your colleagues know that you are typing on this exclusive, colorful klicky-klacky keyboard. Huge travel on each keypress ensures maximum klack on each and every keystroke.',
		sku: 'product-9',
		rating: { average: 4, count: 62 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 120.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 120.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Clacky Keyboard',
			url: 'https://demo.vendure.io/assets/preview/09/juan-gomez-674574-unsplash__preview.jpg',
		},
	},
	{
		id: 10,
		name: 'Ethernet Cable',
		slug: 'ethernet-cable',
		description:
			'5m (metres) Cat.6 network cable (upwards/downwards compatible) | Patch cable | 2 RJ-45 plug | plug with bend protection mantle. High transmission speeds due to operating frequency with up to 250 MHz (in comparison to Cat.5/Cat.5e cable bandwidth of 100 MHz).',
		sku: 'product-10',
		rating: { average: 5, count: 1670 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 10.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 7.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Ethernet Cable',
			url: 'https://demo.vendure.io/assets/preview/7b/thomas-q-1229169-unsplash__preview.jpg',
		},
	},
	{
		id: 11,
		name: 'USB Cable',
		slug: 'usb-cable',
		description:
			'Solid conductors eliminate strand-interaction distortion and reduce jitter. As the surface is made of high-purity silver, the performance is very close to that of a solid silver cable, but priced much closer to solid copper cable.',
		sku: 'product-11',
		rating: { average: 4, count: 3489 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 15.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 15.95, precisionAmount: 2 },
		},
		image: {
			alt: 'USB Cable',
			url: 'https://demo.vendure.io/assets/preview/64/adam-birkett-239153-unsplash__preview.jpg',
		},
	},
	{
		id: 12,
		name: 'Instant Camera',
		slug: 'instant-camera',
		description:
			'With its nostalgic design and simple point-and-shoot functionality, the Instant Camera is the perfect pick to get started with instant photography.',
		sku: 'product-12',
		rating: { average: 4, count: 54 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 250.99, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 250.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Instant Camera',
			url: 'https://demo.vendure.io/assets/preview/b5/eniko-kis-663725-unsplash__preview.jpg',
		},
	},
	{
		id: 13,
		name: 'Camera Lens',
		slug: 'camera-lens',
		description:
			'This lens is a Di type lens using an optical system with improved multi-coating designed to function with digital SLR cameras as well as film cameras.',
		sku: 'product-13',
		rating: { average: 3, count: 126 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 200.19, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 125.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Camera Lens',
			url: 'https://demo.vendure.io/assets/preview/9b/brandi-redd-104140-unsplash__preview.jpg',
		},
	},
	{
		id: 14,
		name: 'Vintage Folding Camera',
		slug: 'vintage-folding-camera',
		description:
			'This vintage folding camera is so antiquated that you cannot possibly hope to produce actual photographs with it. However, it makes a wonderful decorative piece for the home or office.',
		sku: 'product-14',
		rating: { average: 5, count: 12 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 6450.19, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 6400.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Vintage Folding Camera',
			url: 'https://demo.vendure.io/assets/preview/3c/jonathan-talbert-697262-unsplash__preview.jpg',
		},
	},
	{
		id: 15,
		name: 'Tripod',
		slug: 'tripod',
		description:
			'Capture vivid, professional-style photographs with help from this lightweight tripod. The adjustable-height tripod makes it easy to achieve reliable stability and score just the right angle when going after that award-winning shot.',
		sku: 'product-15',
		rating: { average: 4, count: 1252 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 20.55, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 20.55, precisionAmount: 2 },
		},
		image: {
			alt: 'Tripod',
			url: 'https://demo.vendure.io/assets/preview/21/zoltan-tasi-423051-unsplash__preview.jpg',
		},
	},
	{
		id: 16,
		name: 'Instamatic Camera',
		slug: 'instamatic-camera',
		description:
			'This inexpensive point-and-shoot camera uses easy-to-load 126 film cartridges. A built-in flash unit ensure great results, no matter the lighting conditions.',
		sku: 'product-16',
		rating: { average: 4, count: 345 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 50.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 50.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Instamatic Camera',
			url: 'https://demo.vendure.io/assets/preview/5b/jakob-owens-274337-unsplash__preview.jpg',
		},
	},
	{
		id: 17,
		name: 'Compact Digital Camera',
		slug: 'compact-digital-camera',
		description:
			"Unleash your creative potential with high-level performance and advanced features such as AI-powered Real-time Eye AF; new, high-precision Real-time Tracking; high-speed continuous shooting and 4K HDR movie-shooting. The camera's innovative AF quickly and reliably detects the position of the subject and then tracks the subject's motion, keeping it in sharp focus.",
		sku: 'product-17',
		rating: { average: 4, count: 341 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 1200.19, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 1200.19, precisionAmount: 2 },
		},
		image: {
			alt: 'Compact Digital Camera',
			url: 'https://demo.vendure.io/assets/preview/bc/patrick-brinksma-663044-unsplash__preview.jpg',
		},
	},
	{
		id: 18,
		name: 'Nikkormat SLR Camera',
		slug: 'nikkormat-slr-camera',
		description:
			'The Nikkormat FS was brought to market by Nikon in 1965. The lens is a 50mm f1.4 Nikkor. Nice glass, smooth focus and a working diaphragm. A UV filter and a Nikon front lens cap are included with the lens.',
		sku: 'product-18',
		rating: { average: 3, count: 456 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 890.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 756.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Nikkormat SLR Camera',
			url: 'https://demo.vendure.io/assets/preview/95/chuttersnap-324234-unsplash__preview.jpg',
		},
	},
	{
		id: 19,
		name: 'Compact SLR Camera',
		slug: 'compact-slr-camera',
		description:
			'Retro styled, portable in size and built around a powerful 24-megapixel APS-C CMOS sensor, this digital camera is the ideal companion for creative everyday photography. Packed full of high spec features such as an advanced hybrid autofocus system able to keep pace with even the most active subjects, a speedy 6fps continuous-shooting mode, high-resolution electronic viewfinder and intuitive swivelling touchscreen, it brings professional image making into everyone’s grasp.',
		sku: 'product-19',
		rating: { average: 5, count: 564 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 625.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 600.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Compact SLR Camera',
			url: 'https://demo.vendure.io/assets/preview/9d/robert-shunev-528016-unsplash__preview.jpg',
		},
	},
	{
		id: 20,
		name: 'Twin Lens Camera',
		slug: 'twin-lens-camera',
		description:
			'What makes a Rolleiflex TLR so special? Many things. To start, TLR stands for twin lens reflex. “Twin” because there are two lenses. And reflex means that the photographer looks through the lens to view the reflected image of an object or scene on the focusing screen. ',
		sku: 'product-20',
		rating: { average: 4, count: 476 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 960.55, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 960.55, precisionAmount: 2 },
		},
		image: {
			alt: 'Twin Lens Camera',
			url: 'https://demo.vendure.io/assets/preview/ef/alexander-andrews-260988-unsplash__preview.jpg',
		},
	},
	{
		id: 21,
		name: 'Road Bike',
		slug: 'road-bike',
		description:
			"Featuring a full carbon chassis - complete with cyclocross-specific carbon fork - and a component setup geared for hard use on the race circuit, it's got the low weight, exceptional efficiency and brilliant handling you'll need to stay at the front of the pack.",
		sku: 'product-21',
		rating: { average: 5, count: 34 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 3199.79, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 2998.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Road Bike',
			url: 'https://demo.vendure.io/assets/preview/2f/mikkel-bech-748940-unsplash__preview.jpg',
		},
	},
	{
		id: 22,
		name: 'Skipping Rope',
		slug: 'skipping-rope',
		description:
			"When you're working out you need a quality rope that doesn't tangle at every couple of jumps and with this skipping rope you won't have this problem. The fact that it looks like a pair of tasty frankfurters is merely a bonus.",
		sku: 'product-22',
		rating: { average: 5, count: 2600 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 9.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 9.59, precisionAmount: 2 },
		},
		image: {
			alt: 'Skipping Rope',
			url: 'https://demo.vendure.io/assets/preview/34/stoica-ionela-530966-unsplash__preview.jpg',
		},
	},
	{
		id: 23,
		name: 'Boxing Gloves',
		slug: 'boxing-gloves',
		description:
			'Training gloves designed for optimum training. Our gloves promote proper punching technique because they are conformed to the natural shape of your fist. Dense, innovative two-layer foam provides better shock absorbency and full padding on the front, back and wrist to promote proper punching technique.',
		sku: 'product-23',
		rating: { average: 3, count: 432 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 45.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 39.65, precisionAmount: 2 },
		},
		image: {
			alt: 'Boxing Gloves',
			url: 'https://demo.vendure.io/assets/preview/4f/neonbrand-428982-unsplash__preview.jpg',
		},
	},
	{
		id: 24,
		name: 'Tent',
		slug: 'tent',
		description:
			'With tons of space inside (for max. 4 persons), full head height throughout the entire tent and an unusual and striking shape, this tent offers you everything you need.',
		sku: 'product-24',
		rating: { average: 5, count: 59 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 280.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 260.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Tent',
			url: 'https://demo.vendure.io/assets/preview/96/michael-guite-571169-unsplash__preview.jpg',
		},
	},
	{
		id: 25,
		name: 'Cruiser Skateboard',
		slug: 'cruiser-skateboard',
		description:
			'Based on the 1970s iconic shape, but made to a larger 69cm size, with updated, quality component, these skateboards are great for beginners to learn the foot spacing required, and are perfect for all-day cruising.',
		sku: 'product-25',
		rating: { average: 4, count: 87 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 29.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 29.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Cruiser Skateboard',
			url: 'https://demo.vendure.io/assets/preview/35/max-tarkhov-737999-unsplash__preview.jpg',
		},
	},
	{
		id: 26,
		name: 'Football',
		slug: 'football',
		description:
			'This football features high-contrast graphics for high-visibility during play, while its machine-stitched tpu casing offers consistent performance.',
		sku: 'product-26',
		rating: { average: 5, count: 125 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 85.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 68.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Football',
			url: 'https://demo.vendure.io/assets/preview/d6/nik-shuliahin-619349-unsplash__preview.jpg',
		},
	},
	{
		id: 27,
		name: 'Tennis Ball',
		slug: 'tennis-ball',
		description:
			'Our dog loves these tennis balls and they last for some time before they eventually either get lost in some field or bush or the covering comes off due to it being used most of the day every day.',
		sku: 'product-27',
		rating: { average: 5, count: 3491 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 18.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 15.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Tennis Ball',
			url: 'https://demo.vendure.io/assets/preview/30/ben-hershey-574483-unsplash__preview.jpg',
		},
	},
	{
		id: 28,
		name: 'Basketball',
		slug: 'basketball',
		description:
			'The Wilson MVP ball is perfect for playing basketball, and improving your skill for hours on end. Designed for new players, it is created with a high-quality rubber suitable for courts, allowing you to get full use during your practices.',
		sku: 'product-28',
		rating: { average: 4, count: 135 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 48.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 48.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Basketball',
			url: 'https://demo.vendure.io/assets/preview/0f/tommy-bebo-600358-unsplash__preview.jpg',
		},
	},
	{
		id: 29,
		name: 'Ultraboost Running Shoe',
		slug: 'ultraboost-running-shoe',
		description:
			'With its ultra-light, uber-responsive magic foam and a carbon fiber plate that feels like it’s propelling you forward, the Running Shoe is ready to push you to victories both large and small',
		sku: 'product-29',
		rating: { average: 5, count: 342 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 119.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 100.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Ultraboost Running Shoe',
			url: 'https://demo.vendure.io/assets/preview/ed/chuttersnap-584518-unsplash__preview.jpg',
		},
	},
	{
		id: 30,
		name: 'Freerun Running Shoe',
		slug: 'freerun-running-shoe',
		description:
			"The Freerun Men's Running Shoe is built for record-breaking speed. The Flyknit upper delivers ultra-lightweight support that fits like a glove.",
		sku: 'product-30',
		rating: { average: 4, count: 541 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 200.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 200.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Freerun Running Shoe',
			url: 'https://demo.vendure.io/assets/preview/0f/imani-clovis-234736-unsplash__preview.jpg',
		},
	},
	{
		id: 31,
		name: 'Hi-Top Basketball Shoe',
		slug: 'hi-top-basketball-shoe',
		description:
			'Boasting legendary performance since 2008, the Hyperdunkz Basketball Shoe needs no gimmicks to stand out. Air units deliver best-in-class cushioning, while a dynamic lacing system keeps your foot snug and secure, so you can focus on your game and nothing else.',
		sku: 'product-31',
		rating: { average: 5, count: 238 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 175.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 168.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Hi-Top Basketball Shoe',
			url: 'https://demo.vendure.io/assets/preview/3c/xavier-teo-469050-unsplash__preview.jpg',
		},
	},
	{
		id: 32,
		name: 'Pureboost Running Shoe',
		slug: 'pureboost-running-shoe',
		description:
			'Built to handle curbs, corners and uneven sidewalks, these natural running shoes have an expanded landing zone and a heel plate for added stability. A lightweight and stretchy knit upper supports your native stride.',
		sku: 'product-32',
		rating: { average: 5, count: 723 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 130.97, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 119.79, precisionAmount: 2 },
		},
		image: {
			alt: 'Pureboost Running Shoe',
			url: 'https://demo.vendure.io/assets/preview/a2/thomas-serer-420833-unsplash__preview.jpg',
		},
	},
	{
		id: 33,
		name: 'RunX Running Shoe',
		slug: 'runx-running-shoe',
		description:
			'These running shoes are made with an airy, lightweight mesh upper. The durable rubber outsole grips the pavement for added stability. A cushioned midsole brings comfort to each step.',
		sku: 'product-33',
		rating: { average: 3, count: 26 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 69.99, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 53.79, precisionAmount: 2 },
		},
		image: {
			alt: 'RunX Running Shoe',
			url: 'https://demo.vendure.io/assets/preview/00/nikolai-chernichenko-1299748-unsplash__preview.jpg',
		},
	},
	{
		id: 34,
		name: 'Allstar Sneakers',
		slug: 'allstar-sneakers',
		description:
			'All Star is the most iconic sneaker in the world, recognised for its unmistakable silhouette, star-centred ankle patch and cultural authenticity. And like the best paradigms, it only gets better with time.',
		sku: 'product-34',
		rating: { average: 5, count: 375 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 89.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 78.79, precisionAmount: 2 },
		},
		image: {
			alt: 'Allstar Sneakers',
			url: 'https://demo.vendure.io/assets/preview/aa/mitch-lensink-256007-unsplash__preview.jpg',
		},
	},
	{
		id: 35,
		name: 'Spiky Cactus',
		slug: 'spiky-cactus',
		description:
			'A spiky yet elegant house cactus - perfect for the home or office. Origin and habitat: Probably native only to the Andes of Peru',
		sku: 'product-35',
		rating: { average: 4, count: 165 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 20.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 20.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Spiky Cactus',
			url: 'https://demo.vendure.io/assets/preview/78/charles-deluvio-695736-unsplash__preview.jpg',
		},
	},
	{
		id: 36,
		name: 'Tulip Pot',
		slug: 'tulip-pot',
		description:
			'Bright crimson red species tulip with black centers, the poppy-like flowers will open up in full sun. Ideal for rock gardens, pots and border edging.',
		sku: 'product-36',
		rating: { average: 4, count: 890 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 10.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 10.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Tulip Pot',
			url: 'https://demo.vendure.io/assets/preview/14/natalia-y-345738-unsplash__preview.jpg',
		},
	},
	{
		id: 37,
		name: 'Hanging Plant',
		slug: 'hanging-plant',
		description:
			'Can be found in tropical and sub-tropical America where it grows on the branches of trees, but also on telephone wires and electricity cables and poles that sometimes topple with the weight of these plants. This plant loves a moist and warm air.',
		sku: 'product-37',
		rating: { average: 4, count: 376 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 25.15, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 25.15, precisionAmount: 2 },
		},
		image: {
			alt: 'Hanging Plant',
			url: 'https://demo.vendure.io/assets/preview/5b/alex-rodriguez-santibanez-200278-unsplash__preview.jpg',
		},
	},
	{
		id: 38,
		name: 'Aloe Vera',
		slug: 'aloe-vera',
		description:
			'Decorative Aloe vera makes a lovely house plant. A really trendy plant, Aloe vera is just so easy to care for. Aloe vera sap has been renowned for its remarkable medicinal and cosmetic properties for many centuries and has been used to treat grazes, insect bites and sunburn - it really works.',
		sku: 'product-38',
		rating: { average: 3, count: 621 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 10.45, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 8.39, precisionAmount: 2 },
		},
		image: {
			alt: 'Aloe Vera',
			url: 'https://demo.vendure.io/assets/preview/29/silvia-agrasar-227575-unsplash__preview.jpg',
		},
	},
	{
		id: 39,
		name: 'Fern Blechnum Gibbum',
		slug: 'fern-blechnum-gibbum',
		description:
			'Create a tropical feel in your home with this lush green tree fern, it has decorative leaves and will develop a short slender trunk in time.',
		sku: 'product-39',
		rating: { average: 4, count: 475 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 12.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 12.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Fern Blechnum Gibbum',
			url: 'https://demo.vendure.io/assets/preview/6d/caleb-george-536388-unsplash__preview.jpg',
		},
	},
	{
		id: 40,
		name: 'Assorted Indoor Succulents',
		slug: 'assorted-succulents',
		description:
			'These assorted succulents come in a variety of different shapes and colours - each with their own unique personality. Succulents grow best in plenty of light: a sunny windowsill would be the ideal spot for them to thrive!',
		sku: 'product-40',
		rating: { average: 5, count: 349 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 42.35, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 39.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Assorted Indoor Succulents',
			url: 'https://demo.vendure.io/assets/preview/81/annie-spratt-78044-unsplash__preview.jpg',
		},
	},
	{
		id: 41,
		name: 'Orchid',
		slug: 'orchid',
		description:
			'Gloriously elegant. It can go along with any interior as it is a neutral color and the most popular Phalaenopsis overall. 2 to 3 foot stems host large white flowers that can last for over 2 months.',
		sku: 'product-41',
		rating: { average: 5, count: 135 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 30.75, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 25.79, precisionAmount: 2 },
		},
		image: {
			alt: 'Orchid',
			url: 'https://demo.vendure.io/assets/preview/88/zoltan-kovacs-642412-unsplash__preview.jpg',
		},
	},
	{
		id: 42,
		name: 'Bonsai Tree',
		slug: 'bonsai-tree',
		description:
			'Excellent semi-evergreen bonsai. Indoors or out but needs some winter protection. All trees sent will leave the nursery in excellent condition and will be of equal quality or better than the photograph shown.',
		sku: 'product-42',
		rating: { average: 5, count: 176 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 30.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 25.79, precisionAmount: 2 },
		},
		image: {
			alt: 'Bonsai Tree',
			url: 'https://demo.vendure.io/assets/preview/f3/mark-tegethoff-667351-unsplash__preview.jpg',
		},
	},
	{
		id: 43,
		name: 'Guardian Lion Statue',
		slug: 'guardian-lion-statue',
		description:
			'Placing it at home or office can bring you fortune and prosperity, guard your house and ward off ill fortune.',
		sku: 'product-43',
		rating: { average: 5, count: 91 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 220.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 150.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Guardian Lion Statue',
			url: 'https://demo.vendure.io/assets/preview/44/vincent-liu-525429-unsplash__preview.jpg',
		},
	},
	{
		id: 44,
		name: 'Hand Trowel',
		slug: 'hand-trowel',
		description:
			'Hand trowel for garden cultivating hammer finish epoxy-coated head for improved resistance to rust, scratches, humidity and alkalines in the soil.',
		sku: 'product-44',
		rating: { average: 5, count: 76 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 9.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 5.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Hand Trowel',
			url: 'https://demo.vendure.io/assets/preview/7d/neslihan-gunaydin-3493-unsplash__preview.jpg',
		},
	},
	{
		id: 45,
		name: 'Balloon Chair',
		slug: 'balloon-chair',
		description:
			'A charming vintage white wooden chair featuring an extremely spherical pink balloon. The balloon may be detached and used for other purposes, for example as a party decoration.',
		sku: 'product-45',
		rating: { average: 4, count: 321 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 99.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 99.95, precisionAmount: 2 },
		},
		image: {
			alt: 'Balloon Chair',
			url: 'https://demo.vendure.io/assets/preview/ef/florian-klauer-14840-unsplash__preview.jpg',
		},
	},
	{
		id: 46,
		name: 'Grey Fabric Sofa',
		slug: 'grey-fabric-sofa',
		description:
			'Seat cushions filled with high resilience foam and polyester fibre wadding give comfortable support for your body, and easily regain their shape when you get up. The cover is easy to keep clean as it is removable and can be machine washed.',
		sku: 'product-46',
		rating: { average: 5, count: 479 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 360.95, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 345.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Grey Fabric Sofa',
			url: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg',
		},
	},
	{
		id: 47,
		name: 'Leather Sofa',
		slug: 'leather-sofa',
		description:
			"This premium, tan-brown bonded leather seat is part of the 'chill' sofa range. The lever activated recline feature makes it easy to adjust to any position. This smart, bustle back design with rounded tight padded arms has been designed with your comfort in mind. This well-padded chair has foam pocket sprung seat cushions and fibre-filled back cushions.",
		sku: 'product-47',
		rating: { average: 3, count: 51 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 1495.55, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 1457.79, precisionAmount: 2 },
		},
		image: {
			alt: 'Leather Sofa',
			url: 'https://demo.vendure.io/assets/preview/3e/paul-weaver-1120584-unsplash__preview.jpg',
		},
	},
	{
		id: 48,
		name: 'Light Shade',
		slug: 'light-shade',
		description:
			'Modern tapered white polycotton pendant shade with a metallic silver chrome interior finish for maximum light reflection. Reversible gimble so it can be used as a ceiling shade or as a lamp shade.',
		sku: 'product-48',
		rating: { average: 5, count: 831 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 40.75, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 35.79, precisionAmount: 2 },
		},
		image: {
			alt: 'Light Shade',
			url: 'https://demo.vendure.io/assets/preview/5f/pierre-chatel-innocenti-483198-unsplash__preview.jpg',
		},
	},
	{
		id: 49,
		name: 'Wooden Side Desk',
		slug: 'wooden-side-desk',
		description:
			'Drawer stops prevent the drawers from being pulled out too far. Built-in cable management for collecting cables and cords; out of sight but close at hand.',
		sku: 'product-49',
		rating: { average: 3, count: 210 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 150.25, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 135.27, precisionAmount: 2 },
		},
		image: {
			alt: 'Wooden Side Desk',
			url: 'https://demo.vendure.io/assets/preview/40/abel-y-costa-716024-unsplash__preview.jpg',
		},
	},
	{
		id: 50,
		name: 'Comfy Padded Chair',
		slug: 'comfy-padded-chair',
		description:
			'You sit comfortably thanks to the shaped back. The chair frame is made of solid wood, which is a durable natural material.',
		sku: 'product-50',
		rating: { average: 5, count: 76 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 150.45, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 135.39, precisionAmount: 2 },
		},
		image: {
			alt: 'Comfy Padded Chair',
			url: 'https://demo.vendure.io/assets/preview/3b/kari-shea-398668-unsplash__preview.jpg',
		},
	},
	{
		id: 51,
		name: 'Black Eaves Chair',
		slug: 'black-eaves-chair',
		description:
			'Comfortable to sit on thanks to the bowl-shaped seat and rounded shape of the backrest. No tools are required to assemble the chair, you just click it together with a simple mechanism under the seat.',
		sku: 'product-51',
		rating: { average: 5, count: 124 },
		price: {
			isDiscounted: true,
			regular: { currency: 'USD', amount: 97.77, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 84.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Black Eaves Chair',
			url: 'https://demo.vendure.io/assets/preview/09/andres-jasso-220776-unsplash__preview.jpg',
		},
	},
	{
		id: 52,
		name: 'Wooden Stool',
		slug: 'wooden-stool',
		description:
			'Solid wood is a hardwearing natural material, which can be sanded and surface treated as required.',
		sku: 'product-52',
		rating: { average: 4, count: 524 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 20.99, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 20.99, precisionAmount: 2 },
		},
		image: {
			alt: 'Wooden Stool',
			url: 'https://demo.vendure.io/assets/preview/d0/ruslan-bardash-351288-unsplash__preview.jpg',
		},
	},
	{
		id: 53,
		name: 'Bedside Table',
		slug: 'bedside-table',
		description:
			'Every table is unique, with varying grain pattern and natural colour shifts that are part of the charm of wood.',
		sku: 'product-53',
		rating: { average: 4, count: 43 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 188.75, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 188.75, precisionAmount: 2 },
		},
		image: {
			alt: 'Bedside Table',
			url: 'https://demo.vendure.io/assets/preview/72/benjamin-voros-310026-unsplash__preview.jpg',
		},
	},
	{
		id: 54,
		name: 'Modern Cafe Chair',
		slug: 'modern-cafe-chair',
		description:
			'You sit comfortably thanks to the restful flexibility of the seat. Lightweight and easy to move around, yet stable enough even for the liveliest, young family members.',
		sku: 'product-54',
		rating: { average: 4, count: 189 },
		price: {
			isDiscounted: false,
			regular: { currency: 'USD', amount: 120.77, precisionAmount: 2 },
			discounted: { currency: 'USD', amount: 120.77, precisionAmount: 2 },
		},
		image: {
			alt: 'Modern Cafe Chair',
			url: 'https://demo.vendure.io/assets/preview/b1/jean-philippe-delberghe-1400011-unsplash__preview.jpg',
		},
	},
];

export const facets = [
	{
		label: 'Color',
		name: 'color',
		values: [
			{ label: 'White', value: 'white', productCount: 22 },
			{ label: 'Black', value: 'black', productCount: 34 },
			{ label: 'Red', value: 'red', productCount: 45 },
			{ label: 'Green', value: 'green', productCount: 56 },
			{ label: 'Blue', value: 'blue', productCount: 12 },
		],
	},
	{
		label: 'Size',
		name: 'size',
		values: [
			{ label: '36', value: '36', productCount: 78 },
			{ label: '37', value: '37', productCount: 67 },
			{ label: '38', value: '38', productCount: 56 },
			{ label: '39', value: '39', productCount: 78 },
			{ label: '40', value: '40', productCount: 78 },
			{ label: '41', value: '41', productCount: 67 },
			{ label: '42', value: '42', productCount: 56 },
			{ label: '43', value: '43', productCount: 78 },
			{ label: '44', value: '44', productCount: 78 },
			{ label: '45', value: '45', productCount: 67 },
			{ label: '46', value: '46', productCount: 56 },
			{ label: '47', value: '47', productCount: 78 },
			{ label: '48', value: '48', productCount: 78 },
			{ label: '49', value: '49', productCount: 67 },
			{ label: '50', value: '50', productCount: 56 },
		],
	},
];
