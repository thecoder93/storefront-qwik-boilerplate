import type { Store } from '~/types/store';

export const getCartQuantity = (cart: Store['cart']) =>
	cart.products
		.map((item) => item.quantity)
		.reduce((total, quantity) => total + quantity, 0);

export const isCartEmpty = (cart: Store['cart']) => cart.products.length === 0;
