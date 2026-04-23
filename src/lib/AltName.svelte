<script lang="ts">
    import { Label } from './components/ui/label/index.js';
    import InputLabel from './components/ui/input-label/InputLabel.svelte';
    import { altName } from './shared.svelte.ts';
    import {
        isGreaterThanMinLength,
        isLessThanOrEqualToMaxLength,
        isLessThanOrEqualToMaxNames,
    } from './utils.ts';
    import { rules } from './rules-configuration.ts';

    $effect(() => {
        console.log('========= FIRST NAME =========');
        // First Name Check
        if (
            !isLessThanOrEqualToMaxLength(
                altName.first.name,
                rules.alternateName.first.length.maximum.value
            )
        )
            console.log(rules.alternateName.first.length.maximum.errorText);
        else if (!isGreaterThanMinLength(altName.first.name))
            console.log(rules.alternateName.first.length.minimum.errorText);
        else if (
            !isLessThanOrEqualToMaxNames(
                altName.first.name,
                rules.alternateName.first.count.value
            )
        )
            console.log(rules.alternateName.first.count.errorText);

        console.log('========= MIDDLE NAME =========');
        // Middle Name Check
        if (isGreaterThanMinLength(altName.middle.name)) {
            if (
                isLessThanOrEqualToMaxNames(
                    altName.middle.name,
                    rules.alternateName.middle.count.value
                )
            )
                console.log(rules.alternateName.middle.count.errorText);
            else {
                let names = altName.middle.name.split(' ');
                if (
                    isLessThanOrEqualToMaxLength(
                        names[0],
                        rules.alternateName.middle.length[0].maximum.value
                    )
                )
                    console.log(
                        rules.alternateName.middle.length[0].maximum.errorText
                    );

                if (
                    names[1] &&
                    isLessThanOrEqualToMaxLength(
                        names[1],
                        rules.alternateName.middle.length[1].maximum.value
                    )
                )
                    console.log(
                        rules.alternateName.middle.length[1].maximum.errorText
                    );
            }
        }

        console.log('========= LAST NAME =========');
        // Last Name Check
        if (
            isLessThanOrEqualToMaxLength(
                altName.last.name,
                rules.alternateName.last.length.maximum.value
            )
        )
            console.log(rules.alternateName.last.length.maximum.errorText);
        else if (
            isLessThanOrEqualToMaxNames(
                altName.last.name,
                rules.alternateName.last.count.value
            )
        )
            console.log(rules.alternateName.last.count.errorText);
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
