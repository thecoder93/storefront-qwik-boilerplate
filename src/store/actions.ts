import { $ } from '@builder.io/qwik';
import type { Store } from '~/types/store';

export const actions = (store: Store) => ({
	updateCartWithProduct: $((id: string, quantity: number) => {
		const product = [...store.cart.products].find((p) => p.id === id);
		if (product) {
			product.quantity += quantity;
		} else {
			store.cart.products = [...store.cart.products, { id, quantity }];
		}
	}),
});
