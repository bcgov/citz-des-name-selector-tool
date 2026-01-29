<script lang="ts">
import './app.css';
import { Input } from "./lib/components/ui/input/index.js";
import { Label } from "./lib/components/ui/label/index.js";

let fullName = $state({
  first: {
    name: "",
  },
  middle: {
    names: "",
  },
  last: {
    name: "",
  }
});

$effect(() => {
  let names = fullName.middle.names.split(' ');

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

  if (fullName.middle.names.length > 0) {
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
          bind:value={fullName.first.name} />
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
          bind:value={fullName.middle.names} />
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
          bind:value={fullName.last.name} />
        <br>
      </div>

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

    </div>
  </form>
  </div>

</main>