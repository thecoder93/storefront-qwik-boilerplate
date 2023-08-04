import { component$, useContext } from '@builder.io/qwik';
import { Image } from 'qwik-image';
import { useTranslate } from 'qwik-speak';
import { SfIconDelete } from 'qwik-storefront-ui';
import { ACTIONS_CONTEXT } from '~/shared/constants';
import { formatPrice } from '~/shared/utils';
import type { Product } from '~/types/product';

export interface CartProductCardProps {
	product: Product;
	quantity: number;
}

export const CartProductCard = component$<CartProductCardProps>(
	({ product, quantity }) => {
		const t = useTranslate();
		const actions = useContext(ACTIONS_CONTEXT);
		return (
			<div
				class='relative flex first:border-t border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] p-4 last:mb-0'
				data-testid='cart-product-card'
			>
				<div class='relative overflow-hidden rounded-md w-[150px]'>
					<a
						class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900'
						data-testid='link'
						href={`/product/${product.slug}`}
					>
						<Image
							loading='eager'
							layout='constrained'
							objectFit='fill'
							width={300}
							height={300}
							data-testid='image-slot'
							class='object-cover rounded-md aspect-square w-full h-full'
							src={product.image.url}
							alt={product.image.alt}
						/>
					</a>
					{product.price.isDiscounted && (
						<div class='absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 text-xs font-medium'>
							<svg
								viewBox='0 0 24 24'
								data-testid='sell'
								xmlns='http://www.w3.org/2000/svg'
								class='inline-block fill-current w-4 h-4 mr-1'
							>
								<path d='M14.25 21.4c-.383.383-.858.575-1.425.575-.567 0-1.042-.192-1.425-.575l-8.8-8.8a2.069 2.069 0 0 1-.6-1.45V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h7.15c.283 0 .55.054.8.162.25.109.467.255.65.438l8.8 8.825c.383.383.575.854.575 1.412a1.92 1.92 0 0 1-.575 1.413l-7.15 7.15ZM6.5 8c.417 0 .77-.146 1.062-.438C7.854 7.271 8 6.917 8 6.5c0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 6.5 5c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 5 6.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Z'></path>
							</svg>
							{t('sale')}
						</div>
					)}
				</div>
				<div class='flex flex-col pl-4 min-w-[180px] flex-1'>
					<a
						class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline typography-text-sm sm:typography-text-lg'
						data-testid='link'
						href='/product/athletic-sneakers'
					>
						{product.name}
					</a>
					<div class='my-2 sm:mb-0 '>
						<ul class='text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700 flex justify-between'>
							<div
								data-testid='quantitySelector'
								class='inline-flex flex-col items-center mt-4 sm:mt-auto'
							>
								<div class='flex border border-neutral-300 rounded-md h-full w-full'>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-2 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent rounded-r-none'
										data-testid='quantitySelectorDecreaseButton'
										aria-controls=':rf:'
										aria-label='Decrease value'
										disabled={quantity === 1}
									>
										<svg
											viewBox='0 0 24 24'
											data-testid='remove'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6'
											onClick$={() => {
												if (quantity > 1) {
													actions.updateCartProduct(product.id, -1);
												}
											}}
										>
											<path d='M6 13a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h12a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 13H6Z'></path>
										</svg>
									</button>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-2 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent rounded-l-none'
										data-testid='quantitySelectorIncreaseButton'
										aria-controls=':rf:'
										aria-label='Increase value'
									>
										<svg
											viewBox='0 0 24 24'
											data-testid='add'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6'
											onClick$={() => actions.updateCartProduct(product.id, 1)}
										>
											<path d='M12 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 18v-5H6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h5V6c0-.283.096-.521.288-.713A.967.967 0 0 1 12 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6v5h5a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 13h-5v5a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 19Z'></path>
										</svg>
									</button>
								</div>
							</div>
							<div class='flex border border-neutral-300 rounded-md h-full'>
								<button
									type='button'
									class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-2 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent rounded-l-none'
									data-testid='quantitySelectorIncreaseButton'
									aria-controls=':rf:'
									aria-label='Increase value'
									onClick$={() => actions.removeProductFromCart(product.id)}
								>
									<SfIconDelete />
								</button>
							</div>
						</ul>
					</div>
					<div class='items-start sm:items-center mt-4 flex flex-col sm:flex-row'>
						<span class='flex flex-col items-end text-secondary-700 sm:order-1 font-bold typography-text-sm sm:typography-text-lg sm:ml-auto'>
							{product.price.isDiscounted && (
								<span class='text-neutral-500 ml-2 line-through typography-text-xs sm:typography-text-sm font-normal'>
									{formatPrice(
										product.price.regular.amount * quantity,
										product.price.regular.precisionAmount
									)}
								</span>
							)}
							{formatPrice(
								product.price.discounted.amount * quantity,
								product.price.discounted.precisionAmount
							)}
						</span>
						<span class='font-medium mt-2 ml-1'>
							{quantity} x {product.price.discounted.amount}
						</span>
					</div>
				</div>
			</div>
		);
	}
);
