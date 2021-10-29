<script>
  import { tweened } from 'svelte/motion';
  import { onMount } from 'svelte';
  import { toast } from './toast';

  export let message = '';
  export let duration = 1000;


  let progress = tweened(100, { duration });

  onMount(async () => {
    await progress.set(0);
    toast.remove();
  });
</script>


<div style={`width: ${$progress}%; height: 10px; background: green;`} />
<p>{message}</p>


<style>
  p {
    margin: 0;
  }
</style>
