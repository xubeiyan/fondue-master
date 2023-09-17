<script>
	import '../app.postcss';
	import { getModeUserPrefers } from '@skeletonlabs/skeleton';

	let darkMode = !getModeUserPrefers();

	$: if (darkMode) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
</script>

<svelte:head>
	<title>火锅大师</title>
</svelte:head>

<slot />
