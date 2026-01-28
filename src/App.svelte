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
    <div class="min-h-100 flex flex-col justify-evenly p-12">

      <p>
        The First Voices program provides keyboards for enabling search, and smart
        phone apps for Apple and Android.
      </p>

      <br>

      <p>
        Click <a href="https://www.firstvoices.com/keyboards" target="_blank">here</a> to access/download First Voices Indigenous Language Keyboards and
        type or copy/paste your Indigenous name into the Legal Name field(s) below:
      </p>

      <br>

      <div class="flex w-full rmax-w-sm flex-col gap-1.5">
        <Label
          class="text-sm font-bold"
          for="first-name">
          Legal First Name:
        </Label>
        <Input
          class="text-sm"
          type="text"
          id="first-name"
          placeholder="Max. 12 Characters"
          bind:value={fullName} />
        <br>
      </div>

      <div class="flex w-full max-w-sm flex-col gap-1.5">
        <Label
          class="text-sm font-bold"
          for="middle-names">
          Legal Middle Name(s):
        </Label>
        <Input
          class="text-sm"
          type="text"
          id="middle-names"
          placeholder="Max. 12 Characters (Max 2 Names)"
          bind:value={fullName} />
        <br>
      </div>

      <div class="flex w-full max-w-sm flex-col gap-1.5">
        <Label
          class="text-sm font-bold"
          for="last-name">
          Legal Last Name:
        </Label>
        <Input
          class="text-sm"
          type="text"
          id="last-name"
          placeholder="Max. 18 Characters"
          bind:value={fullName} />
        <br>
      </div>

      <div class="flex w-full max-w-sm flex-col">
        <Label
          class="text-sm font-bold">
          Full Legal Name you entered
        </Label>
        <p>
          (if you need to adjust anything, re-enter above)
        </p>
        <br>
      </div>

      <div class="flex w-full max-w-sm flex-col border-b">
        <Label
          class="text-base font-bold">
          Full Legal Name
        </Label>
        <p>Placeholder Name</p>
      </div>

    </div>
  </form>

</main>

<style>
p {
  font-size: small;
}
</style>
