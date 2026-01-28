<script lang="ts">
import './app.css';
import svelteLogo from './assets/svelte.svg';
import viteLogo from '/vite.svg';
import Counter from './lib/Counter.svelte';
import { Input } from "./lib/components/ui/input/index.js";
import { Label } from "./lib/components/ui/label/index.js";

let fullName = $state("");

interface Name {
  name: string;
  characters: number;
};

$effect(() => {
  let names: Name[] = [];
  fullName.split(" ").forEach((name: string) => {
    console.log(name);

  });

  // if (fullName.length > 0) {
  //   if (names <= 4) {
  //       // console.log("Okay");
  //   } else {
  //       // console.log("Too many names");
  //   }
  // }

});

</script>

<main class="flex items-center justify-center min-h-screen bg-gray-100">
 
  <form>
    <div class="min-h-100 flex flex-col justify-evenly border-b border-t border-gray-900/10 p-12">

      <div class="flex w-full max-w-sm flex-col gap-1.5">
        <Label for="full-name">Legal First Name:</Label>
        <Input type="text" id="full-name" placeholder="" bind:value={fullName} />
        <p class="text-muted-foreground text-sm">Enter your full name.</p>
      </div>

      <div class="flex w-full max-w-sm flex-col gap-1.5">
        <Label for="full-name">Legal Middle Name(s):</Label>
        <Input type="text" id="full-name" placeholder="" bind:value={fullName} />
        <p class="text-muted-foreground text-sm">Enter your full name.</p>
      </div>

      <div class="flex w-full max-w-sm flex-col gap-1.5">
        <Label for="full-name">Legal Last Name:</Label>
        <Input type="text" id="full-name" placeholder="" bind:value={fullName} />
        <p class="text-muted-foreground text-sm">Enter your full name.</p>
      </div>

    </div>
  </form>

</main>

<style>
</style>
