import { component$, useComputed$, useContext } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useTranslate } from 'qwik-speak';
import { CartProductCard } from '~/components/CartProductCard/CartProductCard';
import { EmptyCart } from '~/components/EmpyCart/EmpyCart';
import { OrderSummary } from '~/components/OrderSummary/OrderSummary';
import { products } from '~/mocks';
import { STORE_CONTEXT } from '~/shared/constants';
import { isCartEmpty } from '~/store/selectors';

export default component$(() => {
	const t = useTranslate();
	const store = useContext(STORE_CONTEXT);
	const isCartEmptySig = useComputed$(() => isCartEmpty(store.cart));
	return (
		<main data-testid='checkout-layout'>
			<div
				class='max-w-screen-3xl mx-auto md:px-6 lg:px-10'
				data-testid='narrow-container'
			>
				{isCartEmptySig.value ? (
					<div class='px-4 md:px-0 mb-20'>
						<EmptyCart />
					</div>
				) : (
					<div class='px-4 md:px-0 mb-20'>
						<div class='flex justify-between mt-8 mb-10'>
							<h1 class='font-bold typography-headline-3 md:typography-headline-2'>
								{t('myCart')}
							</h1>
							<Link
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
								{t('backToShopping')}
							</Link>
							<Link
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
								{t('backToShopping')}
							</Link>
						</div>
						<div
							class='md:grid md:grid-cols-12 md:gap-x-6'
							data-testid='cart-page-content'
						>
							<div class='col-span-7 mb-10 md:mb-0'>
								{store.cart.products.map(({ id, quantity }) => {
									const product = products.find((p) => p.id === id);
									return (
										product && (
											<CartProductCard
												key={id}
												product={product}
												quantity={quantity}
											/>
										)
									);
								})}
							</div>
							<OrderSummary>
								<Link
									class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full mb-4 md:mb-0'
									data-testid='button'
									href='/checkout'
								>
									{t('goToCheckout')}
								</Link>
							</OrderSummary>
						</div>
					</div>
				)}
			</div>
		</main>
	);
});
