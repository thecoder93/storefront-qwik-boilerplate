import { Slot, component$ } from '@builder.io/qwik';
import type { FormLabelProps } from './types';

export const FormLabel = component$<FormLabelProps>(({ class: _class }) => {
	return (
		<span class={['text-sm font-medium', _class]} data-testid='form-label'>
			<Slot />
		</span>
	);
});
