export type Product = {
	id: string;
	slug: string;
	sku: string;
	name: string;
	description: string;
	rating: { average: number; count: number };
	price: {
		isDiscounted: boolean;
		regular: { currency: string; amount: number; precisionAmount: number };
		discounted: { currency: string; amount: number; precisionAmount: number };
	};
	image: { alt: string; url: string };
};
