import { component$, Slot } from '@builder.io/qwik';
import { routeAction$, type RequestHandler } from '@builder.io/qwik-city';
import { SfButton, SfIconExpandMore } from 'qwik-storefront-ui';
import { NavbarTop } from '~/components/navbar-top/navbar-top';
import { sleep } from '~/shared/utils';

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.builder.io/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};

export const useAddressForm = routeAction$(async () => {
	await sleep(5_000);
	return { success: true };
});

export default component$(() => {
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
		</>
	);
});
