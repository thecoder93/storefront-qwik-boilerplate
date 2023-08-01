import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useTranslate } from 'qwik-speak';
import { contactOptions, homePageCategories, socialMedia } from '~/mocks';
import { Divider } from '../UI/Divider/Divider';

type FooterProps = {
	class?: string;
};

export const Footer = component$<FooterProps>(({ class: _class = '' }) => {
	const t = useTranslate();

	return (
		<footer class={['pt-10 bg-neutral-100', _class]} data-testid='footer'>
			<div
				class='grid gap-5 justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 mx-auto max-w-screen-3xl'
				data-testid='section-top'
			>
				{homePageCategories.map(({ key, subcategories }) => (
					<div key={key} class='min-w-[25%] xs:min-w-[50%] flex flex-col'>
						<p class='font-medium leading-7 text-neutral-900 text-lg pb-2'>
							{t(`categories.${key}.label`)}
						</p>
						{subcategories.map(({ link, key: subcategoryKey }) => (
							<Link
								href={link}
								class='text-sm leading-5 py-2 text-neutral-600 hover:underline'
								key={subcategoryKey}
							>
								{t(`categories.${key}.subcategories.${subcategoryKey}`)}
							</Link>
						))}
					</div>
				))}
			</div>
			<Divider />
			<div
				class='py-10 lg:flex mx-auto max-w-screen-3xl'
				data-testid='section-middle'
			>
				{contactOptions.map(({ icon, link, details, key }) => (
					<div
						key={key}
						class='mx-auto my-4 text-center flex flex-col items-center'
					>
						<div class='w-8'>{icon}</div>
						<Link
							href={link}
							class='py-1 my-2 font-medium typography-text-lg font-body no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900'
						>
							{t(`contactOptions.${key}.label`)}
						</Link>
						{details.map((option) => (
							<p class='text-sm leading-5' key={option}>
								{t(`contactOptions.${key}.details.${option}`)}
							</p>
						))}
					</div>
				))}
			</div>
			<div class='bg-neutral-900' data-testid='section-bottom'>
				<div class='mx-auto max-w-screen-3xl text-sm leading-5 text-white justify-end px-4 py-10 lg:flex lg:py-6'>
					<div class='flex justify-center gap-6 lg:self-start'>
						{socialMedia.map(({ icon, label, link }) => (
							<Link
								key={label}
								href={link}
								title={t('socialLabel', { label })}
								class='hover:bg-neutral-500 hover:shadow-[0_0_0_8px] hover:shadow-neutral-500 rounded-sm'
								data-testid={label}
							>
								{icon}
							</Link>
						))}
					</div>
					<p class='flex justify-center gap-6 leading-5 text-center typography-text-sm font-body pt-6 lg:pt-0 lg:ml-auto '>
						<a
							href='https://github.com/gioboa'
							target='_blank'
							class='underline pr-0.5'
							aria-label='author'
						>
							gioboa
						</a>
						<a
							href='https://github.com/thecoder93'
							target='_blank'
							class='underline'
							aria-label='author'
						>
							thecoder93
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
});
