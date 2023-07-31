import { Slot, component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { SfCounter, SfListItem } from 'qwik-storefront-ui';
import type { CategoryTreeItemProps } from './types';

export const CategoryTreeItem = component$<CategoryTreeItemProps>(
	({ count, href }) => {
		return (
			<Link href={href} data-testid='category-tree-item'>
				<SfListItem
					as='span'
					size='lg'
					class='md:sf-list-item-sm md:py-1.5 sf-list-item'
				>
					<span class='flex gap-2 items-center'>
						<span
							class='text-base md:text-sm capitalize flex items-center'
							data-testid='list-item-menu-label'
						>
							<Slot />
						</span>
						{Number(count) > -1 && (
							<SfCounter class='md:text-sm font-normal'>{count}</SfCounter>
						)}
					</span>
				</SfListItem>
			</Link>
		);
	}
);
