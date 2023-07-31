import { component$ } from '@builder.io/qwik';
import { Heading } from '~/components/Heading';
import { ProductSlider } from '~/components/ProductSlider';
import { CategoryCard } from '~/components/UI/CategoryCard';
import { Display } from '~/components/UI/Display';
import { Hero } from '~/components/UI/Hero';

const heroMock = {
	description:
		'This fashionable sneaker collection features various colors, comfort and style.',
	image: '/images/hero.png',
	primaryButtonLink: '/product/athletic-mens-walking-sneakers',
	primaryButtonText: 'Order now',
	secondaryButtonLink: '/category',
	secondaryButtonText: 'Show more',
	subtitle: 'Special offer',
	title: 'Sneaker hot drops',
};

const items = [
	{
		id: 'fbcd250e-b53a-40a7-9087-e4303de6ea90',
		name: 'New',
		slug: 'category',
		subcategories: [],
		productCount: 120,
		image: '/images/new-card.png',
	},
	{
		id: '03bf5dad-1b4b-44db-adf0-6ee858cdc358',
		name: 'Men',
		slug: 'category',
		subcategories: [],
		productCount: 428,
		image: '/images/men-card.png',
	},
	{
		id: 'af4ce472-45e9-4dd4-9988-275d229ce287',
		name: 'Women',
		slug: 'category',
		subcategories: [],
		productCount: 513,
		image: '/images/women-card.png',
	},
];

const display = [
	{
		image: '/images/display-1.png',
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
		image: '/images/display-2.png',
		title: 'Sunny Days Ahead',
		subtitle: 'Be inspired',
		description: 'Step out in style with our sunglasses collection',
		buttonText: 'Discover now',
		reverse: true,
		backgroundColor: 'bg-negative-200',
		buttonLink: '/category',
	},
	{
		image: '/images/display-3.png',
		title: 'Gear up and get ready',
		subtitle: 'Be active',
		description: 'Explore the great outdoors with our backpacks',
		buttonText: 'Discover now',
		reverse: true,
		backgroundColor: 'bg-warning-200',
		buttonLink: '/category',
	},
];

const productsSlider = [
	{
		id: '1',
		slug: 'athletic-mens-walking-sneakers',
		name: 'Athletic mens walking sneakers',
		sku: 'product-1',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: true,
			regularPrice: { currency: 'USD', amount: 100.99, precisionAmount: '2' },
			value: { currency: 'USD', amount: 89.95, precisionAmount: '2' },
		},
		primaryImage: {
			alt: 'Athletic mens walking sneakers',
			url: '/images/product.webp',
		},
	},
	{
		id: '2',
		slug: 'athletic-mens-walking-sneakers',
		name: 'Athletic mens walking sneakers',
		sku: 'product-2',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: true,
			regularPrice: { currency: 'USD', amount: 100.99, precisionAmount: '2' },
			value: { currency: 'USD', amount: 89.95, precisionAmount: '2' },
		},
		primaryImage: {
			alt: 'Athletic mens walking sneakers',
			url: '/images/product.webp',
		},
	},
	{
		id: '3',
		slug: 'athletic-mens-walking-sneakers',
		name: 'Athletic mens walking sneakers',
		sku: 'product-3',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: true,
			regularPrice: { currency: 'USD', amount: 100.99, precisionAmount: '2' },
			value: { currency: 'USD', amount: 89.95, precisionAmount: '2' },
		},
		primaryImage: {
			alt: 'Athletic mens walking sneakers',
			url: '/images/product.webp',
		},
	},
	{
		id: '4',
		slug: 'athletic-mens-walking-sneakers',
		name: 'Athletic mens walking sneakers',
		sku: 'product-4',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: true,
			regularPrice: { currency: 'USD', amount: 100.99, precisionAmount: '2' },
			value: { currency: 'USD', amount: 89.95, precisionAmount: '2' },
		},
		primaryImage: {
			alt: 'Athletic mens walking sneakers',
			url: '/images/product.webp',
		},
	},
	{
		id: '5',
		slug: 'athletic-mens-walking-sneakers',
		name: 'Athletic mens walking sneakers',
		sku: 'product-5',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: true,
			regularPrice: { currency: 'USD', amount: 100.99, precisionAmount: '2' },
			value: { currency: 'USD', amount: 89.95, precisionAmount: '2' },
		},
		primaryImage: {
			alt: 'Athletic mens walking sneakers',
			url: '/images/product.webp',
		},
	},
	{
		id: '6',
		slug: 'athletic-mens-walking-sneakers',
		name: 'Athletic mens walking sneakers',
		sku: 'product-6',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: true,
			regularPrice: { currency: 'USD', amount: 100.99, precisionAmount: '2' },
			value: { currency: 'USD', amount: 89.95, precisionAmount: '2' },
		},
		primaryImage: {
			alt: 'Athletic mens walking sneakers',
			url: '/images/product.webp',
		},
	},
	{
		id: '7',
		slug: 'athletic-mens-walking-sneakers',
		name: 'Athletic mens walking sneakers',
		sku: 'product-7',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: true,
			regularPrice: { currency: 'USD', amount: 100.99, precisionAmount: '2' },
			value: { currency: 'USD', amount: 89.95, precisionAmount: '2' },
		},
		primaryImage: {
			alt: 'Athletic mens walking sneakers',
			url: '/images/product.webp',
		},
	},
	{
		id: '8',
		slug: 'athletic-mens-walking-sneakers',
		name: 'Athletic mens walking sneakers',
		sku: 'product-8',
		rating: { average: 4, count: 26 },
		price: {
			isDiscounted: true,
			regularPrice: { currency: 'USD', amount: 100.99, precisionAmount: '2' },
			value: { currency: 'USD', amount: 89.95, precisionAmount: '2' },
		},
		primaryImage: {
			alt: 'Athletic mens walking sneakers',
			url: '/images/product.webp',
		},
	},
];

export default component$(() => {
	return (
		<div>
			<Hero {...heroMock} />
			<Heading
				title='Shop by category'
				as='h2'
				class='text-center mb-6 font-bold typography-headline-3 md:typography-headline-2'
			/>
			<CategoryCard items={items} />
			<Display items={display} />
			<Heading
				title='Inspired by your picks'
				as='h2'
				class='text-center mb-6 font-bold typography-headline-3 md:typography-headline-2'
			/>
			<ProductSlider products={productsSlider} />
		</div>
	);
});
