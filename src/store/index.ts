import {
	useContextProvider,
	useStore,
	useVisibleTask$,
} from '@builder.io/qwik';
import {
	ACTIONS_CONTEXT,
	LOCAL_STORAGE_CART_KEY,
	STORE_CONTEXT,
} from '~/shared/constants';
import type { Actions, Store } from '~/types/store';
import { actions as appActions } from './actions';

const initialData: Store = { cart: { products: [] } };

export const useAppStore = () => {
	const store = useStore<Store>(initialData);
	useContextProvider(STORE_CONTEXT, store);

	const actions = useStore<Actions>(appActions(store));
	useContextProvider(ACTIONS_CONTEXT, actions);

	useVisibleTask$(async ({ track }) => {
		track(() => store.cart.products);

		const localStorageStore = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
		if (store.cart.products.length === 0 && localStorageStore) {
			store.cart = JSON.parse(localStorageStore);
		} else {
			localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(store.cart));
		}
	});

	return store;
};
