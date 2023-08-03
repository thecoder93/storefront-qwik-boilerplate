import type { RequestHandler } from '@builder.io/qwik-city';
import { products } from '~/mocks';

export const onGet: RequestHandler = async ({ params, json, status, exit }) => {
	const product = products.find((p) => p.slug === params.slug);
	if (!product) {
		status(404);
		throw exit();
	}
	json(200, product);
};
