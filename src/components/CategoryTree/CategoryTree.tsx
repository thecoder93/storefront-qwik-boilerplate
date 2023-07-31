import { component$ } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import { SfIconArrowBack } from 'qwik-storefront-ui';
import { CategoryTreeItem } from './CategoryTreeItem';
import type { CategoryTreeProps } from './types';

export const CategoryTree = component$<CategoryTreeProps>(
	({ parent, categories }) => {
		const t = useTranslate();

		return (
			<>
				<span
					class='block py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md'
					data-testid='category-tree'
				>
					{t('category')}
				</span>
				{parent && (
					<CategoryTreeItem count={parent.count} href='/category'>
						<>
							<SfIconArrowBack size='sm' class='text-neutral-500 mr-2' />
							{parent.name}
						</>
					</CategoryTreeItem>
				)}
				<div class='mt-4 mb-6 md:mt-2' data-testid='categories'>
					{categories.map(({ name, count }) => (
						<CategoryTreeItem key={name} count={count} href='/category'>
							{name}
						</CategoryTreeItem>
					))}
				</div>
			</>
		);
	}
);
