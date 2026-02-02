<script lang="ts">
import Label from "../label/label.svelte";
import Input from "../input/input.svelte";

let {
    id,
    label,
    placeholder,
    value = $bindable()
} = $props();
</script>

<main>
    <div class="flex w-full rmax-w-sm flex-col gap-1.5">
        <Label
            class="font-bold"
            for=id>
            {label}
        </Label>
        <Input
            class="text-sm"
            type="text"
            id={id}
            placeholder={placeholder}
            bind:value={value.name} />
        <br>
    </div>
</main>

<style>
</style>