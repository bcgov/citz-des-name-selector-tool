<script lang="ts">
import Label from "../label/label.svelte";
</script>

<main>
  <nav class="fixed left-0 top-0 w-screen h-15 bg-red-50 content-center">
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