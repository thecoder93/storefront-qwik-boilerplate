import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { sdk } from '~/sdk';


export default component$(() => {
	return (
		<>
			<h1>Hi 👋</h1>
			<p>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
				<button
					onClick$={async () => {
						const abc = await sdk.commerce.getContent<any>({
							url: 'home-page',
						});
						console.log(abc);
					}}
				>
					HomePage
				</button>
			</p>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
};
