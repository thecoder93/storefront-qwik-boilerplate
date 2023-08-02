export type Product = {
    products: {
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
                precisionAmount: string;
            };
            value: { currency: string; amount: number; precisionAmount: string };
        };
        primaryImage: {
            alt: string;
            url: string;
        };
        description: string;
    }[];
}; 