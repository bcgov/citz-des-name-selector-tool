<script lang="ts">
    import { errors } from '$lib/shared.svelte';
    import Alert from '../alert/alert.svelte';

    let {
        id,
        label,
        placeholder,
        rules,
        isRequired = true,
        value = $bindable(),
    } = $props();
</script>

<div {id} class="bcds-TextField">
    <label for={`input-${id}`} class="bcds-TextField--label">
        {label}
        <span class="required">{isRequired ? '* required' : '(optional)'}</span>
    </label>

    <div id={`container-${id}`} class="bcds-TextField--container medium">
        <input
            id={`input-${id}`}
            class="bcds-TextField--input"
            required={isRequired}
            bind:value={value.name}
        />
    </div>

    {#if errors.hasError(rules.length[0].minimum.id)}
        <Alert message={errors.getMessage(rules.length[0].minimum.id)} />
    {/if}

    {#if errors.hasError(rules.length[0].maximum.id)}
        <Alert message={errors.getMessage(rules.length[0].maximum.id)} />
    {/if}

    {#if rules.length[1] && errors.hasError(rules.length[1].minimum.id)}
        <Alert message={errors.getMessage(rules.length[1].minimum.id)} />
    {/if}

    {#if rules.length[1] && errors.hasError(rules.length[1].maximum.id)}
        <Alert message={errors.getMessage(rules.length[1].maximum.id)} />
    {/if}

    {#if errors.hasError(rules.count.id)}
        <Alert message={errors.getMessage(rules.count.id)} />
    {/if}

    {#if rules.ascii && errors.hasError(rules.ascii.id)}
        <Alert message={errors.getMessage(rules.count.id)} />
    {/if}

    <span id={`span-${id}`} class="bcds-TextField--description">
        {placeholder}
    </span>
</div>

<style>
    .bcds-TextField {
        font: var(--typography-regular-body);
        padding: var(--layout-padding-none);
        color: var(--typography-color-primary);
        border: none;
        flex-grow: 1;
        margin-bottom: var(--layout-margin-large);
    }

    .bcds-TextField--label {
        font: var(--typography-regular-small-body);
        font-weight: 700;
        color: var(--typography-color-primary);
        padding: var(--layout-padding-xsmall) var(--layout-padding-none);

        .required {
            font-weight: 400;
        }
    }

    .bcds-TextField--container {
        color: var(--typography-color-primary);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--layout-margin-small);
        background: var(--surface-color-forms-default);
        box-sizing: border-box;
        border: var(--layout-border-width-small) solid
            var(--surface-color-border-default);
        border-radius: var(--layout-border-radius-medium);
        padding: var(--layout-padding-small) 12px;
    }

    .medium {
        height: var(--layout-margin-xxlarge);
        min-height: var(--layout-margin-xxlarge);
    }

    .bcds-TextField--input {
        font: var(--typography-regular-body);
        padding: var(--layout-padding-none);
        color: var(--typography-color-primary);
        border: none;
        flex-grow: 1;
    }

    .bcds-TextField--description {
        font: var(--typography-regular-small-body);
        color: var(--typography-color-secondary);
        padding: var(--layout-padding-xsmall) var(--layout-padding-none);
    }
</style>
