import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import { useTranslate } from 'qwik-speak';
import { SfButton } from 'qwik-storefront-ui';
import somethingWentWrongImage from '../../../public/images/empty-category.svg';

export const CategoryEmptyState = component$(() => {
	const t = useTranslate();
	return (
		<section
			data-testid='category-empty-state'
			class='flex flex-col items-center md:mt-16'
		>
			<Image
				src={somethingWentWrongImage}
				alt={t('emptyStateAltText')}
				width='192'
				height='192'
				loading='eager'
				layout='fixed'
			/>
			<p class='mt-8 font-medium'>{t('category:emptyStateText')}</p>
			<p class='mt-4'>{t('category:emptyStateText2')}</p>
			<SfButton as={Link} href='/category' variant='secondary' class='mt-4'>
				{t('allProductsLinkText')}
			</SfButton>
		</section>
	);
});
