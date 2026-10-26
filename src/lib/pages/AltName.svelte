<script lang="ts">
    import { Label } from '../components/ui/label/index.js';
    import InputLabel from '../components/ui/input-label/InputLabel.svelte';
    import { altName, errors } from '../shared.svelte.ts';
    import { rules } from '../rules-configuration.ts';
    import Alert from '../components/ui/alert/alert.svelte';
    import { checkMiddleName, checkName } from './utils/check-names.ts';
</script>

<div>
    <h1>Step 2: Enter an Alternate Spelling</h1>

    <Label class="text-lg font-bold">
        Next select an Alternate Spelling version of your name
    </Label>

    <br />

    <div class="flex w-full max-w-sm flex-col">
        <Label class="font-bold">Alternate Spelling</Label>
        <p>Next, enter your alternate &lpar;A-Z&rpar; spelling:</p>
        <br />
    </div>

    <InputLabel
        id="alt-first-name"
        label="Alternate Spelling of First Name:"
        placeholder="Max. 12 Characters"
        rules={rules.alternateName.first}
        isRequired
        checkASCII={true}
        handler={checkName}
        bind:value={altName.first}
    />

    <InputLabel
        id="alt-middle-name"
        label="Alternate Spelling of Middle Name(s):"
        placeholder="Max. 12 Characters (Max 2 Names)"
        rules={rules.alternateName.middle}
        isRequired={false}
        checkASCII={true}
        handler={checkMiddleName}
        bind:value={altName.middle}
    />

    <InputLabel
        id="alt-last-name"
        label="Alternate Spelling of Last Name:"
        placeholder="Max. 18 Characters"
        rules={rules.alternateName.last}
        isRequired
        checkASCII={true}
        handler={checkName}
        bind:value={altName.last}
    />

    <br />

    <div class="flex w-full max-w-sm flex-col border-b text-base">
        <Label class="font-bold text-base">
            Alternate Spelling Name you entered
        </Label>
        <i>&lpar;if you need to adjust anything, re-enter above&rpar;</i>
        <br />
        <p>
            {altName.first.name}
            {altName.middle.name}
            {altName.last.name}
        </p>

        {#if errors.hasZeroErrors()}
            <Alert message="Everything looks great!" success={true} />
        {:else if errors.hasErrors()}
            <Alert message="Alert: Please adjust highlighted field above" />
        {/if}
    </div>

    <p>
        If you are happy with the name versions you entered above, please hit
        the &ldquo;Next&rdquo; button to see them together and take a screenshot
    </p>
</div>
