<script lang="ts">
    import { Label } from './components/ui/label/index.js';
    import InputLabel from './components/ui/input-label/InputLabel.svelte';
    import { errors, fullName } from './shared.svelte.ts';
    import {
        checkErrorForMaxLength,
        checkErrorForMaxNames,
        checkErrorForMinLength,
        isGreaterThanMinLength,
    } from './utils.ts';
    import { rules } from './rules-configuration.ts';

    $effect(function () {
        $inspect(errors.value);

        // First name
        checkErrorForMinLength(
            fullName.first.name,
            rules.legalName.first.length.minimum
        );

        checkErrorForMaxLength(
            fullName.first.name,
            rules.legalName.first.length.maximum
        );

        checkErrorForMaxNames(
            fullName.first.name,
            rules.legalName.first.count
        );

        // Middle name
        if (isGreaterThanMinLength(fullName.middle.name)) {
            let names = fullName.middle.name.split(' ');
            checkErrorForMaxLength(
                names[0],
                rules.legalName.middle.length[0].maximum
            );

            if (names[1])
                checkErrorForMaxLength(
                    names[1],
                    rules.legalName.middle.length[1].maximum
                );
        }

        checkErrorForMaxNames(
            fullName.middle.name,
            rules.legalName.middle.count
        );

        // Last name
        checkErrorForMinLength(
            fullName.last.name,
            rules.legalName.last.length.minimum
        );

        checkErrorForMaxLength(
            fullName.last.name,
            rules.legalName.last.length.maximum
        );

        checkErrorForMaxNames(
            fullName.last.name,
            rules.legalName.last.count
        );
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
        placeholder={`Max. ${rules.legalName.first.length.maximum.value} Characters`}
        bind:value={fullName.first}
    />

    <InputLabel
        id="middle-names"
        label="Legal Middle Name(s):"
        placeholder={`Max. ${rules.legalName.middle.length[0].maximum.value} Characters (Max ${rules.legalName.middle.count.value} Names)`}
        bind:value={fullName.middle}
    />

    <InputLabel
        id="last-names"
        label="Legal Last Name:"
        placeholder={`Max. ${rules.legalName.last.length.maximum.value} Characters`}
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
