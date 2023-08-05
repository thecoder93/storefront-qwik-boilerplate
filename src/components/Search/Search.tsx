import { $, component$, useComputed$, useSignal } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { SfIconSearch } from 'qwik-storefront-ui';

export const Search = component$(() => {
	const location = useLocation();
	const navigate = useNavigate();
	const searchSig = useSignal<string>('');
	useComputed$(() => {
		searchSig.value = location.url.searchParams.get('search') || '';
	});

	const onChange = $(() => {
		navigate(`/category/?search=${searchSig.value}`);
	});

	return (
		<div class='relative hidden md:block flex-1'>
			<div
				data-testid='input'
				class='flex items-center bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2 py-2 px-4 ring-1 ring-neutral-200'
			>
				<SfIconSearch class='mr-1 cursor-pointer' onClick$={onChange} />
				<input
					type='text'
					data-testid='input-field'
					value={searchSig.value}
					aria-label='Search'
					placeholder='Search'
					class='min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent'
					onChange$={(event) => {
						searchSig.value = event.target.value;
					}}
					onKeyUp$={(event) => {
						if (event.key === 'Enter') {
							onChange();
						}
					}}
				/>
			</div>
		</div>
	);
});
