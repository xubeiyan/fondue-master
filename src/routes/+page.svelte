<script>
	import FondueIcon from '$src/asset/icons/fondue.svelte';
	import LanguageIcon from '$src/asset/icons/language.svelte';

	import { t, locale, locales } from '$src/i18n/i18n';

	import {
		Drawer,
		initializeStores,
		getDrawerStore,
		RadioGroup,
		RadioItem
	} from '@skeletonlabs/skeleton';
	initializeStores();
	const drawerStore = getDrawerStore();

	const openDrawer = () => {
		drawerStore.open({
			width: 'w-3/5'
		});
	};
</script>

<div class="h-screen flex flex-col justify-center items-center gap-4">
	<button type="button" class="absolute top-2 right-2 btn-icon" on:click={openDrawer}>
		<LanguageIcon />
	</button>
	<FondueIcon size={36} />
	<h1 class="h1">{$t('app.title')}</h1>
	<a href="/list">
		<button type="button" class="btn w-72 variant-filled">{$t('app.startBoil')}</button>
	</a>
</div>
<Drawer position="right">
	<div class="p-4">
		<h3 class="h3 mb-4">{$t('app.selectLang')}</h3>
		<RadioGroup border="none" rounded="rounded-container-token" display="flex-col">
			{#each locales as l}
				<RadioItem bind:group={$locale} name="lang" value={l.langShort}>{l.langName}</RadioItem>
			{/each}
		</RadioGroup>
	</div>
</Drawer>
