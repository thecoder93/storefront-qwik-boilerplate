import type { RequestHandler } from '@builder.io/qwik-city';
import { products } from '~/mocks';

export const onGet: RequestHandler = async ({ query, json }) => {
	const PAGE_SIZE = 8;
	const page = parseInt(query.get('page') || '1', PAGE_SIZE);
	const totalPages = Math.ceil(products.length / PAGE_SIZE);
	json(200, {
		products: products.slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page),
		totalPages,
	});
};
