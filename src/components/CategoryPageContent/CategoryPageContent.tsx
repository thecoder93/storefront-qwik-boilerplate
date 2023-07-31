import { $, Slot, component$, useSignal } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import { SfButton, SfIconTune } from 'qwik-storefront-ui';
import { CategoryEmptyState } from '../CategoryEmptyState/CategoryEmptyState';
import { NarrowContainer } from '../NarrowContainer/NarrowContainer';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import { CategorySidebar } from './CategorySidebar';

interface CategoryPageContentProps {
	title: string;
	products: {
		id: string;
		slug: string;
		name: string;
		sku: string;
		rating: { average: number; count: number };
		price: {
			isDiscounted: boolean;
			regularPrice: {
				currency: string;
				amount: number;
				precisionAmount: string;
			};
			value: { currency: string; amount: number; precisionAmount: string };
		};
		primaryImage: {
			alt: string;
			url: string;
		};
		description?: string;
	}[];
	totalProducts: number;
	itemsPerPage?: number;
}

export const CategoryPageContent = component$<CategoryPageContentProps>(
	({ title, products, totalProducts, itemsPerPage = 24 }) => {
		const t = useTranslate();
		const isOpenSig = useSignal(false);

		return (
			<NarrowContainer>
				<div class='mb-20 px-4 md:px-0' data-testid='category-layout'>
					<h1 class='my-10 font-bold typography-headline-3 md:typography-headline-2'>
						{title}
					</h1>
					<div class='md:flex gap-6' data-testid='category-page-content'>
						<CategorySidebar
							isOpen={isOpenSig.value}
							closeSidebar={$(() => {
								isOpenSig.value = false;
							})}
						>
							<Slot />
						</CategorySidebar>
						<div class='flex-1'>
							<div class='flex justify-between items-center mb-6'>
								<span class='font-bold font-headings md:text-lg'>
									{t('numberOfProducts', { count: totalProducts })}
								</span>
								<SfButton
									onClick$={() => {
										isOpenSig.value = true;
									}}
									variant='tertiary'
									class='md:hidden whitespace-nowrap'
								>
									<div q:slot='prefix'>
										<SfIconTune />
									</div>
									{t('listSettings')}
								</SfButton>
							</div>
							{products.length > 0 ? (
								<section
									class='grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5'
									data-testid='category-grid'
								>
									{products.map(
										({ id, name, rating, price, primaryImage, slug }) => (
											<ProductCard
												key={id}
												name={name}
												ratingCount={rating.count}
												rating={rating.average}
												price={price.value.amount}
												imageUrl={primaryImage.url}
												imageAlt={primaryImage.alt}
												slug={slug}
											/>
										)
									)}
								</section>
							) : (
								<CategoryEmptyState />
							)}
							{totalProducts > itemsPerPage && (
								<Pagination
								// currentPage={1}
								// totalItems={totalProducts}
								// pageSize={itemsPerPage}
								// maxVisiblePages={maxVisiblePages}
								/>
							)}
						</div>
					</div>
				</div>
			</NarrowContainer>
		);
	}
);
