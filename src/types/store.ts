export type Store = {
	cart: Cart;
};

export type ReadonlyStore = Readonly<Store>;

type Cart = { products: Product[] };

type Product = {
	id: string;
	quantity: number;
};
