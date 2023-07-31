import { component$ } from '@builder.io/qwik';

type DividerProps = {
	class?: string;
};

export const Divider = component$<DividerProps>(({ class: _class }) => {
	return (
		<hr class={['w-full h-px bg-neutral-200', _class]} data-testid='divider' />
	);
});
