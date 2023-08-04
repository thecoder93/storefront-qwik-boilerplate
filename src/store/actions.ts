import { $, type PropFunction } from '@builder.io/qwik';
import type { Store } from '~/types/store';

export type Actions = {
	updateCartProduct: PropFunction<(id: string, quantity: number) => void>;
	removeProductFromCart: PropFunction<(id: string) => void>;
};

export const actions = (store: Store) =>
	({
		updateCartProduct: $((id: string, quantity: number) => {
			const product = [...store.cart.products].find((p) => p.id === id);
			if (product) {
				product.quantity += quantity;
				store.cart.products = [...store.cart.products];
			} else {
				store.cart.products = [...store.cart.products, { id, quantity }];
			}
		}),
		removeProductFromCart: $((id: string) => {
			store.cart.products = store.cart.products.filter((p) => p.id !== id);
		}),
	} satisfies Actions);
