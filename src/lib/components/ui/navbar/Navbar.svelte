<script lang="ts">
import Label from "../label/label.svelte";
</script>

<main>
  <nav class="z-1000 w-screen h-15 bg-red-50">
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
</main>

<style>
    nav {
        position: fixed;
        top: 0px;
        left: 0px;
    }
</style>