<script lang="ts">
import { Label } from "./components/ui/label/index.js";
import InputLabel from './components/ui/input-label/InputLabel.svelte';
import { altName } from './shared.svelte.ts';

$effect(() => {
    
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
