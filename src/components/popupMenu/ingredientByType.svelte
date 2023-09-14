<script>
	// 预先定义好的食材数据
	import { predefined } from '$src/lib/predefinedIngredient';

	let reduced = {};
	predefined.reduce((prev, current) => {
		if (prev[current.type] == undefined) {
			prev[current.type] = [current];
		} else {
			prev[current.type].push(current);
		}

		return prev;
	}, reduced);

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const addIngre = (ingre) => {
		dispatch('closeDrawer');
	};
</script>

{#each Object.entries(reduced) as [type, values]}
	<h4 class="h4">{type}</h4>
	<div class="flex gap-2 mb-2">
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
