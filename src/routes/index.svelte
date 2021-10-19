<script>
  import Toggle from '$lib/Toggle.svelte';
  import Accordion from '$lib/Accordion.svelte';
  import BetterAccordion from '$lib/BetterAccordion.svelte';

  let isToggled = false;
</script>

<h1>Welcome to Levelup UI SvelteKit Components</h1>


<Accordion isOpen={true} buttonText={"FAQ: How to reset password?"} >
  <div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit fugiat sed voluptatem nobis aspernatur dolore accusamus atque dolores corporis ullam, totam optio facilis esse maiores inventore, laudantium consequuntur laboriosam!</p>
  </div>
</Accordion>

<Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor: #b7e4c7" />

{#if isToggled}
  <h1>I'm toggled</h1>
{/if}

<BetterAccordion isOpen={false} buttonText={"Better Accordion: FAQ- How to reset password?"} >
  <div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit fugiat sed voluptatem nobis aspernatur dolore accusamus atque dolores corporis ullam, totam optio facilis esse maiores inventore, laudantium consequuntur laboriosam!</p>
  </div>
</BetterAccordion>
