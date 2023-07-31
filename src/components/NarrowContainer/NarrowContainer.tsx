import { Slot, component$ } from '@builder.io/qwik';

export const NarrowContainer = component$(() => {
	return (
		<div
			class='max-w-screen-3xl mx-auto md:px-6 lg:px-10'
			data-testid='narrow-container'
		>
			<Slot />
		</div>
	);
});
