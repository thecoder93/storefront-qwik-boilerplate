import { $, component$, useSignal } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import {
	SfAccordionItem,
	SfChip,
	SfCounter,
	SfIconChevronLeft,
	SfListItem,
	SfThumbnail,
} from 'qwik-storefront-ui';
import type { FilterProps } from './types';

export const Filter = component$<FilterProps>(
	({ facet: { label, values }, selected, type, onChange }) => {
		const t = useTranslate();
		const isOpenSig = useSignal(false);

		return (
			<SfAccordionItem
				open={isOpenSig.value}
				onToggle$={() => {
					isOpenSig.value = !isOpenSig.value;
				}}
			>
				<div class='flex justify-between p-2 mb-2'>
					<p class='mb-2 font-medium typography-headline-5'>{t(label)}</p>
					<SfIconChevronLeft
						class={[
							'text-neutral-500',
							`${isOpenSig.value ? 'rotate-90' : '-rotate-90'}`,
						]}
					/>
				</div>
				<div q:slot='detail'>
					{type === 'size' && (
						<ul class='flex flex-wrap gap-4 px-1.5'>
							{values.map(({ value }) => (
								<li key={value}>
									<SfChip
										key={value}
										size='sm'
										inputProps={{
											checked: selected.includes(value),
											onChange$: $(() => onChange(value)),
										}}
									>
										<span class='leading-4'>{value}</span>
									</SfChip>
								</li>
							))}
						</ul>
					)}
					{type === 'color' &&
						values.map(({ label, value, productCount }) => (
							<SfListItem
								key={value}
								as='label'
								size='sm'
								class={`px-1.5 bg-transparent hover:bg-transparent ${
									selected.includes(value) ? 'font-medium' : ''
								}`}
								selected={selected.includes(value)}
							>
								<div q:slot='prefix'>
									<>
										<input
											value={value}
											checked={selected.includes(value)}
											class='appearance-none peer'
											type='checkbox'
											onChange$={() => onChange(value)}
										/>
										<span class='inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline'>
											<SfThumbnail
												size='sm'
												class=''
												// style={{ backgroundColor: value }}
											/>
										</span>
									</>
								</div>
								<p>
									<span class='mr-2 text-sm'>{label}</span>
									<SfCounter size='sm'>{productCount}</SfCounter>
								</p>
							</SfListItem>
						))}
				</div>
			</SfAccordionItem>
		);
	}
);
