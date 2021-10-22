<script>
  export let items;
  let search =  '';

  $: filteredSearch = items.filter((item) => {
    return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
</script>

<label>
  Search names:
  <br>
  <input type="text" bind:value={search}>
</label>

<ul>
  {#each filteredSearch as item}
  <li on:click={() => search = item}>{item}</li>
  {/each}
</ul>
