import type { PropFunction } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import {
	SfButton,
	SfIconChevronLeft,
	SfIconChevronRight,
} from 'qwik-storefront-ui';

export interface PaginationProps {
	class: string;
	selectedPage: number;
	totalPages: number;
	onPageChange: PropFunction<(page: number) => void>;
}

export const Pagination = component$<PaginationProps>(
	({ class: _class, selectedPage, totalPages, onPageChange }) => {
		const t = useTranslate();

		return (
			<nav
				class={[
					'flex justify-between items-center border-t border-neutral-200',
					_class,
				]}
				role='navigation'
				aria-label='pagination'
				data-testid='pagination'
			>
				<SfButton
					type='button'
					size='lg'
					class='gap-3 mt-2'
					aria-label={'prevAriaLabel'}
					disabled={selectedPage <= 1}
					variant='tertiary'
					onClick$={() => {
						if (selectedPage !== 1) {
							onPageChange(selectedPage - 1);
						}
					}}
				>
					<div q:slot='prefix'>
						<SfIconChevronLeft />
					</div>
					<span class='hidden sm:inline-flex'>{t('prev')}</span>
				</SfButton>
				<ul class='flex flex-wrap justify-center'>
					{[...new Array(totalPages + 1).keys()].map((page: number) => {
						if (page === 0) return null;
						return (
							<li key={page}>
								<div
									class={{
										'flex pt-1 border-t-4 border-transparent': true,
										'font-medium border-t-4 !border-primary-700':
											selectedPage === page,
									}}
								>
									<button
										type='button'
										class={{
											'px-4 py-3 text-neutral-500 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900':
												true,
											'!text-neutral-900 hover:!text-primary-800 active:!text-primary-900':
												selectedPage === page,
										}}
										aria-label={`Page ${page} of ${totalPages}`}
										aria-current={selectedPage === page}
										onClick$={() => {
											onPageChange(page);
										}}
									>
										{page}
									</button>
								</div>
							</li>
						);
					})}
				</ul>
				<SfButton
					type='button'
					size='lg'
					aria-label={'nextAriaLabel'}
					disabled={selectedPage >= totalPages}
					variant='tertiary'
					class='gap-3 mt-2'
					onClick$={() => {
						if (selectedPage < totalPages) {
							onPageChange(selectedPage + 1);
						}
					}}
				>
					<span class='hidden sm:inline-flex'>{t('next')}</span>
					<div q:slot='suffix'>
						<SfIconChevronRight />
					</div>
				</SfButton>
			</nav>
		);
	}
);
