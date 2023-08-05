import { component$, useComputed$, useSignal } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { SfAccordionItem, SfIconChevronLeft } from 'qwik-storefront-ui';
import { priceFilters } from '~/mocks';
import { formatPrice } from '~/shared/utils';

export const PriceFilter = component$(() => {
	const location = useLocation();
	const navigate = useNavigate();
	const accordionSig = useSignal(true);
	const selectedPriceSig = useComputed$(
		() => location.url.searchParams.get('price') || ''
	);

	return (
		<div class='flex flex-col gap-2'>
			<SfAccordionItem
				open={accordionSig.value}
				onToggle$={() => {
					accordionSig.value = !accordionSig.value;
				}}
			>
				<div class='flex justify-between p-2 mb-2'>
					<p class='mb-2 font-medium typography-headline-5'>Price</p>
					<SfIconChevronLeft
						class={`${accordionSig.value ? 'rotate-90' : '-rotate-90'}`}
					/>
				</div>
				<div q:slot='detail'>
					<ul class='flex flex-wrap gap-4 px-1.5'>
						{priceFilters.map((price) => (
							<li
								key={price}
								onClick$={() => {
									const url = new URL(location.url);
									if (url.searchParams.get('price') === price) {
										url.searchParams.delete('price');
									} else {
										url.searchParams.set('price', price.toString());
									}
									url.searchParams.set('page', '1');
									navigate(url.href);
								}}
							>
								<label
									class={`ring-1 ring-inset rounded-full inline-flex items-center transition duration-200 justify-center outline-offset-2 outline-secondary-600 focus-visible:outline cursor-pointer text-base py-2 gap-2 pl-2 pr-4
                ${
									selectedPriceSig.value === price
										? 'ring-2 ring-primary-700 bg-primary-700 text-white'
										: 'hover:ring-primary-200 ring-neutral-200'
								}`}
								>
									<span class='leading-4 pl-2'>
										From {formatPrice(parseInt(price, 10), 2)}
									</span>
								</label>
							</li>
						))}
					</ul>
				</div>
			</SfAccordionItem>
		</div>
	);
});
