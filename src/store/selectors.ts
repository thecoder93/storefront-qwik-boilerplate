import { products } from '~/mocks';
import { formatPrice } from '~/shared/utils';
import type { Store } from '~/types/store';

export const getCartQuantity = (cart: Store['cart']) =>
	cart.products.reduce((total, item) => total + item.quantity, 0);

export const isCartEmpty = (cart: Store['cart']) => cart.products.length === 0;

export const getCartDiscountendTotal = (cart: Store['cart']) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			productWithQty.product!.price.discounted.amount * productWithQty.quantity,
		0
	);
	return formatPrice(total, 2);
};

export const getCartRegularTotal = (cart: Store['cart']) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			productWithQty.product!.price.regular.amount * productWithQty.quantity,
		0
	);
	return formatPrice(total, 2);
};

export const getCartSavingTotal = (cart: Store['cart']) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			(productWithQty.product!.price.regular.amount -
				productWithQty.product!.price.discounted.amount) *
				productWithQty.quantity,
		0
	);
	return formatPrice(total, 2);
};

export const getCartTotal = (
	cart: Store['cart'],
	promo: number,
	tax: number
) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			productWithQty.product!.price.discounted.amount * productWithQty.quantity,
		0
	);
	return formatPrice(total - promo + tax, 2);
};

const cartProductsWithQuantity = (cart: Store['cart']) =>
	cart.products.map((cartProduct) => ({
		product: products.find((p) => p.id === cartProduct.id),
		quantity: cartProduct.quantity,
	}));
