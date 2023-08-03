import { component$ } from '@builder.io/qwik';
import type { Product } from '~/types/product';
import { ProductCard } from '../ProductCard/ProductCard';

type ProductSliderProps = {
	products: Product[];
	class?: string;
};

export const ProductSlider = component$<ProductSliderProps>(
	({ products, class: _class }) => {
		// <SfScrollable
		//   buttonsPlacement="floating"
		//   className="items-center pb-4"
		//   {...attributes}
		//   wrapperClassName={className}
		// >

		return (
			<div class={['items-center relative flex', _class]}>
				{/* <button
					type='button'
					aria-label='prev'
					class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-4 gap-3 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 hidden md:block !ring-neutral-500 !text-neutral-500 disabled:!ring-disabled-300 disabled:!text-disabled-500 !rounded-full bg-white absolute left-4 z-10'
					data-testid='button'
				>
					<svg
						viewBox='0 0 24 24'
						data-testid='chevron-left'
						xmlns='http://www.w3.org/2000/svg'
						class='inline-block fill-current w-6 h-6 undefined'
					>
						<path d='M14.706 17.297a.998.998 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0Z'></path>
					</svg>
				</button> */}
				<div class='items-center pb-4 motion-safe:scroll-smooth overflow-x-auto flex gap-4'>
					{products.map(
						({ id, name, description, rating, price, primaryImage, slug }) => (
							<ProductCard
								key={id}
								class='max-w-[192px]'
								name={name}
								description={description}
								ratingCount={rating.count}
								rating={rating.average}
								price={price.value.amount}
								imageUrl={primaryImage.url}
								imageAlt={primaryImage.alt}
								slug={slug}
							/>
						)
					)}
				</div>
				{/* <button
					type='button'
					aria-label='next'
					class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-4 gap-3 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 hidden md:block !ring-neutral-500 !text-neutral-500 disabled:!ring-disabled-300 disabled:!text-disabled-500 !rounded-full bg-white absolute right-4 z-10'
					data-testid='button'
				>
					<svg
						viewBox='0 0 24 24'
						data-testid='chevron-right'
						xmlns='http://www.w3.org/2000/svg'
						class='inline-block fill-current w-6 h-6 undefined'
					>
						<path d='M8.705 17.297a.998.998 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0Z'></path>
					</svg>
				</button> */}
			</div>
		);
	}
);
