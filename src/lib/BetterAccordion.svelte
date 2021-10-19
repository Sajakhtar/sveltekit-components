<script>
  import { slide } from './Slide';
  export let buttonText = "";
  export let isOpen = true;
</script>


<div>
  <button on:click={ () => (isOpen = !isOpen) } >{buttonText}</button>
  <div use:slide={isOpen}>
    <slot />
  </div>
</div>
