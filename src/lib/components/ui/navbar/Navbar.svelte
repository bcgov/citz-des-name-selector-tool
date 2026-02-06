<script lang="ts">
import Label from "../label/label.svelte";
import { scrollY } from 'svelte/reactivity/window';

let active = $state(false);

$effect(() => {
  if (scrollY.current)
      if (scrollY.current > 100) {
        active = true;
      }
      else {
        active = false;
      }
});
</script>

  <!-- class="z-1000 w-screen h-15 bg-red-50"> -->

<nav
  class:shadow={active === true}
  class="z-1000 w-screen h-15 bg-white">
  <ul class="h-15 flex flex-row justify-between">
    <li class="ml-7 flex items-end">
    <!-- <li class="ml-7 bg-yellow-50 flex items-end"> -->
      {#if scrollY.current !== undefined && scrollY.current < 100}
      <Label class="text-lg font-bold">
        Step 1
      </Label>
      {/if}
    </li>
    <!-- <li class="bg-yellow-50 self-start"> -->
    <li class="self-start">
      {#if scrollY.current !== undefined && scrollY.current > 100}
      <p>(Scroll Up)</p>
      {/if}
    </li>
    <li class="w-15 flex justify-center">
    <!-- <li class="w-15 bg-yellow-50 flex justify-center"> -->
      <Label>Logo</Label>
    </li>
  </ul>
</nav>

<style>
  nav {
      position: fixed;
      top: 0px;
      left: 0px;
  }
  .shadow {
    box-shadow: 0px 15px 15px 0px #fff;
  }
</style>