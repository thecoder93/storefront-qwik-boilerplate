import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

type CategoryCardProps = {
	items: {
		id: string;
		name: string;
		slug: string;
		subcategories: unknown[];
		productCount: number;
		image: string;
	}[];
};

export const CategoryCard = component$(
	({ items, ...attributes }: CategoryCardProps) => {
		return (
			<div
				class='max-w-screen-3xl mx-auto md:px-10 px-4 mb-10 flex flex-nowrap md:flex-wrap md:justify-center overflow-x-scroll scrollbar-hidden'
				data-testid='category-card'
				{...attributes}
			>
				{items.map(({ name, image, slug }) => (
					<div class='mr-2 md:mr-6 group' key={name}>
						<Link
							class='w-full h-full z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md'
							href={slug}
							aria-label={name}
						>
							<div class='relative h-[240px] w-[240px] rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none'>
								<img
									alt={name}
									loading='eager'
									width='240'
									height='240'
									src={image}
								/>
							</div>
							<div class='flex justify-center'>
								<p class='mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal'>
									{name}
								</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		);
	}
);
