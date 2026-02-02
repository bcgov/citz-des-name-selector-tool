<script lang="ts">
import './app.css';
import { Label } from "./lib/components/ui/label/index.js";
import InputLabel from './lib/components/ui/input-label/InputLabel.svelte';
import { Lasso } from '@lucide/svelte';

let fullName = $state({
  first: {
    name: "",
  },
  middle: {
    name: "",
  },
  last: {
    name: "",
  }
});

let altName = $state({
  first: {
    name: ""
  },
  middle: {
    name: ""
  },
  last: {
    name: ""
  }
})

$effect(() => {
  let names = fullName.middle.name.split(' ');

  if (fullName.first.name.length > 12)
    console.log(
      'Your Legal First Name exceeds the maximum allowable length for your first name'
    );
  else if (fullName.first.name.split(' ').length > 1)
    console.log(
      'The amount of Legal First Names exceeds the maximum number of names allowed'
    );

  if (fullName.last.name.length > 18)
    console.log(
      'Your Legal Last Name exceeds the maximum allowable length for your last name'
    );
  else if (fullName.last.name.split(' ').length > 1)
    console.log(
      'The amount of Legal Last Names exceeds the maximum number of names allowed'
    );

  if (fullName.middle.name.length > 0) {
    if (names.length > 2)
      console.log(
        'The amount of Legal Middle Names exceeds the maximum number of names allowed'
      );
    else {
      if (names[0].length > 12)
        console.log(
          'Your first Legal Middle Name exceeds the maximum length of a middle name'
        );

      if (names[1]?.length > 12)
        console.log(
          'Your second middle name exceeds the maximum length of a middle name'
        );
    }
  }

});

</script>

<main class="flex flex-col items-center justify-center min-h-screen">

  <nav class="fixed top-0 w-screen h-15 bg-red-50 content-center">
    <ul class="h-15 pl-7 flex flex-row justify-between">
      <li class="bg-yellow-50 flex items-end">
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

      <InputLabel
        id="first-name"
        label="Legal First Name:"
        placeholder="Max. 12 Characters"
        bind:value={fullName.first} />

      <InputLabel
        id="middle-names"
        label="Legal Middle Name(s):"
        placeholder="Max. 12 Characters (Max 2 Names)"
        bind:value={fullName.middle} />

      <InputLabel
        id="last-names"
        label="Legal Last Name:"
        placeholder="Max. 18 Characters"
        bind:value={fullName.last} />
      
      <div class="flex w-full max-w-sm flex-col">
        <Label
          class="font-bold">
          <i>Full Legal Name</i> you entered
        </Label>
        <p>
          <i>(if you need to adjust anything, re-enter above)</i>
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

      <div class="flex w-full max-w-sm flex-col">
        <Label
          class="font-bold">
          Alternate Spelling Name you entered
        </Label>
        <p>
          <i>(if you need to adjust anything, re-enter above)</i>
        </p>

        <!-- <p> Input random name </p> -->

        <br>
      </div>

      <p>If you are happy with the name versions you entered above,
        please hit the ‘Next” button to see them together and take
        a screenshot</p>
      
      <br>

    </div>
  </form>
  </div>

</main>