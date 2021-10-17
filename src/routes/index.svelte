<script>
  import Toggle from '$lib/Toggle.svelte';

  let isToggled = false;
</script>

<h1>Welcome to Levelup UI SvelteKit Components</h1>

<Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor: #b7e4c7" />

{#if isToggled}
  <h1>I'm toggled</h1>
{/if}
