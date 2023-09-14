<script>
	import RecycleBinIcon from '$src/asset/icons/recycleBin.svelte';

	export let name = 'unknown name';
	export let boilTime = 365;
	export let id = 0;

	import { list } from '$src/store';
	const remove = (id) => {
		$list = $list.filter((one) => one.id != id);
	};

	import { t } from '$src/i18n/i18n';
</script>

<li class="flex justify-between">
	<span>{name}</span>
	{#if boilTime > 0}
		<span>{$t('list.timeLeft', { boilTime })}</span>
	{:else}
		<span class="animate-bounce">{$t('list.enjoyable')}</span>
	{/if}
	<button type="button" class="btn btn-sm variant-ghost-surface" on:click={() => remove(id)}>
		<RecycleBinIcon />
	</button>
</li>
