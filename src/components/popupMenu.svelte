<script>
	import { Drawer, TabGroup, Tab, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { t } from '$src/i18n/i18n';
	import IngredientByType from './popupMenu/ingredientByType.svelte';
	import IngredientByBoilTime from './popupMenu/ingredientByBoilTime.svelte';
	import Form from './userDefineIngre/form.svelte';

	const drawerStore = getDrawerStore();

	const openDrawer = () => {
		drawerStore.open({
			height: 'h-3/4'
		});
	};

	const closeDrawer = () => {
		drawerStore.close();
	};

	let typeSet = 'byType';
</script>

<div class="absolute bottom-8 w-full flex justify-center">
	<button type="button" class="w-1/2 btn variant-filled" on:click={openDrawer}
		>{$t('popMenu.addIngredient')}</button
	>
</div>
<Drawer position="bottom">
	<div
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10 h-full"
	>
		<div class="snap-start shrink-0 w-[95%]">
			<h4 class="h4 mb-2">{$t('popMenu.userDefineIngre')}</h4>
			<Form on:closeDrawer={closeDrawer} />
		</div>
		<div class="relative snap-start shrink-0 w-full">
			<h4 class="h4">{$t('popMenu.predefinedIngre')}</h4>
			<TabGroup justify="justify-center">
				<Tab bind:group={typeSet} name="byType" value="byType">
					<span>{$t('popMenu.byType')}</span>
				</Tab>
				<Tab bind:group={typeSet} name="byBoilTime" value="byBoilTime">
					<span>{$t('popMenu.byBoilTime')}</span>
				</Tab>
				<svelte:fragment slot="panel">
					{#if typeSet == 'byType'}
						<IngredientByType on:closeDrawer={closeDrawer} />
					{:else if typeSet == 'byBoilTime'}
						<IngredientByBoilTime on:closeDrawer={closeDrawer} />
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</Drawer>
