import { component$, useComputed$, useContext } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { SfBadge, SfButton, SfIconShoppingCart } from 'qwik-storefront-ui';
import { STORE_CONTEXT } from '~/shared/constants';
import { getCartQuantity } from '~/store/selectors';

export const CartIcon = component$(() => {
	const store = useContext(STORE_CONTEXT);
	const cartQuantitySig = useComputed$(() => getCartQuantity(store.cart));
	return (
		<Link
			data-testid='button'
			aria-label='cart icon'
			href='/cart'
		>

			<SfButton class="relative flex flex-row flex-nowrap ml-auto mr-[80px] md:mr-[60px] 2xl:mr-[20px]" square variant="tertiary">
				<SfIconShoppingCart />
				<SfBadge
					content={cartQuantitySig.value}
					max={99}
				/>
			</SfButton>
		</Link>
	);
});
