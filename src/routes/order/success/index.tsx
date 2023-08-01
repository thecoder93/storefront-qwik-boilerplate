import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import { useTranslate } from 'qwik-speak';
import { SfButton } from 'qwik-storefront-ui';

export default component$(() => {
	const t = useTranslate();
	return (
		<div class='px-4 md:px-0' data-testid='order-success-page'>
			<div class='border border-1 border-neutral-200 mt-10 mb-20 rounded p-4 md:p-6 flex flex-col items-center max-w-2xl mx-auto'>
				<Image
					loading='eager'
					layout='constrained'
					objectFit='fill'
					width={200}
					height={200}
					alt={t('orderSuccessfulImageAlt')}
					src={'/images/order-success.svg'}
				/>
				<h1 class='mt-6 mb-1 text-2xl'>Thank you!</h1>
				<span class='font-medium'>Your order was completed successfully.</span>
				<div class='border border-1 border-neutral-200 rounded bg-neutral-100 p-4 w-full my-4 text-sm'>
					<h5 class='font-medium text-base'>{t('etaDelivery')}</h5>
					<p class='capitalize'>{t('tomorrow')}</p>
					<h5 class='font-medium text-base mt-4'>{t('orderNumber')}</h5>
					<p>123456789</p>
				</div>
				<SfButton
					as={Link}
					href='/'
					//replace <-- check lib
					class='max-md:w-full'
					variant='secondary'
				>
					{t('continueShopping')}
				</SfButton>
			</div>
		</div>
	);
});
