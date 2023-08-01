import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { DEFAULT_METADATA_DESCRIPTION } from '~/shared/constants';
import { generateDocumentHead } from '~/shared/utils';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const documentHead = useDocumentHead();
	const head =
		documentHead.meta.length > 0
			? documentHead
			: { ...documentHead, ...generateDocumentHead() };
	const loc = useLocation();

	return (
		<>
			<title>{head.title}</title>

			<link rel='canonical' href={loc.url.href} />
			<link rel='icon' type='image/svg+xml' href='/favicon.ico' />
			<meta name='theme-color' content='#02C652' />
			<link rel='apple-touch-icon' href='/icons/apple-touch-icon-180x180.png' />
			<link rel='manifest' href='/manifest.json' />
			<meta
				name='viewport'
				content='minimum-scale=1, initial-scale=1, width=device-width'
			/>
			<meta name='description' content={DEFAULT_METADATA_DESCRIPTION} />

			{head.meta.map((m) => (
				<meta key={m.key} {...m} />
			))}

			{head.links.map((l) => (
				<link key={l.key} {...l} />
			))}

			{head.styles.map((s) => (
				<style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
			))}
		</>
	);
});
