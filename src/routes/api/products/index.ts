import type { RequestHandler } from '@builder.io/qwik-city';
import { products } from '~/mocks';

export const onGet: RequestHandler = async ({ query, json }) => {
	const PAGE_SIZE = 9;
	const page = parseInt(query.get('page') || '1');
	const price = parseInt(query.get('price') || '-1');
	const search = query.get('search') || '';
	const _products = products
		.sort((a, b) => a.id - b.id)
		.filter(
			(p) => !search || p.name.toLowerCase().includes(search.toLowerCase())
		)
		.filter((p) => price === -1 || p.price.discounted.amount >= price);
	const totalPages = Math.ceil(_products.length / PAGE_SIZE);
	json(200, {
		products: _products.slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page),
		totalPages,
		totalProducts: _products.length,
	});
};
