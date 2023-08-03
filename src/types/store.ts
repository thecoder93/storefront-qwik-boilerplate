import type { PropFunction } from '@builder.io/qwik';

export type Store = {
	cart: Cart;
};

export type ReadonlyStore = Readonly<Store>;

type Cart = { products: Product[] };

type Product = {
	id: string;
	quantity: number;
};

export type Actions = {
	updateCartWithProduct: PropFunction<(id: string, quantity: number) => void>;
};
