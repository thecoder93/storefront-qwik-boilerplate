import { component$ } from '@builder.io/qwik';
import { Heading } from '~/components/Heading/Heading';
import { ProductSlider } from '~/components/ProductSlider/ProductSlider';
import { CategoryCard } from '~/components/UI/CategoryCard/CategoryCard';
import { Display } from '~/components/UI/Display/Display';
import { Hero } from '~/components/UI/Hero/Hero';
import { display, heroMock, items, productSliderShuffeled } from '~/mocks';

export default component$(() => {
	return (
		<div>
			<Hero {...heroMock} />
			<Heading
				title='Shop by category'
				as='h2'
				class='text-center mb-6 font-bold typography-headline-3 md:typography-headline-2'
			/>
			<CategoryCard items={items} />
			<Display items={display} />
			<Heading
				title='Inspired by your picks'
				as='h2'
				class='text-center mb-6 font-bold typography-headline-3 md:typography-headline-2'
			/>
			<ProductSlider
				products={productSliderShuffeled()}
				class='max-w-screen-3xl mx-auto px-4 md:px-10 mb-20'
			/>
		</div>
	);
});
