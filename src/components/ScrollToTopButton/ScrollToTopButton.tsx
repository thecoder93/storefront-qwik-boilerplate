import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { SfButton, SfIconExpandLess } from 'qwik-storefront-ui';

export const ScrollToTopButton = component$(() => {
	const elRefSig = useSignal<Element>();

	useVisibleTask$(() => {
		if (elRefSig.value) {
			const intersectionObserver = new IntersectionObserver((entries) => {
				if (elRefSig.value) {
					if (entries.some((entry) => entry.intersectionRatio > 0)) {
						elRefSig.value.classList.add('opacity-0');
					} else {
						elRefSig.value.classList.remove('opacity-0');
					}
				}
			});
			intersectionObserver.observe(elRefSig.value);
		}
	});

	return (
		<div
			class='top-1/2 pointer-events-none z-40 absolute'
			data-testid='scroll-top'
			ref={elRefSig}
		>
			<SfButton
				square
				onClick$={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				variant='secondary'
				aria-label={$localize`scrollTop`}
				class='bg-white transition-opacity fixed right-4 bottom-20 opacity-100 pointer-events-auto'
			>
				<div q:slot='prefix'>
					<SfIconExpandLess />
				</div>
			</SfButton>
		</div>
	);
});
