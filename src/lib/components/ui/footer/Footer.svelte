<script lang="ts">
import { scrollY, innerHeight } from 'svelte/reactivity/window';
import Button from '../button/button.svelte';
import { step } from '../../../shared.svelte.ts';

let active: boolean = $state(true);

$effect(() => {
  console.log('Step: ', step);
  if (scrollY.current)
    if (innerHeight.current)
      if (scrollY.current < innerHeight.current - 200) {
        active = true;
      }
      else {
        active = false;
      }
});

</script>


<footer class:shadow={active === true} class="bg-white fixed w-screen z-1000 h-10 flex justify-center">
<!-- <footer class:shadow={active === true} class="fixed w-screen z-1000 h-10 bg-red-50 flex justify-center"> -->
    {#if scrollY.current !== undefined && innerHeight.current !== undefined && scrollY.current < innerHeight.current - 100}
        <p class="self-center shadow">(Scroll Down)</p>
    {:else}
        <Button class="self-center" onclick={() => {
                console.log('thing');
                if (step.value === 1) step.value = 2;
            }}>
            Next
        </Button>
    {/if}
</footer>

<style>
  footer {
    bottom: 0px;
  }
  .shadow {
    box-shadow: 0px -15px 15px 0px #fff;
  }
</style>
