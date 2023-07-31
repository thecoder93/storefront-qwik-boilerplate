import { component$ } from '@builder.io/qwik';
import { SfIconSearch, SfInput } from 'qwik-storefront-ui';

export const Search = component$(() => {
	// const inputReference = useRef<HTMLInputElement>(null);
	// const [searchValue, setSearchValue] = useState('');
	// const router = useRouter();
	// const { isOpen, close, open } = useDisclosure();
	// const { refs } = useDropdown({ isOpen, onClose: close, placement: 'bottom-start', middleware: [offset(4)] });
	// useTrapFocus(refs.floating, { arrowKeysOn: true, activeState: isOpen, initialFocus: false });

	// const handleSubmit = async (event: FormEvent) => {
	//   event.preventDefault();
	//   close();
	//   await router.push(`/search?search=${searchValue}`);
	// };
	// const handleReset = () => {
	//   setSearchValue('');
	//   close();
	//   inputReference.current?.focus();
	// };
	// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
	//   const phrase = event.target.value;
	//   if (phrase) {
	//     setSearchValue(phrase);
	//   } else {
	//     handleReset();
	//   }
	// };

	return (
		// <form role="search" onSubmit={handleSubmit} ref={refs.setReference} class={['relative', className]}>
		<div class='relative hidden md:block flex-1'>
			<SfInput
				// ref={inputReference}
				// value={searchValue}
				// onChange={handleChange}
				// onFocus={open}
				aria-label='Search'
				placeholder='Search'
				showSlotPrefix={true}
				// slotPrefix={}
				// slotSuffix={
				// 	!!searchValue && (
				// 		<button
				// 			type='button'
				// 			onClick={handleReset}
				// 			aria-label='Reset search'
				// 			class='flex rounded-md focus-visible:outline focus-visible:outline-offset'
				// 		>
				// 			<SfIconCancel />
				// 		</button>
				// 	)
				// }
			>
				<div q:slot='prefix'>
					<SfIconSearch class='mr-1' />
				</div>
			</SfInput>
		</div>
		// </form>
	);
});
