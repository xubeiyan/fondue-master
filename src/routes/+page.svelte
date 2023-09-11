<script>
	import { AppBar, Drawer, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';

	import FondueIcon from '../asset/icons/fondue.svelte';

	import { initializeStores } from '@skeletonlabs/skeleton';
	import ChefHat from '../asset/icons/chef_hat.svelte';
	initializeStores();

	const drawerStore = getDrawerStore();

	const openDrawer = () => {
		drawerStore.open();
	};
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<FondueIcon />
	</svelte:fragment>
	<h1 class="h1">火锅大师</h1>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
<div class="wrapper w-full h-full m-4">
	<button type="button" class="btn variant-filled mb-2" on:click={openDrawer}>
		<span><ChefHat /></span>
		添加
	</button>
	<h4 class="h4">菜品列表</h4>
	<ul class="list" />
</div>

<Drawer position="bottom" />
