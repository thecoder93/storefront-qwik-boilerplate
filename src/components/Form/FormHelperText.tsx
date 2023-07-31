import { Slot, component$ } from '@builder.io/qwik';
import type { FormHelperTextProps } from './types';

export default component$<FormHelperTextProps>(({ class: _class }) => {
	return (
		<small
			class={['text-xs text-neutral-500 mt-0.5', _class]}
			data-testid='form-helper-text'
		>
			<Slot />
		</small>
	);
});
