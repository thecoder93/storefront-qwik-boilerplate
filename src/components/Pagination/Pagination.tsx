import { component$ } from '@builder.io/qwik';

interface PaginationProps {
	// currentPage: number;
	// pageSize: number;
	// totalItems: number;
	// maxVisiblePages: number;
}

export const Pagination = component$<PaginationProps>(() => {
	// TODO
	return (
		<nav
			class='flex justify-between items-center border-t border-neutral-200'
			role='navigation'
			aria-label='pagination'
			data-testid='pagination'
		>
			<button
				type='button'
				class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent gap-3 mt-2'
				data-testid='button'
				aria-label='Go to previous page'
			>
				<svg
					viewBox='0 0 24 24'
					data-testid='chevron-left'
					xmlns='http://www.w3.org/2000/svg'
					class='inline-block fill-current w-6 h-6 undefined'
				>
					<path d='M14.706 17.297a.998.998 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0Z'></path>
				</svg>
				<span class='hidden sm:inline-flex'>Previous</span>
			</button>
			<ul class='flex flex-wrap justify-center'>
				<li>
					<div class='flex pt-1 border-t-4 border-transparent font-medium border-t-4 !border-primary-700'>
						<button
							type='button'
							class='px-4 py-3 text-neutral-500 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 !text-neutral-900 hover:!text-primary-800 active:!text-primary-900'
							aria-label='Page 1 of 17'
							aria-current='true'
						>
							1
						</button>
					</div>
				</li>
				<li>
					<div class='flex pt-1 border-t-4 border-transparent'>
						<button
							type='button'
							aria-label='Second page'
							class='px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 '
							aria-current='true'
						>
							2
						</button>
					</div>
				</li>
				<li>
					<div class='flex pt-1 border-t-4 border-transparent'>
						<button
							type='button'
							aria-hidden='true'
							class='px-4 py-3 rounded-md text-neutral-500'
						>
							...
						</button>
					</div>
				</li>
				<li>
					<div class='flex pt-1 border-t-4 border-transparent'>
						<button
							type='button'
							class='px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 '
							aria-label='Last page'
							aria-current='false'
						>
							17
						</button>
					</div>
				</li>
			</ul>
			<button
				type='button'
				class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent gap-3 mt-2'
				data-testid='button'
				aria-label='Go to next page'
			>
				<span class='hidden sm:inline-flex'>Next</span>
				<svg
					viewBox='0 0 24 24'
					data-testid='chevron-right'
					xmlns='http://www.w3.org/2000/svg'
					class='inline-block fill-current w-6 h-6 undefined'
				>
					<path d='M8.705 17.297a.998.998 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0Z'></path>
				</svg>
			</button>
		</nav>
	);
});
