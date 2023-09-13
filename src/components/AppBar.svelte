<script>
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
  import FondueIcon from '$src/asset/icons/fondue.svelte';

  import { t } from '$src/i18n/i18n';
</script>

<AppBar>
	<svelte:fragment slot="lead">
    <a href="/">
      <FondueIcon />
    </a>
	</svelte:fragment>
	<h1 class="h1">{$t('app.title')}</h1>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>