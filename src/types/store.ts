export type Store = {
	cart: Cart;
};

export type ReadonlyStore = Readonly<Store>;

type Cart = {
	products: Product[];
	shippingOption: number;
	promoCodes: { id: number; name: string; value: number }[];
};

type Product = {
	id: number;
	quantity: number;
};
