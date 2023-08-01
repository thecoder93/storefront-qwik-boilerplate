import { component$ } from '@builder.io/qwik';
import { Image } from 'qwik-image';

export default component$(() => {
	return (
		<main data-testid='checkout-layout'>
			<div
				class='max-w-screen-3xl mx-auto md:px-6 lg:px-10'
				data-testid='narrow-container'
			>
				<div class='px-4 md:px-0 mb-20'>
					<div class='flex justify-between mt-8 mb-10'>
						<h1 class='font-bold typography-headline-3 md:typography-headline-2'>
							My Cart
						</h1>
						<a
							class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent flex md:hidden whitespace-nowrap'
							data-testid='button'
							href='/category'
						>
							<svg
								viewBox='0 0 24 24'
								data-testid='arrow-back'
								xmlns='http://www.w3.org/2000/svg'
								class='inline-block fill-current w-6 h-6 undefined'
							>
								<path d='m10.875 19.3-6.6-6.6a.883.883 0 0 1-.213-.325A1.115 1.115 0 0 1 4 12c0-.133.02-.258.062-.375a.883.883 0 0 1 .213-.325l6.6-6.6a.978.978 0 0 1 .687-.288.933.933 0 0 1 .713.288c.2.183.304.412.313.687a.933.933 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 0 1-.288.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z'></path>
							</svg>
							Back To Shopping{' '}
						</a>
						<a
							class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent hidden md:flex'
							data-testid='button'
							href='/category'
						>
							<svg
								viewBox='0 0 24 24'
								data-testid='arrow-back'
								xmlns='http://www.w3.org/2000/svg'
								class='inline-block fill-current w-6 h-6 undefined'
							>
								<path d='m10.875 19.3-6.6-6.6a.883.883 0 0 1-.213-.325A1.115 1.115 0 0 1 4 12c0-.133.02-.258.062-.375a.883.883 0 0 1 .213-.325l6.6-6.6a.978.978 0 0 1 .687-.288.933.933 0 0 1 .713.288c.2.183.304.412.313.687a.933.933 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 0 1-.288.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z'></path>
							</svg>
							Back To Shopping{' '}
						</a>
					</div>
					<div
						class='md:grid md:grid-cols-12 md:gap-x-6'
						data-testid='cart-page-content'
					>
						<div class='col-span-7 mb-10 md:mb-0'>
							<div
								class='relative flex first:border-t border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] p-4 last:mb-0'
								data-testid='cart-product-card'
							>
								<div class='relative overflow-hidden rounded-md w-[100px] sm:w-[176px]'>
									<a
										class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900'
										data-testid='link'
										href='/product/athletic-mens-walking-sneakers'
									>
										<Image
											loading='eager'
											layout='constrained'
											objectFit='fill'
											width={300}
											height={300}
											data-testid='image-slot'
											class='object-cover rounded-md aspect-square w-full h-full'
											src='/images/product.webp'
											alt='Athletic mens walking sneakers'
										/>
									</a>
									<div class='absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 text-xs font-medium'>
										<svg
											viewBox='0 0 24 24'
											data-testid='sell'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-4 h-4 mr-1'
										>
											<path d='M14.25 21.4c-.383.383-.858.575-1.425.575-.567 0-1.042-.192-1.425-.575l-8.8-8.8a2.069 2.069 0 0 1-.6-1.45V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h7.15c.283 0 .55.054.8.162.25.109.467.255.65.438l8.8 8.825c.383.383.575.854.575 1.412a1.92 1.92 0 0 1-.575 1.413l-7.15 7.15ZM6.5 8c.417 0 .77-.146 1.062-.438C7.854 7.271 8 6.917 8 6.5c0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 6.5 5c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 5 6.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Z'></path>
										</svg>
										Sale
									</div>
								</div>
								<div class='flex flex-col pl-4 min-w-[180px] flex-1'>
									<a
										class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 no-underline typography-text-sm sm:typography-text-lg'
										data-testid='link'
										href='/product/athletic-mens-walking-sneakers'
									>
										Athletic mens walking sneakers
									</a>
									<div class='my-2 sm:mb-0'>
										<ul class='text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700'>
											<li>
												<span class='mr-1'>size:</span>
												<span class='font-medium'>40</span>
											</li>
											<li>
												<span class='mr-1'>color:</span>
												<span class='font-medium'>White</span>
											</li>
										</ul>
									</div>
									<div class='items-start sm:items-center sm:mt-auto flex flex-col sm:flex-row'>
										<span class='text-secondary-700 sm:order-1 font-bold typography-text-sm sm:typography-text-lg sm:ml-auto'>
											$89.95{' '}
											<span class='text-neutral-500 ml-2 line-through typography-text-xs sm:typography-text-sm font-normal'>
												$100.99
											</span>
										</span>
										<div
											data-testid='quantitySelector'
											class='inline-flex flex-col items-center mt-4 sm:mt-0'
										>
											<div class='flex border border-neutral-300 rounded-md h-full w-full'>
												<button
													type='button'
													class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed p-2 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent rounded-r-none'
													data-testid='quantitySelectorDecreaseButton'
													aria-controls=':rf:'
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
													id=':rf:'
													type='number'
													role='spinbutton'
													class='appearance-none flex-1 mx-2 w-8 text-center bg-transparent font-medium [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:display-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:display-none [&amp;::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm'
													min='1'
													max='10'
													aria-label='Quantity Selector'
													value='1'
												/>
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
														class='inline-block fill-current w-6 h-6 undefined'
													>
														<path d='M12 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 18v-5H6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h5V6c0-.283.096-.521.288-.713A.967.967 0 0 1 12 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6v5h5a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 13h-5v5a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 19Z'></path>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							class='md:shadow-lg md:rounded-md md:border md:border-neutral-100 col-span-5 md:sticky md:top-20 h-fit'
							data-testid='order-summary'
						>
							<div class='flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4'>
								<p class='typography-headline-4 font-bold md:typography-headline-3'>
									Order Summary
								</p>
								<p
									class='typography-text-base font-semibold'
									data-testid='total-in-cart'
								>
									(Items: 1)
								</p>
							</div>
							<div class='px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0'>
								<div class='flex justify-between typography-text-base pb-4'>
									<div class='flex flex-col grow pr-2'>
										<p>Items subtotal</p>
										<p class='ml-auto typography-text-xs text-neutral-500'>
											Original price
										</p>
										<p class='ml-auto typography-text-xs text-secondary-700'>
											Savings
										</p>
										<p class='my-2'>Delivery</p>
										<p>Estimated Sales Tax</p>
									</div>
									<div class='flex flex-col text-right'>
										<p data-testid='special-price'>$89.95</p>
										<p class='typography-text-xs text-neutral-500'>$100.99</p>
										<p class='typography-text-xs text-secondary-700'>$20</p>
										<p class='my-2'>$0</p>
										<p>$1.38</p>
									</div>
								</div>
								<div class='flex items-center py-4 border-t border-neutral-200'>
									<p>Promo Code</p>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent ml-auto mr-2'
										data-testid='button'
									>
										Remove
									</button>
									<p>$20</p>
								</div>
								<div class='flex gap-x-2 py-4 border-y border-neutral-200 mb-4'>
									<div
										class='flex items-center bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2 ring-1 ring-neutral-200 py-2 px-4 grow'
										data-testid='input'
									>
										<input
											class='min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent'
											type='text'
											data-testid='input-field'
											placeholder='Enter promo code'
										/>
									</div>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50'
										data-testid='button'
									>
										Apply
									</button>
								</div>
								<div class='px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4'>
									<div class='inline-flex items-center justify-center rounded-md font-normal text-secondary-800 bg-secondary-100 text-sm p-1.5 gap-1.5 w-full'>
										You are saving $20 on your order today!
									</div>
								</div>
								<div class='flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4'>
									<p>Total</p>
									<p data-testid='total'>$89.95</p>
								</div>
								<hr
									class='w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto'
									data-testid='divider'
								/>
								<a
									class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full mb-4 md:mb-0'
									data-testid='button'
									href='/checkout'
								>
									Go to checkout
								</a>
								<hr
									class='w-full h-px bg-neutral-200 my-10 md:hidden -mx-4 w-auto'
									data-testid='divider'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
});
