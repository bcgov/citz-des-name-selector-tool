<script lang="ts">
import './app.css';
import { Lasso, NotepadText } from '@lucide/svelte';
import { Label } from "./lib/components/ui/label/index.js";
import InputLabel from './lib/components/ui/input-label/InputLabel.svelte';
import Navbar from './lib/components/ui/navbar/Navbar.svelte';
import Footer from './lib/components/ui/footer/Footer.svelte';
import FullName from './lib/FullName.svelte';

import { altName } from './lib/shared.svelte.ts';

</script>

<main class="flex flex-col items-center justify-center min-h-screen">
  <Navbar />
 
  <form class="mt-15 absolute top-0 px-7 pb-15">
  <!-- <form class="bg-blue-50 mt-15 absolute top-0 px-7 pb-15"> -->

      <FullName />

      <br>

      <Label class="text-lg font-bold">
        Next select an Alternate Spelling version of your name
      </Label>

      <br>

      <div class="flex w-full max-w-sm flex-col">
        <Label
          class="font-bold">
          Alternate Spelling
        </Label>
        <p>
          Next, enter your alternate (A-Z) spelling:
        </p>
        <br>
      </div>

      <InputLabel
        id="alt-first-name"
        label="Alternate Spelling of First Name:"
        placeholder="Max. 12 Characters"
        bind:value={altName.first} />

      <InputLabel
        id="alt-middle-name"
        label="Alternate Spelling of Middle Name(s):"
        placeholder="Max. 12 Characters (Max 2 Names)"
        bind:value={altName.middle} />

      <InputLabel
        id="alt-last-name"
        label="Alternate Spelling of Last Name:"
        placeholder="Max. 18 Characters"
        bind:value={altName.last} />
      
      <div>
        <!-- Block for input errors -->
      </div>

      <div class="flex w-full max-w-sm flex-col border-b text-base">
        <Label
          class="font-bold text-base">
          Alternate Spelling Name you entered
        </Label>
        <i>(if you need to adjust anything, re-enter above)</i>
        <br>
        <p>Placeholder Name</p>
      </div>

      <br>

      <p>If you are happy with the name versions you entered above,
        please hit the ‘Next” button to see them together and take
        a screenshot</p>
      
      <br>

  </form>
        
  <Footer />

</main>

<style>
</style>
