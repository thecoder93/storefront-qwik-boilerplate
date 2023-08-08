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
			(productWithQty.product?.price.discounted.amount || 0) *
				productWithQty.quantity,
		0
	);
	return formatPrice(total, 2);
};

export const getCartRegularTotal = (cart: Store['cart']) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			(productWithQty.product?.price.regular.amount || 0) *
				productWithQty.quantity,
		0
	);
	return formatPrice(total, 2);
};

export const getCartSavingTotal = (cart: Store['cart']) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			((productWithQty.product?.price.regular.amount || 0) -
				(productWithQty.product?.price.discounted.amount || 0)) *
				productWithQty.quantity,
		0
	);
	console.log(
		'getPromoTotal(cart)',
		total,
		getPromoTotal(cart),
		formatPrice(total + getPromoTotal(cart), 2)
	);
	return formatPrice(total, 2);
};

export const getCartSavingTotalWithPromo = (cart: Store['cart']) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			((productWithQty.product?.price.regular.amount || 0) -
				(productWithQty.product?.price.discounted.amount || 0)) *
				productWithQty.quantity,
		0
	);
	console.log(
		'getPromoTotal(cart)',
		total,
		getPromoTotal(cart),
		formatPrice(total + getPromoTotal(cart), 2)
	);
	return formatPrice(total + getPromoTotal(cart), 2);
};

const getPromoTotal = (cart: Store['cart']) =>
	cart.promoCodes.reduce((total, promo) => total + promo.value, 0);

export const getCartTotal = (cart: Store['cart']) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			(productWithQty.product?.price.discounted.amount || 0) *
				productWithQty.quantity,
		0
	);
	return formatPrice(Math.max(total - getPromoTotal(cart), 0), 2);
};

export const getCartTotalWithDelivery = (cart: Store['cart']) => {
	const total = cartProductsWithQuantity(cart).reduce(
		(total, productWithQty) =>
			total +
			(productWithQty.product?.price.discounted.amount || 0) *
				productWithQty.quantity,
		0
	);
	const price =
		total - getPromoTotal(cart) + (cart.shippingOption === 1 ? 5 : 15);
	return formatPrice(Math.max(price, 0), 2);
};

const cartProductsWithQuantity = (cart: Store['cart']) =>
	cart.products.map((cartProduct) => ({
		product: products.find((p) => p.id === cartProduct.id),
		quantity: cartProduct.quantity,
	}));

export const getShippingCosts = (cart: Store['cart']) =>
	cart.shippingOption === 1 ? formatPrice(5, 2) : formatPrice(15, 2);

export const getCartProductQuantity = (cart: Store['cart'], id: number) =>
	cart.products.find((p) => p.id === id)?.quantity || 0;
