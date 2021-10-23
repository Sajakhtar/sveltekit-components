<script>
  import { fade } from 'svelte/transition';
  export let items;
  let search =  '';
  let isFocused = false;

  $: filteredSearch = items.filter((item) => {
    return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
</script>

<label>
  Search names:
  <br>
  <input type="text" bind:value={search} on:focus={() => (isFocused = true)} />
</label>

{#if isFocused}
  <ul transition:fade={{ duration: 200 }} >
    {#each filteredSearch as item}
    <li
      transition:fade={{ duration: 200 }}
      on:click={() => {
      search = item;
      isFocused = false;
      }}>{item}</li>
    {/each}
  </ul>
{/if}
