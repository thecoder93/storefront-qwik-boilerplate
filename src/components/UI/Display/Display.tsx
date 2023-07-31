import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { SfButton } from 'qwik-storefront-ui';

type DisplayProps = {
	items: {
		image: string;
		title: string;
		subtitle: string;
		description: string;
		buttonText: string;
		reverse: boolean;
		titleClass?: string;
		subtitleClass?: string;
	}[];
};

export const Display = component$<DisplayProps>(({ items, ...attributes }) => {
	return (
		<div
			class='flex flex-col md:flex-row flex-wrap gap-6 max-w-screen-3xl mx-auto px-4 md:px-10 mb-10'
			data-testid='display'
			{...attributes}
		>
			{items.map(
				({
					image,
					title,
					subtitle,
					description,
					buttonText,
					reverse,
					titleClass,
					subtitleClass,
				}) => (
					<div
						key={title}
						class='relative flex md:max-w-screen-3xl md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full first:bg-secondary-200 last:bg-warning-200 even:bg-negative-200'
					>
						<div
							class={{
								'flex overflow-hidden grow flex-col': true,
								'flex-col-reverse': reverse,
								'md:flex-row-reverse': reverse,
							}}
						>
							<div class='flex flex-1 flex-col justify-center items-center md:items-start p-6 lg:p-10 max-w-1/2'>
								<p
									class={[
										'uppercase typography-text-xs block font-bold tracking-widest',
										subtitleClass,
									]}
								>
									{subtitle}
								</p>
								<h2
									class={[
										'mb-4 mt-2 font-bold typography-headline-3',
										titleClass,
									]}
								>
									{title}
								</h2>
								<p class='typography-text-base block text-center md:text-left mb-4'>
									{description}
								</p>
								<SfButton class='!bg-black' as={Link} href='/category'>
									{buttonText}
								</SfButton>
							</div>
							<img
								alt={title}
								loading='eager'
								height={300}
								width={300}
								src={image}
								class='w-full md:w-1/2 self-end object-contain flex-1'
							/>
						</div>
					</div>
				)
			)}
		</div>
	);
});
