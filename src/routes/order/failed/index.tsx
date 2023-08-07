import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import { SfButton, SfIconArrowBack } from 'qwik-storefront-ui';

export default component$(() => {
	return (
		<div data-testid='order-failed-page' class='px-4 md:px-0'>
			<div class='border border-1 border-neutral-200 mt-10 mb-20 rounded p-4 md:p-6 flex flex-col items-center max-w-2xl mx-auto'>
				<Image
					loading='eager'
					layout='constrained'
					objectFit='fill'
					width={200}
					height={200}
					alt={$localize`orderSuccessfulImageAlt`}
					src={'/images/empty-category.svg'}
				/>
				<h1 class='mt-6 mb-1 text-2xl'>We are really sorry.</h1>
				<span class='font-medium'>Your order has not been completed.</span>
				<div class='border border-1 border-neutral-200 rounded bg-neutral-100 p-4 w-full my-4 text-sm'>
					{$localize`orderErrorMessage`}
				</div>
				<SfButton
					as={Link}
					href='/checkout'
					class='max-md:w-full'
					variant='secondary'
				>
					<div q:slot='prefix'>
						<SfIconArrowBack />
					</div>
					{$localize`backToCheckout`}
				</SfButton>
				<SfButton
					as={Link}
					href='/'
					class='mt-4 max-md:w-full'
					variant='tertiary'
				>
					{$localize`continueShopping`}
				</SfButton>
			</div>
		</div>
	);
});
