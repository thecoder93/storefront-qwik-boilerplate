import { component$ } from '@builder.io/qwik';
import { SfInput, SfSelect } from 'qwik-storefront-ui';
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
	savedAddress: AddressFormFields;
	class?: string;
};

export const AddressForm = component$<AddressFormProps>(
	({ savedAddress, class: _class }) => {
		return (
			<div
				class={['grid grid-cols-1 md:grid-cols-[50%_1fr_120px] gap-4', _class]}
				data-testid='address-form'
			>
				<label>
					<FormLabel>{$localize`form.firstNameLabel`}</FormLabel>
					<SfInput
						name='firstName'
						autoComplete='given-name'
						value={savedAddress.firstName}
						readOnly={true}
						// defaultValue={addressStore.firstName} <-- fix lib <-- fix lib
						required
					/>
				</label>
				<label class='md:col-span-2'>
					<FormLabel>{$localize`form.lastNameLabel`}</FormLabel>
					<SfInput
						name='lastName'
						autoComplete='family-name'
						value={savedAddress.lastName}
						readOnly={true}
						required
					/>
				</label>
				<label class='md:col-span-3'>
					<FormLabel>{$localize`form.phoneLabel`}</FormLabel>
					<SfInput
						name='phone'
						type='tel'
						autoComplete='tel'
						value={savedAddress.phone}
						readOnly={true}
						required
					/>
				</label>
				<label class='md:col-span-3'>
					<FormLabel>{$localize`form.countryLabel`}</FormLabel>
					<SfSelect
						name='country'
						placeholder={$localize`form.selectPlaceholder`}
						autoComplete='country-name'
						disabled={true}
						required
					>
						{['US'].map((country) => (
							<option key={country}>{country}</option>
						))}
					</SfSelect>
				</label>
				<label class='md:col-span-2'>
					<FormLabel>{$localize`form.streetNameLabel`}</FormLabel>
					<SfInput
						name='streetName'
						autoComplete='address-line1'
						value={savedAddress.streetName}
						readOnly={true}
						required
					/>
					<FormHelperText>{$localize`form.streetNameHelp`}</FormHelperText>
				</label>
				<label>
					<FormLabel>{$localize`form.streetNumberLabel`}</FormLabel>
					<SfInput
						name='streetNumber'
						value={savedAddress.streetNumber}
						readOnly={true}
					/>
					<FormHelperText>{$localize`form.streetNumberHelp`}</FormHelperText>
				</label>
				<label class='md:col-span-3'>
					<FormLabel>{$localize`form.cityLabel`}</FormLabel>
					<SfInput
						name='city'
						autoComplete='address-level2'
						value={savedAddress.city}
						readOnly={true}
						required
					/>
				</label>
				<label class='md:col-span-2'>
					<FormLabel>{$localize`form.stateLabel`}</FormLabel>
					<SfSelect
						name='state'
						autoComplete='address-level1'
						value={savedAddress.state}
						disabled={true}
						placeholder={$localize`form.selectPlaceholder`}
						required
					>
						{['California'].map((state) => (
							<option key={state}>{state}</option>
						))}
					</SfSelect>
				</label>
				<label>
					<FormLabel>{$localize`form.postalCodeLabel`}</FormLabel>
					<SfInput
						name='postalCode'
						autoComplete='postal-code'
						value={savedAddress.postalCode}
						readOnly={true}
						required
					/>
				</label>
			</div>
		);
	}
);
