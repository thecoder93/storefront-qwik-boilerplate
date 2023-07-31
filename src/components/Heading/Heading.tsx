import { component$ } from '@builder.io/qwik';

export type HeadingProps = {
	title: string;
	as?: `h${number}`;
	class?: string;
};

export const Heading = component$<HeadingProps>(
	({
		as,
		class:
			_class = 'text-center mb-6 font-bold typography-headline-3 md:typography-headline-2',
		title,
		...attributes
	}) => {
		const Tag: any = as || 'h1';

		return (
			<Tag class={_class} {...attributes}>
				{title}
			</Tag>
		);
	}
);
