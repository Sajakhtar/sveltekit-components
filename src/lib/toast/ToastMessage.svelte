<script>
  import { tweened } from 'svelte/motion';
  import { onMount } from 'svelte';
  import { toast } from './toast';

  // export let message = '';
  // export let duration = 1000;


  // let progress = tweened(100, { duration });

  // onMount(async () => {
  //   await progress.set(0);
  //   toast.remove();
  // });

  export let message;

	let progress = tweened(100, { duration: message.duration });

  onMount(async () => {
		await progress.set(0);
		toast.remove(message.id);
	});
</script>

<!-- <div style={`width: ${$progress}%; height: 10px; background: green;`} /> -->
<!-- <p>{message}</p> -->

<!-- <style>
  p {
    margin: 0;
  }
</style> -->

<div class="progress" style={`width: ${$progress}%;`} />
<p>{message.message}</p>


<style>
	.progress {
		height: 8px;
		background: white;
		opacity: 0.3;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	p {
		margin: 0;
	}
</style>
