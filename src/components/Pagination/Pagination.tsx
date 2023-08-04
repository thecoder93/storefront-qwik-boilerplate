import type { PropFunction } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import {
	SfButton,
	SfIconChevronLeft,
	SfIconChevronRight,
} from 'qwik-storefront-ui';

export interface PaginationProps {
	initialPage: number;
	totalPages: number;
	onPrevPage: PropFunction<(page: number) => void>;
	onNextPage: PropFunction<(page: number) => void>;
}

export const Pagination = component$<PaginationProps>(
	({ initialPage, totalPages, onPrevPage, onNextPage }) => {
		const t = useTranslate();
		const selectedPageSig = useSignal(
			Math.max(1, Math.min(initialPage, totalPages))
		);

		return (
			<nav
				class='flex justify-between items-center border-t border-neutral-200'
				role='navigation'
				aria-label='pagination'
				data-testid='pagination'
			>
				<SfButton
					type='button'
					size='lg'
					class='gap-3 mt-2'
					aria-label={'prevAriaLabel'}
					disabled={selectedPageSig.value <= 1}
					variant='tertiary'
					onClick$={() => {
						if (selectedPageSig.value !== 1) {
							selectedPageSig.value -= 1;
							onPrevPage(selectedPageSig.value);
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
											selectedPageSig.value === page,
									}}
								>
									<button
										type='button'
										class={{
											'px-4 py-3 text-neutral-500 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900':
												true,
											'!text-neutral-900 hover:!text-primary-800 active:!text-primary-900':
												selectedPageSig.value === page,
										}}
										aria-label={`Page ${page} of ${totalPages}`}
										aria-current={selectedPageSig.value === page}
										onClick$={() => (selectedPageSig.value = page)}
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
					disabled={selectedPageSig.value >= totalPages}
					variant='tertiary'
					class='gap-3 mt-2'
					onClick$={() => {
						if (selectedPageSig.value < totalPages) {
							selectedPageSig.value += 1;
							onNextPage(selectedPageSig.value);
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
