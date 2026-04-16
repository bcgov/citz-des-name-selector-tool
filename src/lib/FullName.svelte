<script lang="ts">
    import { Label } from './components/ui/label/index.js';
    import InputLabel from './components/ui/input-label/InputLabel.svelte';
    import { fullName } from './shared.svelte.ts';
    import {
        isGreaterThanMinLength,
        isLessThanOrEqualToMaxLength,
        isLessThanOrEqualToMaxNames,
    } from './utils.ts';

    $effect(() => {
        // First Name Checks
        if (!isLessThanOrEqualToMaxLength(fullName.first.name, 12))
            console.log(
                'Your Legal First Name exceeds the maximum allowable length for your first name'
            );
        else if (!isGreaterThanMinLength(fullName.first.name))
            console.log(
                'Your Legal First Name is less than the minimum allowable length for your first name'
            );
        else if (!isLessThanOrEqualToMaxNames(fullName.first.name, 1))
            console.log(
                'The amount of Legal First Names exceeds the maximum number of names allowed'
            );

        // Last Name Checks
        if (!isLessThanOrEqualToMaxLength(fullName.last.name, 18))
            console.log(
                'Your Legal Last Name exceeds the maximum allowable length for your last name'
            );
        if (!isGreaterThanMinLength(fullName.last.name))
            console.log(
                'Your Legal Last Name is less than the minimum allowable length for your first name'
            );
        else if (!isLessThanOrEqualToMaxNames(fullName.last.name, 1))
            console.log(
                'The amount of Legal Last Names exceeds the maximum number of names allowed'
            );

        if (!isLessThanOrEqualToMaxNames(fullName.middle.name, 2))
            console.log(
                'The amount of Legal Middle Names exceeds the maximum number of names allowed'
            );

        if (isGreaterThanMinLength(fullName.middle.name)) {
            let names = fullName.middle.name.split(' ');
            if (!isLessThanOrEqualToMaxLength(names[0], 12))
                console.log(
                    'Your first Legal Middle Name exceeds the maximum length of a middle name'
                );

            if (names[1] && !isLessThanOrEqualToMaxLength(names[1], 12))
                console.log(
                    'Your second middle name exceeds the maximum length of a middle name'
                );
        }
    });
</script>

<div class="text-sm">
    <Label class="text-lg font-bold">Enter your Indigenous language Name</Label>

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

    <br />

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
</style>
