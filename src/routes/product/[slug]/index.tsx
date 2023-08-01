import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import { SfRating } from 'qwik-storefront-ui';
import { ProductNotFound } from '~/components/ProductNotFound/ProductNotFound';
import { ProductSlider } from '~/components/ProductSlider/ProductSlider';
import { productSliderShuffeled, productsSlider } from '~/mocks';
import { IMAGE_PLACHEHOLDER } from '~/shared/constants';
import { generateDocumentHead } from '~/shared/utils';

export const useProductLoader = routeLoader$(({ params, status }) => {
	const product = productsSlider.find((p) => p.slug === params.slug);
	if (!product) {
		status(404);
	}
	return product;
});

export default component$(() => {
	const product = useProductLoader();
	if (!product.value) {
		return <ProductNotFound />;
	}
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
									Category
								</a>
							</li>
							<li class="peer hidden sm:flex peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 peer-[:nth-of-type(even)]:before:leading-5 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium">
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit'
									data-testid='link'
									href='/product/athletic-sneakers#'
								>
									{product.value.name}
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
					<div class='md:grid gap-x-6 grid-areas-product-page grid-cols-product-page'>
						<section class='grid-in-left-top md:h-full xl:max-h-[700px]'>
							<div class='flex-col md:flex-row h-full flex relative scroll-smooth md:gap-4'>
								<div
									class='after:block after:pt-[100%] flex-1 relative overflow-hidden w-full max-h-[600px]'
									data-testid='gallery-images'
								>
									<div class='items-center relative flex !absolute top-0 left-0 w-full h-full'>
										<div class="items-center flex snap-x snap-mandatory [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-full motion-safe:scroll-smooth overflow-x-auto flex gap-4">
											<div class='w-full h-full relative snap-center snap-always basis-full shrink-0 grow'>
												<Image
													loading='eager'
													layout='constrained'
													width={600}
													height={600}
													data-testid='image-slot'
													class='rounded-md aspect-square'
													src={product.value.primaryImage.url}
													alt={product.value.primaryImage.alt}
													placeholder={IMAGE_PLACHEHOLDER}
												/>
											</div>
										</div>
									</div>
								</div>
								{/* <div class='md:-order-1 overflow-hidden flex-shrink-0 basis-auto'>
									<div class='items-center relative flex-col h-full inline-flex hidden md:inline-flex'>
										<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-1.5 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 absolute !rounded-full bg-white z-10 top-4 rotate-90 disabled:!hidden !ring-neutral-500 !text-neutral-500'
										data-testid='button'
										aria-label='Previous'
									>
										<svg
											viewBox='0 0 24 24'
											data-testid='chevron-left'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6 undefined'
										>
											<path d='M14.706 17.297a.998.998 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0Z'></path>
										</svg>
									</button>
										<div class="flex-row w-full items-center md:flex-col md:h-full md:px-0 md:scroll-pl-4 snap-y snap-mandatory flex gap-0.5 md:gap-2 overflow-auto [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] motion-safe:scroll-smooth overflow-y-auto flex flex-col gap-4">
											<button
												type='button'
												aria-current='true'
												aria-label='Go to slide 1'
												class='w-20 h-[88px] relative shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors flex-grow-0 border-primary-700'
											>
												<Image
													loading='eager'
													layout='fixed'
													width={80}
													height={80}
													data-testid='image-slot'
													class='object-cover rounded-md aspect-square w-full h-full'
													src={product.value.primaryImage.url}
													alt={product.value.primaryImage.alt}
												/>
											</button>
										</div>
										<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-1.5 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 absolute !rounded-full bg-white z-10 bottom-4 rotate-90 disabled:!hidden !ring-neutral-500 !text-neutral-500'
										data-testid='button'
										aria-label='Next'
									>
										<svg
											viewBox='0 0 24 24'
											data-testid='chevron-right'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6 undefined'
										>
											<path d='M8.705 17.297a.998.998 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0Z'></path>
										</svg>
									</button>
									</div>
									<div class='flex md:hidden gap-0.5' role='group'>
										<button
											type='button'
											aria-current='true'
											aria-label='Go to slide 1'
											class='relative shrink-0 pb-1 border-b-4 cursor-pointer transition-colors flex-grow  border-primary-700'
										></button>
									</div>
								</div> */}
							</div>
						</section>
						<section class='mb-10 grid-in-right md:mb-0'>
							<div
								class='p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20'
								data-testid='purchase-card'
							>
								<div class='inline-flex items-center justify-center text-white font-medium rounded-none text-secondary-800 bg-secondary-800 text-sm p-1.5 gap-1.5 mb-4'>
									<svg
										viewBox='0 0 24 24'
										data-testid='sell'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-5 h-5 ml-1'
									>
										<path d='M14.25 21.4c-.383.383-.858.575-1.425.575-.567 0-1.042-.192-1.425-.575l-8.8-8.8a2.069 2.069 0 0 1-.6-1.45V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h7.15c.283 0 .55.054.8.162.25.109.467.255.65.438l8.8 8.825c.383.383.575.854.575 1.412a1.92 1.92 0 0 1-.575 1.413l-7.15 7.15ZM6.5 8c.417 0 .77-.146 1.062-.438C7.854 7.271 8 6.917 8 6.5c0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 6.5 5c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 5 6.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Z'></path>
									</svg>
									<span class='mr-1'>Sale</span>
								</div>
								<h1
									class='mb-1 font-bold typography-headline-4'
									data-testid='product-name'
								>
									{product.value.name}
								</h1>
								<div class='my-1'>
									<span
										class='mr-2 text-secondary-700 font-bold font-headings text-2xl'
										data-testid='price'
									>
										${product.value.price.value.amount}
									</span>
									<span class='text-base font-normal text-neutral-500 line-through'>
										${product.value.price.regularPrice.amount}
									</span>
								</div>
								<div class='inline-flex items-center mb-2'>
									<SfRating
										size='xs'
										value={product.value.rating.average}
										ariaLabel={`${product.value.rating.average} out of 5`}
									/>
									<span
										class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-xs ml-1"
										data-testid='counter'
									>
										{product.value.rating.count}
									</span>
									<a
										class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 ml-2 text-xs text-neutral-500'
										data-testid='link'
										href='#'
									>
										{product.value.rating.count} reviews
									</a>
								</div>
								<p
									class='mb-4 font-normal typography-text-sm'
									data-testid='product-description'
								>
									Lightweight • Non slip • Flexible outsole • Easy to wear on
									and off
								</p>
								<div class='py-4 mb-4 border-gray-200 border-y'>
									<div class='inline-flex items-center justify-center rounded-md font-normal text-primary-800 bg-primary-100 text-sm p-1.5 gap-1.5 w-full mb-4'>
										<svg
											viewBox='0 0 24 24'
											data-testid='shopping-cart-checkout'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6 undefined'
										>
											<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM11.3 9.3a.948.948 0 0 1-.275-.7.95.95 0 0 1 .275-.7l.875-.9H9a.968.968 0 0 1-.713-.287A.968.968 0 0 1 8 6c0-.283.096-.52.287-.713A.968.968 0 0 1 9 5h3.175l-.9-.9a.916.916 0 0 1-.287-.7c.008-.267.112-.5.312-.7.2-.183.433-.28.7-.288.267-.008.5.088.7.288l2.6 2.6c.1.1.17.208.212.325.042.117.063.242.063.375s-.02.258-.063.375a.878.878 0 0 1-.212.325l-2.6 2.6a.977.977 0 0 1-.688.287.93.93 0 0 1-.712-.287ZM7 17c-.767 0-1.346-.33-1.737-.988-.392-.658-.396-1.312-.013-1.962L6.6 11.6 3 4H2a.968.968 0 0 1-.712-.288A.968.968 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.65c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L8.525 11h7.025l3.6-6.5A.973.973 0 0 1 20 4a.94.94 0 0 1 .863.487.937.937 0 0 1 .012.988L17.3 11.95c-.183.333-.43.592-.738.775A1.945 1.945 0 0 1 15.55 13H8.1L7 15h11a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
										</svg>
										1 product in cart
									</div>
									<div class='flex flex-col md:flex-row flex-wrap gap-4'>
										<div
											data-testid='quantitySelector'
											class='inline-flex flex-col items-center h-12  min-w-[145px] flex-grow flex-shrink-0 basis-0'
										>
											<div class='flex border border-neutral-300 rounded-md h-full w-full'>
												<button
													type='button'
													class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-2 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent rounded-r-none'
													data-testid='quantitySelectorDecreaseButton'
													aria-controls=':r1:'
													aria-label='Decrease value'
												>
													<svg
														viewBox='0 0 24 24'
														data-testid='remove'
														xmlns='http://www.w3.org/2000/svg'
														class='inline-block fill-current w-6 h-6 undefined'
													>
														<path d='M6 13a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h12a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 13H6Z'></path>
													</svg>
												</button>
												<input
													data-testid='quantitySelectorInput'
													id=':r1:'
													type='number'
													role='spinbutton'
													class='appearance-none flex-1 mx-2 w-8 text-center bg-transparent font-medium [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:display-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:display-none [&amp;::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm'
													min='1'
													max='999'
													aria-label='Quantity Selector'
													value='1'
												/>
												<button
													type='button'
													class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-2 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent rounded-l-none'
													data-testid='quantitySelectorIncreaseButton'
													aria-controls=':r1:'
													aria-label='Increase value'
												>
													<svg
														viewBox='0 0 24 24'
														data-testid='add'
														xmlns='http://www.w3.org/2000/svg'
														class='inline-block fill-current w-6 h-6 undefined'
													>
														<path d='M12 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 18v-5H6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h5V6c0-.283.096-.521.288-.713A.967.967 0 0 1 12 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6v5h5a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 13h-5v5a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 19Z'></path>
													</svg>
												</button>
											</div>
										</div>
										<button
											type='button'
											class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 flex-grow-[2] flex-shrink basis-auto whitespace-nowrap'
											data-testid='button'
										>
											<svg
												viewBox='0 0 24 24'
												data-testid='shopping-cart'
												xmlns='http://www.w3.org/2000/svg'
												class='inline-block fill-current w-5 h-5 undefined'
											>
												<path d='M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1.975a.927.927 0 0 1-.7-.288A.99.99 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L5.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 15.55 13H8.1L7 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z'></path>
											</svg>
											Add to cart{' '}
										</button>
									</div>
									<div class='flex justify-center mt-4 gap-x-4'>
										<button
											type='button'
											class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent'
											data-testid='button'
										>
											<svg
												viewBox='0 0 24 24'
												data-testid='compare-arrows'
												xmlns='http://www.w3.org/2000/svg'
												class='inline-block fill-current w-5 h-5 undefined'
											>
												<path d='m15.3 13.3-3.6-3.6a.871.871 0 0 1-.212-.325A1.099 1.099 0 0 1 11.425 9c0-.133.021-.258.063-.375A.871.871 0 0 1 11.7 8.3l3.6-3.6c.2-.2.433-.3.7-.3.267 0 .5.1.7.3.2.2.3.437.3.712 0 .275-.1.513-.3.713L14.825 8H21a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 21 10h-6.175l1.875 1.875c.2.2.3.433.3.7 0 .267-.1.5-.3.7-.2.2-.429.308-.687.325-.259.017-.496-.083-.713-.3Zm-8 5.975c.2.2.433.304.7.312.267.009.5-.087.7-.287l3.6-3.6a.88.88 0 0 0 .213-.325c.041-.117.062-.242.062-.375s-.02-.258-.062-.375a.883.883 0 0 0-.213-.325l-3.6-3.6a.96.96 0 0 0-.7-.3c-.267 0-.5.1-.7.3-.2.2-.3.437-.3.712 0 .275.1.513.3.713L9.175 14H3a.967.967 0 0 0-.712.287A.968.968 0 0 0 2 15c0 .283.096.52.288.712A.965.965 0 0 0 3 16h6.175L7.3 17.875c-.2.2-.3.433-.3.7 0 .267.1.5.3.7Z'></path>
											</svg>
											Compare{' '}
										</button>
										<button
											type='button'
											class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent'
											data-testid='button'
										>
											<svg
												viewBox='0 0 24 24'
												data-testid='favorite'
												xmlns='http://www.w3.org/2000/svg'
												class='inline-block fill-current w-5 h-5 undefined'
											>
												<path
													fill-rule='evenodd'
													clip-rule='evenodd'
													d='M19.664 4.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28Zm-7.56 14.56-.1.1-.1-.1c-4.76-4.31-7.9-7.16-7.9-10.05 0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05Z'
												></path>
											</svg>
											Add to list{' '}
										</button>
									</div>
								</div>
								<div class='flex first:mt-4'>
									<svg
										viewBox='0 0 24 24'
										data-testid='package'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-5 h-5 flex-shrink-0 mr-1 text-neutral-500'
									>
										<path d='m10 9.75 1.325-.65a1.593 1.593 0 0 1 1.35 0L14 9.75V5h-4v4.75ZM8 17a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 16a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 15h3a.97.97 0 0 1 .713.287A.97.97 0 0 1 12 16a.97.97 0 0 1-.287.712A.968.968 0 0 1 11 17H8Zm-3 4a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 19 21H5Zm0-2h14V5h-3v6.375c0 .383-.158.67-.475.862a.951.951 0 0 1-.975.038L12 11l-2.55 1.275a.951.951 0 0 1-.975-.038c-.317-.191-.475-.479-.475-.862V5H5v14Z'></path>
									</svg>
									<p class='text-sm'>
										Free shipping, arrives by Thu, Apr 7. Want it faster?{' '}
										<a
											class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900'
											data-testid='link'
											href='#'
										>
											Add an address
										</a>{' '}
										to see options{' '}
									</p>
								</div>
								<div class='flex mt-4'>
									<svg
										viewBox='0 0 24 24'
										data-testid='warehouse'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-5 h-5 flex-shrink-0 mr-1 text-neutral-500'
									>
										<path d='m12 5.15-8 3.2V19h2v-6c0-.55.196-1.02.588-1.413A1.925 1.925 0 0 1 8 11h8c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v6h2V8.35l-8-3.2ZM8 21H4c-.55 0-1.02-.195-1.412-.587A1.927 1.927 0 0 1 2 19V8.35A1.963 1.963 0 0 1 3.25 6.5l8-3.2c.233-.1.483-.15.75-.15s.517.05.75.15l8 3.2c.383.15.688.392.913.725.225.333.337.708.337 1.125V19a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 20 21h-4v-8H8v8Zm1 0v-2h2v2H9Zm2-3v-2h2v2h-2Zm2 3v-2h2v2h-2Z'></path>
									</svg>
									<p class='text-sm'>
										Pickup not available at Super center.{' '}
										<a
											class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900'
											data-testid='link'
											href='#'
										>
											Check availability nearby
										</a>
									</p>
								</div>
								<div class='flex mt-4'>
									<svg
										viewBox='0 0 24 24'
										data-testid='safety-check'
										xmlns='http://www.w3.org/2000/svg'
										class='inline-block fill-current w-5 h-5 flex-shrink-0 mr-1 text-neutral-500'
									>
										<path d='M12 16.5c1.383 0 2.563-.488 3.538-1.463C16.513 14.062 17 12.883 17 11.5s-.487-2.563-1.462-3.538C14.563 6.987 13.383 6.5 12 6.5s-2.562.487-3.537 1.462C7.488 8.937 7 10.117 7 11.5s.488 2.562 1.463 3.537c.975.975 2.154 1.463 3.537 1.463Zm1.65-2.65L11.5 11.7V8.5h1v2.8l1.85 1.85-.7.7ZM12 21.5c-2.317-.583-4.229-1.913-5.737-3.988C4.754 15.437 4 13.133 4 10.6V4.5l8-3 8 3v6.1c0 2.533-.754 4.837-2.262 6.912-1.509 2.075-3.421 3.405-5.738 3.988Zm0-2.1c1.733-.55 3.167-1.65 4.3-3.3s1.7-3.483 1.7-5.5V5.875l-6-2.25-6 2.25V10.6c0 2.017.567 3.85 1.7 5.5s2.567 2.75 4.3 3.3Z'></path>
									</svg>
									<p class='text-sm'>
										Free 30-Day returns.{' '}
										<a
											class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900'
											data-testid='link'
											href='#'
										>
											Details
										</a>
									</p>
								</div>
							</div>
						</section>
						<section class='grid-in-left-bottom md:mt-8'>
							<hr
								class='w-full h-px bg-neutral-200 mb-6'
								data-testid='divider'
							/>
							<div class='px-4'>
								<span class='block mb-2 mt-2 text-base font-medium leading-6 text-neutral-900'>
									Size
								</span>
								<div class='mr-2 mb-2 uppercase inline-block'>
									<input
										id=':r3:'
										class='absolute w-0 outline-none appearance-none peer'
										type='checkbox'
									/>
									<label
										for=':r3:'
										class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3 min-w-[48px]'
										data-testid='chip'
									>
										M
									</label>
								</div>
								<div class='mr-2 mb-2 uppercase inline-block'>
									<input
										id=':r5:'
										class='absolute w-0 outline-none appearance-none peer'
										type='checkbox'
									/>
									<label
										for=':r5:'
										class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3 min-w-[48px]'
										data-testid='chip'
									>
										S
									</label>
								</div>
								<div class='mr-2 mb-2 uppercase inline-block'>
									<input
										id=':r7:'
										class='absolute w-0 outline-none appearance-none peer'
										type='checkbox'
									/>
									<label
										for=':r7:'
										class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3 min-w-[48px]'
										data-testid='chip'
									>
										L
									</label>
								</div>
								<div class='mr-2 mb-2 uppercase inline-block'>
									<input
										id=':r9:'
										class='absolute w-0 outline-none appearance-none peer'
										type='checkbox'
									/>
									<label
										for=':r9:'
										class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3 min-w-[48px]'
										data-testid='chip'
									>
										XL
									</label>
								</div>
								<span class='block mb-2 mt-2 text-base font-medium leading-6 text-neutral-900'>
									Color
								</span>
								<div class='mr-2 mb-2 inline-block'>
									<input
										id=':rb:'
										class='absolute w-0 outline-none appearance-none peer'
										type='checkbox'
									/>
									<label
										for=':rb:'
										class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-1.5 pr-3'
										data-testid='chip'
									>
										<div
											class='rounded-full overflow-hidden bg-clip-content p-0.5 w-5 h-5'
											data-testid='thumbnail'
											style='background: red;'
										></div>
										Red
									</label>
								</div>
								<div class='mr-2 mb-2 inline-block'>
									<input
										id=':rd:'
										class='absolute w-0 outline-none appearance-none peer'
										type='checkbox'
									/>
									<label
										for=':rd:'
										class='cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-1.5 pr-3'
										data-testid='chip'
									>
										<div
											class='rounded-full overflow-hidden bg-clip-content p-0.5 w-5 h-5'
											data-testid='thumbnail'
											style='background: blue;'
										></div>
										Blue
									</label>
								</div>
							</div>
							<hr
								class='w-full h-px bg-neutral-200 mt-4 mb-2 md:mt-8'
								data-testid='divider'
							/>
							<div>
								<details data-testid='accordion-item'>
									<summary class='md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-sm'>
										<h2 class='font-bold font-headings text-lg leading-6 md:text-2xl'>
											Product Details
										</h2>
										<svg
											viewBox='0 0 24 24'
											data-testid='expand-more'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6 text-neutral-500 rotate-180'
										>
											<path d='M17 9.003a.998.998 0 0 0-1.41 0l-3.885 3.876L7.82 9.003a.998.998 0 0 0-1.41 1.411l4.588 4.588a1 1 0 0 0 1.414 0L17 10.414a.997.997 0 0 0 0-1.41Z'></path>
										</svg>
									</summary>
									<div class='py-2'>
										<p class='text-neutral-900 px-4'>
											Lightweight • Non slip • Flexible outsole • Easy to wear
											on and off
										</p>
									</div>
								</details>
								<hr
									class='w-full h-px bg-neutral-200 my-4'
									data-testid='divider'
								/>
								<details data-testid='accordion-item'>
									<summary class='md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-sm'>
										<h2 class='font-bold font-headings text-lg leading-6 md:text-2xl'>
											Customer Reviews
										</h2>
										<svg
											viewBox='0 0 24 24'
											data-testid='expand-more'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6 text-neutral-500'
										>
											<path d='M17 9.003a.998.998 0 0 0-1.41 0l-3.885 3.876L7.82 9.003a.998.998 0 0 0-1.41 1.411l4.588 4.588a1 1 0 0 0 1.414 0L17 10.414a.997.997 0 0 0 0-1.41Z'></path>
										</svg>
									</summary>
									<div class='py-2'>
										<div class='text-neutral-900 px-4'>
											<article class='w-full p-4 border rounded-md mb-4'>
												<p class='pb-2 font-medium'>Great product!</p>
												<header class='flex flex-col pb-2 md:flex-row md:justify-between'>
													<div class='flex flex-col items-start'>
														<span class='flex items-center pr-2 text-xs text-neutral-500'>
															<SfRating
																size='xs'
																value={5}
																ariaLabel={`5 out of 5`}
															/>
															28/04/2023
														</span>
													</div>
													<div class='flex items-end'>
														<p class='flex items-center text-xs truncate text-primary-700'>
															<span class='mr-2 text-xs text-neutral-500'>
																John Doe
															</span>
															<svg
																viewBox='0 0 24 24'
																data-testid='check'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-4 h-4 mr-1'
															>
																<path d='M4.535 12.705 8 16.17l9.885-9.875a.997.997 0 0 1 1.41 1.41L8.707 18.293a1 1 0 0 1-1.414 0L3.12 14.12a1 1 0 0 1 1.415-1.415Z'></path>
															</svg>{' '}
															Verified purchase
														</p>
													</div>
												</header>
												<div class='pb-2 text-sm text-neutral-900'>
													I recently purchased a pair of sneakers and I am
													thoroughly impressed with their quality and comfort.
													The design is sleek and modern, and the shoes are
													available in a variety of colors to suit anyone's
													style preferences. The upper is made of a breathable
													and durable material that allows my feet to stay cool
													and dry during long walks or runs. The sole is also
													very comfortable and provides great sup...
												</div>
												<button
													type='button'
													class='inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800'
												>
													Read more
												</button>
												<footer class='flex items-center justify-between'>
													<div class='text-sm text-neutral-500'>
														<button
															type='button'
															class='mr-6 hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-up'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M7 22V9l6-5.95c.25-.25.546-.396.887-.438a1.66 1.66 0 0 1 .988.188c.317.167.55.4.7.7.15.3.183.609.1.925L14.55 9H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.334-.4.617-.75.85-.35.234-.717.35-1.1.35H7ZM9 9.85V20h9l3-7v-2h-9l1.35-5.5L9 9.85ZM4 22c-.55 0-1.02-.195-1.412-.587A1.927 1.927 0 0 1 2 20v-9c0-.55.196-1.02.588-1.413A1.925 1.925 0 0 1 4 9h3v2H4v9h3v2H4Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																6
															</span>
														</button>
														<button
															type='button'
															class='hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-down'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M3 16c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3h11v13l-6 5.95c-.25.25-.546.396-.887.437a1.646 1.646 0 0 1-.988-.187 1.58 1.58 0 0 1-.7-.7 1.28 1.28 0 0 1-.1-.925L9.45 16H3Zm12-.85V5H6l-3 7v2h9l-1.35 5.5L15 15.15ZM20 3c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v9c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 20 16h-3v-2h3V5h-3V3h3Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																2
															</span>
														</button>
													</div>
													<button
														class='px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800'
														type='button'
													>
														Report Abuse
													</button>
												</footer>
											</article>
											<article class='w-full p-4 border rounded-md mb-4'>
												<p class='pb-2 font-medium'>Great product!</p>
												<header class='flex flex-col pb-2 md:flex-row md:justify-between'>
													<div class='flex flex-col items-start'>
														<span class='flex items-center pr-2 text-xs text-neutral-500'>
															<SfRating
																size='xs'
																value={4}
																ariaLabel={`4 out of 5`}
															/>
															04/05/2024
														</span>
													</div>
													<div class='flex items-end'>
														<p class='flex items-center text-xs truncate text-primary-700'>
															<span class='mr-2 text-xs text-neutral-500'>
																John Doe
															</span>
															<svg
																viewBox='0 0 24 24'
																data-testid='check'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-4 h-4 mr-1'
															>
																<path d='M4.535 12.705 8 16.17l9.885-9.875a.997.997 0 0 1 1.41 1.41L8.707 18.293a1 1 0 0 1-1.414 0L3.12 14.12a1 1 0 0 1 1.415-1.415Z'></path>
															</svg>{' '}
															Verified purchase
														</p>
													</div>
												</header>
												<div class='pb-2 text-sm text-neutral-900'>
													I recently purchased a pair of sneakers and I am
													thoroughly impressed with their quality and comfort.
													The design is sleek and modern, and the shoes are
													available in a variety of colors to suit anyone's
													style preferences. The upper is made of a breathable
													and durable material that allows my feet to stay cool
													and dry during long walks or runs. The sole is also
													very comfortable and provides great sup...
												</div>
												<button
													type='button'
													class='inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800'
												>
													Read more
												</button>
												<footer class='flex items-center justify-between'>
													<div class='text-sm text-neutral-500'>
														<button
															type='button'
															class='mr-6 hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-up'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M7 22V9l6-5.95c.25-.25.546-.396.887-.438a1.66 1.66 0 0 1 .988.188c.317.167.55.4.7.7.15.3.183.609.1.925L14.55 9H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.334-.4.617-.75.85-.35.234-.717.35-1.1.35H7ZM9 9.85V20h9l3-7v-2h-9l1.35-5.5L9 9.85ZM4 22c-.55 0-1.02-.195-1.412-.587A1.927 1.927 0 0 1 2 20v-9c0-.55.196-1.02.588-1.413A1.925 1.925 0 0 1 4 9h3v2H4v9h3v2H4Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																6
															</span>
														</button>
														<button
															type='button'
															class='hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-down'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M3 16c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3h11v13l-6 5.95c-.25.25-.546.396-.887.437a1.646 1.646 0 0 1-.988-.187 1.58 1.58 0 0 1-.7-.7 1.28 1.28 0 0 1-.1-.925L9.45 16H3Zm12-.85V5H6l-3 7v2h9l-1.35 5.5L15 15.15ZM20 3c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v9c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 20 16h-3v-2h3V5h-3V3h3Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																2
															</span>
														</button>
													</div>
													<button
														class='px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800'
														type='button'
													>
														Report Abuse
													</button>
												</footer>
											</article>
											<article class='w-full p-4 border rounded-md mb-4'>
												<p class='pb-2 font-medium'>Great product!</p>
												<header class='flex flex-col pb-2 md:flex-row md:justify-between'>
													<div class='flex flex-col items-start'>
														<span class='flex items-center pr-2 text-xs text-neutral-500'>
															<SfRating
																size='xs'
																value={3}
																ariaLabel={`3 out of 5`}
															/>
															12/05/2023
														</span>
													</div>
													<div class='flex items-end'>
														<p class='flex items-center text-xs truncate text-primary-700'>
															<span class='mr-2 text-xs text-neutral-500'>
																John Doe
															</span>
															<svg
																viewBox='0 0 24 24'
																data-testid='check'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-4 h-4 mr-1'
															>
																<path d='M4.535 12.705 8 16.17l9.885-9.875a.997.997 0 0 1 1.41 1.41L8.707 18.293a1 1 0 0 1-1.414 0L3.12 14.12a1 1 0 0 1 1.415-1.415Z'></path>
															</svg>{' '}
															Verified purchase
														</p>
													</div>
												</header>
												<div class='pb-2 text-sm text-neutral-900'>
													I recently purchased a pair of sneakers and I am
													thoroughly impressed with their quality and comfort.
													The design is sleek and modern, and the shoes are
													available in a variety of colors to suit anyone's
													style preferences. The upper is made of a breathable
													and durable material that allows my feet to stay cool
													and dry during long walks or runs. The sole is also
													very comfortable and provides great sup...
												</div>
												<button
													type='button'
													class='inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800'
												>
													Read more
												</button>
												<footer class='flex items-center justify-between'>
													<div class='text-sm text-neutral-500'>
														<button
															type='button'
															class='mr-6 hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-up'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M7 22V9l6-5.95c.25-.25.546-.396.887-.438a1.66 1.66 0 0 1 .988.188c.317.167.55.4.7.7.15.3.183.609.1.925L14.55 9H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.334-.4.617-.75.85-.35.234-.717.35-1.1.35H7ZM9 9.85V20h9l3-7v-2h-9l1.35-5.5L9 9.85ZM4 22c-.55 0-1.02-.195-1.412-.587A1.927 1.927 0 0 1 2 20v-9c0-.55.196-1.02.588-1.413A1.925 1.925 0 0 1 4 9h3v2H4v9h3v2H4Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																6
															</span>
														</button>
														<button
															type='button'
															class='hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-down'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M3 16c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3h11v13l-6 5.95c-.25.25-.546.396-.887.437a1.646 1.646 0 0 1-.988-.187 1.58 1.58 0 0 1-.7-.7 1.28 1.28 0 0 1-.1-.925L9.45 16H3Zm12-.85V5H6l-3 7v2h9l-1.35 5.5L15 15.15ZM20 3c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v9c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 20 16h-3v-2h3V5h-3V3h3Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																2
															</span>
														</button>
													</div>
													<button
														class='px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800'
														type='button'
													>
														Report Abuse
													</button>
												</footer>
											</article>
											<article class='w-full p-4 border rounded-md mb-4'>
												<p class='pb-2 font-medium'>Great product!</p>
												<header class='flex flex-col pb-2 md:flex-row md:justify-between'>
													<div class='flex flex-col items-start'>
														<span class='flex items-center pr-2 text-xs text-neutral-500'>
															<SfRating
																size='xs'
																value={4}
																ariaLabel={`4 out of 5`}
															/>
															23/05/2023
														</span>
													</div>
													<div class='flex items-end'>
														<p class='flex items-center text-xs truncate text-primary-700'>
															<span class='mr-2 text-xs text-neutral-500'>
																John Doe
															</span>
															<svg
																viewBox='0 0 24 24'
																data-testid='check'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-4 h-4 mr-1'
															>
																<path d='M4.535 12.705 8 16.17l9.885-9.875a.997.997 0 0 1 1.41 1.41L8.707 18.293a1 1 0 0 1-1.414 0L3.12 14.12a1 1 0 0 1 1.415-1.415Z'></path>
															</svg>{' '}
															Verified purchase
														</p>
													</div>
												</header>
												<div class='pb-2 text-sm text-neutral-900'>
													I recently purchased a pair of sneakers and I am
													thoroughly impressed with their quality and comfort.
													The design is sleek and modern, and the shoes are
													available in a variety of colors to suit anyone's
													style preferences. The upper is made of a breathable
													and durable material that allows my feet to stay cool
													and dry during long walks or runs. The sole is also
													very comfortable and provides great sup...
												</div>
												<button
													type='button'
													class='inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800'
												>
													Read more
												</button>
												<footer class='flex items-center justify-between'>
													<div class='text-sm text-neutral-500'>
														<button
															type='button'
															class='mr-6 hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-up'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M7 22V9l6-5.95c.25-.25.546-.396.887-.438a1.66 1.66 0 0 1 .988.188c.317.167.55.4.7.7.15.3.183.609.1.925L14.55 9H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.334-.4.617-.75.85-.35.234-.717.35-1.1.35H7ZM9 9.85V20h9l3-7v-2h-9l1.35-5.5L9 9.85ZM4 22c-.55 0-1.02-.195-1.412-.587A1.927 1.927 0 0 1 2 20v-9c0-.55.196-1.02.588-1.413A1.925 1.925 0 0 1 4 9h3v2H4v9h3v2H4Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																6
															</span>
														</button>
														<button
															type='button'
															class='hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-down'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M3 16c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3h11v13l-6 5.95c-.25.25-.546.396-.887.437a1.646 1.646 0 0 1-.988-.187 1.58 1.58 0 0 1-.7-.7 1.28 1.28 0 0 1-.1-.925L9.45 16H3Zm12-.85V5H6l-3 7v2h9l-1.35 5.5L15 15.15ZM20 3c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v9c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 20 16h-3v-2h3V5h-3V3h3Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																2
															</span>
														</button>
													</div>
													<button
														class='px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800'
														type='button'
													>
														Report Abuse
													</button>
												</footer>
											</article>
											<article class='w-full p-4 border rounded-md mb-4'>
												<p class='pb-2 font-medium'>Great product!</p>
												<header class='flex flex-col pb-2 md:flex-row md:justify-between'>
													<div class='flex flex-col items-start'>
														<span class='flex items-center pr-2 text-xs text-neutral-500'>
															<SfRating
																size='xs'
																value={3}
																ariaLabel={`3 out of 5`}
															/>
															01/06/2023
														</span>
													</div>
													<div class='flex items-end'>
														<p class='flex items-center text-xs truncate text-primary-700'>
															<span class='mr-2 text-xs text-neutral-500'>
																John Doe
															</span>
															<svg
																viewBox='0 0 24 24'
																data-testid='check'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-4 h-4 mr-1'
															>
																<path d='M4.535 12.705 8 16.17l9.885-9.875a.997.997 0 0 1 1.41 1.41L8.707 18.293a1 1 0 0 1-1.414 0L3.12 14.12a1 1 0 0 1 1.415-1.415Z'></path>
															</svg>{' '}
															Verified purchase
														</p>
													</div>
												</header>
												<div class='pb-2 text-sm text-neutral-900'>
													I recently purchased a pair of sneakers and I am
													thoroughly impressed with their quality and comfort.
													The design is sleek and modern, and the shoes are
													available in a variety of colors to suit anyone's
													style preferences. The upper is made of a breathable
													and durable material that allows my feet to stay cool
													and dry during long walks or runs. The sole is also
													very comfortable and provides great sup...
												</div>
												<button
													type='button'
													class='inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800'
												>
													Read more
												</button>
												<footer class='flex items-center justify-between'>
													<div class='text-sm text-neutral-500'>
														<button
															type='button'
															class='mr-6 hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-up'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M7 22V9l6-5.95c.25-.25.546-.396.887-.438a1.66 1.66 0 0 1 .988.188c.317.167.55.4.7.7.15.3.183.609.1.925L14.55 9H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.334-.4.617-.75.85-.35.234-.717.35-1.1.35H7ZM9 9.85V20h9l3-7v-2h-9l1.35-5.5L9 9.85ZM4 22c-.55 0-1.02-.195-1.412-.587A1.927 1.927 0 0 1 2 20v-9c0-.55.196-1.02.588-1.413A1.925 1.925 0 0 1 4 9h3v2H4v9h3v2H4Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																6
															</span>
														</button>
														<button
															type='button'
															class='hover:text-primary-800'
														>
															<svg
																viewBox='0 0 24 24'
																data-testid='thumb-down'
																xmlns='http://www.w3.org/2000/svg'
																class='inline-block fill-current w-5 h-5 mr-2.5'
															>
																<path d='M3 16c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3h11v13l-6 5.95c-.25.25-.546.396-.887.437a1.646 1.646 0 0 1-.988-.187 1.58 1.58 0 0 1-.7-.7 1.28 1.28 0 0 1-.1-.925L9.45 16H3Zm12-.85V5H6l-3 7v2h9l-1.35 5.5L15 15.15ZM20 3c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v9c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 20 16h-3v-2h3V5h-3V3h3Z'></path>
															</svg>
															<span
																class="inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500 text-sm text-inherit"
																data-testid='counter'
															>
																2
															</span>
														</button>
													</div>
													<button
														class='px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800'
														type='button'
													>
														Report Abuse
													</button>
												</footer>
											</article>
										</div>
									</div>
								</details>
							</div>
						</section>
						<hr
							class='w-full h-px bg-neutral-200 mt-4 mb-2'
							data-testid='divider'
						/>
					</div>
					<section class='mx-4 mt-28 mb-20'>
						<p
							data-testid='recommended-products'
							class='my-4 typography-text-lg font-body'
						>
							Recommended with this product
						</p>
						<ProductSlider products={productSliderShuffeled()} />
					</section>
				</div>
			</main>
		</>
	);
});

export const head: DocumentHead = ({ resolveValue, url }) => {
	const product = resolveValue(useProductLoader);
	if (!product) {
		return generateDocumentHead();
	}
	return generateDocumentHead(
		url.href,
		product.name,
		product.description,
		product.primaryImage.url
	);
};
