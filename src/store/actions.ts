import { $ } from '@builder.io/qwik';
import type { Store } from '~/types/store';

export const actions = (store: Store) => ({
	updateCartWithProduct: $((name: string, imageUrl: string) => {
		store.cart.products = [...store.cart.products, { name, imageUrl }];
	}),
});
