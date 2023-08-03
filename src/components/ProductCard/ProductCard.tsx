import { component$, useContext } from '@builder.io/qwik';
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
import { ACTIONS_CONTEXT } from '~/shared/constants';
import type { Product } from '~/types/product';

export type ProductCardProps = {
	product: Product;
	class?: string;
};

export const ProductCard = component$<ProductCardProps>(
	({ product, class: _class, ...attributes }) => {
		const t = useTranslate();
		const actions = useContext(ACTIONS_CONTEXT);

		return (
			<div
				class={[
					'border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 p-2',
					_class,
				]}
				data-testid='product-card'
				{...attributes}
			>
				<div class='relative'>
					<SfLink
						href={`/product/${product.slug}`}
						as={Link}
						class='relative block w-full'
					>
						<Image
							loading='lazy'
							layout='constrained'
							width={300}
							height={300}
							data-testid='image-slot'
							class='object-cover rounded-md aspect-square w-full h-full'
							src={product.primaryImage.url}
							alt={product.primaryImage.alt || 'primary image'}
						/>
					</SfLink>
				</div>
				<div class='p-2 border-t border-neutral-200 typography-text-sm'>
					<SfLink
						href={`/product/${product.slug}`}
						as={Link}
						variant='secondary'
						class='no-underline line-clamp-1'
					>
						{product.name}
					</SfLink>
					<div class='flex items-center pt-2'>
						<SfRating size='xs' value={product.rating.average} max={5} />
						<span class='ml-1 no-underline'>
							<SfCounter size='xs'>{product.rating.count}</SfCounter>
						</span>
					</div>
					<p class='max-h-[59px] py-2 font-normal typography-text-xs text-neutral-700 line-clamp-3'>
						{product.description}
					</p>
					<div class='flex items-center justify-between pt-2'>
						<span
							class='block pb-2 font-bold typography-text-sm pt-2'
							data-testid='product-card-vertical-price'
						>
							${product.price.value.amount}
						</span>
						<SfButton
							type='button'
							size='sm'
							class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'
							onClick$={() => actions.updateCartWithProduct(product.id, 1)}
						>
							{t('addToCartShort@@Add')}
							<div q:slot='prefix'>
								<SfIconShoppingCart size='sm' class='w-5 h-5' />
							</div>
						</SfButton>
					</div>
				</div>
			</div>
		);
	}
);
