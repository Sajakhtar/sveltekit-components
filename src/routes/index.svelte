<script>
  import Toggle from '$lib/Toggle.svelte';
  import Accordion from '$lib/Accordion.svelte';
  import BetterAccordion from '$lib/BetterAccordion.svelte';
  import SearchFilter from '$lib/SearchFilter.svelte';
  import Field from '$lib/Field.svelte';
  import Markdown from '$lib/Markdown.svelte';
  import Portal from '$lib/Portal.svelte';
  import Modal from  '$lib/Modal.svelte';
  import Toast from '$lib/toast/Toast.svelte';
  import { toast } from '$lib/toast/toast';

  let isToggled = false;
  let isModalOpen = false;

  let search = '';
  let items = ['Jack', 'Jon', 'Jill', 'Jane', 'Joe ', 'Jim', 'John', 'Jen'];

  let text = '';
  $: console.log(text);
</script>

<h1>Welcome to Levelup UI SvelteKit Components</h1>

<!-- <Portal>
  <Markdown bind:text />
</Portal> -->


<!-- <Accordion isOpen={true} buttonText={"FAQ: How to reset password?"} >
  <div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit fugiat sed voluptatem nobis aspernatur dolore accusamus atque dolores corporis ullam, totam optio facilis esse maiores inventore, laudantium consequuntur laboriosam!</p>
  </div>
</Accordion> -->

<!-- <Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor: #b7e4c7" /> -->

{#if isToggled}
  <h1>I'm toggled</h1>
{/if}

<!-- <BetterAccordion isOpen={false} buttonText={"Better Accordion: FAQ- How to reset password?"} >
  <div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit fugiat sed voluptatem nobis aspernatur dolore accusamus atque dolores corporis ullam, totam optio facilis esse maiores inventore, laudantium consequuntur laboriosam!</p>
  </div>
</BetterAccordion> -->

<Field bind:value={search} label="Search" instructions="Type a name to search" placeholder="first name" />
<Field value={0} label="Number" type="number" />

<p>Current search: {search}</p>
<SearchFilter {items} bind:search />


<Modal bind:isModalOpen>
  <div style="background: white; box-shadow: 1px 1px 4px rgba(0,0,0,0.3);">
    <Field bind:value={search} label="Search" instructions="Type a name to search" placeholder="first name" />
    <Field value={0} label="Number" type="number" />
  </div>
</Modal>

<button on:click={() => isModalOpen = true }>Open Modal Form</button>

<Toast />
<button on:click={() => (toast.send('New Message!')) }>New Toast</button>
