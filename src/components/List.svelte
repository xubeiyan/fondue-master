<script>
	import { t } from '$src/i18n/i18n';
	import { list } from '$src/store';
	import { onMount } from 'svelte';

	import ListItem from './list/ListItem.svelte';

	const updateList = () => {
		$list = $list.map(one => ({
			...one,
			boilTime: one.boilTime - 1 > 0 ? one.boilTime - 1 : 0,
		}));
	}

	onMount(() => {
		const timer = setInterval(() => {
			updateList();
		}, 1000);

		return () => {
			clearInterval(timer);
		}
	});
</script>

<div class="wrapper h-full m-4">
	<h4 class="h4">{$t('list.ingredientList')}</h4>
	<ul class="list mx-6">
		{#each $list as one (one.id)}
			<ListItem id={one.id} name={one.name} boilTime={one.boilTime} />
		{/each}
	</ul>
</div>
