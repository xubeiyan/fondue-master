<script>
	// store
	import { list } from '$src/store';
	// 预先定义好的食材数据
	import { predefined } from '$src/lib/predefinedIngredient';

	let reduced = {};
	predefined.reduce((prev, current) => {
		if (prev[current.boilTime] == undefined) {
			prev[current.boilTime] = [current];
		} else {
			prev[current.boilTime].push(current);
		}

		return prev;
	}, reduced);

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const addIngre = (ingre) => {
		const ingreWithId = { ...ingre, id: new Date().getTime() };
		// push不会影响 array 的 reactivity
		// 参见 https://learn.svelte.dev/tutorial/updating-arrays-and-objects
		// $list.push(ingre) <- not work
		$list = [...$list, ingreWithId];
		dispatch('closeDrawer');
	};

  import { t } from '$src/i18n/i18n';
</script>

{#each Object.entries(reduced) as [type, values]}
	<h4 class="h4">{type} {$t('popMenu.boilTimeInterval')}</h4>
	<div class="flex gap-2 mb-2 flex-wrap">
		{#each values as v}
			<span
				role="button"
				tabindex={1}
				class="chip variant-ghost text-lg"
				on:click={() => addIngre(v)}
				on:keydown={() => {}}>{v.name}</span
			>
		{/each}
	</div>
{/each}
