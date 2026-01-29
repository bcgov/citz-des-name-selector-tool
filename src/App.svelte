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

<main class="flex flex-col items-center justify-center min-h-screen">

  <nav class="fixed top-0 w-screen h-15 bg-red-50 content-center">
    <ul class="h-15 pl-7 flex flex-row justify-between">
      <li class="bg-yellow-50 flex justify-center">
        <Label class="text-lg font-bold">
          Step 1
        </Label>
      </li>
      <li class="w-15 bg-yellow-50 flex justify-center">
        <Label>Logo</Label>
      </li>
    </ul>
  </nav>
 
  <div class="bg-blue-50 mt-15 absolute top-0">
  <form class="px-7">
    <div class="text-sm">
      <Label class="text-lg font-bold">
        Enter your Indigenous language Name
      </Label>

      <p>
        The <b>First Voices</b> program provides keyboards for enabling search, and smart
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
          class="font-bold"
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
          class="font-bold"
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
          class="font-bold"
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
          class="font-bold">
          <i>Full Legal Name</i> you entered
        </Label>
        <p>
          (if you need to adjust anything, re-enter above)
        </p>
        <br>
      </div>

      <div class="flex w-full max-w-sm flex-col border-b text-base">
        <Label
          class="text-base font-bold">
          Full Legal Name
        </Label>
        <p>Placeholder Name</p>
      </div>

    </div>
  </form>
  </div>

</main>