<script lang="ts">
    import { Label } from './components/ui/label/index.js';
    import InputLabel from './components/ui/input-label/InputLabel.svelte';
    import { fullName } from './shared.svelte.ts';
    import "@bcgov/design-tokens/css/variables.css";

    $effect(() => {
        let names = fullName.middle.name.split(' ');

        let name = $derived(fullName.first.name);
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

<div class="text-sm">
    <Label class="text-lg font-bold">Enter your Indigenous language Name</Label>
    <!-- {#if window.scrollY === 0}
  <p>here</p>
  {:else}
  <p></p>
  {/if} -->

    <p>
        The <b>First Voices</b> program provides keyboards for enabling search, and
        smart phone apps for Apple and Android.
    </p>

    <br />

    <p>
        Click <a href="https://www.firstvoices.com/keyboards" target="_blank"
            >here</a
        > to access/download First Voices Indigenous Language Keyboards and type or
        copy/paste your Indigenous name into the Legal Name field(s) below:
    </p>

    <br />

    <InputLabel
        id="first-name"
        label="Legal First Name:"
        placeholder="Max. 12 Characters"
        bind:value={fullName.first}
    />

    <div
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
            Thing
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
                placeholder="thing" />
        </div>

        <span
            style="
                font: var(--typography-regular-small-body);
                color: var(--typography-color-secondary);
                padding: var(--layout-padding-xsmall) var(--layout-padding-none);">
            Other thing
        </span>
    </div>

    <InputLabel
        id="middle-names"
        label="Legal Middle Name(s):"
        placeholder="Max. 12 Characters (Max 2 Names)"
        bind:value={fullName.middle}
    />

    <InputLabel
        id="last-names"
        label="Legal Last Name:"
        placeholder="Max. 18 Characters"
        bind:value={fullName.last}
    />

    <div class="flex w-full max-w-sm flex-col border-b text-base">
        <Label class="font-bold text-base">
            <i>Full Legal Name</i> you entered
        </Label>
        <i>(if you need to adjust anything, re-enter above)</i>
        <br />
        <p>
            {#if fullName.last.name.length > 0}
                {fullName.last.name},
            {:else}
                {fullName.last.name}
            {/if}
            {fullName.first.name}
            {fullName.middle.name}
        </p>
    </div>
</div>

<style>
    input {
    }
</style>
