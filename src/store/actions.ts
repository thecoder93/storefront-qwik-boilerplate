import { $, type PropFunction } from '@builder.io/qwik';
import type { Store } from '~/types/store';

export type Actions = {
	updateCartProduct: PropFunction<(id: number, quantity: number) => void>;
	removeProductFromCart: PropFunction<(id: number) => void>;
	placeOrder: PropFunction<() => void>;
	changeShippingCosts: PropFunction<(id: number) => void>;
	addPromo: PropFunction<(name: string) => void>;
	removePromo: PropFunction<(id: number) => void>;
};

export const actions = (store: Store) =>
	({
		updateCartProduct: $((id: number, quantity: number) => {
			const product = [...store.cart.products].find((p) => p.id === id);
			if (product) {
				product.quantity += quantity;
				store.cart.products = [...store.cart.products];
			} else {
				store.cart.products = [...store.cart.products, { id, quantity }];
			}
		}),
		removeProductFromCart: $((id: number) => {
			store.cart.products = store.cart.products.filter((p) => p.id !== id);
		}),
		placeOrder: $(() => {
			store.cart.products = [];
		}),
		changeShippingCosts: $((id: number) => {
			store.cart.shippingOption = id;
		}),
		addPromo: $((name: string) => {
			store.cart.promoCodes = [
				...store.cart.promoCodes,
				{
					id: store.cart.promoCodes.length,
					name,
					value: Math.random() > 0.5 ? 10 : 20,
				},
			];
		}),
		removePromo: $((id: number) => {
			store.cart.promoCodes = store.cart.promoCodes.filter((p) => p.id !== id);
		}),
	} satisfies Actions);
