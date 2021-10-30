<script>
  // import { tweened } from 'svelte/motion';
  import { fly, fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import Portal from '../Portal.svelte';
  import { toast } from './toast';
  import ToastMessage from './ToastMessage.svelte';

  // export let duration;

  // let progress = tweened(0, { duration: 1000 });

  // async function updateProgress() {
  //   const newProgress = Math.random() * 100;
  //   await progress.set(newProgress);
  //   toast.remove();
  // }
</script>

<!-- <h1>{$progress}</h1> -->
<!-- <div style={`width: ${$progress}%; height: 10px; background: green;`} /> -->
<!-- <button on:click={updateProgress}>Go</button> -->

<!-- <Portal>
  <div class="toast-wrapper">
    {#each $toast as message (message)}
      <div on:click={toast.remove} animate:flip in:fly={{ opacity: 0, x: 100 }} out:fade class="toast">
        <p>
          {message}
        </p>
        <ToastMessage {message} {duration} />
      </div>
    {/each}
  </div>
</Portal> -->


<!-- <style>
  .toast-wrapper {
    position: fixed;
    bottom: 0;
    right: 20px;
  }

  .toast {
    margin-bottom: 1rem;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    background: white;
  }

  /* p {
    margin: 0;
  } */
</style> -->


<Portal>
	<div class="toast-wrapper">
		{#each $toast as message (message.id)}
			<div
				on:click={() => toast.remove(message.id)}
				in:fly={{ opacity: 0, x: 100 }}
				out:fade
				animate:flip
				class={`toast ${message.type.toLowerCase()}`}
			>
				<ToastMessage {message} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}

	.toast {
		overflow: hidden;
		position: relative;
		margin-bottom: 1rem;
		color: white;
		background: var(--toast-background, #625df5);
		padding: 20px;
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
	}

	.toast.error {
		background: var(--toast-error-background, #e54b4b);
		color: black;
	}
</style>
