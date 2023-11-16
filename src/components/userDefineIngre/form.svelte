<script>
  import { t } from '$src/i18n/i18n';
  // store
	import { list } from '$src/store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let ingredientName = '';
  let boilTime = 30;

  const addIngre = () => {
    if (boilTime == null) boilTime = 30;
    if (ingredientName == '') ingredientName = '神秘未知食材';

    const ingreWithId = { name: ingredientName, boilTime, id: new Date().getTime() };
    $list = [...$list, ingreWithId];
		dispatch('closeDrawer');
  }

</script>

<form class="flex flex-col items-center gap-2">
	<div class="input-group input-group-divider grid-cols-[auto_1fr] h-10">
		<div>{$t('popMenu.ingreName')}</div>
		<input class="pl-2" type="text" bind:value={ingredientName} placeholder="{$t('popMenu.ingreName')}"/>
	</div>
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] h-10">
		<div>{$t('popMenu.boilTime')}</div>
		<input class="pl-2" type="number" bind:value={boilTime} min="0" max="600" placeholder="{$t('popMenu.boilTime')}" />
		<div>{$t('popMenu.boilTimeInterval')}</div>
	</div>
	<button type="button" class="btn btn-md variant-filled-surface w-1/2" on:click={addIngre}>{$t('popMenu.addIngredient')}</button>
</form>

<style>
  input:focus-visible {
    outline: none;
  }
</style>