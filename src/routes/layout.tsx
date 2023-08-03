import { $, Slot, component$, useComputed$ } from '@builder.io/qwik';
import {
	Link,
	routeAction$,
	routeLoader$,
	useLocation,
	type RequestHandler,
} from '@builder.io/qwik-city';
import type { ImageTransformerProps } from 'qwik-image';
import { useImageProvider } from 'qwik-image';
import { useTranslate } from 'qwik-speak';
import { SfButton, SfIconExpandMore } from 'qwik-storefront-ui';
import { Footer } from '~/components/Footer/Footer';
import { NavbarTop } from '~/components/NavbarTop/NavbarTop';
import { ScrollToTopButton } from '~/components/ScrollToTopButton/ScrollToTopButton';
import { Search } from '~/components/search/search';
import { sleep } from '~/shared/utils';
import { useAppStore } from '~/store';
import type { Product } from '~/types/product';

export const onGet: RequestHandler = async ({ cacheControl }) => {
	cacheControl({
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		maxAge: 5,
	});
};

export const useAddressForm = routeAction$(async () => {
	await sleep(5_000);
	return { success: true };
});

export const useRandomProductsLoader = routeLoader$(
	async ({ env }): Promise<Product[]> => {
		const response = await fetch(`${env.get('HOST')}/api/random-products`);
		return await response.json();
	}
);

export default component$(() => {
	const t = useTranslate();
	const store = useAppStore();
	const location = useLocation();
	const isCheckoutPathSig = useComputed$(
		() =>
			location.url.pathname.includes('cart') ||
			location.url.pathname.includes('checkout') ||
			location.url.pathname.includes('order')
	);

	useImageProvider({
		imageTransformer$: $(
			({ src, width, height }: ImageTransformerProps) =>
				`${src}?w=${width / 2}&h=${height}&format=webp`
		),
	});

	const getQuantityCart = () => {
		return store.cart.products.map(item => { return item.quantity; }).reduce((acc, currentValue) => acc + currentValue, 0);
	}

	return (
		<>
			<NavbarTop isCheckoutPath={isCheckoutPathSig.value}>
				<SfButton
					class='!px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body hidden md:inline-flex'
					as={'a'}
					href='/category'
					variant='tertiary'
				>
					<div q: slot='suffix'>
						<SfIconExpandMore />
					</div>
					<span>{t('allProductsLinkText')}</span>
				</SfButton>
				{!isCheckoutPathSig.value && (
					<>
						<Search />
						<nav class='flex flex-row flex-nowrap ml-auto'>
							<Link
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-2 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent mr-2 -ml-0.5 text-white bg-primary-700 hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white'
								data-testid='button'
								aria-label='1 product in cart'
								href='/cart'
							>
								<div class='relative inline-flex bg-inherit rounded-full'>
									<svg
										viewBox='0 0 24 24'
										data-testid='shopping-cart'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-6 h-6 undefined'
									>
										<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
									</svg>
									<div class='rounded-[inherit] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-inherit pointer-events-none p-0.5'>
										<div class='rounded-[inherit] text-center py-0.5 px-1 text-3xs font-medium min-w-[0.75rem] text-neutral-900 bg-white'>
											{getQuantityCart()}
										</div>
									</div>
								</div>
							</Link>
						</nav>
					</>
				)}
			</NavbarTop>
			<Slot />
			<ScrollToTopButton />
			<Footer />
		</>
	);
});
