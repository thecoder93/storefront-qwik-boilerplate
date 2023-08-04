export type Product = {
	id: string;
	slug: string;
	name: string;
	sku: string;
	rating: { average: number; count: number };
	price: {
		isDiscounted: boolean;
		regularPrice: {
			currency: string;
			amount: number;
			precisionAmount: number;
		};
		value: { currency: string; amount: number; precisionAmount: number };
	};
	primaryImage: {
		alt: string;
		url: string;
	};
	description: string;
};
