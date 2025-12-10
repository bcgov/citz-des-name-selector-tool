<script lang="ts">
  import './app.css';
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
  import Counter from './lib/Counter.svelte';
 import { Input } from "$lib/components/ui/input/index.js";
 import { Label } from "$lib/components/ui/label/index.js";
</script>

<main class="flex items-center justify-center min-h-screen bg-gray-100">
 
  <form>
    <div class="min-h-100 flex flex-col justify-evenly border-b border-t border-gray-900/10 p-12">

      <div class="flex w-full max-w-sm flex-col gap-1.5">
        <Label for="first-name">First name</Label>
        <Input type="text" id="first-name" placeholder="" />
        <p class="text-muted-foreground text-sm">Enter your first name.</p>
      </div>

      <div class="flex w-full max-w-sm flex-col gap-1.5">
        <Label for="last-name">Last name</Label>
        <Input type="text" id="last-name" placeholder="" />
        <p class="text-muted-foreground text-sm">Enter your last name.</p>
      </div>

    </div>
  </form>

</main>

<style>
</style>
