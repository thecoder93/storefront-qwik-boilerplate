import type { RequestHandler } from '@builder.io/qwik-city';
import { products } from '~/mocks';

export const onGet: RequestHandler = async ({ json }) => {
	const response = products
		.sort(() => (Math.random() > 0.5 ? 1 : -1))
		.slice(0, 14);
	json(200, response);
};
