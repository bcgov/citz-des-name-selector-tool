<script lang="ts">
    import { Label } from './components/ui/label/index.js';
    import InputLabel from './components/ui/input-label/InputLabel.svelte';
    import { altName, errors } from './shared.svelte.ts';
    import {
        checkErrorForASCII,
        checkErrorForMaxLength,
        checkErrorForMaxNames,
        checkErrorForMinLength,
        isGreaterThanMinLength,
    } from './utils.ts';
    import { rules } from './rules-configuration.ts';
    import Alert from './components/ui/alert/alert.svelte';

    const checkFirstName = () => {
        checkErrorForMinLength(
            altName.first.name,
            rules.alternateName.first.length[0].minimum
        );
        checkErrorForMaxLength(
            altName.first.name,
            rules.alternateName.first.length[0].maximum
        );
        checkErrorForMaxNames(
            altName.first.name,
            rules.alternateName.first.count
        );
        checkErrorForASCII(altName.first.name, rules.alternateName.first.ascii);
    };

    const checkMiddleName = () => {
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
            altName.middle.name,
            rules.alternateName.middle.ascii
        );
    };

    const checkLastName = () => {
        checkErrorForMinLength(
            altName.last.name,
            rules.alternateName.last.length[0].minimum
        );
        checkErrorForMaxLength(
            altName.last.name,
            rules.alternateName.last.length[0].maximum
        );
        checkErrorForMaxNames(
            altName.last.name,
            rules.alternateName.last.count
        );
        checkErrorForASCII(altName.last.name, rules.alternateName.last.ascii);
    };
</script>

<div>
    <h1>Step 2: Enter an Alternate Spelling</h1>

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
        rules={rules.alternateName.first}
        bind:value={altName.first}
        onInput={checkFirstName}
    />

    <InputLabel
        id="alt-middle-name"
        label="Alternate Spelling of Middle Name(s):"
        placeholder="Max. 12 Characters (Max 2 Names)"
        rules={rules.alternateName.middle}
        bind:value={altName.middle}
        onInput={checkMiddleName}
    />

    <InputLabel
        id="alt-last-name"
        label="Alternate Spelling of Last Name:"
        placeholder="Max. 18 Characters"
        rules={rules.alternateName.last}
        bind:value={altName.last}
        onInput={checkLastName}
    />

    <br />

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

        {#if errors.hasZeroErrors()}
            <Alert message="Everything looks great!" success={true} />
        {:else if errors.hasErrors()}
            <Alert message="Alert: Please adjust highlighted field above" />
        {/if}
    </div>

    <p>
        If you are happy with the name versions you entered above, please hit
        the ‘Next” button to see them together and take a screenshot
    </p>
</div>
