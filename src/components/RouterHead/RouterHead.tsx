import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead();
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
