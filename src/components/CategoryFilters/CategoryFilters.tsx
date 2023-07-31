import { $, component$, useSignal } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import { Filter } from './Filter';
import type { CategoryFiltersProps } from './types';

export const CategoryFilters = component$<CategoryFiltersProps>(
	({ facets }) => {
		const t = useTranslate();
		const selectedFiltersSig = useSignal<string[]>([]);
		const colorFacets = facets.find(({ name }) => name === 'color');
		const sizeFacets = facets.find(({ name }) => name === 'size');

		const handleFilterSelection = $((currentValue: string) => {
			if (selectedFiltersSig.value.includes(currentValue)) {
				selectedFiltersSig.value = selectedFiltersSig.value.filter(
					(value) => value !== currentValue
				);
			} else {
				selectedFiltersSig.value = [...selectedFiltersSig.value, currentValue];
			}
		});

		return (
			<>
				<span
					class='block py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md'
					data-testid='category-filters'
				>
					{t('filters')}
				</span>
				<div class='flex flex-col gap-2'>
					{sizeFacets && (
						<Filter
							facet={sizeFacets}
							onChange={handleFilterSelection}
							selected={selectedFiltersSig.value}
							type='size'
						/>
					)}
					{colorFacets && (
						<Filter
							facet={colorFacets}
							onChange={handleFilterSelection}
							selected={selectedFiltersSig.value}
							type='color'
						/>
					)}
				</div>
			</>
		);
	}
);
