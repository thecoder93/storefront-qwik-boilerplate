import { component$, useContext } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import { ACTIONS_CONTEXT, STORE_CONTEXT } from '~/shared/constants';

export const ShippingMethodSelector = component$(() => {
	const t = useTranslate();
	const store = useContext(STORE_CONTEXT);
	const actions = useContext(ACTIONS_CONTEXT);
	return (
		<div data-testid='shipping-method' class='md:px-4 my-6'>
			<div class='flex justify-between items-center'>
				<h3 class='text-neutral-900 text-lg font-bold'>
					{t('shippingMethod.heading')}
				</h3>
			</div>
			<div class='mt-4'>
				<ul class='grid gap-y-4 md:grid-cols-2 md:gap-x-4' role='radiogroup'>
					<label
						class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 px-4 py-2 border rounded-md items-start'
						data-testid='list-item'
						onClick$={() => {
							actions.changeShippingCosts(1);
						}}
					>
						<span class='flex flex-col w-full min-w-0'>
							<div class='flex gap-2'>
								<div
									class={{
										'h-5 w-5 border-2 p-[3px] bg-clip-content rounded-full appearance-none cursor-pointer focus-visible:outline focus-visible:outline-offset border-neutral-500 active:border-primary-900 hover:border-primary-700':
											true,
										'bg-primary-700 border-primary-700 hover:bg-primary-800 hover:border-primary-800 active:bg-primary-900 active:border-primary-900':
											store.cart.shippingOption === 1,
									}}
								/>
								<div>
									<p>Standard</p>
									<p class='text-xs text-neutral-500'>5 days</p>
								</div>
								<p class='ml-auto'>$5</p>
							</div>
						</span>
					</label>
					<label
						class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 px-4 py-2 border rounded-md items-start'
						data-testid='list-item'
						onClick$={() => {
							actions.changeShippingCosts(2);
						}}
					>
						<span class='flex flex-col w-full min-w-0'>
							<div class='flex gap-2'>
								<div
									class={{
										'h-5 w-5 border-2 p-[3px] bg-clip-content rounded-full appearance-none cursor-pointer focus-visible:outline focus-visible:outline-offset border-neutral-500 active:border-primary-900 hover:border-primary-700':
											true,
										'bg-primary-700 border-primary-700 hover:bg-primary-800 hover:border-primary-800 active:bg-primary-900 active:border-primary-900':
											store.cart.shippingOption === 2,
									}}
									onClick$={() => {
										actions.changeShippingCosts(2);
									}}
								/>
								<div>
									<p>Express</p>
									<p class='text-xs text-neutral-500'>tomorrow</p>
								</div>
								<p class='ml-auto'>$15</p>
							</div>
						</span>
					</label>
				</ul>
			</div>
		</div>
	);
});
