<script>
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
  import FondueIcon from '$src/asset/icons/fondue.svelte';
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