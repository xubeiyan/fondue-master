<script>
	import { t } from '$src/i18n/i18n';
	import { list } from '$src/store';

	const remove = (id) => {
		$list = $list.filter((one) => one.id != id);
	};

</script>

<div class="wrapper h-full m-4">
	<h4 class="h4">{$t('app.ingredientList')}</h4>
	<ul class="list mx-6">
		{#each $list as one (one.id)}
			<li class="flex justify-between">
				<span>{one.name}</span>
				<span>还剩 {one.boilTime} 秒</span>
				<button
					type="button"
					class="btn btn-sm variant-ghost-warning"
					on:click={() => remove(one.id)}>删除</button
				>
			</li>
		{/each}
	</ul>
</div>
