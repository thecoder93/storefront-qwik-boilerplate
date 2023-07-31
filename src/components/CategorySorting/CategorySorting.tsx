import { component$ } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import { SfSelect } from 'qwik-storefront-ui';
import { sortingOptions } from '~/mocks';

export const CategorySorting = component$(() => {
	const t = useTranslate();

	return (
		<>
			<span
				class='block py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md'
				data-testid='category-sorting'
			>
				{t('sortBy')}
			</span>
			<div class='px-2 mb-6'>
				<SfSelect aria-label={t('sortBy')}>
					{sortingOptions.map((option) => (
						<option key={option.value} value={option.value}>
							{t(`sortType.${option.label}`)}
						</option>
					))}
				</SfSelect>
			</div>
		</>
	);
});
