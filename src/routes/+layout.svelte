<script>
	import '../app.postcss';
	import { getModeUserPrefers } from '@skeletonlabs/skeleton';

	import { t } from '$src/i18n/i18n';

	let darkMode = !getModeUserPrefers();

	$: if (darkMode) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
</script>

<svelte:head>
	<title>{$t('app.title')}</title>
</svelte:head>

<slot />
