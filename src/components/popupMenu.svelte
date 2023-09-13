<script>
	import { Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { t } from '$src/i18n/i18n';

	const drawerStore = getDrawerStore();

	const openDrawer = () => {
		drawerStore.open({
		height: 'h-3/4'
	});
	};

</script>

<div class="absolute bottom-8 w-full flex justify-center">
	<button type="button" class="w-1/2 btn variant-filled" on:click={openDrawer}>{$t('app.addIngredient')}</button>
</div>
<Drawer position="bottom">
	<div class="relative p-4">
		<h3 class="h3">Add </h3>
		
	</div>
</Drawer>
