import { $, Slot, component$, useComputed$ } from '@builder.io/qwik';
import {
	routeAction$,
	routeLoader$,
	useLocation,
	type RequestHandler,
} from '@builder.io/qwik-city';
import type { ImageTransformerProps } from 'qwik-image';
import { useImageProvider } from 'qwik-image';
import { useTranslate } from 'qwik-speak';
import { SfButton, SfIconExpandMore } from 'qwik-storefront-ui';
import { CartIcon } from '~/components/CartIcon/CartIcon';
import { Footer } from '~/components/Footer/Footer';
import { NavbarTop } from '~/components/NavbarTop/NavbarTop';
import { ScrollToTopButton } from '~/components/ScrollToTopButton/ScrollToTopButton';
import { Search } from '~/components/Search/Search';
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
	useAppStore();

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

	return (
		<>
			<NavbarTop isCheckoutPath={isCheckoutPathSig.value}>
				<SfButton
					class='!px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body hidden md:inline-flex'
					as={'a'}
					href='/category'
					variant='tertiary'
				>
					<div q:slot='suffix'>
						<SfIconExpandMore />
					</div>
					<span>{t('allProductsLinkText')}</span>
				</SfButton>
				{!isCheckoutPathSig.value && (
					<>
						<Search />
						<CartIcon />
					</>
				)}
			</NavbarTop>
			<Slot />
			<ScrollToTopButton />
			<Footer />
		</>
	);
});
