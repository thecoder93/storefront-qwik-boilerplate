import { $, component$, useComputed$, useContext } from '@builder.io/qwik';
import { routeLoader$, useLocation, useNavigate } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import { useTranslate } from 'qwik-speak';
import { SfButton, SfIconShoppingCart, SfRating } from 'qwik-storefront-ui';
import { Pagination } from '~/components/Pagination/Pagination';
import { ACTIONS_CONTEXT } from '~/shared/constants';
import { formatPrice } from '~/shared/utils';
import type { Product } from '~/types/product';

export const useProductsLoader = routeLoader$(async ({ env, query }) => {
	const page = query.get('page') || 1;
	const response = await fetch(`${env.get('HOST')}/api/products/?page=${page}`);
	return (await response.json()) as {
		products: Product[];
		totalPages: number;
	};
});

export default component$(() => {
	const t = useTranslate();
	const location = useLocation();
	const navigate = useNavigate();
	const products = useProductsLoader();
	const actions = useContext(ACTIONS_CONTEXT);
	const initialPageSig = useComputed$(() =>
		parseInt(location.url.searchParams.get('page') || '1', 10)
	);

	const onPageChange = $((page: number) => {
		const url = new URL(location.url);
		url.searchParams.set('page', page.toString());
		navigate(url.href);
	});

	return (
		<>
			<div
				class='max-w-screen-3xl mx-auto md:px-6 lg:px-10'
				data-testid='narrow-container'
			>
				<div class='p-4 md:px-0'>
					<nav
						data-testid='breadcrumbs'
						class='inline-flex font-normal font-body typography-text-sm'
					>
						<ol class='flex items-center w-auto leading-none group md:flex-wrap'>
							<li class='flex items-center sm:hidden text-neutral-500'>
								<div class='w-max' data-testid='dropdown'>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-2 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent relative w-5 h-5 !p-0 rounded-sm outline-secondary-600 hover:bg-transparent active:bg-transparent'
										data-testid='breadcrumbsDropdownButton'
										aria-label='Show more breadcrumbs'
									>
										<svg
											viewBox='0 0 24 24'
											data-testid='more-horiz'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-5 h-5 text-neutral-500 hover:text-primary-700 active:text-primary-800 active:bg-transparent'
										>
											<path d='M12 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14Zm4-2a2 2 0 1 0 4.001-.001A2 2 0 0 0 16 12Zm-8 0a2 2 0 1 0-4.001.001A2 2 0 0 0 8 12Z'></path>
										</svg>
									</button>
								</div>
							</li>
							<li class="peer hidden sm:flex peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 peer-[:nth-of-type(even)]:before:leading-5 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium">
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit'
									data-testid='link'
									href='/'
								>
									Home
								</a>
							</li>
							<li class="peer hidden sm:flex peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 peer-[:nth-of-type(even)]:before:leading-5 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium">
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit'
									data-testid='link'
									href='/category'
								>
									All products
								</a>
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<main>
				<div
					class='max-w-screen-3xl mx-auto md:px-6 lg:px-10'
					data-testid='narrow-container'
				>
					<div class='mb-20 px-4 md:px-0' data-testid='category-layout'>
						<h1 class='my-10 font-bold typography-headline-3 md:typography-headline-2'>
							All products
						</h1>
						<div class='md:flex gap-6' data-testid='category-page-content'>
							<aside
								class='fixed left-0 top-0 bottom-0 w-full shadow-none md:translate-x-0 z-[100] md:z-0 md:static -translate-x-full shrink-0 md:w-[303px] bg-white'
								data-testid='category-sidebar'
							>
								<div class='grid grid-rows-category-sidebar h-full md:block'>
									<div class='p-4 flex justify-between items-center md:hidden'>
										<span class='font-bold text-lg'>List settings</span>
										<button
											type='button'
											class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent'
											data-testid='button'
											aria-label='Close list settings'
										>
											<svg
												viewBox='0 0 24 24'
												data-testid='close'
												xmlns='http://www.w3.org/2000/svg'
												class='inline-block fill-current w-6 h-6 text-neutral-500'
											>
												<path d='M18.295 5.705a.998.998 0 0 1 0 1.41L13.41 12l4.885 4.885a.997.997 0 1 1-1.41 1.41L12 13.41l-4.885 4.885a.997.997 0 1 1-1.41-1.41L10.59 12 5.705 7.115a.997.997 0 0 1 1.41-1.41L12 10.59l4.885-4.885a.997.997 0 0 1 1.41 0Z'></path>
											</svg>
										</button>
									</div>
									<div class='overflow-y-auto md:overflow-y-visible py-4 md:p-0'>
										<span
											class='block py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md'
											data-testid='category-tree'
										>
											category
										</span>
										<a data-testid='category-tree-item' href='/category'>
											<span
												class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 p-4 md:sf-list-item-sm md:py-1.5 sf-list-item'
												data-testid='list-item'
											>
												<span class='flex flex-col w-full min-w-0'>
													<span class='flex gap-2 items-center'>
														<span
															class='text-base md:text-sm capitalize flex items-center'
															data-testid='list-item-menu-label'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='arrow-back'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 text-neutral-500 mr-2'
															>
																<path d='m10.875 19.3-6.6-6.6a.883.883 0 0 1-.213-.325A1.115 1.115 0 0 1 4 12c0-.133.02-.258.062-.375a.883.883 0 0 1 .213-.325l6.6-6.6a.978.978 0 0 1 .687-.288.933.933 0 0 1 .713.288c.2.183.304.412.313.687a.933.933 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 0 1-.288.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z'></path>
															</svg>
															All products{' '}
														</span>
													</span>
												</span>
											</span>
										</a>
										<div class='mt-4 mb-6 md:mt-2' data-testid='categories'>
											<a data-testid='category-tree-item' href='/category'>
												<span
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 p-4 md:sf-list-item-sm md:py-1.5 sf-list-item'
													data-testid='list-item'
												>
													<span class='flex flex-col w-full min-w-0'>
														<span class='flex gap-2 items-center'>
															<span
																class='text-base md:text-sm capitalize flex items-center'
																data-testid='list-item-menu-label'
															>
																New
															</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-base md:text-sm font-normal"
																data-testid='counter'
															>
																29
															</span>
														</span>
													</span>
												</span>
											</a>
											<a data-testid='category-tree-item' href='/category'>
												<span
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 p-4 md:sf-list-item-sm md:py-1.5 sf-list-item'
													data-testid='list-item'
												>
													<span class='flex flex-col w-full min-w-0'>
														<span class='flex gap-2 items-center'>
															<span
																class='text-base md:text-sm capitalize flex items-center'
																data-testid='list-item-menu-label'
															>
																Women
															</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-base md:text-sm font-normal"
																data-testid='counter'
															>
																1921
															</span>
														</span>
													</span>
												</span>
											</a>
											<a data-testid='category-tree-item' href='/category'>
												<span
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 p-4 md:sf-list-item-sm md:py-1.5 sf-list-item'
													data-testid='list-item'
												>
													<span class='flex flex-col w-full min-w-0'>
														<span class='flex gap-2 items-center'>
															<span
																class='text-base md:text-sm capitalize flex items-center'
																data-testid='list-item-menu-label'
															>
																Men
															</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-base md:text-sm font-normal"
																data-testid='counter'
															>
																641
															</span>
														</span>
													</span>
												</span>
											</a>
											<a data-testid='category-tree-item' href='/category'>
												<span
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 p-4 md:sf-list-item-sm md:py-1.5 sf-list-item'
													data-testid='list-item'
												>
													<span class='flex flex-col w-full min-w-0'>
														<span class='flex gap-2 items-center'>
															<span
																class='text-base md:text-sm capitalize flex items-center'
																data-testid='list-item-menu-label'
															>
																Accessories
															</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-base md:text-sm font-normal"
																data-testid='counter'
															>
																168
															</span>
														</span>
													</span>
												</span>
											</a>
											<a data-testid='category-tree-item' href='/category'>
												<span
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 p-4 md:sf-list-item-sm md:py-1.5 sf-list-item'
													data-testid='list-item'
												>
													<span class='flex flex-col w-full min-w-0'>
														<span class='flex gap-2 items-center'>
															<span
																class='text-base md:text-sm capitalize flex items-center'
																data-testid='list-item-menu-label'
															>
																Sale
															</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-base md:text-sm font-normal"
																data-testid='counter'
															>
																1459
															</span>
														</span>
													</span>
												</span>
											</a>
										</div>
										<span
											class='block py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md'
											data-testid='category-sorting'
										>
											Sort by
										</span>
										<div class='px-2 mb-6'>
											<div
												class='relative flex flex-col rounded-md'
												data-testid='select'
											>
												<select
													class='appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 focus:ring-primary-700 focus:ring-2 outline-none bg-transparent rounded-md ring-1 ring-inset ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200 py-2'
													data-testid='select-input'
													aria-label='Sort by'
												>
													<option value='createdAt'>Latest</option>
													<option value='price-low-to-high'>
														Price from low to high
													</option>
													<option value='price-high-to-low'>
														Price from high to low
													</option>
													<option value='relevant'>Relevance</option>
												</select>
												<svg
													viewBox='0 0 24 24'
													data-testid='expand-more'
													xmlns='http://www.w3.org/2000/svg'
													class='inline-block fill-current w-6 h-6 box-border absolute -translate-y-1 pointer-events-none top-1/3 right-4 transition easy-in-out duration-0.5 text-neutral-500'
												>
													<path d='M17 9.003a.998.998 0 0 0-1.41 0l-3.885 3.876L7.82 9.003a.998.998 0 0 0-1.41 1.411l4.588 4.588a1 1 0 0 0 1.414 0L17 10.414a.997.997 0 0 0 0-1.41Z'></path>
												</svg>
											</div>
										</div>
										<span
											class='block py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md'
											data-testid='category-filters'
										>
											Filters
										</span>
										<div class='flex flex-col gap-2'>
											<details data-testid='accordion-item'>
												<summary class='list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-sm'>
													<div class='flex justify-between p-2 mb-2'>
														<p class='mb-2 font-medium typography-headline-5'>
															Size
														</p>
														<svg
															viewBox='0 0 24 24'
															data-testid='chevron-left'
															xmlns='http://www.w3.org/2000/svg'
															class='inline-block fill-current w-6 h-6 text-neutral-500 rotate-90'
														>
															<path d='M14.706 17.297a.998.998 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0Z'></path>
														</svg>
													</div>
												</summary>
												<ul class='flex flex-wrap gap-4 px-1.5'>
													<li>
														<input
															id=':r1:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':r1:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>36</span>
														</label>
													</li>
													<li>
														<input
															id=':r3:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':r3:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>37</span>
														</label>
													</li>
													<li>
														<input
															id=':r5:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':r5:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>38</span>
														</label>
													</li>
													<li>
														<input
															id=':r7:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':r7:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>39</span>
														</label>
													</li>
													<li>
														<input
															id=':r9:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':r9:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>40</span>
														</label>
													</li>
													<li>
														<input
															id=':rb:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rb:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>41</span>
														</label>
													</li>
													<li>
														<input
															id=':rd:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rd:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>42</span>
														</label>
													</li>
													<li>
														<input
															id=':rf:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rf:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>43</span>
														</label>
													</li>
													<li>
														<input
															id=':rh:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rh:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>44</span>
														</label>
													</li>
													<li>
														<input
															id=':rj:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rj:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>45</span>
														</label>
													</li>
													<li>
														<input
															id=':rl:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rl:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>46</span>
														</label>
													</li>
													<li>
														<input
															id=':rn:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rn:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>47</span>
														</label>
													</li>
													<li>
														<input
															id=':rp:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rp:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>48</span>
														</label>
													</li>
													<li>
														<input
															id=':rr:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rr:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>49</span>
														</label>
													</li>
													<li>
														<input
															id=':rt:'
															class='absolute w-0 outline-none appearance-none peer'
															type='checkbox'
														/>
														<label
															for=':rt:'
															class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3'
															data-testid='chip'
														>
															<span class='leading-4'>50</span>
														</label>
													</li>
												</ul>
											</details>
											<details data-testid='accordion-item'>
												<summary class='list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-sm'>
													<div class='flex justify-between p-2 mb-2'>
														<p class='mb-2 font-medium typography-headline-5'>
															Color
														</p>
														<svg
															viewBox='0 0 24 24'
															data-testid='chevron-left'
															xmlns='http://www.w3.org/2000/svg'
															class='inline-block fill-current w-6 h-6 text-neutral-500 rotate-90'
														>
															<path d='M14.706 17.297a.998.998 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0Z'></path>
														</svg>
													</div>
												</summary>
												<label
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 text-sm px-4 py-1 px-1.5 bg-transparent hover:bg-transparent'
													data-testid='list-item'
												>
													<span class='text-neutral-500'>
														<input
															class='appearance-none peer'
															type='checkbox'
															value='white'
														/>
														<span class='inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline'>
															<div
																class='rounded-full overflow-hidden bg-clip-content p-0.5 w-5 h-5'
																data-testid='thumbnail'
																style='background-color: white;'
															></div>
														</span>
													</span>
													<span class='flex flex-col w-full min-w-0'>
														<p>
															<span class='mr-2 text-sm'>White</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm"
																data-testid='counter'
															>
																22
															</span>
														</p>
													</span>
												</label>
												<label
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 text-sm px-4 py-1 px-1.5 bg-transparent hover:bg-transparent'
													data-testid='list-item'
												>
													<span class='text-neutral-500'>
														<input
															class='appearance-none peer'
															type='checkbox'
															value='black'
														/>
														<span class='inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline'>
															<div
																class='rounded-full overflow-hidden bg-clip-content p-0.5 w-5 h-5'
																data-testid='thumbnail'
																style='background-color: black;'
															></div>
														</span>
													</span>
													<span class='flex flex-col w-full min-w-0'>
														<p>
															<span class='mr-2 text-sm'>Black</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm"
																data-testid='counter'
															>
																34
															</span>
														</p>
													</span>
												</label>
												<label
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 text-sm px-4 py-1 px-1.5 bg-transparent hover:bg-transparent'
													data-testid='list-item'
												>
													<span class='text-neutral-500'>
														<input
															class='appearance-none peer'
															type='checkbox'
															value='red'
														/>
														<span class='inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline'>
															<div
																class='rounded-full overflow-hidden bg-clip-content p-0.5 w-5 h-5'
																data-testid='thumbnail'
																style='background-color: red;'
															></div>
														</span>
													</span>
													<span class='flex flex-col w-full min-w-0'>
														<p>
															<span class='mr-2 text-sm'>Red</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm"
																data-testid='counter'
															>
																45
															</span>
														</p>
													</span>
												</label>
												<label
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 text-sm px-4 py-1 px-1.5 bg-transparent hover:bg-transparent'
													data-testid='list-item'
												>
													<span class='text-neutral-500'>
														<input
															class='appearance-none peer'
															type='checkbox'
															value='green'
														/>
														<span class='inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline'>
															<div
																class='rounded-full overflow-hidden bg-clip-content p-0.5 w-5 h-5'
																data-testid='thumbnail'
																style='background-color: green;'
															></div>
														</span>
													</span>
													<span class='flex flex-col w-full min-w-0'>
														<p>
															<span class='mr-2 text-sm'>Green</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm"
																data-testid='counter'
															>
																56
															</span>
														</p>
													</span>
												</label>
												<label
													class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 text-sm px-4 py-1 px-1.5 bg-transparent hover:bg-transparent'
													data-testid='list-item'
												>
													<span class='text-neutral-500'>
														<input
															class='appearance-none peer'
															type='checkbox'
															value='blue'
														/>
														<span class='inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline'>
															<div
																class='rounded-full overflow-hidden bg-clip-content p-0.5 w-5 h-5'
																data-testid='thumbnail'
																style='background-color: blue;'
															></div>
														</span>
													</span>
													<span class='flex flex-col w-full min-w-0'>
														<p>
															<span class='mr-2 text-sm'>Blue</span>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm"
																data-testid='counter'
															>
																12
															</span>
														</p>
													</span>
												</label>
											</details>
										</div>
									</div>
									<div class='p-4 md:mt-2 flex flex-wrap justify-between border-t border-t-neutral-200 md:border-0 gap-3'>
										<button
											type='button'
											class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 md:hidden whitespace-nowrap flex flex-1'
											data-testid='button'
										>
											Show products
										</button>
									</div>
								</div>
							</aside>
							<div class='flex-1'>
								<div class='flex justify-between items-center mb-6'>
									<span class='font-bold font-headings md:text-lg'>
										398 Products
									</span>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent md:hidden whitespace-nowrap'
										data-testid='button'
									>
										<svg
											viewBox='0 0 24 24'
											data-testid='tune'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6 undefined'
										>
											<path d='M4 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 18c0-.283.096-.52.288-.712A.965.965 0 0 1 4 17h4c.283 0 .521.096.713.288A.967.967 0 0 1 9 18a.97.97 0 0 1-.287.712A.968.968 0 0 1 8 19H4ZM4 7a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 6c0-.283.096-.521.288-.713A.967.967 0 0 1 4 5h8a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6a.97.97 0 0 1-.287.713A.97.97 0 0 1 12 7H4Zm8 14a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 20v-4c0-.283.096-.521.288-.713A.967.967 0 0 1 12 15a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 16v1h7c.283 0 .52.096.712.288A.965.965 0 0 1 21 18c0 .283-.096.52-.288.712A.965.965 0 0 1 20 19h-7v1a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 21Zm-4-6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 14v-1H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 12c0-.283.096-.521.288-.713A.967.967 0 0 1 4 11h3v-1a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 9a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 10v4a.97.97 0 0 1-.287.712A.968.968 0 0 1 8 15Zm4-2a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 12c0-.283.096-.521.288-.713A.967.967 0 0 1 12 11h8a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 13h-8Zm4-4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 8V4c0-.283.096-.521.288-.713A.967.967 0 0 1 16 3a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v1h3a.97.97 0 0 1 .712.287c.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 20 7h-3v1c0 .283-.096.52-.288.712A.965.965 0 0 1 16 9Z'></path>
										</svg>
										List settings{' '}
									</button>
								</div>
								<section
									class='flex flex-row flex-wrap justify-between gap-4'
									data-testid='category-grid'
								>
									{products.value.products.map((product) => (
										<div
											key={product.slug}
											class='border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 w-[230px] min-w-[230px] max-w-[230px]'
											data-testid='product-card'
										>
											<div class='relative'>
												<a
													class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 relative block w-[230px] p-1'
													data-testid='link'
													href={`/product/${product.slug}`}
												>
													<Image
														loading='eager'
														layout='fixed'
														width={230}
														height={230}
														data-testid='image-slot'
														class='object-cover rounded-md aspect-square w-full h-full'
														src={product.image.url}
														alt={product.image.alt}
													/>
												</a>
											</div>
											<div class='p-2 border-t border-neutral-200 typography-text-sm px-6 py-4'>
												<a
													class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline'
													data-testid='link'
													href={`/product/${product.slug}`}
												>
													{product.name}
												</a>
												<div class='flex items-center mt-2'>
													<SfRating
														size='xs'
														value={product.rating.average}
														ariaLabel={`${product.rating.average} out of 5`}
													/>
													<a
														class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-1 no-underline'
														data-testid='link'
														href='/category#'
													>
														<span
															class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs"
															data-testid='counter'
														>
															{product.rating.count}
														</span>
													</a>
												</div>
												<p class='block py-2 font-normal typography-text-xs text-neutral-700 text-justify'></p>
												<div class='flex items-center justify-between'>
													<span
														class='block font-bold typography-text-sm'
														data-testid='product-card-vertical-price'
													>
														{formatPrice(
															product.price.discounted.amount,
															product.price.discounted.precisionAmount
														)}
													</span>
													<SfButton
														type='button'
														size='sm'
														class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 px-2 py-2'
														onClick$={() =>
															actions.updateCartProduct(product.id, 1)
														}
													>
														{t('addToCartShort@@Add')}
														<div q:slot='prefix'>
															<SfIconShoppingCart size='sm' class='w-5 h-5' />
														</div>
													</SfButton>
												</div>
											</div>
										</div>
									))}
								</section>
								<Pagination
									class='mt-6'
									initialPage={initialPageSig.value}
									totalPages={products.value.totalPages}
									onPrevPage={onPageChange}
									onNextPage={onPageChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
});
