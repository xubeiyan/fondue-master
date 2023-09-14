<script>
	import { Drawer, TabGroup, Tab, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { t } from '$src/i18n/i18n';
	import IngredientByType from './popupMenu/ingredientByType.svelte';

	const drawerStore = getDrawerStore();

	const openDrawer = () => {
		drawerStore.open({
			height: 'h-3/4'
		});
	};

	const closeDrawer = () => {
		drawerStore.close();
	}

	let typeSet = "byType";

</script>

<div class="absolute bottom-8 w-full flex justify-center">
	<button type="button" class="w-1/2 btn variant-filled" on:click={openDrawer}
		>{$t('app.addIngredient')}</button
	>
</div>
<Drawer position="bottom">
	<div class="relative p-4">
		<h4 class="h4">{$t('app.predefinedIngre')}</h4>
		<TabGroup justify="justify-center">
			<Tab bind:group={typeSet} name="byType" value="byType">
				<span>by Type</span>
			</Tab>
			<Tab bind:group={typeSet} name="byBoilTime" value="byBoilTime">
				<span>by Boil Time</span>
			</Tab>
			<svelte:fragment slot="panel">
				{#if typeSet == 'byType'}
					<IngredientByType on:closeDrawer={closeDrawer} />
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</Drawer>
