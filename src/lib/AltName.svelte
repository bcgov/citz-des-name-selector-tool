<script lang="ts">
import { Label } from "./components/ui/label/index.js";
import InputLabel from './components/ui/input-label/InputLabel.svelte';
import { altName } from './shared.svelte.ts';

$effect(() => {
  let names = altName.middle.name.split(' ');

  if (altName.first.name.length > 12)
    console.log(
      'Your Legal First Name exceeds the maximum allowable length for your first name'
    );
  else if (altName.first.name.split(' ').length > 1)
    console.log(
      'The amount of Legal First Names exceeds the maximum number of names allowed'
    );

  if (altName.last.name.length > 18)
    console.log(
      'Your Legal Last Name exceeds the maximum allowable length for your last name'
    );
  else if (altName.last.name.split(' ').length > 1)
    console.log(
      'The amount of Legal Last Names exceeds the maximum number of names allowed'
    );

  if (altName.middle.name.length > 0) {
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

<div>
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
</div>
