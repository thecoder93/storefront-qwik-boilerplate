import { component$, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import {
	SfButton,
	SfCheckbox,
	SfInput,
	SfLoaderCircular,
	SfSelect,
} from 'qwik-storefront-ui';
import { useAddressForm } from '~/routes/layout';
import { FormHelperText } from '../Form/FormHelperText';
import { FormLabel } from '../Form/FormLabel';

type AddressFields =
	| 'firstName'
	| 'lastName'
	| 'phone'
	| 'country'
	| 'streetName'
	| 'streetNumber'
	| 'city'
	| 'state'
	| 'postalCode';

export type AddressFormFields = Record<AddressFields, string>;

export type AddressFormProps = {
	type: 'billingAddress' | 'shippingAddress';
	savedAddress?: AddressFormFields | undefined;
};

export const AddressForm = component$<AddressFormProps>(
	({ type, savedAddress }) => {
		const addressFormAction = useAddressForm();
		const formRefSig = useSignal<HTMLFormElement>();
		useStore<{ value: AddressFormFields }>({
			value: {
				firstName: savedAddress?.firstName || '',
				lastName: savedAddress?.lastName || '',
				phone: savedAddress?.phone || '',
				country: savedAddress?.country || '',
				streetName: savedAddress?.streetName || '',
				streetNumber: savedAddress?.streetNumber || '',
				city: savedAddress?.city || '',
				state: savedAddress?.state || '',
				postalCode: savedAddress?.postalCode || '',
			},
		});
		const countries = ['US'];
		const states = ['California'];

		useTask$(({ track }) => {
			const success = track(() => addressFormAction.value?.success);
			if (success) {
				if (formRefSig.value) {
					formRefSig.value.reset();
				}
			}
		});

		return (
			<Form
				class='grid grid-cols-1 md:grid-cols-[50%_1fr_120px] gap-4'
				data-testid='address-form'
				action={addressFormAction}
				ref={formRefSig}
			>
				<label>
					<FormLabel>{$localize`form.firstNameLabel`}</FormLabel>
					<SfInput
						name='firstName'
						autoComplete='given-name'
						// defaultValue={addressStore.firstName} <-- fix lib <-- fix lib
						required
					/>
				</label>
				<label class='md:col-span-2'>
					<FormLabel>{$localize`form.lastNameLabel`}</FormLabel>
					<SfInput
						name='lastName'
						autoComplete='family-name'
						// defaultValue={addressStore.lastName} <-- fix lib
						required
					/>
				</label>
				<label class='md:col-span-3'>
					<FormLabel>{$localize`form.phoneLabel`}</FormLabel>
					<SfInput
						name='phone'
						type='tel'
						autoComplete='tel'
						// defaultValue={addressStore.phone} <-- fix lib
						required
					/>
				</label>
				<label class='md:col-span-3'>
					<FormLabel>{$localize`form.countryLabel`}</FormLabel>
					<SfSelect
						name='country'
						placeholder={$localize`form.selectPlaceholder`}
						autoComplete='country-name'
						// defaultValue={addressStore.country} <-- fix lib
						required
					>
						{countries.map((country) => (
							<option key={country}>{country}</option>
						))}
					</SfSelect>
				</label>
				<label class='md:col-span-2'>
					<FormLabel>{$localize`form.streetNameLabel`}</FormLabel>
					<SfInput
						name='streetName'
						autoComplete='address-line1'
						// defaultValue={// addressStore.streetName} <-- fix lib
						required
					/>
					<FormHelperText>{$localize`form.streetNameHelp`}</FormHelperText>
				</label>
				<label>
					<FormLabel>{$localize`form.streetNumberLabel`}</FormLabel>
					<SfInput
						name='streetNumber'
						// defaultValue={// addressStore.streetNumber} <-- fix lib
					/>
					<FormHelperText>{$localize`form.streetNumberHelp`}</FormHelperText>
				</label>
				<label class='md:col-span-3'>
					<FormLabel>{$localize`form.cityLabel`}</FormLabel>
					<SfInput
						name='city'
						autoComplete='address-level2'
						// defaultValue={// addressStore.city} <-- fix lib
						required
					/>
				</label>
				<label class='md:col-span-2'>
					<FormLabel>{$localize`form.stateLabel`}</FormLabel>
					<SfSelect
						name='state'
						autoComplete='address-level1'
						// defaultValue={// addressStore.state} <-- fix lib
						placeholder={$localize`form.selectPlaceholder`}
						required
					>
						{states.map((state) => (
							<option key={state}>{state}</option>
						))}
					</SfSelect>
				</label>
				<label>
					<FormLabel>{$localize`form.postalCodeLabel`}</FormLabel>
					<SfInput
						name='postalCode'
						autoComplete='postal-code'
						// defaultValue={// addressStore.postalCode} <-- fix lib
						required
					/>
				</label>

				{type === 'billingAddress' && (
					<label class='md:col-span-3 flex items-center gap-2'>
						<SfCheckbox name='useAsShipping' />
						{$localize`form.useAsShippingLabel`}
					</label>
				)}

				<div class='md:col-span-3 flex justify-end gap-4'>
					<SfButton
						type='reset'
						onClick$={() => {
							if (formRefSig.value) {
								formRefSig.value.reset();
							}
						}}
						class='max-md:w-1/2'
						variant='secondary'
					>
						{$localize`checkout:contactInfo.clearAll`}
					</SfButton>
					<SfButton
						type='submit'
						class='w-1/2 md:w-1/6'
						disabled={addressFormAction.isRunning}
					>
						{addressFormAction.isRunning ? (
							<SfLoaderCircular
								class='flex justify-center items-center'
								size='sm'
							/>
						) : (
							$localize`checkout:contactInfo.save`
						)}
					</SfButton>
				</div>
			</Form>
		);
	}
);
