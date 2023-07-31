import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Heading } from '~/components/Heading';
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
			<h2 class='text-center mb-6 font-bold typography-headline-3 md:typography-headline-2'>
				Inspired by your picks
			</h2>
			<div class='items-center relative flex max-w-screen-3xl mx-auto px-4 md:px-10 mb-20'>
				<button
					type='button'
					class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-4 gap-3 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 hidden md:block !ring-neutral-500 !text-neutral-500 disabled:!ring-disabled-300 disabled:!text-disabled-500 !rounded-full bg-white absolute left-4 z-10'
					data-testid='button'
				>
					<svg
						viewBox='0 0 24 24'
						data-testid='chevron-left'
						xmlns='http://www.w3.org/2000/svg'
						class='inline-block fill-current w-6 h-6 undefined'
					>
						<path d='M14.706 17.297a.998.998 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0Z'></path>
					</svg>
				</button>
				<div class='items-center pb-4 motion-safe:scroll-smooth overflow-x-auto flex gap-4'>
					<div
						class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]'
						data-testid='product-card'
					>
						<div class='relative'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-full pb-[100%]'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								<img
									alt='Athletic mens walking sneakers'
									data-testid='image-slot'
									loading='lazy'
									decoding='async'
									data-nimg='fill'
									class='object-cover rounded-md aspect-square w-full h-full'
									sizes='(max-width: 768px) 50vw, 190px'
									srcSet='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=360&amp;q=75 360w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75 750w'
									src='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75'
									style='position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;'
								/>
							</a>
						</div>
						<div class='p-2 border-t border-neutral-200 typography-text-sm'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								Athletic mens walking sneakers
							</a>
							<div class='flex items-center pt-1'>
								<div
									role='img'
									aria-label='4 out of 5'
									title='4 out of 5'
									class='inline-flex items-center text-warning-500 text-xs'
									data-testid='rating'
								>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 text-disabled-500 w-[1.5em] h-[1.5em]'
									>
										<path d='m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575Zm3.15.45-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
								</div>
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
									data-testid='link'
									href='/#'
								>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
										data-testid='counter'
									>
										26
									</span>
								</a>
							</div>
							<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
							<span
								class='block pb-2 font-bold typography-text-sm'
								data-testid='product-card-vertical-price'
							>
								$89.95
							</span>
							<button
								type='button'
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
								data-testid='button'
							>
								<svg
									viewBox='0 0 24 24'
									data-testid='shopping-cart'
									xmlns='http://www.w3.org/2000/svg'
									class='inline-block fill-current w-5 h-5 undefined'
								>
									<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
								</svg>
								Add{' '}
							</button>
						</div>
					</div>
					<div
						class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]'
						data-testid='product-card'
					>
						<div class='relative'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-full pb-[100%]'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								<img
									alt='Athletic mens walking sneakers'
									data-testid='image-slot'
									loading='lazy'
									decoding='async'
									data-nimg='fill'
									class='object-cover rounded-md aspect-square w-full h-full'
									sizes='(max-width: 768px) 50vw, 190px'
									srcSet='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=360&amp;q=75 360w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75 750w'
									src='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75'
									style='position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;'
								/>
							</a>
						</div>
						<div class='p-2 border-t border-neutral-200 typography-text-sm'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								Athletic mens walking sneakers
							</a>
							<div class='flex items-center pt-1'>
								<div
									role='img'
									aria-label='4 out of 5'
									title='4 out of 5'
									class='inline-flex items-center text-warning-500 text-xs'
									data-testid='rating'
								>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 text-disabled-500 w-[1.5em] h-[1.5em]'
									>
										<path d='m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575Zm3.15.45-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
								</div>
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
									data-testid='link'
									href='/#'
								>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
										data-testid='counter'
									>
										26
									</span>
								</a>
							</div>
							<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
							<span
								class='block pb-2 font-bold typography-text-sm'
								data-testid='product-card-vertical-price'
							>
								$89.95
							</span>
							<button
								type='button'
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
								data-testid='button'
							>
								<svg
									viewBox='0 0 24 24'
									data-testid='shopping-cart'
									xmlns='http://www.w3.org/2000/svg'
									class='inline-block fill-current w-5 h-5 undefined'
								>
									<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
								</svg>
								Add{' '}
							</button>
						</div>
					</div>
					<div
						class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]'
						data-testid='product-card'
					>
						<div class='relative'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-full pb-[100%]'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								<img
									alt='Athletic mens walking sneakers'
									data-testid='image-slot'
									loading='lazy'
									decoding='async'
									data-nimg='fill'
									class='object-cover rounded-md aspect-square w-full h-full'
									sizes='(max-width: 768px) 50vw, 190px'
									srcSet='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=360&amp;q=75 360w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75 750w'
									src='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75'
									style='position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;'
								/>
							</a>
						</div>
						<div class='p-2 border-t border-neutral-200 typography-text-sm'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								Athletic mens walking sneakers
							</a>
							<div class='flex items-center pt-1'>
								<div
									role='img'
									aria-label='4 out of 5'
									title='4 out of 5'
									class='inline-flex items-center text-warning-500 text-xs'
									data-testid='rating'
								>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 text-disabled-500 w-[1.5em] h-[1.5em]'
									>
										<path d='m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575Zm3.15.45-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
								</div>
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
									data-testid='link'
									href='/#'
								>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
										data-testid='counter'
									>
										26
									</span>
								</a>
							</div>
							<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
							<span
								class='block pb-2 font-bold typography-text-sm'
								data-testid='product-card-vertical-price'
							>
								$89.95
							</span>
							<button
								type='button'
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
								data-testid='button'
							>
								<svg
									viewBox='0 0 24 24'
									data-testid='shopping-cart'
									xmlns='http://www.w3.org/2000/svg'
									class='inline-block fill-current w-5 h-5 undefined'
								>
									<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
								</svg>
								Add{' '}
							</button>
						</div>
					</div>
					<div
						class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]'
						data-testid='product-card'
					>
						<div class='relative'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-full pb-[100%]'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								<img
									alt='Athletic mens walking sneakers'
									data-testid='image-slot'
									loading='lazy'
									decoding='async'
									data-nimg='fill'
									class='object-cover rounded-md aspect-square w-full h-full'
									sizes='(max-width: 768px) 50vw, 190px'
									srcSet='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=360&amp;q=75 360w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75 750w'
									src='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75'
									style='position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;'
								/>
							</a>
						</div>
						<div class='p-2 border-t border-neutral-200 typography-text-sm'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								Athletic mens walking sneakers
							</a>
							<div class='flex items-center pt-1'>
								<div
									role='img'
									aria-label='4 out of 5'
									title='4 out of 5'
									class='inline-flex items-center text-warning-500 text-xs'
									data-testid='rating'
								>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 text-disabled-500 w-[1.5em] h-[1.5em]'
									>
										<path d='m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575Zm3.15.45-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
								</div>
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
									data-testid='link'
									href='/#'
								>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
										data-testid='counter'
									>
										26
									</span>
								</a>
							</div>
							<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
							<span
								class='block pb-2 font-bold typography-text-sm'
								data-testid='product-card-vertical-price'
							>
								$89.95
							</span>
							<button
								type='button'
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
								data-testid='button'
							>
								<svg
									viewBox='0 0 24 24'
									data-testid='shopping-cart'
									xmlns='http://www.w3.org/2000/svg'
									class='inline-block fill-current w-5 h-5 undefined'
								>
									<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
								</svg>
								Add{' '}
							</button>
						</div>
					</div>
					<div
						class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]'
						data-testid='product-card'
					>
						<div class='relative'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-full pb-[100%]'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								<img
									alt='Athletic mens walking sneakers'
									data-testid='image-slot'
									loading='lazy'
									decoding='async'
									data-nimg='fill'
									class='object-cover rounded-md aspect-square w-full h-full'
									sizes='(max-width: 768px) 50vw, 190px'
									srcSet='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=360&amp;q=75 360w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75 750w'
									src='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75'
									style='position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;'
								/>
							</a>
						</div>
						<div class='p-2 border-t border-neutral-200 typography-text-sm'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								Athletic mens walking sneakers
							</a>
							<div class='flex items-center pt-1'>
								<div
									role='img'
									aria-label='4 out of 5'
									title='4 out of 5'
									class='inline-flex items-center text-warning-500 text-xs'
									data-testid='rating'
								>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 text-disabled-500 w-[1.5em] h-[1.5em]'
									>
										<path d='m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575Zm3.15.45-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
								</div>
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
									data-testid='link'
									href='/#'
								>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
										data-testid='counter'
									>
										26
									</span>
								</a>
							</div>
							<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
							<span
								class='block pb-2 font-bold typography-text-sm'
								data-testid='product-card-vertical-price'
							>
								$89.95
							</span>
							<button
								type='button'
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
								data-testid='button'
							>
								<svg
									viewBox='0 0 24 24'
									data-testid='shopping-cart'
									xmlns='http://www.w3.org/2000/svg'
									class='inline-block fill-current w-5 h-5 undefined'
								>
									<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
								</svg>
								Add{' '}
							</button>
						</div>
					</div>
					<div
						class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]'
						data-testid='product-card'
					>
						<div class='relative'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-full pb-[100%]'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								<img
									alt='Athletic mens walking sneakers'
									data-testid='image-slot'
									loading='lazy'
									decoding='async'
									data-nimg='fill'
									class='object-cover rounded-md aspect-square w-full h-full'
									sizes='(max-width: 768px) 50vw, 190px'
									srcSet='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=360&amp;q=75 360w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75 750w'
									src='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75'
									style='position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;'
								/>
							</a>
						</div>
						<div class='p-2 border-t border-neutral-200 typography-text-sm'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								Athletic mens walking sneakers
							</a>
							<div class='flex items-center pt-1'>
								<div
									role='img'
									aria-label='4 out of 5'
									title='4 out of 5'
									class='inline-flex items-center text-warning-500 text-xs'
									data-testid='rating'
								>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 text-disabled-500 w-[1.5em] h-[1.5em]'
									>
										<path d='m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575Zm3.15.45-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
								</div>
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
									data-testid='link'
									href='/#'
								>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
										data-testid='counter'
									>
										26
									</span>
								</a>
							</div>
							<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
							<span
								class='block pb-2 font-bold typography-text-sm'
								data-testid='product-card-vertical-price'
							>
								$89.95
							</span>
							<button
								type='button'
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
								data-testid='button'
							>
								<svg
									viewBox='0 0 24 24'
									data-testid='shopping-cart'
									xmlns='http://www.w3.org/2000/svg'
									class='inline-block fill-current w-5 h-5 undefined'
								>
									<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
								</svg>
								Add{' '}
							</button>
						</div>
					</div>
					<div
						class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]'
						data-testid='product-card'
					>
						<div class='relative'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-full pb-[100%]'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								<img
									alt='Athletic mens walking sneakers'
									data-testid='image-slot'
									loading='lazy'
									decoding='async'
									data-nimg='fill'
									class='object-cover rounded-md aspect-square w-full h-full'
									sizes='(max-width: 768px) 50vw, 190px'
									srcSet='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=360&amp;q=75 360w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75 750w'
									src='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75'
									style='position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;'
								/>
							</a>
						</div>
						<div class='p-2 border-t border-neutral-200 typography-text-sm'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								Athletic mens walking sneakers
							</a>
							<div class='flex items-center pt-1'>
								<div
									role='img'
									aria-label='4 out of 5'
									title='4 out of 5'
									class='inline-flex items-center text-warning-500 text-xs'
									data-testid='rating'
								>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 text-disabled-500 w-[1.5em] h-[1.5em]'
									>
										<path d='m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575Zm3.15.45-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
								</div>
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
									data-testid='link'
									href='/#'
								>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
										data-testid='counter'
									>
										26
									</span>
								</a>
							</div>
							<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
							<span
								class='block pb-2 font-bold typography-text-sm'
								data-testid='product-card-vertical-price'
							>
								$89.95
							</span>
							<button
								type='button'
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
								data-testid='button'
							>
								<svg
									viewBox='0 0 24 24'
									data-testid='shopping-cart'
									xmlns='http://www.w3.org/2000/svg'
									class='inline-block fill-current w-5 h-5 undefined'
								>
									<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
								</svg>
								Add{' '}
							</button>
						</div>
					</div>
					<div
						class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]'
						data-testid='product-card'
					>
						<div class='relative'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-full pb-[100%]'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								<img
									alt='Athletic mens walking sneakers'
									data-testid='image-slot'
									loading='lazy'
									decoding='async'
									data-nimg='fill'
									class='object-cover rounded-md aspect-square w-full h-full'
									sizes='(max-width: 768px) 50vw, 190px'
									srcSet='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=360&amp;q=75 360w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75 750w'
									src='/_next/image?url=%2Fimages%2Fproduct.webp&amp;w=750&amp;q=75'
									style='position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;'
								/>
							</a>
						</div>
						<div class='p-2 border-t border-neutral-200 typography-text-sm'>
							<a
								class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
								data-testid='link'
								href='/product/athletic-mens-walking-sneakers'
							>
								Athletic mens walking sneakers
							</a>
							<div class='flex items-center pt-1'>
								<div
									role='img'
									aria-label='4 out of 5'
									title='4 out of 5'
									class='inline-flex items-center text-warning-500 text-xs'
									data-testid='rating'
								>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star-filled'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 w-[1.5em] h-[1.5em]'
									>
										<path d='m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
									<svg
										aria-hidden='true'
										viewBox='0 0 24 24'
										data-testid='star'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 text-disabled-500 w-[1.5em] h-[1.5em]'
									>
										<path d='m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575Zm3.15.45-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z'></path>
									</svg>
								</div>
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
									data-testid='link'
									href='/#'
								>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
										data-testid='counter'
									>
										26
									</span>
								</a>
							</div>
							<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
							<span
								class='block pb-2 font-bold typography-text-sm'
								data-testid='product-card-vertical-price'
							>
								$89.95
							</span>
							<button
								type='button'
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
								data-testid='button'
							>
								<svg
									viewBox='0 0 24 24'
									data-testid='shopping-cart'
									xmlns='http://www.w3.org/2000/svg'
									class='inline-block fill-current w-5 h-5 undefined'
								>
									<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
								</svg>
								Add{' '}
							</button>
						</div>
					</div>
				</div>
				<button
					type='button'
					class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-4 gap-3 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 hidden md:block !ring-neutral-500 !text-neutral-500 disabled:!ring-disabled-300 disabled:!text-disabled-500 !rounded-full bg-white absolute right-4 z-10'
					data-testid='button'
				>
					<svg
						viewBox='0 0 24 24'
						data-testid='chevron-right'
						xmlns='http://www.w3.org/2000/svg'
						class='inline-block fill-current w-6 h-6 undefined'
					>
						<path d='M8.705 17.297a.998.998 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0Z'></path>
					</svg>
				</button>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
};
