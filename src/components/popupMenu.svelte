<script>
	import CloseIcon from '$src/asset/icons/close.svelte';
	import { Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	const drawerStore = getDrawerStore();

	const drawerSettings = {
		height: 'h-3/4'
	};

	const openDrawer = () => {
		drawerStore.open(drawerSettings);
	};

	const closeDrawer = () => {
		drawerStore.close();
	};
</script>

<div class="absolute bottom-8 w-full flex justify-center">
	<button type="button" class="w-1/2 btn variant-filled" on:click={openDrawer}>添加计时</button>
</div>
<Drawer position="bottom">
	<div class="relative">
		<button class="absolute top-2 right-2" type="button" on:click={closeDrawer}>
			<CloseIcon />
		</button>
	</div>
</Drawer>
