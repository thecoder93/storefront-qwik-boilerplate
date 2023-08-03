import type { PropFunction } from '@builder.io/qwik';

export type Store = {
	cart: Cart;
};

export type ReadonlyStore = Readonly<Store>;

type Cart = { products: Product[] };

type Product = {
	name: string;
	imageUrl: string;
};

export type Actions = {
	updateCartWithProduct: PropFunction<(name: string, imageUrl: string) => void>;
};
