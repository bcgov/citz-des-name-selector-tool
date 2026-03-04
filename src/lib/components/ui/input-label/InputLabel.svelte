<script lang="ts">
    import Label from '../label/label.svelte';
    import Input from '../input/input.svelte';

    let { id, label, placeholder, value = $bindable() } = $props();
</script>

<!--
Old code
<div class="flex w-full rmax-w-sm flex-col gap-1.5">
    <Label class="font-bold" for={id}>
        {label}
    </Label>
    <Input
        class="text-sm"
        type="text"
        {id}
        {placeholder}
        bind:value={value.name}
    />
    <br />
</div>-->

<div
    id={id}
    style="
        font: var(--typography-regular-body);
        padding: var(--layout-padding-none);
        color: var(--typography-color-primary);
        border: none;
        flex-grow: 1;
    ">

    <label
        style="
            font: var(--typography-regular-small-body);
            color: var(--typography-color-primary);
            padding: var(--layout-padding-xsmall) var(--layout-padding-none);">
        {label}
    </label>

    <div
        style="
        color: var(--typography-color-primary);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--layout-margin-small);
        background: var(--surface-color-forms-default);
        box-sizing: border-box;
        border: var(--layout-border-width-small) solid var(--surface-color-border-default);
        border-radius: var(--layout-border-radius-medium);
        padding: var(--layout-padding-small) 12px;">
        <input
            style="
                font: var(--typography-regular-body);
                padding: var(--layout-padding-none);
                color: var(--typography-color-primary);
                border: none;
                flex-grow: 1;"
                bind:value={value.name} />
    </div>

    <span
        style="
            font: var(--typography-regular-small-body);
            color: var(--typography-color-secondary);
            padding: var(--layout-padding-xsmall) var(--layout-padding-none);">
        {placeholder}
    </span>
</div>

<style>
</style>
