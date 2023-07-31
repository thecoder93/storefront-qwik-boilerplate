import { $, component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeAction$, type RequestHandler } from '@builder.io/qwik-city';
import type { ImageTransformerProps } from 'qwik-image';
import { useImageProvider } from 'qwik-image';
import { SfButton, SfIconExpandMore } from 'qwik-storefront-ui';
import { Footer } from '~/components/Footer';
import { NavbarTop } from '~/components/NavbarTop/NavbarTop';
import { generateDocumentHead, sleep } from '~/shared/utils';

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

export default component$(() => {
	useImageProvider({
		imageTransformer$: $(({ src }: ImageTransformerProps) => src),
	});

	return (
		<>
			<NavbarTop filled={true}>
				<SfButton
					class='!px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body hidden md:inline-flex'
					as={'a'}
					href='/category'
					variant='tertiary'
				>
					<div q:slot='suffix'>
						<SfIconExpandMore />
					</div>
					<span>Browse products</span>
				</SfButton>
				{/* <Search class="hidden md:block flex-1" /> */}
			</NavbarTop>
			<Slot />
			<Footer />
		</>
	);
});

export const head: DocumentHead = () => generateDocumentHead();
