import { Slot, component$ } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import { SfButton, SfIconClose } from 'qwik-storefront-ui';

export interface CategorySidebarProps {
	isOpen: boolean;
	closeSidebar: () => void;
}

export const CategorySidebar = component$<CategorySidebarProps>(
	({ closeSidebar }) => {
		const t = useTranslate();
		{
			/*			<CSSTransition
				nodeRef={nodeReference}
				in={isOpen}
				timeout={500}
				classNames='slide-left'
				data-testid='category-sidebar'
			>
				 <SfDrawer
					ref={nodeReference}
					class='w-full shadow-none md:translate-x-0 z-[100] md:z-0 md:static -translate-x-full shrink-0 md:w-[303px] bg-white'
					placement='left'
					open
				> */
		}

		return (
			<div>
				<div class='grid grid-rows-category-sidebar h-full md:block'>
					<div class='p-4 flex justify-between items-center md:hidden'>
						<span class='font-bold text-lg'>{t('listSettings')}</span>
						<SfButton
							variant='tertiary'
							onClick$={closeSidebar}
							aria-label={t('closeListSettings')}
						>
							<div q:slot='prefix'>
								<SfIconClose class='text-neutral-500' />
							</div>
						</SfButton>
					</div>
					<div class='overflow-y-auto md:overflow-y-visible py-4 md:p-0'>
						<Slot />
					</div>
					<div class='p-4 md:mt-2 flex flex-wrap justify-between border-t border-t-neutral-200 md:border-0 gap-3'>
						<SfButton
							class='md:hidden whitespace-nowrap flex flex-1'
							variant='primary'
							onClick$={closeSidebar}
						>
							{t('showProducts')}
						</SfButton>
					</div>
				</div>
			</div>
		);
	}
);
