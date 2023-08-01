import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import { useTranslate } from 'qwik-speak';
import {
	SfButton,
	SfCounter,
	SfIconShoppingCart,
	SfLink,
	SfRating,
} from 'qwik-storefront-ui';

export type ProductCardProps = {
	name: string;
	description: string;
	imageUrl?: string;
	imageAlt?: string;
	rating?: number;
	ratingCount?: number;
	price?: number;
	slug?: string;
	class?: string;
};

export const ProductCard = component$<ProductCardProps>(
	({
		name,
		description,
		imageUrl,
		imageAlt,
		price,
		rating,
		ratingCount,
		slug,
		class: _class,
		...attributes
	}) => {
		const t = useTranslate();

		return (
			<div
				class={[
					'border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0',
					_class,
				]}
				data-testid='product-card'
				{...attributes}
			>
				<div class='relative'>
					<SfLink
						href={`/product/${slug}`}
						as={Link}
						class='relative block w-full'
					>
						<Image
							loading='lazy'
							layout='constrained'
							objectFit='fill'
							width={240}
							height={240}
							data-testid='image-slot'
							class='object-cover rounded-md aspect-square w-full h-full'
							src={imageUrl ?? ''}
							alt={imageAlt || 'primary image'}
						/>
					</SfLink>
				</div>
				<div class='p-2 border-t border-neutral-200 typography-text-sm'>
					<SfLink
						href={`/product/${slug}`}
						as={Link}
						variant='secondary'
						class='no-underline'
					>
						{name}
					</SfLink>
					<div class='flex items-center pt-1'>
						<SfRating size='xs' value={rating} max={5} />

						<SfLink
							href='#'
							variant='secondary'
							as={Link}
							class='ml-1 no-underline'
						>
							<SfCounter size='xs'>{ratingCount}</SfCounter>
						</SfLink>
					</div>
					<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'>
						{description}
					</p>
					<span
						class='block pb-2 font-bold typography-text-sm'
						data-testid='product-card-vertical-price'
					>
						${price}
					</span>
					<SfButton
						type='button'
						size='sm'
						class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
					>
						{t('addToCartShort')}
						<div q:slot='prefix'>
							<SfIconShoppingCart size='sm' class='w-5 h-5' />
						</div>
					</SfButton>
				</div>
			</div>
		);
	}
);
