<script lang="ts">
    import { Label } from './components/ui/label/index.js';
    import InputLabel from './components/ui/input-label/InputLabel.svelte';
    import { altName, errors, type ErrorRule } from './shared.svelte.ts';
    import {
        checkErrorForASCII,
        checkErrorForMaxLength,
        checkErrorForMaxNames,
        checkErrorForMinLength,
        isASCII,
        isGreaterThanMinLength,
        isLessThanOrEqualToMaxLength,
        isLessThanOrEqualToMaxNames,
    } from './utils.ts';
    import { rules } from './rules-configuration.ts';

    $effect(function () {
        $inspect(errors.value);

        // First Name Check
        checkErrorForMinLength(
            altName.first.name,
            rules.alternateName.first.length.minimum
        );
        checkErrorForMaxLength(
            altName.first.name,
            rules.alternateName.first.length.maximum
        );
        checkErrorForMaxNames(
            altName.first.name,
            rules.alternateName.first.count
        );
        checkErrorForASCII(altName.first.name, rules.alternateName.first.ascii);

        // Middle Name Check
        if (isGreaterThanMinLength(altName.middle.name)) {
            let names = altName.middle.name.split(' ');

            checkErrorForMaxLength(
                names[0],
                rules.alternateName.middle.length[0].maximum
            );

            if (names[1])
                checkErrorForMaxLength(
                    names[1],
                    rules.alternateName.middle.length[1].maximum
                );
        }
        checkErrorForASCII(
            altName.first.name,
            rules.alternateName.middle.ascii
        );

        // Last Name Check
        checkErrorForMinLength(
            altName.last.name,
            rules.alternateName.last.length.minimum
        );
        checkErrorForMaxLength(
            altName.last.name,
            rules.alternateName.last.length.maximum
        );
        checkErrorForMaxNames(
            altName.last.name,
            rules.alternateName.last.count
        );
        checkErrorForASCII(altName.last.name, rules.alternateName.last.ascii);
    });
</script>

<div>
    <Label class="text-lg font-bold">
        Next select an Alternate Spelling version of your name
    </Label>

    <br />

    <div class="flex w-full max-w-sm flex-col">
        <Label class="font-bold">Alternate Spelling</Label>
        <p>Next, enter your alternate (A-Z) spelling:</p>
        <br />
    </div>

    <InputLabel
        id="alt-first-name"
        label="Alternate Spelling of First Name:"
        placeholder="Max. 12 Characters"
        bind:value={altName.first}
    />

    <InputLabel
        id="alt-middle-name"
        label="Alternate Spelling of Middle Name(s):"
        placeholder="Max. 12 Characters (Max 2 Names)"
        bind:value={altName.middle}
    />

    <InputLabel
        id="alt-last-name"
        label="Alternate Spelling of Last Name:"
        placeholder="Max. 18 Characters"
        bind:value={altName.last}
    />

    <br />

    <div>
        <!-- Block for input errors -->
    </div>

    <div class="flex w-full max-w-sm flex-col border-b text-base">
        <Label class="font-bold text-base">
            Alternate Spelling Name you entered
        </Label>
        <i>(if you need to adjust anything, re-enter above)</i>
        <br />
        <p>
            {#if altName.last.name.length > 0}
                {altName.last.name},
            {:else}
                {altName.last.name}
            {/if}
            {altName.first.name}
            {altName.middle.name}
        </p>
    </div>

    <p>
        If you are happy with the name versions you entered above, please hit
        the ‘Next” button to see them together and take a screenshot
    </p>
</div>
