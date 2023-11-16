<script>
	import FondueIcon from '$src/asset/icons/fondue.svelte';
	import LanguageIcon from '$src/asset/icons/language.svelte';

	import { t, locale, locales } from '$src/i18n/i18n';

	import {
		Drawer,
		initializeStores,
		getDrawerStore,
		RadioGroup,
		RadioItem,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	initializeStores();
	const drawerStore = getDrawerStore();

	const openDrawer = () => {
		drawerStore.open({
			width: 'w-3/5'
		});
	};

	const setLocale = (value) => {
		window.localStorage.setItem('locale', value);
	};

	// 从 package.json获得当前应用版本
	const version = __APP_VERSION__;
</script>

<div class="h-screen flex flex-col justify-center items-center gap-4">
	<div class="absolute top-2 right-2 flex gap-2 items-center">
		<LightSwitch />
		<button type="button" class=" btn-icon" on:click={openDrawer}>
			<LanguageIcon />
		</button>
	</div>
	<FondueIcon size={36} />
	<h1 class="h1">{$t('app.title')}</h1>
	<a href="/list">
		<button type="button" class="btn w-72 variant-filled">{$t('app.startBoil')}</button>
	</a>
</div>
<Drawer position="right">
	<div class="h-full p-4 flex flex-col justify-between">
		<div>
			<h3 class="h3 mb-4">{$t('app.selectLang')}</h3>
			<RadioGroup border="none" rounded="rounded-container-token" display="flex-col">
				{#each locales as l}
					<RadioItem
						bind:group={$locale}
						name="lang"
						value={l.langShort}
						on:click={() => setLocale(l.langShort)}>{l.langName}</RadioItem
					>
				{/each}
			</RadioGroup>
		</div>
		<div>
			<h5 class="h5">{$t('app.version')} {version}</h5>
		</div>
	</div>
</Drawer>
